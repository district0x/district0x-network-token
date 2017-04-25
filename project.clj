(defproject contribution "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[camel-snake-kebab "0.4.0"]
                 [cljs-ajax "0.5.9"]
                 [cljs-web3 "0.18.4-0"]
                 [cljsjs/bignumber "2.1.4-1"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [org.clojure/clojurescript "1.9.227"]]

  :plugins [[lein-auto "0.1.2"]
            [lein-cljsbuild "1.1.4"]
            [lein-shell "0.5.0"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:server-port 6376}

  :auto {"compile-solidity" {:file-pattern #"\.(sol)$"
                             :paths ["resources/public/contracts/src"]}}

  :aliases {"compile-solidity" ["shell" "./compile-solidity.sh"]}

  :profiles {:dev
             {:dependencies [[org.clojure/clojure "1.8.0"]
                             [binaryage/devtools "0.9.4"]
                             [com.cemerick/piggieback "0.2.1"]
                             [figwheel-sidecar "0.5.10"]
                             [org.clojure/tools.nrepl "0.2.13"]]
              :plugins [[lein-figwheel "0.5.10"]]
              :source-paths []
              :resource-paths ["resources"]
              :cljsbuild {:builds [{:id "dev"
                                    :source-paths ["src" "test"]
                                    :figwheel {:on-jsload contribution.run-tests/run-all-tests}
                                    :compiler {:main contribution.run-tests
                                               :output-to "resources/public/js/compiled/app.js"
                                               :output-dir "resources/public/js/compiled/out"
                                               :asset-path "/js/compiled/out"
                                               :source-map-timestamp true
                                               :optimizations :none
                                               :preloads [print.foo.preloads.devtools]
                                               }}]}}})
