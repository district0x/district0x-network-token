// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.interval_fx');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('district0x.utils');
goog.require('medley.core');
goog.require('re_frame.core');
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.interval-fx","dispatch","district0x.interval-fx/dispatch",-1337922825),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","keyword","cljs.core/keyword",-337316415,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.interval-fx","ms","district0x.interval-fx/ms",1566615133),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.interval-fx","dispatch-interval-args","district0x.interval-fx/dispatch-interval-args",1155115942),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.interval-fx","dispatch","district0x.interval-fx/dispatch",-1337922825),new cljs.core.Keyword("district0x.interval-fx","db-path","district0x.interval-fx/db-path",1574642351),new cljs.core.Keyword("district0x.interval-fx","ms","district0x.interval-fx/ms",1566615133)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.interval-fx","dispatch","district0x.interval-fx/dispatch",-1337922825),new cljs.core.Keyword("district0x.interval-fx","db-path","district0x.interval-fx/db-path",1574642351),new cljs.core.Keyword("district0x.interval-fx","ms","district0x.interval-fx/ms",1566615133)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__15160__15161__auto__){
return cljs.core.contains_QMARK_.call(null,p1__15160__15161__auto__,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
}),(function (p1__15160__15161__auto__){
return cljs.core.contains_QMARK_.call(null,p1__15160__15161__auto__,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
}),(function (p1__15160__15161__auto__){
return cljs.core.contains_QMARK_.call(null,p1__15160__15161__auto__,new cljs.core.Keyword(null,"ms","ms",-1152709733));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.interval-fx","dispatch","district0x.interval-fx/dispatch",-1337922825),new cljs.core.Keyword("district0x.interval-fx","db-path","district0x.interval-fx/db-path",1574642351),new cljs.core.Keyword("district0x.interval-fx","ms","district0x.interval-fx/ms",1566615133)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"db-path","db-path",-68094099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ms","ms",-1152709733)))], null),null])));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.interval-fx","set-interval","district0x.interval-fx/set-interval",247443729),(function (db,p__35552){
var vec__35553 = p__35552;
var _ = cljs.core.nth.call(null,vec__35553,(0),null);
var db_path = cljs.core.nth.call(null,vec__35553,(1),null);
var interval_id = cljs.core.nth.call(null,vec__35553,(2),null);
return cljs.core.assoc_in.call(null,db,db_path,interval_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district0x.interval-fx","cancel-interval","district0x.interval-fx/cancel-interval",-114310263),(function (db,p__35556){
var vec__35557 = p__35556;
var _ = cljs.core.nth.call(null,vec__35557,(0),null);
var db_path = cljs.core.nth.call(null,vec__35557,(1),null);
var interval_id = cljs.core.nth.call(null,vec__35557,(2),null);
return medley.core.dissoc_in.call(null,db,cljs.core.conj.call(null,district0x.utils.ensure_vec.call(null,db_path),interval_id));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),(function (p__35560){
var map__35561 = p__35560;
var map__35561__$1 = ((((!((map__35561 == null)))?((((map__35561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35561):map__35561);
var config = map__35561__$1;
var dispatch = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var db_path = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var ms = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.spec._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.spec._STAR_runtime_asserts_STAR_)){
cljs.spec.assert_STAR_.call(null,new cljs.core.Keyword("district0x.interval-fx","dispatch-interval-args","district0x.interval-fx/dispatch-interval-args",1155115942),config);
} else {
}
} else {
}

var interval_id = setInterval(((function (map__35561,map__35561__$1,config,dispatch,db_path,ms){
return (function (){
return re_frame.core.dispatch.call(null,dispatch);
});})(map__35561,map__35561__$1,config,dispatch,db_path,ms))
,ms);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.interval-fx","set-interval","district0x.interval-fx/set-interval",247443729),db_path,interval_id], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),(function (p__35563){
var map__35564 = p__35563;
var map__35564__$1 = ((((!((map__35564 == null)))?((((map__35564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35564):map__35564);
var interval_id = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"interval-id","interval-id",79285360));
var db_path = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
clearInterval(interval_id);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.interval-fx","cancel-interval","district0x.interval-fx/cancel-interval",-114310263),db_path,interval_id], null));
}));

//# sourceMappingURL=interval_fx.js.map