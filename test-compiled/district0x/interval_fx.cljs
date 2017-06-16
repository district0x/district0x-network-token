(ns district0x.interval-fx
  (:require
    [cljs.spec :as s]
    [district0x.utils :as u]
    [medley.core :as medley]
    [re-frame.core :as re-frame :refer [reg-event-db reg-fx dispatch]]))

(s/def ::dispatch (s/coll-of keyword))
(s/def ::ms int?)
(s/def ::dispatch-interval-args (s/keys :req-un [::dispatch ::db-path ::ms]))

(reg-event-db
  ::set-interval
  (fn [db [_ db-path interval-id]]
    (assoc-in db db-path interval-id)))

(reg-event-db
  ::cancel-interval
  (fn [db [_ db-path interval-id]]
    (medley/dissoc-in db (conj (u/ensure-vec db-path) interval-id))))

(reg-fx
  :dispatch-interval
  (fn [{:keys [:dispatch :db-path :ms] :as config}]
    (s/assert ::dispatch-interval-args config)
    (let [interval-id (js/setInterval #(re-frame/dispatch dispatch) ms)]
      (re-frame/dispatch [::set-interval db-path interval-id]))))

(reg-fx
  :clear-interval
  (fn [{:keys [:interval-id :db-path]}]
    (js/clearInterval interval-id)
    (re-frame/dispatch [::cancel-interval db-path interval-id])))
