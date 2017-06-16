// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.events');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('ajax.core');
goog.require('goog.string');
goog.require('district0x.constants');
goog.require('day8.re_frame.async_flow_fx');
goog.require('cljs_web3.utils');
goog.require('clojure.data');
goog.require('district0x.utils');
goog.require('akiroz.re_frame.storage');
goog.require('district0x.interval_fx');
goog.require('cljs_web3.personal');
goog.require('medley.core');
goog.require('cljs_web3.eth');
goog.require('district0x.big_number');
goog.require('madvas.re_frame.google_analytics_fx');
goog.require('cljs_web3.core');
goog.require('cljs_time.coerce');
goog.require('goog.string.format');
goog.require('madvas.re_frame.web3_fx');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('district0x.dispatch_fx');
goog.require('district0x.window_fx');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"contribution","contribution",-1962459669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"localstorage","localstorage",688644372),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"localstorage","localstorage",688644372)], null));
district0x.events.check_and_throw = (function district0x$events$check_and_throw(a_spec,db){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,a_spec,db))){
return null;
} else {
console.error(cljs.spec.explain_str.call(null,a_spec,db));

throw "DB Spec check failed";
}
} else {
return null;
}
});
district0x.events.check_spec_interceptor = re_frame.core.after.call(null,cljs.core.partial.call(null,district0x.events.check_and_throw,new cljs.core.Keyword("district0x.db","db","district0x.db/db",-177123087)));
district0x.events.interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v,district0x.events.check_spec_interceptor], null);
district0x.events.get_contract = (function district0x$events$get_contract(db,key){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),key], null));
});
district0x.events.get_instance = (function district0x$events$get_instance(db,key){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),key,new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
});
district0x.events.all_contracts_loaded_QMARK_ = (function district0x$events$all_contracts_loaded_QMARK_(db){
return cljs.core.every_QMARK_.call(null,(function (p1__35738_SHARP_){
var and__11688__auto__ = new cljs.core.Keyword(null,"abi","abi",-1999451499).cljs$core$IFn$_invoke$arity$1(p1__35738_SHARP_);
if(cljs.core.truth_(and__11688__auto__)){
if(cljs.core.truth_(goog.DEBUG)){
return new cljs.core.Keyword(null,"bin","bin",-200999690).cljs$core$IFn$_invoke$arity$1(p1__35738_SHARP_);
} else {
return true;
}
} else {
return and__11688__auto__;
}
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213).cljs$core$IFn$_invoke$arity$1(db)));
});
district0x.events.all_contracts_deployed_QMARK_ = (function district0x$events$all_contracts_deployed_QMARK_(db){
return cljs.core.every_QMARK_.call(null,(function (p1__35739_SHARP_){
var and__11688__auto__ = new cljs.core.Keyword(null,"instance","instance",-2121349050).cljs$core$IFn$_invoke$arity$1(p1__35739_SHARP_);
if(cljs.core.truth_(and__11688__auto__)){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__35739_SHARP_);
} else {
return and__11688__auto__;
}
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213).cljs$core$IFn$_invoke$arity$1(db)));
});
district0x.events.contract_xhrio = (function district0x$events$contract_xhrio(contract_name,code_type,version,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),goog.string.format("./contracts/build/%s.%s?v=%s",contract_name,cljs.core.name.call(null,code_type),(cljs.core.truth_(goog.DEBUG)?(new Date()).getTime():version)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(6000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),((cljs.core._EQ_.call(null,code_type,new cljs.core.Keyword(null,"abi","abi",-1999451499)))?ajax.core.json_response_format.call(null):ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null);
});
district0x.events.log_used_gas = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"log-used-gas","log-used-gas",-220455277),new cljs.core.Keyword(null,"before","before",-1633692388),(function (p__35741){
var map__35742 = p__35741;
var map__35742__$1 = ((((!((map__35742 == null)))?((((map__35742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35742):map__35742);
var context = map__35742__$1;
var coeffects = cljs.core.get.call(null,map__35742__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(coeffects);
var map__35744 = cljs.core.last.call(null,event);
var map__35744__$1 = ((((!((map__35744 == null)))?((((map__35744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35744):map__35744);
var receipt = map__35744__$1;
var gas_used = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278));
var gas_limit = cljs.core.first.call(null,event);
var gas_used_percent = ((gas_used / gas_limit) * (100));
var gas_used_percent_str = goog.string.format("%.2f%",gas_used_percent);
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"gas used:",gas_used_percent_str,gas_used,cljs.core.second.call(null,event));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442),(cljs.core.count.call(null,event) - (1))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),(gas_used < gas_limit),new cljs.core.Keyword(null,"gas-used-percent","gas-used-percent",-104959847),gas_used_percent_str], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),((function (gas_used_percent,gas_used_percent_str,event,map__35744,map__35744__$1,receipt,gas_used,gas_limit,map__35742,map__35742__$1,context,coeffects){
return (function (p1__35740_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__35740_SHARP_));
});})(gas_used_percent,gas_used_percent_str,event,map__35744,map__35744__$1,receipt,gas_used,gas_limit,map__35742,map__35742__$1,context,coeffects))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"last-transaction-gas-used","last-transaction-gas-used",-1257149970)], null),gas_used_percent);
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ga","event","ga/event",301434432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log-used-gas",cljs.core.name.call(null,new cljs.core.Keyword(null,"fn-key","fn-key",650633930).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,event))),[cljs.core.str(cljs.core.select_keys.call(null,cljs.core.last.call(null,event),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),new cljs.core.Keyword(null,"gas-used-percent","gas-used-percent",-104959847),new cljs.core.Keyword(null,"transaction-hash","transaction-hash",-1131458511),new cljs.core.Keyword(null,"success?","success?",-122854052)], null)))].join('')], null)], null));
}));
district0x.events.initialize_db = (function district0x$events$initialize_db(default_db,localstorage){
var web3 = (cljs.core.truth_(district0x.constants.provides_web3_QMARK_)?(window["web3"]):cljs_web3.core.create_web3.call(null,new cljs.core.Keyword(null,"node-url","node-url",-924720133).cljs$core$IFn$_invoke$arity$1(default_db)));
var db = default_db;
var db__$1 = cljs.core.merge_with.call(null,((function (db,web3){
return (function (p1__35746_SHARP_,p2__35747_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__35746_SHARP_)){
return cljs.core.merge_with.call(null,cljs.core.merge,p1__35746_SHARP_,p2__35747_SHARP_);
} else {
return p2__35747_SHARP_;
}
});})(db,web3))
,db,localstorage);
return cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"web3","web3",-879451640),web3);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","initialize","district0x/initialize",-56256997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__35748,p__35749){
var map__35750 = p__35748;
var map__35750__$1 = ((((!((map__35750 == null)))?((((map__35750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35750):map__35750);
var localstorage = cljs.core.get.call(null,map__35750__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__35751 = p__35749;
var map__35754 = cljs.core.nth.call(null,vec__35751,(0),null);
var map__35754__$1 = ((((!((map__35754 == null)))?((((map__35754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35754):map__35754);
var default_db = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"default-db","default-db",1505343439));
var conversion_rates = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"conversion-rates","conversion-rates",1603404721));
var effects = cljs.core.get.call(null,map__35754__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var db = district0x.events.initialize_db.call(null,default_db,localstorage);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("ga","page-view","ga/page-view",-1684523984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.utils.current_location_hash.call(null)], null),new cljs.core.Keyword("window","on-resize","window/on-resize",2002922991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.window","resized","district0x.window/resized",-616460230)], null),new cljs.core.Keyword(null,"resize-interval","resize-interval",-1359384400),(166)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-my-addresses","district0x/load-my-addresses",-212722476)], null)], null),(cljs.core.truth_(conversion_rates)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("district0x","dispatch-n","district0x/dispatch-n",967825054),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-conversion-rates","district0x/load-conversion-rates",1182881876),new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(conversion_rates)], null)], null),new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-conversion-rates","district0x/load-conversion-rates",1182881876),new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(conversion_rates)], null),new cljs.core.Keyword(null,"ms","ms",-1152709733),(function (){var or__11700__auto__ = new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(conversion_rates);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (60000);
}
})(),new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-conversion-rates-interval","district0x/load-conversion-rates-interval",72309824)], null)], null)], null):null),effects);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","load-my-addresses","district0x/load-my-addresses",-212722476),district0x.events.interceptors,(function (p__35757){
var map__35758 = p__35757;
var map__35758__$1 = ((((!((map__35758 == null)))?((((map__35758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35758):map__35758);
var db = cljs.core.get.call(null,map__35758__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(district0x.constants.provides_web3_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","my-addresses-loaded","district0x/my-addresses-loaded",-272389638),cljs_web3.eth.accounts.call(null,new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db))], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"load-node-addresses?","load-node-addresses?",-2034812493).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web3.eth.accounts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","my-addresses-loaded","district0x/my-addresses-loaded",-272389638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),new cljs.core.Keyword(null,"initialize","initialize",609952913)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","my-addresses-loaded","district0x/my-addresses-loaded",-272389638),cljs.core.PersistentVector.EMPTY], null)], null);
}
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847),district0x.events.interceptors,(function (p__35760,p__35761){
var map__35762 = p__35760;
var map__35762__$1 = ((((!((map__35762 == null)))?((((map__35762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35762):map__35762);
var db = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35763 = p__35761;
var map__35766 = cljs.core.nth.call(null,vec__35763,(0),null);
var map__35766__$1 = ((((!((map__35766 == null)))?((((map__35766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35766):map__35766);
var version = cljs.core.get.call(null,map__35766__$1,new cljs.core.Keyword(null,"version","version",425292698));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.flatten.call(null,(function (){var iter__12480__auto__ = ((function (map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function district0x$events$iter__35769(s__35770){
return (new cljs.core.LazySeq(null,((function (map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function (){
var s__35770__$1 = s__35770;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35770__$1);
if(temp__4657__auto__){
var s__35770__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35770__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__35770__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__35772 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__35771 = (0);
while(true){
if((i__35771 < size__12479__auto__)){
var vec__35791 = cljs.core._nth.call(null,c__12478__auto__,i__35771);
var key = cljs.core.nth.call(null,vec__35791,(0),null);
var map__35794 = cljs.core.nth.call(null,vec__35791,(1),null);
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var name = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__35772,(function (){var iter__12480__auto__ = ((function (i__35771,vec__35791,key,map__35794,map__35794__$1,name,c__12478__auto__,size__12479__auto__,b__35772,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function district0x$events$iter__35769_$_iter__35796(s__35797){
return (new cljs.core.LazySeq(null,((function (i__35771,vec__35791,key,map__35794,map__35794__$1,name,c__12478__auto__,size__12479__auto__,b__35772,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function (){
var s__35797__$1 = s__35797;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35797__$1);
if(temp__4657__auto____$1){
var s__35797__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35797__$2)){
var c__12478__auto____$1 = cljs.core.chunk_first.call(null,s__35797__$2);
var size__12479__auto____$1 = cljs.core.count.call(null,c__12478__auto____$1);
var b__35799 = cljs.core.chunk_buffer.call(null,size__12479__auto____$1);
if((function (){var i__35798 = (0);
while(true){
if((i__35798 < size__12479__auto____$1)){
var code_type = cljs.core._nth.call(null,c__12478__auto____$1,i__35798);
cljs.core.chunk_append.call(null,b__35799,district0x.events.contract_xhrio.call(null,name,code_type,version,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contract-loaded","district0x/smart-contract-loaded",-1443053107),key,code_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847)], null)));

var G__35809 = (i__35798 + (1));
i__35798 = G__35809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35799),district0x$events$iter__35769_$_iter__35796.call(null,cljs.core.chunk_rest.call(null,s__35797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35799),null);
}
} else {
var code_type = cljs.core.first.call(null,s__35797__$2);
return cljs.core.cons.call(null,district0x.events.contract_xhrio.call(null,name,code_type,version,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contract-loaded","district0x/smart-contract-loaded",-1443053107),key,code_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847)], null)),district0x$events$iter__35769_$_iter__35796.call(null,cljs.core.rest.call(null,s__35797__$2)));
}
} else {
return null;
}
break;
}
});})(i__35771,vec__35791,key,map__35794,map__35794__$1,name,c__12478__auto__,size__12479__auto__,b__35772,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
,null,null));
});})(i__35771,vec__35791,key,map__35794,map__35794__$1,name,c__12478__auto__,size__12479__auto__,b__35772,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
;
return iter__12480__auto__.call(null,(cljs.core.truth_(goog.DEBUG)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abi","abi",-1999451499)], null)));
})());

var G__35810 = (i__35771 + (1));
i__35771 = G__35810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35772),district0x$events$iter__35769.call(null,cljs.core.chunk_rest.call(null,s__35770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35772),null);
}
} else {
var vec__35800 = cljs.core.first.call(null,s__35770__$2);
var key = cljs.core.nth.call(null,vec__35800,(0),null);
var map__35803 = cljs.core.nth.call(null,vec__35800,(1),null);
var map__35803__$1 = ((((!((map__35803 == null)))?((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35803):map__35803);
var name = cljs.core.get.call(null,map__35803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,(function (){var iter__12480__auto__ = ((function (vec__35800,key,map__35803,map__35803__$1,name,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function district0x$events$iter__35769_$_iter__35805(s__35806){
return (new cljs.core.LazySeq(null,((function (vec__35800,key,map__35803,map__35803__$1,name,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version){
return (function (){
var s__35806__$1 = s__35806;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35806__$1);
if(temp__4657__auto____$1){
var s__35806__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35806__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__35806__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__35808 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__35807 = (0);
while(true){
if((i__35807 < size__12479__auto__)){
var code_type = cljs.core._nth.call(null,c__12478__auto__,i__35807);
cljs.core.chunk_append.call(null,b__35808,district0x.events.contract_xhrio.call(null,name,code_type,version,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contract-loaded","district0x/smart-contract-loaded",-1443053107),key,code_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847)], null)));

var G__35811 = (i__35807 + (1));
i__35807 = G__35811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35808),district0x$events$iter__35769_$_iter__35805.call(null,cljs.core.chunk_rest.call(null,s__35806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35808),null);
}
} else {
var code_type = cljs.core.first.call(null,s__35806__$2);
return cljs.core.cons.call(null,district0x.events.contract_xhrio.call(null,name,code_type,version,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contract-loaded","district0x/smart-contract-loaded",-1443053107),key,code_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847)], null)),district0x$events$iter__35769_$_iter__35805.call(null,cljs.core.rest.call(null,s__35806__$2)));
}
} else {
return null;
}
break;
}
});})(vec__35800,key,map__35803,map__35803__$1,name,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
,null,null));
});})(vec__35800,key,map__35803,map__35803__$1,name,s__35770__$2,temp__4657__auto__,map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
;
return iter__12480__auto__.call(null,(cljs.core.truth_(goog.DEBUG)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abi","abi",-1999451499)], null)));
})(),district0x$events$iter__35769.call(null,cljs.core.rest.call(null,s__35770__$2)));
}
} else {
return null;
}
break;
}
});})(map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
,null,null));
});})(map__35762,map__35762__$1,db,vec__35763,map__35766,map__35766__$1,version))
;
return iter__12480__auto__.call(null,new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213).cljs$core$IFn$_invoke$arity$1(db));
})())], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","clear-smart-contracts","district0x/clear-smart-contracts",1253270767),district0x.events.interceptors,(function (p__35812){
var map__35813 = p__35812;
var map__35813__$1 = ((((!((map__35813 == null)))?((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35813):map__35813);
var db = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),cljs.core.partial.call(null,medley.core.map_kv,((function (map__35813,map__35813__$1,db){
return (function (contract_key,contract){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_key,cljs.core.dissoc.call(null,contract,new cljs.core.Keyword(null,"abi","abi",-1999451499),new cljs.core.Keyword(null,"bin","bin",-200999690),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"instance","instance",-2121349050))], null);
});})(map__35813,map__35813__$1,db))
))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","smart-contract-loaded","district0x/smart-contract-loaded",-1443053107),district0x.events.interceptors,(function (p__35815,p__35816){
var map__35817 = p__35815;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35817):map__35817);
var db = cljs.core.get.call(null,map__35817__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35818 = p__35816;
var contract_key = cljs.core.nth.call(null,vec__35818,(0),null);
var code_type = cljs.core.nth.call(null,vec__35818,(1),null);
var code = cljs.core.nth.call(null,vec__35818,(2),null);
var code__$1 = ((cljs.core._EQ_.call(null,code_type,new cljs.core.Keyword(null,"abi","abi",-1999451499)))?cljs.core.clj__GT_js.call(null,code):[cljs.core.str("0x"),cljs.core.str(code)].join(''));
var contract = district0x.events.get_contract.call(null,db,contract_key);
var contract_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(contract);
var new_db = (function (){var G__35822 = db;
var G__35822__$1 = cljs.core.assoc_in.call(null,G__35822,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),contract_key,code_type], null),code__$1)
;
if(cljs.core._EQ_.call(null,code_type,new cljs.core.Keyword(null,"abi","abi",-1999451499))){
return cljs.core.update_in.call(null,G__35822__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),contract_key], null),cljs.core.merge,(cljs.core.truth_(contract_address)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance","instance",-2121349050),cljs_web3.eth.contract_at.call(null,new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),code__$1,contract_address)], null):null));
} else {
return G__35822__$1;
}
})();
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword("district0x","dispatch-n","district0x/dispatch-n",967825054),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(district0x.events.all_contracts_loaded_QMARK_.call(null,new_db))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contracts-loaded","district0x/smart-contracts-loaded",1436430088)], null):null)], null)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","smart-contracts-loaded","district0x/smart-contracts-loaded",1436430088),district0x.events.interceptors,(function (p__35823){
var map__35824 = p__35823;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var db = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"db","db",993250759));
return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","my-addresses-loaded","district0x/my-addresses-loaded",-272389638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__35826,p__35827){
var map__35828 = p__35826;
var map__35828__$1 = ((((!((map__35828 == null)))?((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35828):map__35828);
var db = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var localstorage = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__35829 = p__35827;
var addresses = cljs.core.nth.call(null,vec__35829,(0),null);
var active_address = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,addresses),new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(localstorage)))?new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(localstorage):cljs.core.first.call(null,addresses));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852),addresses),new cljs.core.Keyword(null,"active-address","active-address",-2071839524),active_address)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","watch-eth-balances","district0x/watch-eth-balances",-812518789),district0x.events.interceptors,(function (p__35833,p__35834){
var map__35835 = p__35833;
var map__35835__$1 = ((((!((map__35835 == null)))?((((map__35835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35835):map__35835);
var db = cljs.core.get.call(null,map__35835__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35836 = p__35834;
var map__35839 = cljs.core.nth.call(null,vec__35836,(0),null);
var map__35839__$1 = ((((!((map__35839 == null)))?((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35839):map__35839);
var addresses = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var on_address_balance_loaded = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"on-address-balance-loaded","on-address-balance-loaded",156381481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","address-balance-loaded","district0x/address-balance-loaded",131074405),new cljs.core.Keyword(null,"eth","eth",1381694970)], null));
if(cljs.core.seq.call(null,addresses)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","balances","web3-fx.blockchain/balances",-355830409),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),"latest",new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-eth-balances","district0x/watch-eth-balances",-812518789)], null),new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_address_balance_loaded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),new cljs.core.Keyword("district0x","watch-eth-balances","district0x/watch-eth-balances",-812518789)], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","load-eth-balances","district0x/load-eth-balances",-1377080941),district0x.events.interceptors,(function (p__35842,p__35843){
var map__35844 = p__35842;
var map__35844__$1 = ((((!((map__35844 == null)))?((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var db = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35845 = p__35843;
var map__35848 = cljs.core.nth.call(null,vec__35845,(0),null);
var map__35848__$1 = ((((!((map__35848 == null)))?((((map__35848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35848):map__35848);
var addresses = cljs.core.get.call(null,map__35848__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var on_address_balance_loaded = cljs.core.get.call(null,map__35848__$1,new cljs.core.Keyword(null,"on-address-balance-loaded","on-address-balance-loaded",156381481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","address-balance-loaded","district0x/address-balance-loaded",131074405),new cljs.core.Keyword(null,"eth","eth",1381694970)], null));
if(cljs.core.seq.call(null,addresses)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","balances","web3-fx.blockchain/balances",-355830409),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_address_balance_loaded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213)], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","watch-my-eth-balances","district0x/watch-my-eth-balances",422226093),district0x.events.interceptors,(function (p__35851,p__35852){
var map__35853 = p__35851;
var map__35853__$1 = ((((!((map__35853 == null)))?((((map__35853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35853):map__35853);
var db = cljs.core.get.call(null,map__35853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35854 = p__35852;
var args = cljs.core.nth.call(null,vec__35854,(0),null);
var addresses = new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-eth-balances","district0x/watch-eth-balances",-812518789),cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213),district0x.events.interceptors,(function (p__35858,p__35859){
var map__35860 = p__35858;
var map__35860__$1 = ((((!((map__35860 == null)))?((((map__35860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35860):map__35860);
var db = cljs.core.get.call(null,map__35860__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35861 = p__35859;
var map__35864 = cljs.core.nth.call(null,vec__35861,(0),null);
var map__35864__$1 = ((((!((map__35864 == null)))?((((map__35864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35864):map__35864);
var addresses = cljs.core.get.call(null,map__35864__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var instance = cljs.core.get.call(null,map__35864__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var token_code = cljs.core.get.call(null,map__35864__$1,new cljs.core.Keyword(null,"token-code","token-code",-2080703929));
if(cljs.core.seq.call(null,addresses)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","balances","web3-fx.blockchain/balances",-355830409),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),true,new cljs.core.Keyword(null,"blockchain-filter-opts","blockchain-filter-opts",-1765760749),"latest",new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213)], null),new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","address-balance-loaded","district0x/address-balance-loaded",131074405),token_code], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213)], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","load-token-balances","district0x/load-token-balances",-670038718),district0x.events.interceptors,(function (p__35867,p__35868){
var map__35869 = p__35867;
var map__35869__$1 = ((((!((map__35869 == null)))?((((map__35869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35869):map__35869);
var db = cljs.core.get.call(null,map__35869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35870 = p__35868;
var map__35873 = cljs.core.nth.call(null,vec__35870,(0),null);
var map__35873__$1 = ((((!((map__35873 == null)))?((((map__35873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35873):map__35873);
var addresses = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var instance = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var token_code = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"token-code","token-code",-2080703929));
if(cljs.core.seq.call(null,addresses)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","balances","web3-fx.blockchain/balances",-355830409),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"dispatches","dispatches",-331249187),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","address-balance-loaded","district0x/address-balance-loaded",131074405),token_code], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213)], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","watch-my-token-balances","district0x/watch-my-token-balances",-1228357923),district0x.events.interceptors,(function (p__35876,p__35877){
var map__35878 = p__35876;
var map__35878__$1 = ((((!((map__35878 == null)))?((((map__35878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35878):map__35878);
var db = cljs.core.get.call(null,map__35878__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35879 = p__35877;
var args = cljs.core.nth.call(null,vec__35879,(0),null);
var addresses = new cljs.core.Keyword(null,"my-addresses","my-addresses",-866093852).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-token-balances","district0x/watch-token-balances",-915812213),cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"addresses","addresses",-559529694),addresses)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","address-balance-loaded","district0x/address-balance-loaded",131074405),district0x.events.interceptors,(function (p__35883,p__35884){
var map__35885 = p__35883;
var map__35885__$1 = ((((!((map__35885 == null)))?((((map__35885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35885):map__35885);
var db = cljs.core.get.call(null,map__35885__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35886 = p__35884;
var token = cljs.core.nth.call(null,vec__35886,(0),null);
var balance = cljs.core.nth.call(null,vec__35886,(1),null);
var address = cljs.core.nth.call(null,vec__35886,(2),null);
var a = vec__35886;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"balances","balances",-1047003019),address,token], null),district0x.utils.big_num__GT_ether.call(null,balance))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","load-conversion-rates","district0x/load-conversion-rates",1182881876),district0x.events.interceptors,(function (p__35890,p__35891){
var map__35892 = p__35890;
var map__35892__$1 = ((((!((map__35892 == null)))?((((map__35892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35892):map__35892);
var db = cljs.core.get.call(null,map__35892__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35893 = p__35891;
var currencies = cljs.core.nth.call(null,vec__35893,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms="),cljs.core.str(clojure.string.join.call(null,",",cljs.core.map.call(null,cljs.core.name,currencies)))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(20000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","conversion-rates-loaded","district0x/conversion-rates-loaded",-572001859)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x","conversion-rates-loaded","district0x/conversion-rates-loaded",-572001859)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x","conversion-rates-loaded","district0x/conversion-rates-loaded",-572001859),district0x.events.interceptors,(function (db,p__35897){
var vec__35898 = p__35897;
var response = cljs.core.nth.call(null,vec__35898,(0),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"conversion-rates","conversion-rates",1603404721),cljs.core.merge,response);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","set-active-address","district0x/set-active-address",-1876941035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"localstorage","localstorage",688644372))], null),(function (p__35901,p__35902){
var map__35903 = p__35901;
var map__35903__$1 = ((((!((map__35903 == null)))?((((map__35903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35903):map__35903);
var db = cljs.core.get.call(null,map__35903__$1,new cljs.core.Keyword(null,"db","db",993250759));
var localstorage = cljs.core.get.call(null,map__35903__$1,new cljs.core.Keyword(null,"localstorage","localstorage",688644372));
var vec__35904 = p__35902;
var address = cljs.core.nth.call(null,vec__35904,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-address","active-address",-2071839524),address),new cljs.core.Keyword(null,"localstorage","localstorage",688644372),cljs.core.assoc.call(null,localstorage,new cljs.core.Keyword(null,"active-address","active-address",-2071839524),address)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.form","set-value","district0x.form/set-value",482500268),district0x.events.interceptors,(function (db,p__35908){
var vec__35909 = p__35908;
var seq__35910 = cljs.core.seq.call(null,vec__35909);
var first__35911 = cljs.core.first.call(null,seq__35910);
var seq__35910__$1 = cljs.core.next.call(null,seq__35910);
var form_key = first__35911;
var first__35911__$1 = cljs.core.first.call(null,seq__35910__$1);
var seq__35910__$2 = cljs.core.next.call(null,seq__35910__$1);
var field_key = first__35911__$1;
var first__35911__$2 = cljs.core.first.call(null,seq__35910__$2);
var seq__35910__$3 = cljs.core.next.call(null,seq__35910__$2);
var value = first__35911__$2;
var vec__35912 = seq__35910__$3;
var validator = cljs.core.nth.call(null,vec__35912,(0),null);
var validator__$1 = ((cljs.core.fn_QMARK_.call(null,validator))?validator:((cljs.core.boolean_QMARK_.call(null,validator))?cljs.core.constantly.call(null,validator):validator
));
var G__35915 = db;
var G__35915__$1 = cljs.core.assoc_in.call(null,G__35915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"data","data",-232669377),field_key], null),value)
;
var G__35915__$2 = (cljs.core.truth_((function (){var or__11700__auto__ = (function (){var and__11688__auto__ = validator__$1;
if(cljs.core.truth_(and__11688__auto__)){
return validator__$1.call(null,value);
} else {
return and__11688__auto__;
}
})();
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (validator__$1 == null);
}
})())?cljs.core.update_in.call(null,G__35915__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.comp.call(null,cljs.core.set,cljs.core.partial.call(null,cljs.core.remove,cljs.core.PersistentHashSet.fromArray([field_key], true)))):G__35915__$1);
if(cljs.core.truth_((function (){var and__11688__auto__ = validator__$1;
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.not.call(null,validator__$1.call(null,value));
} else {
return and__11688__auto__;
}
})())){
return cljs.core.update_in.call(null,G__35915__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.conj,field_key);
} else {
return G__35915__$2;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.form","submit","district0x.form/submit",-149404561),district0x.events.interceptors,(function (p__35916,p__35917){
var map__35918 = p__35916;
var map__35918__$1 = ((((!((map__35918 == null)))?((((map__35918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35918):map__35918);
var db = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35919 = p__35917;
var map__35922 = cljs.core.nth.call(null,vec__35919,(0),null);
var map__35922__$1 = ((((!((map__35922 == null)))?((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35922):map__35922);
var props = map__35922__$1;
var form_key = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var fn_key = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"fn-key","fn-key",650633930));
var fn_args = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192));
var form_data = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"form-data","form-data",1829298254));
var value = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"value","value",305978217));
var address = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"address","address",559499426));
var form = cljs.core.get.call(null,db,form_key);
var map__35925 = db;
var map__35925__$1 = ((((!((map__35925 == null)))?((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35925):map__35925);
var web3 = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var active_address = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"active-address","active-address",-2071839524));
var map__35926 = form;
var map__35926__$1 = ((((!((map__35926 == null)))?((((map__35926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35926):map__35926);
var gas_limit = cljs.core.get.call(null,map__35926__$1,new cljs.core.Keyword(null,"gas-limit","gas-limit",-691210996));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","state-fns","web3-fx.contract/state-fns",-1528611858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","state-fns","contract/state-fns",-646674528)], null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,cljs.core.keyword.call(null,cljs.core.namespace.call(null,fn_key))),fn_key], null),district0x.utils.map__GT_vec.call(null,form_data,fn_args),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas","gas",-139961463),gas_limit,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var or__11700__auto__ = address;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return active_address;
}
})()], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),parseInt(value)], null):null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.form","start-loading","district0x.form/start-loading",593088946),form_key], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("district0x.form","submit","district0x.form/submit",-149404561),fn_key,form_data,value,address], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.form","receipt-loaded","district0x.form/receipt-loaded",-513538591),gas_limit,props], null)], null))], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.form","receipt-loaded","district0x.form/receipt-loaded",-513538591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.interceptors,district0x.events.log_used_gas], null),(function (p__35930,p__35931){
var map__35932 = p__35930;
var map__35932__$1 = ((((!((map__35932 == null)))?((((map__35932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35932):map__35932);
var db = cljs.core.get.call(null,map__35932__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35933 = p__35931;
var map__35936 = cljs.core.nth.call(null,vec__35933,(0),null);
var map__35936__$1 = ((((!((map__35936 == null)))?((((map__35936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35936):map__35936);
var receipt_dispatch = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"receipt-dispatch","receipt-dispatch",-1847083437));
var receipt_dispatch_n = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"receipt-dispatch-n","receipt-dispatch-n",1351893970));
var form_data = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"form-data","form-data",1829298254));
var form_key = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var error_dispatch = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"error-dispatch","error-dispatch",-1809006666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-transaction-error","district0x.snackbar/show-transaction-error",-8020285)], null));
var map__35937 = cljs.core.nth.call(null,vec__35933,(1),null);
var map__35937__$1 = ((((!((map__35937 == null)))?((((map__35937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35937):map__35937);
var success_QMARK_ = cljs.core.get.call(null,map__35937__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
return cljs.core.merge.call(null,(cljs.core.truth_(form_key)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false)], null):null),(cljs.core.truth_((function (){var and__11688__auto__ = success_QMARK_;
if(cljs.core.truth_(and__11688__auto__)){
return receipt_dispatch;
} else {
return and__11688__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.call(null,receipt_dispatch,form_data)], null):null),(cljs.core.truth_((function (){var and__11688__auto__ = success_QMARK_;
if(cljs.core.truth_(and__11688__auto__)){
return receipt_dispatch_n;
} else {
return and__11688__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.map.call(null,((function (map__35932,map__35932__$1,db,vec__35933,map__35936,map__35936__$1,receipt_dispatch,receipt_dispatch_n,form_data,form_key,error_dispatch,map__35937,map__35937__$1,success_QMARK_){
return (function (p1__35929_SHARP_){
return cljs.core.conj.call(null,p1__35929_SHARP_,form_data);
});})(map__35932,map__35932__$1,db,vec__35933,map__35936,map__35936__$1,receipt_dispatch,receipt_dispatch_n,form_data,form_key,error_dispatch,map__35937,map__35937__$1,success_QMARK_))
,receipt_dispatch_n)], null):null),(cljs.core.truth_(success_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),error_dispatch], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.form","start-loading","district0x.form/start-loading",593088946),district0x.events.interceptors,(function (db,p__35941){
var vec__35942 = p__35941;
var form_key = cljs.core.nth.call(null,vec__35942,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.form","stop-loading","district0x.form/stop-loading",1997254109),district0x.events.interceptors,(function (db,p__35945){
var vec__35946 = p__35945;
var form_key = cljs.core.nth.call(null,vec__35946,(0),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.form","add-error","district0x.form/add-error",-1227197655),district0x.events.interceptors,(function (db,p__35949){
var vec__35950 = p__35949;
var form_key = cljs.core.nth.call(null,vec__35950,(0),null);
var error = cljs.core.nth.call(null,vec__35950,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.conj,error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.form","remove-error","district0x.form/remove-error",286019828),district0x.events.interceptors,(function (db,p__35953){
var vec__35954 = p__35953;
var form_key = cljs.core.nth.call(null,vec__35954,(0),null);
var error = cljs.core.nth.call(null,vec__35954,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_key,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.comp.call(null,cljs.core.set,cljs.core.partial.call(null,cljs.core.remove,cljs.core.PersistentHashSet.fromArray([error], true))));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.contract","state-fn-call","district0x.contract/state-fn-call",-909885171),district0x.events.interceptors,(function (p__35957,p__35958){
var map__35959 = p__35957;
var map__35959__$1 = ((((!((map__35959 == null)))?((((map__35959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35959):map__35959);
var db = cljs.core.get.call(null,map__35959__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35960 = p__35958;
var map__35963 = cljs.core.nth.call(null,vec__35960,(0),null);
var map__35963__$1 = ((((!((map__35963 == null)))?((((map__35963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35963):map__35963);
var opts = map__35963__$1;
var contract_key = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"contract-key","contract-key",-137341548));
var contract_method = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"contract-method","contract-method",-417997741));
var args = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var transaction_opts = cljs.core.get.call(null,map__35963__$1,new cljs.core.Keyword(null,"transaction-opts","transaction-opts",1238271932));
var transaction_opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gas","gas",-139961463),(3800000),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"active-address","active-address",-2071839524).cljs$core$IFn$_invoke$arity$1(db)], null),transaction_opts);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","state-fns","web3-fx.contract/state-fns",-1528611858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contract","state-fns","contract/state-fns",-646674528)], null),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,contract_key),contract_method], null),args,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [transaction_opts__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","info","district0x.log/info",-70522750)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),contract_method], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.form","receipt-loaded","district0x.form/receipt-loaded",-513538591),new cljs.core.Keyword(null,"gas","gas",-139961463).cljs$core$IFn$_invoke$arity$1(transaction_opts__$1),cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"fn-key","fn-key",650633930),contract_method)], null)], null))], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.contract","constant-fn-call","district0x.contract/constant-fn-call",1304397846),district0x.events.interceptors,(function (p__35966,p__35967){
var map__35968 = p__35966;
var map__35968__$1 = ((((!((map__35968 == null)))?((((map__35968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35968):map__35968);
var db = cljs.core.get.call(null,map__35968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35969 = p__35967;
var seq__35970 = cljs.core.seq.call(null,vec__35969);
var first__35971 = cljs.core.first.call(null,seq__35970);
var seq__35970__$1 = cljs.core.next.call(null,seq__35970);
var contract_key = first__35971;
var args = seq__35970__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.contract","constant-fns","web3-fx.contract/constant-fns",995225876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.events.get_instance.call(null,db,contract_key)], null),args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","info","district0x.log/info",-70522750)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796)], null)], null))], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","clear-localstorage","district0x/clear-localstorage",-534838953),district0x.events.interceptors,(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"localstorage","localstorage",688644372),null], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.log","print-db","district0x.log/print-db",1073675235),district0x.events.interceptors,(function (p__35973){
var map__35974 = p__35973;
var map__35974__$1 = ((((!((map__35974 == null)))?((((map__35974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35974):map__35974);
var db = cljs.core.get.call(null,map__35974__$1,new cljs.core.Keyword(null,"db","db",993250759));
print.foo.tap.call(null,"DB:: ",db);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),district0x.events.interceptors,(function (p__35976,errors){
var map__35977 = p__35976;
var map__35977__$1 = ((((!((map__35977 == null)))?((((map__35977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35977):map__35977);
var db = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.apply.call(null,re_frame.core.console,new cljs.core.Keyword(null,"error","error",-978969032),errors);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("ga","event","ga/event",301434432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error",cljs.core.first.call(null,errors),[cljs.core.str(cljs.core.rest.call(null,errors))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.log","info","district0x.log/info",-70522750),district0x.events.interceptors,(function (db,result){
return cljs.core.apply.call(null,re_frame.core.console,new cljs.core.Keyword(null,"log","log",-1595516004),district0x.big_number.__GT_numbers.call(null,(cljs.core.truth_((function (){var and__11688__auto__ = !(typeof result === 'string');
if(and__11688__auto__){
return cljs.core.some.call(null,cljs.core.sequential_QMARK_,result);
} else {
return and__11688__auto__;
}
})())?cljs.core.map.call(null,district0x.big_number.__GT_numbers,result):result)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.snackbar","close","district0x.snackbar/close",2028418795),district0x.events.interceptors,(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snackbar","snackbar",1792678973),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),district0x.events.interceptors,(function (p__35979,p__35980){
var map__35981 = p__35979;
var map__35981__$1 = ((((!((map__35981 == null)))?((((map__35981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35981):map__35981);
var db = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35982 = p__35980;
var message = cljs.core.nth.call(null,vec__35982,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"snackbar","snackbar",1792678973),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"on-action-touch-tap","on-action-touch-tap",-1959031924),null], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.snackbar","show-transaction-error","district0x.snackbar/show-transaction-error",-8020285),district0x.events.interceptors,(function (p__35986){
var map__35987 = p__35986;
var map__35987__$1 = ((((!((map__35987 == null)))?((((map__35987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35987):map__35987);
var db = cljs.core.get.call(null,map__35987__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Sorry, your transaction hasn't been processed"], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.snackbar","show-message-redirect-action","district0x.snackbar/show-message-redirect-action",-993612343),district0x.events.interceptors,(function (p__35989,p__35990){
var map__35991 = p__35989;
var map__35991__$1 = ((((!((map__35991 == null)))?((((map__35991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35991):map__35991);
var db = cljs.core.get.call(null,map__35991__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35992 = p__35990;
var message = cljs.core.nth.call(null,vec__35992,(0),null);
var route = cljs.core.nth.call(null,vec__35992,(1),null);
var route_params = cljs.core.nth.call(null,vec__35992,(2),null);
var routes = cljs.core.nth.call(null,vec__35992,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"snackbar","snackbar",1792678973),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"action","action",-811238024),"SHOW ME",new cljs.core.Keyword(null,"on-action-touch-tap","on-action-touch-tap",-1959031924),((function (map__35991,map__35991__$1,db,vec__35992,message,route,route_params,routes){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.location","set-hash","district0x.location/set-hash",-2026657543),route,route_params,routes], null));
});})(map__35991,map__35991__$1,db,vec__35992,message,route,route_params,routes))
], null))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.dialog","close","district0x.dialog/close",1057587502),district0x.events.interceptors,(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","blockchain-connection-error","district0x/blockchain-connection-error",-1634857484),district0x.events.interceptors,(function (p__35996,errors){
var map__35997 = p__35996;
var map__35997__$1 = ((((!((map__35997 == null)))?((((map__35997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35997):map__35997);
var db = cljs.core.get.call(null,map__35997__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.apply.call(null,re_frame.core.console,new cljs.core.Keyword(null,"error","error",-978969032),"Blockchain Connection Error:",errors);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"blockchain-connection-error?","blockchain-connection-error?",1486161768),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.snackbar","show-message","district0x.snackbar/show-message",782868470),"Sorry, we have trouble connecting into the Ethereum blockchain"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x","unlock-account","district0x/unlock-account",2011754083),district0x.events.interceptors,(function (p__35999,p__36000){
var map__36001 = p__35999;
var map__36001__$1 = ((((!((map__36001 == null)))?((((map__36001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36001):map__36001);
var db = cljs.core.get.call(null,map__36001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36002 = p__36000;
var address = cljs.core.nth.call(null,vec__36002,(0),null);
var password = cljs.core.nth.call(null,vec__36002,(1),null);
var seconds = cljs.core.nth.call(null,vec__36002,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3-fx.blockchain","fns","web3-fx.blockchain/fns",261459812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_web3.personal.unlock_account,address,password,(function (){var or__11700__auto__ = seconds;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (999999);
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","info","district0x.log/info",-70522750)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.log","error","district0x.log/error",-1238884796),new cljs.core.Keyword("blockchain","unlock-account","blockchain/unlock-account",18233953)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.location","set-query","district0x.location/set-query",1996601927),district0x.events.interceptors,(function (_,args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("location","set-query","location/set-query",1572921567),args], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.location","set-hash","district0x.location/set-hash",-2026657543),district0x.events.interceptors,(function (p__36006,args){
var map__36007 = p__36006;
var map__36007__$1 = ((((!((map__36007 == null)))?((((map__36007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36007):map__36007);
var db = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("location","set-hash","location/set-hash",736658849),args], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.window","resized","district0x.window/resized",-616460230),district0x.events.interceptors,(function (p__36009,p__36010){
var map__36011 = p__36009;
var map__36011__$1 = ((((!((map__36011 == null)))?((((map__36011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36011):map__36011);
var db = cljs.core.get.call(null,map__36011__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36012 = p__36010;
var width = cljs.core.nth.call(null,vec__36012,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"window-width-size","window-width-size",-1780535462),district0x.utils.get_window_width_size.call(null,width))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district0x.window","scroll-to-top","district0x.window/scroll-to-top",299717299),district0x.events.interceptors,(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("window","scroll-to-top","window/scroll-to-top",1894640571),true], null);
}));

//# sourceMappingURL=events.js.map