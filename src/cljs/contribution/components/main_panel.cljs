(ns contribution.components.main-panel
  (:require
    [cljs-react-material-ui.core :refer [get-mui-theme]]
    [cljs-react-material-ui.reagent :as ui]
    [clojure.set :as set]
    [contribution.components.misc :as misc :refer [row-plain row col paper center-layout etherscan-link]]
    [contribution.styles :as styles]
    [contribution.utils :as u]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as r]
    [contribution.constants :as constants]
    [medley.core :as medley]
    [cljs-time.core :as t]))

(defn my-addresses-select-field []
  (let [xs-width? (subscribe [:window/xs-width?])
        my-addresses (subscribe [:db/my-addresses])
        active-address (subscribe [:db/active-address])]
    (fn []
      (when (seq @my-addresses)
        (if (= 1 (count @my-addresses))
          (when-not @xs-width?
            [:div
             {:style styles/app-bar-address}
             (u/truncate @active-address 13)])
          [ui/select-field
           {:value @active-address
            :on-change #(dispatch [:set-active-address %3])
            :style (merge styles/app-bar-address-select
                          {:width 170})
            :auto-width true
            :label-style styles/app-bar-select-field-label
            :underline-style {:border-color styles/theme-blue}}
           (for [address @my-addresses]
             [ui/menu-item
              {:value address
               :primary-text (u/truncate address 25)
               :key address}])])))))

(defn contracts-not-found-page []
  [center-layout
   [paper
    [row-plain
     {:center "xs"
      :middle "xs"
      :style {:min-height "400px"}}
     [:h3 "We couldn't find district0x Contribution smart contracts. Are you sure you are connected to Ethereum Mainnet?"]]]])

(defn app-bar-right-elements []
  (let [active-address-balance-eth (subscribe [:db/active-address-balance :eth])
        active-address-balance-d0x (subscribe [:db/active-address-balance :d0x])
        connection-error? (subscribe [:blockchain/connection-error?])
        my-addresses (subscribe [:db/my-addresses])
        contracts-not-found? (subscribe [:db/contracts-not-found?])]
    (fn []
      (when-not @connection-error?
        [row-plain
         {:middle "xs"
          :end "xs"}
         (when (and (seq @my-addresses)
                    @active-address-balance-d0x)
           [:h2.bolder {:style (merge styles/app-bar-balance
                                      {:margin-right 10})}
            (u/format-d0x-with-symbol @active-address-balance-d0x)])
         (when (and (seq @my-addresses)
                    @active-address-balance-eth)
           [:h2.bolder {:style (merge styles/app-bar-balance
                                      {:margin-right 20})}
            (u/format-eth-with-symbol @active-address-balance-eth)])
         [my-addresses-select-field]]))))

(defn info-line [props & children]
  (let [[props children] (u/parse-props-children props children)]
    [:div
     props
     [:b
      {:style {:color styles/theme-cyan}}
      (first children)] " "
     (into
       [:span]
       (rest children))]))

(defn admin-panel []
  (let [active-address-owner? (subscribe [:db/active-address-owner?])
        current-contrib-period (subscribe [:contribution/current-contrib-period])
        enable-contrib-form (subscribe [:form.contribution/enable-contrib-period])
        contrib-config (subscribe [:contribution/configuration])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        contrib-contract-d0x-balance (subscribe [:contract.contribution/d0x-balance])]
    (fn []
      (let [{:keys [:contrib-period/start-time :contrib-period/end-time
                    :contrib-period/soft-cap-amount :contrib-period/after-soft-cap-duration
                    :contrib-period/hard-cap-amount :contrib-period/enabled?
                    :contrib-period/stake :contrib-period/soft-cap-reached? :contrib-period/total-contributed
                    :contrib-period/hard-cap-reached? :contrib-period/contributors-count]} @current-contrib-period
            {:keys [:loading?]} @enable-contrib-form
            {:keys [:contribution/stopped? :contribution/founder1 :contribution/founder2
                    :contribution/early-sponsor :contribution/wallet :contribution/advisers
                    :contribution-address :d0x-token-address :d0x-token/transfers-enabled?]} @contrib-config]
        (when @active-address-owner?
          [paper
           [row
            [col
             {:xs 12}
             [:h1
              {:style (merge styles/margin-bottom-gutter styles/text-center)}
              "Admin Panel"]]
            [col
             {:xs 12
              :style styles/margin-bottom-gutter}
             [info-line "Contribution Contract:" [etherscan-link contribution-address]]
             [info-line "d0x Token Contract:" [etherscan-link d0x-token-address]]
             [info-line "Founder 1:" [etherscan-link founder1]]
             [info-line "Founder 2:" [etherscan-link founder2]]
             [info-line "Early Sponsor:" [etherscan-link early-sponsor]]
             [info-line "Wallet:" [etherscan-link wallet]]
             (for [[i adviser] (medley/indexed advisers)]
               [info-line
                {:key adviser}
                (str "Adviser " (inc i) ":") [etherscan-link adviser]])]
            (when total-contributed
              [col
               {:xs 12}
               [info-line "Contribution Round:" (inc constants/current-contrib-period)]
               [info-line "Start Time:" (u/format-local-datetime start-time)]
               [info-line "End Time:" (u/format-local-datetime end-time)]
               [info-line "Soft Cap:" (u/format-eth-with-symbol soft-cap-amount)]
               [info-line "After Soft Cap Duration:" (t/in-hours (t/millis after-soft-cap-duration)) " hours"]
               [info-line "Hard Cap:" (u/format-eth-with-symbol hard-cap-amount)]
               [info-line "Enabled?" (u/boolean->str enabled?)]
               [info-line "Token Distribution:" (u/format-d0x-with-symbol stake)]
               [info-line "Soft Cap Reached?" (u/boolean->str soft-cap-reached?)]
               [info-line "Hard Cap Reached?" (u/boolean->str hard-cap-reached?)]
               [info-line "Total Contributed:" (u/format-eth-with-symbol total-contributed)]
               [info-line "Contributors Count:" contributors-count]
               [info-line "Emergency stop?" (u/boolean->str stopped?)]
               [info-line "Contribution Contract d0x Balance:" (u/format-d0x-with-symbol @contrib-contract-d0x-balance)]
               [info-line "d0x Transfers Enabled?" (u/boolean->str transfers-enabled?)]])
            (when (and (not enabled?)
                       (= @contrib-period-status :contrib-period-status/not-started))
              [col
               {:xs 12
                :style styles/text-right}
               (if-not loading?
                 [ui/raised-button
                  {:primary true
                   :label "Enable"
                   :style styles/margin-top-gutter-less
                   :on-touch-tap #(dispatch [:contract.contribution/enable-contrib-period
                                             {:contribution/period-index constants/current-contrib-period}])}]
                 [ui/circular-progress
                  {:size 30
                   :thickness 3}])])]])))))

(defn contribution-tile []
  (let [xs-sm-width? (subscribe [:window/xs-sm-width?])]
    (fn [{:keys [:title :index]} & children]
      [col
       {:xs 12 :md 4
        :key index
        :style {:padding-left 0
                :padding-right 0}}
       [:div
        {:style (merge styles/stats-tile-title
                       (if @xs-sm-width?
                         (merge
                           styles/margin-top-gutter-less
                           styles/stats-tile-border-bottom
                           {:margin-right 0 :margin-left 0})
                         styles/stats-tile-border-bottom))}
        title]
       (into [row-plain
              {:middle "xs"
               :center "xs"
               :style (merge styles/stats-tile
                             (when-not (= index 2)
                               (if @xs-sm-width?
                                 styles/stats-tile-border-bottom
                                 styles/stats-tile-border-right)))}]
             children)])))

(def contrib-period-status->countdown-title
  {:contrib-period-status/not-started "Starts in"
   :contrib-period-status/running "Ends in"
   :contrib-period-status/ended "Ended"})

(def unit->name
  {:days "day"
   :hours "hour"
   :minutes "minute"
   :seconds "second"})

(defn countdown-time-item [{:keys [:unit :value]}]
  [:span
   [:h1
    {:style (merge styles/contrib-countdown-value
                   styles/text-left)}
    (if (< value 10)
      (str 0 value)
      value)]
   [:span
    {:style styles/contrib-countdown-unit}
    " " (u/pluralize (unit->name unit) value)]])

(defn- countdown []
  (fn [{:keys [:from-time :to-time]}]
    (when (and from-time to-time)
      (let [{:keys [:days :hours :minutes :seconds]} (u/time-remaining from-time to-time)]
        [:div
         {:style {:margin-top "-10px"}}
         [:div
          {:style styles/no-wrap}
          [countdown-time-item
           {:value days
            :unit :days}]
          " "
          [countdown-time-item
           {:value hours
            :unit :hours}]]
         [:div
          {:style styles/no-wrap}
          [countdown-time-item
           {:value minutes
            :unit :minutes}]
          " "
          [countdown-time-item
           {:value seconds
            :unit :seconds}]]
         [:div
          {:style {:margin-top 5}}
          (u/format-local-datetime to-time)]]))))

(defn contribution-stats-tiles []
  (let [xs-width? (subscribe [:window/xs-width?])
        current-contrib-period (subscribe [:contribution/current-contrib-period])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        now (subscribe [:db/now])]
    (fn []
      (let [{:keys [:contrib-period/loading? :contrib-period/start-time :contrib-period/end-time
                    :contrib-period/total-contributed :contrib-period/stake
                    :contrib-period/contributors-count]} @current-contrib-period]
        [row
         {:center "xs"}
         [col
          {:xs 12}
          [:h1 {:style (merge styles/margin-bottom-gutter-more
                              styles/text-center)}
           "Contribution Period " (constants/contrib-period->name constants/current-contrib-period)]]
         [contribution-tile
          {:title (contrib-period-status->countdown-title @contrib-period-status)
           :index 0}
          (if (and start-time end-time)
            (condp = @contrib-period-status
              :contrib-period-status/not-started
              [countdown
               {:from-time @now
                :to-time start-time}]

              :contrib-period-status/running
              [countdown
               {:from-time @now
                :to-time end-time}]

              :contrib-period-status/ended
              [:h1 (u/format-local-date end-time)])
            [ui/circular-progress])]
         [contribution-tile
          {:title "Raised"
           :index 1}
          (if total-contributed
            [row-plain
             {:middle "xs"
              :center "xs"}
             [:div
              [:h1
               {:style styles/stats-tile-amount}
               (u/format-humanize total-contributed)]
              [:span {:style {:font-size "1.2em"}} " ETH"]]
             [:h3
              {:style styles/stats-tile-amount-subtitle}
              contributors-count (u/pluralize " participant" contributors-count)]]
            [ui/circular-progress])]
         [contribution-tile
          {:title "Token Distribution"
           :index 2}
          (if stake
            [:div
             [:h1
              {:style styles/stats-tile-amount}
              (/ stake 1000000) " Mil"]
             [:h3
              {:style styles/stats-tile-amount-subtitle}
              "DNT tokens"]]
            [ui/circular-progress])]]))))

(defn contribution-soft-cap-progress []
  (let [current-contrib-period (subscribe [:contribution/current-contrib-period])]
    (fn []
      (let [{:keys [:contrib-period/total-contributed :contrib-period/soft-cap-amount
                    :contrib-period/after-soft-cap-duration]} @current-contrib-period]
        (when (and total-contributed soft-cap-amount after-soft-cap-duration)
          [row-plain
           {:center "xs"
            :style styles/margin-top-gutter-more}
           [ui/linear-progress
            {:mode "determinate"
             :style styles/soft-cap-progress
             :color styles/theme-orange
             :max (or soft-cap-amount 55000)
             :value total-contributed}]
           [:h3
            {:style styles/full-width}
            "Soft Cap " (js/parseInt total-contributed) "/" (or soft-cap-amount 0) " ETH"]
           [:div
            {:style (merge styles/full-width
                           styles/fade-white-text)}
            "After soft cap is reached, the contribution period will be closed in " (t/in-hours (t/seconds after-soft-cap-duration))
            " hours"]])))))

(defn- external-link [body href]
  [:a
   {:href href
    :target :_blank
    :style {:color styles/theme-green}}
   body])

(defn contribution-contribute-section []
  (let [contribution-address (subscribe [:contribution-contract-address])
        contribute-form (subscribe [:form.contribution/contribute])
        can-use-form? (subscribe [:db/can-use-form?])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        current-contrib-period (subscribe [:contribution/current-contrib-period])
        contrib-config (subscribe [:contribution/configuration])
        ]
    (fn []
      (let [{:keys [:contrib-period/stake :contrib-period/enabled?]} @current-contrib-period
            {:keys [:data :loading?]} @contribute-form
            {:keys [:contribution/amount]} data
            {:keys [:contribution/stopped?]} @contrib-config
            error-text (cond
                         (not (u/non-neg-ether-value? amount)) "This is not valid Ether value"
                         (< (u/parse-float amount) constants/min-contrib-amount) (str "Minimum contribution amount is "
                                                                                      constants/min-contrib-amount
                                                                                      " ETH"))]
        [row-plain
         {:center "xs"
          :style styles/margin-top-gutter-more}
         [:h2
          {:style (merge styles/full-width
                         styles/margin-bottom-gutter-less)}
          "How to Contribute"]
         [:div
          {:style styles/full-width}
          "You can send Ether directly to contribution smart contract"]
         [:h3
          {:style (merge styles/full-width
                         {:color styles/theme-green})}
          (if enabled?
            @contribution-address
            "(Contract address will be published soon)")]
         [:div
          {:style (merge styles/full-width
                         {:color styles/theme-orange
                          :font-size "0.9em"})}
          (when enabled?
            (if stopped?
              "(Contribution was temporarily paused due to emergency)"
              ({:contrib-period-status/not-started "(Contribution period has not started yet)"
                :contrib-period-status/ended "(Contribution period has been finished)"}
                @contrib-period-status)))]
         [:div
          {:style (merge styles/full-width
                         styles/margin-top-gutter-less)}
          "or you can use following form by using " [external-link "MetaMask" "https://metamask.io/"] ", "
          [external-link "Mist" "https://github.com/ethereum/mist"] ", or "
          [external-link "Parity" "https://parity.io/"]]
         [row-plain
          {:style styles/full-width
           :middle "xs"
           :center "xs"}
          [ui/text-field
           {:floating-label-fixed true
            :floating-label-text "Amount in Ether"
            :default-value amount
            :style {:margin-left styles/desktop-gutter-mini
                    :margin-right styles/desktop-gutter-mini}
            :error-text error-text
            :error-style styles/text-left
            :disabled (or (not= :contrib-period-status/running @contrib-period-status)
                          (not enabled?)
                          stopped?)
            :on-change #(dispatch [:form/set-value :form.contribution/contribute :contribution/amount %2])}]
          (if-not loading?
            [ui/raised-button
             {:primary true
              :label "Send"
              :disabled (or (not @can-use-form?)
                            (boolean error-text)
                            (not= :contrib-period-status/running @contrib-period-status)
                            (not enabled?)
                            stopped?)
              :style {:margin-left styles/desktop-gutter-mini
                      :margin-right styles/desktop-gutter-mini
                      :margin-top 20}
              :on-touch-tap #(dispatch [:contract.contribution/contribute data])}]
            [:div
             {:style {:margin-top 20
                      :margin-left styles/desktop-gutter-mini
                      :margin-right styles/desktop-gutter-mini
                      :width 88}}
             [ui/circular-progress
              {:size 30
               :thickness 2}]])]
         (when stake
           [:div
            [:div
             {:style styles/distribution-note}
             "Please note: " (u/format-eth stake) " DNT tokens will be divided and distributed amongst all
            participants, each receiving an allocation proportional to the amount they contributed, relative to the
            total collected."]
            [:div
             {:style (merge styles/full-width
                            styles/margin-top-gutter)}
             [:a {:href "#"
                  :target :_blank
                  :style styles/contrib-terms-link}
              "Contribution Terms"]]])
         [:small
          {:style (merge styles/full-width
                         styles/fade-white-text
                         styles/margin-top-gutter
                         styles/margin-bottom-gutter-mini)}
          "Copyright © 2017 district0x"]
         [:div
          {:style styles/full-width}
          [:img {:src "./images/district0x-logo-title-white.svg"
                 :style {:height 15}}]]]))))

(defn contribution-panel []
  [paper
   {:loading? false}
   [contribution-stats-tiles]
   [contribution-soft-cap-progress]
   [contribution-contribute-section]])

(defn logo []
  [:a
   {:href "http://district0x.io"}
   [:img
    {:style styles/logo
     :src "./images/district0x-logo.svg"}]])

(defn main-panel []
  (let [connection-error? (subscribe [:blockchain/connection-error?])
        snackbar (subscribe [:db/snackbar])
        contracts-not-found? (subscribe [:db/contracts-not-found?])
        xs-width? (subscribe [:window/xs-width?])
        countdown (subscribe [:contribution/countdown])]
    (fn []
      [ui/mui-theme-provider
       {:mui-theme styles/mui-theme}
       [:div
        {:style {:padding-bottom 20
                 :overflow :hidden}}
        [:img {:src "./images/green-blob2.svg"
               :style styles/blob4}]
        [:img {:src "./images/cyan-blob.svg"
               :style styles/blob1}]
        [:img {:src "./images/green-blob1.svg"
               :style styles/blob2}]
        [:img {:src "./images/green-blobs.svg"
               :style styles/blob3}]
        [ui/app-bar
         {:show-menu-icon-button false
          :style styles/app-bar
          :title (r/as-element [logo])
          :icon-element-right (r/as-element [app-bar-right-elements])}]
        [ui/snackbar (-> @snackbar
                       (set/rename-keys {:open? :open}))]
        [:div {:style (merge styles/content-wrap
                             (when @xs-width?
                               (styles/padding-all styles/desktop-gutter-mini)))}
         (if @contracts-not-found?
           [contracts-not-found-page]
           [center-layout
            [contribution-panel]
            [admin-panel]])]]])))