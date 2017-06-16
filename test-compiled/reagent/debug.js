// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13082__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13083__i = 0, G__13083__a = new Array(arguments.length -  0);
while (G__13083__i < G__13083__a.length) {G__13083__a[G__13083__i] = arguments[G__13083__i + 0]; ++G__13083__i;}
  args = new cljs.core.IndexedSeq(G__13083__a,0);
} 
return G__13082__delegate.call(this,args);};
G__13082.cljs$lang$maxFixedArity = 0;
G__13082.cljs$lang$applyTo = (function (arglist__13084){
var args = cljs.core.seq(arglist__13084);
return G__13082__delegate(args);
});
G__13082.cljs$core$IFn$_invoke$arity$variadic = G__13082__delegate;
return G__13082;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13085__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13086__i = 0, G__13086__a = new Array(arguments.length -  0);
while (G__13086__i < G__13086__a.length) {G__13086__a[G__13086__i] = arguments[G__13086__i + 0]; ++G__13086__i;}
  args = new cljs.core.IndexedSeq(G__13086__a,0);
} 
return G__13085__delegate.call(this,args);};
G__13085.cljs$lang$maxFixedArity = 0;
G__13085.cljs$lang$applyTo = (function (arglist__13087){
var args = cljs.core.seq(arglist__13087);
return G__13085__delegate(args);
});
G__13085.cljs$core$IFn$_invoke$arity$variadic = G__13085__delegate;
return G__13085;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map