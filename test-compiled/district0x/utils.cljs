(ns district0x.utils
  (:require
    [cljs-time.coerce :refer [to-date-time to-long to-epoch to-local-date-time]]
    [cljs-time.core :as t :refer [date-time to-default-time-zone]]
    [cljs-time.format :as time-format]
    [cljs-web3.core :as web3]
    [clojure.string :as string]
    [district0x.big-number :as bn]
    [goog.string :as gstring]
    [goog.string.format]
    [medley.core :as medley]
    [cemerick.url :as url]))

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

(defn current-url []
  (url/url (string/replace (.-href js/location) "#" "")))

(defn wei->eth [x]
  (web3/from-wei x :ether))

(def wei->eth->num (comp js/parseFloat bn/->number wei->eth))

(defn eth->wei [x]
  (web3/to-wei x :ether))

(def eth->wei->num (comp js/parseInt eth->wei))

(def big-num->ether (comp bn/->number wei->eth))

(defn long->epoch [x]
  (/ x 1000))

(defn epoch->long [x]
  (* x 1000))

(defn not-neg? [x]
  (not (neg? x)))

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

(defn to-locale-string [x max-fraction-digits]
  (when x
    (.toLocaleString x js/undefined #js {:maximumFractionDigits max-fraction-digits})))

(defn format-eth-with-symbol [x]
  (when x
    (str (format-eth x) " ETH")))

(defn format-dnt-with-symbol [x]
  (when x
    (str (format-eth x) " DNT")))

(defn format-metric [x]
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

(defn bool->yes|no [x]
  (if x "yes" "no"))

(defn etherscan-url [address]
  (gstring/format "https://etherscan.io/address/%s" address))

(defn time-remaining [from-time to-time]
  (let [milis-difference (- (to-long to-time) (to-long from-time))]
    {:seconds (js/Math.floor (mod (/ milis-difference 1000) 60))
     :minutes (js/Math.floor (mod (/ (/ milis-difference 1000) 60) 60))
     :hours (js/Math.floor (mod (/ milis-difference 3600000) 24))
     :days (js/Math.floor (/ milis-difference 86400000))}))

(defn pluralize [text count]
  (str text (when (not= count 1) "s")))

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
            (and (bn/big-number? value)
                 (not (bn/big-number? value))))))
    (catch :default e
      false)))

(defn pos-ether-value? [x & [props]]
  (and (non-neg-ether-value? x props)
       (or (and (string? x)
                (pos? (parse-float x)))
           (and (number? x)
                (pos? x))
           (and (bn/big-number? x)
                (bn/pos? x)))))

(def non-neg-or-empty-ether-value? #(non-neg-ether-value? % {:allow-empty? true}))

(defn num->wei [value]
  (web3/to-wei (if (string? value) (replace-comma value) value) :ether))

(defn eth-props->wei-props [args wei-keys]
  (medley/map-kv (fn [key value]
                   (if (contains? wei-keys key)
                     [key (if (sequential? value)
                            (map num->wei value)
                            (num->wei value))]
                     [key value]))
                 args))

(defn map->vec [m keys-order]
  (mapv (fn [arg-key]
          (if (sequential? arg-key)
            (map #(get m %) arg-key)
            (get m arg-key)))
        keys-order))

(def http-url-pattern #"(?i)^(?:(?:https?)://)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$")

(defn http-url? [x & [{:keys [:allow-empty?]}]]
  (if (and allow-empty? (empty? x))
    true
    (when (string? x)
      (boolean (re-matches http-url-pattern x)))))

(defn create-length-validator
  ([max-length] (create-length-validator 0 max-length))
  ([min-length max-length]
   (if max-length
     (fn [x]
       (<= (or min-length 0)
           (if (string? x) (count (string/trim x)) 0)
           max-length))
     (constantly true))))

(defn color-emphasize [& args]
  (apply js/MaterialUIUtils.colorManipulator.emphasize args))

(defn color-lighten [& args]
  (apply js/MaterialUIUtils.colorManipulator.lighten args))

(defn color-darken [& args]
  (apply js/MaterialUIUtils.colorManipulator.darken args))

(defn chan? [x]
  (instance? cljs.core.async.impl.channels/ManyToManyChannel x))

(defn error? [x]
  (instance? js/Error x))

(defn tx-address? [x]
  (and (string? x) (= (count x) 66)))
