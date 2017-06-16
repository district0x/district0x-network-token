(ns district0x.components.active-address-select-field
  (:require
    [cljs-react-material-ui.reagent :as ui]
    [district0x.utils :as u]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as r]))

(defn active-address-select-field []
  (let [xs-width? (subscribe [:district0x/window-xs-width?])
        my-addresses (subscribe [:district0x/my-addresses])
        active-address (subscribe [:district0x/active-address])]
    (fn [{:keys [:select-field-props :menu-item-props :single-address-props]}]
      (when (seq @my-addresses)
        (if (= 1 (count @my-addresses))
          (when-not @xs-width?
            [:div
             single-address-props
             (u/truncate @active-address (or (:single-address-truncate single-address-props) 13))])
          [ui/select-field
           (r/merge-props
             {:value @active-address
              :on-change #(dispatch [:district0x/set-active-address %3])
              :style {:width 170}
              :auto-width true}
             select-field-props)
           (for [address @my-addresses]
             [ui/menu-item
              (r/merge-props
                {:value address
                 :primary-text (u/truncate address (or (:menu-item-truncate menu-item-props) 25))
                 :key address}
                menu-item-props)])])))))
