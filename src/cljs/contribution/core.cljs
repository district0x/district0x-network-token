(ns contribution.core
  (:require
    [cljs-time.extend]
    [cljs.spec.alpha :as s]
    [cljsjs.material-ui]
    [cljsjs.react-flexbox-grid]
    [cljsjs.web3]
    [contribution.components.main-panel :refer [main-panel]]
    [contribution.constants :as constants]
    [contribution.db]
    [contribution.events]
    [contribution.subs]
    [district0x.events]
    [district0x.subs]
    [goog.string.format]
    [madvas.re-frame.google-analytics-fx :as google-analytics-fx]
    [print.foo :include-macros true]
    [re-frame.core :refer [dispatch dispatch-sync clear-subscription-cache!]]
    [reagent.core :as r]))

(defn mount-root []
  (s/check-asserts goog.DEBUG)
  (google-analytics-fx/set-enabled! (not goog.DEBUG))
  (clear-subscription-cache!)
  ;(.clear js/console)
  (r/render [main-panel] (.getElementById js/document "app")))

(defn ^:export init []
  (s/check-asserts goog.DEBUG)
  (google-analytics-fx/set-enabled! (not goog.DEBUG))
  (dispatch-sync [:district0x/initialize
                  {:default-db contribution.db/default-db
                   :effects
                   {:async-flow {:first-dispatch [:district0x/load-smart-contracts {:version constants/contracts-version}]
                                 :rules [{:when :seen?
                                          :events [:district0x/smart-contracts-loaded :district0x/my-addresses-loaded]
                                          :dispatch-n [[:watch-dnt-balances]
                                                       [:district0x/watch-my-eth-balances]
                                                       [:contribution/get-contrib-period]
                                                       [:contribution/get-configuration]
                                                       [:contribution/setup-event-listeners]]
                                          :halt? true}]}
                    :district0x/dispatch [:load-ip-location]
                    :dispatch-interval {:dispatch [:update-now]
                                        :ms 1000
                                        :db-path [:update-now-interval]}}}])
  (mount-root))
