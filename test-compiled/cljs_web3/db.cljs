(ns cljs-web3.db
  (:require [cljs-web3.utils :as u :refer [js-apply]]))

(defn get-db [web3]
  (aget web3 "db"))

(defn put-string! [web3 & [db key value :as args]]
  (js-apply (get-db web3) "putString" args))

(defn get-string [web3 & [db key :as args]]
  (js-apply (get-db web3) "getString" args))

(defn put-hex! [web3 & [db key value :as args]]
  (js-apply (get-db web3) "putHex" args))

(defn get-hex [web3 & [db key :as args]]
  (js-apply (get-db web3) "getHex" args))