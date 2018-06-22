(ns contribution.events
  (:require
    [ajax.core :as ajax]
    [akiroz.re-frame.storage :as re-frame-storage]
    [camel-snake-kebab.core :as cs :include-macros true]
    [camel-snake-kebab.extras :refer [transform-keys]]
    [cljs-time.coerce :as time-coerce]
    [cljs-time.core :as t]
    [cljs-web3.async.eth :as web3-eth-async]
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [cljs-web3.personal :as web3-personal]
    [cljs-web3.utils :as web3-utils]
    [cljs.core.async :refer [<! >! chan alts! timeout close!]]
    [cljs.spec.alpha :as s]
    [clojure.data :as data]
    [clojure.set :as set]
    [clojure.string :as string]
    [contribution.api :refer [parse-get-contrib-period contrib-period-args parse-get-configuration]]
    [contribution.constants :as constants]
    [district0x.big-number :as bn]
    [district0x.events :refer [get-contract get-instance all-contracts-loaded? reg-empty-event-fx]]
    [district0x.utils :as u]
    [goog.string :as gstring]
    [goog.string.format]
    [medley.core :as medley]
    [re-frame.core :as re-frame :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug reg-fx console dispatch]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def interceptors district0x.events/interceptors)

(reg-event-fx
  :load-ip-location
  interceptors
  (fn [{:keys [db]}]
    {:http-xhrio [{:method :get
                   :uri "https://ipinfo.io/json"
                   :timeout 20000
                   :response-format (ajax/json-response-format)
                   :on-success [:ip-location-loaded]
                   :on-failure [:district0x.log/error]}]}))

(reg-event-fx
  :ip-location-loaded
  interceptors
  (fn [{:keys [db]} [{:strs [country]}]]
    {:db (assoc db :disallowed-country? (contains? constants/disallowed-countries country))}))

(reg-event-fx
  :update-now
  interceptors
  (fn [{:keys [db]}]
    {:db (assoc db :now (t/now))}))

(reg-event-fx
  :deploy-contribution-contract
  interceptors
  (fn [{:keys [db]} [contribution-args address-index]]
    {:dispatch [:district0x/deploy-contract {:address-index address-index
                                             :contract-key :contribution
                                             :gas 3500000
                                             :args ((juxt :contribution/wallet
                                                          :contribution/founder1
                                                          :contribution/founder2
                                                          :contribution/early-sponsor
                                                          :contribution/advisers)
                                                     contribution-args)
                                             :on-success [:contribution-contract-deployed]}]}))

(reg-empty-event-fx :contribution-contract-deployed)

(reg-event-fx
  :deploy-mini-me-token-factory-contract
  interceptors
  (fn [{:keys [db]} [address-index]]
    {:dispatch [:district0x/deploy-contract {:address-index address-index
                                             :contract-key :mini-me-token-factory
                                             :gas 3000000
                                             :on-success [:mini-me-token-factory-deployed]}]}))

(reg-empty-event-fx :mini-me-token-factory-deployed)

(reg-event-fx
  :deploy-dnt-token-contract
  interceptors
  (fn [{:keys [db]} [address-index]]
    (let [contribution-address (:address (get-contract db :contribution))
          mini-me-token-factory-address (:address (get-contract db :mini-me-token-factory))]
      {:dispatch [:district0x/deploy-contract {:address-index address-index
                                               :contract-key :dnt-token
                                               :gas 3300000
                                               :args [contribution-address mini-me-token-factory-address]
                                               :on-success [:dnt-token-contract-deployed]}]})))


(reg-event-fx
  :deploy-token-vesting-contract
  interceptors
  (fn [{:keys [db]} [{:keys [:beneficiary :start :cliff :duration :revocable?]}]]
    {:dispatch [:district0x/deploy-contract {:address-index 0
                                             :contract-key :token-vesting
                                             :gas 3300000
                                             :args [beneficiary
                                                    (or start (time-coerce/to-epoch (t/now)))
                                                    cliff
                                                    duration
                                                    revocable?]
                                             :on-success [:dnt-token-contract-deployed]}]}))


(comment
  (re-frame.core/dispatch [:deploy-token-vesting-contract
                           {:beneficiary ""
                            :cliff 0
                            :duration (t/in-seconds (t/days (* 365 2)))
                            :revocable? true}]))

(reg-empty-event-fx :token-vesting-contract-deployed)

(reg-event-fx
  :deploy-multisig-wallet
  interceptors
  (fn [{:keys [db]} [{:keys [:multisig-wallet/owners :multisig-wallet/required]} address-index]]
    {:dispatch [:district0x/deploy-contract {:address-index address-index
                                             :contract-key :multisig-wallet
                                             :gas 3300000
                                             :args [owners required]
                                             :on-success [:multisig-wallet-deployed]}]}))

(reg-empty-event-fx :multisig-wallet-deployed)

(reg-event-fx
  :contribution/set-district0x-network-token
  interceptors
  (fn [{:keys [db]} [address-index]]
    (let [dnt-address (:address (get-contract db :dnt-token))]
      {:dispatch [:district0x.contract/state-fn-call
                  {:contract-key :contribution
                   :method :set-district0x-network-token
                   :args [dnt-address]
                   :tx-opts {:gas 300000
                             :from (if address-index
                                     (nth (:my-addresses db) address-index)
                                     (:active-address db))}
                   :on-tx-receipt-n [[:contribution/get-contrib-period]
                                     [:contribution/district0x-network-token-was-set]]}]})))

(reg-empty-event-fx :contribution/district0x-network-token-was-set)

(reg-event-fx
  :contribution/setup-event-listeners
  interceptors
  (fn [{:keys [db]}]
    (let [contribution-instance (get-instance db :contribution)]
      {:web3-fx.contract/events
       {:db-path [:web3-event-listeners]
        :events [[contribution-instance :on-contribution {}
                  "latest" :contribution/on-contribution [:district0x.log/error :on-contribution]]
                 [contribution-instance :on-soft-cap-reached {}
                  "latest" :contribution/on-soft-cap-reached [:district0x.log/error :on-soft-cap-reached]]
                 [contribution-instance :on-hard-cap-reached {}
                  "latest" :contribution/on-hard-cap-reached [:district0x.log/error :on-hard-cap-reached]]
                 [contribution-instance :on-emergency-changed {}
                  "latest" :contribution/on-emergency-changed [:district0x.log/error :on-emergency-changed]]]}})))

(reg-event-fx
  :contribution/on-contribution
  interceptors
  (fn [{:keys [db]} [{:keys [:total-contributed :contributors-count]}]]
    (let [total-contributed (u/big-num->ether total-contributed)
          contributors-count (bn/->number contributors-count)]
      (when (< (get-in db [:contribution/contrib-period :contrib-period/total-contributed])
               total-contributed)
        {:db (update-in db [:contribution/contrib-period] merge
                        {:contrib-period/total-contributed total-contributed
                         :contrib-period/contributors-count contributors-count})}))))

(reg-event-fx
  :contribution/on-soft-cap-reached
  interceptors
  (fn [{:keys [db]} [{:keys [:end-time]}]]
    {:db (update-in db [:contribution/contrib-period] merge
                    {#_#_:contrib-period/end-time (bn/->date-time end-time)
                     :contrib-period/soft-cap-reached? true})
     :dispatch [:district0x.snackbar/show-message "Amazing! Soft Cap was just reached!"]}))

(reg-event-fx
  :contribution/on-hard-cap-reached
  interceptors
  (fn [{:keys [db]} [{:keys [:end-time]}]]
    {:db (update-in db [:contribution/contrib-period] merge
                    {:contrib-period/end-time (bn/->date-time end-time)
                     :contrib-period/hard-cap-reached? true})
     :dispatch [:district0x.snackbar/show-message "Unbelievable! Our Hard Cap was reached! The Sale is over now"]}))

(reg-event-fx
  :contribution/on-emergency-changed
  interceptors
  (fn [{:keys [db]} [{:keys [:is-stopped]}]]
    {:db (assoc db :contribution/stopped? is-stopped)
     :dispatch [:district0x.snackbar/show-message (if is-stopped
                                                    "Contribution was temporarily paused due to emergency"
                                                    "Contribution was just resumed")]}))

(reg-event-fx
  :contribution/set-contrib-period
  interceptors
  (fn [{:keys [db]} [args address-index]]
    {:dispatch [:district0x.contract/state-fn-call
                {:contract-key :contribution
                 :method :set-contrib-period
                 :args (contrib-period-args args)
                 :tx-opts {:gas 1000000
                           :from (if address-index
                                   (nth (:my-addresses db) address-index)
                                   (:active-address db))}
                 :on-error [:district0x.log/error]
                 :on-tx-receipt-n [[:contribution/get-contrib-period]
                                   [:contribution/contrib-period-was-set]]}]}))

(reg-empty-event-fx :contribution/contrib-period-was-set)

(reg-event-fx
  :contribution/get-contrib-period
  interceptors
  (fn [{:keys [db]}]
    {:db (assoc-in db [:contribution/contrib-period :contrib-period/loading?] true)
     :web3-fx.contract/constant-fns
     {:fns [[(get-instance db :contribution)
             :get-contrib-period
             [:contribution/get-contrib-period-loaded]
             [:district0x.log/error :contribution/get-contrib-period]]]}}))

(reg-event-fx
  :contribution/get-contrib-period-loaded
  interceptors
  (fn [{:keys [db]} [contrib-period]]
    {:db (assoc-in db [:contribution/contrib-period]
                   (merge (parse-get-contrib-period contrib-period)
                          {:contrib-period/loading? false}))}))

(reg-event-fx
  :contribution/get-configuration
  interceptors
  (fn [{:keys [db]}]
    {:web3-fx.contract/constant-fns
     {:fns [[(get-instance db :contribution)
             :get-configuration
             [:contribution/get-configuration-loaded]
             [:district0x.log/error :contribution/get-contrib-period]]]}}))

(reg-event-fx
  :contribution/get-configuration-loaded
  interceptors
  (fn [{:keys [db]} [configuration]]
    (let [config (parse-get-configuration configuration)]
      (if-not (u/zero-address? (:contribution/wallet config))
        {:db (merge db config)}
        {:db (assoc db :contracts-not-found? true)}))))

(reg-event-fx
  :contribution/contribute
  interceptors
  (fn [{:keys [db]} [form-data address]]
    {:dispatch [:district0x.form/submit
                {:form-data form-data
                 :address address
                 :value (u/num->wei (:contribution/amount form-data))
                 :fn-key :contribution/contribute
                 :fn-args []
                 :tx-opts {:gas-price (:contribution/max-gas-price db)}
                 :form-key :form.contribution/contribute
                 :on-tx-receipt [:district0x.snackbar/show-message "Thank you! Your contribution was successfully sent"]}]}))

(reg-event-fx
  :contribution/enable-contrib-period
  interceptors
  (fn [{:keys [db]} [form-data address]]
    {:dispatch [:district0x.form/submit
                {:form-data form-data
                 :address address
                 :fn-key :contribution/enable-contrib-period
                 :fn-args []
                 :form-key :form.contribution/enable-contrib-period
                 :on-tx-receipt-n [[:district0x.snackbar/show-message "Your agreement to enable contribution was successfully sent"]
                                   [:contribution/get-contrib-period]]}]}))

(reg-event-fx
  :contribution/emergency-stop
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:district0x.contract/state-fn-call {:contract-key :contribution
                                                    :method :emergency-stop
                                                    :args []
                                                    :tx-opts {:gas 200000}}]}))

(reg-event-fx
  :contribution/release
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:district0x.contract/state-fn-call {:contract-key :contribution
                                                    :method :release
                                                    :args []
                                                    :tx-opts {:gas 200000}}]}))

(reg-event-fx
  :contribution/compensate-contributors
  interceptors
  (fn [{:keys [db]} [{:keys [:offset :limit]}]]
    {:dispatch [:district0x.contract/state-fn-call {:contract-key :contribution
                                                    :method :compensate-contributors
                                                    :args [offset limit]
                                                    :tx-opts {:gas 3500000
                                                              :gas-price (web3/to-wei 4 :gwei)}
                                                    :on-tx-receipt [:contribution/compensate-contributors-success offset limit]
                                                    :on-error [:district0x.log/error offset (+ offset limit)]}]}))

(reg-event-fx
  :contribution/compensate-contributors-success
  interceptors
  (fn [{:keys [db]} [offset limit]]
    (println "Successfully compensated" offset (+ offset limit))
    nil))

(reg-event-fx
  :contribution/enable-district0x-network-token-transfers
  interceptors
  (fn [{:keys [db]}]
    {:dispatch [:district0x.contract/state-fn-call {:contract-key :contribution
                                                    :method :enable-district0x-network-token-transfers
                                                    :args []
                                                    :tx-opts {:gas 500000}}]}))

(reg-event-fx
  :watch-dnt-balances
  [interceptors]
  (fn [{:keys [db]}]
    {:dispatch [:district0x/watch-token-balances
                {:addresses (conj (:my-addresses db) (:address (get-contract db :contribution)))
                 :instance (get-instance db :dnt-token)
                 :token-code :dnt}]}))

(reg-event-fx
  :dnt-token/transfer
  [interceptors]
  (fn [{:keys [db]} [{:keys [:dnt-token/to :dnt-token/from :dnt-token/value]}]]
    {:dispatch [:district0x.contract/state-fn-call {:contract-key :dnt-token
                                                    :method :transfer
                                                    :args [to value]
                                                    :tx-opts {:gas 200000
                                                              :from (or from (:active-address db))}}]}))

(reg-event-fx
  :set-confirmation
  interceptors
  (fn [{:keys [db]} [confirm-key confirmed?]]
    {:db (assoc db confirm-key confirmed?)}))

(reg-event-fx
  :reinitialize
  interceptors
  (fn [{:keys [:db]} args]
    (let [my-addresses (:my-addresses db)
          {:keys [:contribution-args :address-index]} (s/conform (s/cat :contribution-args (s/? map?)
                                                                        :address-index (s/? number?))
                                                                 args)]
      (.clear js/console)
      {:dispatch [:district0x/clear-smart-contracts]
       :async-flow {:first-dispatch [:district0x/load-smart-contracts {:version constants/contracts-version}]
                    :rules [{:when :seen?
                             :events [:district0x/smart-contracts-loaded]
                             :dispatch [:deploy-contribution-contract
                                        (merge
                                          (when (<= 10 (count my-addresses))
                                            #_{:contribution/founder1 (first my-addresses)
                                               :contribution/founder2 (second my-addresses)
                                               :contribution/early-sponsor (first my-addresses)
                                               :contribution/wallet (nth my-addresses 3)
                                               :contribution/advisers (drop 4 (take 7 my-addresses))}
                                            {:contribution/founder1 (first my-addresses)
                                             :contribution/founder2 (first my-addresses)
                                             :contribution/early-sponsor (first my-addresses)
                                             :contribution/wallet (first my-addresses)
                                             :contribution/advisers (repeat 3 (first my-addresses))})
                                          contribution-args)
                                        address-index]}
                            {:when :seen?
                             :events [:contribution-contract-deployed]
                             :dispatch [:deploy-mini-me-token-factory-contract address-index]}
                            {:when :seen?
                             :events [:mini-me-token-factory-deployed]
                             :dispatch [:deploy-dnt-token-contract address-index]}
                            {:when :seen?
                             :events [:dnt-token-contract-deployed]
                             :dispatch [:contribution/set-district0x-network-token address-index]
                             :halt? true}]}})))

(reg-event-fx
  :generate-db
  interceptors
  (fn [{:keys [:db]}]
    {:async-flow
     {:first-dispatch [:reinitialize]
      :rules [{:when :seen?
               :events [:contribution/district0x-network-token-was-set]
               :dispatch [:contribution/set-contrib-period
                          {:contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/seconds 5)))
                           :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
                           :contrib-period/soft-cap-amount (u/eth->wei 5)
                           :contrib-period/hard-cap-amount (u/eth->wei 100)
                           :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 30))}]}
              {:when :seen?
               :events [:contribution/contrib-period-was-set]
               ;:dispatch [:contribution/enable-contrib-period {} (nth (:my-addresses db) 3)]
               :dispatch [:contribution/enable-contrib-period {} (first (:my-addresses db))]
               :halt? true}]}}))

(reg-event-fx
  :compensate-community-advisor
  interceptors
  (fn [{:keys [db]} [i]]
    (when (< i (count constants/community-advisors))
      (let [[receiver amount] (nth constants/community-advisors i)]
        (println "Sending" amount "DNT to" receiver i)
        {:dispatch [:dnt-token/transfer {:dnt-token/to receiver
                                         :dnt-token/value (web3/to-wei amount :ether)}]
         :dispatch-later [{:ms 1000 :dispatch [:compensate-community-advisor (inc i)]}]}))))


(reg-event-fx
  :community-advisor-balances
  interceptors
  (fn [{:keys [db]}]
    {:web3-fx.blockchain/balances
     {:web3 (:web3 db)
      :addresses (map first (take 270 constants/community-advisors))
      :instance (get-instance db :dnt-token)
      :dispatches [[:community-advisor-balances-loaded]
                   [:district0x/blockchain-connection-error :community-advisor-balances]]}}))

(reg-event-fx
  :community-advisor-balances-loaded
  interceptors
  (fn [{:keys [db]} [balance address]]
    (let [balance (bn/->number (web3/from-wei balance :ether))
          expected-balance (constants/community-advisors-hashmap address)]
      (when (not= balance expected-balance)
        (console :log address balance expected-balance)))
    nil))

(defn compensate-community-advisor [i stop-at]
  (when (< i (min stop-at (count constants/community-advisors-hashmap)))
    (let [address (nth (keys constants/community-advisors-hashmap) i)]
      (go
        (let [[result ch] (alts! [(web3-eth-async/contract-call
                                    (get-instance @re-frame.db/app-db :dnt-token)
                                    :Transfer
                                    {:_from "0x2a2A57a98a07D3CA5a46A0e1d51dEFffBeF54E4F"
                                     :_to address}
                                    {:from-block 0})
                                  (timeout 1000)])]
          (if result
            (do
              (println address "was compensated" i)
              (compensate-community-advisor (inc i) stop-at))
            (let [amount (constants/community-advisors-hashmap address)]
              (println "Sending" amount "to" address i)
              (close! ch)
              (let [[err res] (<! (web3-eth-async/contract-call
                                    (get-instance @re-frame.db/app-db :dnt-token)
                                    :transfer
                                    address
                                    (web3/to-wei amount :ether)
                                    {:gas 200000
                                     :gas-price (web3/to-wei 4 :gwei)
                                     :from "0x2a2A57a98a07D3CA5a46A0e1d51dEFffBeF54E4F"}))]
                (if err
                  (println err)
                  (compensate-community-advisor (inc i) stop-at))))))))))


(comment

  (dispatch [:deploy-contribution-contract {:contribution/wallet "0xd20e4d854c71de2428e1268167753e4c7070ae68"
                                            :contribution/founder1 "0x0e90d8f85fc3107df47d20444244feaa824d1082"
                                            :contribution/founder2 "0xa8dc2b53ecebeaa641ebb0601a69fbf936ee04f4"
                                            :contribution/early-sponsor "0x00E5cDD4B7b3a78a4277749957553371cb6B2310"
                                            :contribution/advisers ["0x518611649eE8fEFeD0A4DA3D47bAB213c79ce9b5"
                                                                    "0xdBD6ffD3CB205576367915Dd2f8De0aF7edcCeeF"
                                                                    "0x61EF0722Fb8c4F11cB2F0091EA1DC22B6dFF89c1"
                                                                    "0x8f077C8B4876004ef3549CeebF312D36F5B109eF"
                                                                    "0xb58f2c5431ba945d765e92c14990bed40990f719"]}])

  (let [active-address (:active-address @re-frame.db/app-db)]
    (dispatch [:deploy-contribution-contract {:contribution/wallet active-address
                                              :contribution/founder1 active-address
                                              :contribution/founder2 active-address
                                              :contribution/early-sponsor active-address
                                              :contribution/advisers [active-address active-address active-address]}]))

  (dispatch [:deploy-mini-me-token-factory-contract])
  (dispatch [:deploy-dnt-token-contract])
  (dispatch [:contribution/set-district0x-network-token])
  (dispatch [:contribution/enable-contrib-period {}])

  (dispatch [:contribution/set-contrib-period
             {:contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/seconds 5)))
              :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/weeks 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 5)
              :contrib-period/hard-cap-amount (u/eth->wei 10)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/hours 48))}])



  (dispatch [:contribution/set-contrib-period
             {:contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 1)))
              :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 55000)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 30))
              :contrib-period/hard-cap-amount (u/eth->wei 65000)}
             0])

  (dispatch [:contribution/set-contrib-period
             {:contrib-period/start-time (time-coerce/to-epoch (t/plus (t/now) (t/seconds 30)))
              :contrib-period/end-time (time-coerce/to-epoch (t/plus (t/now) (t/hours 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 5)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/minutes 10))
              :contrib-period/hard-cap-amount (u/eth->wei 10)}
             0])

  (dispatch [:contribution/set-contrib-period
             {:contrib-period/start-time (cljs-time.coerce/to-epoch (cljs-time.core/date-time 2017 7 18 15))
              :contrib-period/end-time (cljs-time.coerce/to-epoch (t/plus (cljs-time.core/date-time 2017 7 18 15)
                                                                          (t/weeks 2)))
              :contrib-period/soft-cap-amount (u/eth->wei 58550)
              :contrib-period/after-soft-cap-duration (t/in-seconds (t/days 2))
              :contrib-period/hard-cap-amount (u/eth->wei 292750)}])

  (dispatch [:district0x.contract/constant-fn-call :token-vesting :beneficiary])
  (dispatch [:district0x.contract/constant-fn-call :token-vesting :start])
  (dispatch [:district0x.contract/constant-fn-call :token-vesting :cliff])
  (dispatch [:district0x.contract/constant-fn-call :token-vesting :duration])
  (dispatch [:district0x.contract/constant-fn-call :token-vesting :revocable])
  (dispatch [:district0x.contract/constant-fn-call :token-vesting :owner])

  (dispatch [:district0x.contract/constant-fn-call :multisig-wallet :get-transaction-count true false])
  (dispatch [:district0x.contract/constant-fn-call :multisig-wallet :get-transaction-ids 0 9999 true false])
  (dispatch [:district0x.contract/constant-fn-call :contribution :district0x-network-token])
  (dispatch [:district0x.contract/constant-fn-call :contribution :founder1])
  (dispatch [:district0x.contract/constant-fn-call :dnt-token :controller])
  (dispatch [:district0x.contract/constant-fn-call :dnt-token :token-grants-count (:contribution/founder1 @re-frame.db/app-db)])
  (dispatch [:district0x.contract/constant-fn-call :dnt-token :token-grant (:contribution/founder1 @re-frame.db/app-db) 1])
  (dispatch [:district0x.contract/constant-fn-call :contribution :get-running-contrib-period])
  (dispatch [:district0x.contract/constant-fn-call :contribution :get-times])
  (dispatch [:district0x.contract/constant-fn-call :contribution :get-uncompensated-contributors 0 0])
  (dispatch [:contribution/enable-contrib-period {}
             (last (:my-addresses @re-frame.db/app-db))])
  )