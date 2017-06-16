// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17246 = arguments.length;
var i__12776__auto___17247 = (0);
while(true){
if((i__12776__auto___17247 < len__12775__auto___17246)){
args__12782__auto__.push((arguments[i__12776__auto___17247]));

var G__17248 = (i__12776__auto___17247 + (1));
i__12776__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((4) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12783__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq17241){
var G__17242 = cljs.core.first.call(null,seq17241);
var seq17241__$1 = cljs.core.next.call(null,seq17241);
var G__17243 = cljs.core.first.call(null,seq17241__$1);
var seq17241__$2 = cljs.core.next.call(null,seq17241__$1);
var G__17244 = cljs.core.first.call(null,seq17241__$2);
var seq17241__$3 = cljs.core.next.call(null,seq17241__$2);
var G__17245 = cljs.core.first.call(null,seq17241__$3);
var seq17241__$4 = cljs.core.next.call(null,seq17241__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__17242,G__17243,G__17244,G__17245,seq17241__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17257 = arguments.length;
var i__12776__auto___17258 = (0);
while(true){
if((i__12776__auto___17258 < len__12775__auto___17257)){
args__12782__auto__.push((arguments[i__12776__auto___17258]));

var G__17259 = (i__12776__auto___17258 + (1));
i__12776__auto___17258 = G__17259;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq17249){
var G__17250 = cljs.core.first.call(null,seq17249);
var seq17249__$1 = cljs.core.next.call(null,seq17249);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__17250,seq17249__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17260 = arguments.length;
var i__12776__auto___17261 = (0);
while(true){
if((i__12776__auto___17261 < len__12775__auto___17260)){
args__12782__auto__.push((arguments[i__12776__auto___17261]));

var G__17262 = (i__12776__auto___17261 + (1));
i__12776__auto___17261 = G__17262;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq17251){
var G__17252 = cljs.core.first.call(null,seq17251);
var seq17251__$1 = cljs.core.next.call(null,seq17251);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__17252,seq17251__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17263 = arguments.length;
var i__12776__auto___17264 = (0);
while(true){
if((i__12776__auto___17264 < len__12775__auto___17263)){
args__12782__auto__.push((arguments[i__12776__auto___17264]));

var G__17265 = (i__12776__auto___17264 + (1));
i__12776__auto___17264 = G__17265;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq17253){
var G__17254 = cljs.core.first.call(null,seq17253);
var seq17253__$1 = cljs.core.next.call(null,seq17253);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__17254,seq17253__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17266 = arguments.length;
var i__12776__auto___17267 = (0);
while(true){
if((i__12776__auto___17267 < len__12775__auto___17266)){
args__12782__auto__.push((arguments[i__12776__auto___17267]));

var G__17268 = (i__12776__auto___17267 + (1));
i__12776__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq17255){
var G__17256 = cljs.core.first.call(null,seq17255);
var seq17255__$1 = cljs.core.next.call(null,seq17255);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__17256,seq17255__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17277 = arguments.length;
var i__12776__auto___17278 = (0);
while(true){
if((i__12776__auto___17278 < len__12775__auto___17277)){
args__12782__auto__.push((arguments[i__12776__auto___17278]));

var G__17279 = (i__12776__auto___17278 + (1));
i__12776__auto___17278 = G__17279;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq17269){
var G__17270 = cljs.core.first.call(null,seq17269);
var seq17269__$1 = cljs.core.next.call(null,seq17269);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__17270,seq17269__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17280 = arguments.length;
var i__12776__auto___17281 = (0);
while(true){
if((i__12776__auto___17281 < len__12775__auto___17280)){
args__12782__auto__.push((arguments[i__12776__auto___17281]));

var G__17282 = (i__12776__auto___17281 + (1));
i__12776__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq17271){
var G__17272 = cljs.core.first.call(null,seq17271);
var seq17271__$1 = cljs.core.next.call(null,seq17271);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__17272,seq17271__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17283 = arguments.length;
var i__12776__auto___17284 = (0);
while(true){
if((i__12776__auto___17284 < len__12775__auto___17283)){
args__12782__auto__.push((arguments[i__12776__auto___17284]));

var G__17285 = (i__12776__auto___17284 + (1));
i__12776__auto___17284 = G__17285;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq17273){
var G__17274 = cljs.core.first.call(null,seq17273);
var seq17273__$1 = cljs.core.next.call(null,seq17273);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__17274,seq17273__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17286 = arguments.length;
var i__12776__auto___17287 = (0);
while(true){
if((i__12776__auto___17287 < len__12775__auto___17286)){
args__12782__auto__.push((arguments[i__12776__auto___17287]));

var G__17288 = (i__12776__auto___17287 + (1));
i__12776__auto___17287 = G__17288;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq17275){
var G__17276 = cljs.core.first.call(null,seq17275);
var seq17275__$1 = cljs.core.next.call(null,seq17275);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__17276,seq17275__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17297 = arguments.length;
var i__12776__auto___17298 = (0);
while(true){
if((i__12776__auto___17298 < len__12775__auto___17297)){
args__12782__auto__.push((arguments[i__12776__auto___17298]));

var G__17299 = (i__12776__auto___17298 + (1));
i__12776__auto___17298 = G__17299;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq17289){
var G__17290 = cljs.core.first.call(null,seq17289);
var seq17289__$1 = cljs.core.next.call(null,seq17289);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__17290,seq17289__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17300 = arguments.length;
var i__12776__auto___17301 = (0);
while(true){
if((i__12776__auto___17301 < len__12775__auto___17300)){
args__12782__auto__.push((arguments[i__12776__auto___17301]));

var G__17302 = (i__12776__auto___17301 + (1));
i__12776__auto___17301 = G__17302;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq17291){
var G__17292 = cljs.core.first.call(null,seq17291);
var seq17291__$1 = cljs.core.next.call(null,seq17291);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__17292,seq17291__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17303 = arguments.length;
var i__12776__auto___17304 = (0);
while(true){
if((i__12776__auto___17304 < len__12775__auto___17303)){
args__12782__auto__.push((arguments[i__12776__auto___17304]));

var G__17305 = (i__12776__auto___17304 + (1));
i__12776__auto___17304 = G__17305;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq17293){
var G__17294 = cljs.core.first.call(null,seq17293);
var seq17293__$1 = cljs.core.next.call(null,seq17293);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__17294,seq17293__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17306 = arguments.length;
var i__12776__auto___17307 = (0);
while(true){
if((i__12776__auto___17307 < len__12775__auto___17306)){
args__12782__auto__.push((arguments[i__12776__auto___17307]));

var G__17308 = (i__12776__auto___17307 + (1));
i__12776__auto___17307 = G__17308;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq17295){
var G__17296 = cljs.core.first.call(null,seq17295);
var seq17295__$1 = cljs.core.next.call(null,seq17295);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__17296,seq17295__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17317 = arguments.length;
var i__12776__auto___17318 = (0);
while(true){
if((i__12776__auto___17318 < len__12775__auto___17317)){
args__12782__auto__.push((arguments[i__12776__auto___17318]));

var G__17319 = (i__12776__auto___17318 + (1));
i__12776__auto___17318 = G__17319;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq17309){
var G__17310 = cljs.core.first.call(null,seq17309);
var seq17309__$1 = cljs.core.next.call(null,seq17309);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__17310,seq17309__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17320 = arguments.length;
var i__12776__auto___17321 = (0);
while(true){
if((i__12776__auto___17321 < len__12775__auto___17320)){
args__12782__auto__.push((arguments[i__12776__auto___17321]));

var G__17322 = (i__12776__auto___17321 + (1));
i__12776__auto___17321 = G__17322;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq17311){
var G__17312 = cljs.core.first.call(null,seq17311);
var seq17311__$1 = cljs.core.next.call(null,seq17311);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__17312,seq17311__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17323 = arguments.length;
var i__12776__auto___17324 = (0);
while(true){
if((i__12776__auto___17324 < len__12775__auto___17323)){
args__12782__auto__.push((arguments[i__12776__auto___17324]));

var G__17325 = (i__12776__auto___17324 + (1));
i__12776__auto___17324 = G__17325;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq17313){
var G__17314 = cljs.core.first.call(null,seq17313);
var seq17313__$1 = cljs.core.next.call(null,seq17313);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__17314,seq17313__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17326 = arguments.length;
var i__12776__auto___17327 = (0);
while(true){
if((i__12776__auto___17327 < len__12775__auto___17326)){
args__12782__auto__.push((arguments[i__12776__auto___17327]));

var G__17328 = (i__12776__auto___17327 + (1));
i__12776__auto___17327 = G__17328;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq17315){
var G__17316 = cljs.core.first.call(null,seq17315);
var seq17315__$1 = cljs.core.next.call(null,seq17315);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__17316,seq17315__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17337 = arguments.length;
var i__12776__auto___17338 = (0);
while(true){
if((i__12776__auto___17338 < len__12775__auto___17337)){
args__12782__auto__.push((arguments[i__12776__auto___17338]));

var G__17339 = (i__12776__auto___17338 + (1));
i__12776__auto___17338 = G__17339;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq17329){
var G__17330 = cljs.core.first.call(null,seq17329);
var seq17329__$1 = cljs.core.next.call(null,seq17329);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__17330,seq17329__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17340 = arguments.length;
var i__12776__auto___17341 = (0);
while(true){
if((i__12776__auto___17341 < len__12775__auto___17340)){
args__12782__auto__.push((arguments[i__12776__auto___17341]));

var G__17342 = (i__12776__auto___17341 + (1));
i__12776__auto___17341 = G__17342;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq17331){
var G__17332 = cljs.core.first.call(null,seq17331);
var seq17331__$1 = cljs.core.next.call(null,seq17331);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__17332,seq17331__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17343 = arguments.length;
var i__12776__auto___17344 = (0);
while(true){
if((i__12776__auto___17344 < len__12775__auto___17343)){
args__12782__auto__.push((arguments[i__12776__auto___17344]));

var G__17345 = (i__12776__auto___17344 + (1));
i__12776__auto___17344 = G__17345;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq17333){
var G__17334 = cljs.core.first.call(null,seq17333);
var seq17333__$1 = cljs.core.next.call(null,seq17333);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__17334,seq17333__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17346 = arguments.length;
var i__12776__auto___17347 = (0);
while(true){
if((i__12776__auto___17347 < len__12775__auto___17346)){
args__12782__auto__.push((arguments[i__12776__auto___17347]));

var G__17348 = (i__12776__auto___17347 + (1));
i__12776__auto___17347 = G__17348;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq17335){
var G__17336 = cljs.core.first.call(null,seq17335);
var seq17335__$1 = cljs.core.next.call(null,seq17335);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__17336,seq17335__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17357 = arguments.length;
var i__12776__auto___17358 = (0);
while(true){
if((i__12776__auto___17358 < len__12775__auto___17357)){
args__12782__auto__.push((arguments[i__12776__auto___17358]));

var G__17359 = (i__12776__auto___17358 + (1));
i__12776__auto___17358 = G__17359;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq17349){
var G__17350 = cljs.core.first.call(null,seq17349);
var seq17349__$1 = cljs.core.next.call(null,seq17349);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__17350,seq17349__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17360 = arguments.length;
var i__12776__auto___17361 = (0);
while(true){
if((i__12776__auto___17361 < len__12775__auto___17360)){
args__12782__auto__.push((arguments[i__12776__auto___17361]));

var G__17362 = (i__12776__auto___17361 + (1));
i__12776__auto___17361 = G__17362;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq17351){
var G__17352 = cljs.core.first.call(null,seq17351);
var seq17351__$1 = cljs.core.next.call(null,seq17351);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__17352,seq17351__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17363 = arguments.length;
var i__12776__auto___17364 = (0);
while(true){
if((i__12776__auto___17364 < len__12775__auto___17363)){
args__12782__auto__.push((arguments[i__12776__auto___17364]));

var G__17365 = (i__12776__auto___17364 + (1));
i__12776__auto___17364 = G__17365;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq17353){
var G__17354 = cljs.core.first.call(null,seq17353);
var seq17353__$1 = cljs.core.next.call(null,seq17353);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__17354,seq17353__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17366 = arguments.length;
var i__12776__auto___17367 = (0);
while(true){
if((i__12776__auto___17367 < len__12775__auto___17366)){
args__12782__auto__.push((arguments[i__12776__auto___17367]));

var G__17368 = (i__12776__auto___17367 + (1));
i__12776__auto___17367 = G__17368;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq17355){
var G__17356 = cljs.core.first.call(null,seq17355);
var seq17355__$1 = cljs.core.next.call(null,seq17355);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__17356,seq17355__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17377 = arguments.length;
var i__12776__auto___17378 = (0);
while(true){
if((i__12776__auto___17378 < len__12775__auto___17377)){
args__12782__auto__.push((arguments[i__12776__auto___17378]));

var G__17379 = (i__12776__auto___17378 + (1));
i__12776__auto___17378 = G__17379;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__17208__auto__,rest__17209__auto__){
var convert_case__17210__auto__ = (function (p1__17207__17211__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__17207__17211__auto__,rest__17209__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__17208__auto__,convert_case__17210__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq17369){
var G__17370 = cljs.core.first.call(null,seq17369);
var seq17369__$1 = cljs.core.next.call(null,seq17369);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__17370,seq17369__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17380 = arguments.length;
var i__12776__auto___17381 = (0);
while(true){
if((i__12776__auto___17381 < len__12775__auto___17380)){
args__12782__auto__.push((arguments[i__12776__auto___17381]));

var G__17382 = (i__12776__auto___17381 + (1));
i__12776__auto___17381 = G__17382;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq17371){
var G__17372 = cljs.core.first.call(null,seq17371);
var seq17371__$1 = cljs.core.next.call(null,seq17371);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__17372,seq17371__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17383 = arguments.length;
var i__12776__auto___17384 = (0);
while(true){
if((i__12776__auto___17384 < len__12775__auto___17383)){
args__12782__auto__.push((arguments[i__12776__auto___17384]));

var G__17385 = (i__12776__auto___17384 + (1));
i__12776__auto___17384 = G__17385;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq17373){
var G__17374 = cljs.core.first.call(null,seq17373);
var seq17373__$1 = cljs.core.next.call(null,seq17373);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__17374,seq17373__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___17386 = arguments.length;
var i__12776__auto___17387 = (0);
while(true){
if((i__12776__auto___17387 < len__12775__auto___17386)){
args__12782__auto__.push((arguments[i__12776__auto___17387]));

var G__17388 = (i__12776__auto___17387 + (1));
i__12776__auto___17387 = G__17388;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__17213__auto__,rest__17214__auto__){
if(!((s__17213__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__17213__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__17213__auto__),rest__17214__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq17375){
var G__17376 = cljs.core.first.call(null,seq17375);
var seq17375__$1 = cljs.core.next.call(null,seq17375);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__17376,seq17375__$1);
});

