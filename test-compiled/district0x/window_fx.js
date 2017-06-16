// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.window_fx');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('goog.events');
goog.require('re_frame.core');
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.window-fx","dispatch","district0x.window-fx/dispatch",-707593766),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","keyword","cljs.core/keyword",-337316415,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.window-fx","resize-interval","district0x.window-fx/resize-interval",781184613),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.window-fx","on-resize-args","district0x.window-fx/on-resize-args",87005490),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.window-fx","dispatch","district0x.window-fx/dispatch",-707593766),new cljs.core.Keyword("district0x.window-fx","resize-interval","district0x.window-fx/resize-interval",781184613)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.window-fx","dispatch","district0x.window-fx/dispatch",-707593766),new cljs.core.Keyword("district0x.window-fx","resize-interval","district0x.window-fx/resize-interval",781184613)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__15160__15161__auto__){
return cljs.core.contains_QMARK_.call(null,p1__15160__15161__auto__,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
}),(function (p1__15160__15161__auto__){
return cljs.core.contains_QMARK_.call(null,p1__15160__15161__auto__,new cljs.core.Keyword(null,"resize-interval","resize-interval",-1359384400));
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.window-fx","dispatch","district0x.window-fx/dispatch",-707593766),new cljs.core.Keyword("district0x.window-fx","resize-interval","district0x.window-fx/resize-interval",781184613)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"resize-interval","resize-interval",-1359384400)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resize-interval","resize-interval",-1359384400)))], null),null])));
district0x.window_fx.on_resize = (function district0x$window_fx$on_resize(p__35586,timer){
var map__35589 = p__35586;
var map__35589__$1 = ((((!((map__35589 == null)))?((((map__35589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35589):map__35589);
var dispatch = cljs.core.get.call(null,map__35589__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var resize_interval = cljs.core.get.call(null,map__35589__$1,new cljs.core.Keyword(null,"resize-interval","resize-interval",-1359384400));
clearTimeout(cljs.core.deref.call(null,timer));

return cljs.core.reset_BANG_.call(null,timer,setTimeout(((function (map__35589,map__35589__$1,dispatch,resize_interval){
return (function (){
return re_frame.core.dispatch.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null))));
});})(map__35589,map__35589__$1,dispatch,resize_interval))
,resize_interval));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","on-resize","window/on-resize",2002922991),(function (config){
if(cljs.core.truth_(cljs.spec._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.spec._STAR_runtime_asserts_STAR_)){
cljs.spec.assert_STAR_.call(null,new cljs.core.Keyword("district0x.window-fx","on-resize-args","district0x.window-fx/on-resize-args",87005490),config);
} else {
}
} else {
}

var timer = cljs.core.atom.call(null,null);
return goog.events.listen(window,goog.events.EventType.RESIZE,cljs.core.partial.call(null,district0x.window_fx.on_resize,config,timer));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","scroll-to-top","window/scroll-to-top",1894640571),(function (_){
return window.scrollTo((0),(0));
}));

//# sourceMappingURL=window_fx.js.map