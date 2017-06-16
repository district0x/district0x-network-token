// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17063 = arguments.length;
var i__12776__auto___17064 = (0);
while(true){
if((i__12776__auto___17064 < len__12775__auto___17063)){
args__12782__auto__.push((arguments[i__12776__auto___17064]));

var G__17065 = (i__12776__auto___17064 + (1));
i__12776__auto___17064 = G__17065;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((4) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12783__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__17057){
var map__17058 = p__17057;
var map__17058__$1 = ((((!((map__17058 == null)))?((((map__17058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17058):map__17058);
var separator = cljs.core.get.call(null,map__17058__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__17060 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__17061 = cljs.core.seq.call(null,vec__17060);
var first__17062 = cljs.core.first.call(null,seq__17061);
var seq__17061__$1 = cljs.core.next.call(null,seq__17061);
var first = first__17062;
var rest = seq__17061__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq17052){
var G__17053 = cljs.core.first.call(null,seq17052);
var seq17052__$1 = cljs.core.next.call(null,seq17052);
var G__17054 = cljs.core.first.call(null,seq17052__$1);
var seq17052__$2 = cljs.core.next.call(null,seq17052__$1);
var G__17055 = cljs.core.first.call(null,seq17052__$2);
var seq17052__$3 = cljs.core.next.call(null,seq17052__$2);
var G__17056 = cljs.core.first.call(null,seq17052__$3);
var seq17052__$4 = cljs.core.next.call(null,seq17052__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__17053,G__17054,G__17055,G__17056,seq17052__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__11700__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});
