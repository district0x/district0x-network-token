(ns contribution.db
  (:require
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [cljs.spec.alpha :as s]
    [district0x.db]
    [district0x.utils :as u]
    [re-frame.core :refer [dispatch]]))

(s/def :contribution/stopped? boolean?)
(s/def :contribution/founder1 (s/nilable u/address?))
(s/def :contribution/founder2 (s/nilable u/address?))
(s/def :contribution/early-sponsor (s/nilable u/address?))
(s/def :contribution/wallet (s/nilable u/address?))
(s/def :contribution/advisers (s/coll-of u/address?))
(s/def :contribution/max-gas-price u/non-neg?)
(s/def :dnt-token/transfers-enabled? boolean?)

(s/def :contrib-period/soft-cap-amount u/not-neg?)
(s/def :contrib-period/after-soft-cap-duration u/not-neg?)
(s/def :contrib-period/hard-cap-amount u/not-neg?)
(s/def :contrib-period/start-time (s/nilable u/date?))
(s/def :contrib-period/end-time (s/nilable u/date?))
(s/def :contrib-period/enabled? boolean?)
(s/def :contrib-period/cancelled? boolean?)
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
                                                  :contrib-period/cancelled?
                                                  :contrib-period/soft-cap-reached?
                                                  :contrib-period/hard-cap-reached?
                                                  :contrib-period/total-contributed
                                                  :contrib-period/contributors-count
                                                  :contrib-period/stake
                                                  :contrib-period/loading?]))

(s/def :form.contribution/contribute (s/map-of :district0x.db/only-default-kw :district0x.db/submit-form))
(s/def :form.contribution/enable-contrib-period (s/map-of :district0x.db/only-default-kw :district0x.db/submit-form))

(def default-db
  (merge
    district0x.db/default-db
    {:load-node-addresses? false
     :node-url "https://mainnet.infura.io/" #_"http://localhost:8549"
     :smart-contracts {:contribution {:name "District0xContribution" :address "0xd914a0295108229bdb75e82b916e9904cab616e8"}
                       :dnt-token {:name "District0xNetworkToken" :address "0xc9a404b63206a134b36a01a984831770fec52b6d"}
                       :mini-me-token-factory {:name "MiniMeTokenFactory" :address "0xe0dd94dd042602c39103867bd31bcfce24bce460"}
                       :multisig-wallet {:name "MultisigWallet" :address "0x0000000000000000000000000000000000000000"}}
     :now (t/now)
     :disallowed-country? false
     :confirmed-terms? false
     :confirmed-not-us-citizen? false
     :confirmed-gas-price? false
     :confirmed-compensation? false
     :confirmations-submitted? false
     :dnt-token/transfers-enabled? false
     :contribution/stopped? false
     :contribution/founder1 nil
     :contribution/founder2 nil
     :contribution/early-sponsor nil
     :contribution/wallet nil
     :contribution/advisers []
     :contribution/max-gas-price 0
     :contribution/contrib-period {}
     :form.contribution/contribute {:default {:loading? false
                                              :gas-limit 200000
                                              :data {:contribution/amount 1}
                                              :errors #{}}}

     :form.contribution/enable-contrib-period {:default {:loading? false
                                                         :gas-limit 100000
                                                         :data {:contribution/period-index 0}
                                                         :errors #{}}}}))