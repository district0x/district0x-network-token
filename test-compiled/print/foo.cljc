(ns print.foo
  "Macros for printing diagnostic information while debugging or developing."
  (:refer-clojure :exclude [*print-fn*])
  (:require
    [clojure.string :as str]
    #?(:clj
    [clojure.pprint :as pp]
       :cljs [cljs.pprint :as pp])))

(def ^:dynamic *print-fn* pp/pprint)
(def ^:dynamic *enabled* true)

(defn ^:private single-destructuring-arg->form+name
  "Turns any one binding arg (which may be a destructuring binding) into a vector
  where the left elem is the arg with a possible :as added to it.
  And the rght side is the symbol referring to the arg itself."
  [arg-form]
  (let [as-symbol (gensym 'symbol-for-destructured-arg)
        snd-to-last-is-as? #(= :as (second (reverse %)))]
    (cond (and (vector? arg-form) (snd-to-last-is-as? arg-form))
          [arg-form (last arg-form)]

          (vector? arg-form)
          [(-> arg-form (conj :as) (conj as-symbol)) as-symbol]

          (and (map? arg-form) (contains? arg-form :as))
          [arg-form (:as arg-form)]

          (map? arg-form)
          [(assoc arg-form :as as-symbol) as-symbol]

          :else
          [arg-form arg-form])))

(defn ^:private expand-arg [arg]
  (if (symbol? arg)
    arg
    (first (single-destructuring-arg->form+name arg))))

(defn print-and-return
  "Diagnostic tool for printing the result of evaluating an s-expression.
   Any initial args over 1, are printed as strings, and generally used as a label."
  [& xs]
  (when *enabled*
    (when (seq (butlast xs))
      (print (apply str (butlast xs))))
    (*print-fn* (last xs)))
  (last xs))

(def tap
  "Quicker-to-type version of `print-and-return` with \" *** \" appended to the front"
  (partial print-and-return " *** "))

(defn ^:private resolves-to-fn? [x]
  #?(:clj  (boolean (some-> x resolve deref fn?))
     :cljs true))

(defmulti parse-item
          (fn [x]
            (cond (list? x) :list
                  (vector? x) :vector
                  (set? x) :set
                  (map? x) :map
                  (and (symbol? x)
                       (not (resolves-to-fn? x))) :sym
                  :else :default)))

(defmulti parse-list (fn [[sym & _]]
                       sym))


(defmethod parse-item :list [lst]
  (parse-list lst))

(defmethod parse-item :vector [v]
  (into (empty v) (map parse-item v)))

(defmethod parse-item :set [s]
  (into (empty s) (map parse-item s)))

(defmethod parse-item :map [m]
  (into (empty m)
        (for [[k v] m]
          [(parse-item k) (parse-item v)])))

(defmethod parse-item :sym [s]
  `(print-and-return '~s " " ~s))

(defmethod parse-item :default [x]
  x)


(defmethod parse-list '-> [[_ & args]]
  `(print-> ~@args))

(defmethod parse-list '->> [[_ & args]]
  `(print->> ~@args))

(defmethod parse-list 'cond-> [[_ & args]]
  `(print-cond-> ~@args))

(defmethod parse-list 'cond->> [[_ & args]]
  `(print-cond->> ~@args))


(defmethod parse-list 'let [[_ & [bindings & body]]]
  (let [bdg-names (take-nth 2 bindings)
        bdg-vals (take-nth 2 (rest bindings))]
    `(print-let ~(vec (interleave bdg-names
                                  (map parse-item bdg-vals)))
                ~@(map parse-item body))))

(defmethod parse-list 'if [[_ & args]]
  `(print-if ~@(map parse-item args)))

(defmethod parse-list 'cond [[_ & args]]
  `(cond ~@(map parse-item args)))

(defmethod parse-list 'defn [[_ & args]]
  `(print-defn ~@args))

(defmethod parse-list 'defn- [[_ & args]]
  `(print-defn- ~@args))

(defmethod parse-list :default [[sym & args]]
  (let [l (concat [sym] args)]
    `(print-and-return
       '~l
       " "
       ~(map (fn [idx x]
               (if (zero? idx)
                 x
                 (parse-item x)))
             (range)
             l))))

(defn get-miliseconds []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getMilliseconds (new js/Date))))

(defn wrap-middleware-debugging
  [handler middleware-name {:keys [get-in summarize? timings?]
                            :or   {get-in     []
                                   summarize? true
                                   timings?   false}}]
  (fn [request]
    (print-and-return (str "REQUEST - GOING INTO: " middleware-name))
    (print-and-return (clojure.core/get-in request get-in))
    (let [start (get-miliseconds)
          result (handler request)
          end (get-miliseconds)
          result (-> result
                     (cond->
                       timings?
                       (update-in [::timings] #(conj (or % [])
                                                     {:middleware         middleware-name
                                                      :middleware-elapsed (- end start)}))))]
      (print-and-return (str "RESPONSE - COMING OUT OF: " middleware-name))
      (print-and-return (clojure.core/get-in result get-in))
      (if (and timings? summarize?)
        (do
          (print-and-return {:middleware-timings (::timings result)})
          (dissoc result ::timings))
        result))))

(defn ^:private interleave-middlewares
  [handler middlewares {:keys [get-in timings?]
                        :or   {get-in   []
                               timings? false}}]
  (let [summarize?-determinations (conj (vec (repeat (dec (count middlewares))
                                                     false))
                                        true)
        mw-names (map str middlewares)
        logging-mws (for [[summarize? mw-name] (map list
                                                    summarize?-determinations
                                                    mw-names)]
                      `(wrap-middleware-debugging ~mw-name {:summarize? ~summarize?
                                                            :get-in     ~get-in
                                                            :timings?   ~timings?}))]
    `(-> ~handler
         ~@(interleave middlewares logging-mws))))


#?(:clj
   (do
     (defmacro look
       "Like print-and-return, except always prefixes with the uppercased sexp followed by ':: '"
       [sexp]
       `(tap ~(str/upper-case (str sexp ":: "))
             ~sexp))

     (defmacro print-->
       "Diagnostic tool for printing the values at each step of a `->`"
       [& body]
       (let [print-forms (map #(list `(fn [x#] (print-and-return '~% " " x#))) body)]
         (cons '-> (interleave body print-forms))))

     (defmacro print-->>
       "Diagnostic tool for printing the values at each step of a `->>`"
       [& body]
       (let [print-forms (map (fn [x] `(print-and-return '~x " ")) body)]
         (cons '->> (interleave body print-forms))))

     (defmacro print-let
       "Diagnostic tool for printing the values at each step of a `let`"
       [bindings & body]
       (let [firsts (take-nth 2 bindings)
             seconds (take-nth 2 (rest bindings))]
         `(let ~(vec (interleave firsts
                                 (map (fn [lhs rhs]
                                        `(print-and-return '~lhs " " ~rhs))
                                      firsts
                                      seconds)))
            (print-and-return "let result: " (do ~@body)))))

     (defmacro print-if
       "Diagnostic tool for printing the values at each step of an `if`"
       [test expr1 expr2]
       `(if (print-and-return '~test " " ~test)
          (print-and-return '~expr1 " " ~expr1)
          (print-and-return '~expr2 " " ~expr2)))

     (defmacro print-cond
       "Diagnostic tool for printing the values at each step of a `cond`"
       [& body]
       (cons 'cond (for [[test expr] (partition 2 body)
                         sym [test `(print-and-return "test: " '~test "\nvalue: " ~expr)]]
                     sym)))

     (defmacro print-cond->
       "Diagnostic tool for printing the values at each step of a `cond->`"
       [& body]
       (cons 'cond->
             (cons (first body)
                   (for [[test expr] (partition 2 (rest body))
                         sym [test `((fn [x#]
                                       (print-and-return "test: " '~test
                                                         "  value: " (~(first expr)
                                                                       x#
                                                                       ~@(rest expr)))))]]
                     sym))))

     (defmacro print-cond->>
       "Diagnostic tool for printing the values at each step of a `cond->>`"
       [& body]
       (cons 'cond->>
             (cons (first body)
                   (for [[test expr] (partition 2 (rest body))
                         sym [test `((fn [x#]
                                       (print-and-return "test: " '~test
                                                         "  value: " (~(first expr)
                                                                       ~@(rest expr)
                                                                       x#))))]]
                     sym))))

     (defmacro print-defn
       "Diagnostic tool for printing the values at each step of a `defn`"
       [fn-name arg-vec & body]
       (let [new-arg-vec (vec (map expand-arg arg-vec))]
         `(defn ~fn-name ~new-arg-vec
            ~@(keep (fn [x]
                      (cond (and (not= '& x) (symbol? x))
                            `(print-and-return '~x " " ~x)

                            (not= '& x)
                            (let [[form as] (single-destructuring-arg->form+name x)]
                              `(print-and-return '~x " " ~as))))
                    new-arg-vec)
            nil
            (print-and-return "defn '" '~fn-name "' result: " (do ~@body)))))

     (defmacro print-defn-
       "Diagnostic tool for printing the values at each step of a `defn-`"
       [fn-name arg-vec & body]
       (let [new-arg-vec (vec (map expand-arg arg-vec))]
         `(defn- ~fn-name ~new-arg-vec
            ~@(keep (fn [x]
                      (cond (and (not= '& x) (symbol? x))
                            `(print-and-return '~x " " ~x)

                            (not= '& x)
                            (let [[form as] (single-destructuring-arg->form+name x)]
                              `(print-and-return '~x " " ~as))))
                    new-arg-vec)
            nil
            (print-and-return "defn- '" '~fn-name "' result: " (do ~@body)))))


     ;;; `print-sexp` print.foo's code-walking macro :)

     (defmacro print-sexp
       "Diagnostic tool for printing the values at each step of a given s-expression"
       [sexp]
       (parse-item sexp))

     (defmacro middleware->
       "Log middleware options are:

        {:get-in <path to print into the request and response>
         :timings? <print timing info for each handler?>

       Ex. (middleware->
            {:get-in [:session]
             :timings? true}}
            my-handler
            wrap-exception-handling
            wrap-params)"
       {:arglists '([handler & middlewares]
                     [handler options & middlewares])}
       [& options+handler+middlewares]
       (if-not (map? (first options+handler+middlewares))
         (let [handler (first options+handler+middlewares)
               middlewares (rest options+handler+middlewares)]
           (#'interleave-middlewares handler middlewares {}))
         (let [options (first options+handler+middlewares)
               handler (second options+handler+middlewares)
               middlewares (rest (rest options+handler+middlewares))]
           (#'interleave-middlewares handler middlewares options))))
     ))