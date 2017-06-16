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
var len__12775__auto___13902 = arguments.length;
var i__12776__auto___13903 = (0);
while(true){
if((i__12776__auto___13903 < len__12775__auto___13902)){
args__12782__auto__.push((arguments[i__12776__auto___13903]));

var G__13904 = (i__12776__auto___13903 + (1));
i__12776__auto___13903 = G__13904;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq13897){
var G__13898 = cljs.core.first.call(null,seq13897);
var seq13897__$1 = cljs.core.next.call(null,seq13897);
var G__13899 = cljs.core.first.call(null,seq13897__$1);
var seq13897__$2 = cljs.core.next.call(null,seq13897__$1);
var G__13900 = cljs.core.first.call(null,seq13897__$2);
var seq13897__$3 = cljs.core.next.call(null,seq13897__$2);
var G__13901 = cljs.core.first.call(null,seq13897__$3);
var seq13897__$4 = cljs.core.next.call(null,seq13897__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__13898,G__13899,G__13900,G__13901,seq13897__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13913 = arguments.length;
var i__12776__auto___13914 = (0);
while(true){
if((i__12776__auto___13914 < len__12775__auto___13913)){
args__12782__auto__.push((arguments[i__12776__auto___13914]));

var G__13915 = (i__12776__auto___13914 + (1));
i__12776__auto___13914 = G__13915;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq13905){
var G__13906 = cljs.core.first.call(null,seq13905);
var seq13905__$1 = cljs.core.next.call(null,seq13905);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__13906,seq13905__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13916 = arguments.length;
var i__12776__auto___13917 = (0);
while(true){
if((i__12776__auto___13917 < len__12775__auto___13916)){
args__12782__auto__.push((arguments[i__12776__auto___13917]));

var G__13918 = (i__12776__auto___13917 + (1));
i__12776__auto___13917 = G__13918;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq13907){
var G__13908 = cljs.core.first.call(null,seq13907);
var seq13907__$1 = cljs.core.next.call(null,seq13907);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__13908,seq13907__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13919 = arguments.length;
var i__12776__auto___13920 = (0);
while(true){
if((i__12776__auto___13920 < len__12775__auto___13919)){
args__12782__auto__.push((arguments[i__12776__auto___13920]));

var G__13921 = (i__12776__auto___13920 + (1));
i__12776__auto___13920 = G__13921;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq13909){
var G__13910 = cljs.core.first.call(null,seq13909);
var seq13909__$1 = cljs.core.next.call(null,seq13909);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__13910,seq13909__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13922 = arguments.length;
var i__12776__auto___13923 = (0);
while(true){
if((i__12776__auto___13923 < len__12775__auto___13922)){
args__12782__auto__.push((arguments[i__12776__auto___13923]));

var G__13924 = (i__12776__auto___13923 + (1));
i__12776__auto___13923 = G__13924;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq13911){
var G__13912 = cljs.core.first.call(null,seq13911);
var seq13911__$1 = cljs.core.next.call(null,seq13911);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__13912,seq13911__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13933 = arguments.length;
var i__12776__auto___13934 = (0);
while(true){
if((i__12776__auto___13934 < len__12775__auto___13933)){
args__12782__auto__.push((arguments[i__12776__auto___13934]));

var G__13935 = (i__12776__auto___13934 + (1));
i__12776__auto___13934 = G__13935;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq13925){
var G__13926 = cljs.core.first.call(null,seq13925);
var seq13925__$1 = cljs.core.next.call(null,seq13925);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__13926,seq13925__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13936 = arguments.length;
var i__12776__auto___13937 = (0);
while(true){
if((i__12776__auto___13937 < len__12775__auto___13936)){
args__12782__auto__.push((arguments[i__12776__auto___13937]));

var G__13938 = (i__12776__auto___13937 + (1));
i__12776__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq13927){
var G__13928 = cljs.core.first.call(null,seq13927);
var seq13927__$1 = cljs.core.next.call(null,seq13927);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__13928,seq13927__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13939 = arguments.length;
var i__12776__auto___13940 = (0);
while(true){
if((i__12776__auto___13940 < len__12775__auto___13939)){
args__12782__auto__.push((arguments[i__12776__auto___13940]));

var G__13941 = (i__12776__auto___13940 + (1));
i__12776__auto___13940 = G__13941;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq13929){
var G__13930 = cljs.core.first.call(null,seq13929);
var seq13929__$1 = cljs.core.next.call(null,seq13929);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__13930,seq13929__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13942 = arguments.length;
var i__12776__auto___13943 = (0);
while(true){
if((i__12776__auto___13943 < len__12775__auto___13942)){
args__12782__auto__.push((arguments[i__12776__auto___13943]));

var G__13944 = (i__12776__auto___13943 + (1));
i__12776__auto___13943 = G__13944;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq13931){
var G__13932 = cljs.core.first.call(null,seq13931);
var seq13931__$1 = cljs.core.next.call(null,seq13931);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__13932,seq13931__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13953 = arguments.length;
var i__12776__auto___13954 = (0);
while(true){
if((i__12776__auto___13954 < len__12775__auto___13953)){
args__12782__auto__.push((arguments[i__12776__auto___13954]));

var G__13955 = (i__12776__auto___13954 + (1));
i__12776__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq13945){
var G__13946 = cljs.core.first.call(null,seq13945);
var seq13945__$1 = cljs.core.next.call(null,seq13945);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__13946,seq13945__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13956 = arguments.length;
var i__12776__auto___13957 = (0);
while(true){
if((i__12776__auto___13957 < len__12775__auto___13956)){
args__12782__auto__.push((arguments[i__12776__auto___13957]));

var G__13958 = (i__12776__auto___13957 + (1));
i__12776__auto___13957 = G__13958;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq13947){
var G__13948 = cljs.core.first.call(null,seq13947);
var seq13947__$1 = cljs.core.next.call(null,seq13947);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__13948,seq13947__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13959 = arguments.length;
var i__12776__auto___13960 = (0);
while(true){
if((i__12776__auto___13960 < len__12775__auto___13959)){
args__12782__auto__.push((arguments[i__12776__auto___13960]));

var G__13961 = (i__12776__auto___13960 + (1));
i__12776__auto___13960 = G__13961;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq13949){
var G__13950 = cljs.core.first.call(null,seq13949);
var seq13949__$1 = cljs.core.next.call(null,seq13949);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__13950,seq13949__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13962 = arguments.length;
var i__12776__auto___13963 = (0);
while(true){
if((i__12776__auto___13963 < len__12775__auto___13962)){
args__12782__auto__.push((arguments[i__12776__auto___13963]));

var G__13964 = (i__12776__auto___13963 + (1));
i__12776__auto___13963 = G__13964;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq13951){
var G__13952 = cljs.core.first.call(null,seq13951);
var seq13951__$1 = cljs.core.next.call(null,seq13951);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__13952,seq13951__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13973 = arguments.length;
var i__12776__auto___13974 = (0);
while(true){
if((i__12776__auto___13974 < len__12775__auto___13973)){
args__12782__auto__.push((arguments[i__12776__auto___13974]));

var G__13975 = (i__12776__auto___13974 + (1));
i__12776__auto___13974 = G__13975;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq13965){
var G__13966 = cljs.core.first.call(null,seq13965);
var seq13965__$1 = cljs.core.next.call(null,seq13965);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__13966,seq13965__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13976 = arguments.length;
var i__12776__auto___13977 = (0);
while(true){
if((i__12776__auto___13977 < len__12775__auto___13976)){
args__12782__auto__.push((arguments[i__12776__auto___13977]));

var G__13978 = (i__12776__auto___13977 + (1));
i__12776__auto___13977 = G__13978;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq13967){
var G__13968 = cljs.core.first.call(null,seq13967);
var seq13967__$1 = cljs.core.next.call(null,seq13967);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__13968,seq13967__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13979 = arguments.length;
var i__12776__auto___13980 = (0);
while(true){
if((i__12776__auto___13980 < len__12775__auto___13979)){
args__12782__auto__.push((arguments[i__12776__auto___13980]));

var G__13981 = (i__12776__auto___13980 + (1));
i__12776__auto___13980 = G__13981;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq13969){
var G__13970 = cljs.core.first.call(null,seq13969);
var seq13969__$1 = cljs.core.next.call(null,seq13969);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__13970,seq13969__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13982 = arguments.length;
var i__12776__auto___13983 = (0);
while(true){
if((i__12776__auto___13983 < len__12775__auto___13982)){
args__12782__auto__.push((arguments[i__12776__auto___13983]));

var G__13984 = (i__12776__auto___13983 + (1));
i__12776__auto___13983 = G__13984;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq13971){
var G__13972 = cljs.core.first.call(null,seq13971);
var seq13971__$1 = cljs.core.next.call(null,seq13971);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__13972,seq13971__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13993 = arguments.length;
var i__12776__auto___13994 = (0);
while(true){
if((i__12776__auto___13994 < len__12775__auto___13993)){
args__12782__auto__.push((arguments[i__12776__auto___13994]));

var G__13995 = (i__12776__auto___13994 + (1));
i__12776__auto___13994 = G__13995;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq13985){
var G__13986 = cljs.core.first.call(null,seq13985);
var seq13985__$1 = cljs.core.next.call(null,seq13985);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__13986,seq13985__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13996 = arguments.length;
var i__12776__auto___13997 = (0);
while(true){
if((i__12776__auto___13997 < len__12775__auto___13996)){
args__12782__auto__.push((arguments[i__12776__auto___13997]));

var G__13998 = (i__12776__auto___13997 + (1));
i__12776__auto___13997 = G__13998;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq13987){
var G__13988 = cljs.core.first.call(null,seq13987);
var seq13987__$1 = cljs.core.next.call(null,seq13987);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__13988,seq13987__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13999 = arguments.length;
var i__12776__auto___14000 = (0);
while(true){
if((i__12776__auto___14000 < len__12775__auto___13999)){
args__12782__auto__.push((arguments[i__12776__auto___14000]));

var G__14001 = (i__12776__auto___14000 + (1));
i__12776__auto___14000 = G__14001;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq13989){
var G__13990 = cljs.core.first.call(null,seq13989);
var seq13989__$1 = cljs.core.next.call(null,seq13989);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__13990,seq13989__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14002 = arguments.length;
var i__12776__auto___14003 = (0);
while(true){
if((i__12776__auto___14003 < len__12775__auto___14002)){
args__12782__auto__.push((arguments[i__12776__auto___14003]));

var G__14004 = (i__12776__auto___14003 + (1));
i__12776__auto___14003 = G__14004;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq13991){
var G__13992 = cljs.core.first.call(null,seq13991);
var seq13991__$1 = cljs.core.next.call(null,seq13991);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__13992,seq13991__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14013 = arguments.length;
var i__12776__auto___14014 = (0);
while(true){
if((i__12776__auto___14014 < len__12775__auto___14013)){
args__12782__auto__.push((arguments[i__12776__auto___14014]));

var G__14015 = (i__12776__auto___14014 + (1));
i__12776__auto___14014 = G__14015;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq14005){
var G__14006 = cljs.core.first.call(null,seq14005);
var seq14005__$1 = cljs.core.next.call(null,seq14005);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__14006,seq14005__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14016 = arguments.length;
var i__12776__auto___14017 = (0);
while(true){
if((i__12776__auto___14017 < len__12775__auto___14016)){
args__12782__auto__.push((arguments[i__12776__auto___14017]));

var G__14018 = (i__12776__auto___14017 + (1));
i__12776__auto___14017 = G__14018;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq14007){
var G__14008 = cljs.core.first.call(null,seq14007);
var seq14007__$1 = cljs.core.next.call(null,seq14007);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14008,seq14007__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14019 = arguments.length;
var i__12776__auto___14020 = (0);
while(true){
if((i__12776__auto___14020 < len__12775__auto___14019)){
args__12782__auto__.push((arguments[i__12776__auto___14020]));

var G__14021 = (i__12776__auto___14020 + (1));
i__12776__auto___14020 = G__14021;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq14009){
var G__14010 = cljs.core.first.call(null,seq14009);
var seq14009__$1 = cljs.core.next.call(null,seq14009);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14010,seq14009__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14022 = arguments.length;
var i__12776__auto___14023 = (0);
while(true){
if((i__12776__auto___14023 < len__12775__auto___14022)){
args__12782__auto__.push((arguments[i__12776__auto___14023]));

var G__14024 = (i__12776__auto___14023 + (1));
i__12776__auto___14023 = G__14024;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq14011){
var G__14012 = cljs.core.first.call(null,seq14011);
var seq14011__$1 = cljs.core.next.call(null,seq14011);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__14012,seq14011__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14033 = arguments.length;
var i__12776__auto___14034 = (0);
while(true){
if((i__12776__auto___14034 < len__12775__auto___14033)){
args__12782__auto__.push((arguments[i__12776__auto___14034]));

var G__14035 = (i__12776__auto___14034 + (1));
i__12776__auto___14034 = G__14035;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13864__auto__,rest__13865__auto__){
var convert_case__13866__auto__ = (function (p1__13863__13867__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__13863__13867__auto__,rest__13865__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13864__auto__,convert_case__13866__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq14025){
var G__14026 = cljs.core.first.call(null,seq14025);
var seq14025__$1 = cljs.core.next.call(null,seq14025);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__14026,seq14025__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14036 = arguments.length;
var i__12776__auto___14037 = (0);
while(true){
if((i__12776__auto___14037 < len__12775__auto___14036)){
args__12782__auto__.push((arguments[i__12776__auto___14037]));

var G__14038 = (i__12776__auto___14037 + (1));
i__12776__auto___14037 = G__14038;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq14027){
var G__14028 = cljs.core.first.call(null,seq14027);
var seq14027__$1 = cljs.core.next.call(null,seq14027);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14028,seq14027__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14039 = arguments.length;
var i__12776__auto___14040 = (0);
while(true){
if((i__12776__auto___14040 < len__12775__auto___14039)){
args__12782__auto__.push((arguments[i__12776__auto___14040]));

var G__14041 = (i__12776__auto___14040 + (1));
i__12776__auto___14040 = G__14041;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq14029){
var G__14030 = cljs.core.first.call(null,seq14029);
var seq14029__$1 = cljs.core.next.call(null,seq14029);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14030,seq14029__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14042 = arguments.length;
var i__12776__auto___14043 = (0);
while(true){
if((i__12776__auto___14043 < len__12775__auto___14042)){
args__12782__auto__.push((arguments[i__12776__auto___14043]));

var G__14044 = (i__12776__auto___14043 + (1));
i__12776__auto___14043 = G__14044;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13869__auto__,rest__13870__auto__){
if(!((s__13869__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13869__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13869__auto__),rest__13870__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq14031){
var G__14032 = cljs.core.first.call(null,seq14031);
var seq14031__$1 = cljs.core.next.call(null,seq14031);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14032,seq14031__$1);
});


//# sourceMappingURL=core.js.map