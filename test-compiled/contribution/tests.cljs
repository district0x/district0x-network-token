(ns contribution.tests
  (:require
    [cljs-time.coerce :refer [to-epoch]]
    [cljs-time.core :as time]
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth :refer [contract-call]]
    [cljs-web3.evm :as web3-evm]
    [cljs.core.async :refer [<! >! chan]]
    [cljs.nodejs :as nodejs]
    [cljs.test :refer-macros [deftest is testing run-tests use-fixtures async]]
    [contribution.api :refer [parse-get-contrib-period contrib-period-args parse-get-configuration]]
    [district0x.big-number :as bn]
    [district0x.test.contracts :as test-utils :refer [state-call! now-plus-seconds get-balance-ch contract-call-ch state-call-ch! state-call-ch! increase-time-and-mine-ch! mine-ch!]]
    [district0x.test.node :refer [fetch-contract fetch-bin fetch-abi]]
    [district0x.utils :as u :refer [wei->eth->num eth->wei->num]]
    [print.foo :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(def accounts-secrets ["0x2331c9b2390ff4acfd9bb1277f35cb303581bf8d30433aec9d517dd7c6213e05"
                       "0x862b9e4ac273b75153122c16611bb73b85ee35d2443f49b6651dde9b624d3175"
                       "0xfe7a2920e0b7572ee98e78b4a551723697c1678bed60d2c7ddd8d015ea15f241"
                       "0x84aae7d13483fc0ef0910cae872a15a10f60a495b7067793bc868250d1c760ba"
                       "0x4919c9259eac34d6af231edf36af697f7a6291bc28c9837f7fabb678e750fb98"
                       "0xbad6bfea21ca0d5d9e02f8a6854a5d6aea31fc57505ce336ea7ebbf31e91f487"
                       "0xd804f2fe99d8186aa9dc2a6e74c0c4a551b12d29db9bba79187664b86a830659"
                       "0x564af4b4727963fd3830abfdef5f97ba2b06926760aaff5869e6f8f4ce6e2538"
                       "0x5a157c8984c783fe9e1fc33f8b25e5a2b9d46b78b06e8d0081d594483fb52a52"
                       "0xe80a3596cd9c6daaa66007e742d5fc07a7cb0d139f2a904a218edb14d47e7de2"
                       "0x7bb136a6ec7bbe915bf8acc42ce0625936c5ddf970c23953b81f5304ace40c08"
                       "0xc65d6da272a181baa120e492e69bb94a4cfc70188fbe97cd46359c0f35a78f92"
                       "0x433fdca0953ec0b358178085e74d108587374f4d8b823cf93e3c46685981b6a6"
                       "0x99465e2dc764d25d60f76c0f3f7857bfacd873c8958cc24bf5361e1f57abc1ea"
                       "0xbd410cd7cfe6209e37b37ca3dd316b63971633a7e3a6c4781137df35fae5c23a"])

(def accounts ["0x76852ba1f2fcb6355c57ffbd0bccfc226411f611"
               "0xe5e0c25e7928ddb94a5a9569e25bdb1c5ef68392"
               "0x7d3a19dc294eb5043e019b72adae56d67eaa4b07"
               "0xd43c63869ea4c4a73efe218321a4f0653304026f"
               "0xb2165ba402f5625ba5d59bc432b79bcc342250ae"
               "0x979582a341f47a4caeac6cefb1a3af123a939264"
               "0xb66b622f6ee6cc98581ed03ea2a393cb2de7a33e"
               "0x6e17baf999bb6a6204d80d55a3e0910e7d4eceed"
               "0x85ebe786470fd4204b307f39f49724136fcd2a2c"
               "0x46f9d973f77133ecbfc0d1f43de3c00147a82096"
               "0x0cf38f282e4cd051ca637115f745a8f60cbd215e"
               "0xebbf7c3882b86f5eb4f13dbaed2487837f6ce786"
               "0x4ee964fa20f7f3195b34a2d76579ced86a3de171"
               "0xdd88343d4760e872d86a309c6cd3a4ed247fd335"
               "0x1a1191cea03f9a15159f77e5e50f221c2b4b7eff"])

(def Web3 (js/require "web3"))
(def TestRPC (js/require "ethereumjs-testrpc"))
(set! js/Web3 Web3)

(def web3 (new Web3))
(.setProvider web3 (.provider TestRPC (clj->js {:accounts (->> accounts-secrets
                                                            (map (fn [secret]
                                                                   {:balance (web3/to-wei 0x64 :ether)
                                                                    :secretKey secret})))
                                                :locked false})))

(def ^:dynamic MiniMeTokenFactory nil)
(def ^:dynamic Contribution nil)
(def ^:dynamic DNTToken nil)

(def owner1 (nth accounts 0))
(def owner2 (nth accounts 1))
(def wallet (nth accounts 9))
(def founder1 (nth accounts 2))
(def founder2 (nth accounts 3))
(def early-sponsor (nth accounts 4))
(def adviser1 (nth accounts 5))
(def adviser2 (nth accounts 6))
(def legal-adviser (nth accounts 7))
(def community-advisors (nth accounts 8))

(defn- get-dnt-balance [address]
  (contract-call-ch (chan 1 (map wei->eth->num)) DNTToken :balance-of address))

(defn- contrib-period-running? []
  (let [ch (chan)
        ch1 (contract-call-ch Contribution :CONTRIB_PERIODS)
        ch2 (contract-call-ch Contribution :get-running-contrib-period)]
    (go
      (>! ch (not (bn/eq? (<! ch1) (<! ch2)))))
    ch))

(defn get-contrib-period [period-index]
  (contract-call-ch (chan 1 (map parse-get-contrib-period)) Contribution :get-contrib-period period-index))


(defn deploy-contracts! [done]
  (go
    (let [mmtf-ch (chan)
          contrib-ch (chan)
          dnt-token-ch (chan)]

      (test-utils/deploy-contract!
        {:web3 web3
         :from owner1
         :abi (fetch-abi "MiniMeTokenFactory")
         :bin (fetch-bin "MiniMeTokenFactory")
         :res-ch mmtf-ch
         :args []})

      (set! MiniMeTokenFactory (<! mmtf-ch))

      (test-utils/deploy-contract!
        {:web3 web3
         :from owner1
         :abi (fetch-abi "District0xContribution")
         :bin (fetch-bin "District0xContribution")
         :res-ch contrib-ch
         :args [[owner1 owner2] 2 wallet founder1 founder2 early-sponsor [adviser1 adviser2 legal-adviser community-advisors]]})

      (set! Contribution (<! contrib-ch))

      (test-utils/deploy-contract!
        {:web3 web3
         :from owner1
         :abi (fetch-abi "District0xNetworkToken")
         :bin (fetch-bin "District0xNetworkToken")
         :res-ch dnt-token-ch
         :args [(aget Contribution "address") (aget MiniMeTokenFactory "address")]})

      (set! DNTToken (<! dnt-token-ch))
      (state-call! Contribution :set-district0x-network-token {:from owner1
                                                               :args [(aget DNTToken "address")]
                                                               :on-error test-utils/assert-no-error
                                                               :callback #(done)}))))

(use-fixtures
  :each
  {:before
   (fn []
     (async done
       (deploy-contracts! done)))
   :after
   (fn []
     (async done (js/setTimeout #(done) 0)))                ; Prevents from hanging between tests, don't ask me why
   })

(deftest contracts-setup
  (is MiniMeTokenFactory)
  (is Contribution)
  (is DNTToken)

  (async done
    (go
      (is (= (aget DNTToken "address") (<! (contract-call-ch Contribution :district0x-network-token))))
      (is (= (aget Contribution "address") (<! (contract-call-ch DNTToken :controller))))
      (is (= (aget MiniMeTokenFactory "address") (<! (contract-call-ch DNTToken :token-factory))))
      (is (= wallet (<! (contract-call-ch Contribution :wallet))))
      (is (= founder1 (<! (contract-call-ch Contribution :founder1))))
      (is (= founder2 (<! (contract-call-ch Contribution :founder2))))
      (is (= early-sponsor (<! (contract-call-ch Contribution :early-sponsor))))
      (is (= adviser1 (<! (contract-call-ch Contribution :advisers 0))))
      (is (= adviser2 (<! (contract-call-ch Contribution :advisers 1))))
      (is (= legal-adviser (<! (contract-call-ch Contribution :advisers 2))))
      (is (= community-advisors (<! (contract-call-ch Contribution :advisers 3))))
      (is (= owner1 (<! (contract-call-ch Contribution :get-owner 1))))
      (is (= owner2 (<! (contract-call-ch Contribution :get-owner 2))))
      (is (= 1000000000 (wei->eth->num (<! (contract-call-ch DNTToken :total-supply)))))
      (is (not (<! (contract-call-ch Contribution :token-transfers-enabled))))
      (is (= 0 (<! (get-dnt-balance founder1))))
      (is (= 0 (<! (get-dnt-balance founder2))))
      (is (= 0 (<! (get-dnt-balance wallet))))
      (is (= 0 (<! (get-dnt-balance early-sponsor))))
      (is (= 0 (<! (get-dnt-balance adviser1))))
      (is (= 0 (<! (get-dnt-balance adviser2))))
      (is (= 0 (<! (get-dnt-balance legal-adviser))))
      (is (= 0 (<! (get-dnt-balance community-advisors))))
      (is (= 1000000000 (<! (get-dnt-balance (aget Contribution "address")))))
      (done))))

(deftest contribution1
  (async done
    (let [contrib-period1 (chan)
          contrib-period2 (chan)]
      (go
        (go
          (testing "Shouldn't be able to contribute when contribution period is not running"
            (is (u/error? (<! (state-call-ch! Contribution :contribute {:from (nth accounts 10)
                                                                        :value-ether 1})))))

          (let [soft-cap-amount (eth->wei->num 10)
                after-soft-cap-duration (time/in-seconds (time/hours 48))
                hard-cap-amount (eth->wei->num 15)
                start-time-seconds 60
                end-time-seconds 120
                start-time (now-plus-seconds start-time-seconds)
                end-time (now-plus-seconds end-time-seconds)]


            (testing "Should be able to set contribution period"
              (is (u/tx-address? (<! (state-call-ch! Contribution :set-contrib-period
                                                     {:from owner1
                                                      :args (contrib-period-args
                                                              {:contribution/period-index 0
                                                               :contrib-period/soft-cap-amount soft-cap-amount
                                                               :contrib-period/after-soft-cap-duration after-soft-cap-duration
                                                               :contrib-period/hard-cap-amount hard-cap-amount
                                                               :contrib-period/start-time start-time
                                                               :contrib-period/end-time end-time})}))))

              (let [contrib-period (<! (get-contrib-period 0))]
                (is (= (wei->eth->num soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
                (is (= after-soft-cap-duration (:contrib-period/after-soft-cap-duration contrib-period)))
                (is (= start-time (to-epoch (:contrib-period/start-time contrib-period))))
                (is (= end-time (to-epoch (:contrib-period/end-time contrib-period))))
                (is (= false (:contrib-period/enabled? contrib-period)))
                (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
                (is (zero? (:contrib-period/total-contributed contrib-period)))
                (is (zero? (:contrib-period/contributors-count contrib-period))))

              (is (= 120000000 (<! (get-dnt-balance founder1))))
              (is (= 80000000 (<! (get-dnt-balance founder2))))
              (is (= 5000000 (<! (get-dnt-balance early-sponsor))))
              (is (= 5000000 (<! (get-dnt-balance adviser1))))
              (is (= 5000000 (<! (get-dnt-balance adviser2))))
              (is (= 2000000 (<! (get-dnt-balance legal-adviser))))
              (is (= 3000000 (<! (get-dnt-balance community-advisors))))
              (is (= 780000000 (<! (get-dnt-balance (aget Contribution "address")))))

              (testing "Token grants are setup okay"
                (doseq [account-index [founder1 founder2 early-sponsor adviser1 adviser2 legal-adviser community-advisors]]
                  (is (bn/eq? (<! (contract-call-ch DNTToken :token-grants-count founder1)) 1))
                  (let [[granter amount vested-amount start-date cliff-date vesting-date]
                        (<! (contract-call-ch DNTToken :token-grant founder1 0))]
                    (is (= granter (aget Contribution "address")))
                    (bn/eq? vested-amount 0))))

              (testing "Setting first contrib period again will keep correct dnt balances"
                (is (u/tx-address? (<! (state-call-ch! Contribution :set-contrib-period
                                                       {:from owner1
                                                        :args (contrib-period-args
                                                                {:contribution/period-index 0
                                                                 :contrib-period/soft-cap-amount soft-cap-amount
                                                                 :contrib-period/after-soft-cap-duration after-soft-cap-duration
                                                                 :contrib-period/hard-cap-amount hard-cap-amount
                                                                 :contrib-period/start-time start-time
                                                                 :contrib-period/end-time end-time})}))))

                (let [contrib-period (<! (get-contrib-period 0))]
                  (is (= (wei->eth->num soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
                  (is (= after-soft-cap-duration (:contrib-period/after-soft-cap-duration contrib-period)))
                  (is (= start-time (to-epoch (:contrib-period/start-time contrib-period))))
                  (is (= end-time (to-epoch (:contrib-period/end-time contrib-period))))
                  (is (= false (:contrib-period/enabled? contrib-period)))
                  (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
                  (is (zero? (:contrib-period/total-contributed contrib-period)))
                  (is (zero? (:contrib-period/contributors-count contrib-period))))

                (is (= 120000000 (<! (get-dnt-balance founder1))))
                (is (= 80000000 (<! (get-dnt-balance founder2))))
                (is (= 5000000 (<! (get-dnt-balance early-sponsor))))
                (is (= 5000000 (<! (get-dnt-balance adviser1))))
                (is (= 5000000 (<! (get-dnt-balance adviser2))))
                (is (= 2000000 (<! (get-dnt-balance legal-adviser))))
                (is (= 3000000 (<! (get-dnt-balance community-advisors))))
                (is (= 780000000 (<! (get-dnt-balance (aget Contribution "address"))))))

              (testing "Only one owner shouldn't be able to enable contribution period"
                (<! (state-call-ch! Contribution :enable-contrib-period {:from owner1 :args [0]}))
                (is (= false (:contrib-period/enabled? (<! (get-contrib-period 0))))))

              (testing "Confirmation of another owner should enable contribution period"
                (<! (state-call-ch! Contribution :enable-contrib-period {:from owner2 :args [0]}))
                (is (= true (:contrib-period/enabled? (<! (get-contrib-period 0))))))

              (testing "Shouldn't be able to contribute before contribution start time"
                (is (u/error? (<! (state-call-ch! Contribution :contribute {:from owner1 :value-ether 1})))))

              (testing "Contrib period 1 is running"
                (is (false? (<! (contrib-period-running?)))))

              (<! (increase-time-and-mine-ch! web3 start-time-seconds))

              (testing "Contrib period 1 is running"
                (is (true? (<! (contrib-period-running?)))))

              (testing "Contribution round 1"
                (let [wallet-balance-before (<! (get-balance-ch web3 wallet))
                      contributions [[(nth accounts 10) 1]
                                     [(nth accounts 11) 1.5]
                                     [(nth accounts 12) 2]
                                     [(nth accounts 13) 2.5]]
                      contributors (mapv first contributions)
                      contribs-total (->> contributions
                                       (map second)
                                       (reduce + 0)
                                       eth->wei->num)
                      expected-dnt-balances [(web3/to-big-number "85714285714285714285714285")
                                             (web3/to-big-number "128571428571428571428571427")
                                             (web3/to-big-number "171428571428571428571428570")
                                             (web3/to-big-number "214285714285714285714285712")]
                      dnt-compensated-total (reduce bn/+ (web3/to-big-number 0) expected-dnt-balances)]

                  (testing "Users should be able to contribute"
                    (doseq [[contributor amount] contributions]
                      (is (u/tx-address? (<! (state-call-ch! Contribution :contribute
                                                             {:from contributor
                                                              :value-ether amount})))))
                    (is (bn/eq? (bn/+ wallet-balance-before contribs-total) (<! (get-balance-ch web3 wallet))))

                    (<! (mine-ch! web3))

                    (doseq [[contributor amount] contributions]
                      (let [[contrib-amount compensated?] (<! (contract-call-ch Contribution :get-contributor 0 contributor))]
                        (is (= (wei->eth->num contrib-amount) amount))
                        (is (false? compensated?))))

                    (let [contrib-period (<! (get-contrib-period 0))]
                      (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
                      (is (= (wei->eth->num contribs-total) (:contrib-period/total-contributed contrib-period)))
                      (is (= (count contributors) (:contrib-period/contributors-count contrib-period)))))

                  (testing "Shouldn't be able to compensate when contrib period is still running"
                    (is (u/error? (<! (state-call-ch! Contribution :compensate-contributors
                                                      {:from owner1
                                                       :args [0 0 10]})))))

                  (<! (increase-time-and-mine-ch! web3 (- end-time-seconds start-time-seconds)))

                  (testing "Contributors should be compensated with dnt tokens after contrib period ended"
                    (state-call-ch! Contribution :compensate-contributors {:from owner1
                                                                           :args [0 0 10]})

                    (doseq [[contributor expected-dnt] (zipmap contributors expected-dnt-balances)]
                      (is (bn/eq? expected-dnt (<! (contract-call-ch DNTToken :balance-of contributor)))))
                    (is (= 600000000 (wei->eth->num dnt-compensated-total))))))))
          (>! contrib-period1 true))

        (<! contrib-period1)

        (go
          (testing "Contribution round 2"
            (let [wallet-balance-before (<! (get-balance-ch web3 wallet))
                  soft-cap-amount (eth->wei->num 3)
                  hard-cap-amount (eth->wei->num 6)
                  start-time-seconds 300
                  after-soft-cap-seconds 200
                  start-time (now-plus-seconds start-time-seconds)
                  end-time (now-plus-seconds 10000)
                  contributions [[(nth accounts 10) 2] [(nth accounts 14) 2]]
                  contributors (mapv first contributions)
                  contribs-total (->> contributions
                                   (map second)
                                   (reduce + 0)
                                   eth->wei->num)
                  expected-dnt-balances [(bn/+ (<! (contract-call-ch DNTToken :balance-of (first contributors)))
                                               (web3/to-big-number "70000000000000000000000000"))
                                         (web3/to-big-number "70000000000000000000000000")]
                  dnt-compensated-total (reduce bn/+ (web3/to-big-number 0) expected-dnt-balances)]

              (is (u/tx-address? (<! (state-call-ch! Contribution :set-contrib-period
                                                     {:from owner1
                                                      :args (contrib-period-args
                                                              {:contribution/period-index 1
                                                               :contrib-period/soft-cap-amount soft-cap-amount
                                                               :contrib-period/after-soft-cap-duration after-soft-cap-seconds
                                                               :contrib-period/hard-cap-amount hard-cap-amount
                                                               :contrib-period/start-time start-time
                                                               :contrib-period/end-time end-time})}))))

              (let [contrib-period (<! (get-contrib-period 1))]
                (is (= (wei->eth->num soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
                (is (= after-soft-cap-seconds (:contrib-period/after-soft-cap-duration contrib-period)))
                (is (= start-time (to-epoch (:contrib-period/start-time contrib-period))))
                (is (= end-time (to-epoch (:contrib-period/end-time contrib-period))))
                (is (= false (:contrib-period/enabled? contrib-period)))
                (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
                (is (zero? (:contrib-period/total-contributed contrib-period)))
                (is (zero? (:contrib-period/contributors-count contrib-period))))

              (is (u/tx-address? (<! (state-call-ch! Contribution :enable-contrib-period {:from owner1
                                                                                          :args [1]}))))
              (is (u/tx-address? (<! (state-call-ch! Contribution :enable-contrib-period {:from owner2
                                                                                          :args [1]}))))

              (<! (increase-time-and-mine-ch! web3 start-time-seconds))

              (is (true? (<! (contrib-period-running?))))

              (testing "Users should be able to contribute and hit soft cap"
                (doseq [[contributor amount] contributions]
                  (is (u/tx-address? (<! (state-call-ch! Contribution :contribute {:from contributor
                                                                                   :value-ether amount})))))
                (is (bn/eq? (bn/+ wallet-balance-before contribs-total) (<! (get-balance-ch web3 wallet))))

                (<! (mine-ch! web3))

                (doseq [[contributor amount] contributions]
                  (let [[contrib-amount compensated?] (<! (contract-call-ch Contribution :get-contributor 1 contributor))]
                    (is (= (wei->eth->num contrib-amount) amount))
                    (is (false? compensated?))))

                (testing "Hitting soft cap should change contrib period end time"
                  (let [contrib-period (<! (get-contrib-period 1))]
                    (is (< (to-epoch (:contrib-period/end-time contrib-period))
                           end-time))
                    (is (= true (:contrib-period/soft-cap-reached? contrib-period)))
                    (is (= (wei->eth->num contribs-total) (:contrib-period/total-contributed contrib-period)))
                    (is (= (count contributors) (:contrib-period/contributors-count contrib-period)))))

                (<! (increase-time-and-mine-ch! web3 (+ after-soft-cap-seconds 3)))

                (is (false? (<! (contrib-period-running?))))

                (testing "Contributors should be compensated partially (first half) with dnt tokens"
                  (let [half-count (/ (count contributions) 2)
                        contributions (take half-count contributions)
                        expected-dnt-balances (take half-count expected-dnt-balances)
                        contributors (take half-count contributors)]
                    (is (u/tx-address? (<! (state-call-ch! Contribution :compensate-contributors
                                                           {:from owner1
                                                            :args [1 0 half-count]}))))

                    (doseq [[contributor expected-dnt] (zipmap contributors expected-dnt-balances)]
                      (is (bn/eq? expected-dnt (<! (contract-call-ch DNTToken :balance-of contributor))))))

                  (testing "Some contributors are still not compensated"
                    (is (bn/eq? (<! (contract-call-ch DNTToken :balance-of (last contributors))) 0))))

                (testing "Contributors should be compensated partially (second half) with dnt tokens"
                  (let [half-count (/ (count contributions) 2)
                        contributions (take-last half-count contributions)
                        expected-dnt-balances (take-last half-count expected-dnt-balances)
                        contributors (take-last half-count contributors)]
                    (is (u/tx-address? (<! (state-call-ch! Contribution :compensate-contributors
                                                           {:from owner1
                                                            :args [1 0 1000]}))))

                    (doseq [[contributor expected-dnt] (zipmap contributors expected-dnt-balances)]
                      (is (bn/eq? expected-dnt (<! (contract-call-ch DNTToken :balance-of contributor)))))))

                (testing "First contributor wasn't compensated twice"
                  (is (bn/eq? (first expected-dnt-balances)
                              (<! (contract-call-ch DNTToken :balance-of (first contributors))))))

                (testing "Shouldn't be able to cancel ended contrib period"
                  (is (u/tx-address? (<! (state-call-ch! Contribution :cancel-contrib-period {:from owner1
                                                                                              :args [1]}))))
                  (is (u/error? (<! (state-call-ch! Contribution :cancel-contrib-period {:from owner2
                                                                                         :args [1]})))))

                (testing "Should be able to cancel non started contrib period"
                  (is (u/tx-address? (<! (state-call-ch! Contribution :set-contrib-period
                                                         {:from owner1
                                                          :args (contrib-period-args
                                                                  {:contribution/period-index 2
                                                                   :contrib-period/soft-cap-amount (eth->wei->num 3)
                                                                   :contrib-period/after-soft-cap-duration (time/in-seconds (time/seconds 2))
                                                                   :contrib-period/hard-cap-amount (eth->wei->num 5)
                                                                   :contrib-period/start-time (now-plus-seconds 1000)
                                                                   :contrib-period/end-time (now-plus-seconds 2000)})}))))

                  (is (u/tx-address? (<! (state-call-ch! Contribution :cancel-contrib-period {:from owner1
                                                                                              :args [2]}))))
                  (is (u/tx-address? (<! (state-call-ch! Contribution :cancel-contrib-period {:from owner2
                                                                                              :args [2]}))))
                  (is (= 960000000 (wei->eth->num (<! (contract-call-ch DNTToken :total-supply)))))))))
          (>! contrib-period2 true))
        (<! contrib-period2)
        (done)))))

(deftest contribution2
  (async done
    (go
      (let [soft-cap-amount (eth->wei->num 1)
            after-soft-cap-duration (time/in-seconds (time/hours 48))
            hard-cap-amount (eth->wei->num 2)
            now (bn/->number (<! (contract-call-ch Contribution :get-now)))
            start-time-seconds 60
            end-time-seconds 120
            start-time (+ now 60)
            end-time (+ start-time 120)
            wait-ch (chan)]
        (testing "Should be able to set contribution period"
          (state-call-ch! Contribution :set-contrib-period {:from owner1
                                                            :args (contrib-period-args
                                                                    {:contribution/period-index 0
                                                                     :contrib-period/soft-cap-amount soft-cap-amount
                                                                     :contrib-period/after-soft-cap-duration after-soft-cap-duration
                                                                     :contrib-period/hard-cap-amount hard-cap-amount
                                                                     :contrib-period/start-time start-time
                                                                     :contrib-period/end-time end-time})})

          (testing "Only one owner shouldn't be able to enable contribution period"
            (state-call-ch! Contribution :enable-contrib-period {:from owner1
                                                                 :args [0]})
            (is (= false (:contrib-period/enabled? (<! (get-contrib-period 0))))))

          (testing "Confirmation of another owner should enable contribution period"
            (state-call-ch! Contribution :enable-contrib-period {:from owner2
                                                                 :args [0]})
            (is (= true (:contrib-period/enabled? (<! (get-contrib-period 0))))))

          (<! (increase-time-and-mine-ch! web3 start-time-seconds))

          (testing "Contrib period 1 is running"
            (is (true? (<! (contrib-period-running?)))))

          (testing "Contribution round 1"
            (let [wallet-balance-before (<! (get-balance-ch web3 wallet))
                  contributions [[(nth accounts 10) 1]
                                 [(nth accounts 11) 1.5]
                                 [(nth accounts 12) 2]
                                 [(nth accounts 13) 2.5]]]
              (testing "Users should be able to contribute and hit hard cap"
                (doseq [[contributor amount] (take 2 contributions)]
                  (is (u/tx-address? (<! (state-call-ch! Contribution :contribute {:from contributor
                                                                                   :value-ether amount})))))

                (<! (mine-ch! web3))

                (let [contrib-period (<! (get-contrib-period 0))]
                  (is (= true (:contrib-period/soft-cap-reached? contrib-period)))
                  (is (= true (:contrib-period/hard-cap-reached? contrib-period)))))


              (is (false? (<! (contrib-period-running?))))

              (testing "After hitting hard cap users shouldn't be able to contribute"
                (doseq [[contributor amount] (drop 2 contributions)]
                  (is (u/error? (<! (state-call-ch! Contribution :contribute {:from contributor
                                                                              :value-ether amount}))))))


              (<! (increase-time-and-mine-ch! web3 1))

              (testing "Contributors should be compensated with dnt tokens after contrib period ended"
                (is (u/tx-address? (<! (state-call-ch! Contribution :compensate-contributors
                                                       {:from owner1
                                                        :args [0 0 10]})))))

              (<! (mine-ch! web3))

              (testing "Trading dnt is still disabled"
                (is (u/error? (<! (state-call-ch! DNTToken :transfer
                                                  {:from (nth accounts 11)
                                                   :args [12 (eth->wei->num 1)]})))))

              (testing "Should be able to enable dnt token transfers"
                (is (u/tx-address? (<! (state-call-ch! Contribution :enable-district0x-network-token-transfers
                                                       {:from owner1})))))

              (testing "Trading dnt should be enabled"
                (is (u/tx-address? (<! (state-call-ch! DNTToken :transfer
                                                       {:from (nth accounts 11) :args [12 (eth->wei->num 1)]}))))
                (is (= 1 (wei->eth->num (bn/->number (<! (contract-call-ch DNTToken :balance-of 12)))))))

              (testing "Vesting works"
                (is (u/error? (<! (state-call-ch! DNTToken :transfer {:from early-sponsor
                                                                      :args [founder2 (eth->wei->num 1)]})))))
              (testing "Community advisors stake should not be vested"
                (is (u/tx-address? (<! (state-call-ch! DNTToken :transfer {:from community-advisors
                                                                           :args [founder2 (eth->wei->num 1)]})))))
              (testing "Funds should not be vested after vesting period"
                (<! (increase-time-and-mine-ch! web3 (time/in-seconds (time/weeks 24))))
                (is (u/tx-address? (<! (state-call-ch! DNTToken :transfer {:from early-sponsor
                                                                           :args [founder2 (eth->wei->num 1)]})))))))))
      (done))))