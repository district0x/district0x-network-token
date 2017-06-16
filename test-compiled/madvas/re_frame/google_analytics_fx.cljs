(ns madvas.re-frame.google-analytics-fx
  (:require [re-frame.core :refer [reg-fx]]))

(def ^:dynamic *enabled* true)

(defn set-enabled! [enabled?]
  (set! *enabled* enabled?))

;ga('send', {
;            hitType: 'event',
;            eventCategory: 'Videos',
;            eventAction: 'play',
;            eventLabel: 'Fall Campaign'
;            });

(reg-fx
  :ga/send
  (fn [[fields-object]]
    (when *enabled*
      (js/ga "send" (clj->js fields-object)))))

(reg-fx
  :ga/set
  (fn [[fields-object]]
    (when *enabled*
      (js/ga "set" (clj->js fields-object)))))

(reg-fx
  :ga/create
  (fn [[tracking-id cookie-domain name fields-object]]
    (when *enabled*
      (js/ga "create" tracking-id cookie-domain name (clj->js fields-object)))))

(reg-fx
  :ga/page-view
  (fn [[page fields-object]]
    (when *enabled*
      (js/ga "send" "pageview" page (clj->js fields-object)))))

(reg-fx
  :ga/event
  (fn [[category action label value fields-object]]
    (when *enabled*
      (js/ga "send" "event" category action label value (clj->js fields-object)))))

(reg-fx
  :ga/social
  (fn [[social-network social-action social-target fields-object]]
    (when *enabled*
      (js/ga "send" "social" social-network social-action social-target (clj->js fields-object)))))

(reg-fx
  :ga/screen-view
  (fn [[fields-object]]
    (when *enabled*
      (js/ga "send" "screenview" (when fields-object
                                   (clj->js fields-object))))))

(reg-fx
  :ga/timing
  (fn [[timing-category timing-var timing-value timing-label fields-object]]
    (when *enabled*
      (js/ga "send" "timing" timing-category timing-var timing-value timing-label (clj->js fields-object)))))

(reg-fx
  :ga/exception
  (fn [[description fatal?]]
    (when *enabled*
      (js/ga "send" "exception" (clj->js {:exDescription description
                                          :exFatal (if fatal? true false)})))))