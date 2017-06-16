(ns district0x.subs
  (:require
    [cljs-web3.core :as web3]
    [goog.string :as gstring]
    [goog.string.format]
    [medley.core :as medley]
    [re-frame.core :refer [reg-sub]]
    [cljs-time.core :as t]))

(reg-sub
  :district0x/my-addresses
  (fn [db _]
    (:my-addresses db)))

(reg-sub
  :district0x/active-address
  (fn [db _]
    (:active-address db)))

(reg-sub
  :district0x/can-submit-into-blockchain?
  (fn [db _]
    (boolean (and (or (:provides-web3? db) (:load-node-addresses? db))
                  (:active-address db)))))

(reg-sub
  :db/active-page
  (fn [db _]
    (:active-page db)))

(reg-sub
  :district0x/conversion-rates
  (fn [db]
    (:conversion-rates db)))

(reg-sub
  :district0x/smart-contracts
  (fn [db]
    (:smart-contracts db)))

(reg-sub
  :district0x/balances
  (fn [db _]
    (:balances db)))

(reg-sub
  :district0x/active-address-balance
  :<- [:district0x/active-address]
  :<- [:district0x/balances]
  (fn [[active-address balances] [_ token]]
    (get-in balances [active-address (or token :eth)])))

(reg-sub
  :district0x/contracts-not-found?
  (fn [db _]
    (:contracts-not-found? db)))

(reg-sub
  :district0x/blockchain-connection-error?
  (fn [db]
    (:district0x/blockchain-connection-error? db)))

(reg-sub
  :district0x/snackbar
  (fn [db]
    (:snackbar db)))

(reg-sub
  :district0x/window-width-size
  (fn [db]
    (:window-width-size db)))

(reg-sub
  :district0x/window-lg-width?
  (fn [db]
    (= (:window-width-size db) 3)))

(reg-sub
  :district0x/window-md-lg-width?
  (fn [db]
    (>= (:window-width-size db) 2)))

(reg-sub
  :district0x/window-xs-width?
  (fn [db]
    (= (:window-width-size db) 0)))

(reg-sub
  :district0x/window-xs-sm-width?
  (fn [db]
    (<= (:window-width-size db) 1)))



