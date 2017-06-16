// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.events');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('contribution.api');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('contribution.constants');
goog.require('cljs_web3.utils');
goog.require('clojure.data');
goog.require('district0x.utils');
goog.require('akiroz.re_frame.storage');
goog.require('cljs_web3.personal');
goog.require('district0x.events');
goog.require('medley.core');
goog.require('cljs_web3.eth');
goog.require('district0x.big_number');
goog.require('cljs_web3.core');
goog.require('cljs_time.coerce');
goog.require('goog.string.format');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('re_frame.core');
contribution.events.interceptors = district0x.events.interceptors;
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"update-now","update-now",1923846738),contribution.events.interceptors,(function (p__36018){
var map__36019 = p__36018;
var map__36019__$1 = ((((!((map__36019 == null)))?((((map__36019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36019):map__36019);
var db = cljs.core.get.call(null,map__36019__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"deploy-all-contracts","deploy-all-contracts",1111032956),contribution.events.interceptors,(function (p__36021,p__36022){
var map__36023 = p__36021;
var map__36023__$1 = ((((!((map__36023 == null)))?((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36023):map__36023);
var db = cljs.core.get.call(null,map__36023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36024 = p__36022;
var contribution_args = cljs.core.nth.call(null,vec__36024,(0),null);
var address_index = cljs.core.nth.call(null,vec__36024,(1),null);
var contribution__$1 = district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web3.eth.contract_new,new cljs.core.Keyword(null,"abi","abi",-1999451499).cljs$core$IFn$_invoke$arity$1(contribution__$1),new cljs.core.Keyword("contribution","owners","contribution/owners",-893366732).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","required-count","contribution/required-count",704684007).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","early-sponsor","contribution/early-sponsor",-611101281).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.Keyword("contribution","advisers","contribution/advisers",-710646550).cljs$core$IFn$_invoke$arity$1(contribution_args),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas","gas",-139961463),(4500000),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"bin","bin",-200999690).cljs$core$IFn$_invoke$arity$1(contribution__$1),new cljs.core.Keyword(null,"from","from",1815293044),(cljs.core.truth_(address_index)?cljs.core.nth.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),address_index):new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution-contract-deployed","contribution-contract-deployed",-1992663894),address_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"deploy-all-contracts","deploy-all-contracts",1111032956)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"contribution-contract-deployed","contribution-contract-deployed",-1992663894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__36028,p__36029){
var map__36030 = p__36028;
var map__36030__$1 = ((((!((map__36030 == null)))?((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030):map__36030);
var db = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"db","db",993250759));
var localstorage = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__36031 = p__36029;
var address_index = cljs.core.nth.call(null,vec__36031,(0),null);
var instance = cljs.core.nth.call(null,vec__36031,(1),null);
var temp__4657__auto__ = (instance["address"]);
if(cljs.core.truth_(temp__4657__auto__)){
var contract_address = temp__4657__auto__;
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"contribution","contribution",-1962459669)," deployed at ",contract_address);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"contribution","contribution",-1962459669)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),contract_address,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance], null)),new cljs.core.Keyword(null,"localstorage","localstorage",688644372),cljs.core.assoc_in.call(null,localstorage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"contribution","contribution",-1962459669)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),contract_address], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deploy-mini-me-token-factory-contract","deploy-mini-me-token-factory-contract",1472752309),address_index], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"deploy-mini-me-token-factory-contract","deploy-mini-me-token-factory-contract",1472752309),contribution.events.interceptors,(function (p__36035,p__36036){
var map__36037 = p__36035;
var map__36037__$1 = ((((!((map__36037 == null)))?((((map__36037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36037):map__36037);
var db = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36038 = p__36036;
var address_index = cljs.core.nth.call(null,vec__36038,(0),null);
var mini_me_token_factory = district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"mini-me-token-factory","mini-me-token-factory",395171361));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web3.eth.contract_new,new cljs.core.Keyword(null,"abi","abi",-1999451499).cljs$core$IFn$_invoke$arity$1(mini_me_token_factory),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas","gas",-139961463),(3000000),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"bin","bin",-200999690).cljs$core$IFn$_invoke$arity$1(mini_me_token_factory),new cljs.core.Keyword(null,"from","from",1815293044),(cljs.core.truth_(address_index)?cljs.core.nth.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),address_index):new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mini-me-token-factory-deployed","mini-me-token-factory-deployed",1954679404),address_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"deploy-mini-me-token-factory-contract","deploy-mini-me-token-factory-contract",1472752309)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"mini-me-token-factory-deployed","mini-me-token-factory-deployed",1954679404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__36042,p__36043){
var map__36044 = p__36042;
var map__36044__$1 = ((((!((map__36044 == null)))?((((map__36044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36044):map__36044);
var db = cljs.core.get.call(null,map__36044__$1,new cljs.core.Keyword(null,"db","db",993250759));
var localstorage = cljs.core.get.call(null,map__36044__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__36045 = p__36043;
var address_index = cljs.core.nth.call(null,vec__36045,(0),null);
var instance = cljs.core.nth.call(null,vec__36045,(1),null);
var temp__4657__auto__ = (instance["address"]);
if(cljs.core.truth_(temp__4657__auto__)){
var contract_address = temp__4657__auto__;
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"mini-me-token-factory","mini-me-token-factory",395171361)," deployed at ",contract_address);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"mini-me-token-factory","mini-me-token-factory",395171361)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),contract_address,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance], null)),new cljs.core.Keyword(null,"localstorage","localstorage",688644372),cljs.core.assoc_in.call(null,localstorage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"mini-me-token-factory","mini-me-token-factory",395171361)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),contract_address], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deploy-dnt-token-contract","deploy-dnt-token-contract",1631891650),address_index], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"deploy-dnt-token-contract","deploy-dnt-token-contract",1631891650),contribution.events.interceptors,(function (p__36049,p__36050){
var map__36051 = p__36049;
var map__36051__$1 = ((((!((map__36051 == null)))?((((map__36051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36051):map__36051);
var db = cljs.core.get.call(null,map__36051__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36052 = p__36050;
var address_index = cljs.core.nth.call(null,vec__36052,(0),null);
var dnt_token = district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370));
var contribution_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)));
var mini_me_token_factory_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"mini-me-token-factory","mini-me-token-factory",395171361)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web3.eth.contract_new,new cljs.core.Keyword(null,"abi","abi",-1999451499).cljs$core$IFn$_invoke$arity$1(dnt_token),contribution_address,mini_me_token_factory_address,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas","gas",-139961463),(3300000),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"bin","bin",-200999690).cljs$core$IFn$_invoke$arity$1(dnt_token),new cljs.core.Keyword(null,"from","from",1815293044),(cljs.core.truth_(address_index)?cljs.core.nth.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),address_index):new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dnt-token-contract-deployed","dnt-token-contract-deployed",1607626916),address_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"deploy-dnt-token-contract","deploy-dnt-token-contract",1631891650)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"dnt-token-contract-deployed","dnt-token-contract-deployed",1607626916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__36056,p__36057){
var map__36058 = p__36056;
var map__36058__$1 = ((((!((map__36058 == null)))?((((map__36058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36058):map__36058);
var db = cljs.core.get.call(null,map__36058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var localstorage = cljs.core.get.call(null,map__36058__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__36059 = p__36057;
var address_index = cljs.core.nth.call(null,vec__36059,(0),null);
var instance = cljs.core.nth.call(null,vec__36059,(1),null);
var temp__4657__auto__ = (instance["address"]);
if(cljs.core.truth_(temp__4657__auto__)){
var contract_address = temp__4657__auto__;
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370)," deployed at ",contract_address);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),contract_address,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance], null)),new cljs.core.Keyword(null,"localstorage","localstorage",688644372),cljs.core.assoc_in.call(null,localstorage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),contract_address], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","set-district0x-network-token","contribution/set-district0x-network-token",487817286),address_index], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","set-district0x-network-token","contribution/set-district0x-network-token",487817286),contribution.events.interceptors,(function (p__36063,p__36064){
var map__36065 = p__36063;
var map__36065__$1 = ((((!((map__36065 == null)))?((((map__36065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36065):map__36065);
var db = cljs.core.get.call(null,map__36065__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36066 = p__36064;
var address_index = cljs.core.nth.call(null,vec__36066,(0),null);
var dnt_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"set-district0x-network-token","set-district0x-network-token",-1425531818),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dnt_address], null),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas","gas",-139961463),(300000),new cljs.core.Keyword(null,"from","from",1815293044),(cljs.core.truth_(address_index)?cljs.core.nth.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),address_index):new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db))], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","setup-event-listeners","contribution/setup-event-listeners",34858574),contribution.events.interceptors,(function (p__36070){
var map__36071 = p__36070;
var map__36071__$1 = ((((!((map__36071 == null)))?((((map__36071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36071):map__36071);
var db = cljs.core.get.call(null,map__36071__$1,new cljs.core.Keyword(null,"db","db",993250759));
var contribution_instance = district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","events","web3-fx.contract/events",1715476297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3-event-listeners","web3-event-listeners",-21851833)], null),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution_instance,new cljs.core.Keyword(null,"on-contribution","on-contribution",-1024597795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023),contribution.constants.current_contrib_period], null),"latest",new cljs.core.Keyword("contribution","on-contribution","contribution/on-contribution",888274189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"on-contribution","on-contribution",-1024597795)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution_instance,new cljs.core.Keyword(null,"on-soft-cap-reached","on-soft-cap-reached",1513778810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023),contribution.constants.current_contrib_period], null),"latest",new cljs.core.Keyword("contribution","on-soft-cap-reached","contribution/on-soft-cap-reached",-1472298390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"on-soft-cap-reached","on-soft-cap-reached",1513778810)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution_instance,new cljs.core.Keyword(null,"on-hard-cap-reached","on-hard-cap-reached",1902213294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023),contribution.constants.current_contrib_period], null),"latest",new cljs.core.Keyword("contribution","on-hard-cap-reached","contribution/on-hard-cap-reached",57480350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"on-hard-cap-reached","on-hard-cap-reached",1902213294)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution_instance,new cljs.core.Keyword(null,"on-emergency-changed","on-emergency-changed",1373955035),cljs.core.PersistentArrayMap.EMPTY,"latest",new cljs.core.Keyword("contribution","on-emergency-changed","contribution/on-emergency-changed",65044459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword(null,"on-emergency-changed","on-emergency-changed",1373955035)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","on-contribution","contribution/on-contribution",888274189),contribution.events.interceptors,(function (p__36073,p__36074){
var map__36075 = p__36073;
var map__36075__$1 = ((((!((map__36075 == null)))?((((map__36075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36075):map__36075);
var db = cljs.core.get.call(null,map__36075__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36076 = p__36074;
var map__36079 = cljs.core.nth.call(null,vec__36076,(0),null);
var map__36079__$1 = ((((!((map__36079 == null)))?((((map__36079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36079):map__36079);
var contrib_period_index = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023));
var total_contributed = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"total-contributed","total-contributed",77689041));
var contributors_count = cljs.core.get.call(null,map__36079__$1,new cljs.core.Keyword(null,"contributors-count","contributors-count",-1652181623));
var contrib_period_index__$1 = district0x.big_number.__GT_number.call(null,contrib_period_index);
var total_contributed__$1 = district0x.utils.big_num__GT_ether.call(null,total_contributed);
var contributors_count__$1 = district0x.big_number.__GT_number.call(null,contributors_count);
if((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),contrib_period_index__$1,new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754)], null)) < total_contributed__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),contrib_period_index__$1], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754),total_contributed__$1,new cljs.core.Keyword("contrib-period","contributors-count","contrib-period/contributors-count",1705370112),contributors_count__$1], null))], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","on-soft-cap-reached","contribution/on-soft-cap-reached",-1472298390),contribution.events.interceptors,(function (p__36082,p__36083){
var map__36084 = p__36082;
var map__36084__$1 = ((((!((map__36084 == null)))?((((map__36084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36084):map__36084);
var db = cljs.core.get.call(null,map__36084__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36085 = p__36083;
var map__36088 = cljs.core.nth.call(null,vec__36085,(0),null);
var map__36088__$1 = ((((!((map__36088 == null)))?((((map__36088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36088):map__36088);
var contrib_period_index = cljs.core.get.call(null,map__36088__$1,new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023));
var end_time = cljs.core.get.call(null,map__36088__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),district0x.big_number.__GT_number.call(null,contrib_period_index)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303),district0x.big_number.__GT_date_time.call(null,end_time),new cljs.core.Keyword("contrib-period","soft-cap-reached?","contrib-period/soft-cap-reached?",1587863344),true], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),"Amazing! Soft Cap was just reached!"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","on-hard-cap-reached","contribution/on-hard-cap-reached",57480350),contribution.events.interceptors,(function (p__36091,p__36092){
var map__36093 = p__36091;
var map__36093__$1 = ((((!((map__36093 == null)))?((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36093):map__36093);
var db = cljs.core.get.call(null,map__36093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36094 = p__36092;
var map__36097 = cljs.core.nth.call(null,vec__36094,(0),null);
var map__36097__$1 = ((((!((map__36097 == null)))?((((map__36097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36097):map__36097);
var contrib_period_index = cljs.core.get.call(null,map__36097__$1,new cljs.core.Keyword(null,"contrib-period-index","contrib-period-index",-118898023));
var end_time = cljs.core.get.call(null,map__36097__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),district0x.big_number.__GT_number.call(null,contrib_period_index)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303),district0x.big_number.__GT_date_time.call(null,end_time),new cljs.core.Keyword("contrib-period","hard-cap-reached?","contrib-period/hard-cap-reached?",-695663106),true], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),"Unbelievable! Our Hard Cap was reached! The Sale is over now"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","on-emergency-changed","contribution/on-emergency-changed",65044459),contribution.events.interceptors,(function (p__36100,p__36101){
var map__36102 = p__36100;
var map__36102__$1 = ((((!((map__36102 == null)))?((((map__36102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36102):map__36102);
var db = cljs.core.get.call(null,map__36102__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36103 = p__36101;
var map__36106 = cljs.core.nth.call(null,vec__36103,(0),null);
var map__36106__$1 = ((((!((map__36106 == null)))?((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36106):map__36106);
var is_stopped = cljs.core.get.call(null,map__36106__$1,new cljs.core.Keyword(null,"is-stopped","is-stopped",-974653883));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword("contribution","stopped?","contribution/stopped?",-912616402),is_stopped),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),(cljs.core.truth_(is_stopped)?"Contribution was temporarily paused due to emergency":"Contribution was just resumed")], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","set-contrib-period","contribution/set-contrib-period",-647147918),contribution.events.interceptors,(function (p__36109,p__36110){
var map__36111 = p__36109;
var map__36111__$1 = ((((!((map__36111 == null)))?((((map__36111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36111):map__36111);
var db = cljs.core.get.call(null,map__36111__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36112 = p__36110;
var args = cljs.core.nth.call(null,vec__36112,(0),null);
var address_index = cljs.core.nth.call(null,vec__36112,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"set-contrib-period","set-contrib-period",124248674),new cljs.core.Keyword(null,"args","args",1315556576),contribution.api.contrib_period_args.call(null,args),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas","gas",-139961463),(3800000),new cljs.core.Keyword(null,"from","from",1815293044),(cljs.core.truth_(address_index)?cljs.core.nth.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),address_index):new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"receipt-dispatch","receipt-dispatch",-1847083437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922),contribution.constants.current_contrib_period], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922),contribution.events.interceptors,(function (p__36116,p__36117){
var map__36118 = p__36116;
var map__36118__$1 = ((((!((map__36118 == null)))?((((map__36118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36118):map__36118);
var db = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36119 = p__36117;
var period_index = cljs.core.nth.call(null,vec__36119,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),period_index,new cljs.core.Keyword("contrib-period","loading?","contrib-period/loading?",1769340230)], null),true),new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)),new cljs.core.Keyword(null,"get-contrib-period","get-contrib-period",660112462),period_index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-contrib-period-loaded","contribution/get-contrib-period-loaded",902848776),period_index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","get-contrib-period-loaded","contribution/get-contrib-period-loaded",902848776),contribution.events.interceptors,(function (p__36123,p__36124){
var map__36125 = p__36123;
var map__36125__$1 = ((((!((map__36125 == null)))?((((map__36125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36125):map__36125);
var db = cljs.core.get.call(null,map__36125__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36126 = p__36124;
var period_index = cljs.core.nth.call(null,vec__36126,(0),null);
var contrib_period = cljs.core.nth.call(null,vec__36126,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722),period_index], null),cljs.core.merge.call(null,contribution.api.parse_get_contrib_period.call(null,contrib_period),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib-period","loading?","contrib-period/loading?",1769340230),false], null)))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","get-configuration","contribution/get-configuration",904521636),contribution.events.interceptors,(function (p__36130){
var map__36131 = p__36130;
var map__36131__$1 = ((((!((map__36131 == null)))?((((map__36131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36131):map__36131);
var db = cljs.core.get.call(null,map__36131__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)),new cljs.core.Keyword(null,"get-configuration","get-configuration",-2080953452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-configuration-loaded","contribution/get-configuration-loaded",-682754349)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","get-configuration-loaded","contribution/get-configuration-loaded",-682754349),contribution.events.interceptors,(function (p__36133,p__36134){
var map__36135 = p__36133;
var map__36135__$1 = ((((!((map__36135 == null)))?((((map__36135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36135):map__36135);
var db = cljs.core.get.call(null,map__36135__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36136 = p__36134;
var configuration = cljs.core.nth.call(null,vec__36136,(0),null);
var config = contribution.api.parse_get_configuration.call(null,configuration);
if(cljs.core.not.call(null,district0x.utils.zero_address_QMARK_.call(null,new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613).cljs$core$IFn$_invoke$arity$1(config)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,config)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"contracts-not-found?","contracts-not-found?",-707858779),true)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","contribute","contribution/contribute",-888702930),contribution.events.interceptors,(function (p__36140,p__36141){
var map__36142 = p__36140;
var map__36142__$1 = ((((!((map__36142 == null)))?((((map__36142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36142):map__36142);
var db = cljs.core.get.call(null,map__36142__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36143 = p__36141;
var form_data = cljs.core.nth.call(null,vec__36143,(0),null);
var address = cljs.core.nth.call(null,vec__36143,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.form","submit","district0x.form/submit",-149404561),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),form_data,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"value","value",305978217),district0x.utils.num__GT_wei.call(null,new cljs.core.Keyword("contribution","amount","contribution/amount",-1003108592).cljs$core$IFn$_invoke$arity$1(form_data)),new cljs.core.Keyword(null,"fn-key","fn-key",650633930),new cljs.core.Keyword("contribution","contribute","contribution/contribute",-888702930),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),contribution.constants.eth_contracts_fns.call(null,new cljs.core.Keyword("contribution","contribute","contribution/contribute",-888702930)),new cljs.core.Keyword(null,"form-key","form-key",-309492408),new cljs.core.Keyword("form.contribution","contribute","form.contribution/contribute",-966625464),new cljs.core.Keyword(null,"receipt-dispatch","receipt-dispatch",-1847083437),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),"Thank you! Your contribution was successfully sent"], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","enable-contrib-period","contribution/enable-contrib-period",1198295135),contribution.events.interceptors,(function (p__36147,p__36148){
var map__36149 = p__36147;
var map__36149__$1 = ((((!((map__36149 == null)))?((((map__36149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36149):map__36149);
var db = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36150 = p__36148;
var form_data = cljs.core.nth.call(null,vec__36150,(0),null);
var address = cljs.core.nth.call(null,vec__36150,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.form","submit","district0x.form/submit",-149404561),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),form_data,new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"fn-key","fn-key",650633930),new cljs.core.Keyword("contribution","enable-contrib-period","contribution/enable-contrib-period",1198295135),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),contribution.constants.eth_contracts_fns.call(null,new cljs.core.Keyword("contribution","enable-contrib-period","contribution/enable-contrib-period",1198295135)),new cljs.core.Keyword(null,"form-key","form-key",-309492408),new cljs.core.Keyword("form.contribution","enable-contrib-period","form.contribution/enable-contrib-period",1276086133),new cljs.core.Keyword(null,"receipt-dispatch-n","receipt-dispatch-n",1351893970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),"Your agreement to enable contribution was successfully sent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922),contribution.constants.current_contrib_period], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","emergency-stop","contribution/emergency-stop",-60871693),contribution.events.interceptors,(function (p__36154){
var map__36155 = p__36154;
var map__36155__$1 = ((((!((map__36155 == null)))?((((map__36155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36155):map__36155);
var db = cljs.core.get.call(null,map__36155__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"emergency-stop","emergency-stop",-1436839965),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gas","gas",-139961463),(200000)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","release","contribution/release",378437083),contribution.events.interceptors,(function (p__36157){
var map__36158 = p__36157;
var map__36158__$1 = ((((!((map__36158 == null)))?((((map__36158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36158):map__36158);
var db = cljs.core.get.call(null,map__36158__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"release","release",-1534371381),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gas","gas",-139961463),(200000)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","compensate-contributors","contribution/compensate-contributors",1207934286),contribution.events.interceptors,(function (p__36160,p__36161){
var map__36162 = p__36160;
var map__36162__$1 = ((((!((map__36162 == null)))?((((map__36162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36162):map__36162);
var db = cljs.core.get.call(null,map__36162__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36163 = p__36161;
var map__36166 = cljs.core.nth.call(null,vec__36163,(0),null);
var map__36166__$1 = ((((!((map__36166 == null)))?((((map__36166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36166):map__36166);
var period_index = cljs.core.get.call(null,map__36166__$1,new cljs.core.Keyword("contribution","period-index","contribution/period-index",-1877665997));
var offset = cljs.core.get.call(null,map__36166__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var limit = cljs.core.get.call(null,map__36166__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"compensate-contributors","compensate-contributors",-100398818),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [period_index,offset,limit], null),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gas","gas",-139961463),(3500000)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","enable-district0x-network-token-transfers","contribution/enable-district0x-network-token-transfers",-1265664426),contribution.events.interceptors,(function (p__36169){
var map__36170 = p__36169;
var map__36170__$1 = ((((!((map__36170 == null)))?((((map__36170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36170):map__36170);
var db = cljs.core.get.call(null,map__36170__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"enable-district0x-network-token-transfers","enable-district0x-network-token-transfers",-493395290),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gas","gas",-139961463),(500000)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","addresses->owners?","contribution/addresses->owners?",-1370315629),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors], null),(function (p__36172,p__36173){
var map__36174 = p__36172;
var map__36174__$1 = ((((!((map__36174 == null)))?((((map__36174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36174):map__36174);
var db = cljs.core.get.call(null,map__36174__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36175 = p__36173;
var addresses = cljs.core.nth.call(null,vec__36175,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fns","fns",1185138786),(function (){var iter__12480__auto__ = ((function (map__36174,map__36174__$1,db,vec__36175,addresses){
return (function contribution$events$iter__36179(s__36180){
return (new cljs.core.LazySeq(null,((function (map__36174,map__36174__$1,db,vec__36175,addresses){
return (function (){
var s__36180__$1 = s__36180;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36180__$1);
if(temp__4657__auto__){
var s__36180__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36180__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__36180__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__36182 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__36181 = (0);
while(true){
if((i__36181 < size__12479__auto__)){
var address = cljs.core._nth.call(null,c__12478__auto__,i__36181);
cljs.core.chunk_append.call(null,b__36182,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132),address,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","address->owner?-loaded","contribution/address->owner?-loaded",866592456),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("contribution","addresses->owners?","contribution/addresses->owners?",-1370315629)], null)], null));

var G__36183 = (i__36181 + (1));
i__36181 = G__36183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36182),contribution$events$iter__36179.call(null,cljs.core.chunk_rest.call(null,s__36180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36182),null);
}
} else {
var address = cljs.core.first.call(null,s__36180__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132),address,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","address->owner?-loaded","contribution/address->owner?-loaded",866592456),address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("contribution","addresses->owners?","contribution/addresses->owners?",-1370315629)], null)], null),contribution$events$iter__36179.call(null,cljs.core.rest.call(null,s__36180__$2)));
}
} else {
return null;
}
break;
}
});})(map__36174,map__36174__$1,db,vec__36175,addresses))
,null,null));
});})(map__36174,map__36174__$1,db,vec__36175,addresses))
;
return iter__12480__auto__.call(null,(function (){var or__11700__auto__ = addresses;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db);
}
})());
})()], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("contribution","address->owner?-loaded","contribution/address->owner?-loaded",866592456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors], null),(function (p__36184,p__36185){
var map__36186 = p__36184;
var map__36186__$1 = ((((!((map__36186 == null)))?((((map__36186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36186):map__36186);
var db = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36187 = p__36185;
var address = cljs.core.nth.call(null,vec__36187,(0),null);
var owner_QMARK_ = cljs.core.nth.call(null,vec__36187,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","address->owner?","contribution/address->owner?",769530635),address], null),owner_QMARK_)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"watch-dnt-balances","watch-dnt-balances",1714451517),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors], null),(function (p__36191){
var map__36192 = p__36191;
var map__36192__$1 = ((((!((map__36192 == null)))?((((map__36192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36192):map__36192);
var db = cljs.core.get.call(null,map__36192__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),cljs.core.conj.call(null,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(district0x.events.get_contract.call(null,db,new cljs.core.Keyword(null,"contribution","contribution",-1962459669)))),new cljs.core.Keyword(null,"instance","instance",-2121349050),district0x.events.get_instance.call(null,db,new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370)),new cljs.core.Keyword(null,"token-code","token-code",-2080703929),new cljs.core.Keyword(null,"dnt","dnt",2065197951)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("dnt-token","transfer","dnt-token/transfer",-95131694),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.events.interceptors], null),(function (p__36194,p__36195){
var map__36196 = p__36194;
var map__36196__$1 = ((((!((map__36196 == null)))?((((map__36196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36196):map__36196);
var db = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36197 = p__36195;
var map__36200 = cljs.core.nth.call(null,vec__36197,(0),null);
var map__36200__$1 = ((((!((map__36200 == null)))?((((map__36200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36200):map__36200);
var to = cljs.core.get.call(null,map__36200__$1,new cljs.core.Keyword("dnt-token","to","dnt-token/to",1380052785));
var from = cljs.core.get.call(null,map__36200__$1,new cljs.core.Keyword("dnt-token","from","dnt-token/from",-922533958));
var value = cljs.core.get.call(null,map__36200__$1,new cljs.core.Keyword("dnt-token","value","dnt-token/value",-848517357));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370),new cljs.core.Keyword(null,"contract-method","contract-method",-417997741),new cljs.core.Keyword(null,"transfer","transfer",327423400),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to,value], null),new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas","gas",-139961463),(200000),new cljs.core.Keyword(null,"from","from",1815293044),(function (){var or__11700__auto__ = from;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db);
}
})()], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"reinitialize","reinitialize",-978221124),contribution.events.interceptors,(function (p__36203,args){
var map__36204 = p__36203;
var map__36204__$1 = ((((!((map__36204 == null)))?((((map__36204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36204):map__36204);
var db = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"db","db",993250759));
var my_addresses = new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db);
var map__36206 = cljs.spec.conform.call(null,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution-args","contribution-args",1137619840),new cljs.core.Keyword(null,"address-index","address-index",1004967357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.maybe_impl.call(null,cljs.core.map_QMARK_,new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.maybe_impl.call(null,cljs.core.number_QMARK_,new cljs.core.Symbol(null,"number?","number?",-1747282210,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null)),args);
var map__36206__$1 = ((((!((map__36206 == null)))?((((map__36206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36206):map__36206);
var contribution_args = cljs.core.get.call(null,map__36206__$1,new cljs.core.Keyword(null,"contribution-args","contribution-args",1137619840));
var address_index = cljs.core.get.call(null,map__36206__$1,new cljs.core.Keyword(null,"address-index","address-index",1004967357));
console.clear();

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","clear-smart-contracts","district0x/clear-smart-contracts",1253270767)], null),new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),contribution.constants.contracts_version], null)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contracts-loaded","district0x/smart-contracts-loaded",1436430088)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deploy-all-contracts","deploy-all-contracts",1111032956),cljs.core.merge.call(null,((((10) <= cljs.core.count.call(null,my_addresses)))?new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("contribution","owners","contribution/owners",-893366732),cljs.core.take.call(null,(2),my_addresses),new cljs.core.Keyword("contribution","required-count","contribution/required-count",704684007),(1),new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779),cljs.core.first.call(null,my_addresses),new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069),cljs.core.second.call(null,my_addresses),new cljs.core.Keyword("contribution","early-sponsor","contribution/early-sponsor",-611101281),cljs.core.first.call(null,my_addresses),new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613),cljs.core.nth.call(null,my_addresses,(3)),new cljs.core.Keyword("contribution","advisers","contribution/advisers",-710646550),cljs.core.drop.call(null,(4),cljs.core.take.call(null,(8),my_addresses))], null):null),contribution_args),address_index], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"reinitialize+start-contribution","reinitialize+start-contribution",-1923001045),contribution.events.interceptors,(function (p__36208){
var map__36209 = p__36208;
var map__36209__$1 = ((((!((map__36209 == null)))?((((map__36209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36209):map__36209);
var db = cljs.core.get.call(null,map__36209__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reinitialize","reinitialize",-978221124)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(3000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","set-contrib-period","contribution/set-contrib-period",-647147918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("contribution","period-index","contribution/period-index",-1877665997),(0),new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083),cljs_time.coerce.to_epoch.call(null,cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.seconds.call(null,(5)))),new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303),cljs_time.coerce.to_epoch.call(null,cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.hours.call(null,(2)))),new cljs.core.Keyword("contrib-period","soft-cap-amount","contrib-period/soft-cap-amount",1087290602),district0x.utils.eth__GT_wei.call(null,(5)),new cljs.core.Keyword("contrib-period","hard-cap-amount","contrib-period/hard-cap-amount",1654671072),district0x.utils.eth__GT_wei.call(null,(100)),new cljs.core.Keyword("contrib-period","after-soft-cap-duration","contrib-period/after-soft-cap-duration",-1142293670),cljs_time.core.in_seconds.call(null,cljs_time.core.minutes.call(null,(30)))], null),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(4000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","enable-contrib-period","contribution/enable-contrib-period",1198295135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contribution","period-index","contribution/period-index",-1877665997),(0)], null)], null)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map