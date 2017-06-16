(ns cljs-web3.eth
  (:refer-clojure :exclude [filter])
  (:require [cljs-web3.utils :as u :refer [js-val js-apply]]))

(defn eth [web3]
  (aget web3 "eth"))

(defn get-compile [web3]
  (aget (eth web3) "compile"))

(defn default-account [web3]
  (aget web3 "eth" "defaultAccount"))

(defn set-default-account! [web3 hex-str]
  (aset (eth web3) "defaultAccount" hex-str))

(defn default-block [web3]
  (aget web3 "eth" "defaultBlock"))

(defn set-default-block! [web3 block]
  (aset (eth web3) "defaultBlock" block))

(def syncing (u/prop-or-clb-fn "eth" "syncing"))

(defn syncing?
  [web3 & args]
  (js-apply (eth web3) "isSyncing" args))

(def coinbase (u/prop-or-clb-fn "eth" "coinbase"))
(def mining? (u/prop-or-clb-fn "eth" "mining"))
(def hashrate (u/prop-or-clb-fn "eth" "hashrate"))
(def gas-price (u/prop-or-clb-fn "eth" "gasPrice"))
(def accounts (u/prop-or-clb-fn "eth" "accounts"))
(def block-number (u/prop-or-clb-fn "eth" "blockNumber"))

(defn register [web3 address]
  (js-apply (eth web3) "register" [address]))

(defn unregister [web3 address]
  (js-apply (eth web3) "unRegister" [address]))

(defn get-balance [web3 & [address default-block :as args]]
  (js-apply (eth web3) "getBalance" args))

(defn get-storage-at [web3 & [address position default-block :as args]]
  (js-apply (eth web3) "getStorageAt" args))

(defn get-code [web3 & [address default-block :as args]]
  (js-apply (eth web3) "getCode" args))

(defn get-block [web3 & [block-hash-or-number return-transaction-objects? :as args]]
  (js-apply (eth web3) "getBlock" args))

(defn get-block-transaction-count [web3 & [block-hash-or-number :as args]]
  (eth web3) "getBlockTransactionCount" args)

(defn get-uncle [web3 & [block-hash-or-number uncle-number return-transaction-objects? :as args]]
  (js-apply (eth web3) "getUncle" args))

(defn get-transaction [web3 & [transaction-hash :as args]]
  (js-apply (eth web3) "getTransaction" args))

(defn get-transaction-from-block [web3 & [block-hash-or-number index :as args]]
  (js-apply (eth web3) "getTransactionFromBlock" args))

(defn get-transaction-receipt [web3 & [transaction-hash :as args]]
  (js-apply (eth web3) "getTransactionReceipt" args))

(defn get-transaction-count [web3 & [address default-block :as args]]
  (js-apply (eth web3) "getTransactionCount" args))

(defn send-transaction! [web3 & [transaction-object :as args]]
  (js-apply (eth web3) "sendTransaction" args))

(defn send-raw-transaction! [web3 & [signed-transaction-data & args]]
  (js-apply (eth web3) "sendRawTransaction" args))

(defn send-iban-transaction! [web3 & [signed-transaction-data & args]]
  (js-apply (eth web3) "sendIBANTransaction" args))

(defn sign [web3 & [address data-to-sign :as args]]
  (js-apply (eth web3) "sign" args))

(defn sign-transaction [web3 & args]
  (js-apply (eth web3) "signTransaction" args))

(defn call! [web3 & [call-object default-block :as args]]
  (js-apply (eth web3) "call" args))

(defn estimate-gas [web3 & [call-obejct :as args]]
  (js-apply (eth web3) "estimateGas" args))

(defn filter [web3 & args]
  (js-apply (eth web3) "filter" args))

(defn get-compilers [web3 & args]
  (js-apply (eth web3) "getCompilers" args))

(defn compile-solidity [web3 & [source-string :as args]]
  (js-apply (get-compile web3) "solidity" args))

(defn compile-lll [web3 & [source-string :as args]]
  (js-apply (get-compile web3) "lll" args))

(defn compile-serpent [web3 & [source-string :as args]]
  (js-apply (get-compile web3) "serpent" args))

(defn namereg [web3]
  (aget (eth web3) "namereg"))

(defn contract [web3 & [abi :as args]]
  (js-apply (eth web3) "contract" args))

(defn contract-at [web3 abi & args]
  (js-apply (contract web3 abi) "at" args))

(defn contract-new [web3 abi & args]
  (js-apply (contract web3 abi) "new" args))

(defn contract-call [contract-instance method & args]
  (js-apply contract-instance method args))

(defn stop-watching! [filter & args]
  (js-apply filter "stopWatching" args))

