(ns contribution.tests
  (:require
    [ajax.core :refer [GET]]
    [cljs-time.coerce :refer [to-long to-epoch]]
    [cljs-time.core :as time]
    [cljs-web3.core :as web3]
    [cljs-web3.db :as web3-db]
    [cljs-web3.eth :as web3-eth :refer [contract-call]]
    [cljs-web3.net :as web3-net]
    [cljs-web3.personal :as web3-personal]
    [cljs-web3.shh :as web3-shh]
    [cljs.core.async :refer [<! >! chan]]
    [cljs.test :refer-macros [deftest is testing run-tests use-fixtures async]]
    [cljsjs.bignumber]
    [cljsjs.web3]
    [contribution.utils :as u]
    [print.foo :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def gas-limit 4000000)
(def w3 (web3/create-web3 "http://localhost:8549/"))
(def contracts-path "contracts/build/")
(def ^:dynamic Contribution nil)
(def ^:dynamic D0xToken nil)

(def OWNER1 0)
(def OWNER2 1)
(def WALLET 9)
(def FOUNDER1 2)
(def FOUNDER2 3)
(def EARLY_SPONSOR 4)
(def ADVISER1 5)
(def ADVISER2 6)
(def ADVISER3 7)
(def ADVISER4 8)

(defn- assert-no-error [err]
  (when err
    (.error js/console err))
  (assert (not err)))

(defn big-number [x]
  (new js/BigNumber x))

(defn eq? [x y]
  (.eq x y))

(defn fetch-contract [file-name response-format res-ch]
  (GET (str contracts-path file-name "?_=" (.getTime (new js/Date)))
       {:response-format response-format
        :keywords? true
        :handler #(go (>! res-ch %))
        :error-handler #(.error js/console %)}))

(defn- account [i]
  (nth (web3-eth/accounts w3) i))

(defn deploy-contract [abi bin res-ch & args]
  (apply web3-eth/contract-new w3 abi
         (into (vec args) [{:data bin
                            :gas gas-limit
                            :from (account OWNER1)}
                           (fn [err res]
                             (assert-no-error err)
                             (when (aget res "address")
                               (go (>! res-ch res))))])))

(defn state-call! [instance method from-address-index ether-value & args]
  (apply contract-call instance method (concat args [{:gas gas-limit
                                                      :from (account from-address-index)
                                                      :value (web3/to-wei ether-value :ether)}])))

(defn- to-ether [x]
  (js/parseFloat (u/big-num->num (web3/from-wei x :ether))))

(defn- to-wei [x]
  (js/parseInt (web3/to-wei x :ether)))

(defn- d0x-balance-of [address]
  (to-ether (contract-call D0xToken :balance-of address)))

(defn- account-d0x-balance [account-index]
  (d0x-balance-of (account account-index)))

(defn- eth-balance-of [address]
  (web3-eth/get-balance w3 address))

(defn- account-eth-balance [account-index]
  (eth-balance-of (account account-index)))

(defn- now-plus-seconds [seconds]
  (js/Math.floor (to-epoch (time/plus (time/now) (time/seconds seconds)))))

(defn- wait [seconds wait-ch]
  (js/setTimeout (fn []
                   (go (>! wait-ch seconds)))
                 (* seconds 1000)))

(defn mine-block []
  "Force testrpc to mine new block"
  (try
    (state-call! Contribution :enable-contrib-period ADVISER4 0 0)
    (catch js/Error e)))

(defn- contrib-period-running? []
  (not (eq? (contract-call Contribution :CONTRIB_PERIODS)
            (contract-call Contribution :get-running-contrib-period))))

(defn get-contrib-period [period-index]
  (u/parse-get-contrib-period (contract-call Contribution :get-contrib-period period-index)))

(use-fixtures
  :each
  {:before
   (fn []
     (async done
       (let [contrib-abi-ch (chan)
             contrib-bin-ch (chan)
             d0x-token-abi-ch (chan)
             d0x-token-bin-ch (chan)]
         (fetch-contract "Contribution.abi" :json contrib-abi-ch)
         (fetch-contract "Contribution.bin" :text contrib-bin-ch)
         (fetch-contract "D0xToken.abi" :json d0x-token-abi-ch)
         (fetch-contract "D0xToken.bin" :text d0x-token-bin-ch)
         (go
           (let [contrib-abi (clj->js (<! contrib-abi-ch))
                 contrib-bin (<! contrib-bin-ch)
                 d0x-token-abi (clj->js (<! d0x-token-abi-ch))
                 d0x-token-bin (<! d0x-token-bin-ch)
                 contrib-ch (chan)
                 d0x-token-ch (chan)]
             (deploy-contract contrib-abi
                              contrib-bin
                              contrib-ch
                              [(account OWNER1) (account OWNER2)]
                              2
                              (account WALLET)
                              (account FOUNDER1)
                              (account FOUNDER2)
                              (account EARLY_SPONSOR)
                              [(account ADVISER1)
                               (account ADVISER2)
                               (account ADVISER3)
                               (account ADVISER4)])
             (set! Contribution (<! contrib-ch))
             (deploy-contract d0x-token-abi d0x-token-bin d0x-token-ch (aget Contribution "address"))
             (set! D0xToken (<! d0x-token-ch))
             (state-call! Contribution :set-d0x-token OWNER1 0 (aget D0xToken "address"))
             (done))))))
   :after
   (fn []
     (async done (js/setTimeout #(done) 0)))                ; Prevents from hanging between tests, don't ask me why
   })

(deftest contracts-setup
  (is Contribution)
  (is D0xToken)
  (is (= (aget D0xToken "address") (contract-call Contribution :d0x-token)))
  (is (= (account WALLET) (contract-call Contribution :wallet)))
  (is (= (account FOUNDER1) (contract-call Contribution :founder1)))
  (is (= (account FOUNDER2) (contract-call Contribution :founder2)))
  (is (= (account EARLY_SPONSOR) (contract-call Contribution :early-sponsor)))
  (is (= (account ADVISER1) (contract-call Contribution :advisers 0)))
  (is (= (account ADVISER2) (contract-call Contribution :advisers 1)))
  (is (= (account ADVISER3) (contract-call Contribution :advisers 2)))
  (is (= (account ADVISER4) (contract-call Contribution :advisers 3)))
  (is (= (account OWNER1) (contract-call Contribution :get-owner 1)))
  (is (= (account OWNER2) (contract-call Contribution :get-owner 2)))
  (is (= 250000000 (to-ether (contract-call D0xToken :total-supply))))
  (is (= 0 (account-d0x-balance FOUNDER1)))
  (is (= 0 (account-d0x-balance FOUNDER2)))
  (is (= 0 (account-d0x-balance WALLET)))
  (is (= 0 (account-d0x-balance EARLY_SPONSOR)))
  (is (= 0 (account-d0x-balance ADVISER1)))
  (is (= 0 (account-d0x-balance ADVISER2)))
  (is (= 0 (account-d0x-balance ADVISER3)))
  (is (= 0 (account-d0x-balance ADVISER4)))
  (is (= 0 (account-d0x-balance ADVISER4)))
  (is (= 250000000 (d0x-balance-of (aget Contribution "address")))))

(deftest contribution1
  (testing "Shouldn't be able to contribute when contribution period is not running"
    (is (thrown? js/Error (state-call! Contribution :contribute 10 1 (account 10)))))


  (let [soft-cap-amount (to-wei 10)
        after-soft-cap-duration (time/in-seconds (time/hours 48))
        start-time (now-plus-seconds 4)
        end-time (now-plus-seconds 8)
        wait-ch (chan)]
    (testing "Should be able to set contribution period"
      (state-call! Contribution :set-contrib-period OWNER1 0 0 soft-cap-amount after-soft-cap-duration start-time end-time)
      (let [contrib-period (get-contrib-period 0)]
        (is (= (to-ether soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
        (is (= after-soft-cap-duration (:contrib-period/after-soft-cap-duration contrib-period)))
        (is (= start-time (to-long (:contrib-period/start-time contrib-period))))
        (is (= end-time (to-long (:contrib-period/end-time contrib-period))))
        (is (= false (:contrib-period/enabled? contrib-period)))
        (is (= false (:contrib-period/compensated? contrib-period)))
        (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
        (is (zero? (:contrib-period/total-contributed contrib-period)))
        (is (zero? (:contrib-period/contributors-count contrib-period))))

      (is (= 35000000 (account-d0x-balance FOUNDER1)))
      (is (= 10000000 (account-d0x-balance FOUNDER2)))
      (is (= 5000000 (account-d0x-balance EARLY_SPONSOR)))
      (is (= 1250000 (account-d0x-balance ADVISER1)))
      (is (= 1250000 (account-d0x-balance ADVISER2)))
      (is (= 1250000 (account-d0x-balance ADVISER3)))
      (is (= 1250000 (account-d0x-balance ADVISER4)))
      (is (= 1250000 (account-d0x-balance ADVISER4)))
      (is (= 195000000 (d0x-balance-of (aget Contribution "address")))))

    (testing "Token grants are setup okay"
      (doseq [account-index [FOUNDER1 FOUNDER2 EARLY_SPONSOR ADVISER1 ADVISER2 ADVISER3 ADVISER4]]
        (is (eq? (contract-call D0xToken :token-grants-count (account FOUNDER1)) 1))
        (let [[granter amount vested-amount start-date cliff-date vesting-date]
              (contract-call D0xToken :token-grant (account FOUNDER1) 0)]
          (is (= granter (aget Contribution "address")))
          (eq? vested-amount 0))))

    (testing "Setting first contrib period again will keep correct d0x balances"
      (state-call! Contribution :set-contrib-period OWNER1 0 0 soft-cap-amount after-soft-cap-duration start-time end-time)

      (let [contrib-period (get-contrib-period 0)]
        (is (= (to-ether soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
        (is (= after-soft-cap-duration (:contrib-period/after-soft-cap-duration contrib-period)))
        (is (= start-time (to-long (:contrib-period/start-time contrib-period))))
        (is (= end-time (to-long (:contrib-period/end-time contrib-period))))
        (is (= false (:contrib-period/enabled? contrib-period)))
        (is (= false (:contrib-period/compensated? contrib-period)))
        (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
        (is (zero? (:contrib-period/total-contributed contrib-period)))
        (is (zero? (:contrib-period/contributors-count contrib-period))))

      (is (= 35000000 (account-d0x-balance FOUNDER1)))
      (is (= 10000000 (account-d0x-balance FOUNDER2)))
      (is (= 5000000 (account-d0x-balance EARLY_SPONSOR)))
      (is (= 1250000 (account-d0x-balance ADVISER1)))
      (is (= 1250000 (account-d0x-balance ADVISER2)))
      (is (= 1250000 (account-d0x-balance ADVISER3)))
      (is (= 1250000 (account-d0x-balance ADVISER4)))
      (is (= 1250000 (account-d0x-balance ADVISER4)))
      (is (= 195000000 (d0x-balance-of (aget Contribution "address")))))

    (testing "Vesting works"
      (is (thrown? js/Error (state-call! D0xToken :transfer FOUNDER1 0 (account FOUNDER2) (to-wei 1)))))

    (testing "Only one owner shouldn't be able to enable contribution period"
      (state-call! Contribution :enable-contrib-period OWNER1 0 0)
      (is (= false (:contrib-period/enabled? (get-contrib-period 0)))))

    (testing "Confirmation of another owner should enable contribution period"
      (state-call! Contribution :enable-contrib-period OWNER2 0 0)
      (is (= true (:contrib-period/enabled? (get-contrib-period 0)))))

    (testing "Shouldn't be able to contribute before contribution start time"
      (is (thrown? js/Error (state-call! Contribution :contribute 10 1 (account 10)))))

    (async done
      (go
        (wait 4 wait-ch)
        (<! wait-ch)
        (mine-block)

        (testing "Contrib period 1 is running"
          (is (contrib-period-running?)))

        (testing "Contribution round 1"
          (let [wallet-balance-before (account-eth-balance WALLET)
                contributions [[10 1] [11 1.5] [12 2] [13 2.5]]
                contributors (mapv (comp account first) contributions)
                contribs-total (->> contributions
                                 (map second)
                                 (reduce + 0)
                                 to-wei)
                expected-d0x-balances [(big-number "7857142857142857142857142")
                                       (big-number "11785714285714285714285713")
                                       (big-number "15714285714285714285714284")
                                       (big-number "19642857142857142857142855")]
                d0x-compensated-total (reduce (fn [acc x]
                                                (.plus x acc)) 0 expected-d0x-balances)]
            (testing "Users should be able to contribute"
              (doseq [[acc-index amount] contributions]
                (state-call! Contribution :contribute acc-index amount (account acc-index)))
              (is (eq? (.plus wallet-balance-before contribs-total) (account-eth-balance WALLET)))
              (mine-block)
              (doseq [[acc-index amount] contributions]
                (let [[contrib-amount compensated?] (contract-call Contribution :get-contributor 0 (account acc-index))]
                  (is (= (to-ether contrib-amount) amount))
                  (is (false? compensated?))))

              (let [contrib-period (get-contrib-period 0)]
                (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
                (is (= (to-ether contribs-total) (:contrib-period/total-contributed contrib-period)))
                (is (= (count contributors) (:contrib-period/contributors-count contrib-period))))

              (is (= contributors (contract-call Contribution :get-contrib-period-contributors 0))))

            (testing "Shouldn't be able to compensate when contrib period is still running"
              (is (thrown? js/Error (state-call! Contribution :compensate-contributors OWNER1 0 0 10))))

            (wait 4 wait-ch)
            (<! wait-ch)
            (mine-block)

            (testing "Contributors should be compensated with d0x tokens after contrib period ended"
              (state-call! Contribution :compensate-contributors OWNER1 0 0 0 10)

              (doseq [[contributor expected-d0x] (zipmap contributors expected-d0x-balances)]
                (is (eq? expected-d0x (contract-call D0xToken :balance-of contributor))))
              (is (= 55000000 (to-ether d0x-compensated-total))))

            (mine-block)
            (testing "Shouldn't be able to enable ended contrib period"
              (is (not (contrib-period-running?)))
              (state-call! Contribution :enable-contrib-period OWNER1 0 0)
              (is (thrown? js/Error (state-call! Contribution :enable-contrib-period OWNER2 0 0))))

            (testing "Contrib period should be marked as compensated"
              (is (= true (:contrib-period/compensated? (get-contrib-period 0)))))))

        (testing "Contribution round 2"
          (let [wallet-balance-before (account-eth-balance WALLET)
                soft-cap-amount (to-wei 3)
                after-soft-cap-duration (time/in-seconds (time/seconds 2))
                start-time (now-plus-seconds 1)
                end-time (now-plus-seconds 1000)
                contributions [[10 2] [14 2]]
                contributors (mapv (comp account first) contributions)
                contribs-total (->> contributions
                                 (map second)
                                 (reduce + 0)
                                 to-wei)
                expected-d0x-balances [(.plus (contract-call D0xToken :balance-of (first contributors))
                                              (big-number "32500000000000000000000000"))
                                       (big-number "32500000000000000000000000")]
                d0x-compensated-total (reduce (fn [acc x]
                                                (.plus x acc)) 0 expected-d0x-balances)]
            (state-call! Contribution :set-contrib-period OWNER1 0 1 soft-cap-amount after-soft-cap-duration start-time end-time)

            (let [contrib-period (get-contrib-period 1)]
              (is (= (to-ether soft-cap-amount) (:contrib-period/soft-cap-amount contrib-period)))
              (is (= after-soft-cap-duration (:contrib-period/after-soft-cap-duration contrib-period)))
              (is (= start-time (to-long (:contrib-period/start-time contrib-period))))
              (is (= end-time (to-long (:contrib-period/end-time contrib-period))))
              (is (= false (:contrib-period/enabled? contrib-period)))
              (is (= false (:contrib-period/compensated? contrib-period)))
              (is (= false (:contrib-period/soft-cap-reached? contrib-period)))
              (is (zero? (:contrib-period/total-contributed contrib-period)))
              (is (zero? (:contrib-period/contributors-count contrib-period))))

            (state-call! Contribution :enable-contrib-period OWNER1 0 1)
            (state-call! Contribution :enable-contrib-period OWNER2 0 1)

            (wait 2 wait-ch)
            (<! wait-ch)
            (mine-block)

            (is (contrib-period-running?))

            (testing "Users should be able to contribute and hit soft cap"
              (doseq [[acc-index amount] contributions]
                (state-call! Contribution :contribute acc-index amount (account acc-index)))
              (is (eq? (.plus wallet-balance-before contribs-total) (account-eth-balance WALLET)))
              (mine-block)
              (doseq [[acc-index amount] contributions]
                (let [[contrib-amount compensated?] (contract-call Contribution :get-contributor 1 (account acc-index))]
                  (is (= (to-ether contrib-amount) amount))
                  (is (false? compensated?))))

              (testing "Hitting soft cap should change contrib period end time"
                (let [contrib-period (get-contrib-period 1)]
                  (is (<= (+ start-time after-soft-cap-duration)
                          (to-long (:contrib-period/end-time contrib-period))
                          (+ start-time after-soft-cap-duration 5)))
                  (is (= true (:contrib-period/soft-cap-reached? contrib-period)))
                  (is (= (to-ether contribs-total) (:contrib-period/total-contributed contrib-period)))
                  (is (= (count contributors) (:contrib-period/contributors-count contrib-period)))))

              (is (= contributors (contract-call Contribution :get-contrib-period-contributors 1)))

              (wait (inc after-soft-cap-duration) wait-ch)
              (<! wait-ch)
              (mine-block)

              (is (not (contrib-period-running?)))

              (testing "Contributors should be compensated partially (first half) with d0x tokens"
                (let [half-count (/ (count contributions) 2)
                      contributions (take half-count contributions)
                      expected-d0x-balances (take half-count expected-d0x-balances)
                      contributors (take half-count contributors)]
                  (state-call! Contribution :compensate-contributors OWNER1 0 1 0 half-count)
                  (doseq [[contributor expected-d0x] (zipmap contributors expected-d0x-balances)]
                    (is (eq? expected-d0x (contract-call D0xToken :balance-of contributor)))))

                (testing "Some contributors are still not compensated"
                  (is (eq? (contract-call D0xToken :balance-of (last contributors)) 0))))

              (testing "Contributors should be compensated partially (second half) with d0x tokens"
                (let [half-count (/ (count contributions) 2)
                      contributions (take-last half-count contributions)
                      expected-d0x-balances (take-last half-count expected-d0x-balances)
                      contributors (take-last half-count contributors)]
                  (state-call! Contribution :compensate-contributors OWNER1 0 1 0 1000)
                  (doseq [[contributor expected-d0x] (zipmap contributors expected-d0x-balances)]
                    (is (eq? expected-d0x (contract-call D0xToken :balance-of contributor))))))

              (testing "First contributor wasn't compensated twice"
                (is (eq? (first expected-d0x-balances)
                         (contract-call D0xToken :balance-of (first contributors)))))

              (testing "Shouldn't be able to cancel ended contrib period"
                (state-call! Contribution :cancel-contrib-period OWNER1 0 1)
                (is (thrown? js/Error (state-call! Contribution :cancel-contrib-period OWNER2 0 1))))

              (testing "Should be able to cancel non started contrib period"
                (state-call! Contribution :set-contrib-period OWNER1 0 2
                             (to-wei 3)
                             (time/in-seconds (time/seconds 2))
                             (now-plus-seconds 1000)
                             (now-plus-seconds 2000))

                (state-call! Contribution :cancel-contrib-period OWNER1 0 2)
                (state-call! Contribution :cancel-contrib-period OWNER2 0 2)
                (is (= 75000000 (d0x-balance-of 0x0)))))))
        (done)))))

(comment
  )

