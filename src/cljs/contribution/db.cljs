(ns contribution.db
  (:require
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [cljs.spec :as s]
    [district0x.db]
    [district0x.utils :as u]
    [re-frame.core :refer [dispatch]]))

(s/def :contribution/stopped? boolean?)
(s/def :contribution/address->owner? (s/map-of u/address? boolean?))
(s/def :contribution/founder1 (s/nilable u/address?))
(s/def :contribution/founder2 (s/nilable u/address?))
(s/def :contribution/early-sponsor (s/nilable u/address?))
(s/def :contribution/wallet (s/nilable u/address?))
(s/def :contribution/advisers (s/coll-of u/address?))
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

(s/def :contribution/contrib-periods (s/map-of number? :contribution/contrib-period))

(s/def :form.contribution/contribute ::district0x.db/submit-form)
(s/def :form.contribution/enable-contrib-period ::district0x.db/submit-form)

(def default-db
  (merge
    district0x.db/default-db
    {:load-node-addresses? false
     :node-url "https://mainnet.infura.io/" #_ "http://localhost:8549"
     :smart-contracts {:contribution {:name "District0xContribution" :address "0xfbfe6376417ec60322909ae8b9de3ee3de268d9d"}
                       :dnt-token {:name "District0xNetworkToken" :address "0x9188ca329c7a6bb7f9fd8346624cb6e14487d557"}
                       :mini-me-token-factory {:name "MiniMeTokenFactory" :address "0xe0dd94dd042602c39103867bd31bcfce24bce460"}}
     :now (t/now)

     :dnt-token/transfers-enabled? false
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
                                               :errors #{}}}))