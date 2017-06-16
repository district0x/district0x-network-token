(ns contribution.styles
  (:require [cljs-react-material-ui.core :refer [color get-mui-theme]]))

(def theme-cyan "#7cf8fa")
(def theme-blue "#2c398f")
(def theme-green "#23fdd8")
(def theme-orange "#ffd500")
(def theme-gray "#47608e")

(def primary1-color theme-cyan)
(def accent1-color theme-cyan)
(def text-color "rgba(0, 0, 0, 0.87)")

(def fade-white-color "rgba(255, 255, 255, 0.8)")

(def fade-white-text
  {:color fade-white-color})

(def palette {:primary1-color primary1-color
              :accent1-color accent1-color
              :text-color "#FFF"})


(def mui-theme (get-mui-theme {:palette palette
                               :font-family "proxima-soft, sans-serif"
                               :text-field {:error-color theme-orange
                                            :floating-label-color "#FFF"
                                            :focus-color theme-green
                                            :disabled-text-color "rgba(255, 255, 255, 0.6)"}
                               :paper {:background-color theme-blue
                                       :color "#FFF"}
                               :raised-button {:primary-text-color theme-blue
                                               :primary-color theme-green
                                               :disabled-text-color theme-blue
                                               :disabled-color "rgba(255, 255, 255, 0.6)"}
                               :drop-down-menu {:accent-color theme-blue}
                               :menu-item {:selected-text-color theme-cyan}
                               :snackbar {:background-color "rgba(0, 0, 0, 0.95)"
                                          :text-color theme-cyan}}))

;; --- GENERIC STYLES BEGNINNING ---

(def desktop-gutter (aget mui-theme "spacing" "desktopGutter"))
(def desktop-gutter-more (aget mui-theme "spacing" "desktopGutterMore"))
(def desktop-gutter-less (aget mui-theme "spacing" "desktopGutterLess"))
(def desktop-gutter-mini (aget mui-theme "spacing" "desktopGutterMini"))

(def margin-bottom-gutter
  {:margin-bottom desktop-gutter})

(def margin-bottom-gutter-more
  {:margin-bottom desktop-gutter-more})

(def margin-top-gutter-more
  {:margin-top desktop-gutter-more})

(def margin-bottom-gutter-less
  {:margin-bottom desktop-gutter-less})

(def margin-bottom-gutter-mini
  {:margin-bottom desktop-gutter-mini})

(def margin-top-gutter
  {:margin-top desktop-gutter})

(def margin-top-gutter-less
  {:margin-top desktop-gutter-less})

(defn margin-all [x]
  {:margin-top x
   :margin-bottom x
   :margin-right x
   :margin-left x})

(defn margin-horizontal [x]
  {:margin-right x
   :margin-left x})

(defn margin-vertical [x]
  {:margin-top x
   :margin-bottom x})

(defn padding-all [x]
  {:padding-top x
   :padding-bottom x
   :padding-right x
   :padding-left x})

(defn padding-horizontal [x]
  {:padding-right x
   :padding-left x})

(defn padding-vertical [x]
  {:padding-top x
   :padding-bottom x})

(def text-left
  {:text-align :left})

(def text-right
  {:text-align :right})

(def text-center
  {:text-align :center})

(def full-width
  {:width "100%"})

(def full-height
  {:height "100%"})

(def no-wrap
  {:white-space :nowrap})

(def word-wrap-break
  {:word-wrap :break-word})

(def clickable
  {:cursor :pointer})

(def display-inline
  {:display :inline})

(def display-block
  {:display :block})

(def italic-text
  {:font-style :italic})

(def bold-text
  {:font-style :bold})


;; --- GENERIC STYLES END ---

(def paper
  {:border-radius "10px"})

(def content-wrap
  (padding-all desktop-gutter))

(def white-text
  {:color (color :white)})

(def app-bar
  {:background-color "#FFF"
   :box-shadow "none"})

(def active-address-select-field
  {:color theme-blue
   :margin-right 10})

(def active-address-single
  {:margin-right 10
   :font-size "1.3em"
   :line-height "50px"
   :color theme-blue})

(def active-address-select-field-label
  {:color theme-blue})

(def app-bar-balance
  {:color theme-blue})

(def stats-tile-border-right
  {:border-right "0.5px solid rgba(255, 255, 255, 0.1)"})

(def stats-tile-border-bottom
  {:border-bottom "0.5px solid rgba(255, 255, 255, 0.1)"})

(def stats-tile-border-top
  {:border-top "0.5px solid rgba(255, 255, 255, 0.1)"})

(def stats-tile
  {:text-align "center"
   :height 250
   :color theme-green
   :font-family "filson-soft, sans-serif"})

(def stats-tile-title
  {:text-transform "uppercase"
   :font-size "0.95em"
   :font-weight "bold"
   :padding-bottom desktop-gutter-less
   :margin-bottom desktop-gutter-less
   :margin-left desktop-gutter-less
   :margin-right desktop-gutter-less})

(def contrib-countdown-unit
  {:font-size "0.9em"
   :width 60
   :display :inline-block
   :text-align :left})

(def contrib-countdown-value
  {:display :inline-block
   :font-size "2.7em"
   :width 57})

(def logo
  {:height 45
   :width "auto"
   :margin-top 13})



(def stats-tile-amount
  {:width "100%"
   :font-size "3em"
   :display :inline})

(def stats-tile-amount-subtitle
  {:width "100%"
   :font-size "1.2em"})

(def cap-progress
  (merge
    margin-bottom-gutter-less
    {:height "10px"
     :border-radius "10px"}))

(def distribution-note
  (merge full-width
         fade-white-text
         margin-top-gutter
         fade-white-text
         {:font-size "0.9em"}))

(def contrib-terms-link
  {:background-color theme-cyan
   :padding "8px 13px"
   :font-size "0.75em"
   :border-radius "20px"
   :color theme-blue
   :font-weight "bold"})

(def blob1
  {:position :absolute
   :top 200
   :left "-40%"
   :z-index -1
   :height 980
   :margin-bottom 40})

(def blob2
  {:position :absolute
   :top 300
   :right "-30%"
   :z-index -1
   :height 800
   :overflow :hidden})

(def blob3
  {:position :absolute
   :right "14%"
   :z-index -1
   :height 250
   :top 1030
   :margin-bottom 40})

(def blob4
  {:position :absolute
   :right "3%"
   :z-index -1
   :height 60
   :top 150})