goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36412__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36413__i = 0, G__36413__a = new Array(arguments.length -  0);
while (G__36413__i < G__36413__a.length) {G__36413__a[G__36413__i] = arguments[G__36413__i + 0]; ++G__36413__i;}
  args = new cljs.core.IndexedSeq(G__36413__a,0);
} 
return G__36412__delegate.call(this,args);};
G__36412.cljs$lang$maxFixedArity = 0;
G__36412.cljs$lang$applyTo = (function (arglist__36414){
var args = cljs.core.seq(arglist__36414);
return G__36412__delegate(args);
});
G__36412.cljs$core$IFn$_invoke$arity$variadic = G__36412__delegate;
return G__36412;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36415__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36416__i = 0, G__36416__a = new Array(arguments.length -  0);
while (G__36416__i < G__36416__a.length) {G__36416__a[G__36416__i] = arguments[G__36416__i + 0]; ++G__36416__i;}
  args = new cljs.core.IndexedSeq(G__36416__a,0);
} 
return G__36415__delegate.call(this,args);};
G__36415.cljs$lang$maxFixedArity = 0;
G__36415.cljs$lang$applyTo = (function (arglist__36417){
var args = cljs.core.seq(arglist__36417);
return G__36415__delegate(args);
});
G__36415.cljs$core$IFn$_invoke$arity$variadic = G__36415__delegate;
return G__36415;
})()
;

return null;
});
