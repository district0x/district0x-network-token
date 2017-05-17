(ns contribution.subs
  (:require
    [cljs-web3.core :as web3]
    [contribution.constants :as constants]
    [contribution.utils :as u]
    [goog.string :as gstring]
    [goog.string.format]
    [medley.core :as medley]
    [re-frame.core :refer [reg-sub]]
    [cljs-time.core :as t]))

(reg-sub
  :db/my-addresses
  (fn [db _]
    (:my-addresses db)))

(reg-sub
  :db/active-address
  (fn [db _]
    (:active-address db)))

(reg-sub
  :db/can-use-form?
  (fn [db _]
    (and (or (:provides-web3? db) (:load-node-addresses? db))
         (:active-address db))))

(reg-sub
  :db/now
  (fn [db]
    (:now db)))

(reg-sub
  :db/conversion-rates
  (fn [db]
    (:conversion-rates db)))

(reg-sub
  :eth/contracts
  (fn [db]
    (:eth/contracts db)))

(reg-sub
  :blockchain/balances
  (fn [db _]
    (:blockchain/balances db)))

(reg-sub
  :contract.contribution/d0x-balance
  :<- [:blockchain/balances]
  :<- [:eth/contracts]
  (fn [[balances contracts]]
    (get-in balances [(:address (:contribution contracts)) :d0x])))

(reg-sub
  :contribution/address->owner?
  (fn [db _]
    (:contribution/address->owner? db)))

(reg-sub
  :db/active-address-balance
  :<- [:db/active-address]
  :<- [:blockchain/balances]
  (fn [[active-address balances] [_ token]]
    (get-in balances [active-address (or token :eth)])))

(reg-sub
  :db/contracts-not-found?
  (fn [db _]
    (:contracts-not-found? db)))

(reg-sub
  :blockchain/connection-error?
  (fn [db]
    (:blockchain/connection-error? db)))

(reg-sub
  :db/snackbar
  (fn [db]
    (:snackbar db)))

(reg-sub
  :window/width-size
  (fn [db]
    (:window/width-size db)))

(reg-sub
  :window/lg-width?
  (fn [db]
    (= (:window/width-size db) 3)))

(reg-sub
  :window/xs-width?
  (fn [db]
    (= (:window/width-size db) 0)))

(reg-sub
  :window/xs-sm-width?
  (fn [db]
    (<= (:window/width-size db) 1)))

(reg-sub
  :contribution/current-contrib-period
  (fn [db]
    ((:contribution/contrib-periods db) constants/current-contrib-period)))

(reg-sub
  :contribution/total-contributed-usd
  :<- [:contribution/current-contrib-period]
  :<- [:db/conversion-rates]
  (fn [[{:keys [:contrib-period/total-contributed]} conversion-rates]]
    (when (and total-contributed
               (conversion-rates (constants/currency-code->id :USD)))
      (* total-contributed (conversion-rates (constants/currency-code->id :USD))))))

(reg-sub
  :contribution/current-contrib-period-status
  :<- [:contribution/current-contrib-period]
  :<- [:db/now]
  (fn [[{:keys [:contrib-period/start-time :contrib-period/end-time]} now]]
    (cond
      (or (not start-time)
          (not end-time)
          (not (t/before? start-time now)))
      :contrib-period-status/not-started

      (and (t/after? now start-time)
           (t/before? now end-time))
      :contrib-period-status/running

      (t/after? now end-time)
      :contrib-period-status/ended)))

(reg-sub
  :contribution/countdown
  :<- [:contribution/current-contrib-period]
  :<- [:db/now]
  :<- [:contribution/current-contrib-period-status]
  (fn [[{:keys [:contrib-period/start-time :contrib-period/end-time]} now contrib-period-status]]
    (let []
      ["a"])))

(reg-sub
  :contribution/configuration
  (fn [db]
    (merge
      (select-keys db [:contribution/stopped? :contribution/founder1 :contribution/founder2
                       :contribution/early-sponsor :contribution/wallet :contribution/advisers])
      {:contribution-address (get-in db [:eth/contracts :contribution :address])
       :d0x-token-address (get-in db [:eth/contracts :d0x-token :address])})))

(reg-sub
  :contribution-contract-address
  :<- [:eth/contracts]
  (fn [contracts]
    (get-in contracts [:contribution :address])))

(reg-sub
  :db/active-address-owner?
  :<- [:db/active-address]
  :<- [:contribution/address->owner?]
  (fn [[active-address address->owner?]]
    (address->owner? active-address)))

(reg-sub
  :form.contribution/enable-contrib-period
  (fn [db _]
    (:form.contribution/enable-contrib-period db)))

(reg-sub
  :form.contribution/contribute
  (fn [db _]
    (:form.contribution/contribute db)))

