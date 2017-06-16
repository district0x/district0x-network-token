// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.db');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.db.get_db = (function cljs_web3$db$get_db(web3){
return (web3["db"]);
});
cljs_web3.db.put_string_BANG_ = (function cljs_web3$db$put_string_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21169 = arguments.length;
var i__12776__auto___21170 = (0);
while(true){
if((i__12776__auto___21170 < len__12775__auto___21169)){
args__12782__auto__.push((arguments[i__12776__auto___21170]));

var G__21171 = (i__12776__auto___21170 + (1));
i__12776__auto___21170 = G__21171;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21165){
var vec__21166 = p__21165;
var db = cljs.core.nth.call(null,vec__21166,(0),null);
var key = cljs.core.nth.call(null,vec__21166,(1),null);
var value = cljs.core.nth.call(null,vec__21166,(2),null);
var args = vec__21166;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"putString",args);
});

cljs_web3.db.put_string_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.db.put_string_BANG_.cljs$lang$applyTo = (function (seq21163){
var G__21164 = cljs.core.first.call(null,seq21163);
var seq21163__$1 = cljs.core.next.call(null,seq21163);
return cljs_web3.db.put_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21164,seq21163__$1);
});

cljs_web3.db.get_string = (function cljs_web3$db$get_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21178 = arguments.length;
var i__12776__auto___21179 = (0);
while(true){
if((i__12776__auto___21179 < len__12775__auto___21178)){
args__12782__auto__.push((arguments[i__12776__auto___21179]));

var G__21180 = (i__12776__auto___21179 + (1));
i__12776__auto___21179 = G__21180;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21174){
var vec__21175 = p__21174;
var db = cljs.core.nth.call(null,vec__21175,(0),null);
var key = cljs.core.nth.call(null,vec__21175,(1),null);
var args = vec__21175;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"getString",args);
});

cljs_web3.db.get_string.cljs$lang$maxFixedArity = (1);

cljs_web3.db.get_string.cljs$lang$applyTo = (function (seq21172){
var G__21173 = cljs.core.first.call(null,seq21172);
var seq21172__$1 = cljs.core.next.call(null,seq21172);
return cljs_web3.db.get_string.cljs$core$IFn$_invoke$arity$variadic(G__21173,seq21172__$1);
});

cljs_web3.db.put_hex_BANG_ = (function cljs_web3$db$put_hex_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21187 = arguments.length;
var i__12776__auto___21188 = (0);
while(true){
if((i__12776__auto___21188 < len__12775__auto___21187)){
args__12782__auto__.push((arguments[i__12776__auto___21188]));

var G__21189 = (i__12776__auto___21188 + (1));
i__12776__auto___21188 = G__21189;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21183){
var vec__21184 = p__21183;
var db = cljs.core.nth.call(null,vec__21184,(0),null);
var key = cljs.core.nth.call(null,vec__21184,(1),null);
var value = cljs.core.nth.call(null,vec__21184,(2),null);
var args = vec__21184;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"putHex",args);
});

cljs_web3.db.put_hex_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.db.put_hex_BANG_.cljs$lang$applyTo = (function (seq21181){
var G__21182 = cljs.core.first.call(null,seq21181);
var seq21181__$1 = cljs.core.next.call(null,seq21181);
return cljs_web3.db.put_hex_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21182,seq21181__$1);
});

cljs_web3.db.get_hex = (function cljs_web3$db$get_hex(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21196 = arguments.length;
var i__12776__auto___21197 = (0);
while(true){
if((i__12776__auto___21197 < len__12775__auto___21196)){
args__12782__auto__.push((arguments[i__12776__auto___21197]));

var G__21198 = (i__12776__auto___21197 + (1));
i__12776__auto___21197 = G__21198;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21192){
var vec__21193 = p__21192;
var db = cljs.core.nth.call(null,vec__21193,(0),null);
var key = cljs.core.nth.call(null,vec__21193,(1),null);
var args = vec__21193;
return cljs_web3.utils.js_apply.call(null,cljs_web3.db.get_db.call(null,web3),"getHex",args);
});

cljs_web3.db.get_hex.cljs$lang$maxFixedArity = (1);

cljs_web3.db.get_hex.cljs$lang$applyTo = (function (seq21190){
var G__21191 = cljs.core.first.call(null,seq21190);
var seq21190__$1 = cljs.core.next.call(null,seq21190);
return cljs_web3.db.get_hex.cljs$core$IFn$_invoke$arity$variadic(G__21191,seq21190__$1);
});


//# sourceMappingURL=db.js.map