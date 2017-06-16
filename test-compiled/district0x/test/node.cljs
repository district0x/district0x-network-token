(ns district0x.test.node)

(def fs (js/require "fs"))

(defn fetch-contract [file-name & [{:keys [:contracts-path :response-format]
                                    :or {contracts-path (str (.cwd js/process)
                                                             "/resources/public/contracts/build/")}}]]
  (.readFileSync fs (str contracts-path file-name) "utf-8"))

(defn fetch-abi [contract-name & [opts]]
  (js/JSON.parse (fetch-contract (str contract-name ".abi"))))

(defn fetch-bin [contract-name & [opts]]
  (fetch-contract (str contract-name ".bin") opts))