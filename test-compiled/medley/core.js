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
var vec__24946 = temp__4655__auto__;
var seq__24947 = cljs.core.seq.call(null,vec__24946);
var first__24948 = cljs.core.first.call(null,seq__24947);
var seq__24947__$1 = cljs.core.next.call(null,seq__24947);
var k = first__24948;
var ks__$1 = seq__24947__$1;
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
var args24949 = [];
var len__12775__auto___24960 = arguments.length;
var i__12776__auto___24961 = (0);
while(true){
if((i__12776__auto___24961 < len__12775__auto___24960)){
args24949.push((arguments[i__12776__auto___24961]));

var G__24962 = (i__12776__auto___24961 + (1));
i__12776__auto___24961 = G__24962;
continue;
} else {
}
break;
}

var G__24955 = args24949.length;
switch (G__24955) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args24949.slice((3)),(0),null));
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
return cljs.core.reduce.call(null,(function (m__$1,p__24956){
var vec__24957 = p__24956;
var k__$1 = cljs.core.nth.call(null,vec__24957,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__24957,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq24950){
var G__24951 = cljs.core.first.call(null,seq24950);
var seq24950__$1 = cljs.core.next.call(null,seq24950);
var G__24952 = cljs.core.first.call(null,seq24950__$1);
var seq24950__$2 = cljs.core.next.call(null,seq24950__$1);
var G__24953 = cljs.core.first.call(null,seq24950__$2);
var seq24950__$3 = cljs.core.next.call(null,seq24950__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__24951,G__24952,G__24953,seq24950__$3);
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
var vec__24969 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__24969,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__24969,(1),null);
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
var args24972 = [];
var len__12775__auto___24975 = arguments.length;
var i__12776__auto___24976 = (0);
while(true){
if((i__12776__auto___24976 < len__12775__auto___24975)){
args24972.push((arguments[i__12776__auto___24976]));

var G__24977 = (i__12776__auto___24976 + (1));
i__12776__auto___24976 = G__24977;
continue;
} else {
}
break;
}

var G__24974 = args24972.length;
switch (G__24974) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24972.length)].join('')));

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
var args24979 = [];
var len__12775__auto___24985 = arguments.length;
var i__12776__auto___24986 = (0);
while(true){
if((i__12776__auto___24986 < len__12775__auto___24985)){
args24979.push((arguments[i__12776__auto___24986]));

var G__24987 = (i__12776__auto___24986 + (1));
i__12776__auto___24986 = G__24987;
continue;
} else {
}
break;
}

var G__24984 = args24979.length;
switch (G__24984) {
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
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args24979.slice((2)),(0),null));
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

medley.core.least.cljs$lang$applyTo = (function (seq24980){
var G__24981 = cljs.core.first.call(null,seq24980);
var seq24980__$1 = cljs.core.next.call(null,seq24980);
var G__24982 = cljs.core.first.call(null,seq24980__$1);
var seq24980__$2 = cljs.core.next.call(null,seq24980__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__24981,G__24982,seq24980__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var args24989 = [];
var len__12775__auto___24995 = arguments.length;
var i__12776__auto___24996 = (0);
while(true){
if((i__12776__auto___24996 < len__12775__auto___24995)){
args24989.push((arguments[i__12776__auto___24996]));

var G__24997 = (i__12776__auto___24996 + (1));
i__12776__auto___24996 = G__24997;
continue;
} else {
}
break;
}

var G__24994 = args24989.length;
switch (G__24994) {
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
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args24989.slice((2)),(0),null));
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

medley.core.greatest.cljs$lang$applyTo = (function (seq24990){
var G__24991 = cljs.core.first.call(null,seq24990);
var seq24990__$1 = cljs.core.next.call(null,seq24990);
var G__24992 = cljs.core.first.call(null,seq24990__$1);
var seq24990__$2 = cljs.core.next.call(null,seq24990__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__24991,G__24992,seq24990__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var args24999 = [];
var len__12775__auto___25005 = arguments.length;
var i__12776__auto___25006 = (0);
while(true){
if((i__12776__auto___25006 < len__12775__auto___25005)){
args24999.push((arguments[i__12776__auto___25006]));

var G__25007 = (i__12776__auto___25006 + (1));
i__12776__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var G__25004 = args24999.length;
switch (G__25004) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args24999.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq25000){
var G__25001 = cljs.core.first.call(null,seq25000);
var seq25000__$1 = cljs.core.next.call(null,seq25000);
var G__25002 = cljs.core.first.call(null,seq25000__$1);
var seq25000__$2 = cljs.core.next.call(null,seq25000__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__25001,G__25002,seq25000__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var args25009 = [];
var len__12775__auto___25015 = arguments.length;
var i__12776__auto___25016 = (0);
while(true){
if((i__12776__auto___25016 < len__12775__auto___25015)){
args25009.push((arguments[i__12776__auto___25016]));

var G__25017 = (i__12776__auto___25016 + (1));
i__12776__auto___25016 = G__25017;
continue;
} else {
}
break;
}

var G__25014 = args25009.length;
switch (G__25014) {
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
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args25009.slice((2)),(0),null));
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

medley.core.interleave_all.cljs$lang$applyTo = (function (seq25010){
var G__25011 = cljs.core.first.call(null,seq25010);
var seq25010__$1 = cljs.core.next.call(null,seq25010);
var G__25012 = cljs.core.first.call(null,seq25010__$1);
var seq25010__$2 = cljs.core.next.call(null,seq25010__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__25011,G__25012,seq25010__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var args25019 = [];
var len__12775__auto___25030 = arguments.length;
var i__12776__auto___25031 = (0);
while(true){
if((i__12776__auto___25031 < len__12775__auto___25030)){
args25019.push((arguments[i__12776__auto___25031]));

var G__25032 = (i__12776__auto___25031 + (1));
i__12776__auto___25031 = G__25032;
continue;
} else {
}
break;
}

var G__25021 = args25019.length;
switch (G__25021) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25019.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__25034 = null;
var G__25034__0 = (function (){
return rf.call(null);
});
var G__25034__1 = (function (result){
return rf.call(null,result);
});
var G__25034__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__25034 = function(result,x){
switch(arguments.length){
case 0:
return G__25034__0.call(this);
case 1:
return G__25034__1.call(this,result);
case 2:
return G__25034__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25034.cljs$core$IFn$_invoke$arity$0 = G__25034__0;
G__25034.cljs$core$IFn$_invoke$arity$1 = G__25034__1;
G__25034.cljs$core$IFn$_invoke$arity$2 = G__25034__2;
return G__25034;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__25026,seen__$1){
while(true){
var vec__25027 = p__25026;
var x = cljs.core.nth.call(null,vec__25027,(0),null);
var xs__$1 = vec__25027;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__25035 = cljs.core.rest.call(null,s);
var G__25036 = seen__$1;
p__25026 = G__25035;
seen__$1 = G__25036;
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
var args25037 = [];
var len__12775__auto___25040 = arguments.length;
var i__12776__auto___25041 = (0);
while(true){
if((i__12776__auto___25041 < len__12775__auto___25040)){
args25037.push((arguments[i__12776__auto___25041]));

var G__25042 = (i__12776__auto___25041 + (1));
i__12776__auto___25041 = G__25042;
continue;
} else {
}
break;
}

var G__25039 = args25037.length;
switch (G__25039) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25037.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__25044 = null;
var G__25044__0 = (function (){
return rf.call(null);
});
var G__25044__1 = (function (result){
return rf.call(null,result);
});
var G__25044__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__25044 = function(result,x){
switch(arguments.length){
case 0:
return G__25044__0.call(this);
case 1:
return G__25044__1.call(this,result);
case 2:
return G__25044__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25044.cljs$core$IFn$_invoke$arity$0 = G__25044__0;
G__25044.cljs$core$IFn$_invoke$arity$1 = G__25044__1;
G__25044.cljs$core$IFn$_invoke$arity$2 = G__25044__2;
return G__25044;
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
var args25045 = [];
var len__12775__auto___25048 = arguments.length;
var i__12776__auto___25049 = (0);
while(true){
if((i__12776__auto___25049 < len__12775__auto___25048)){
args25045.push((arguments[i__12776__auto___25049]));

var G__25050 = (i__12776__auto___25049 + (1));
i__12776__auto___25049 = G__25050;
continue;
} else {
}
break;
}

var G__25047 = args25045.length;
switch (G__25047) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25045.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__25052 = null;
var G__25052__0 = (function (){
return rf.call(null);
});
var G__25052__1 = (function (result){
return rf.call(null,result);
});
var G__25052__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__25052 = function(result,x){
switch(arguments.length){
case 0:
return G__25052__0.call(this);
case 1:
return G__25052__1.call(this,result);
case 2:
return G__25052__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25052.cljs$core$IFn$_invoke$arity$0 = G__25052__0;
G__25052.cljs$core$IFn$_invoke$arity$1 = G__25052__1;
G__25052.cljs$core$IFn$_invoke$arity$2 = G__25052__2;
return G__25052;
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
var args25053 = [];
var len__12775__auto___25056 = arguments.length;
var i__12776__auto___25057 = (0);
while(true){
if((i__12776__auto___25057 < len__12775__auto___25056)){
args25053.push((arguments[i__12776__auto___25057]));

var G__25058 = (i__12776__auto___25057 + (1));
i__12776__auto___25057 = G__25058;
continue;
} else {
}
break;
}

var G__25055 = args25053.length;
switch (G__25055) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25053.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__25060 = null;
var G__25060__0 = (function (){
return rf.call(null);
});
var G__25060__1 = (function (result){
return rf.call(null,result);
});
var G__25060__2 = (function (result,x){
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
G__25060 = function(result,x){
switch(arguments.length){
case 0:
return G__25060__0.call(this);
case 1:
return G__25060__1.call(this,result);
case 2:
return G__25060__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25060.cljs$core$IFn$_invoke$arity$0 = G__25060__0;
G__25060.cljs$core$IFn$_invoke$arity$1 = G__25060__1;
G__25060.cljs$core$IFn$_invoke$arity$2 = G__25060__2;
return G__25060;
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
var args25062 = [];
var len__12775__auto___25068 = arguments.length;
var i__12776__auto___25069 = (0);
while(true){
if((i__12776__auto___25069 < len__12775__auto___25068)){
args25062.push((arguments[i__12776__auto___25069]));

var G__25070 = (i__12776__auto___25069 + (1));
i__12776__auto___25069 = G__25070;
continue;
} else {
}
break;
}

var G__25067 = args25062.length;
switch (G__25067) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12794__auto__ = (new cljs.core.IndexedSeq(args25062.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12794__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__25061_SHARP_){
return cljs.core.apply.call(null,f,p1__25061_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq25063){
var G__25064 = cljs.core.first.call(null,seq25063);
var seq25063__$1 = cljs.core.next.call(null,seq25063);
var G__25065 = cljs.core.first.call(null,seq25063__$1);
var seq25063__$2 = cljs.core.next.call(null,seq25063__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25064,G__25065,seq25063__$2);
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
