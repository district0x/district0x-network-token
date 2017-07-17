(ns contribution.constants)

(def contracts-version "1.0.1")

(def current-contrib-period 0)

(def min-contrib-amount 0.1)

(def contrib-period->name
  {0 "v0.1"
   1 "v0.2"
   2 "v0.3"})

(def disallowed-countries #{"US" "BA" "MD" "RS" "ME" "BY" "CI" "CU" "CG" "CD" "IR" "IQ" "LR" "KP" "SD" "SY" "ZW"})