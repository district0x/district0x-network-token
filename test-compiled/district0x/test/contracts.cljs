(ns district0x.test.contracts
  (:require
    [cljs-time.coerce :refer [to-epoch]]
    [cljs-time.core :as time]
    [cljs-web3.core :as web3]
    [cljs-web3.db :as web3-db]
    [cljs-web3.eth :as web3-eth :refer [contract-call]]
    [cljs-web3.evm :as web3-evm]
    [cljs-web3.net :as web3-net]
    [cljs-web3.personal :as web3-personal]
    [cljs-web3.shh :as web3-shh]
    [cljs.core.async :refer [<! >! chan]]
    [cljs.spec :as s]
    [cljs.test :refer-macros [deftest is testing run-tests use-fixtures async]]
    [district0x.big-number :as bn]
    [district0x.utils :as u])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn assert-no-error [err]
  (when err
    (.error js/console err))
  (assert (not err)))

(defn deploy-contract! [{:keys [:web3 :from :abi :bin :res-ch :args :gas]
                         :or {gas 4000000}}]
  (apply web3-eth/contract-new web3 abi
         (into (vec args) [{:data bin
                            :gas gas
                            :from from}
                           (fn [err res]
                             (assert-no-error err)
                             (when (aget res "address")
                               (go (>! res-ch res))))])))

(defn state-call! [instance method {:keys [:from :value :args :gas :value-ether
                                           :on-success :on-error :callback]
                                    :or {value 0 gas 4000000}}]
  (apply contract-call instance method (concat args
                                               [{:gas gas
                                                 :from from
                                                 :value (if value-ether
                                                          (web3/to-wei value-ether :ether)
                                                          value)}
                                                (when (or on-success on-error callback)
                                                  (fn [err res]
                                                    (when (and err on-error)
                                                      (on-error err))
                                                    (when (and res on-success)
                                                      (on-success res))
                                                    (when callback
                                                      (callback err res))))])))

(defn create-channelled-res-fn [f]
  (fn [& args]
    (let [ch (chan)]
      (apply f (concat args
                       [(fn [err res]
                          (assert-no-error err)
                          (go (>! ch res)))]))
      ch)))

(defn state-call-ch! [instance method opts]
  (let [res-ch (chan)]
    (state-call! instance method (assoc opts :on-success (fn [res]
                                                           (go (>! res-ch res)))
                                             :on-error (fn [err]
                                                         (go (>! res-ch err)))))
    res-ch))

(s/def ::contract-call-ch (s/cat :ch (s/? u/chan?)
                                 :args (s/* any?)))

(defn contract-call-ch [& args]
  (let [{:keys [:ch :args] :as params} (s/conform ::contract-call-ch args)
        ch (or ch (chan))]

    (if (= :cljs.spec/invalid params)
      (.error js/console (s/explain-str ::contract-call-ch params))
      (apply contract-call (concat args [(fn [err res]
                                           (assert-no-error err)
                                           (go (>! ch res)))])))
    ch))


(defn wait! [seconds wait-ch]
  (js/setTimeout (fn []
                   (go (>! wait-ch seconds)))
                 (* seconds 1000)))

(defn now-plus-seconds [seconds]
  (js/Math.floor (to-epoch (time/plus (time/now) (time/seconds seconds)))))

(def get-balance-ch (create-channelled-res-fn web3-eth/get-balance))
(def mine-ch! (create-channelled-res-fn web3-evm/mine!))
(def increase-time-ch! (create-channelled-res-fn web3-evm/increase-time!))
(def snapshot-ch! (create-channelled-res-fn web3-evm/snapshot!))
(def revert-ch! (create-channelled-res-fn web3-evm/revert!))

(defn increase-time-and-mine-ch! [web3 seconds]
  (let [ch (chan)]
    (go
      (<! (increase-time-ch! web3 [seconds]))
      (>! ch (<! (mine-ch! web3))))
    ch))
