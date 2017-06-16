(ns cljs-web3.personal
  (:require [cljs-web3.utils :as u :refer [js-apply]]))

(defn get-prs [web3]
  (aget web3 "personal"))

(def list-accounts (u/prop-or-clb-fn "personal" "listAccounts"))

(defn lock-account [web3 & args]
  (js-apply (get-prs web3) "lockAccount" args))

(defn new-account [web3 & args]
  (js-apply (get-prs web3) "newAccount" args))

(defn unlock-account [web3 & args]
  (js-apply (get-prs web3) "unlockAccount" args))

(defn ec-recover [web3 & args]
  (js-apply (get-prs web3) "ecRecover" args))

(defn import-raw-key [web3 & args]
  (js-apply (get-prs web3) "importRawKey" args))

(defn send-transaction [web3 & args]
  (js-apply (get-prs web3) "sendTransaction" args))

(defn sign [web3 & args]
  (js-apply (get-prs web3) "sign" args))



