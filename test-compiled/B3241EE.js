goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34730__i = 0, G__34730__a = new Array(arguments.length -  0);
while (G__34730__i < G__34730__a.length) {G__34730__a[G__34730__i] = arguments[G__34730__i + 0]; ++G__34730__i;}
  args = new cljs.core.IndexedSeq(G__34730__a,0);
} 
return G__34729__delegate.call(this,args);};
G__34729.cljs$lang$maxFixedArity = 0;
G__34729.cljs$lang$applyTo = (function (arglist__34731){
var args = cljs.core.seq(arglist__34731);
return G__34729__delegate(args);
});
G__34729.cljs$core$IFn$_invoke$arity$variadic = G__34729__delegate;
return G__34729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34733__i = 0, G__34733__a = new Array(arguments.length -  0);
while (G__34733__i < G__34733__a.length) {G__34733__a[G__34733__i] = arguments[G__34733__i + 0]; ++G__34733__i;}
  args = new cljs.core.IndexedSeq(G__34733__a,0);
} 
return G__34732__delegate.call(this,args);};
G__34732.cljs$lang$maxFixedArity = 0;
G__34732.cljs$lang$applyTo = (function (arglist__34734){
var args = cljs.core.seq(arglist__34734);
return G__34732__delegate(args);
});
G__34732.cljs$core$IFn$_invoke$arity$variadic = G__34732__delegate;
return G__34732;
})()
;

return null;
});
