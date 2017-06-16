(ns cljs-web3.core
  (:require [cljs-web3.utils :as u :refer [js-apply js-prototype-apply]]))

(def version-api (u/prop-or-clb-fn "version" "api"))
(def version-node (u/prop-or-clb-fn "version" "node"))
(def version-network (u/prop-or-clb-fn "version" "network"))
(def version-ethereum (u/prop-or-clb-fn "version" "ethereum"))
(def version-whisper (u/prop-or-clb-fn "version" "whisper"))

(defn connected? [web3]
  (js-apply web3 "isConnected"))

(defn sha3
  ([string] (sha3 string nil))
  ([string options] (sha3 js/Web3 string options))
  ([Web3 string options]
   (js-prototype-apply Web3 "sha3" [string options])))

(defn to-hex
  ([any] (to-hex js/Web3 any))
  ([Web3 any]
   (js-prototype-apply Web3 "toHex" [any])))

(defn to-ascii
  ([hex-string] (to-ascii js/Web3 hex-string))
  ([Web3 hex-string]
   (js-prototype-apply Web3 "toAscii" [hex-string])))

(defn from-ascii
  ([string] (from-ascii string nil))
  ([string padding] (from-ascii js/Web3 string padding))
  ([Web3 string padding]
   (js-prototype-apply Web3 "fromAscii" [string padding])))

(defn to-decimal
  ([hex-string] (to-decimal js/Web3 hex-string))
  ([Web3 hex-string]
   (js-prototype-apply Web3 "toDecimal" [hex-string])))

(defn from-decimal
  ([number] (from-decimal js/Web3 number))
  ([Web3 number]
   (js-prototype-apply Web3 "fromDecimal" [number])))

(defn from-wei
  ([number unit] (from-wei js/Web3 number unit))
  ([Web3 number unit]
   (js-prototype-apply Web3 "fromWei" [number (name unit)])))

(defn to-wei
  ([number unit] (to-wei js/Web3 number unit))
  ([Web3 number unit]
   (js-prototype-apply Web3 "toWei" [number (name unit)])))

(defn to-big-number
  ([number-or-hex-string] (to-big-number js/Web3 number-or-hex-string))
  ([Web3 number-or-hex-string]
   (js-prototype-apply Web3 "toBigNumber" [number-or-hex-string])))

(defn pad-left
  ([string chars] (pad-left string chars nil))
  ([string chars sign] (pad-left js/Web3 string chars sign))
  ([Web3 string chars sign]
   (js-prototype-apply Web3 "padLeft" [string chars sign])))

(defn pad-right
  ([string chars] (pad-right string chars nil))
  ([string chars sign] (pad-right js/Web3 string chars sign))
  ([Web3 string chars sign]
   (js-prototype-apply Web3 "padRight" [string chars sign])))

(defn address?
  ([address] (address? js/Web3 address))
  ([Web3 address]
   (js-prototype-apply Web3 "isAddress" [address])))

(defn reset [web3]
  (js-apply web3 "reset"))

(defn set-provider [web3 provider]
  (js-apply web3 "setProvider" [provider]))

(defn current-provider [web3]
  (aget web3 "currentProvider"))

;; Providers

(defn http-provider [Web3 uri]
  (let [constructor (aget Web3 "providers" "HttpProvider")]
    (constructor. uri)))

(defn ipc-provider [Web3 uri]
  (let [constructor (aget Web3 "providers" "IpcProvider")]
    (constructor. uri)))

(defn create-web3
  ([url] (create-web3 js/Web3 url))
  ([Web3 url]
   (new Web3 (http-provider Web3 url))))