goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36428__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36429__i = 0, G__36429__a = new Array(arguments.length -  0);
while (G__36429__i < G__36429__a.length) {G__36429__a[G__36429__i] = arguments[G__36429__i + 0]; ++G__36429__i;}
  args = new cljs.core.IndexedSeq(G__36429__a,0);
} 
return G__36428__delegate.call(this,args);};
G__36428.cljs$lang$maxFixedArity = 0;
G__36428.cljs$lang$applyTo = (function (arglist__36430){
var args = cljs.core.seq(arglist__36430);
return G__36428__delegate(args);
});
G__36428.cljs$core$IFn$_invoke$arity$variadic = G__36428__delegate;
return G__36428;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36431__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36432__i = 0, G__36432__a = new Array(arguments.length -  0);
while (G__36432__i < G__36432__a.length) {G__36432__a[G__36432__i] = arguments[G__36432__i + 0]; ++G__36432__i;}
  args = new cljs.core.IndexedSeq(G__36432__a,0);
} 
return G__36431__delegate.call(this,args);};
G__36431.cljs$lang$maxFixedArity = 0;
G__36431.cljs$lang$applyTo = (function (arglist__36433){
var args = cljs.core.seq(arglist__36433);
return G__36431__delegate(args);
});
G__36431.cljs$core$IFn$_invoke$arity$variadic = G__36431__delegate;
return G__36431;
})()
;

return null;
});
