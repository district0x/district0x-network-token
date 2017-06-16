(ns district0x.location-fx
  (:require
    [bidi.bidi :as bidi]
    [cemerick.url :as url]
    [cljs.spec :as s]
    [district0x.utils :as u]
    [goog.events :as events]
    [medley.core :as medley]
    [re-frame.core :as re-frame :refer [reg-fx]]))

(defn path-for [routes & args]
  (str "#" (apply bidi/path-for routes args)))

(defn set-location-hash! [s]
  (set! (.-hash js/location) s))

(defn nav-to! [route route-params routes]
  (set-location-hash! (medley/mapply path-for routes route route-params)))

(defn set-location-query! [query-params]
  (set-location-hash!
    (str "#" (u/current-location-hash)
         (when-let [query (url/map->query query-params)]
           (str "?" query)))))

(defn add-to-location-query! [query-params]
  (let [current-query (:query (u/current-url))
        new-query (merge current-query (->> query-params
                                         (medley/remove-keys nil?)))]
    (set-location-query! new-query)))

(reg-fx
  :location/set-hash
  (fn [[route route-params routes]]
    (nav-to! route route-params routes)))

(reg-fx
  :location/add-to-query
  (fn [[query-params]]
    (add-to-location-query! query-params)))

(reg-fx
  :location/set-query
  (fn [[query-params]]
    (set-location-query! query-params)))
