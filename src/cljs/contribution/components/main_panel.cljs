(ns contribution.components.main-panel
  (:require
    [cljs-react-material-ui.core :refer [get-mui-theme]]
    [cljs-react-material-ui.reagent :as ui]
    [cljs-time.core :as t]
    [clojure.set :as set]
    [contribution.constants :as constants]
    [contribution.styles :as styles]
    [district0x.components.active-address-select-field :refer [active-address-select-field]]
    [district0x.components.misc :as misc :refer [row row-with-cols col center-layout etherscan-link]]
    [district0x.components.utils :refer [create-with-default-props parse-props-children]]
    [district0x.utils :as u]
    [medley.core :as medley]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as r]
    [cljs-web3.core :as web3]))

(def paper (create-with-default-props misc/paper {:style styles/paper}))

(defn contracts-not-found-page []
  [center-layout
   [paper
    [row
     {:center "xs"
      :middle "xs"
      :style {:min-height "400px"}}
     [:h3 "We couldn't find district0x Contribution smart contracts." [:br]
      "Your MetaMask Chrome extension is most likely not pointed to Ethereum Mainnet, please check."]]]])

(defn app-bar-right-elements []
  (let [active-address-balance-eth (subscribe [:district0x/active-address-balance :eth])
        active-address-balance-dnt (subscribe [:district0x/active-address-balance :dnt])
        connection-error? (subscribe [:district0x/blockchain-connection-error?])
        my-addresses (subscribe [:district0x/my-addresses])
        contracts-not-found? (subscribe [:district0x/contracts-not-found?])]
    (fn []
      (when-not @connection-error?
        [row
         {:middle "xs"
          :end "xs"}
         (when (and (seq @my-addresses)
                    @active-address-balance-dnt)
           [:h2.bolder {:style (merge styles/app-bar-balance
                                      {:margin-right 10})}
            (u/format-dnt-with-symbol @active-address-balance-dnt)])
         (when (and (seq @my-addresses)
                    @active-address-balance-eth)
           [:h2.bolder {:style (merge styles/app-bar-balance
                                      {:margin-right 20})}
            (u/format-eth-with-symbol @active-address-balance-eth)])
         [active-address-select-field
          {:select-field-props {:style styles/active-address-select-field
                                :label-style styles/active-address-select-field-label
                                :underline-style {:border-color styles/theme-blue}}
           :single-address-props {:style styles/active-address-single}}]]))))

(defn info-line [props & children]
  (let [[props children] (parse-props-children props children)]
    [:div
     props
     [:b
      {:style {:color styles/theme-cyan}}
      (first children)] " "
     (into
       [:span]
       (rest children))]))

(defn admin-panel []
  (let [active-address-founder? (subscribe [:db/active-address-founder?])
        contrib-period (subscribe [:contribution/contrib-period])
        enable-contrib-form (subscribe [:form.contribution/enable-contrib-period])
        contrib-config (subscribe [:contribution/configuration])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        contrib-contract-dnt-balance (subscribe [:contribution/dnt-balance])]
    (fn []
      (let [{:keys [:contrib-period/start-time :contrib-period/end-time
                    :contrib-period/soft-cap-amount :contrib-period/after-soft-cap-duration
                    :contrib-period/hard-cap-amount :contrib-period/enabled?
                    :contrib-period/stake :contrib-period/soft-cap-reached? :contrib-period/total-contributed
                    :contrib-period/hard-cap-reached? :contrib-period/contributors-count]} @contrib-period
            {:keys [:loading?]} @enable-contrib-form
            {:keys [:contribution/stopped? :contribution/founder1 :contribution/founder2
                    :contribution/early-sponsor :contribution/wallet :contribution/advisers
                    :contribution-address dnt-token-address :dnt-token/transfers-enabled?]} @contrib-config]
        (when @active-address-founder?
          [paper
           [row-with-cols
            [col
             {:xs 12}
             [:h1
              {:style (merge styles/margin-bottom-gutter styles/text-center)}
              "Admin Panel"]]
            [col
             {:xs 12
              :style styles/margin-bottom-gutter}
             [info-line "Contribution Contract:" [etherscan-link {:address contribution-address}]]
             [info-line "DNT Token Contract:" [etherscan-link {:address dnt-token-address}]]
             [info-line "Founder 1:" [etherscan-link {:address founder1}]]
             [info-line "Founder 2:" [etherscan-link {:address founder2}]]
             [info-line "Early Sponsor:" [etherscan-link {:address early-sponsor}]]
             [info-line "Wallet:" [etherscan-link {:address wallet}]]
             (for [[i adviser] (medley/indexed advisers)]
               [info-line
                {:key i}
                (str "Adviser " (inc i) ":") [etherscan-link {:address adviser}]])]
            (when total-contributed
              [col
               {:xs 12}
               [info-line "Contribution Round:" (inc constants/current-contrib-period)]
               [info-line "Start Time:" (u/format-local-datetime start-time)]
               [info-line "End Time:" (u/format-local-datetime end-time)]
               [info-line "Soft Cap:" (u/format-eth-with-symbol soft-cap-amount)]
               [info-line "After Soft Cap Duration:" (t/in-hours (t/millis after-soft-cap-duration)) " hours"]
               [info-line "Hard Cap:" (u/format-eth-with-symbol hard-cap-amount)]
               [info-line "Enabled?" (u/bool->yes|no enabled?)]
               [info-line "Token Distribution:" (u/format-dnt-with-symbol stake)]
               [info-line "Soft Cap Reached?" (u/bool->yes|no soft-cap-reached?)]
               [info-line "Hard Cap Reached?" (u/bool->yes|no hard-cap-reached?)]
               [info-line "Total Contributed:" (u/format-eth-with-symbol total-contributed)]
               [info-line "Contributors Count:" contributors-count]
               [info-line "Emergency stop?" (u/bool->yes|no stopped?)]
               [info-line "Contribution Contract DNT Balance:" (u/format-dnt-with-symbol @contrib-contract-dnt-balance)]
               [info-line "DNT Transfers Enabled?" (u/bool->yes|no transfers-enabled?)]])]])))))

(defn contribution-tile []
  (let [xs-sm-width? (subscribe [:district0x/window-xs-sm-width?])]
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
       (into [row
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
  (let [xs-width? (subscribe [:district0x/window-xs-width?])
        contrib-period (subscribe [:contribution/contrib-period])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        now (subscribe [:db/now])]
    (fn []
      (let [{:keys [:contrib-period/loading? :contrib-period/start-time :contrib-period/end-time
                    :contrib-period/total-contributed :contrib-period/stake
                    :contrib-period/contributors-count]} @contrib-period]
        [row-with-cols
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
            [row
             {:middle "xs"
              :center "xs"}
             [:div
              [:h1
               {:style styles/stats-tile-amount}
               (u/format-metric total-contributed)]
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
  (let [current-contrib-period (subscribe [:contribution/contrib-period])]
    (fn []
      (let [{:keys [:contrib-period/total-contributed :contrib-period/soft-cap-amount
                    :contrib-period/after-soft-cap-duration :contrib-period/hard-cap-amount]} @current-contrib-period]
        (when (and total-contributed soft-cap-amount after-soft-cap-duration)
          [row
           {:center "xs"
            :style styles/margin-top-gutter-more}
           (if (< total-contributed soft-cap-amount)
             [:div
              {:style styles/full-width}
              [ui/linear-progress
               {:mode "determinate"
                :style styles/cap-progress
                :color styles/theme-orange
                :max soft-cap-amount
                :value total-contributed}]
              [:h3
               {:style styles/full-width}
               "Soft Cap " (js/parseInt total-contributed) "/" (or soft-cap-amount 0) " ETH"]
              [:div
               {:style (merge styles/full-width
                              styles/fade-white-text)}
               "After soft cap is reached, the contribution period will be closed in " (t/in-hours (t/seconds after-soft-cap-duration))
               " hours" [:br]
               "In case of reaching " (or hard-cap-amount 0) " ETH hard cap, contribution period closes immediately"]]
             [:div
              {:style styles/full-width}
              [ui/linear-progress
               {:mode "determinate"
                :style styles/cap-progress
                :color styles/theme-orange
                :max hard-cap-amount
                :value total-contributed}]
              [:h3
               {:style styles/full-width}
               "Hard Cap " (js/parseInt total-contributed) "/" (or hard-cap-amount 0) " ETH"]
              [:div
               {:style (merge styles/full-width
                              styles/fade-white-text)}
               "After hard cap is reached, no more contributions will be accepted"]])])))))

(defn- external-link [body href]
  [:a
   {:href href
    :target :_blank
    :style {:color styles/theme-green}}
   body])

(defn contribution-contribute-section []
  (let [contribution-address (subscribe [:contribution-contract-address])
        contribute-form (subscribe [:form.contribution/contribute])
        can-use-form? (subscribe [:district0x/can-submit-into-blockchain?])
        contrib-period-status (subscribe [:contribution/current-contrib-period-status])
        current-contrib-period (subscribe [:contribution/contrib-period])
        contrib-config (subscribe [:contribution/configuration])
        confirmed-not-us-citizen? (subscribe [:confirmed-not-us-citizen?])
        confirmed-terms? (subscribe [:confirmed-terms?])
        confirmed-gas-price? (subscribe [:confirmed-gas-price?])
        confirmed-compensation? (subscribe [:confirmed-compensation?])
        confirmations-submitted? (subscribe [:confirmations-submitted?])
        disallowed-country? (subscribe [:disallowed-country?])
        ]
    (fn []
      (let [{:keys [:contrib-period/stake :contrib-period/enabled?]} @current-contrib-period
            {:keys [:data :loading?]} @contribute-form
            {:keys [:contribution/amount]} data
            {:keys [:contribution/stopped? :contribution/max-gas-price]} @contrib-config
            error-text (cond
                         (not (u/non-neg-ether-value? amount)) "This is not valid Ether value"
                         (< (u/parse-float amount) constants/min-contrib-amount) (str "Minimum contribution amount is "
                                                                                      constants/min-contrib-amount
                                                                                      " ETH"))]
        [row
         {:center "xs"
          :style styles/margin-top-gutter-more}
         (if @disallowed-country?
           [:div "We have detected that you are visiting this page from the United States or another unpermitted country. Please note: US citizens and residents are not permitted to participate in the district0x Contribution Period."]
           (if @confirmations-submitted?
             [:div
              [:h2
               {:style (merge styles/full-width
                              styles/margin-bottom-gutter-less)}
               "How to Contribute"]
              [:div
               {:style styles/full-width}
               "You can send Ether directly to contribution smart contract at"]
              [:h1
               {:style (merge styles/full-width
                              styles/margin-top-gutter-less
                              {:color styles/theme-green
                               :font-family "filson-soft, sans-serif"})}
               "district.eth" [:br]
               [:span {:style {:font-size "0.7em"}} @contribution-address]]
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
              [row
               {:style styles/full-width
                :middle "xs"
                :center "xs"}
               [ui/text-field
                {:floating-label-fixed true
                 :floating-label-text "Amount in Ether"
                 :default-value amount
                 :style (merge {:margin-left styles/desktop-gutter-mini
                                :margin-right styles/desktop-gutter-mini}
                               styles/margin-bottom-gutter-less)
                 :error-text error-text
                 :error-style styles/text-left
                 :disabled (or (= :contrib-period-status/ended @contrib-period-status)
                               (not enabled?)
                               stopped?)
                 :on-change #(dispatch [:district0x.form/set-value :form.contribution/contribute :default :contribution/amount %2])}]
               (if-not loading?
                 [ui/raised-button
                  {:primary true
                   :label "Send"
                   :disabled (or (not @can-use-form?)
                                 (boolean error-text)
                                 (= :contrib-period-status/ended @contrib-period-status)
                                 (not enabled?)
                                 stopped?)
                   :style {:margin-left styles/desktop-gutter-mini
                           :margin-right styles/desktop-gutter-mini
                           :margin-top 20}
                   :on-touch-tap #(dispatch [:contribution/contribute data])}]
                 [:div
                  {:style {:margin-top 20
                           :margin-left styles/desktop-gutter-mini
                           :margin-right styles/desktop-gutter-mini
                           :width 88}}
                  [ui/circular-progress
                   {:size 30
                    :thickness 2}]])]
              [:div
               {:style (merge styles/full-width)}
               "For detailed instructions watch our "
               [external-link "tutorials on Youtube" "https://youtube.com"]]]
             [:div
              {:style styles/full-width}
              [:h2
               {:style (merge styles/full-width
                              styles/margin-bottom-gutter)}
               "Before You Contribute"]
              [row
               {:center "xs"
                :style styles/full-width}
               [:div
                {:style styles/text-left}
                [ui/checkbox
                 {:label "I confirm that I have read and agree to the Contribution Terms."
                  :checked @confirmed-terms?
                  :on-check #(dispatch [:set-confirmation :confirmed-terms? %2])}]
                [ui/checkbox
                 {:label "I confirm that I am not a citizen or resident of the United States or other unpermitted country."
                  :checked @confirmed-not-us-citizen?
                  :on-check #(dispatch [:set-confirmation :confirmed-not-us-citizen? %2])}]
                [ui/checkbox
                 {:label (r/as-element [:span "I understand "
                                        [:b "the maximum gas price when contributing is 50 Gwei"]
                                        " and any transaction sent with a higher gas price will be rejected."])
                  :checked @confirmed-gas-price?
                  :on-check #(dispatch [:set-confirmation :confirmed-gas-price? %2])}]
                [ui/checkbox
                 {:label "I understand that it may take up to 7 days from the time the contribution period ends to receive DNT."
                  :checked @confirmed-compensation?
                  :on-check #(dispatch [:set-confirmation :confirmed-compensation? %2])}]]
               [:div
                {:style styles/full-width}
                [ui/raised-button
                 {:primary true
                  :label "Continue"
                  :style styles/margin-top-gutter-less
                  :disabled (or (not @confirmed-terms?)
                                (not @confirmed-not-us-citizen?)
                                (not @confirmed-gas-price?)
                                (not @confirmed-compensation?))
                  :on-touch-tap #(dispatch [:set-confirmation :confirmations-submitted? true])}]]]]))
         (when stake
           [:div
            [:div
             {:style styles/distribution-note}
             "Please note: " (u/format-eth stake) " DNT tokens will be divided and distributed amongst all
            participants " [:b "after the contribution period ends"] ". Each participant will receive an allocation
            proportional to the amount they contributed, relative to the total collected."]
            #_[:div
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
   [contribution-stats-tiles]
   [contribution-soft-cap-progress]
   [contribution-contribute-section]])

(defn logo []
  [:a
   {:href "https://district0x.io"}
   [:img
    {:style styles/logo
     :src "./images/district0x-logo.svg"}]])

(defn main-panel []
  (let [connection-error? (subscribe [:district0x/blockchain-connection-error?])
        snackbar (subscribe [:district0x/snackbar])
        contracts-not-found? (subscribe [:district0x/contracts-not-found?])
        xs-width? (subscribe [:district0x/window-xs-width?])]
    (fn []
      [misc/main-panel
       {:mui-theme styles/mui-theme}
       [:div
        {:style {:padding-bottom 20
                 :overflow :hidden
                 :position :relative
                 :min-height "100%"}}
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
        [:div {:style (merge styles/content-wrap
                             (when @xs-width?
                               (styles/padding-all styles/desktop-gutter-mini)))}
         (if @contracts-not-found?
           [contracts-not-found-page]
           [center-layout
            [contribution-panel]
            [admin-panel]])]]])))