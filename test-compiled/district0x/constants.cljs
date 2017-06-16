(ns district0x.constants)

(def mist? (boolean (aget js/window "mist")))
(def provides-web3? (boolean (aget js/window "web3")))