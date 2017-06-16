(ns district0x.dispatch-fx
  (:require
    [re-frame.core :as re-frame :refer [reg-fx dispatch]]))

(reg-fx
  :district0x/dispatch
  (fn [event]
    (when event
      (dispatch event))))

(reg-fx
  :district0x/dispatch-n
  (fn [events]
    (when (sequential? events)
      (doseq [event (remove nil? events)]
        (dispatch event)))))
