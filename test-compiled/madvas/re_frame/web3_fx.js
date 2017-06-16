// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('madvas.re_frame.web3_fx');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec');
goog.require('re_frame.core');
madvas.re_frame.web3_fx.blockchain_filter_opts_QMARK_ = (function madvas$re_frame$web3_fx$blockchain_filter_opts_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string') || ((x == null));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"sq","sq",-1529305122),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Keyword(null,"sq","sq",-1529305122)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.sequential_QMARK_], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null)));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.complement.call(null,cljs.core.map_QMARK_));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","addresses","madvas.re-frame.web3-fx/addresses",-596345625),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","watch?","madvas.re-frame.web3-fx/watch?",-1682334139),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344),new cljs.core.Symbol("madvas.re-frame.web3-fx","blockchain-filter-opts?","madvas.re-frame.web3-fx/blockchain-filter-opts?",309735613,null),madvas.re_frame.web3_fx.blockchain_filter_opts_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","event-ids","madvas.re-frame.web3-fx/event-ids",117302504),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)))),cljs.spec.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","cat","s/cat",182721371,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("s","*","s/*",345799260,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.spec.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null))], null),null),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core","second","clojure.core/second",287376868,null),cljs.core.second,null,true)], null),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("web3-fx.contract.constant","fns","web3-fx.contract.constant/fns",2054482164),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)))),cljs.spec.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","cat","s/cat",182721371,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("s","*","s/*",345799260,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),cljs.core.keyword_QMARK_,cljs.spec.rep_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null))], null),null),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core","second","clojure.core/second",287376868,null),cljs.core.second,null,true)], null),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("web3-fx.contract.state","fns","web3-fx.contract.state/fns",-171816317),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)))),cljs.spec.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","cat","s/cat",182721371,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("s","*","s/*",345799260,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),cljs.core.keyword_QMARK_,cljs.spec.rep_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),cljs.core.map_QMARK_,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-fn-arg","madvas.re-frame.web3-fx/contract-fn-arg",-1859735735)),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null))], null),null),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core","second","clojure.core/second",287376868,null),cljs.core.second,null,true)], null),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","events","madvas.re-frame.web3-fx/events",-1735001904),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Symbol("madvas.re-frame.web3-fx","blockchain-filter-opts?","madvas.re-frame.web3-fx/blockchain-filter-opts?",309735613,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)))),cljs.spec.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","cat","s/cat",182721371,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.list(new cljs.core.Symbol("s","?","s/?",-62633301,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null)),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Symbol(null,"blockchain-filter-opts?","blockchain-filter-opts?",77692150,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Symbol("madvas.re-frame.web3-fx","blockchain-filter-opts?","madvas.re-frame.web3-fx/blockchain-filter-opts?",309735613,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718),new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Symbol("madvas.re-frame.web3-fx","blockchain-filter-opts?","madvas.re-frame.web3-fx/blockchain-filter-opts?",309735613,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),cljs.spec.maybe_impl.call(null,cljs.core.any_QMARK_,new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.core.keyword_QMARK_,(cljs.core.map_QMARK_) || (cljs.core.nil_QMARK_),madvas.re_frame.web3_fx.blockchain_filter_opts_QMARK_,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),new cljs.core.Symbol("madvas.re-frame.web3-fx","blockchain-filter-opts?","madvas.re-frame.web3-fx/blockchain-filter-opts?",309735613,null),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatch","madvas.re-frame.web3-fx/dispatch",2020918110)], null))], null),null),cljs.spec.spec_impl.call(null,new cljs.core.Symbol("clojure.core","second","clojure.core/second",287376868,null),cljs.core.second,null,true)], null),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events","madvas.re-frame.web3-fx/contract-events",1952606175),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","events","madvas.re-frame.web3-fx/events",-1735001904),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","events","madvas.re-frame.web3-fx/events",-1735001904),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"events","events",1792552201));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","events","madvas.re-frame.web3-fx/events",-1735001904),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"db-path","db-path",-68094099)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"events","events",1792552201))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"db-path","db-path",-68094099)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events-stop-watching","madvas.re-frame.web3-fx/contract-events-stop-watching",-1848242020),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","event-ids","madvas.re-frame.web3-fx/event-ids",117302504),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","event-ids","madvas.re-frame.web3-fx/event-ids",117302504),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"event-ids","event-ids",288279195));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","event-ids","madvas.re-frame.web3-fx/event-ids",117302504),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-ids","event-ids",288279195),new cljs.core.Keyword(null,"db-path","db-path",-68094099)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event-ids","event-ids",288279195))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"db-path","db-path",-68094099)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-constant-fns","madvas.re-frame.web3-fx/contract-constant-fns",453639392),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract.constant","fns","web3-fx.contract.constant/fns",2054482164)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract.constant","fns","web3-fx.contract.constant/fns",2054482164)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract.constant","fns","web3-fx.contract.constant/fns",2054482164)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-state-fns","madvas.re-frame.web3-fx/contract-state-fns",1130667718),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.contract.state","fns","web3-fx.contract.state/fns",-171816317),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.contract.state","fns","web3-fx.contract.state/fns",-171816317),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"fns","fns",1185138786));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.contract.state","fns","web3-fx.contract.state/fns",-171816317),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.Keyword(null,"db-path","db-path",-68094099)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"db-path","db-path",-68094099)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-fns","madvas.re-frame.web3-fx/blockchain-fns",-966625370),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","balances","madvas.re-frame.web3-fx/balances",-607562574),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","addresses","madvas.re-frame.web3-fx/addresses",-596345625),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","watch?","madvas.re-frame.web3-fx/watch?",-1682334139),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","addresses","madvas.re-frame.web3-fx/addresses",-596345625),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","watch?","madvas.re-frame.web3-fx/watch?",-1682334139),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","addresses","madvas.re-frame.web3-fx/addresses",-596345625),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.Keyword(null,"web3","web3",-879451640)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","watch?","madvas.re-frame.web3-fx/watch?",-1682334139),new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344),new cljs.core.Keyword("madvas.re-frame.web3-fx","instance","madvas.re-frame.web3-fx/instance",666698895)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"addresses","addresses",-559529694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatches","dispatches",-331249187))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter","madvas.re-frame.web3-fx/blockchain-filter",697335433),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (p1__22027__22028__auto__){
return cljs.core.contains_QMARK_.call(null,p1__22027__22028__auto__,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),new cljs.core.Keyword("madvas.re-frame.web3-fx","web3","madvas.re-frame.web3-fx/web3",-1522244029),new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter-opts","madvas.re-frame.web3-fx/blockchain-filter-opts",1895259344)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"db-path","db-path",-68094099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatches","dispatches",-331249187))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749)))], null),null])));
madvas.re_frame.web3_fx.dispatch_vec = (function madvas$re_frame$web3_fx$dispatch_vec(var_args){
var args__12782__auto__ = [];
var len__12775__auto___44717 = arguments.length;
var i__12776__auto___44718 = (0);
while(true){
if((i__12776__auto___44718 < len__12775__auto___44717)){
args__12782__auto__.push((arguments[i__12776__auto___44718]));

var G__44719 = (i__12776__auto___44718 + (1));
i__12776__auto___44718 = G__44719;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return madvas.re_frame.web3_fx.dispatch_vec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

madvas.re_frame.web3_fx.dispatch_vec.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_conformed,args){
var map__44715 = cljs.core.apply.call(null,cljs.core.hash_map,dispatch_conformed);
var map__44715__$1 = ((((!((map__44715 == null)))?((((map__44715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44715):map__44715);
var kw = cljs.core.get.call(null,map__44715__$1,new cljs.core.Keyword(null,"kw","kw",1158308175));
var sq = cljs.core.get.call(null,map__44715__$1,new cljs.core.Keyword(null,"sq","sq",-1529305122));
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var or__11700__auto__ = sq;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null);
}
})(),args));
});

madvas.re_frame.web3_fx.dispatch_vec.cljs$lang$maxFixedArity = (1);

madvas.re_frame.web3_fx.dispatch_vec.cljs$lang$applyTo = (function (seq44713){
var G__44714 = cljs.core.first.call(null,seq44713);
var seq44713__$1 = cljs.core.next.call(null,seq44713);
return madvas.re_frame.web3_fx.dispatch_vec.cljs$core$IFn$_invoke$arity$variadic(G__44714,seq44713__$1);
});

madvas.re_frame.web3_fx.dispatch_call = (function madvas$re_frame$web3_fx$dispatch_call(var_args){
var args__12782__auto__ = [];
var len__12775__auto___44721 = arguments.length;
var i__12776__auto___44722 = (0);
while(true){
if((i__12776__auto___44722 < len__12775__auto___44721)){
args__12782__auto__.push((arguments[i__12776__auto___44722]));

var G__44723 = (i__12776__auto___44722 + (1));
i__12776__auto___44722 = G__44723;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return madvas.re_frame.web3_fx.dispatch_call.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

madvas.re_frame.web3_fx.dispatch_call.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_frame.core.dispatch.call(null,cljs.core.apply.call(null,madvas.re_frame.web3_fx.dispatch_vec,args));
});

madvas.re_frame.web3_fx.dispatch_call.cljs$lang$maxFixedArity = (0);

madvas.re_frame.web3_fx.dispatch_call.cljs$lang$applyTo = (function (seq44720){
return madvas.re_frame.web3_fx.dispatch_call.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44720));
});

madvas.re_frame.web3_fx.ensure_filter_params = (function madvas$re_frame$web3_fx$ensure_filter_params(event){
if(cljs.core.truth_(new cljs.core.Keyword(null,"event-id","event-id",2130210178).cljs$core$IFn$_invoke$arity$1(event))){
return event;
} else {
return cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"event-id","event-id",2130210178),new cljs.core.Keyword(null,"event-name","event-name",927259778).cljs$core$IFn$_invoke$arity$1(event));
}
});
madvas.re_frame.web3_fx.dispach_fn = (function madvas$re_frame$web3_fx$dispach_fn(var_args){
var args__12782__auto__ = [];
var len__12775__auto___44727 = arguments.length;
var i__12776__auto___44728 = (0);
while(true){
if((i__12776__auto___44728 < len__12775__auto___44727)){
args__12782__auto__.push((arguments[i__12776__auto___44728]));

var G__44729 = (i__12776__auto___44728 + (1));
i__12776__auto___44728 = G__44729;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return madvas.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

madvas.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic = (function (on_success,on_error,args){
return (function (err,res){
if(cljs.core.truth_(err)){
return cljs.core.apply.call(null,madvas.re_frame.web3_fx.dispatch_call,on_error,cljs.core.cons.call(null,err,args));
} else {
return cljs.core.apply.call(null,madvas.re_frame.web3_fx.dispatch_call,on_success,cljs.core.cons.call(null,res,args));
}
});
});

madvas.re_frame.web3_fx.dispach_fn.cljs$lang$maxFixedArity = (2);

madvas.re_frame.web3_fx.dispach_fn.cljs$lang$applyTo = (function (seq44724){
var G__44725 = cljs.core.first.call(null,seq44724);
var seq44724__$1 = cljs.core.next.call(null,seq44724);
var G__44726 = cljs.core.first.call(null,seq44724__$1);
var seq44724__$2 = cljs.core.next.call(null,seq44724__$1);
return madvas.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic(G__44725,G__44726,seq44724__$2);
});

madvas.re_frame.web3_fx.contract_event_dispach_fn = (function madvas$re_frame$web3_fx$contract_event_dispach_fn(on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
return madvas.re_frame.web3_fx.dispatch_call.call(null,on_error,err);
} else {
return madvas.re_frame.web3_fx.dispatch_call.call(null,on_success,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res),res);
}
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("web3-fx.contract","assoc-event-filters","web3-fx.contract/assoc-event-filters",364445619),(function (db,p__44730){
var vec__44731 = p__44730;
var _ = cljs.core.nth.call(null,vec__44731,(0),null);
var filters_db_path = cljs.core.nth.call(null,vec__44731,(1),null);
var filters = cljs.core.nth.call(null,vec__44731,(2),null);
return cljs.core.assoc_in.call(null,db,filters_db_path,filters);
}));
madvas.re_frame.web3_fx.event_stop_watching_BANG_ = (function madvas$re_frame$web3_fx$event_stop_watching_BANG_(db,db_path,event_id){
var temp__4657__auto__ = cljs.core.get_in.call(null,db,cljs.core.conj.call(null,db_path,event_id));
if(cljs.core.truth_(temp__4657__auto__)){
var event_filter = temp__4657__auto__;
return cljs_web3.eth.stop_watching_BANG_.call(null,event_filter,((function (event_filter,temp__4657__auto__){
return (function (){
return null;
});})(event_filter,temp__4657__auto__))
);
} else {
return null;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events","web3-fx.contract/events",1715476297),(function (raw_config){
var map__44734 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events","madvas.re-frame.web3-fx/contract-events",1952606175),raw_config);
var map__44734__$1 = ((((!((map__44734 == null)))?((((map__44734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44734):map__44734);
var config = map__44734__$1;
var events = cljs.core.get.call(null,map__44734__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var db_path = cljs.core.get.call(null,map__44734__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),config)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),cljs.spec.explain_str.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events","madvas.re-frame.web3-fx/contract-events",1952606175),raw_config));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","events*","web3-fx.contract/events*",170006990),config], null));
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events*","web3-fx.contract/events*",170006990),(function (p__44736,p__44737){
var map__44738 = p__44736;
var map__44738__$1 = ((((!((map__44738 == null)))?((((map__44738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44738):map__44738);
var db = cljs.core.get.call(null,map__44738__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44739 = p__44737;
var _ = cljs.core.nth.call(null,vec__44739,(0),null);
var config = cljs.core.nth.call(null,vec__44739,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","events*","web3-fx.contract/events*",170006990),cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"db","db",993250759),db)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events*","web3-fx.contract/events*",170006990),(function (p__44743){
var map__44744 = p__44743;
var map__44744__$1 = ((((!((map__44744 == null)))?((((map__44744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44744):map__44744);
var config = map__44744__$1;
var events = cljs.core.get.call(null,map__44744__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var db_path = cljs.core.get.call(null,map__44744__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var db = cljs.core.get.call(null,map__44744__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_filters = cljs.core.reduce.call(null,((function (map__44744,map__44744__$1,config,events,db_path,db){
return (function (acc,p__44746){
var map__44747 = p__44746;
var map__44747__$1 = ((((!((map__44747 == null)))?((((map__44747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44747):map__44747);
var event_id = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"event-id","event-id",2130210178));
var event_name = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var instance = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_success = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event_filter_opts = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var blockchain_filter_opts = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749));
madvas.re_frame.web3_fx.event_stop_watching_BANG_.call(null,db,db_path,event_id);

return cljs.core.assoc.call(null,acc,event_id,cljs_web3.eth.contract_call.call(null,instance,event_name,event_filter_opts,blockchain_filter_opts,madvas.re_frame.web3_fx.contract_event_dispach_fn.call(null,on_success,on_error)));
});})(map__44744,map__44744__$1,config,events,db_path,db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,madvas.re_frame.web3_fx.ensure_filter_params,cljs.core.remove.call(null,cljs.core.nil_QMARK_,events)));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","assoc-event-filters","web3-fx.contract/assoc-event-filters",364445619),db_path,new_filters], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events-stop-watching","web3-fx.contract/events-stop-watching",-1903221932),(function (raw_config){
var map__44749 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events-stop-watching","madvas.re-frame.web3-fx/contract-events-stop-watching",-1848242020),raw_config);
var map__44749__$1 = ((((!((map__44749 == null)))?((((map__44749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44749):map__44749);
var config = map__44749__$1;
var event_ids = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"event-ids","event-ids",288279195));
var db_path = cljs.core.get.call(null,map__44749__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),config)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),cljs.spec.explain_str.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-events-stop-watching","madvas.re-frame.web3-fx/contract-events-stop-watching",-1848242020),raw_config));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","events*","web3-fx.contract/events*",170006990),config], null));
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events-stop-watching*","web3-fx.contract/events-stop-watching*",17516006),(function (p__44751,p__44752){
var map__44753 = p__44751;
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var db = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44754 = p__44752;
var _ = cljs.core.nth.call(null,vec__44754,(0),null);
var config = cljs.core.nth.call(null,vec__44754,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","events-stop-watching*","web3-fx.contract/events-stop-watching*",17516006),cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"db","db",993250759),db)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","events-stop-watching*","web3-fx.contract/events-stop-watching*",17516006),(function (p__44758){
var map__44759 = p__44758;
var map__44759__$1 = ((((!((map__44759 == null)))?((((map__44759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44759):map__44759);
var config = map__44759__$1;
var event_ids = cljs.core.get.call(null,map__44759__$1,new cljs.core.Keyword(null,"event-ids","event-ids",288279195));
var db_path = cljs.core.get.call(null,map__44759__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var db = cljs.core.get.call(null,map__44759__$1,new cljs.core.Keyword(null,"db","db",993250759));
var seq__44761 = cljs.core.seq.call(null,event_ids);
var chunk__44762 = null;
var count__44763 = (0);
var i__44764 = (0);
while(true){
if((i__44764 < count__44763)){
var event_id = cljs.core._nth.call(null,chunk__44762,i__44764);
madvas.re_frame.web3_fx.event_stop_watching_BANG_.call(null,db,db_path,event_id);

var G__44765 = seq__44761;
var G__44766 = chunk__44762;
var G__44767 = count__44763;
var G__44768 = (i__44764 + (1));
seq__44761 = G__44765;
chunk__44762 = G__44766;
count__44763 = G__44767;
i__44764 = G__44768;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44761);
if(temp__4657__auto__){
var seq__44761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44761__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44761__$1);
var G__44769 = cljs.core.chunk_rest.call(null,seq__44761__$1);
var G__44770 = c__12511__auto__;
var G__44771 = cljs.core.count.call(null,c__12511__auto__);
var G__44772 = (0);
seq__44761 = G__44769;
chunk__44762 = G__44770;
count__44763 = G__44771;
i__44764 = G__44772;
continue;
} else {
var event_id = cljs.core.first.call(null,seq__44761__$1);
madvas.re_frame.web3_fx.event_stop_watching_BANG_.call(null,db,db_path,event_id);

var G__44773 = cljs.core.next.call(null,seq__44761__$1);
var G__44774 = null;
var G__44775 = (0);
var G__44776 = (0);
seq__44761 = G__44773;
chunk__44762 = G__44774;
count__44763 = G__44775;
i__44764 = G__44776;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),(function (raw_params){
var map__44777 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-constant-fns","madvas.re-frame.web3-fx/contract-constant-fns",453639392),raw_params);
var map__44777__$1 = ((((!((map__44777 == null)))?((((map__44777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44777):map__44777);
var params = map__44777__$1;
var fns = cljs.core.get.call(null,map__44777__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),params)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),cljs.spec.explain_str.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-constant-fns","madvas.re-frame.web3-fx/contract-constant-fns",453639392),raw_params));
} else {
var seq__44779 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,fns));
var chunk__44780 = null;
var count__44781 = (0);
var i__44782 = (0);
while(true){
if((i__44782 < count__44781)){
var map__44783 = cljs.core._nth.call(null,chunk__44780,i__44782);
var map__44783__$1 = ((((!((map__44783 == null)))?((((map__44783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44783):map__44783);
var f = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var instance = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var args = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,f], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));

var G__44787 = seq__44779;
var G__44788 = chunk__44780;
var G__44789 = count__44781;
var G__44790 = (i__44782 + (1));
seq__44779 = G__44787;
chunk__44780 = G__44788;
count__44781 = G__44789;
i__44782 = G__44790;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44779);
if(temp__4657__auto__){
var seq__44779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44779__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44779__$1);
var G__44791 = cljs.core.chunk_rest.call(null,seq__44779__$1);
var G__44792 = c__12511__auto__;
var G__44793 = cljs.core.count.call(null,c__12511__auto__);
var G__44794 = (0);
seq__44779 = G__44791;
chunk__44780 = G__44792;
count__44781 = G__44793;
i__44782 = G__44794;
continue;
} else {
var map__44785 = cljs.core.first.call(null,seq__44779__$1);
var map__44785__$1 = ((((!((map__44785 == null)))?((((map__44785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44785):map__44785);
var f = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var instance = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var args = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44785__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,f], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));

var G__44795 = cljs.core.next.call(null,seq__44779__$1);
var G__44796 = null;
var G__44797 = (0);
var G__44798 = (0);
seq__44779 = G__44795;
chunk__44780 = G__44796;
count__44781 = G__44797;
i__44782 = G__44798;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
madvas.re_frame.web3_fx.remove_blockchain_filter_BANG_ = (function madvas$re_frame$web3_fx$remove_blockchain_filter_BANG_(db,filter_db_path){
var temp__4657__auto___44799 = cljs.core.get_in.call(null,db,filter_db_path);
if(cljs.core.truth_(temp__4657__auto___44799)){
var blockchain_filter_44800 = temp__4657__auto___44799;
cljs_web3.eth.stop_watching_BANG_.call(null,blockchain_filter_44800,((function (blockchain_filter_44800,temp__4657__auto___44799){
return (function (){
return null;
});})(blockchain_filter_44800,temp__4657__auto___44799))
);
} else {
}

return cljs.core.assoc_in.call(null,db,filter_db_path,null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.contract","transaction-receipt-loaded","web3-fx.contract/transaction-receipt-loaded",-1027212619),(function (p__44801,p__44802){
var map__44803 = p__44801;
var map__44803__$1 = ((((!((map__44803 == null)))?((((map__44803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44803):map__44803);
var db = cljs.core.get.call(null,map__44803__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44804 = p__44802;
var _ = cljs.core.nth.call(null,vec__44804,(0),null);
var vec__44807 = cljs.core.nth.call(null,vec__44804,(1),null);
var tx_hashes_db_path = cljs.core.nth.call(null,vec__44807,(0),null);
var filter_db_path = cljs.core.nth.call(null,vec__44807,(1),null);
var transaction_hash = cljs.core.nth.call(null,vec__44804,(2),null);
var receipt = cljs.core.nth.call(null,vec__44804,(3),null);
var on_transaction_receipt = cljs.core.nth.call(null,vec__44804,(4),null);
if(cljs.core.truth_(cljs.core.get_in.call(null,db,cljs.core.conj.call(null,tx_hashes_db_path,transaction_hash)))){
var rest_tx_hashes = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,db,tx_hashes_db_path),transaction_hash);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),madvas.re_frame.web3_fx.dispatch_vec.call(null,on_transaction_receipt,receipt),new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__44811 = db;
var G__44811__$1 = ((cljs.core.empty_QMARK_.call(null,rest_tx_hashes))?madvas.re_frame.web3_fx.remove_blockchain_filter_BANG_.call(null,G__44811,filter_db_path):G__44811);
return cljs.core.assoc_in.call(null,G__44811__$1,tx_hashes_db_path,rest_tx_hashes);

})()], null);
} else {
return null;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("web3-fx.contract","add-transaction-hash-to-watch","web3-fx.contract/add-transaction-hash-to-watch",837095618),(function (db,p__44812){
var vec__44813 = p__44812;
var _ = cljs.core.nth.call(null,vec__44813,(0),null);
var web3 = cljs.core.nth.call(null,vec__44813,(1),null);
var db_path = cljs.core.nth.call(null,vec__44813,(2),null);
var transaction_hash = cljs.core.nth.call(null,vec__44813,(3),null);
var on_transaction_receipt = cljs.core.nth.call(null,vec__44813,(4),null);
var tx_hashes_db_path = cljs.core.conj.call(null,db_path,new cljs.core.Keyword(null,"transaction-hashes","transaction-hashes",1568749349));
var filter_db_path = cljs.core.conj.call(null,db_path,new cljs.core.Keyword(null,"filter","filter",-948537934));
var all_tx_hashes = cljs.core.assoc.call(null,cljs.core.get_in.call(null,db,tx_hashes_db_path),transaction_hash,on_transaction_receipt);
madvas.re_frame.web3_fx.remove_blockchain_filter_BANG_.call(null,db,filter_db_path);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,filter_db_path,cljs_web3.eth.filter.call(null,web3,"latest",((function (tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
var seq__44816 = cljs.core.seq.call(null,all_tx_hashes);
var chunk__44817 = null;
var count__44818 = (0);
var i__44819 = (0);
while(true){
if((i__44819 < count__44818)){
var vec__44820 = cljs.core._nth.call(null,chunk__44817,i__44819);
var tx_hash = cljs.core.nth.call(null,vec__44820,(0),null);
var on_tx_receipt = cljs.core.nth.call(null,vec__44820,(1),null);
cljs_web3.eth.get_transaction_receipt.call(null,web3,tx_hash,((function (seq__44816,chunk__44817,count__44818,i__44819,vec__44820,tx_hash,on_tx_receipt,tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt){
return (function (___$1,receipt){
if(cljs.core.truth_(receipt)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","transaction-receipt-loaded","web3-fx.contract/transaction-receipt-loaded",-1027212619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_hashes_db_path,filter_db_path], null),tx_hash,receipt,on_tx_receipt], null));
} else {
return null;
}
});})(seq__44816,chunk__44817,count__44818,i__44819,vec__44820,tx_hash,on_tx_receipt,tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt))
);

var G__44826 = seq__44816;
var G__44827 = chunk__44817;
var G__44828 = count__44818;
var G__44829 = (i__44819 + (1));
seq__44816 = G__44826;
chunk__44817 = G__44827;
count__44818 = G__44828;
i__44819 = G__44829;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44816);
if(temp__4657__auto__){
var seq__44816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44816__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44816__$1);
var G__44830 = cljs.core.chunk_rest.call(null,seq__44816__$1);
var G__44831 = c__12511__auto__;
var G__44832 = cljs.core.count.call(null,c__12511__auto__);
var G__44833 = (0);
seq__44816 = G__44830;
chunk__44817 = G__44831;
count__44818 = G__44832;
i__44819 = G__44833;
continue;
} else {
var vec__44823 = cljs.core.first.call(null,seq__44816__$1);
var tx_hash = cljs.core.nth.call(null,vec__44823,(0),null);
var on_tx_receipt = cljs.core.nth.call(null,vec__44823,(1),null);
cljs_web3.eth.get_transaction_receipt.call(null,web3,tx_hash,((function (seq__44816,chunk__44817,count__44818,i__44819,vec__44823,tx_hash,on_tx_receipt,seq__44816__$1,temp__4657__auto__,tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt){
return (function (___$1,receipt){
if(cljs.core.truth_(receipt)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","transaction-receipt-loaded","web3-fx.contract/transaction-receipt-loaded",-1027212619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_hashes_db_path,filter_db_path], null),tx_hash,receipt,on_tx_receipt], null));
} else {
return null;
}
});})(seq__44816,chunk__44817,count__44818,i__44819,vec__44823,tx_hash,on_tx_receipt,seq__44816__$1,temp__4657__auto__,tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt))
);

var G__44834 = cljs.core.next.call(null,seq__44816__$1);
var G__44835 = null;
var G__44836 = (0);
var G__44837 = (0);
seq__44816 = G__44834;
chunk__44817 = G__44835;
count__44818 = G__44836;
i__44819 = G__44837;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(tx_hashes_db_path,filter_db_path,all_tx_hashes,vec__44813,_,web3,db_path,transaction_hash,on_transaction_receipt))
)),tx_hashes_db_path,all_tx_hashes);
}));
madvas.re_frame.web3_fx.create_state_fn_callback = (function madvas$re_frame$web3_fx$create_state_fn_callback(web3,db_path,on_success,on_error,on_transaction_receipt){
return (function (err,transaction_hash){
if(cljs.core.truth_(err)){
return madvas.re_frame.web3_fx.dispatch_call.call(null,on_error,err);
} else {

madvas.re_frame.web3_fx.dispatch_call.call(null,on_success,transaction_hash);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.contract","add-transaction-hash-to-watch","web3-fx.contract/add-transaction-hash-to-watch",837095618),web3,db_path,transaction_hash,on_transaction_receipt], null));
}
});
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.contract","state-fns","web3-fx.contract/state-fns",-1528611858),(function (raw_params){
var map__44838 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-state-fns","madvas.re-frame.web3-fx/contract-state-fns",1130667718),raw_params);
var map__44838__$1 = ((((!((map__44838 == null)))?((((map__44838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44838):map__44838);
var params = map__44838__$1;
var web3 = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var db_path = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var fns = cljs.core.get.call(null,map__44838__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),params)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),cljs.spec.explain_str.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","contract-state-fns","madvas.re-frame.web3-fx/contract-state-fns",1130667718),raw_params));
} else {
var seq__44840 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,fns));
var chunk__44841 = null;
var count__44842 = (0);
var i__44843 = (0);
while(true){
if((i__44843 < count__44842)){
var map__44844 = cljs.core._nth.call(null,chunk__44841,i__44843);
var map__44844__$1 = ((((!((map__44844 == null)))?((((map__44844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44844):map__44844);
var f = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var instance = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var args = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var transaction_opts = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932));
var on_success = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_transaction_receipt = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605));
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,f], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transaction_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.create_state_fn_callback.call(null,web3,db_path,on_success,on_error,on_transaction_receipt)], null)));

var G__44848 = seq__44840;
var G__44849 = chunk__44841;
var G__44850 = count__44842;
var G__44851 = (i__44843 + (1));
seq__44840 = G__44848;
chunk__44841 = G__44849;
count__44842 = G__44850;
i__44843 = G__44851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44840);
if(temp__4657__auto__){
var seq__44840__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44840__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44840__$1);
var G__44852 = cljs.core.chunk_rest.call(null,seq__44840__$1);
var G__44853 = c__12511__auto__;
var G__44854 = cljs.core.count.call(null,c__12511__auto__);
var G__44855 = (0);
seq__44840 = G__44852;
chunk__44841 = G__44853;
count__44842 = G__44854;
i__44843 = G__44855;
continue;
} else {
var map__44846 = cljs.core.first.call(null,seq__44840__$1);
var map__44846__$1 = ((((!((map__44846 == null)))?((((map__44846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44846):map__44846);
var f = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var instance = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var args = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var transaction_opts = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932));
var on_success = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_transaction_receipt = cljs.core.get.call(null,map__44846__$1,new cljs.core.Keyword(null,"on-transaction-receipt","on-transaction-receipt",-859140605));
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,f], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transaction_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.create_state_fn_callback.call(null,web3,db_path,on_success,on_error,on_transaction_receipt)], null)));

var G__44856 = cljs.core.next.call(null,seq__44840__$1);
var G__44857 = null;
var G__44858 = (0);
var G__44859 = (0);
seq__44840 = G__44856;
chunk__44841 = G__44857;
count__44842 = G__44858;
i__44843 = G__44859;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),(function (raw_params){
var map__44860 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-fns","madvas.re-frame.web3-fx/blockchain-fns",-966625370),raw_params);
var map__44860__$1 = ((((!((map__44860 == null)))?((((map__44860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44860):map__44860);
var params = map__44860__$1;
var fns = cljs.core.get.call(null,map__44860__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),params)){
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),cljs.spec.explain_str.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-fns","madvas.re-frame.web3-fx/blockchain-fns",-966625370),raw_params));
} else {
var seq__44862 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,fns));
var chunk__44863 = null;
var count__44864 = (0);
var i__44865 = (0);
while(true){
if((i__44865 < count__44864)){
var map__44866 = cljs.core._nth.call(null,chunk__44863,i__44865);
var map__44866__$1 = ((((!((map__44866 == null)))?((((map__44866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44866):map__44866);
var f = cljs.core.get.call(null,map__44866__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__44866__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.call(null,map__44866__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44866__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
cljs.core.apply.call(null,f,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(params)], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));

var G__44870 = seq__44862;
var G__44871 = chunk__44863;
var G__44872 = count__44864;
var G__44873 = (i__44865 + (1));
seq__44862 = G__44870;
chunk__44863 = G__44871;
count__44864 = G__44872;
i__44865 = G__44873;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44862);
if(temp__4657__auto__){
var seq__44862__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44862__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44862__$1);
var G__44874 = cljs.core.chunk_rest.call(null,seq__44862__$1);
var G__44875 = c__12511__auto__;
var G__44876 = cljs.core.count.call(null,c__12511__auto__);
var G__44877 = (0);
seq__44862 = G__44874;
chunk__44863 = G__44875;
count__44864 = G__44876;
i__44865 = G__44877;
continue;
} else {
var map__44868 = cljs.core.first.call(null,seq__44862__$1);
var map__44868__$1 = ((((!((map__44868 == null)))?((((map__44868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44868):map__44868);
var f = cljs.core.get.call(null,map__44868__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__44868__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var on_success = cljs.core.get.call(null,map__44868__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44868__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
cljs.core.apply.call(null,f,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(params)], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));

var G__44878 = cljs.core.next.call(null,seq__44862__$1);
var G__44879 = null;
var G__44880 = (0);
var G__44881 = (0);
seq__44862 = G__44878;
chunk__44863 = G__44879;
count__44864 = G__44880;
i__44865 = G__44881;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("web3-fx.blockchain","add-addresses-to-watch","web3-fx.blockchain/add-addresses-to-watch",1148848925),(function (db,p__44882){
var vec__44883 = p__44882;
var _ = cljs.core.nth.call(null,vec__44883,(0),null);
var web3 = cljs.core.nth.call(null,vec__44883,(1),null);
var db_path = cljs.core.nth.call(null,vec__44883,(2),null);
var addresses = cljs.core.nth.call(null,vec__44883,(3),null);
var blockchain_filter_opts = cljs.core.nth.call(null,vec__44883,(4),null);
var on_success = cljs.core.nth.call(null,vec__44883,(5),null);
var on_error = cljs.core.nth.call(null,vec__44883,(6),null);
var addresses_db_path = cljs.core.conj.call(null,db_path,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var filter_db_path = cljs.core.conj.call(null,db_path,new cljs.core.Keyword(null,"filter","filter",-948537934));
var all_addresses = cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.get_in.call(null,db,addresses_db_path),addresses));
var temp__4657__auto___44890 = cljs.core.get_in.call(null,db,filter_db_path);
if(cljs.core.truth_(temp__4657__auto___44890)){
var blockchain_filter_44891 = temp__4657__auto___44890;
cljs_web3.eth.stop_watching_BANG_.call(null,blockchain_filter_44891,((function (blockchain_filter_44891,temp__4657__auto___44890,addresses_db_path,filter_db_path,all_addresses,vec__44883,_,web3,db_path,addresses,blockchain_filter_opts,on_success,on_error){
return (function (){
return null;
});})(blockchain_filter_44891,temp__4657__auto___44890,addresses_db_path,filter_db_path,all_addresses,vec__44883,_,web3,db_path,addresses,blockchain_filter_opts,on_success,on_error))
);
} else {
}

var blockchain_filter = cljs_web3.eth.filter.call(null,web3,blockchain_filter_opts,((function (addresses_db_path,filter_db_path,all_addresses,vec__44883,_,web3,db_path,addresses,blockchain_filter_opts,on_success,on_error){
return (function (err,___$1){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_error,err], null));
} else {
var seq__44886 = cljs.core.seq.call(null,all_addresses);
var chunk__44887 = null;
var count__44888 = (0);
var i__44889 = (0);
while(true){
if((i__44889 < count__44888)){
var address = cljs.core._nth.call(null,chunk__44887,i__44889);
cljs_web3.eth.get_balance.call(null,web3,address,madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error,address));

var G__44892 = seq__44886;
var G__44893 = chunk__44887;
var G__44894 = count__44888;
var G__44895 = (i__44889 + (1));
seq__44886 = G__44892;
chunk__44887 = G__44893;
count__44888 = G__44894;
i__44889 = G__44895;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44886);
if(temp__4657__auto__){
var seq__44886__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44886__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__44886__$1);
var G__44896 = cljs.core.chunk_rest.call(null,seq__44886__$1);
var G__44897 = c__12511__auto__;
var G__44898 = cljs.core.count.call(null,c__12511__auto__);
var G__44899 = (0);
seq__44886 = G__44896;
chunk__44887 = G__44897;
count__44888 = G__44898;
i__44889 = G__44899;
continue;
} else {
var address = cljs.core.first.call(null,seq__44886__$1);
cljs_web3.eth.get_balance.call(null,web3,address,madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error,address));

var G__44900 = cljs.core.next.call(null,seq__44886__$1);
var G__44901 = null;
var G__44902 = (0);
var G__44903 = (0);
seq__44886 = G__44900;
chunk__44887 = G__44901;
count__44888 = G__44902;
i__44889 = G__44903;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(addresses_db_path,filter_db_path,all_addresses,vec__44883,_,web3,db_path,addresses,blockchain_filter_opts,on_success,on_error))
);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,addresses_db_path,all_addresses),filter_db_path,blockchain_filter);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain.erc20","balances-of","web3-fx.blockchain.erc20/balances-of",-1978069512),(function (db,p__44904){
var vec__44905 = p__44904;
var _ = cljs.core.nth.call(null,vec__44905,(0),null);
var map__44908 = cljs.core.nth.call(null,vec__44905,(1),null);
var map__44908__$1 = ((((!((map__44908 == null)))?((((map__44908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44908):map__44908);
var instance = cljs.core.get.call(null,map__44908__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_success = cljs.core.get.call(null,map__44908__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44908__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var addresses = cljs.core.get.call(null,map__44908__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fns","fns",1185138786),(function (){var iter__12480__auto__ = ((function (vec__44905,_,map__44908,map__44908__$1,instance,on_success,on_error,addresses){
return (function madvas$re_frame$web3_fx$iter__44910(s__44911){
return (new cljs.core.LazySeq(null,((function (vec__44905,_,map__44908,map__44908__$1,instance,on_success,on_error,addresses){
return (function (){
var s__44911__$1 = s__44911;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44911__$1);
if(temp__4657__auto__){
var s__44911__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44911__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__44911__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__44913 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__44912 = (0);
while(true){
if((i__44912 < size__12479__auto__)){
var address = cljs.core._nth.call(null,c__12478__auto__,i__44912);
cljs.core.chunk_append.call(null,b__44913,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","balance-loaded","web3-fx.blockchain.erc20/balance-loaded",1185082823),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success], null)], null),madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null));

var G__44914 = (i__44912 + (1));
i__44912 = G__44914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44913),madvas$re_frame$web3_fx$iter__44910.call(null,cljs.core.chunk_rest.call(null,s__44911__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44913),null);
}
} else {
var address = cljs.core.first.call(null,s__44911__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","balance-loaded","web3-fx.blockchain.erc20/balance-loaded",1185082823),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success], null)], null),madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null),madvas$re_frame$web3_fx$iter__44910.call(null,cljs.core.rest.call(null,s__44911__$2)));
}
} else {
return null;
}
break;
}
});})(vec__44905,_,map__44908,map__44908__$1,instance,on_success,on_error,addresses))
,null,null));
});})(vec__44905,_,map__44908,map__44908__$1,instance,on_success,on_error,addresses))
;
return iter__12480__auto__.call(null,addresses);
})()], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain.erc20","balance-loaded","web3-fx.blockchain.erc20/balance-loaded",1185082823),(function (db,p__44915){
var vec__44916 = p__44915;
var _ = cljs.core.nth.call(null,vec__44916,(0),null);
var map__44919 = cljs.core.nth.call(null,vec__44916,(1),null);
var map__44919__$1 = ((((!((map__44919 == null)))?((((map__44919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44919):map__44919);
var address = cljs.core.get.call(null,map__44919__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.call(null,map__44919__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var balance = cljs.core.nth.call(null,vec__44916,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),madvas.re_frame.web3_fx.dispatch_vec.call(null,on_success,balance,address)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain.erc20","add-addresses-to-watch","web3-fx.blockchain.erc20/add-addresses-to-watch",-182819885),(function (db,p__44921){
var vec__44922 = p__44921;
var _ = cljs.core.nth.call(null,vec__44922,(0),null);
var map__44925 = cljs.core.nth.call(null,vec__44922,(1),null);
var map__44925__$1 = ((((!((map__44925 == null)))?((((map__44925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44925):map__44925);
var config = map__44925__$1;
var db_path = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var instance = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var blockchain_filter_opts = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749));
var addresses = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var on_success = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44925__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var instance_address = (instance["address"]);
if(cljs.core.truth_(instance_address)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","events","web3-fx.contract/events",1715476297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-path","db-path",-68094099),db_path,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__12480__auto__ = ((function (instance_address,vec__44922,_,map__44925,map__44925__$1,config,db_path,instance,blockchain_filter_opts,addresses,on_success,on_error){
return (function madvas$re_frame$web3_fx$iter__44927(s__44928){
return (new cljs.core.LazySeq(null,((function (instance_address,vec__44922,_,map__44925,map__44925__$1,config,db_path,instance,blockchain_filter_opts,addresses,on_success,on_error){
return (function (){
var s__44928__$1 = s__44928;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44928__$1);
if(temp__4657__auto__){
var s__44928__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44928__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__44928__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__44930 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__44929 = (0);
while(true){
if((i__44929 < size__12479__auto__)){
var address = cljs.core._nth.call(null,c__12478__auto__,i__44929);
cljs.core.chunk_append.call(null,b__44930,(function (){var base_event_id = [cljs.core.str(instance_address),cljs.core.str("-"),cljs.core.str(address)].join('');
var disp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","on-transfer","web3-fx.blockchain.erc20/on-transfer",475972587),address,config], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,[cljs.core.str(base_event_id),cljs.core.str("-transfer-from")].join(''),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),blockchain_filter_opts,disp,madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,[cljs.core.str(base_event_id),cljs.core.str("-transfer-to")].join(''),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),blockchain_filter_opts,disp,madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null)], null);
})());

var G__44931 = (i__44929 + (1));
i__44929 = G__44931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44930),madvas$re_frame$web3_fx$iter__44927.call(null,cljs.core.chunk_rest.call(null,s__44928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44930),null);
}
} else {
var address = cljs.core.first.call(null,s__44928__$2);
return cljs.core.cons.call(null,(function (){var base_event_id = [cljs.core.str(instance_address),cljs.core.str("-"),cljs.core.str(address)].join('');
var disp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","on-transfer","web3-fx.blockchain.erc20/on-transfer",475972587),address,config], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,[cljs.core.str(base_event_id),cljs.core.str("-transfer-from")].join(''),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),blockchain_filter_opts,disp,madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,[cljs.core.str(base_event_id),cljs.core.str("-transfer-to")].join(''),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),blockchain_filter_opts,disp,madvas.re_frame.web3_fx.dispatch_vec.call(null,on_error,address)], null)], null);
})(),madvas$re_frame$web3_fx$iter__44927.call(null,cljs.core.rest.call(null,s__44928__$2)));
}
} else {
return null;
}
break;
}
});})(instance_address,vec__44922,_,map__44925,map__44925__$1,config,db_path,instance,blockchain_filter_opts,addresses,on_success,on_error))
,null,null));
});})(instance_address,vec__44922,_,map__44925,map__44925__$1,config,db_path,instance,blockchain_filter_opts,addresses,on_success,on_error))
;
return iter__12480__auto__.call(null,addresses);
})())], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain.erc20","on-transfer","web3-fx.blockchain.erc20/on-transfer",475972587),(function (db,p__44932){
var vec__44933 = p__44932;
var _ = cljs.core.nth.call(null,vec__44933,(0),null);
var address = cljs.core.nth.call(null,vec__44933,(1),null);
var config = cljs.core.nth.call(null,vec__44933,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","balances-of","web3-fx.blockchain.erc20/balances-of",-1978069512),cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null))], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain","balances","web3-fx.blockchain/balances",-355830409),(function (p__44936){
var map__44937 = p__44936;
var map__44937__$1 = ((((!((map__44937 == null)))?((((map__44937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44937):map__44937);
var config = map__44937__$1;
var addresses = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var web3 = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var dispatches = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187));
var watch_QMARK_ = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var db_path = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var blockchain_filter_opts = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749));
var instance = cljs.core.get.call(null,map__44937__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
if(cljs.core.truth_(cljs.spec._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.spec._STAR_runtime_asserts_STAR_)){
cljs.spec.assert_STAR_.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","balances","madvas.re-frame.web3-fx/balances",-607562574),config);
} else {
}
} else {
}

var map__44939 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),dispatches);
var map__44939__$1 = ((((!((map__44939 == null)))?((((map__44939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44939):map__44939);
var dispatches_conformed = map__44939__$1;
var on_success = cljs.core.get.call(null,map__44939__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44939__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.not.call(null,instance)){
var seq__44941_44945 = cljs.core.seq.call(null,addresses);
var chunk__44942_44946 = null;
var count__44943_44947 = (0);
var i__44944_44948 = (0);
while(true){
if((i__44944_44948 < count__44943_44947)){
var address_44949 = cljs.core._nth.call(null,chunk__44942_44946,i__44944_44948);
cljs_web3.eth.get_balance.call(null,web3,address_44949,madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error,address_44949));

var G__44950 = seq__44941_44945;
var G__44951 = chunk__44942_44946;
var G__44952 = count__44943_44947;
var G__44953 = (i__44944_44948 + (1));
seq__44941_44945 = G__44950;
chunk__44942_44946 = G__44951;
count__44943_44947 = G__44952;
i__44944_44948 = G__44953;
continue;
} else {
var temp__4657__auto___44954 = cljs.core.seq.call(null,seq__44941_44945);
if(temp__4657__auto___44954){
var seq__44941_44955__$1 = temp__4657__auto___44954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44941_44955__$1)){
var c__12511__auto___44956 = cljs.core.chunk_first.call(null,seq__44941_44955__$1);
var G__44957 = cljs.core.chunk_rest.call(null,seq__44941_44955__$1);
var G__44958 = c__12511__auto___44956;
var G__44959 = cljs.core.count.call(null,c__12511__auto___44956);
var G__44960 = (0);
seq__44941_44945 = G__44957;
chunk__44942_44946 = G__44958;
count__44943_44947 = G__44959;
i__44944_44948 = G__44960;
continue;
} else {
var address_44961 = cljs.core.first.call(null,seq__44941_44955__$1);
cljs_web3.eth.get_balance.call(null,web3,address_44961,madvas.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error,address_44961));

var G__44962 = cljs.core.next.call(null,seq__44941_44955__$1);
var G__44963 = null;
var G__44964 = (0);
var G__44965 = (0);
seq__44941_44945 = G__44962;
chunk__44942_44946 = G__44963;
count__44943_44947 = G__44964;
i__44944_44948 = G__44965;
continue;
}
} else {
}
}
break;
}
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","balances-of","web3-fx.blockchain.erc20/balances-of",-1978069512),cljs.core.merge.call(null,config,dispatches_conformed)], null));
}

if(cljs.core.truth_((function (){var and__11688__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.seq.call(null,addresses);
} else {
return and__11688__auto__;
}
})())){
if(cljs.core.not.call(null,instance)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain","add-addresses-to-watch","web3-fx.blockchain/add-addresses-to-watch",1148848925),web3,db_path,addresses,blockchain_filter_opts,on_success,on_error], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain.erc20","add-addresses-to-watch","web3-fx.blockchain.erc20/add-addresses-to-watch",-182819885),cljs.core.merge.call(null,config,dispatches_conformed)], null));
}
} else {
return null;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("web3-fx.blockchain","add-filter","web3-fx.blockchain/add-filter",2108833238),(function (db,p__44966){
var vec__44967 = p__44966;
var _ = cljs.core.nth.call(null,vec__44967,(0),null);
var web3 = cljs.core.nth.call(null,vec__44967,(1),null);
var db_path = cljs.core.nth.call(null,vec__44967,(2),null);
var blockchain_filter_opts = cljs.core.nth.call(null,vec__44967,(3),null);
var on_success = cljs.core.nth.call(null,vec__44967,(4),null);
var on_error = cljs.core.nth.call(null,vec__44967,(5),null);
var temp__4657__auto___44970 = cljs.core.get_in.call(null,db,db_path);
if(cljs.core.truth_(temp__4657__auto___44970)){
var blockchain_filter_44971 = temp__4657__auto___44970;
cljs_web3.eth.stop_watching_BANG_.call(null,blockchain_filter_44971,((function (blockchain_filter_44971,temp__4657__auto___44970,vec__44967,_,web3,db_path,blockchain_filter_opts,on_success,on_error){
return (function (){
return null;
});})(blockchain_filter_44971,temp__4657__auto___44970,vec__44967,_,web3,db_path,blockchain_filter_opts,on_success,on_error))
);
} else {
}

var blockchain_filter = cljs_web3.eth.filter.call(null,web3,blockchain_filter_opts,((function (vec__44967,_,web3,db_path,blockchain_filter_opts,on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
return madvas.re_frame.web3_fx.dispatch_call.call(null,on_error,err);
} else {
return madvas.re_frame.web3_fx.dispatch_call.call(null,on_success,res);
}
});})(vec__44967,_,web3,db_path,blockchain_filter_opts,on_success,on_error))
);
return cljs.core.assoc_in.call(null,db,db_path,blockchain_filter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("web3-fx.blockchain","remove-filter","web3-fx.blockchain/remove-filter",-2125301066),(function (db,p__44972){
var vec__44973 = p__44972;
var _ = cljs.core.nth.call(null,vec__44973,(0),null);
var db_path = cljs.core.nth.call(null,vec__44973,(1),null);
var temp__4657__auto__ = cljs.core.get_in.call(null,db,db_path);
if(cljs.core.truth_(temp__4657__auto__)){
var blockchain_filter = temp__4657__auto__;
return cljs_web3.eth.stop_watching_BANG_.call(null,blockchain_filter,((function (blockchain_filter,temp__4657__auto__,vec__44973,_,db_path){
return (function (){
return null;
});})(blockchain_filter,temp__4657__auto__,vec__44973,_,db_path))
);
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain","filter","web3-fx.blockchain/filter",-1876975944),(function (p__44976){
var map__44977 = p__44976;
var map__44977__$1 = ((((!((map__44977 == null)))?((((map__44977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44977):map__44977);
var config = map__44977__$1;
var web3 = cljs.core.get.call(null,map__44977__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var db_path = cljs.core.get.call(null,map__44977__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var blockchain_filter_opts = cljs.core.get.call(null,map__44977__$1,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749));
var dispatches = cljs.core.get.call(null,map__44977__$1,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187));
if(cljs.core.truth_(cljs.spec._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.spec._STAR_runtime_asserts_STAR_)){
cljs.spec.assert_STAR_.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","blockchain-filter","madvas.re-frame.web3-fx/blockchain-filter",697335433),config);
} else {
}
} else {
}

var map__44979 = cljs.spec.conform.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","dispatches","madvas.re-frame.web3-fx/dispatches",1385189204),dispatches);
var map__44979__$1 = ((((!((map__44979 == null)))?((((map__44979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44979):map__44979);
var on_success = cljs.core.get.call(null,map__44979__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__44979__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain","add-filter","web3-fx.blockchain/add-filter",2108833238),web3,db_path,blockchain_filter_opts,on_success,on_error], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3-fx.blockchain","filter-stop-watching","web3-fx.blockchain/filter-stop-watching",-146418232),(function (db_path){
if(cljs.core.truth_(cljs.spec._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.spec._STAR_runtime_asserts_STAR_)){
cljs.spec.assert_STAR_.call(null,new cljs.core.Keyword("madvas.re-frame.web3-fx","db-path","madvas.re-frame.web3-fx/db-path",-439407830),db_path);
} else {
}
} else {
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("web3-fx.blockchain","remove-filter","web3-fx.blockchain/remove-filter",-2125301066),db_path], null));
}));

//# sourceMappingURL=web3_fx.js.map