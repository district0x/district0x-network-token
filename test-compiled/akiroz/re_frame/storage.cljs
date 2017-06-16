(ns akiroz.re-frame.storage
  (:require [re-frame.core :refer [reg-fx reg-cofx ->interceptor]]
            [alandipert.storage-atom :refer [local-storage]]
            [cljs.spec :as s]
            ))

(s/def ::cljs-data
  (s/or :nil      nil?
        :boolean  boolean?
        :number   number?
        :string   string?
        :keyword  keyword?
        :symbol   symbol?
        :uuid     uuid?
        :date     (partial instance? js/Date)
        :list     (s/coll-of  ::cljs-data :kind list?)
        :vector   (s/coll-of  ::cljs-data :kind vector?)
        :set      (s/coll-of  ::cljs-data :kind set?)
        :map      (s/map-of   ::cljs-data ::cljs-data)
        ))


;; atom containing local-storage atoms
(def storage-atoms (atom {}))


(defn register-store [store-key]
  (when-not (@storage-atoms store-key)
    (swap! storage-atoms assoc store-key
           (local-storage (atom nil) store-key))))

(s/fdef register-store
  :args (s/cat :store-key keyword?))


(defn ->store [store-key data]
  (reset! (@storage-atoms store-key) data))

(s/fdef ->store
  :args (s/cat :store-key keyword?
               :data ::cljs-data))


(defn <-store [store-key]
  @(@storage-atoms store-key))

(s/fdef <-store
  :args (s/cat :store-key keyword?)
  :ret  ::cljs-data)




(defn reg-co-fx! [store-key {:keys [fx cofx]}]
  (register-store store-key)
  (when fx
    (reg-fx
      fx
      (fn [data]
        (->store store-key data))))
  (when cofx
    (reg-cofx
      cofx
      (fn [coeffects _]
        (assoc coeffects cofx (<-store store-key))))))

(s/def ::fx keyword?)
(s/def ::cofx keyword?)
(s/fdef reg-co-fx!
  :args (s/cat :store-key keyword?
               :handlers (s/keys :req [(or ::fx ::cofx)])))


(defn persist-db [store-key db-key]
  (register-store store-key)
  (->interceptor
    :id (keyword (str db-key "->" store-key))
    :before (fn [context]
              (assoc-in context [:coeffects :db db-key]
                        (<-store store-key)))
    :after (fn [context]
             (when-let [value (get-in context [:effects :db db-key])]
               (->store store-key value))
             context)))

(s/fdef persist-db
  :args (s/cat :store-key keyword?
               :db-key keyword?))


