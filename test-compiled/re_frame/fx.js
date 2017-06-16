// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__24509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24510 = null;
var count__24511 = (0);
var i__24512 = (0);
while(true){
if((i__24512 < count__24511)){
var vec__24513 = cljs.core._nth.call(null,chunk__24510,i__24512);
var effect_k = cljs.core.nth.call(null,vec__24513,(0),null);
var value = cljs.core.nth.call(null,vec__24513,(1),null);
var temp__4655__auto___24519 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___24519)){
var effect_fn_24520 = temp__4655__auto___24519;
effect_fn_24520.call(null,value);
} else {
}

var G__24521 = seq__24509;
var G__24522 = chunk__24510;
var G__24523 = count__24511;
var G__24524 = (i__24512 + (1));
seq__24509 = G__24521;
chunk__24510 = G__24522;
count__24511 = G__24523;
i__24512 = G__24524;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24509);
if(temp__4657__auto__){
var seq__24509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24509__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__24509__$1);
var G__24525 = cljs.core.chunk_rest.call(null,seq__24509__$1);
var G__24526 = c__12511__auto__;
var G__24527 = cljs.core.count.call(null,c__12511__auto__);
var G__24528 = (0);
seq__24509 = G__24525;
chunk__24510 = G__24526;
count__24511 = G__24527;
i__24512 = G__24528;
continue;
} else {
var vec__24516 = cljs.core.first.call(null,seq__24509__$1);
var effect_k = cljs.core.nth.call(null,vec__24516,(0),null);
var value = cljs.core.nth.call(null,vec__24516,(1),null);
var temp__4655__auto___24529 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___24529)){
var effect_fn_24530 = temp__4655__auto___24529;
effect_fn_24530.call(null,value);
} else {
}

var G__24531 = cljs.core.next.call(null,seq__24509__$1);
var G__24532 = null;
var G__24533 = (0);
var G__24534 = (0);
seq__24509 = G__24531;
chunk__24510 = G__24532;
count__24511 = G__24533;
i__24512 = G__24534;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24535 = cljs.core.seq.call(null,value);
var chunk__24536 = null;
var count__24537 = (0);
var i__24538 = (0);
while(true){
if((i__24538 < count__24537)){
var map__24539 = cljs.core._nth.call(null,chunk__24536,i__24538);
var map__24539__$1 = ((((!((map__24539 == null)))?((((map__24539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24539):map__24539);
var effect = map__24539__$1;
var ms = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24539__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24535,chunk__24536,count__24537,i__24538,map__24539,map__24539__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24535,chunk__24536,count__24537,i__24538,map__24539,map__24539__$1,effect,ms,dispatch))
,ms);
}

var G__24543 = seq__24535;
var G__24544 = chunk__24536;
var G__24545 = count__24537;
var G__24546 = (i__24538 + (1));
seq__24535 = G__24543;
chunk__24536 = G__24544;
count__24537 = G__24545;
i__24538 = G__24546;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24535);
if(temp__4657__auto__){
var seq__24535__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24535__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__24535__$1);
var G__24547 = cljs.core.chunk_rest.call(null,seq__24535__$1);
var G__24548 = c__12511__auto__;
var G__24549 = cljs.core.count.call(null,c__12511__auto__);
var G__24550 = (0);
seq__24535 = G__24547;
chunk__24536 = G__24548;
count__24537 = G__24549;
i__24538 = G__24550;
continue;
} else {
var map__24541 = cljs.core.first.call(null,seq__24535__$1);
var map__24541__$1 = ((((!((map__24541 == null)))?((((map__24541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24541):map__24541);
var effect = map__24541__$1;
var ms = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24535,chunk__24536,count__24537,i__24538,map__24541,map__24541__$1,effect,ms,dispatch,seq__24535__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24535,chunk__24536,count__24537,i__24538,map__24541,map__24541__$1,effect,ms,dispatch,seq__24535__$1,temp__4657__auto__))
,ms);
}

var G__24551 = cljs.core.next.call(null,seq__24535__$1);
var G__24552 = null;
var G__24553 = (0);
var G__24554 = (0);
seq__24535 = G__24551;
chunk__24536 = G__24552;
count__24537 = G__24553;
i__24538 = G__24554;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__24555 = cljs.core.seq.call(null,value);
var chunk__24556 = null;
var count__24557 = (0);
var i__24558 = (0);
while(true){
if((i__24558 < count__24557)){
var event = cljs.core._nth.call(null,chunk__24556,i__24558);
re_frame.router.dispatch.call(null,event);

var G__24559 = seq__24555;
var G__24560 = chunk__24556;
var G__24561 = count__24557;
var G__24562 = (i__24558 + (1));
seq__24555 = G__24559;
chunk__24556 = G__24560;
count__24557 = G__24561;
i__24558 = G__24562;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24555);
if(temp__4657__auto__){
var seq__24555__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24555__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__24555__$1);
var G__24563 = cljs.core.chunk_rest.call(null,seq__24555__$1);
var G__24564 = c__12511__auto__;
var G__24565 = cljs.core.count.call(null,c__12511__auto__);
var G__24566 = (0);
seq__24555 = G__24563;
chunk__24556 = G__24564;
count__24557 = G__24565;
i__24558 = G__24566;
continue;
} else {
var event = cljs.core.first.call(null,seq__24555__$1);
re_frame.router.dispatch.call(null,event);

var G__24567 = cljs.core.next.call(null,seq__24555__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__24555 = G__24567;
chunk__24556 = G__24568;
count__24557 = G__24569;
i__24558 = G__24570;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24571 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__24572 = null;
var count__24573 = (0);
var i__24574 = (0);
while(true){
if((i__24574 < count__24573)){
var event = cljs.core._nth.call(null,chunk__24572,i__24574);
clear_event.call(null,event);

var G__24575 = seq__24571;
var G__24576 = chunk__24572;
var G__24577 = count__24573;
var G__24578 = (i__24574 + (1));
seq__24571 = G__24575;
chunk__24572 = G__24576;
count__24573 = G__24577;
i__24574 = G__24578;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24571);
if(temp__4657__auto__){
var seq__24571__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24571__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__24571__$1);
var G__24579 = cljs.core.chunk_rest.call(null,seq__24571__$1);
var G__24580 = c__12511__auto__;
var G__24581 = cljs.core.count.call(null,c__12511__auto__);
var G__24582 = (0);
seq__24571 = G__24579;
chunk__24572 = G__24580;
count__24573 = G__24581;
i__24574 = G__24582;
continue;
} else {
var event = cljs.core.first.call(null,seq__24571__$1);
clear_event.call(null,event);

var G__24583 = cljs.core.next.call(null,seq__24571__$1);
var G__24584 = null;
var G__24585 = (0);
var G__24586 = (0);
seq__24571 = G__24583;
chunk__24572 = G__24584;
count__24573 = G__24585;
i__24574 = G__24586;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map