goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46205__i = 0, G__46205__a = new Array(arguments.length -  0);
while (G__46205__i < G__46205__a.length) {G__46205__a[G__46205__i] = arguments[G__46205__i + 0]; ++G__46205__i;}
  args = new cljs.core.IndexedSeq(G__46205__a,0);
} 
return G__46204__delegate.call(this,args);};
G__46204.cljs$lang$maxFixedArity = 0;
G__46204.cljs$lang$applyTo = (function (arglist__46206){
var args = cljs.core.seq(arglist__46206);
return G__46204__delegate(args);
});
G__46204.cljs$core$IFn$_invoke$arity$variadic = G__46204__delegate;
return G__46204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46208__i = 0, G__46208__a = new Array(arguments.length -  0);
while (G__46208__i < G__46208__a.length) {G__46208__a[G__46208__i] = arguments[G__46208__i + 0]; ++G__46208__i;}
  args = new cljs.core.IndexedSeq(G__46208__a,0);
} 
return G__46207__delegate.call(this,args);};
G__46207.cljs$lang$maxFixedArity = 0;
G__46207.cljs$lang$applyTo = (function (arglist__46209){
var args = cljs.core.seq(arglist__46209);
return G__46207__delegate(args);
});
G__46207.cljs$core$IFn$_invoke$arity$variadic = G__46207__delegate;
return G__46207;
})()
;

return null;
});
