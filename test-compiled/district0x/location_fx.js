// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.location_fx');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('district0x.utils');
goog.require('medley.core');
goog.require('goog.events');
goog.require('cemerick.url');
goog.require('cljs.spec');
goog.require('re_frame.core');
district0x.location_fx.path_for = (function district0x$location_fx$path_for(var_args){
var args__12782__auto__ = [];
var len__12775__auto___45921 = arguments.length;
var i__12776__auto___45922 = (0);
while(true){
if((i__12776__auto___45922 < len__12775__auto___45921)){
args__12782__auto__.push((arguments[i__12776__auto___45922]));

var G__45923 = (i__12776__auto___45922 + (1));
i__12776__auto___45922 = G__45923;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.location_fx.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.location_fx.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (routes,args){
return [cljs.core.str("#"),cljs.core.str(cljs.core.apply.call(null,bidi.bidi.path_for,routes,args))].join('');
});

district0x.location_fx.path_for.cljs$lang$maxFixedArity = (1);

district0x.location_fx.path_for.cljs$lang$applyTo = (function (seq45919){
var G__45920 = cljs.core.first.call(null,seq45919);
var seq45919__$1 = cljs.core.next.call(null,seq45919);
return district0x.location_fx.path_for.cljs$core$IFn$_invoke$arity$variadic(G__45920,seq45919__$1);
});

district0x.location_fx.set_location_hash_BANG_ = (function district0x$location_fx$set_location_hash_BANG_(s){
return location.hash = s;
});
district0x.location_fx.nav_to_BANG_ = (function district0x$location_fx$nav_to_BANG_(route,route_params,routes){
return district0x.location_fx.set_location_hash_BANG_.call(null,medley.core.mapply.call(null,district0x.location_fx.path_for,routes,route,route_params));
});
district0x.location_fx.set_location_query_BANG_ = (function district0x$location_fx$set_location_query_BANG_(query_params){
return district0x.location_fx.set_location_hash_BANG_.call(null,[cljs.core.str("#"),cljs.core.str(district0x.utils.current_location_hash.call(null)),cljs.core.str((function (){var temp__4657__auto__ = cemerick.url.map__GT_query.call(null,query_params);
if(cljs.core.truth_(temp__4657__auto__)){
var query = temp__4657__auto__;
return [cljs.core.str("?"),cljs.core.str(query)].join('');
} else {
return null;
}
})())].join(''));
});
district0x.location_fx.add_to_location_query_BANG_ = (function district0x$location_fx$add_to_location_query_BANG_(query_params){
var current_query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(district0x.utils.current_url.call(null));
var new_query = cljs.core.merge.call(null,current_query,medley.core.remove_keys.call(null,cljs.core.nil_QMARK_,query_params));
return district0x.location_fx.set_location_query_BANG_.call(null,new_query);
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("location","set-hash","location/set-hash",736658849),(function (p__45924){
var vec__45925 = p__45924;
var route = cljs.core.nth.call(null,vec__45925,(0),null);
var route_params = cljs.core.nth.call(null,vec__45925,(1),null);
var routes = cljs.core.nth.call(null,vec__45925,(2),null);
return district0x.location_fx.nav_to_BANG_.call(null,route,route_params,routes);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("location","add-to-query","location/add-to-query",-526275963),(function (p__45928){
var vec__45929 = p__45928;
var query_params = cljs.core.nth.call(null,vec__45929,(0),null);
return district0x.location_fx.add_to_location_query_BANG_.call(null,query_params);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("location","set-query","location/set-query",1572921567),(function (p__45932){
var vec__45933 = p__45932;
var query_params = cljs.core.nth.call(null,vec__45933,(0),null);
return district0x.location_fx.set_location_query_BANG_.call(null,query_params);
}));

//# sourceMappingURL=location_fx.js.map