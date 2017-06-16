(ns district0x.components.misc
  (:require
    [cljs-react-material-ui.reagent :as ui]
    [district0x.components.utils :refer [current-component-mui-theme parse-props-children create-with-default-props]]
    [district0x.utils :as u]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as r]))

(def col (r/adapt-react-class js/ReactFlexboxGrid.Col))
(def row-with-cols (r/adapt-react-class js/ReactFlexboxGrid.Row))
(def grid (r/adapt-react-class js/ReactFlexboxGrid.Grid))

(def row (create-with-default-props row-with-cols {:style {:margin-left 0 :margin-right 0}}))

(defn paper []
  (let [xs-width? (subscribe [:district0x/window-xs-width?])
        connection-error? (subscribe [:district0x/blockchain-connection-error?])]
    (fn [props & children]
      (let [[{:keys [:inner-style :use-loader?] :as props} children] (parse-props-children props children)
            {:strs [desktopGutter desktopGutterLess]} (js->clj (aget (current-component-mui-theme) "spacing"))
            gutter (if @xs-width? desktopGutterLess desktopGutter)]
        [ui/paper
         (dissoc props :loading? :inner-style :use-loader?)
         (when use-loader?
           [ui/linear-progress {:mode :indeterminate
                                :style {:visibility (if (and (:loading? props)
                                                             (not @connection-error?))
                                                      :visible
                                                      :hidden)}}])
         (into [] (concat [:div {:style (merge {:word-wrap :break-word
                                                :padding gutter
                                                :margin-bottom gutter}
                                               (:inner-style props))}]
                          children))]))))

(defn center-layout [& children]
  [row-with-cols {:center "xs"}
   (into [col {:xs 12 :md 10 :lg 9 :style {:text-align :left}}]
         children)])

(defn etherscan-link [props & children]
  (let [[{:keys [:address] :as props} children] (parse-props-children props children)]
    [:a (r/merge-props
          {:href (u/etherscan-url address)
           :target :_blank}
          (dissoc props :address))
     (if children children address)]))

(defn watch [{:keys [:value :call-on-mount?]
              :or {call-on-mount? true}}]
  (let [old-value (r/atom (when-not call-on-mount? value))]
    (fn [{:keys [:on-change :value]} & childen]
      (when-not (= @old-value value)
        (reset! old-value value)
        (when (fn? on-change)
          (on-change value)))
      (into [:div] childen))))

(defn youtube [props]
  [:iframe
   (r/merge-props
     {:width 560
      :height 315
      :frameBorder 0
      :allowFullScreen true}
     props)])

