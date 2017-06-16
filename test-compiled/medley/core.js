// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
});
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(m,ks){
var temp__4655__auto__ = cljs.core.seq.call(null,ks);
if(temp__4655__auto__){
var vec__21529 = temp__4655__auto__;
var seq__21530 = cljs.core.seq.call(null,vec__21529);
var first__21531 = cljs.core.first.call(null,seq__21530);
var seq__21530__$1 = cljs.core.next.call(null,seq__21530);
var k = first__21531;
var ks__$1 = seq__21530__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
});
/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var args21532 = [];
var len__12775__auto___21543 = arguments.length;
var i__12776__auto___21544 = (0);
while(true){
if((i__12776__auto___21544 < len__12775__auto___21543)){
args21532.push((arguments[i__12776__auto___21544]));

var G__21545 = (i__12776__auto___21544 + (1));
i__12776__auto___21544 = G__21545;
continue;
} else {
}
break;
}

var G__21538 = args21532.length;
switch (G__21538) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21532.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12794__auto__);

}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__21539){
var vec__21540 = p__21539;
var k__$1 = cljs.core.nth.call(null,vec__21540,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__21540,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq21533){
var G__21534 = cljs.core.first.call(null,seq21533);
var seq21533__$1 = cljs.core.next.call(null,seq21533);
var G__21535 = cljs.core.first.call(null,seq21533__$1);
var seq21533__$2 = cljs.core.next.call(null,seq21533__$1);
var G__21536 = cljs.core.first.call(null,seq21533__$2);
var seq21533__$3 = cljs.core.next.call(null,seq21533__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__21534,G__21535,G__21536,seq21533__$3);
});

medley.core.assoc_some.cljs$lang$maxFixedArity = (3);

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
if(cljs.core.truth_(medley.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
/**
 * Maps a function over the key/value pairs of an associate collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__21552 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__21552,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__21552,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var args21555 = [];
var len__12775__auto___21558 = arguments.length;
var i__12776__auto___21559 = (0);
while(true){
if((i__12776__auto___21559 < len__12775__auto___21558)){
args21555.push((arguments[i__12776__auto___21559]));

var G__21560 = (i__12776__auto___21559 + (1));
i__12776__auto___21559 = G__21560;
continue;
} else {
}
break;
}

var G__21557 = args21555.length;
switch (G__21557) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21555.length)].join('')));

}
});

medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
});

medley.core.queue.cljs$lang$maxFixedArity = 1;

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return (x === true) || (x === false);
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var args21562 = [];
var len__12775__auto___21568 = arguments.length;
var i__12776__auto___21569 = (0);
while(true){
if((i__12776__auto___21569 < len__12775__auto___21568)){
args21562.push((arguments[i__12776__auto___21569]));

var G__21570 = (i__12776__auto___21569 + (1));
i__12776__auto___21569 = G__21570;
continue;
} else {
}
break;
}

var G__21567 = args21562.length;
switch (G__21567) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21562.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
});

medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
});

medley.core.least.cljs$lang$applyTo = (function (seq21563){
var G__21564 = cljs.core.first.call(null,seq21563);
var seq21563__$1 = cljs.core.next.call(null,seq21563);
var G__21565 = cljs.core.first.call(null,seq21563__$1);
var seq21563__$2 = cljs.core.next.call(null,seq21563__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__21564,G__21565,seq21563__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var args21572 = [];
var len__12775__auto___21578 = arguments.length;
var i__12776__auto___21579 = (0);
while(true){
if((i__12776__auto___21579 < len__12775__auto___21578)){
args21572.push((arguments[i__12776__auto___21579]));

var G__21580 = (i__12776__auto___21579 + (1));
i__12776__auto___21579 = G__21580;
continue;
} else {
}
break;
}

var G__21577 = args21572.length;
switch (G__21577) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21572.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
});

medley.core.greatest.cljs$lang$applyTo = (function (seq21573){
var G__21574 = cljs.core.first.call(null,seq21573);
var seq21573__$1 = cljs.core.next.call(null,seq21573);
var G__21575 = cljs.core.first.call(null,seq21573__$1);
var seq21573__$2 = cljs.core.next.call(null,seq21573__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__21574,G__21575,seq21573__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var args21582 = [];
var len__12775__auto___21588 = arguments.length;
var i__12776__auto___21589 = (0);
while(true){
if((i__12776__auto___21589 < len__12775__auto___21588)){
args21582.push((arguments[i__12776__auto___21589]));

var G__21590 = (i__12776__auto___21589 + (1));
i__12776__auto___21589 = G__21590;
continue;
} else {
}
break;
}

var G__21587 = args21582.length;
switch (G__21587) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21582.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq21583){
var G__21584 = cljs.core.first.call(null,seq21583);
var seq21583__$1 = cljs.core.next.call(null,seq21583);
var G__21585 = cljs.core.first.call(null,seq21583__$1);
var seq21583__$2 = cljs.core.next.call(null,seq21583__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__21584,G__21585,seq21583__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var args21592 = [];
var len__12775__auto___21598 = arguments.length;
var i__12776__auto___21599 = (0);
while(true){
if((i__12776__auto___21599 < len__12775__auto___21598)){
args21592.push((arguments[i__12776__auto___21599]));

var G__21600 = (i__12776__auto___21599 + (1));
i__12776__auto___21599 = G__21600;
continue;
} else {
}
break;
}

var G__21597 = args21592.length;
switch (G__21597) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21592.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return (s1) || (s2);
}
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});

medley.core.interleave_all.cljs$lang$applyTo = (function (seq21593){
var G__21594 = cljs.core.first.call(null,seq21593);
var seq21593__$1 = cljs.core.next.call(null,seq21593);
var G__21595 = cljs.core.first.call(null,seq21593__$1);
var seq21593__$2 = cljs.core.next.call(null,seq21593__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__21594,G__21595,seq21593__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var args21602 = [];
var len__12775__auto___21613 = arguments.length;
var i__12776__auto___21614 = (0);
while(true){
if((i__12776__auto___21614 < len__12775__auto___21613)){
args21602.push((arguments[i__12776__auto___21614]));

var G__21615 = (i__12776__auto___21614 + (1));
i__12776__auto___21614 = G__21615;
continue;
} else {
}
break;
}

var G__21604 = args21602.length;
switch (G__21604) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21602.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__21617 = null;
var G__21617__0 = (function (){
return rf.call(null);
});
var G__21617__1 = (function (result){
return rf.call(null,result);
});
var G__21617__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__21617 = function(result,x){
switch(arguments.length){
case 0:
return G__21617__0.call(this);
case 1:
return G__21617__1.call(this,result);
case 2:
return G__21617__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21617.cljs$core$IFn$_invoke$arity$0 = G__21617__0;
G__21617.cljs$core$IFn$_invoke$arity$1 = G__21617__1;
G__21617.cljs$core$IFn$_invoke$arity$2 = G__21617__2;
return G__21617;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__21609,seen__$1){
while(true){
var vec__21610 = p__21609;
var x = cljs.core.nth.call(null,vec__21610,(0),null);
var xs__$1 = vec__21610;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__21618 = cljs.core.rest.call(null,s);
var G__21619 = seen__$1;
p__21609 = G__21618;
seen__$1 = G__21619;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

medley.core.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var args21620 = [];
var len__12775__auto___21623 = arguments.length;
var i__12776__auto___21624 = (0);
while(true){
if((i__12776__auto___21624 < len__12775__auto___21623)){
args21620.push((arguments[i__12776__auto___21624]));

var G__21625 = (i__12776__auto___21624 + (1));
i__12776__auto___21624 = G__21625;
continue;
} else {
}
break;
}

var G__21622 = args21620.length;
switch (G__21622) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21620.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__21627 = null;
var G__21627__0 = (function (){
return rf.call(null);
});
var G__21627__1 = (function (result){
return rf.call(null,result);
});
var G__21627__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__21627 = function(result,x){
switch(arguments.length){
case 0:
return G__21627__0.call(this);
case 1:
return G__21627__1.call(this,result);
case 2:
return G__21627__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21627.cljs$core$IFn$_invoke$arity$0 = G__21627__0;
G__21627.cljs$core$IFn$_invoke$arity$1 = G__21627__1;
G__21627.cljs$core$IFn$_invoke$arity$2 = G__21627__2;
return G__21627;
})()
;})(pv))
});
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
});

medley.core.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var args21628 = [];
var len__12775__auto___21631 = arguments.length;
var i__12776__auto___21632 = (0);
while(true){
if((i__12776__auto___21632 < len__12775__auto___21631)){
args21628.push((arguments[i__12776__auto___21632]));

var G__21633 = (i__12776__auto___21632 + (1));
i__12776__auto___21632 = G__21633;
continue;
} else {
}
break;
}

var G__21630 = args21628.length;
switch (G__21630) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21628.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__21635 = null;
var G__21635__0 = (function (){
return rf.call(null);
});
var G__21635__1 = (function (result){
return rf.call(null,result);
});
var G__21635__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__21635 = function(result,x){
switch(arguments.length){
case 0:
return G__21635__0.call(this);
case 1:
return G__21635__1.call(this,result);
case 2:
return G__21635__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21635.cljs$core$IFn$_invoke$arity$0 = G__21635__0;
G__21635.cljs$core$IFn$_invoke$arity$1 = G__21635__1;
G__21635.cljs$core$IFn$_invoke$arity$2 = G__21635__2;
return G__21635;
})()
});
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.seq.call(null,coll);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
});

medley.core.take_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var args21636 = [];
var len__12775__auto___21639 = arguments.length;
var i__12776__auto___21640 = (0);
while(true){
if((i__12776__auto___21640 < len__12775__auto___21639)){
args21636.push((arguments[i__12776__auto___21640]));

var G__21641 = (i__12776__auto___21640 + (1));
i__12776__auto___21640 = G__21641;
continue;
} else {
}
break;
}

var G__21638 = args21636.length;
switch (G__21638) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21636.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__21643 = null;
var G__21643__0 = (function (){
return rf.call(null);
});
var G__21643__1 = (function (result){
return rf.call(null,result);
});
var G__21643__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__21643 = function(result,x){
switch(arguments.length){
case 0:
return G__21643__0.call(this);
case 1:
return G__21643__1.call(this,result);
case 2:
return G__21643__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21643.cljs$core$IFn$_invoke$arity$0 = G__21643__0;
G__21643.cljs$core$IFn$_invoke$arity$1 = G__21643__1;
G__21643.cljs$core$IFn$_invoke$arity$2 = G__21643__2;
return G__21643;
})()
;})(dv))
});
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
});

medley.core.drop_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});
/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var args21645 = [];
var len__12775__auto___21651 = arguments.length;
var i__12776__auto___21652 = (0);
while(true){
if((i__12776__auto___21652 < len__12775__auto___21651)){
args21645.push((arguments[i__12776__auto___21652]));

var G__21653 = (i__12776__auto___21652 + (1));
i__12776__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var G__21650 = args21645.length;
switch (G__21650) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args21645.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__21644_SHARP_){
return cljs.core.apply.call(null,f,p1__21644_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq21646){
var G__21647 = cljs.core.first.call(null,seq21646);
var seq21646__$1 = cljs.core.next.call(null,seq21646);
var G__21648 = cljs.core.first.call(null,seq21646__$1);
var seq21646__$2 = cljs.core.next.call(null,seq21646__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21647,G__21648,seq21646__$2);
});

medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-clause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});

//# sourceMappingURL=core.js.map