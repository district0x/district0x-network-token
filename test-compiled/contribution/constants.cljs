(ns contribution.constants)

(def contracts-version "1.0.0")

(def mist? (boolean (aget js/window "mist")))

(def current-contrib-period 0)

(def min-contrib-amount 0.1)

(def contrib-period->name
  {0 "v0.1"
   1 "v0.2"
   2 "v0.3"})

(def wei-args #{})

(def eth-contracts-fns
  {:contribution/contribute []
   :contribution/enable-contrib-period [:contribution/period-index]})
