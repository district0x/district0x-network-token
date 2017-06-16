// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.subs');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('medley.core');
goog.require('cljs_web3.core');
goog.require('goog.string.format');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","my-addresses","district0x/my-addresses",1741284138),(function (db,_){
return new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","active-address","district0x/active-address",-331101118),(function (db,_){
return new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","can-submit-into-blockchain?","district0x/can-submit-into-blockchain?",801808027),(function (db,_){
return cljs.core.boolean$.call(null,(function (){var and__11688__auto__ = (function (){var or__11700__auto__ = new cljs.core.Keyword(null,"provides-web3?","provides-web3?",-1843788974).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return new cljs.core.Keyword(null,"load-node-addresses?","load-node-addresses?",-2034812493).cljs$core$IFn$_invoke$arity$1(db);
}
})();
if(cljs.core.truth_(and__11688__auto__)){
return new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db);
} else {
return and__11688__auto__;
}
})());
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("db","active-page","db/active-page",370352852),(function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","conversion-rates","district0x/conversion-rates",-942237381),(function (db){
return new cljs.core.Keyword(null,"conversion-rates","conversion-rates",1603404721).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","smart-contracts","district0x/smart-contracts",35053639),(function (db){
return new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","balances","district0x/balances",434220491),(function (db,_){
return new cljs.core.Keyword(null,"balances","balances",-1047003019).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","active-address-balance","district0x/active-address-balance",658715129),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","active-address","district0x/active-address",-331101118)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","balances","district0x/balances",434220491)], null),(function (p__36273,p__36274){
var vec__36275 = p__36273;
var active_address = cljs.core.nth.call(null,vec__36275,(0),null);
var balances = cljs.core.nth.call(null,vec__36275,(1),null);
var vec__36278 = p__36274;
var _ = cljs.core.nth.call(null,vec__36278,(0),null);
var token = cljs.core.nth.call(null,vec__36278,(1),null);
return cljs.core.get_in.call(null,balances,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_address,(function (){var or__11700__auto__ = token;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return new cljs.core.Keyword(null,"eth","eth",1381694970);
}
})()], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","contracts-not-found?","district0x/contracts-not-found?",210394191),(function (db,_){
return new cljs.core.Keyword(null,"contracts-not-found?","contracts-not-found?",-707858779).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","blockchain-connection-error?","district0x/blockchain-connection-error?",1624111314),(function (db){
return new cljs.core.Keyword("district0x","blockchain-connection-error?","district0x/blockchain-connection-error?",1624111314).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","snackbar","district0x/snackbar",42970791),(function (db){
return new cljs.core.Keyword(null,"snackbar","snackbar",1792678973).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","window-width-size","district0x/window-width-size",-1364942416),(function (db){
return new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","window-lg-width?","district0x/window-lg-width?",1498961466),(function (db){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462).cljs$core$IFn$_invoke$arity$1(db),(3));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","window-md-lg-width?","district0x/window-md-lg-width?",1534637567),(function (db){
return (new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462).cljs$core$IFn$_invoke$arity$1(db) >= (2));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","window-xs-width?","district0x/window-xs-width?",14187919),(function (db){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462).cljs$core$IFn$_invoke$arity$1(db),(0));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district0x","window-xs-sm-width?","district0x/window-xs-sm-width?",606649051),(function (db){
return (new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462).cljs$core$IFn$_invoke$arity$1(db) <= (1));
}));

//# sourceMappingURL=subs.js.map