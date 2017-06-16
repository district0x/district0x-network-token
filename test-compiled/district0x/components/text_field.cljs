(ns district0x.components.text-field
  (:require
    [district0x.utils :as u]
    [goog.string :as gstring]
    [goog.string.format]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as r]
    [reagent.impl.template :as tmpl]))

(def text-field*
  (tmpl/adapt-react-class
    (aget js/MaterialUI "TextField")
    ;; Optional...
    {:synthetic-input
     ;; A valid map value for `synthetic-input` does two things:
     ;; 1) It implicitly marks this component class as an input type so that interactive
     ;;    updates will work without cursor jumping.
     ;; 2) Reagent defers to its functions when it goes to set a value for the input component,
     ;;    or signal a change, providing enough data for us to decide which DOM node is our input
     ;;    node to target and continue processing with that (or any arbitrary behaviour...); and
     ;;    to handle onChange events arbitrarily.
     ;;
     ;;    Note: We can also use an extra hook `on-write` to execute more custom behaviour
     ;;    when Reagent actually writes a new value to the input node, from within `on-update`.
     ;;
     ;;    Note: Both functions receive a `next` argument which represents the next fn to
     ;;    execute in Reagent's processing chain.
     {:on-update (fn [next root-node rendered-value dom-value component]
                   (let [input-node (.querySelector root-node "input")
                         textarea-nodes (array-seq (.querySelectorAll root-node "textarea"))
                         textarea-node (when (= 2 (count textarea-nodes))
                                         ;; We are dealing with EnhancedTextarea (i.e.
                                         ;; multi-line TextField)
                                         ;; so our target node is the second <textarea>...
                                         (second textarea-nodes))
                         target-node (or input-node textarea-node)]
                     (when target-node
                       ;; Call Reagent's input node value setter fn (extracted from input-set-value)
                       ;; which handles updating of a given <input> element,
                       ;; now that we have targeted the correct <input> within our component...
                       (next target-node rendered-value dom-value component
                             ;; Also hook into the actual value-writing step,
                             ;; since `input-node-set-value doesn't necessarily update values
                             ;; (i.e. not dirty).
                             {:on-write
                              (fn [new-value]
                                ;; `blank?` is effectively the same conditional as Material-UI uses
                                ;; to update its `hasValue` and `isClean` properties, which are
                                ;; required for correct rendering of hint text etc.
                                (if (clojure.string/blank? new-value)
                                  (.setState component #js {:hasValue false :isClean false})
                                  (.setState component #js {:hasValue true :isClean false})))}))))
      :on-change (fn [next event]
                   ;; All we do here is continue processing but with the event target value
                   ;; extracted into a second argument, to match Material-UI's existing API.
                   (next event (-> event .-target .-value)))}}))

(defn text-field [{:keys [:value] :as props}]
  [text-field*
   (r/merge-props
     {:style {:display :block}
      :floating-label-fixed (boolean (seq (str value)))}
     props)])

(defn form-text-field [{:keys [:validator :form-key :field-key :value] :as props}]
  [text-field
   (r/merge-props
     {:on-change #(dispatch [:form/set-value form-key field-key %2 validator])}
     (dissoc props :validator :form-key :field-key))])

(defn text-field-with-length []
  (fn [{:keys [:value :on-change :max-length :min-length :max-length-error-text
               :min-length-error-text] :as props}]
    (let [validator (u/create-length-validator min-length max-length)
          valid? (validator value)]
      [form-text-field
       (r/merge-props
         {:validator validator
          :error-text (when-not valid?
                        (if (pos? min-length)
                          (or min-length-error-text
                              (gstring/format "Write between %s and %s characters" min-length max-length))
                          (or max-length-error-text
                              "Text is too long")))}
         (dissoc props :min-length :max-length))])))

(defn url-field []
  (fn [{:keys [:value :on-change :max-length :allow-empty? :max-length-error-text
               :url-error-text] :as props}]
    (let [max-length-validator (u/create-length-validator max-length)]
      [form-text-field
       (r/merge-props
         {:validator (every-pred #(u/http-url? % {:allow-empty? allow-empty?}) max-length-validator)
          :error-text (if-not (max-length-validator value)
                        (or max-length-error-text
                            (gstring/format "URL must be shorter than %s characters" max-length))
                        (when-not (u/http-url? value {:allow-empty? allow-empty?})
                          (or url-error-text
                              "Invalid URL")))}
         (dissoc props :allow-empty? :max-length :max-length-error-text :url-error-text))])))

(defn ether-field [{:keys [:value :on-change :form-key :field-key :on-change :allow-empty?
                           :only-positive? :value-error-text] :as props}]
  (let [validator (if only-positive? u/pos-ether-value? u/non-neg-ether-value?)]
    [text-field
     (r/merge-props
       {:on-change (fn [e value]
                     (if on-change
                       (on-change e value)
                       (dispatch [:form/set-value
                                  form-key
                                  field-key
                                  value
                                  #(validator % (select-keys props [:allow-empty?]))])))
        :error-text (when-not (validator value (select-keys props [:allow-empty?]))
                      (or value-error-text "Invalid value"))}
       (dissoc props :form-key :field-key :on-change :allow-empty? :only-positive?
               :value-error-text))]))
