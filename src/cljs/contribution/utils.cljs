(ns contribution.utils
  (:require
    [cljs-time.coerce :refer [to-date-time to-long to-epoch to-local-date-time]]
    [cljs-time.core :as t :refer [date-time to-default-time-zone]]
    [cljs-time.format :as time-format]
    [cljs-web3.core :as web3]
    [clojure.string :as string]
    [contribution.constants :as constants]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent.core :as r]))

(defn get-window-width-size [width]
  (cond
    (>= width 1200) 3
    (>= width 1024) 2
    (>= width 768) 1
    :else 0))

(defn address? [x]
  (web3/address? x))

(defn date? [x]
  (instance? goog.date.DateTime x))

(defn current-location-hash []
  (let [hash (-> js/document
               .-location
               .-hash
               (string/split #"\?")
               first
               (string/replace "#" ""))]
    (if (empty? hash) "/" hash)))

(defn big-num->num [x]
  (if (and x (aget x "toNumber"))
    (.toNumber x)
    x))

(defn big-num-pos? [x]
  (when x
    (.greaterThan x 0)))

(defn big-nums->nums [coll]
  (map big-num->num coll))

(defn wei->eth [x]
  (web3/from-wei x :ether))

(defn eth->wei [x]
  (web3/to-wei x :ether))

(def big-num->eth-num (comp big-num->num wei->eth))

(def max-gas-limit 3800000)

(defn timestamp-js->sol [x]
  (/ x 1000))

(defn timestamp-sol->js [x]
  (* x 1000))

(defn big-num->date-time [big-num]
  (when (big-num-pos? big-num)
    (to-default-time-zone (to-date-time (timestamp-sol->js (.toNumber big-num))))))

(defn not-neg? [x]
  (not (neg? x)))

(defn parse-props-children [props children]
  (if (map? props)
    [props children]
    [nil (concat [props] children)]))

(defn create-with-default-props [component default-props]
  (fn [props & children]
    (let [[props children] (parse-props-children props children)]
      (into [] (concat
                 [component (r/merge-props default-props props)]
                 children)))))

(defn truncate
  "Truncate a string with suffix (ellipsis by default) if it is
   longer than specified length."
  ([string length]
   (truncate string length "..."))
  ([string length suffix]
   (let [string-len (count string)
         suffix-len (count suffix)]
     (if (<= string-len length)
       string
       (str (subs string 0 (- length suffix-len)) suffix)))))

(defn zero-address? [x]
  (or (= x "0x0000000000000000000000000000000000000000")
      (= x "0x")))

(defn ensure-vec [x]
  (if (sequential? x) x [x]))

(defn format-eth [x]
  (when x
    (.toLocaleString x js/undefined #js {:maximumFractionDigits 3})))

(defn format-usd [x]
  (when x
    (.toLocaleString x js/undefined #js {:maximumFractionDigits 2})))

(defn to-locale-string [x max-fraction-digits]
  (when x
    (.toLocaleString x js/undefined #js {:maximumFractionDigits max-fraction-digits})))

(defn format-eth-with-symbol [x]
  (when x
    (str (format-eth x) " ETH")))

(defn format-d0x-with-symbol [x]
  (when x
    (str (format-eth x) " d0x")))

(defn format-humanize [x]
  (cond
    (< x 1000) (js/parseInt x)
    (< 999 x 1000000) (gstring/format "%.2fK" (/ x 1000))
    (< 999999 x) (gstring/format "%.2fM" (/ x 1000000))))

(defn format-datetime [date]
  (when date
    (time-format/unparse (time-format/formatters :rfc822) date)))

(defn format-local-datetime [date]
  (when date
    (time-format/unparse-local (time-format/formatters :rfc822) date)))

(defn format-local-date [date]
  (when date
    (time-format/unparse-local (time-format/formatter "EEE, dd MMM yyyy Z") date)))

(defn boolean->str [x]
  (if x "yes" "no"))

(defn etherscan-url [address]
  (gstring/format "https://etherscan.io/address/%s" address))

(defn parse-get-contrib-period [[bool-vals uint-vals]]
  (let [[enabled? soft-cap-reached? hard-cap-reached?] bool-vals
        [soft-cap-amount after-soft-cap-duration hard-cap-amount start-time end-time total-contributed
         contributors-count contrib-period-stake] uint-vals]
    {:contrib-period/soft-cap-amount (big-num->eth-num soft-cap-amount)
     :contrib-period/after-soft-cap-duration (big-num->num after-soft-cap-duration)
     :contrib-period/hard-cap-amount (big-num->eth-num hard-cap-amount)
     :contrib-period/start-time (big-num->date-time start-time)
     :contrib-period/end-time (big-num->date-time end-time)
     :contrib-period/enabled? enabled?
     :contrib-period/soft-cap-reached? soft-cap-reached?
     :contrib-period/hard-cap-reached? hard-cap-reached?
     :contrib-period/total-contributed (big-num->eth-num total-contributed)
     :contrib-period/contributors-count (big-num->num contributors-count)
     :contrib-period/stake (big-num->eth-num contrib-period-stake)}))

(defn contrib-period-args [contrib-period]
  ((juxt :contribution/period-index
         :contrib-period/soft-cap-amount
         :contrib-period/after-soft-cap-duration
         :contrib-period/hard-cap-amount
         :contrib-period/start-time
         :contrib-period/end-time)
    contrib-period))

(defn parse-get-configuration [[stopped? required-count wallet founder1 founder2 early-sponsor advisers transfers-enabled?]]
  {:contribution/stopped? stopped?
   :contribution/required-count (big-num->num required-count)
   :contribution/wallet wallet
   :contribution/founder1 founder1
   :contribution/founder2 founder2
   :contribution/early-sponsor early-sponsor
   :contribution/advisers advisers
   :d0x-token/transfers-enabled? transfers-enabled?})

(defn time-remaining [from-time to-time]
  (let [milis-difference (- (to-long to-time) (to-long from-time))]
    {:seconds (js/Math.floor (mod (/ milis-difference 1000) 60))
     :minutes (js/Math.floor (mod (/ (/ milis-difference 1000) 60) 60))
     :hours (js/Math.floor (mod (/ milis-difference 3600000) 24))
     :days (js/Math.floor (/ milis-difference 86400000))}))

(defn pluralize [text count]
  (str text (when (not= count 1) "s")))

(defn big-num? [x]
  (and x (aget x "toNumber")))

(defn big-num-neg? [x]
  (when x
    (.isNegative x)))

(defn replace-comma [x]
  (string/replace x \, \.))

(defn empty-string? [x]
  (and (string? x) (empty? x)))

(defn parse-float [number]
  (if (string? number)
    (js/parseFloat (replace-comma number))
    number))

(defn non-neg? [x]
  (not (neg? x)))

(defn non-neg-ether-value? [x & [{:keys [:allow-empty?]}]]
  (try
    (when (and (not allow-empty?) (empty-string? x))
      (throw (js/Error.)))
    (let [value (web3/to-wei (if (string? x) (replace-comma x) x) :ether)]
      (and
        (or (and (string? value)
                 (not (= "-" (first value))))
            (and (big-num? value)
                 (not (big-num-neg? value))))))
    (catch :default e
      false)))

(defn num->wei [value]
  (web3/to-wei (if (string? value) (replace-comma value) value) :ether))

(defn arg-eth->wei [value arg-key]
  (if (contains? constants/wei-args arg-key)
    (if (sequential? value)
      (map num->wei value)
      (num->wei value))
    value))

(defn args-map->vec [values args-order]
  (mapv (fn [arg-key]
          (if (sequential? arg-key)
            (map #(-> (get values %)
                    (arg-eth->wei %))
                 arg-key)
            (-> (get values arg-key)
              (arg-eth->wei arg-key))))
        args-order))
