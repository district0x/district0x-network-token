(ns district0x.test.browser
  (:require [ajax.core :refer [GET]]
            [cljs.core.async :refer [<! >! chan]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn fetch-contract [file-name res-ch {:keys [:contracts-path :response-format]
                                        :or {contracts-path "contracts/build/"}}]
  (GET (str contracts-path file-name "?_=" (.getTime (new js/Date)))
       {:response-format response-format
        :keywords? true
        :handler #(go (>! res-ch %))
        :error-handler #(.error js/console %)}))

(defn fetch-abi [contract-name res-ch & [opts]]
  (fetch-contract (str contract-name ".abi") res-ch (assoc opts :response-format :json)))

(defn fetch-bin [contract-name res-ch & [opts]]
  (fetch-contract (str contract-name ".bin") res-ch (assoc opts :response-format :text)))

(defn fetch-abi-bin [contract-name abi-res-ch bin-res-ch & [opts]]
  (fetch-abi contract-name abi-res-ch opts)
  (fetch-bin contract-name bin-res-ch opts))
