(ns district0x.components.utils
  (:require [reagent.core :as r]))

(defn parse-props-children [props children]
  (if (map? props)
    [props children]
    [nil (concat [props] children)]))

(defn create-with-default-props [component default-props]
  (fn [props & children]
    (let [[props children] (parse-props-children props children)]
      (into [] (concat
                 [component (r/merge-props default-props props)]
                 children)))))

(defn current-component-mui-theme []
  (aget (r/current-component) "_reactInternalInstance" "_context" "muiTheme"))
