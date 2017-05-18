(ns contribution.db
  (:require
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [cljs.spec :as s]
    [contribution.utils :as u]
    [re-frame.core :refer [dispatch]]))

(s/def ::load-node-addresses? boolean?)
(s/def ::web3 (complement nil?))
(s/def ::node-url string?)
(s/def ::provides-web3? boolean?)
(s/def ::contracts-not-found? boolean?)
(s/def :window/width-size int?)
(s/def ::open? boolean?)
(s/def ::message string?)
(s/def ::on-request-close fn?)
(s/def ::auto-hide-duration int?)
(s/def ::modal boolean?)
(s/def ::snackbar (s/keys :req-un [::open? ::message ::on-request-close ::auto-hide-duration]))
(s/def ::name string?)
(s/def ::address string?)
(s/def ::bin string?)
(s/def ::abi array?)
(s/def ::setter? boolean?)
(s/def :eth/contracts (s/map-of keyword? (s/keys :req-un [::name] :opt-un [::setter? ::address ::bin ::abi])))
(s/def ::my-addresses (s/coll-of string?))
(s/def ::active-address (s/nilable string?))
(s/def :blockchain/connection-error? boolean?)
(s/def ::conversion-rates (s/map-of number? number?))
(s/def ::load-all-conversion-rates-interval (s/nilable int?))
(s/def :blockchain/balances (s/map-of u/address? (s/map-of keyword? u/not-neg?)))
(s/def :window/width-size int?)

(s/def ::db (s/keys :req-un [::load-node-addresses? ::node-url ::web3 ::provides-web3?
                             ::contracts-not-found? ::snackbar ::my-addresses ::active-address
                             ::conversion-rates ::load-all-conversion-rates-interval]
                    :req [:blockchain/balances]))

(s/def :contribution/stopped? boolean?)

(s/def :contribution/address->owner? (s/map-of u/address? boolean?))
(s/def :contribution/founder1 (s/nilable u/address?))
(s/def :contribution/founder2 (s/nilable u/address?))
(s/def :contribution/early-sponsor (s/nilable u/address?))
(s/def :contribution/wallet (s/nilable u/address?))
(s/def :contribution/advisers (s/coll-of u/address?))
(s/def :d0x-token/transfers-enabled? boolean?)

(s/def :contrib-period/soft-cap-amount u/not-neg?)
(s/def :contrib-period/after-soft-cap-duration u/not-neg?)
(s/def :contrib-period/hard-cap-amount u/not-neg?)
(s/def :contrib-period/start-time (s/nilable u/date?))
(s/def :contrib-period/end-time (s/nilable u/date?))
(s/def :contrib-period/enabled? boolean?)
(s/def :contrib-period/compensated? boolean?)
(s/def :contrib-period/soft-cap-reached? boolean?)
(s/def :contrib-period/hard-cap-reached? boolean?)
(s/def :contrib-period/total-contributed u/not-neg?)
(s/def :contrib-period/contributors-count u/not-neg?)
(s/def :contrib-period/stake u/not-neg?)
(s/def :contrib-period/loading? boolean?)

(s/def :contribution/contrib-period (s/keys :opt [:contrib-period/soft-cap-amount
                                                  :contrib-period/after-soft-cap-duration
                                                  :contrib-period/hard-cap-amount
                                                  :contrib-period/start-time
                                                  :contrib-period/end-time
                                                  :contrib-period/enabled?
                                                  :contrib-period/compensated?
                                                  :contrib-period/soft-cap-reached?
                                                  :contrib-period/hard-cap-reached?
                                                  :contrib-period/total-contributed
                                                  :contrib-period/contributors-count
                                                  :contrib-period/stake
                                                  :contrib-period/loading?]))

(s/def :contribution/contrib-periods (s/map-of number? :contribution/contrib-period))

(s/def ::gas-limit pos?)
(s/def ::errors (s/coll-of keyword?))
(s/def ::data (s/keys))
(s/def ::submit-form (s/keys :req-un [::loading? ::gas-limit]
                             :opt-un [::errors ::data]))

(s/def :form.contribution/add-job-sponsorship ::submit-form)
(s/def :form.contribution/enable-contrib-period ::submit-form)

(def generate-mode? false)

(def default-db
  {:web3 nil
   :load-node-addresses? true
   :node-url #_"https://mainnet.infura.io/" #_"http://localhost:8545" "http://localhost:8549" #_"http://192.168.0.16:8545/" #_"http://localhost:8550"
   :provides-web3? false
   :contracts-not-found? false
   :window/width-size (u/get-window-width-size js/window.innerWidth)
   :selected-currency 0
   :snackbar {:open? false
              :message ""
              :auto-hide-duration 5000
              :on-request-close #(dispatch [:snackbar/close])}
   :eth/contracts {:contribution {:name "Contribution" :address "0x0000000000000000000000000000000000000000"}
                   :d0x-token {:name "D0xToken" :address "0x0000000000000000000000000000000000000000"}}
   :my-addresses []
   :active-address nil
   :active-user-events nil
   :blockchain/connection-error? false
   :conversion-rates {}
   :load-all-conversion-rates-interval nil
   :now (t/now)
   :blockchain/balances {}

   :d0x-token/transfers-enabled? false

   :contribution/stopped? false
   :contribution/address->owner? {}
   :contribution/founder1 nil
   :contribution/founder2 nil
   :contribution/early-sponsor nil
   :contribution/wallet nil
   :contribution/advisers []
   :contribution/contrib-periods {}

   :form.contribution/contribute {:loading? false
                                  :gas-limit 600000
                                  :data {:contribution/amount 1}
                                  :errors #{}}

   :form.contribution/enable-contrib-period {:loading? false
                                             :gas-limit 1000000
                                             :data {:contribution/period-index 0}
                                             :errors #{}}})