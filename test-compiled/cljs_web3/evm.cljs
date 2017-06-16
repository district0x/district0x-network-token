;;   Functions in this namespace are possible to use only with testrpc
(ns cljs-web3.evm
  (:require [cljs-web3.utils :refer [callback-js->clj]]))

(defn send-async-fn [web3]
  (aget web3 "currentProvider" "sendAsync"))

(defn increase-time! [web3 args callback]
  ((send-async-fn web3)
    (clj->js {:jsonrpc "2.0"
              :method "evm_increaseTime"
              :params args
              :id (.getTime (js/Date.))})
    (callback-js->clj callback)))

(defn mine! [web3 callback]
  ((send-async-fn web3)
    (clj->js {:jsonrpc "2.0"
              :method "evm_mine"
              :params []
              :id (.getTime (js/Date.))})
    (callback-js->clj callback)))

(defn revert! [web3 args callback]
  ((send-async-fn web3)
    (clj->js {:jsonrpc "2.0"
              :method "evm_revert"
              :params args
              :id (.getTime (js/Date.))})
    (callback-js->clj callback)))

(defn snapshot! [web3 callback]
  ((send-async-fn web3)
    (clj->js {:jsonrpc "2.0"
              :method "evm_snapshot"
              :params []
              :id (.getTime (js/Date.))})
    (callback-js->clj callback)))