(ns day8.re-frame.forward-events-fx
  (:require [re-frame.core :as re-frame]))


(re-frame/reg-fx
  :forward-events
  (let [id->listen-fn     (atom {})
        process-one-entry (fn [{:as m :keys [unregister register events dispatch-to]}]
                            (let [_ (assert (map? m) (str "re-frame: effects handler for :forward-events expected a map or a list of maps. Got: " m))
                                  _ (assert (or (= #{:unregister} (-> m keys set))
                                                (= #{:register :events :dispatch-to} (-> m keys set))) (str "re-frame: effects handler for :forward-events given wrong map keys" (-> m keys set)))]
                              (if unregister
                                (let [f (@id->listen-fn unregister)
                                      _ (assert (some? f) (str ":forward-events  asked to unregister an unknown id: " unregister))]
                                  (re-frame/remove-post-event-callback f)
                                  (swap! id->listen-fn dissoc unregister))
                                (let [post-event-callback-fn (fn [event-v _]
                                                               (when (events (first event-v))
                                                                 (re-frame/dispatch (conj dispatch-to event-v))))]
                                  (re-frame/add-post-event-callback post-event-callback-fn)
                                  (swap! id->listen-fn assoc register post-event-callback-fn)))))]
    (fn [val]
      (cond
        (map? val)        (process-one-entry val)
        (sequential? val) (doall (map process-one-entry val))
        :else (re-frame/console :error  ":forward-events expected a map or a list of maps, but got: " val)))))
