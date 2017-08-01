(ns contribution.api
  (:require [district0x.big-number :as bn]
            [cljs-web3.core :as web3]
            [cljs-time.core :as t]))

(def big-num->ether (comp bn/->number #(web3/from-wei % :ether)))

(defn parse-get-contrib-period [[bool-vals uint-vals]]
  (let [[enabled? soft-cap-reached? hard-cap-reached?] bool-vals
        [soft-cap-amount after-soft-cap-duration hard-cap-amount start-time end-time total-contributed
         contributors-count contrib-period-stake] uint-vals]
    {:contrib-period/soft-cap-amount (big-num->ether soft-cap-amount)
     :contrib-period/after-soft-cap-duration (bn/->number after-soft-cap-duration)
     :contrib-period/hard-cap-amount (big-num->ether hard-cap-amount)
     :contrib-period/start-time (bn/->date-time start-time)
     :contrib-period/end-time (t/to-default-time-zone (t/plus (cljs-time.core/date-time 2017 7 18 15)
                                                              (t/weeks 2))) #_(bn/->date-time end-time)
     :contrib-period/enabled? enabled?
     :contrib-period/soft-cap-reached? soft-cap-reached?
     :contrib-period/hard-cap-reached? hard-cap-reached?
     :contrib-period/total-contributed (big-num->ether total-contributed)
     :contrib-period/contributors-count (bn/->number contributors-count)
     :contrib-period/stake (big-num->ether contrib-period-stake)}))

(defn contrib-period-args [contrib-period]
  ((juxt :contrib-period/soft-cap-amount
         :contrib-period/after-soft-cap-duration
         :contrib-period/hard-cap-amount
         :contrib-period/start-time
         :contrib-period/end-time)
    contrib-period))

(defn parse-get-configuration [[stopped? wallet founder1 founder2 early-sponsor advisers transfers-enabled?
                                max-gas-price]]
  {:contribution/stopped? stopped?
   :contribution/wallet wallet
   :contribution/founder1 founder1
   :contribution/founder2 founder2
   :contribution/early-sponsor early-sponsor
   :contribution/advisers advisers
   :dnt-token/transfers-enabled? transfers-enabled?
   :contribution/max-gas-price (bn/->number max-gas-price)})
