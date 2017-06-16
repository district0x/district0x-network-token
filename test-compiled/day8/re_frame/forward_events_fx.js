// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('day8.re_frame.forward_events_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),(function (){var id__GT_listen_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var process_one_entry = ((function (id__GT_listen_fn){
return (function (p__25082){
var map__25083 = p__25082;
var map__25083__$1 = ((((!((map__25083 == null)))?((((map__25083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25083):map__25083);
var m = map__25083__$1;
var unregister = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"unregister","unregister",2105339971));
var register = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"register","register",1968522516));
var events = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch_to = cljs.core.get.call(null,map__25083__$1,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401));
var _ = ((cljs.core.map_QMARK_.call(null,m))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: effects handler for :forward-events expected a map or a list of maps. Got: "),cljs.core.str(m)].join('')),cljs.core.str("\n"),cljs.core.str("(map? m)")].join('')))})());
var ___$1 = (((cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),null], null), null),cljs.core.set.call(null,cljs.core.keys.call(null,m)))) || (cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"events","events",1792552201),null,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),null,new cljs.core.Keyword(null,"register","register",1968522516),null], null), null),cljs.core.set.call(null,cljs.core.keys.call(null,m)))))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("re-frame: effects handler for :forward-events given wrong map keys"),cljs.core.str(cljs.core.set.call(null,cljs.core.keys.call(null,m)))].join('')),cljs.core.str("\n"),cljs.core.str("(or (= #{:unregister} (-> m keys set)) (= #{:events :dispatch-to :register} (-> m keys set)))")].join('')))})());
if(cljs.core.truth_(unregister)){
var f = cljs.core.deref.call(null,id__GT_listen_fn).call(null,unregister);
var ___$2 = ((cljs.core.some_QMARK_.call(null,f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(":forward-events  asked to unregister an unknown id: "),cljs.core.str(unregister)].join('')),cljs.core.str("\n"),cljs.core.str("(some? f)")].join('')))})());
re_frame.core.remove_post_event_callback.call(null,f);

return cljs.core.swap_BANG_.call(null,id__GT_listen_fn,cljs.core.dissoc,unregister);
} else {
var post_event_callback_fn = ((function (_,___$1,map__25083,map__25083__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn){
return (function (event_v,___$2){
if(cljs.core.truth_(events.call(null,cljs.core.first.call(null,event_v)))){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,dispatch_to,event_v));
} else {
return null;
}
});})(_,___$1,map__25083,map__25083__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn))
;
re_frame.core.add_post_event_callback.call(null,post_event_callback_fn);

return cljs.core.swap_BANG_.call(null,id__GT_listen_fn,cljs.core.assoc,register,post_event_callback_fn);
}
});})(id__GT_listen_fn))
;
return ((function (id__GT_listen_fn,process_one_entry){
return (function (val){
if(cljs.core.map_QMARK_.call(null,val)){
return process_one_entry.call(null,val);
} else {
if(cljs.core.sequential_QMARK_.call(null,val)){
return cljs.core.doall.call(null,cljs.core.map.call(null,process_one_entry,val));
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),":forward-events expected a map or a list of maps, but got: ",val);

}
}
});
;})(id__GT_listen_fn,process_one_entry))
})());

//# sourceMappingURL=forward_events_fx.js.map