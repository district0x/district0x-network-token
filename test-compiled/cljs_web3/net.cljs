(ns cljs-web3.net
  (:require [cljs-web3.utils :as u]))

(def listening? (u/prop-or-clb-fn "net" "listening"))
(def peer-count (u/prop-or-clb-fn "net" "peerCount"))