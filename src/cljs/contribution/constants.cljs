(ns contribution.constants)

(def contracts-version "1.0.0")

(def mist? (boolean (aget js/window "mist")))

(def current-contrib-period 0)

(def min-contrib-amount 1)

(def currency-code->id
  {:ETH 0
   :USD 1
   :EUR 2
   :GBP 3
   :RUB 4
   :CNY 5
   :JPY 6})

(def contrib-period->name
  {0 "v0.1"
   1 "v0.2"
   2 "v0.3"})

(def wei-args #{})

(def eth-contracts-fns
  {:contribution/contribute []
   :contribution/enable-contrib-period [:contribution/period-index]})
