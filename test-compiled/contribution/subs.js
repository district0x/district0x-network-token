// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.subs');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('contribution.constants');
goog.require('medley.core');
goog.require('cljs_web3.core');
goog.require('goog.string.format');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("db","now","db/now",-1650520537),(function (db){
return new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contribution","dnt-balance","contribution/dnt-balance",1513778359),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","balances","district0x/balances",434220491)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contracts","district0x/smart-contracts",35053639)], null),(function (p__45970){
var vec__45971 = p__45970;
var balances = cljs.core.nth.call(null,vec__45971,(0),null);
var contracts = cljs.core.nth.call(null,vec__45971,(1),null);
return cljs.core.get_in.call(null,balances,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contribution","contribution",-1962459669).cljs$core$IFn$_invoke$arity$1(contracts)),new cljs.core.Keyword(null,"dnt","dnt",2065197951)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contribution","address->owner?","contribution/address->owner?",769530635),(function (db,_){
return new cljs.core.Keyword("contribution","address->owner?","contribution/address->owner?",769530635).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187),(function (db){
return new cljs.core.Keyword("contribution","contrib-periods","contribution/contrib-periods",-1586190722).cljs$core$IFn$_invoke$arity$1(db).call(null,contribution.constants.current_contrib_period);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contribution","current-contrib-period-status","contribution/current-contrib-period-status",-1891703700),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","now","db/now",-1650520537)], null),(function (p__45974){
var vec__45975 = p__45974;
var map__45978 = cljs.core.nth.call(null,vec__45975,(0),null);
var map__45978__$1 = ((((!((map__45978 == null)))?((((map__45978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45978):map__45978);
var start_time = cljs.core.get.call(null,map__45978__$1,new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083));
var end_time = cljs.core.get.call(null,map__45978__$1,new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303));
var now = cljs.core.nth.call(null,vec__45975,(1),null);
if((cljs.core.not.call(null,start_time)) || (cljs.core.not.call(null,end_time)) || (cljs.core.not.call(null,cljs_time.core.before_QMARK_.call(null,start_time,now)))){
return new cljs.core.Keyword("contrib-period-status","not-started","contrib-period-status/not-started",-519893104);
} else {
if(cljs.core.truth_((function (){var and__11688__auto__ = cljs_time.core.after_QMARK_.call(null,now,start_time);
if(cljs.core.truth_(and__11688__auto__)){
return cljs_time.core.before_QMARK_.call(null,now,end_time);
} else {
return and__11688__auto__;
}
})())){
return new cljs.core.Keyword("contrib-period-status","running","contrib-period-status/running",-83361607);
} else {
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,now,end_time))){
return new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548);
} else {
return null;
}
}
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("contribution","configuration","contribution/configuration",-2091662648),(function (db){
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","stopped?","contribution/stopped?",-912616402),new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779),new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069),new cljs.core.Keyword("contribution","early-sponsor","contribution/early-sponsor",-611101281),new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613),new cljs.core.Keyword("contribution","advisers","contribution/advisers",-710646550)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contribution-address","contribution-address",-483759603),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"address","address",559499426)], null)),new cljs.core.Keyword(null,"dnt-token-address","dnt-token-address",39639804),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.Keyword(null,"dnt-token","dnt-token",950909370),new cljs.core.Keyword(null,"address","address",559499426)], null))], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"contribution-contract-address","contribution-contract-address",-281271207),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contracts","district0x/smart-contracts",35053639)], null),(function (contracts){
return cljs.core.get_in.call(null,contracts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.Keyword(null,"address","address",559499426)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("db","active-address-owner?","db/active-address-owner?",42008335),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","active-address","district0x/active-address",-331101118)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","address->owner?","contribution/address->owner?",769530635)], null),(function (p__45980){
var vec__45981 = p__45980;
var active_address = cljs.core.nth.call(null,vec__45981,(0),null);
var address__GT_owner_QMARK_ = cljs.core.nth.call(null,vec__45981,(1),null);
return address__GT_owner_QMARK_.call(null,active_address);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("db","active-address-founder?","db/active-address-founder?",976692115),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","configuration","contribution/configuration",-2091662648)], null),(function (p__45984){
var vec__45985 = p__45984;
var active_address = cljs.core.nth.call(null,vec__45985,(0),null);
var map__45988 = cljs.core.nth.call(null,vec__45985,(1),null);
var map__45988__$1 = ((((!((map__45988 == null)))?((((map__45988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45988):map__45988);
var founder1 = cljs.core.get.call(null,map__45988__$1,new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779));
var founder2 = cljs.core.get.call(null,map__45988__$1,new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069));
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([founder1,founder2], true),active_address);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("form.contribution","enable-contrib-period","form.contribution/enable-contrib-period",1276086133),(function (db,_){
return new cljs.core.Keyword("form.contribution","enable-contrib-period","form.contribution/enable-contrib-period",1276086133).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("form.contribution","contribute","form.contribution/contribute",-966625464),(function (db,_){
return new cljs.core.Keyword("form.contribution","contribute","form.contribution/contribute",-966625464).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map