// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25195__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25196__i = 0, G__25196__a = new Array(arguments.length -  0);
while (G__25196__i < G__25196__a.length) {G__25196__a[G__25196__i] = arguments[G__25196__i + 0]; ++G__25196__i;}
  args = new cljs.core.IndexedSeq(G__25196__a,0);
} 
return G__25195__delegate.call(this,args);};
G__25195.cljs$lang$maxFixedArity = 0;
G__25195.cljs$lang$applyTo = (function (arglist__25197){
var args = cljs.core.seq(arglist__25197);
return G__25195__delegate(args);
});
G__25195.cljs$core$IFn$_invoke$arity$variadic = G__25195__delegate;
return G__25195;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25198__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25199__i = 0, G__25199__a = new Array(arguments.length -  0);
while (G__25199__i < G__25199__a.length) {G__25199__a[G__25199__i] = arguments[G__25199__i + 0]; ++G__25199__i;}
  args = new cljs.core.IndexedSeq(G__25199__a,0);
} 
return G__25198__delegate.call(this,args);};
G__25198.cljs$lang$maxFixedArity = 0;
G__25198.cljs$lang$applyTo = (function (arglist__25200){
var args = cljs.core.seq(arglist__25200);
return G__25198__delegate(args);
});
G__25198.cljs$core$IFn$_invoke$arity$variadic = G__25198__delegate;
return G__25198;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map