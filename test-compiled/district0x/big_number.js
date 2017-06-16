// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.big_number');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
district0x.big_number.big_number_QMARK_ = (function district0x$big_number$big_number_QMARK_(x){
var and__11688__auto__ = x;
if(cljs.core.truth_(and__11688__auto__)){
return (x["toNumber"]);
} else {
return and__11688__auto__;
}
});
district0x.big_number.__GT_number = (function district0x$big_number$__GT_number(x){
if(cljs.core.truth_(district0x.big_number.big_number_QMARK_.call(null,x))){
return x.toNumber();
} else {
return x;
}
});
district0x.big_number.__GT_numbers = (function district0x$big_number$__GT_numbers(coll){
return cljs.core.map.call(null,district0x.big_number.__GT_number,coll);
});
district0x.big_number.abs = (function district0x$big_number$abs(x){
if(cljs.core.truth_(x)){
return x.abs();
} else {
return null;
}
});
district0x.big_number.ceil = (function district0x$big_number$ceil(x){
if(cljs.core.truth_(x)){
return x.ceil();
} else {
return null;
}
});
district0x.big_number.cmp = (function district0x$big_number$cmp(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20120 = arguments.length;
var i__12776__auto___20121 = (0);
while(true){
if((i__12776__auto___20121 < len__12775__auto___20120)){
args__12782__auto__.push((arguments[i__12776__auto___20121]));

var G__20122 = (i__12776__auto___20121 + (1));
i__12776__auto___20121 = G__20122;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20116){
var vec__20117 = p__20116;
var base = cljs.core.nth.call(null,vec__20117,(0),null);
if(cljs.core.truth_(x)){
return x.cmp(base);
} else {
return null;
}
});

district0x.big_number.cmp.cljs$lang$maxFixedArity = (1);

district0x.big_number.cmp.cljs$lang$applyTo = (function (seq20114){
var G__20115 = cljs.core.first.call(null,seq20114);
var seq20114__$1 = cljs.core.next.call(null,seq20114);
return district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic(G__20115,seq20114__$1);
});

district0x.big_number.dp = (function district0x$big_number$dp(x){
if(cljs.core.truth_(x)){
return x.dp();
} else {
return null;
}
});
district0x.big_number._SLASH_ = (function district0x$big_number$_SLASH_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20130 = arguments.length;
var i__12776__auto___20131 = (0);
while(true){
if((i__12776__auto___20131 < len__12775__auto___20130)){
args__12782__auto__.push((arguments[i__12776__auto___20131]));

var G__20132 = (i__12776__auto___20131 + (1));
i__12776__auto___20131 = G__20132;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20126){
var vec__20127 = p__20126;
var base = cljs.core.nth.call(null,vec__20127,(0),null);
if(cljs.core.truth_(x)){
return x.div(y,base);
} else {
return null;
}
});

district0x.big_number._SLASH_.cljs$lang$maxFixedArity = (2);

district0x.big_number._SLASH_.cljs$lang$applyTo = (function (seq20123){
var G__20124 = cljs.core.first.call(null,seq20123);
var seq20123__$1 = cljs.core.next.call(null,seq20123);
var G__20125 = cljs.core.first.call(null,seq20123__$1);
var seq20123__$2 = cljs.core.next.call(null,seq20123__$1);
return district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__20124,G__20125,seq20123__$2);
});

district0x.big_number.div_to_int = (function district0x$big_number$div_to_int(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20140 = arguments.length;
var i__12776__auto___20141 = (0);
while(true){
if((i__12776__auto___20141 < len__12775__auto___20140)){
args__12782__auto__.push((arguments[i__12776__auto___20141]));

var G__20142 = (i__12776__auto___20141 + (1));
i__12776__auto___20141 = G__20142;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20136){
var vec__20137 = p__20136;
var base = cljs.core.nth.call(null,vec__20137,(0),null);
if(cljs.core.truth_(x)){
return x.divToInt(y,base);
} else {
return null;
}
});

district0x.big_number.div_to_int.cljs$lang$maxFixedArity = (2);

district0x.big_number.div_to_int.cljs$lang$applyTo = (function (seq20133){
var G__20134 = cljs.core.first.call(null,seq20133);
var seq20133__$1 = cljs.core.next.call(null,seq20133);
var G__20135 = cljs.core.first.call(null,seq20133__$1);
var seq20133__$2 = cljs.core.next.call(null,seq20133__$1);
return district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic(G__20134,G__20135,seq20133__$2);
});

district0x.big_number.eq_QMARK_ = (function district0x$big_number$eq_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20150 = arguments.length;
var i__12776__auto___20151 = (0);
while(true){
if((i__12776__auto___20151 < len__12775__auto___20150)){
args__12782__auto__.push((arguments[i__12776__auto___20151]));

var G__20152 = (i__12776__auto___20151 + (1));
i__12776__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20146){
var vec__20147 = p__20146;
var base = cljs.core.nth.call(null,vec__20147,(0),null);
if(cljs.core.truth_(x)){
return x.eq(y,base);
} else {
return null;
}
});

district0x.big_number.eq_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.eq_QMARK_.cljs$lang$applyTo = (function (seq20143){
var G__20144 = cljs.core.first.call(null,seq20143);
var seq20143__$1 = cljs.core.next.call(null,seq20143);
var G__20145 = cljs.core.first.call(null,seq20143__$1);
var seq20143__$2 = cljs.core.next.call(null,seq20143__$1);
return district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20144,G__20145,seq20143__$2);
});

district0x.big_number.floor = (function district0x$big_number$floor(x){
if(cljs.core.truth_(x)){
return x.floor();
} else {
return null;
}
});
district0x.big_number.gt_QMARK_ = (function district0x$big_number$gt_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20160 = arguments.length;
var i__12776__auto___20161 = (0);
while(true){
if((i__12776__auto___20161 < len__12775__auto___20160)){
args__12782__auto__.push((arguments[i__12776__auto___20161]));

var G__20162 = (i__12776__auto___20161 + (1));
i__12776__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20156){
var vec__20157 = p__20156;
var base = cljs.core.nth.call(null,vec__20157,(0),null);
if(cljs.core.truth_(x)){
return x.gt(y,base);
} else {
return null;
}
});

district0x.big_number.gt_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.gt_QMARK_.cljs$lang$applyTo = (function (seq20153){
var G__20154 = cljs.core.first.call(null,seq20153);
var seq20153__$1 = cljs.core.next.call(null,seq20153);
var G__20155 = cljs.core.first.call(null,seq20153__$1);
var seq20153__$2 = cljs.core.next.call(null,seq20153__$1);
return district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20154,G__20155,seq20153__$2);
});

district0x.big_number.gte_QMARK_ = (function district0x$big_number$gte_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20170 = arguments.length;
var i__12776__auto___20171 = (0);
while(true){
if((i__12776__auto___20171 < len__12775__auto___20170)){
args__12782__auto__.push((arguments[i__12776__auto___20171]));

var G__20172 = (i__12776__auto___20171 + (1));
i__12776__auto___20171 = G__20172;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20166){
var vec__20167 = p__20166;
var base = cljs.core.nth.call(null,vec__20167,(0),null);
if(cljs.core.truth_(x)){
return x.gte(y,base);
} else {
return null;
}
});

district0x.big_number.gte_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.gte_QMARK_.cljs$lang$applyTo = (function (seq20163){
var G__20164 = cljs.core.first.call(null,seq20163);
var seq20163__$1 = cljs.core.next.call(null,seq20163);
var G__20165 = cljs.core.first.call(null,seq20163__$1);
var seq20163__$2 = cljs.core.next.call(null,seq20163__$1);
return district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20164,G__20165,seq20163__$2);
});

district0x.big_number.finite_QMARK_ = (function district0x$big_number$finite_QMARK_(x){
if(cljs.core.truth_(x)){
return x.isFinite();
} else {
return null;
}
});
district0x.big_number.int_QMARK_ = (function district0x$big_number$int_QMARK_(x){
if(cljs.core.truth_(x)){
return x.isInt();
} else {
return null;
}
});
district0x.big_number.nan_QMARK_ = (function district0x$big_number$nan_QMARK_(x){
if(cljs.core.truth_(x)){
return x.isNaN();
} else {
return null;
}
});
district0x.big_number.neg_QMARK_ = (function district0x$big_number$neg_QMARK_(x){
if(cljs.core.truth_(x)){
return x.isNeg();
} else {
return null;
}
});
district0x.big_number.pos_QMARK_ = (function district0x$big_number$pos_QMARK_(x){
return district0x.big_number.gt_QMARK_.call(null,x,(0));
});
district0x.big_number.zero_QMARK_ = (function district0x$big_number$zero_QMARK_(x){
if(cljs.core.truth_(x)){
return x.isZero();
} else {
return null;
}
});
district0x.big_number.lt_QMARK_ = (function district0x$big_number$lt_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20180 = arguments.length;
var i__12776__auto___20181 = (0);
while(true){
if((i__12776__auto___20181 < len__12775__auto___20180)){
args__12782__auto__.push((arguments[i__12776__auto___20181]));

var G__20182 = (i__12776__auto___20181 + (1));
i__12776__auto___20181 = G__20182;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20176){
var vec__20177 = p__20176;
var base = cljs.core.nth.call(null,vec__20177,(0),null);
if(cljs.core.truth_(x)){
return x.lt(y,base);
} else {
return null;
}
});

district0x.big_number.lt_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.lt_QMARK_.cljs$lang$applyTo = (function (seq20173){
var G__20174 = cljs.core.first.call(null,seq20173);
var seq20173__$1 = cljs.core.next.call(null,seq20173);
var G__20175 = cljs.core.first.call(null,seq20173__$1);
var seq20173__$2 = cljs.core.next.call(null,seq20173__$1);
return district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20174,G__20175,seq20173__$2);
});

district0x.big_number.lte_QMARK_ = (function district0x$big_number$lte_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20190 = arguments.length;
var i__12776__auto___20191 = (0);
while(true){
if((i__12776__auto___20191 < len__12775__auto___20190)){
args__12782__auto__.push((arguments[i__12776__auto___20191]));

var G__20192 = (i__12776__auto___20191 + (1));
i__12776__auto___20191 = G__20192;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20186){
var vec__20187 = p__20186;
var base = cljs.core.nth.call(null,vec__20187,(0),null);
if(cljs.core.truth_(x)){
return x.lte(y,base);
} else {
return null;
}
});

district0x.big_number.lte_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.lte_QMARK_.cljs$lang$applyTo = (function (seq20183){
var G__20184 = cljs.core.first.call(null,seq20183);
var seq20183__$1 = cljs.core.next.call(null,seq20183);
var G__20185 = cljs.core.first.call(null,seq20183__$1);
var seq20183__$2 = cljs.core.next.call(null,seq20183__$1);
return district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20184,G__20185,seq20183__$2);
});

district0x.big_number._ = (function district0x$big_number$_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20200 = arguments.length;
var i__12776__auto___20201 = (0);
while(true){
if((i__12776__auto___20201 < len__12775__auto___20200)){
args__12782__auto__.push((arguments[i__12776__auto___20201]));

var G__20202 = (i__12776__auto___20201 + (1));
i__12776__auto___20201 = G__20202;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20196){
var vec__20197 = p__20196;
var base = cljs.core.nth.call(null,vec__20197,(0),null);
if(cljs.core.truth_(x)){
return x.minus(y,base);
} else {
return null;
}
});

district0x.big_number._.cljs$lang$maxFixedArity = (2);

district0x.big_number._.cljs$lang$applyTo = (function (seq20193){
var G__20194 = cljs.core.first.call(null,seq20193);
var seq20193__$1 = cljs.core.next.call(null,seq20193);
var G__20195 = cljs.core.first.call(null,seq20193__$1);
var seq20193__$2 = cljs.core.next.call(null,seq20193__$1);
return district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic(G__20194,G__20195,seq20193__$2);
});

district0x.big_number.mod = (function district0x$big_number$mod(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20210 = arguments.length;
var i__12776__auto___20211 = (0);
while(true){
if((i__12776__auto___20211 < len__12775__auto___20210)){
args__12782__auto__.push((arguments[i__12776__auto___20211]));

var G__20212 = (i__12776__auto___20211 + (1));
i__12776__auto___20211 = G__20212;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20206){
var vec__20207 = p__20206;
var base = cljs.core.nth.call(null,vec__20207,(0),null);
if(cljs.core.truth_(x)){
return x.mod(y,base);
} else {
return null;
}
});

district0x.big_number.mod.cljs$lang$maxFixedArity = (2);

district0x.big_number.mod.cljs$lang$applyTo = (function (seq20203){
var G__20204 = cljs.core.first.call(null,seq20203);
var seq20203__$1 = cljs.core.next.call(null,seq20203);
var G__20205 = cljs.core.first.call(null,seq20203__$1);
var seq20203__$2 = cljs.core.next.call(null,seq20203__$1);
return district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic(G__20204,G__20205,seq20203__$2);
});

district0x.big_number.neg = (function district0x$big_number$neg(x){
if(cljs.core.truth_(x)){
return x.neg();
} else {
return null;
}
});
district0x.big_number._PLUS_ = (function district0x$big_number$_PLUS_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20220 = arguments.length;
var i__12776__auto___20221 = (0);
while(true){
if((i__12776__auto___20221 < len__12775__auto___20220)){
args__12782__auto__.push((arguments[i__12776__auto___20221]));

var G__20222 = (i__12776__auto___20221 + (1));
i__12776__auto___20221 = G__20222;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20216){
var vec__20217 = p__20216;
var base = cljs.core.nth.call(null,vec__20217,(0),null);
if(cljs.core.truth_(x)){
return x.plus(y,base);
} else {
return null;
}
});

district0x.big_number._PLUS_.cljs$lang$maxFixedArity = (2);

district0x.big_number._PLUS_.cljs$lang$applyTo = (function (seq20213){
var G__20214 = cljs.core.first.call(null,seq20213);
var seq20213__$1 = cljs.core.next.call(null,seq20213);
var G__20215 = cljs.core.first.call(null,seq20213__$1);
var seq20213__$2 = cljs.core.next.call(null,seq20213__$1);
return district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__20214,G__20215,seq20213__$2);
});

district0x.big_number.sd = (function district0x$big_number$sd(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20229 = arguments.length;
var i__12776__auto___20230 = (0);
while(true){
if((i__12776__auto___20230 < len__12775__auto___20229)){
args__12782__auto__.push((arguments[i__12776__auto___20230]));

var G__20231 = (i__12776__auto___20230 + (1));
i__12776__auto___20230 = G__20231;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20225){
var vec__20226 = p__20225;
var z = cljs.core.nth.call(null,vec__20226,(0),null);
if(cljs.core.truth_(x)){
return x.sd(z);
} else {
return null;
}
});

district0x.big_number.sd.cljs$lang$maxFixedArity = (1);

district0x.big_number.sd.cljs$lang$applyTo = (function (seq20223){
var G__20224 = cljs.core.first.call(null,seq20223);
var seq20223__$1 = cljs.core.next.call(null,seq20223);
return district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic(G__20224,seq20223__$1);
});

district0x.big_number.round = (function district0x$big_number$round(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20238 = arguments.length;
var i__12776__auto___20239 = (0);
while(true){
if((i__12776__auto___20239 < len__12775__auto___20238)){
args__12782__auto__.push((arguments[i__12776__auto___20239]));

var G__20240 = (i__12776__auto___20239 + (1));
i__12776__auto___20239 = G__20240;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20234){
var vec__20235 = p__20234;
var dp = cljs.core.nth.call(null,vec__20235,(0),null);
var rm = cljs.core.nth.call(null,vec__20235,(1),null);
if(cljs.core.truth_(x)){
return x.round(dp,rm);
} else {
return null;
}
});

district0x.big_number.round.cljs$lang$maxFixedArity = (1);

district0x.big_number.round.cljs$lang$applyTo = (function (seq20232){
var G__20233 = cljs.core.first.call(null,seq20232);
var seq20232__$1 = cljs.core.next.call(null,seq20232);
return district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic(G__20233,seq20232__$1);
});

district0x.big_number.shift = (function district0x$big_number$shift(x,z){
if(cljs.core.truth_(x)){
return x.shift(z);
} else {
return null;
}
});
district0x.big_number.sqrt = (function district0x$big_number$sqrt(x){
if(cljs.core.truth_(x)){
return x.sqrt();
} else {
return null;
}
});
district0x.big_number._STAR_ = (function district0x$big_number$_STAR_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20248 = arguments.length;
var i__12776__auto___20249 = (0);
while(true){
if((i__12776__auto___20249 < len__12775__auto___20248)){
args__12782__auto__.push((arguments[i__12776__auto___20249]));

var G__20250 = (i__12776__auto___20249 + (1));
i__12776__auto___20249 = G__20250;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20244){
var vec__20245 = p__20244;
var base = cljs.core.nth.call(null,vec__20245,(0),null);
if(cljs.core.truth_(x)){
return x.times(y,base);
} else {
return null;
}
});

district0x.big_number._STAR_.cljs$lang$maxFixedArity = (2);

district0x.big_number._STAR_.cljs$lang$applyTo = (function (seq20241){
var G__20242 = cljs.core.first.call(null,seq20241);
var seq20241__$1 = cljs.core.next.call(null,seq20241);
var G__20243 = cljs.core.first.call(null,seq20241__$1);
var seq20241__$2 = cljs.core.next.call(null,seq20241__$1);
return district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20242,G__20243,seq20241__$2);
});

district0x.big_number.__GT_digits = (function district0x$big_number$__GT_digits(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20257 = arguments.length;
var i__12776__auto___20258 = (0);
while(true){
if((i__12776__auto___20258 < len__12775__auto___20257)){
args__12782__auto__.push((arguments[i__12776__auto___20258]));

var G__20259 = (i__12776__auto___20258 + (1));
i__12776__auto___20258 = G__20259;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20253){
var vec__20254 = p__20253;
var sd = cljs.core.nth.call(null,vec__20254,(0),null);
var rm = cljs.core.nth.call(null,vec__20254,(1),null);
if(cljs.core.truth_(x)){
return x.toDigits(sd,rm);
} else {
return null;
}
});

district0x.big_number.__GT_digits.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_digits.cljs$lang$applyTo = (function (seq20251){
var G__20252 = cljs.core.first.call(null,seq20251);
var seq20251__$1 = cljs.core.next.call(null,seq20251);
return district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic(G__20252,seq20251__$1);
});

district0x.big_number.__GT_exponential = (function district0x$big_number$__GT_exponential(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20266 = arguments.length;
var i__12776__auto___20267 = (0);
while(true){
if((i__12776__auto___20267 < len__12775__auto___20266)){
args__12782__auto__.push((arguments[i__12776__auto___20267]));

var G__20268 = (i__12776__auto___20267 + (1));
i__12776__auto___20267 = G__20268;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20262){
var vec__20263 = p__20262;
var dp = cljs.core.nth.call(null,vec__20263,(0),null);
var rm = cljs.core.nth.call(null,vec__20263,(1),null);
if(cljs.core.truth_(x)){
return x.toExponential(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_exponential.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_exponential.cljs$lang$applyTo = (function (seq20260){
var G__20261 = cljs.core.first.call(null,seq20260);
var seq20260__$1 = cljs.core.next.call(null,seq20260);
return district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic(G__20261,seq20260__$1);
});

district0x.big_number.__GT_fixed = (function district0x$big_number$__GT_fixed(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20275 = arguments.length;
var i__12776__auto___20276 = (0);
while(true){
if((i__12776__auto___20276 < len__12775__auto___20275)){
args__12782__auto__.push((arguments[i__12776__auto___20276]));

var G__20277 = (i__12776__auto___20276 + (1));
i__12776__auto___20276 = G__20277;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20271){
var vec__20272 = p__20271;
var dp = cljs.core.nth.call(null,vec__20272,(0),null);
var rm = cljs.core.nth.call(null,vec__20272,(1),null);
if(cljs.core.truth_(x)){
return x.toFormat(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_fixed.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_fixed.cljs$lang$applyTo = (function (seq20269){
var G__20270 = cljs.core.first.call(null,seq20269);
var seq20269__$1 = cljs.core.next.call(null,seq20269);
return district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic(G__20270,seq20269__$1);
});

district0x.big_number.__GT_format = (function district0x$big_number$__GT_format(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20284 = arguments.length;
var i__12776__auto___20285 = (0);
while(true){
if((i__12776__auto___20285 < len__12775__auto___20284)){
args__12782__auto__.push((arguments[i__12776__auto___20285]));

var G__20286 = (i__12776__auto___20285 + (1));
i__12776__auto___20285 = G__20286;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20280){
var vec__20281 = p__20280;
var dp = cljs.core.nth.call(null,vec__20281,(0),null);
var rm = cljs.core.nth.call(null,vec__20281,(1),null);
if(cljs.core.truth_(x)){
return x.toFixed(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_format.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_format.cljs$lang$applyTo = (function (seq20278){
var G__20279 = cljs.core.first.call(null,seq20278);
var seq20278__$1 = cljs.core.next.call(null,seq20278);
return district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic(G__20279,seq20278__$1);
});

district0x.big_number.__GT_fraction = (function district0x$big_number$__GT_fraction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20293 = arguments.length;
var i__12776__auto___20294 = (0);
while(true){
if((i__12776__auto___20294 < len__12775__auto___20293)){
args__12782__auto__.push((arguments[i__12776__auto___20294]));

var G__20295 = (i__12776__auto___20294 + (1));
i__12776__auto___20294 = G__20295;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20289){
var vec__20290 = p__20289;
var max = cljs.core.nth.call(null,vec__20290,(0),null);
if(cljs.core.truth_(x)){
return x.toFraction(max);
} else {
return null;
}
});

district0x.big_number.__GT_fraction.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_fraction.cljs$lang$applyTo = (function (seq20287){
var G__20288 = cljs.core.first.call(null,seq20287);
var seq20287__$1 = cljs.core.next.call(null,seq20287);
return district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic(G__20288,seq20287__$1);
});

district0x.big_number.__GT_json = (function district0x$big_number$__GT_json(x){
if(cljs.core.truth_(x)){
return x.toJSON();
} else {
return null;
}
});
district0x.big_number.pow = (function district0x$big_number$pow(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20303 = arguments.length;
var i__12776__auto___20304 = (0);
while(true){
if((i__12776__auto___20304 < len__12775__auto___20303)){
args__12782__auto__.push((arguments[i__12776__auto___20304]));

var G__20305 = (i__12776__auto___20304 + (1));
i__12776__auto___20304 = G__20305;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__20299){
var vec__20300 = p__20299;
var m = cljs.core.nth.call(null,vec__20300,(0),null);
if(cljs.core.truth_(x)){
return x.pow(n,m);
} else {
return null;
}
});

district0x.big_number.pow.cljs$lang$maxFixedArity = (2);

district0x.big_number.pow.cljs$lang$applyTo = (function (seq20296){
var G__20297 = cljs.core.first.call(null,seq20296);
var seq20296__$1 = cljs.core.next.call(null,seq20296);
var G__20298 = cljs.core.first.call(null,seq20296__$1);
var seq20296__$2 = cljs.core.next.call(null,seq20296__$1);
return district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic(G__20297,G__20298,seq20296__$2);
});

district0x.big_number.__GT_precision = (function district0x$big_number$__GT_precision(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20312 = arguments.length;
var i__12776__auto___20313 = (0);
while(true){
if((i__12776__auto___20313 < len__12775__auto___20312)){
args__12782__auto__.push((arguments[i__12776__auto___20313]));

var G__20314 = (i__12776__auto___20313 + (1));
i__12776__auto___20313 = G__20314;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20308){
var vec__20309 = p__20308;
var sd = cljs.core.nth.call(null,vec__20309,(0),null);
var rm = cljs.core.nth.call(null,vec__20309,(1),null);
if(cljs.core.truth_(x)){
return x.toPrecision(sd,rm);
} else {
return null;
}
});

district0x.big_number.__GT_precision.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_precision.cljs$lang$applyTo = (function (seq20306){
var G__20307 = cljs.core.first.call(null,seq20306);
var seq20306__$1 = cljs.core.next.call(null,seq20306);
return district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic(G__20307,seq20306__$1);
});

district0x.big_number.__GT_str = (function district0x$big_number$__GT_str(var_args){
var args__12782__auto__ = [];
var len__12775__auto___20321 = arguments.length;
var i__12776__auto___20322 = (0);
while(true){
if((i__12776__auto___20322 < len__12775__auto___20321)){
args__12782__auto__.push((arguments[i__12776__auto___20322]));

var G__20323 = (i__12776__auto___20322 + (1));
i__12776__auto___20322 = G__20323;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__20317){
var vec__20318 = p__20317;
var base = cljs.core.nth.call(null,vec__20318,(0),null);
if(cljs.core.truth_(x)){
return x.toString(base);
} else {
return null;
}
});

district0x.big_number.__GT_str.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_str.cljs$lang$applyTo = (function (seq20315){
var G__20316 = cljs.core.first.call(null,seq20315);
var seq20315__$1 = cljs.core.next.call(null,seq20315);
return district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic(G__20316,seq20315__$1);
});

district0x.big_number.trunc = (function district0x$big_number$trunc(x){
if(cljs.core.truth_(x)){
return x.trunc();
} else {
return null;
}
});
district0x.big_number.value_of = (function district0x$big_number$value_of(x){
if(cljs.core.truth_(x)){
return x.valueOf();
} else {
return null;
}
});
district0x.big_number.__GT_date_time = (function district0x$big_number$__GT_date_time(x){
if(cljs.core.truth_(district0x.big_number.pos_QMARK_.call(null,x))){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,district0x.big_number.__GT_number.call(null,district0x.big_number._STAR_.call(null,x,(1000)))));
} else {
return null;
}
});
