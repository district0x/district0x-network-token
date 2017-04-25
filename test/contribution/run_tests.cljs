(ns contribution.run-tests
  (:require [print.foo :include-macros true]
            [cljs.test :refer-macros [run-tests]]
            [contribution.tests]))

(defn run-all-tests []
  (.clear js/console)
  (run-tests 'contribution.tests))

(comment
  (run-all-tests))

