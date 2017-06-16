(ns district0x.events
  (:require
    [ajax.core :as ajax]
    [akiroz.re-frame.storage :as re-frame-storage]
    [cljs-time.coerce :as time-coerce]
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [cljs-web3.personal :as web3-personal]
    [cljs-web3.utils :as web3-utils]
    [cljs.spec :as s]
    [clojure.data :as data]
    [clojure.set :as set]
    [clojure.string :as string]
    [day8.re-frame.async-flow-fx]
    [day8.re-frame.http-fx]
    [district0x.big-number :as bn]
    [district0x.constants :as constants]
    [district0x.dispatch-fx]
    [district0x.interval-fx]
    [district0x.utils :as u]
    [district0x.window-fx]
    [goog.string :as gstring]
    [goog.string.format]
    [madvas.re-frame.google-analytics-fx]
    [madvas.re-frame.web3-fx]
    [medley.core :as medley]
    [re-frame.core :as re-frame :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug reg-fx console dispatch]]))

(re-frame-storage/reg-co-fx! :contribution {:fx :localstorage :cofx :localstorage})

(defn check-and-throw
  [a-spec db]
  (when goog.DEBUG
    (when-not (s/valid? a-spec db)
      (.error js/console (s/explain-str a-spec db))
      (throw "DB Spec check failed"))))

(def check-spec-interceptor (after (partial check-and-throw :district0x.db/db)))

(def interceptors [trim-v check-spec-interceptor])

(defn get-contract [db key]
  (get-in db [:smart-contracts key]))

(defn get-instance [db key]
  (get-in db [:smart-contracts key :instance]))

(defn all-contracts-loaded? [db]
  (every? #(and (:abi %) (if goog.DEBUG (:bin %) true)) (vals (:smart-contracts db))))

(defn all-contracts-deployed? [db]
  (every? #(and (:instance %) (:address %)) (vals (:smart-contracts db))))

(defn contract-xhrio [contract-name code-type version on-success on-failure]
  {:method :get
   :uri (gstring/format "./contracts/build/%s.%s?v=%s" contract-name (name code-type) (if goog.DEBUG
                                                                                        (.getTime (js/Date.))
                                                                                        version))
   :timeout 6000
   :response-format (if (= code-type :abi) (ajax/json-response-format) (ajax/text-response-format))
   :on-success on-success
   :on-failure on-failure})

(def log-used-gas
  (re-frame/->interceptor
    :id :log-used-gas
    :before (fn [{:keys [coeffects] :as context}]
              (let [event (:event coeffects)
                    {:keys [gas-used] :as receipt} (last event)
                    gas-limit (first event)]
                (let [gas-used-percent (* (/ gas-used gas-limit) 100)
                      gas-used-percent-str (gstring/format "%.2f%" gas-used-percent)]
                  (console :log "gas used:" gas-used-percent-str gas-used (second event))
                  (-> context
                    (update-in [:coeffects :event (dec (count event))]
                               merge
                               {:success? (< gas-used gas-limit)
                                :gas-used-percent gas-used-percent-str})
                    (update-in [:coeffects :event] #(-> % rest vec))
                    (assoc-in [:coeffects :db :last-transaction-gas-used] gas-used-percent)))))
    :after (fn [context]
             (let [event (:event (:coeffects context))]
               (update context :effects merge
                       {:ga/event ["log-used-gas"
                                   (name (:fn-key (first event)))
                                   (str (select-keys (last event) [:gas-used :gas-used-percent :transaction-hash
                                                                   :success?]))]})))))

(defn initialize-db [default-db localstorage]
  (let [web3 (if constants/provides-web3?
               (aget js/window "web3")
               (web3/create-web3 (:node-url default-db)))]
    (as-> default-db db
          (merge-with #(if (map? %1) (merge-with merge %1 %2) %2) db localstorage)
          (assoc db :web3 web3))))

(reg-event-fx
  :district0x/initialize
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [localstorage]} [{:keys [:default-db :conversion-rates :effects]}]]
    (let [db (district0x.events/initialize-db default-db localstorage)]
      (merge
        {:db db
         :ga/page-view [(u/current-location-hash)]
         :window/on-resize {:dispatch [:district0x.window/resized]
                            :resize-interval 166}
         :dispatch [:district0x/load-my-addresses]}
        (when conversion-rates
          {:district0x/dispatch-n [[:district0x/load-conversion-rates (:currencies conversion-rates)]]
           :dispatch-interval {:dispatch [:district0x/load-conversion-rates (:currencies conversion-rates)]
                               :ms (or (:ms conversion-rates) 60000)
                               :db-path [:district0x/load-conversion-rates-interval]}})
        effects))))

(reg-event-fx
  :district0x/load-my-addresses
  interceptors
  (fn [{:keys [db]}]
    (if constants/provides-web3?
      {:dispatch [:district0x/my-addresses-loaded (web3-eth/accounts (:web3 db))]}
      (if (:load-node-addresses? db)
        {:web3-fx.blockchain/fns
         {:web3 (:web3 db)
          :fns [[web3-eth/accounts
                 [:district0x/my-addresses-loaded]
                 [:district0x/blockchain-connection-error :initialize]]]}}
        {:dispatch [:district0x/my-addresses-loaded []]}))))

(reg-event-fx
  :district0x/load-smart-contracts
  interceptors
  (fn [{:keys [db]} [{:keys [:version]}]]
    {:http-xhrio
     (flatten
       (for [[key {:keys [name]}] (:smart-contracts db)]
         (for [code-type (if goog.DEBUG [:abi :bin] [:abi])]
           (contract-xhrio name
                           code-type
                           version
                           [:district0x/smart-contract-loaded key code-type]
                           [:district0x.log/error :district0x/load-smart-contracts]))))}))

(reg-event-fx
  :district0x/clear-smart-contracts
  interceptors
  (fn [{:keys [db]}]
    {:db (update db :smart-contracts (partial medley/map-kv
                                              (fn [contract-key contract]
                                                [contract-key (dissoc contract :abi :bin :address :instance)])))}))

(reg-event-fx
  :district0x/smart-contract-loaded
  interceptors
  (fn [{:keys [db]} [contract-key code-type code]]
    (let [code (if (= code-type :abi) (clj->js code) (str "0x" code))
          contract (get-contract db contract-key)
          contract-address (:address contract)]
      (let [new-db (cond-> db
                     true
                     (assoc-in [:smart-contracts contract-key code-type] code)

                     (= code-type :abi)
                     (update-in [:smart-contracts contract-key] merge
                                (when contract-address
                                  {:instance (web3-eth/contract-at (:web3 db) code contract-address)})))]
        (merge
          {:db new-db
           :district0x/dispatch-n [(when (all-contracts-loaded? new-db)
                                     [:district0x/smart-contracts-loaded])]})))))

(reg-event-fx
  :district0x/smart-contracts-loaded
  interceptors
  (fn [{:keys [db]}]
    ))

(reg-event-fx
  :district0x/my-addresses-loaded
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [addresses]]
    (let [active-address (if (contains? (set addresses) (:active-address localstorage))
                           (:active-address localstorage)
                           (first addresses))]
      {:db (-> db
             (assoc :my-addresses addresses)
             (assoc :active-address active-address))})))

(reg-event-fx
  :district0x/watch-eth-balances
  interceptors
  (fn [{:keys [db]} [{:keys [:addresses :on-address-balance-loaded]
                      :or {on-address-balance-loaded [:district0x/address-balance-loaded :eth]}}]]
    (when (seq addresses)
      {:web3-fx.blockchain/balances
       {:web3 (:web3 db)
        :watch? true
        :blockchain-filter-opts "latest"
        :db-path [:district0x/watch-eth-balances]
        :addresses addresses
        :dispatches [on-address-balance-loaded
                     [:district0x/blockchain-connection-error :district0x/watch-eth-balances]]}})))

(reg-event-fx
  :district0x/load-eth-balances
  interceptors
  (fn [{:keys [db]} [{:keys [:addresses :on-address-balance-loaded]
                      :or {on-address-balance-loaded [:district0x/address-balance-loaded :eth]}}]]
    (when (seq addresses)
      {:web3-fx.blockchain/balances
       {:web3 (:web3 db)
        :addresses addresses
        :dispatches [on-address-balance-loaded
                     [:district0x/blockchain-connection-error :district0x/watch-token-balances]]}})))

(reg-event-fx
  :district0x/watch-my-eth-balances
  interceptors
  (fn [{:keys [db]} [args]]
    (let [addresses (:my-addresses db)]
      {:dispatch [:district0x/watch-eth-balances (assoc args :addresses addresses)]})))

(reg-event-fx
  :district0x/watch-token-balances
  interceptors
  (fn [{:keys [db]} [{:keys [:addresses :instance :token-code]}]]
    (when (seq addresses)
      {:web3-fx.blockchain/balances
       {:web3 (:web3 db)
        :watch? true
        :blockchain-filter-opts "latest"
        :db-path [:district0x/watch-token-balances]
        :addresses addresses
        :instance instance
        :dispatches [[:district0x/address-balance-loaded token-code]
                     [:district0x/blockchain-connection-error :district0x/watch-token-balances]]}})))

(reg-event-fx
  :district0x/load-token-balances
  interceptors
  (fn [{:keys [db]} [{:keys [:addresses :instance :token-code]}]]
    (when (seq addresses)
      {:web3-fx.blockchain/balances
       {:web3 (:web3 db)
        :addresses addresses
        :instance instance
        :dispatches [[:district0x/address-balance-loaded token-code]
                     [:district0x/blockchain-connection-error :district0x/watch-token-balances]]}})))

(reg-event-fx
  :district0x/watch-my-token-balances
  interceptors
  (fn [{:keys [db]} [args]]
    (let [addresses (:my-addresses db)]
      {:dispatch [:district0x/watch-token-balances (assoc args :addresses addresses)]})))

(reg-event-fx
  :district0x/address-balance-loaded
  interceptors
  (fn [{:keys [db]} [token balance address :as a]]
    {:db (assoc-in db [:balances address token] (u/big-num->ether balance))}))

(reg-event-fx
  :district0x/load-conversion-rates
  interceptors
  (fn [{:keys [db]} [currencies]]
    {:http-xhrio {:method :get
                  :uri (str "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms="
                            (string/join "," (map name currencies)))
                  :timeout 20000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [:district0x/conversion-rates-loaded]
                  :on-failure [:district0x.log/error :district0x/conversion-rates-loaded]}}))

(reg-event-db
  :district0x/conversion-rates-loaded
  interceptors
  (fn [db [response]]
    (update db :conversion-rates merge response)))

(reg-event-fx
  :district0x/set-active-address
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [address]]
    {:db (-> db
           (assoc :active-address address))
     :localstorage (assoc localstorage :active-address address)}))

(reg-event-db
  :district0x.form/set-value
  interceptors
  (fn [db [form-key field-key value & [validator]]]
    (let [validator (cond
                      (fn? validator) validator
                      (boolean? validator) (constantly validator)
                      :else validator)]
      (cond-> db
        true (assoc-in [form-key :data field-key] value)

        (or (and validator (validator value))
            (nil? validator))
        (update-in [form-key :errors] (comp set (partial remove #{field-key})))

        (and validator (not (validator value)))
        (update-in [form-key :errors] conj field-key)))))

(reg-event-fx
  :district0x.form/submit
  interceptors
  (fn [{:keys [db]} [{:keys [:form-key :fn-key :fn-args :form-data :value :address] :as props}]]
    (let [form (get db form-key)
          {:keys [:web3 :active-address]} db
          {:keys [:gas-limit]} form]
      {:web3-fx.contract/state-fns
       {:web3 web3
        :db-path [:contract/state-fns]
        :fns [(concat
                [(get-instance db (keyword (namespace fn-key)))
                 fn-key]
                (u/map->vec form-data fn-args)
                [(merge
                   {:gas gas-limit
                    :from (or address active-address)}
                   (when value
                     {:value (js/parseInt value)}))
                 [:district0x.form/start-loading form-key]
                 [:district0x.log/error :district0x.form/submit fn-key form-data value address]
                 [:district0x.form/receipt-loaded gas-limit props]])]}})))

(reg-event-fx
  :district0x.form/receipt-loaded
  [interceptors log-used-gas]
  (fn [{:keys [db]} [{:keys [:receipt-dispatch :receipt-dispatch-n :form-data :form-key :error-dispatch]
                      :or {error-dispatch [:district0x.snackbar/show-transaction-error]}}
                     {:keys [success?]}]]
    (merge
      (when form-key
        {:db (assoc-in db [form-key :loading?] false)})
      (when (and success? receipt-dispatch)
        {:dispatch (conj receipt-dispatch form-data)})
      (when (and success? receipt-dispatch-n)
        {:dispatch-n (map #(conj % form-data) receipt-dispatch-n)})
      (when-not success?
        {:dispatch error-dispatch}))))

(reg-event-db
  :district0x.form/start-loading
  interceptors
  (fn [db [form-key]]
    (assoc-in db [form-key :loading?] true)))

(reg-event-db
  :district0x.form/stop-loading
  interceptors
  (fn [db [form-key]]
    (assoc-in db [form-key :loading?] false)))

(reg-event-db
  :district0x.form/add-error
  interceptors
  (fn [db [form-key error]]
    (update-in db [form-key :errors] conj error)))

(reg-event-db
  :district0x.form/remove-error
  interceptors
  (fn [db [form-key error]]
    (update-in db [form-key :errors] (comp set (partial remove #{error})))))


(reg-event-fx
  :district0x.contract/state-fn-call
  interceptors
  (fn [{:keys [db]} [{:keys [:contract-key :contract-method :args :transaction-opts] :as opts}]]
    (let [transaction-opts (merge {:gas 3800000
                                   :from (:active-address db)}
                                  transaction-opts)]
      {:web3-fx.contract/state-fns
       {:web3 (:web3 db)
        :db-path [:contract/state-fns]
        :fns [(concat [(get-instance db contract-key)
                       contract-method]
                      args
                      [transaction-opts
                       [:district0x.log/info]
                       [:district0x.log/error contract-method]
                       [:district0x.form/receipt-loaded (:gas transaction-opts) (assoc opts :fn-key contract-method)]])]}})))

(reg-event-fx
  :district0x.contract/constant-fn-call
  interceptors
  (fn [{:keys [db]} [contract-key & args]]
    {:web3-fx.contract/constant-fns
     {:fns [(concat [(get-instance db contract-key)] args [[:district0x.log/info]
                                                           [:district0x.log/error]])]}}))

(reg-event-fx
  :district0x/clear-localstorage
  interceptors
  (fn [_]
    {:localstorage nil}))

(reg-event-fx
  :district0x.log/print-db
  interceptors
  (fn [{:keys [:db]}]
    (print.foo/look db)
    nil))

(reg-event-fx
  :district0x.log/error
  interceptors
  (fn [{:keys [:db]} errors]
    (apply console :error errors)
    {:db db
     :ga/event ["error" (first errors) (str (rest errors))]}))

(reg-event-fx
  :district0x.log/info
  interceptors
  (fn [db result]
    (apply console :log (bn/->numbers (if (and (not (string? result)) (some sequential? result))
                                        (map bn/->numbers result)
                                        result)))))

(reg-event-db
  :district0x.snackbar/close
  interceptors
  (fn [db _]
    (assoc-in db [:snackbar :open?] false)))

(reg-event-fx
  :district0x.snackbar/show-message
  interceptors
  (fn [{:keys [db]} [message]]
    {:db (update db :snackbar merge
                 {:open? true
                  :message message
                  :action nil
                  :on-action-touch-tap nil})}))

(reg-event-fx
  :district0x.snackbar/show-transaction-error
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:district0x.snackbar/show-message
                {:message "Sorry, your transaction hasn't been processed"}]}))

(reg-event-fx
  :district0x.snackbar/show-message-redirect-action
  interceptors
  (fn [{:keys [db]} [message route route-params routes]]
    {:db (update db :snackbar merge
                 {:open? true
                  :message message
                  :action "SHOW ME"
                  :on-action-touch-tap #(dispatch [:district0x.location/set-hash route route-params routes])})}))

(reg-event-db
  :district0x.dialog/close
  interceptors
  (fn [db _]
    (assoc-in db [:dialog :open?] false)))

(reg-event-fx
  :district0x/blockchain-connection-error
  interceptors
  (fn [{:keys [:db]} errors]
    (apply console :error "Blockchain Connection Error:" errors)
    {:db (assoc db :blockchain-connection-error? true)
     :dispatch [:district0x.snackbar/show-message "Sorry, we have trouble connecting into the Ethereum blockchain"]}))

(reg-event-fx
  :district0x/unlock-account
  interceptors
  (fn [{:keys [db]} [address password seconds]]
    {:web3-fx.blockchain/fns
     {:web3 (:web3 db)
      :fns [[web3-personal/unlock-account address password (or seconds 999999)
             [:district0x.log/info]
             [:district0x.log/error :blockchain/unlock-account]]]}}))

(reg-event-fx
  :district0x.location/set-query
  interceptors
  (fn [_ args]
    {:location/set-query args}))

(reg-event-fx
  :district0x.location/set-hash
  interceptors
  (fn [{:keys [db]} args]
    {:location/set-hash args}))

(reg-event-fx
  :district0x.window/resized
  interceptors
  (fn [{:keys [db]} [width]]
    {:db (assoc db :window-width-size (u/get-window-width-size width))}))

(reg-event-fx
  :district0x.window/scroll-to-top
  interceptors
  (fn []
    {:window/scroll-to-top true}))
