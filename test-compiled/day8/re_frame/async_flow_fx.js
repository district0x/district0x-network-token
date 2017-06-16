// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('day8.re_frame.async_flow_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.set');
goog.require('day8.re_frame.forward_events_fx');
day8.re_frame.async_flow_fx.seen_all_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_all_of_QMARK_(required_events,seen_events){
return cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,required_events,seen_events));
});
day8.re_frame.async_flow_fx.seen_any_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_any_of_QMARK_(required_events,seen_events){
return cljs.core.some_QMARK_.call(null,cljs.core.seq.call(null,clojure.set.intersection.call(null,seen_events,required_events)));
});
/**
 * Given the accumulated set of seen events and the set of rules already started,
 *   return the list of rules which should now be started
 */
day8.re_frame.async_flow_fx.startable_rules = (function day8$re_frame$async_flow_fx$startable_rules(rules,now_seen_events,rules_fired){
return cljs.core.filterv.call(null,(function (task){
return new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(task).call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(task),now_seen_events);
}),cljs.core.remove.call(null,cljs.core.comp.call(null,rules_fired,new cljs.core.Keyword(null,"id","id",-1388402092)),rules));
});
day8.re_frame.async_flow_fx.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.async_flow_fx.seen_any_of_QMARK_], null);
day8.re_frame.async_flow_fx.when__GT_fn = (function day8$re_frame$async_flow_fx$when__GT_fn(when_kw){
var temp__4655__auto__ = day8.re_frame.async_flow_fx.map_when__GT_fn.call(null,when_kw);
if(cljs.core.truth_(temp__4655__auto__)){
var when_fn = temp__4655__auto__;
return when_fn;
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: got bad value for :when - ",when_kw);
}
});
/**
 * Massage the supplied rules as follows:
 *  - replace `:when` keyword value with a function implementing the predicate
 *  - ensure that only `:dispatch` or `:dispatch-n` is provided
 *  - add a unique :id, if one not already present
 */
day8.re_frame.async_flow_fx.massage_rules = (function day8$re_frame$async_flow_fx$massage_rules(rules){
return cljs.core.map_indexed.call(null,(function (index,p__25090){
var map__25091 = p__25090;
var map__25091__$1 = ((((!((map__25091 == null)))?((((map__25091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25091):map__25091);
var rule = map__25091__$1;
var id = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var events = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var halt_QMARK_ = cljs.core.get.call(null,map__25091__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__11700__auto__ = id;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return index;
}
})(),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__11700__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when","when",-576417306),day8.re_frame.async_flow_fx.when__GT_fn.call(null,when),new cljs.core.Keyword(null,"events","events",1792552201),((cljs.core.coll_QMARK_.call(null,events))?cljs.core.set.call(null,events):cljs.core.PersistentHashSet.fromArray([events],true)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(cljs.core.truth_(dispatch_n)?(cljs.core.truth_(dispatch)?re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: rule can only specify one of :dispatch and :dispatch-n. Got both: ",rule):dispatch_n):(cljs.core.truth_(dispatch)?(function (){var x__12534__auto__ = dispatch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__12534__auto__);
})():cljs.core.List.EMPTY
))], null);
}),rules);
});
/**
 * Given a flow definitiion, returns an event handler which implements this definition
 */
day8.re_frame.async_flow_fx.make_flow_event_handler = (function day8$re_frame$async_flow_fx$make_flow_event_handler(p__25093){
var map__25125 = p__25093;
var map__25125__$1 = ((((!((map__25125 == null)))?((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25125):map__25125);
var id = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var db_path = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var rules = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var first_dispatch = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var _ = ((((db_path == null)) || (cljs.core.vector_QMARK_.call(null,db_path)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("aync-flow: db-path must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? db-path) (vector? db-path))")].join('')))})());
var local_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var set_state = (cljs.core.truth_(db_path)?((function (_,local_store,map__25125,map__25125__$1,id,db_path,rules,first_dispatch){
return (function (db,seen,started){
return cljs.core.assoc_in.call(null,db,db_path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));
});})(_,local_store,map__25125,map__25125__$1,id,db_path,rules,first_dispatch))
:((function (_,local_store,map__25125,map__25125__$1,id,db_path,rules,first_dispatch){
return (function (db,seen,started){
cljs.core.reset_BANG_.call(null,local_store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));

return db;
});})(_,local_store,map__25125,map__25125__$1,id,db_path,rules,first_dispatch))
);
var get_state = (cljs.core.truth_(db_path)?((function (_,local_store,set_state,map__25125,map__25125__$1,id,db_path,rules,first_dispatch){
return (function (db){
return cljs.core.get_in.call(null,db,db_path);
});})(_,local_store,set_state,map__25125,map__25125__$1,id,db_path,rules,first_dispatch))
:((function (_,local_store,set_state,map__25125,map__25125__$1,id,db_path,rules,first_dispatch){
return (function (___$1){
return cljs.core.deref.call(null,local_store);
});})(_,local_store,set_state,map__25125,map__25125__$1,id,db_path,rules,first_dispatch))
);
var rules__$1 = day8.re_frame.async_flow_fx.massage_rules.call(null,rules);
return ((function (_,local_store,set_state,get_state,rules__$1,map__25125,map__25125__$1,id,db_path,rules,first_dispatch){
return (function day8$re_frame$async_flow_fx$make_flow_event_handler_$_async_flow_event_hander(p__25127,event_v){
var map__25142 = p__25127;
var map__25142__$1 = ((((!((map__25142 == null)))?((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);
var db = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"db","db",993250759));
var pred__25144 = cljs.core._EQ_;
var expr__25145 = cljs.core.second.call(null,event_v);
if(cljs.core.truth_(pred__25144.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512),expr__25145))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),set_state.call(null,db,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),first_dispatch,new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,new cljs.core.Keyword(null,"events","events",1792552201),rules__$1)),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null);
} else {
if(cljs.core.truth_(pred__25144.call(null,new cljs.core.Keyword(null,"halt-flow","halt-flow",-1879383486),expr__25145))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),id], null),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),id], null);
} else {
var vec__25147 = event_v;
var ___$1 = cljs.core.nth.call(null,vec__25147,(0),null);
var vec__25150 = cljs.core.nth.call(null,vec__25147,(1),null);
var seq__25151 = cljs.core.seq.call(null,vec__25150);
var first__25152 = cljs.core.first.call(null,seq__25151);
var seq__25151__$1 = cljs.core.next.call(null,seq__25151);
var forwarded_event_id = first__25152;
var args = seq__25151__$1;
var map__25153 = get_state.call(null,db);
var map__25153__$1 = ((((!((map__25153 == null)))?((((map__25153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25153):map__25153);
var seen_events = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
var rules_fired = cljs.core.get.call(null,map__25153__$1,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140));
var new_seen_events = cljs.core.conj.call(null,seen_events,forwarded_event_id);
var ready_rules = day8.re_frame.async_flow_fx.startable_rules.call(null,rules__$1,new_seen_events,rules_fired);
var add_halt_QMARK_ = cljs.core.some.call(null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),ready_rules);
var ready_rules_ids = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules));
var new_rules_fired = clojure.set.union.call(null,rules_fired,ready_rules_ids);
var new_dispatches = (function (){var G__25155 = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),ready_rules);
var G__25155__$1 = (cljs.core.truth_(add_halt_QMARK_)?cljs.core.vec.call(null,G__25155):G__25155);
if(cljs.core.truth_(add_halt_QMARK_)){
return cljs.core.conj.call(null,G__25155__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"halt-flow","halt-flow",-1879383486)], null));
} else {
return G__25155__$1;
}
})();
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),set_state.call(null,db,new_seen_events,new_rules_fired)], null),((cljs.core.seq.call(null,new_dispatches))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new_dispatches], null):null));
}
}
});
;})(_,local_store,set_state,get_state,rules__$1,map__25125,map__25125__$1,id,db_path,rules,first_dispatch))
});
/**
 * Ensure `flow` has an id.
 * 	Return a vector of [id flow]
 */
day8.re_frame.async_flow_fx.ensure_has_id = (function day8$re_frame$async_flow_fx$ensure_has_id(flow){
var temp__4655__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow);
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,flow], null);
} else {
var new_id = cljs.core.keyword.call(null,[cljs.core.str("async-flow/"),cljs.core.str(cljs.core.gensym.call(null,"id-"))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_id,cljs.core.assoc.call(null,flow,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)], null);
}
});
/**
 * Action the given flow effect
 */
day8.re_frame.async_flow_fx.flow__GT_handler = (function day8$re_frame$async_flow_fx$flow__GT_handler(flow){
var vec__25159 = day8.re_frame.async_flow_fx.ensure_has_id.call(null,flow);
var id = cljs.core.nth.call(null,vec__25159,(0),null);
var flow_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__25159,(1),null);
re_frame.core.reg_event_fx.call(null,id,day8.re_frame.async_flow_fx.make_flow_event_handler.call(null,flow_SINGLEQUOTE_));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"setup","setup",1987730512)], null));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),day8.re_frame.async_flow_fx.flow__GT_handler);

//# sourceMappingURL=async_flow_fx.js.map