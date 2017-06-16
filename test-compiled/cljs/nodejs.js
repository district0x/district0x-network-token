// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26769__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26770__i = 0, G__26770__a = new Array(arguments.length -  0);
while (G__26770__i < G__26770__a.length) {G__26770__a[G__26770__i] = arguments[G__26770__i + 0]; ++G__26770__i;}
  args = new cljs.core.IndexedSeq(G__26770__a,0);
} 
return G__26769__delegate.call(this,args);};
G__26769.cljs$lang$maxFixedArity = 0;
G__26769.cljs$lang$applyTo = (function (arglist__26771){
var args = cljs.core.seq(arglist__26771);
return G__26769__delegate(args);
});
G__26769.cljs$core$IFn$_invoke$arity$variadic = G__26769__delegate;
return G__26769;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26772__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26773__i = 0, G__26773__a = new Array(arguments.length -  0);
while (G__26773__i < G__26773__a.length) {G__26773__a[G__26773__i] = arguments[G__26773__i + 0]; ++G__26773__i;}
  args = new cljs.core.IndexedSeq(G__26773__a,0);
} 
return G__26772__delegate.call(this,args);};
G__26772.cljs$lang$maxFixedArity = 0;
G__26772.cljs$lang$applyTo = (function (arglist__26774){
var args = cljs.core.seq(arglist__26774);
return G__26772__delegate(args);
});
G__26772.cljs$core$IFn$_invoke$arity$variadic = G__26772__delegate;
return G__26772;
})()
;

return null;
});
