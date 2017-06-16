// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__24365_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__24365_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___24366 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___24366)){
var not_i_24367 = temp__4657__auto___24366;
if(cljs.core.fn_QMARK_.call(null,not_i_24367)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_24367);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_24367);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_24382 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24383 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24300__auto___24396 = re_frame.interop.now.call(null);
var duration__24301__auto___24397 = (end__24300__auto___24396 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__24384_24398 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__24385_24399 = null;
var count__24386_24400 = (0);
var i__24387_24401 = (0);
while(true){
if((i__24387_24401 < count__24386_24400)){
var vec__24388_24402 = cljs.core._nth.call(null,chunk__24385_24399,i__24387_24401);
var k__24302__auto___24403 = cljs.core.nth.call(null,vec__24388_24402,(0),null);
var cb__24303__auto___24404 = cljs.core.nth.call(null,vec__24388_24402,(1),null);
try{cb__24303__auto___24404.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24301__auto___24397,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24391){if((e24391 instanceof java.lang.Exception)){
var e__24304__auto___24405 = e24391;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24302__auto___24403,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24304__auto___24405);
} else {
throw e24391;

}
}
var G__24406 = seq__24384_24398;
var G__24407 = chunk__24385_24399;
var G__24408 = count__24386_24400;
var G__24409 = (i__24387_24401 + (1));
seq__24384_24398 = G__24406;
chunk__24385_24399 = G__24407;
count__24386_24400 = G__24408;
i__24387_24401 = G__24409;
continue;
} else {
var temp__4657__auto___24410 = cljs.core.seq.call(null,seq__24384_24398);
if(temp__4657__auto___24410){
var seq__24384_24411__$1 = temp__4657__auto___24410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24384_24411__$1)){
var c__12511__auto___24412 = cljs.core.chunk_first.call(null,seq__24384_24411__$1);
var G__24413 = cljs.core.chunk_rest.call(null,seq__24384_24411__$1);
var G__24414 = c__12511__auto___24412;
var G__24415 = cljs.core.count.call(null,c__12511__auto___24412);
var G__24416 = (0);
seq__24384_24398 = G__24413;
chunk__24385_24399 = G__24414;
count__24386_24400 = G__24415;
i__24387_24401 = G__24416;
continue;
} else {
var vec__24392_24417 = cljs.core.first.call(null,seq__24384_24411__$1);
var k__24302__auto___24418 = cljs.core.nth.call(null,vec__24392_24417,(0),null);
var cb__24303__auto___24419 = cljs.core.nth.call(null,vec__24392_24417,(1),null);
try{cb__24303__auto___24419.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24301__auto___24397,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e24395){if((e24395 instanceof java.lang.Exception)){
var e__24304__auto___24420 = e24395;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__24302__auto___24418,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__24304__auto___24420);
} else {
throw e24395;

}
}
var G__24421 = cljs.core.next.call(null,seq__24384_24411__$1);
var G__24422 = null;
var G__24423 = (0);
var G__24424 = (0);
seq__24384_24398 = G__24421;
chunk__24385_24399 = G__24422;
count__24386_24400 = G__24423;
i__24387_24401 = G__24424;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24383;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_24382;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map