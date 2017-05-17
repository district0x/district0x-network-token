(ns contribution.components.misc
  (:require
    [cljs-react-material-ui.reagent :as ui]
    [cljs-web3.core :as web3]
    [clojure.string :as string]
    [contribution.components.icons :as icons]
    [contribution.constants :as constants]
    [contribution.styles :as styles]
    [contribution.utils :as u]
    [goog.string :as gstring]
    [medley.core :as medley]
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]))

(def col (r/adapt-react-class js/ReactFlexboxGrid.Col))
(def row (r/adapt-react-class js/ReactFlexboxGrid.Row))
(def grid (r/adapt-react-class js/ReactFlexboxGrid.Grid))

(def row-plain (u/create-with-default-props row {:style styles/row-no-margin}))

(defn paper []
  (let [xs-width (subscribe [:window/xs-width?])
        connection-error? (subscribe [:blockchain/connection-error?])]
    (fn [props & children]
      (let [[props children] (u/parse-props-children props children)]
        [ui/paper
         (r/merge-props (dissoc props :loading? :inner-style)
                        {:style styles/paper})
         [ui/linear-progress {:mode :indeterminate
                              :style {:visibility (if (and (:loading? props)
                                                           (not @connection-error?))
                                                    :visible
                                                    :hidden)}
                              :color styles/accent1-color}]
         (into [] (concat [:div {:style (merge (if @xs-width styles/paper-secton-thin
                                                             styles/paper-secton)
                                               styles/word-wrap-break
                                               (:inner-style props))}]
                          children))]))))

(defn center-layout [& children]
  [row {:center "xs"}
   (into [col {:xs 12 :md 10 :lg 9 :style styles/text-left}]
         children)])

(defn etherscan-link [address]
  [:a {:href (u/etherscan-url address)
       :target :_blank}
   address])



