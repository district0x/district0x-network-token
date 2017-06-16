(ns contribution.cmd
  (:require
    [cljs.nodejs :as nodejs]
    [contribution.tests]
    [cljs.test :refer-macros [run-tests]]
    #_[doo.runner :refer-macros [doo-tests]]))

(nodejs/enable-util-print!)
(set! js/window #js {})

#_(doo-tests 'contribution.tests)

(set! (.-error js/console) (fn [x] (.log js/console x)))

(comment
  (run-all-tests)
  (run-tests 'contribution.tests)
  ((doo-tests 'contribution.tests)))

(defn -main [& _]
  (run-tests 'contribution.tests))

(set! *main-cli-fn* -main)

