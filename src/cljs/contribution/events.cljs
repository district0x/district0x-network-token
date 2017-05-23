(ns contribution.events
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
    [contribution.constants :as constants]
    [contribution.db :refer [default-db generate-mode?]]
    [contribution.interval-fx]
    [contribution.window-fx]
    [day8.re-frame.async-flow-fx]
    [day8.re-frame.http-fx]
    [goog.string :as gstring]
    [goog.string.format]
    [madvas.re-frame.google-analytics-fx]
    [madvas.re-frame.web3-fx]
    [medley.core :as medley]
    [re-frame.core :as re-frame :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug reg-fx console dispatch dispatch-sync]]
    [contribution.utils :as u]))

(re-frame-storage/reg-co-fx! :contribution {:fx :localstorage :cofx :localstorage})

(defn check-and-throw
  [a-spec db]
  (when goog.DEBUG
    (when-not (s/valid? a-spec db)
      (.error js/console (s/explain-str a-spec db))
      (throw "Spec check failed"))))

(def check-spec-interceptor (after (partial check-and-throw :contribution.db/db)))

(def interceptors [check-spec-interceptor
                   #_(when ^boolean goog.DEBUG debug)
                   trim-v])

(defn contract-xhrio [contract-name code-type on-success on-failure]
  {:method :get
   :uri (gstring/format "./contracts/build/%s.%s?v=%s" contract-name (name code-type) (if goog.DEBUG
                                                                                        (.getTime (js/Date.))
                                                                                        constants/contracts-version))
   :timeout 6000
   :response-format (if (= code-type :abi) (ajax/json-response-format) (ajax/text-response-format))
   :on-success on-success
   :on-failure on-failure})

(defn get-contract [db key]
  (get-in db [:eth/contracts key]))

(defn get-instance [db key]
  (get-in db [:eth/contracts key :instance]))

(defn all-contracts-loaded? [db]
  (every? #(and (:abi %) (if goog.DEBUG (:bin %) true)) (vals (:eth/contracts db))))

(defn all-contracts-deployed? [db]
  (every? #(and (:instance %) (:address %)) (vals (:eth/contracts db))))

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

(reg-event-fx
  :initialize
  (inject-cofx :localstorage)
  (fn [{:keys [localstorage]}]
    (let [provides-web3? (boolean (aget js/window "web3"))
          web3 (if provides-web3? (aget js/window "web3") (web3/create-web3 (:node-url default-db)))
          db (as-> default-db db
                   (merge-with #(if (map? %1) (merge-with merge %1 %2) %2) db localstorage)
                   (assoc db :provides-web3? provides-web3?)
                   (assoc db :web3 web3))]
      (merge
        {:db db
         :dispatch-n [[:load-conversion-rates]
                      [:start-updating-now]]
         :ga/page-view [(u/current-location-hash)]
         :async-flow {:first-dispatch [:load-eth-contracts]
                      :rules [{:when :seen?
                               :events [:eth-contracts-loaded :blockchain/my-addresses-loaded]
                               :dispatch-n [[:contract.contribution/addresses->owners?]
                                            [:contract.d0x-token/watch-balances]]
                               :halt? true}
                              {:when :seen?
                               :events [:eth-contracts-loaded]
                               :dispatch-n [[:contract.contribution/get-contrib-period constants/current-contrib-period]
                                            [:contract.contribution/get-configuration]
                                            [:contract.contribution/setup-event-listeners]]
                               :halt? true}]}
         :window/on-resize {:dispatch [:window/on-resize]
                            :resize-interval 166}
         :dispatch-interval {:dispatch [:load-conversion-rates]
                             :ms 60000
                             :db-path [:load-all-conversion-rates-interval]}}
        (if (or provides-web3? (:load-node-addresses? default-db))
          {:web3-fx.blockchain/fns
           {:web3 web3
            :fns [[web3-eth/accounts :blockchain/my-addresses-loaded [:blockchain/on-error :initialize]]]}}
          {:dispatch [:blockchain/my-addresses-loaded []]})))))

(reg-event-fx
  :start-updating-now
  interceptors
  (fn [{:keys [db]}]
    {:dispatch-interval {:dispatch [:update-now]
                         :ms 1000
                         :db-path [:update-now-interval]}}))

(reg-event-fx
  :update-now
  interceptors
  (fn [{:keys [db]}]
    {:db (assoc db :now (t/now))}))

(reg-event-fx
  :load-eth-contracts
  interceptors
  (fn [{:keys [db]}]
    {:http-xhrio
     (flatten
       (for [[key {:keys [name]}] (:eth/contracts db)]
         (for [code-type (if goog.DEBUG [:abi :bin] [:abi])]
           (contract-xhrio name code-type [:contract/loaded key code-type] [:log-error :load-eth-contracts]))))}))

(reg-event-fx
  :contract/loaded
  interceptors
  (fn [{:keys [db]} [contract-key code-type code]]
    (let [code (if (= code-type :abi) (clj->js code) (str "0x" code))
          contract (get-contract db contract-key)
          contract-address (:address contract)]
      (let [new-db (cond-> db
                     true
                     (assoc-in [:eth/contracts contract-key code-type] code)

                     (= code-type :abi)
                     (update-in [:eth/contracts contract-key] merge
                                (when contract-address
                                  {:instance (web3-eth/contract-at (:web3 db) code contract-address)})))]
        (merge
          {:db new-db
           :dispatch-n (remove nil?
                               [(when (all-contracts-loaded? new-db)
                                  [:eth-contracts-loaded])])})))))

(reg-event-fx
  :eth-contracts-loaded
  interceptors
  (fn [{:keys [db]}]
    ))

(reg-event-fx
  :contracts/deploy-all
  interceptors
  (fn [{:keys [db]} [contribution-args address-index]]
    (let [contribution (get-contract db :contribution)]
      {:web3-fx.blockchain/fns
       {:web3 (:web3 db)
        :fns [[web3-eth/contract-new
               (:abi contribution)
               (:contribution/owners contribution-args)
               (:contribution/required-count contribution-args)
               (:contribution/wallet contribution-args)
               (:contribution/founder1 contribution-args)
               (:contribution/founder2 contribution-args)
               (:contribution/early-sponsor contribution-args)
               (:contribution/advisers contribution-args)
               {:gas u/max-gas-limit
                :data (:bin contribution)
                :from (if address-index
                        (nth (:my-addresses db) address-index)
                        (:active-address db))}
               [:contract/contribution-deployed address-index]
               [:log-error :contracts/deploy-all]]]}})))

(reg-event-fx
  :contract/contribution-deployed
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [address-index instance]]
    (when-let [contract-address (aget instance "address")]
      (console :log :contribution " deployed at " contract-address)
      {:db (update-in db [:eth/contracts :contribution] merge {:address contract-address :instance instance})
       :localstorage (assoc-in localstorage [:eth/contracts :contribution] {:address contract-address})
       :dispatch [:contracts/deploy-d0x-token address-index]})))

(reg-event-fx
  :contracts/deploy-d0x-token
  interceptors
  (fn [{:keys [db]} [address-index]]
    (let [d0x-token (get-contract db :d0x-token)
          contribution-address (:address (get-contract db :contribution))]
      {:web3-fx.blockchain/fns
       {:web3 (:web3 db)
        :fns [[web3-eth/contract-new
               (:abi d0x-token)
               contribution-address
               {:gas u/max-gas-limit
                :data (:bin d0x-token)
                :from (if address-index
                        (nth (:my-addresses db) address-index)
                        (:active-address db))}
               [:contract/d0x-token-deployed address-index]
               [:log-error :contracts/deploy-d0x-token]]]}})))

(reg-event-fx
  :contract/d0x-token-deployed
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [address-index instance]]
    (when-let [contract-address (aget instance "address")]
      (console :log :d0x-token " deployed at " contract-address)
      {:db (update-in db [:eth/contracts :d0x-token] merge {:address contract-address :instance instance})
       :localstorage (assoc-in localstorage [:eth/contracts :d0x-token] {:address contract-address})
       :dispatch [:contract.contribution/set-d0x-token address-index]})))

(reg-event-fx
  :contract.contribution/set-d0x-token
  interceptors
  (fn [{:keys [db]} [address-index]]
    (let [d0x-token-address (:address (get-contract db :d0x-token))
          gas-limit 300000]
      {:web3-fx.contract/state-fns
       {:web3 (:web3 db)
        :db-path [:contract/state-fns]
        :fns [[(get-instance db :contribution)
               :set-d0x-token
               d0x-token-address
               {:gas gas-limit
                :from (if address-index
                        (nth (:my-addresses db) address-index)
                        (:active-address db))}
               :contract/transaction-sent
               [:contract/transaction-error :contract/state-call]
               [:contract/transaction-receipt :set-d0x-token gas-limit nil nil]]]}})))

(reg-event-fx
  :contract.contribution/setup-event-listeners
  interceptors
  (fn [{:keys [db]}]
    (let [contribution-instance (get-instance db :contribution)]
      {:web3-fx.contract/events
       {:db-path [:web3-event-listeners]
        :events [[contribution-instance :on-contribution {:contrib-period-index constants/current-contrib-period}
                  "latest" :contract.contribution/on-contribution [:log-error :on-contribution]]
                 [contribution-instance :on-soft-cap-reached {:contrib-period-index constants/current-contrib-period}
                  "latest" :contract.contribution/on-soft-cap-reached [:log-error :on-soft-cap-reached]]
                 [contribution-instance :on-hard-cap-reached {:contrib-period-index constants/current-contrib-period}
                  "latest" :contract.contribution/on-hard-cap-reached [:log-error :on-hard-cap-reached]]
                 [contribution-instance :on-emergency-changed {}
                  "latest" :contract.contribution/on-emergency-changed [:log-error :on-emergency-changed]]]}})))

(reg-event-fx
  :contract.contribution/on-contribution
  interceptors
  (fn [{:keys [db]} [{:keys [:contrib-period-index :total-contributed :contributors-count]}]]
    (let [contrib-period-index (u/big-num->num contrib-period-index)
          total-contributed (u/big-num->eth-num total-contributed)
          contributors-count (u/big-num->num contributors-count)]
      (when (< (get-in db [:contribution/contrib-periods contrib-period-index :contrib-period/total-contributed])
               total-contributed)
        {:db (update-in db [:contribution/contrib-periods contrib-period-index] merge
                        {:contrib-period/total-contributed total-contributed
                         :contrib-period/contributors-count contributors-count})}))))

(reg-event-fx
  :contract.contribution/on-soft-cap-reached
  interceptors
  (fn [{:keys [db]} [{:keys [:contrib-period-index :end-time]}]]
    {:db (update-in db [:contribution/contrib-periods (u/big-num->num contrib-period-index)] merge
                    {:contrib-period/end-time (u/big-num->date-time end-time)
                     :contrib-period/soft-cap-reached? true})
     :dispatch [:snackbar/show-message "Amazing! Soft Cap was just reached!"]}))

(reg-event-fx
  :contract.contribution/on-hard-cap-reached
  interceptors
  (fn [{:keys [db]} [{:keys [:contrib-period-index :end-time]}]]
    {:db (update-in db [:contribution/contrib-periods (u/big-num->num contrib-period-index)] merge
                    {:contrib-period/end-time (u/big-num->date-time end-time)
                     :contrib-period/hard-cap-reached? true})
     :dispatch [:snackbar/show-message "Unbelievable! Our Hard Cap was reached! The Sale is over now"]}))

(reg-event-fx
  :contract.contribution/on-emergency-changed
  interceptors
  (fn [{:keys [db]} [{:keys [:is-stopped]}]]
    {:db (assoc db :contribution/stopped? is-stopped)
     :dispatch [:snackbar/show-message (if is-stopped
                                         "Contribution was temporarily paused due to emergency"
                                         "Contribution was just resumed")]}))

(reg-event-fx
  :contract.contribution/set-contrib-period
  interceptors
  (fn [{:keys [db]} [args address-index]]
    {:dispatch [:contract/state-call
                {:contract-key :contribution
                 :contract-method :set-contrib-period
                 :args (u/contrib-period-args args)
                 :transaction-opts {:gas 3800000
                                    :from (if address-index
                                            (nth (:my-addresses db) address-index)
                                            (:active-address db))}
                 :receipt-dispatch [:contract.contribution/get-contrib-period constants/current-contrib-period]}]}))

(reg-event-fx
  :contract.contribution/get-contrib-period
  interceptors
  (fn [{:keys [db]} [period-index]]
    {:db (assoc-in db [:contribution/contrib-periods period-index :contrib-period/loading?] true)
     :web3-fx.contract/constant-fns
     {:fns [[(get-instance db :contribution)
             :get-contrib-period
             period-index
             [:contract.contribution/get-contrib-period-loaded period-index]
             [:log-error :contract.contribution/get-contrib-period]]]}}))

(reg-event-fx
  :contract.contribution/get-contrib-period-loaded
  interceptors
  (fn [{:keys [db]} [period-index contrib-period]]
    {:db (assoc-in db [:contribution/contrib-periods period-index]
                   (merge (u/parse-get-contrib-period contrib-period)
                          {:contrib-period/loading? false}))}))

(reg-event-fx
  :contract.contribution/get-configuration
  interceptors
  (fn [{:keys [db]}]
    {:web3-fx.contract/constant-fns
     {:fns [[(get-instance db :contribution)
             :get-configuration
             [:contract.contribution/get-configuration-loaded]
             [:log-error :contract.contribution/get-contrib-period]]]}}))

(reg-event-fx
  :contract.contribution/get-configuration-loaded
  interceptors
  (fn [{:keys [db]} [configuration]]
    (let [config (u/parse-get-configuration configuration)]
      (if-not (u/zero-address? (:contribution/wallet config))
        {:db (merge db config)}
        {:db (assoc db :contracts-not-found? true)}))))

(reg-event-fx
  :contract.contribution/contribute
  interceptors
  (fn [{:keys [db]} [form-data address]]
    {:dispatch [:form/submit
                {:form-data form-data
                 :address address
                 :value (u/num->wei (:contribution/amount form-data))
                 :fn-key :contribution/contribute
                 :form-key :form.contribution/contribute
                 :receipt-dispatch [:snackbar/show-message "Thank you! Your contribution was successfully sent"]}]}))

(reg-event-fx
  :contract.contribution/enable-contrib-period
  interceptors
  (fn [{:keys [db]} [form-data address]]
    {:dispatch [:form/submit
                {:form-data form-data
                 :address address
                 :fn-key :contribution/enable-contrib-period
                 :form-key :form.contribution/enable-contrib-period
                 :receipt-dispatch-n [[:snackbar/show-message "Your agreement to enable contribution was successfully sent"]
                                      [:contract.contribution/get-contrib-period constants/current-contrib-period]]}]}))

(reg-event-fx
  :contract.contribution/emergency-stop
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:contract/state-call {:contract-key :contribution
                                      :contract-method :emergency-stop
                                      :transaction-opts {:gas 200000}}]}))

(reg-event-fx
  :contract.contribution/release
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:contract/state-call {:contract-key :contribution
                                      :contract-method :release
                                      :transaction-opts {:gas 200000}}]}))

(reg-event-fx
  :contract.contribution/compensate-contributors
  interceptors
  (fn [{:keys [db]} [{:keys [:contribution/period-index :offset :limit]}]]
    {:dispatch [:contract/state-call {:contract-key :contribution
                                      :contract-method :compensate-contributors
                                      :args [period-index offset limit]
                                      :transaction-opts {:gas 3500000}}]}))

(reg-event-fx
  :blockchain/my-addresses-loaded
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [addresses]]
    (let [active-address (if (contains? (set addresses) (:active-address localstorage))
                           (:active-address localstorage)
                           (first addresses))]
      (merge
        {:db (-> db
               (assoc :my-addresses addresses)
               (assoc :active-address active-address))}
        (when (seq addresses)
          {:web3-fx.blockchain/balances
           {:web3 (:web3 db)
            :watch? true
            :blockchain-filter-opts "latest"
            :db-path [:blockchain :balances]
            :addresses addresses
            :dispatches [[:blockchain/address-balance-loaded :eth]
                         [:blockchain/on-error :blockchain/my-addresses-loaded]]}})))))

(reg-event-fx
  :blockchain/address-balance-loaded
  interceptors
  (fn [{:keys [db]} [token balance address]]
    {:db (assoc-in db [:blockchain/balances address token] (u/big-num->eth-num balance))}))

(reg-event-fx
  :contract.contribution/addresses->owners?
  [interceptors]
  (fn [{:keys [db]} [addresses]]
    {:web3-fx.contract/constant-fns
     {:fns (for [address (or addresses (:my-addresses db))]
             [(get-instance db :contribution)
              :is-owner
              address
              [:contract.contribution/address->owner?-loaded address]
              [:log-error :contract.contribution/addresses->owners?]])}}))

(reg-event-fx
  :contract.contribution/address->owner?-loaded
  [interceptors]
  (fn [{:keys [db]} [address owner?]]
    {:db (assoc-in db [:contribution/address->owner? address] owner?)}))

(reg-event-fx
  :set-active-address
  [interceptors (inject-cofx :localstorage)]
  (fn [{:keys [db localstorage]} [address]]
    {:db (-> db
           (assoc :active-address address))
     :localstorage (assoc localstorage :active-address address)}))

(reg-event-fx
  :contract.d0x-token/watch-balances
  [interceptors]
  (fn [{:keys [db]} [addresses]]
    {:web3-fx.blockchain/balances
     {:web3 (:web3 db)
      :watch? true
      :blockchain-filter-opts "latest"
      :db-path [:web3-event-listeners]
      :addresses (conj (or addresses (:my-addresses db))
                       (:address (get-contract db :contribution)))
      :instance (get-instance db :d0x-token)
      :dispatches [[:blockchain/address-balance-loaded :d0x]
                   [:blockchain/on-error :contract.d0x-token/watch-balances]]}}))

(reg-event-fx
  :load-conversion-rates
  interceptors
  (fn [{:keys [db]}]
    {:http-xhrio {:method :get
                  :uri "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
                  :timeout 20000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [:conversion-rates-loaded]
                  :on-failure [:log-error :load-conversion-rates]}}))

(reg-event-db
  :conversion-rates-loaded
  interceptors
  (fn [db [response]]
    (update db :conversion-rates merge (medley/map-keys constants/currency-code->id response))))

(reg-event-db
  :form/set-value
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
  :form/submit
  interceptors
  (fn [{:keys [db]} [{:keys [:form-key :fn-key :form-data :value :address] :as props}]]
    (let [form (get db form-key)
          {:keys [:web3 :active-address]} db
          {:keys [:gas-limit]} form]
      {:web3-fx.contract/state-fns
       {:web3 web3
        :db-path [:contract/state-fns]
        :fns [(concat
                [(get-instance db (keyword (namespace fn-key)))
                 fn-key]
                (u/args-map->vec form-data (constants/eth-contracts-fns fn-key))
                [(merge
                   {:gas gas-limit
                    :from (or address active-address)}
                   (when value
                     {:value (js/parseInt value)}))
                 [:form/start-loading form-key]
                 [:contract/transaction-error :form/submit fn-key form-data value address]
                 [:form/submit-receipt gas-limit props]])]}})))

(reg-event-fx
  :form/submit-receipt
  [interceptors log-used-gas]
  (fn [{:keys [db]} [{:keys [:receipt-dispatch :receipt-dispatch-n :form-data :form-key]} {:keys [success?]}]]
    (merge
      (when form-key
        {:db (assoc-in db [form-key :loading?] false)})
      (when (and success? receipt-dispatch)
        {:dispatch (conj receipt-dispatch form-data)})
      (when (and success? receipt-dispatch-n)
        {:dispatch-n (map #(conj % form-data) receipt-dispatch-n)})
      (when-not success?
        {:dispatch [:snackbar/show-error]}))))

(reg-event-db
  :form/start-loading
  interceptors
  (fn [db [form-key]]
    (assoc-in db [form-key :loading?] true)))

(reg-event-db
  :form/stop-loading
  interceptors
  (fn [db [form-key]]
    (assoc-in db [form-key :loading?] false)))

(reg-event-fx
  :contract.d0x-token/transfer
  [interceptors]
  (fn [{:keys [db]} [{:keys [:d0x-token/to :d0x-token/from :d0x-token/value]}]]
    {:dispatch [:contract/state-call {:contract-key :d0x-token
                                      :contract-method :transfer
                                      :args [to value]
                                      :transaction-opts {:gas 200000
                                                         :from from}}]}))

(reg-event-fx
  :reinitialize
  interceptors
  (fn [{:keys [:db]} args]
    (let [my-addresses (:my-addresses db)
          {:keys [:contribution-args :address-index]} (s/conform (s/cat :contribution-args (s/? map?)
                                                                        :address-index (s/? number?))
                                                                 args)]
      (.clear js/console)
      {:db (update db :eth/contracts (partial medley/map-kv
                                              (fn [contract-key contract]
                                                [contract-key (dissoc contract :abi :bin :address :instance)])))
       :async-flow {:first-dispatch [:load-eth-contracts]
                    :rules [{:when :seen?
                             :events [:eth-contracts-loaded]
                             :dispatch-n [[:contracts/deploy-all
                                           (merge
                                             (when (<= 10 my-addresses)
                                               {:contribution/owners (take 2 my-addresses)
                                                :contribution/required-count 1
                                                :contribution/founder1 (first my-addresses)
                                                :contribution/founder2 (second my-addresses)
                                                :contribution/early-sponsor (first my-addresses)
                                                :contribution/wallet (nth my-addresses 3)
                                                :contribution/advisers (drop 4 (take 8 my-addresses))})
                                             contribution-args)
                                           address-index]]
                             :halt? true}]}})))

(reg-event-fx
  :reinitialize+start-contribution
  interceptors
  (fn [{:keys [:db]}]
    {:dispatch [:reinitialize]
     :dispatch-later [{:ms 2000 :dispatch [:contract.contribution/set-contrib-period
                                           {:contribution/period-index 0
                                            :contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/seconds 5)))
                                            :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
                                            :contrib-period/soft-cap-amount (u/eth->wei 5)
                                            :contrib-period/hard-cap-amount (u/eth->wei 10)
                                            :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 1))}
                                           0]}
                      {:ms 3000 :dispatch [:contract.contribution/enable-contrib-period {:contribution/period-index 0}]}]}))

(reg-event-fx
  :contract/state-call
  interceptors
  (fn [{:keys [db]} [{:keys [:contract-key :contract-method :args :transaction-opts] :as opts}]]
    (let [transaction-opts (merge {:gas u/max-gas-limit
                                   :from (:active-address db)}
                                  transaction-opts)]
      {:web3-fx.contract/state-fns
       {:web3 (:web3 db)
        :db-path [:contract/state-fns]
        :fns [(concat [(get-instance db contract-key)
                       contract-method]
                      args
                      [transaction-opts
                       :contract/transaction-sent
                       [:contract/transaction-error :contract/state-call]
                       [:form/submit-receipt (:gas transaction-opts) (assoc opts :fn-key contract-method)]])]}})))

(reg-event-fx
  :contract/transaction-sent
  interceptors
  (fn [_ [tx-hash]]
    #_(console :log tx-hash)))

(reg-event-fx
  :contract/transaction-error
  interceptors
  (fn [_ errors]
    (apply console :error "transaction-error" errors)
    {:ga/event ["transaction-error" (name (first errors)) (str (rest errors))]}))

(reg-event-fx
  :contract/transaction-receipt
  interceptors
  (fn [_ [event-name gas-limit on-success on-out-of-gas {:keys [gas-used] :as receipt}]]
    (let [gas-used-percent (* (/ gas-used gas-limit) 100)]
      (console :log event-name (gstring/format "%.2f%" gas-used-percent) "gas used:" gas-used)
      (if (<= gas-limit gas-used)
        (when on-out-of-gas
          {:dispatch [on-out-of-gas receipt]})
        (when on-success
          {:dispatch [on-success receipt]})))))

(reg-event-fx
  :blockchain/on-error
  interceptors
  (fn [{:keys [:db]} errors]
    (apply console :error "blockchain-error" errors)
    {:db (assoc db :blockchain/connection-error? true)
     :ga/event ["blockchain-error" (name (first errors)) (str (rest errors))]
     :dispatch [:snackbar/show-error "Oops, looks like we have trouble connecting into the Ethereum blockchain"]}))

(reg-event-fx
  :snackbar/show-error
  interceptors
  (fn [{:keys [db]} [error-text]]
    (when-not generate-mode?
      {:db (update db :snackbar merge
                   {:open? true
                    :message (or error-text "Oops, your transaction hasn't been successful")
                    :action nil
                    :on-action-touch-tap nil})})))

(reg-event-fx
  :snackbar/show-message
  interceptors
  (fn [{:keys [db]} [message]]
    (when-not generate-mode?
      {:db (update db :snackbar merge
                   {:open? true
                    :message message
                    :action nil
                    :on-action-touch-tap nil})})))

(reg-event-db
  :snackbar/close
  interceptors
  (fn [db _]
    (assoc-in db [:snackbar :open?] false)))

(reg-event-fx
  :log
  interceptors
  (fn [db result]
    (apply console :log (u/big-nums->nums (if (and (not (string? result)) (some sequential? result))
                                            (map u/big-nums->nums result)
                                            result)))))

(reg-event-fx
  :log-error
  interceptors
  (fn [{:keys [:db]} errors]
    (apply console :error errors)
    {:db db
     :ga/event ["error" (first errors) (str (rest errors))]}))

(reg-event-db
  :print-db
  interceptors
  (fn [db]
    (print.foo/look db)
    db))

(reg-event-fx
  :window/on-resize
  interceptors
  (fn [{:keys [db]} [width]]
    {:db (assoc db :window/width-size (u/get-window-width-size width))}))

(reg-event-fx
  :contract/call
  interceptors
  (fn [{:keys [db]} [contract-key & args]]
    {:web3-fx.contract/constant-fns
     {:fns [(concat [(get-instance db contract-key)] args [:log :log-error])]}}))

(reg-event-fx
  :clean-localstorage
  interceptors
  (fn [_]
    {:localstorage nil}))

(comment
  (dispatch [:contract.contribution/set-contrib-period
             {:contribution/period-index 0
              :contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 1)))
              :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 55000)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 30))
              :contrib-period/hard-cap-amount (u/eth->wei 65000)}
             0])

  (dispatch [:contract.contribution/set-contrib-period
             {:contribution/period-index 0
              :contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/seconds 30)))
              :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 5)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 10))
              :contrib-period/hard-cap-amount (u/eth->wei 10)}
             0])

  (dispatch [:contract.contribution/set-contrib-period
             {:contribution/period-index 0
              :contrib-period/start-time (cljs-time.coerce/to-epoch (cljs-time.core/date-time 2017 7 5 15))
              :contrib-period/end-time (cljs-time.coerce/to-epoch (t/plus (cljs-time.core/date-time 2017 7 5 15)
                                                                          (t/weeks 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 55000)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/days 2))
              :contrib-period/hard-cap-amount (u/eth->wei 1000000)}])

  (dispatch [:contract/call :contribution :d0x-token])
  (dispatch [:contract/call :d0x-token :token-grants-count (:contribution/founder1 @re-frame.db/app-db)])
  (dispatch [:contract/call :d0x-token :token-grant (:contribution/founder1 @re-frame.db/app-db) 1])
  (dispatch [:contract/call :contribution :get-running-contrib-period])
  (dispatch [:contract/call :contribution :get-times])
  (dispatch [:contract.contribution/enable-contrib-period
             {:contribution/period-index 0}
             (last (:my-addresses @re-frame.db/app-db))])
  )