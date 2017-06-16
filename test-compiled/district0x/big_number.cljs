(ns district0x.big-number
  (:refer-clojure :exclude [pos? neg? abs int? zero? - + * / mod])
  (:require [cljs-time.coerce :refer [to-date-time to-long to-epoch to-local-date-time]]
            [cljs-time.core :as t :refer [date-time to-default-time-zone]]))

(defn big-number? [x]
  (and x (aget x "toNumber")))

(defn ->number [x]
  (if (big-number? x)
    (.toNumber x)
    x))

(defn ->numbers [coll]
  (map ->number coll))

(defn abs [x]
  (when x
    (.abs x)))

(defn ceil [x]
  (when x
    (.ceil x)))

(defn cmp [x & [base]]
  (when x
    (.cmp x base)))

(defn dp [x]
  (when x
    (.dp x)))

(defn / [x y & [base]]
  (when x
    (.div x y base)))

(defn div-to-int [x y & [base]]
  (when x
    (.divToInt x y base)))

(defn eq? [x y & [base]]
  (when x
    (.eq x y base)))

(defn floor [x]
  (when x
    (.floor x)))

(defn gt? [x y & [base]]
  (when x
    (.gt x y base)))

(defn gte? [x y & [base]]
  (when x
    (.gte x y base)))

(defn finite? [x]
  (when x
    (.isFinite x)))

(defn int? [x]
  (when x
    (.isInt x)))

(defn nan? [x]
  (when x
    (.isNaN x)))

(defn neg? [x]
  (when x
    (.isNeg x)))

(defn pos? [x]
  (gt? x 0))

(defn zero? [x]
  (when x
    (.isZero x)))

(defn lt? [x y & [base]]
  (when x
    (.lt x y base)))

(defn lte? [x y & [base]]
  (when x
    (.lte x y base)))

(defn - [x y & [base]]
  (when x
    (.minus x y base)))

(defn mod [x y & [base]]
  (when x
    (.mod x y base)))

(defn neg [x]
  (when x
    (.neg x)))

(defn + [x y & [base]]
  (when x
    (.plus x y base)))

(defn sd [x & [z]]
  (when x
    (.sd x z)))

(defn round [x & [dp rm]]
  (when x
    (.round x dp rm)))

(defn shift [x z]
  (when x
    (.shift x z)))

(defn sqrt [x]
  (when x
    (.sqrt x)))

(defn * [x y & [base]]
  (when x
    (.times x y base)))

(defn ->digits [x & [sd rm]]
  (when x
    (.toDigits x sd rm)))

(defn ->exponential [x & [dp rm]]
  (when x
    (.toExponential x dp rm)))

(defn ->fixed [x & [dp rm]]
  (when x
    (.toFormat x dp rm)))

(defn ->format [x & [dp rm]]
  (when x
    (.toFixed x dp rm)))

(defn ->fraction [x & [max]]
  (when x
    (.toFraction x max)))

(defn ->json [x]
  (when x
    (.toJSON x)))

(defn pow [x n & [m]]
  (when x
    (.pow x n m)))

(defn ->precision [x & [sd rm]]
  (when x
    (.toPrecision x sd rm)))

(defn ->str [x & [base]]
  (when x
    (.toString x base)))

(defn trunc [x]
  (when x
    (.trunc x)))

(defn value-of [x]
  (when x
    (.valueOf x)))

(defn ->date-time [x]
  (when (pos? x)
    (to-default-time-zone (to-date-time (->number (* x 1000))))))




