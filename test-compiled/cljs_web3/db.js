// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.db');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.db.get_db = (function cljs_web3$db$get_db(web3){
return (web3["db"]);
});
cljs_web3.db.put_string_BANG_ = (function cljs_web3$db$put_string_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24586 = arguments.length;
var i__12776__auto___24587 = (0);
while(true){
if((i__12776__auto___24587 < len__12775__auto___24586)){
args__12782__auto__.push((arguments[i__12776__auto___24587]));

var G__24588 = (i__12776__auto___24587 + (1));
i__12776__auto___24587 = G__24588;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24582){
var vec__24583 = p__24582;
var db = cljs.core.nth.call(null,vec__24583,(0),null);
var key = cljs.core.nth.call(null,vec__24583,(1),null);
var value = cljs.core.nth.call(null,vec__24583,(2),null);
var args = vec__24583;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"putString",args);
});

cljs_web3.db.put_string_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.db.put_string_BANG_.cljs$lang$applyTo = (function (seq24580){
var G__24581 = cljs.core.first.call(null,seq24580);
var seq24580__$1 = cljs.core.next.call(null,seq24580);
return cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24581,seq24580__$1);
});

cljs_web3.db.get_string = (function cljs_web3$db$get_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24595 = arguments.length;
var i__12776__auto___24596 = (0);
while(true){
if((i__12776__auto___24596 < len__12775__auto___24595)){
args__12782__auto__.push((arguments[i__12776__auto___24596]));

var G__24597 = (i__12776__auto___24596 + (1));
i__12776__auto___24596 = G__24597;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24591){
var vec__24592 = p__24591;
var db = cljs.core.nth.call(null,vec__24592,(0),null);
var key = cljs.core.nth.call(null,vec__24592,(1),null);
var args = vec__24592;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"getString",args);
});

cljs_web3.db.get_string.cljs$lang$maxFixedArity = (1);

cljs_web3.db.get_string.cljs$lang$applyTo = (function (seq24589){
var G__24590 = cljs.core.first.call(null,seq24589);
var seq24589__$1 = cljs.core.next.call(null,seq24589);
return cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic(G__24590,seq24589__$1);
});

cljs_web3.db.put_hex_BANG_ = (function cljs_web3$db$put_hex_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24604 = arguments.length;
var i__12776__auto___24605 = (0);
while(true){
if((i__12776__auto___24605 < len__12775__auto___24604)){
args__12782__auto__.push((arguments[i__12776__auto___24605]));

var G__24606 = (i__12776__auto___24605 + (1));
i__12776__auto___24605 = G__24606;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24600){
var vec__24601 = p__24600;
var db = cljs.core.nth.call(null,vec__24601,(0),null);
var key = cljs.core.nth.call(null,vec__24601,(1),null);
var value = cljs.core.nth.call(null,vec__24601,(2),null);
var args = vec__24601;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"putHex",args);
});

cljs_web3.db.put_hex_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.db.put_hex_BANG_.cljs$lang$applyTo = (function (seq24598){
var G__24599 = cljs.core.first.call(null,seq24598);
var seq24598__$1 = cljs.core.next.call(null,seq24598);
return cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24599,seq24598__$1);
});

cljs_web3.db.get_hex = (function cljs_web3$db$get_hex(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24613 = arguments.length;
var i__12776__auto___24614 = (0);
while(true){
if((i__12776__auto___24614 < len__12775__auto___24613)){
args__12782__auto__.push((arguments[i__12776__auto___24614]));

var G__24615 = (i__12776__auto___24614 + (1));
i__12776__auto___24614 = G__24615;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24609){
var vec__24610 = p__24609;
var db = cljs.core.nth.call(null,vec__24610,(0),null);
var key = cljs.core.nth.call(null,vec__24610,(1),null);
var args = vec__24610;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"getHex",args);
});

cljs_web3.db.get_hex.cljs$lang$maxFixedArity = (1);

cljs_web3.db.get_hex.cljs$lang$applyTo = (function (seq24607){
var G__24608 = cljs.core.first.call(null,seq24607);
var seq24607__$1 = cljs.core.next.call(null,seq24607);
return cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic(G__24608,seq24607__$1);
});

