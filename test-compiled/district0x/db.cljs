(ns district0x.db
  (:require [cljs.spec :as s]
            [district0x.utils :as u]
            [re-frame.core :refer [dispatch]]))

(s/def ::load-node-addresses? boolean?)
(s/def ::web3 (complement nil?))
(s/def ::node-url string?)
(s/def ::contracts-not-found? boolean?)
(s/def ::handler keyword?)
(s/def ::route-params (s/map-of keyword? (some-fn number? string?)))
(s/def ::active-page (s/keys :req-un [::handler] :opt-un [::route-params]))
(s/def ::window-width-size int?)
(s/def ::open? boolean?)
(s/def ::message string?)
(s/def ::on-request-close fn?)
(s/def ::auto-hide-duration int?)
(s/def ::modal boolean?)
(s/def ::title string?)
(s/def ::snackbar (s/keys :req-un [::open? ::message ::on-request-close ::auto-hide-duration]))
(s/def ::dialog (s/keys :req-un [::open? ::title ::modal]))
(s/def ::name string?)
(s/def ::address string?)
(s/def ::bin string?)
(s/def ::abi array?)
(s/def ::setter? boolean?)
(s/def ::smart-contracts (s/map-of keyword? (s/keys :req-un [::name] :opt-un [::setter? ::address ::bin ::abi])))
(s/def ::my-addresses (s/coll-of string?))
(s/def ::active-address (s/nilable string?))
(s/def ::conversion-rates (s/map-of number? number?))
(s/def ::load-conversion-rates-interval (s/nilable int?))
(s/def ::blockchain-connection-error? boolean?)
(s/def ::balances (s/map-of u/address? (s/map-of keyword? u/not-neg?)))

(s/def ::gas-limit pos?)
(s/def ::errors (s/coll-of keyword?))
(s/def ::data (s/keys))
(s/def ::submit-form (s/keys :req-un [::loading? ::gas-limit]
                             :opt-un [::errors ::data]))

(s/def ::db (s/keys :req-un [::active-address
                             ::blockchain-connection-error?
                             ::contracts-not-found?
                             ::dialog
                             ::load-node-addresses?
                             ::my-addresses
                             ::node-url
                             ::smart-contracts
                             ::snackbar
                             ::web3]
                    :opt-un [::active-page
                             ::balances
                             ::conversion-rates
                             ::load-conversion-rates-interval]))

(def default-db
  {:web3 nil
   :contracts-not-found? false
   :window-width-size (u/get-window-width-size js/window.innerWidth)
   :snackbar {:open? false
              :message ""
              :auto-hide-duration 5000
              :on-request-close #(dispatch [:district0x.snackbar/close])}
   :dialog {:open? false
            :modal false
            :title ""
            :actions []
            :body ""
            :on-request-close #(dispatch [:district0x.dialog/close])}
   :smart-contracts {}
   :my-addresses []
   :active-address nil
   :blockchain-connection-error? false
   :conversion-rates {}
   :balances {}})




