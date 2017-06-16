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
var len__12775__auto___12969 = arguments.length;
var i__12776__auto___12970 = (0);
while(true){
if((i__12776__auto___12970 < len__12775__auto___12969)){
args__12782__auto__.push((arguments[i__12776__auto___12970]));

var G__12971 = (i__12776__auto___12970 + (1));
i__12776__auto___12970 = G__12971;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__12965){
var vec__12966 = p__12965;
var base = cljs.core.nth.call(null,vec__12966,(0),null);
if(cljs.core.truth_(x)){
return x.cmp(base);
} else {
return null;
}
});

district0x.big_number.cmp.cljs$lang$maxFixedArity = (1);

district0x.big_number.cmp.cljs$lang$applyTo = (function (seq12963){
var G__12964 = cljs.core.first.call(null,seq12963);
var seq12963__$1 = cljs.core.next.call(null,seq12963);
return district0x.big_number.cmp.cljs$core$IFn$_invoke$arity$variadic(G__12964,seq12963__$1);
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
var len__12775__auto___12979 = arguments.length;
var i__12776__auto___12980 = (0);
while(true){
if((i__12776__auto___12980 < len__12775__auto___12979)){
args__12782__auto__.push((arguments[i__12776__auto___12980]));

var G__12981 = (i__12776__auto___12980 + (1));
i__12776__auto___12980 = G__12981;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__12975){
var vec__12976 = p__12975;
var base = cljs.core.nth.call(null,vec__12976,(0),null);
if(cljs.core.truth_(x)){
return x.div(y,base);
} else {
return null;
}
});

district0x.big_number._SLASH_.cljs$lang$maxFixedArity = (2);

district0x.big_number._SLASH_.cljs$lang$applyTo = (function (seq12972){
var G__12973 = cljs.core.first.call(null,seq12972);
var seq12972__$1 = cljs.core.next.call(null,seq12972);
var G__12974 = cljs.core.first.call(null,seq12972__$1);
var seq12972__$2 = cljs.core.next.call(null,seq12972__$1);
return district0x.big_number._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__12973,G__12974,seq12972__$2);
});

district0x.big_number.div_to_int = (function district0x$big_number$div_to_int(var_args){
var args__12782__auto__ = [];
var len__12775__auto___12989 = arguments.length;
var i__12776__auto___12990 = (0);
while(true){
if((i__12776__auto___12990 < len__12775__auto___12989)){
args__12782__auto__.push((arguments[i__12776__auto___12990]));

var G__12991 = (i__12776__auto___12990 + (1));
i__12776__auto___12990 = G__12991;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__12985){
var vec__12986 = p__12985;
var base = cljs.core.nth.call(null,vec__12986,(0),null);
if(cljs.core.truth_(x)){
return x.divToInt(y,base);
} else {
return null;
}
});

district0x.big_number.div_to_int.cljs$lang$maxFixedArity = (2);

district0x.big_number.div_to_int.cljs$lang$applyTo = (function (seq12982){
var G__12983 = cljs.core.first.call(null,seq12982);
var seq12982__$1 = cljs.core.next.call(null,seq12982);
var G__12984 = cljs.core.first.call(null,seq12982__$1);
var seq12982__$2 = cljs.core.next.call(null,seq12982__$1);
return district0x.big_number.div_to_int.cljs$core$IFn$_invoke$arity$variadic(G__12983,G__12984,seq12982__$2);
});

district0x.big_number.eq_QMARK_ = (function district0x$big_number$eq_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___12999 = arguments.length;
var i__12776__auto___13000 = (0);
while(true){
if((i__12776__auto___13000 < len__12775__auto___12999)){
args__12782__auto__.push((arguments[i__12776__auto___13000]));

var G__13001 = (i__12776__auto___13000 + (1));
i__12776__auto___13000 = G__13001;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__12995){
var vec__12996 = p__12995;
var base = cljs.core.nth.call(null,vec__12996,(0),null);
if(cljs.core.truth_(x)){
return x.eq(y,base);
} else {
return null;
}
});

district0x.big_number.eq_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.eq_QMARK_.cljs$lang$applyTo = (function (seq12992){
var G__12993 = cljs.core.first.call(null,seq12992);
var seq12992__$1 = cljs.core.next.call(null,seq12992);
var G__12994 = cljs.core.first.call(null,seq12992__$1);
var seq12992__$2 = cljs.core.next.call(null,seq12992__$1);
return district0x.big_number.eq_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__12993,G__12994,seq12992__$2);
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
var len__12775__auto___13009 = arguments.length;
var i__12776__auto___13010 = (0);
while(true){
if((i__12776__auto___13010 < len__12775__auto___13009)){
args__12782__auto__.push((arguments[i__12776__auto___13010]));

var G__13011 = (i__12776__auto___13010 + (1));
i__12776__auto___13010 = G__13011;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13005){
var vec__13006 = p__13005;
var base = cljs.core.nth.call(null,vec__13006,(0),null);
if(cljs.core.truth_(x)){
return x.gt(y,base);
} else {
return null;
}
});

district0x.big_number.gt_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.gt_QMARK_.cljs$lang$applyTo = (function (seq13002){
var G__13003 = cljs.core.first.call(null,seq13002);
var seq13002__$1 = cljs.core.next.call(null,seq13002);
var G__13004 = cljs.core.first.call(null,seq13002__$1);
var seq13002__$2 = cljs.core.next.call(null,seq13002__$1);
return district0x.big_number.gt_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13003,G__13004,seq13002__$2);
});

district0x.big_number.gte_QMARK_ = (function district0x$big_number$gte_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13019 = arguments.length;
var i__12776__auto___13020 = (0);
while(true){
if((i__12776__auto___13020 < len__12775__auto___13019)){
args__12782__auto__.push((arguments[i__12776__auto___13020]));

var G__13021 = (i__12776__auto___13020 + (1));
i__12776__auto___13020 = G__13021;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13015){
var vec__13016 = p__13015;
var base = cljs.core.nth.call(null,vec__13016,(0),null);
if(cljs.core.truth_(x)){
return x.gte(y,base);
} else {
return null;
}
});

district0x.big_number.gte_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.gte_QMARK_.cljs$lang$applyTo = (function (seq13012){
var G__13013 = cljs.core.first.call(null,seq13012);
var seq13012__$1 = cljs.core.next.call(null,seq13012);
var G__13014 = cljs.core.first.call(null,seq13012__$1);
var seq13012__$2 = cljs.core.next.call(null,seq13012__$1);
return district0x.big_number.gte_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13013,G__13014,seq13012__$2);
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
var len__12775__auto___13029 = arguments.length;
var i__12776__auto___13030 = (0);
while(true){
if((i__12776__auto___13030 < len__12775__auto___13029)){
args__12782__auto__.push((arguments[i__12776__auto___13030]));

var G__13031 = (i__12776__auto___13030 + (1));
i__12776__auto___13030 = G__13031;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13025){
var vec__13026 = p__13025;
var base = cljs.core.nth.call(null,vec__13026,(0),null);
if(cljs.core.truth_(x)){
return x.lt(y,base);
} else {
return null;
}
});

district0x.big_number.lt_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.lt_QMARK_.cljs$lang$applyTo = (function (seq13022){
var G__13023 = cljs.core.first.call(null,seq13022);
var seq13022__$1 = cljs.core.next.call(null,seq13022);
var G__13024 = cljs.core.first.call(null,seq13022__$1);
var seq13022__$2 = cljs.core.next.call(null,seq13022__$1);
return district0x.big_number.lt_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13023,G__13024,seq13022__$2);
});

district0x.big_number.lte_QMARK_ = (function district0x$big_number$lte_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13039 = arguments.length;
var i__12776__auto___13040 = (0);
while(true){
if((i__12776__auto___13040 < len__12775__auto___13039)){
args__12782__auto__.push((arguments[i__12776__auto___13040]));

var G__13041 = (i__12776__auto___13040 + (1));
i__12776__auto___13040 = G__13041;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13035){
var vec__13036 = p__13035;
var base = cljs.core.nth.call(null,vec__13036,(0),null);
if(cljs.core.truth_(x)){
return x.lte(y,base);
} else {
return null;
}
});

district0x.big_number.lte_QMARK_.cljs$lang$maxFixedArity = (2);

district0x.big_number.lte_QMARK_.cljs$lang$applyTo = (function (seq13032){
var G__13033 = cljs.core.first.call(null,seq13032);
var seq13032__$1 = cljs.core.next.call(null,seq13032);
var G__13034 = cljs.core.first.call(null,seq13032__$1);
var seq13032__$2 = cljs.core.next.call(null,seq13032__$1);
return district0x.big_number.lte_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13033,G__13034,seq13032__$2);
});

district0x.big_number._ = (function district0x$big_number$_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13049 = arguments.length;
var i__12776__auto___13050 = (0);
while(true){
if((i__12776__auto___13050 < len__12775__auto___13049)){
args__12782__auto__.push((arguments[i__12776__auto___13050]));

var G__13051 = (i__12776__auto___13050 + (1));
i__12776__auto___13050 = G__13051;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13045){
var vec__13046 = p__13045;
var base = cljs.core.nth.call(null,vec__13046,(0),null);
if(cljs.core.truth_(x)){
return x.minus(y,base);
} else {
return null;
}
});

district0x.big_number._.cljs$lang$maxFixedArity = (2);

district0x.big_number._.cljs$lang$applyTo = (function (seq13042){
var G__13043 = cljs.core.first.call(null,seq13042);
var seq13042__$1 = cljs.core.next.call(null,seq13042);
var G__13044 = cljs.core.first.call(null,seq13042__$1);
var seq13042__$2 = cljs.core.next.call(null,seq13042__$1);
return district0x.big_number._.cljs$core$IFn$_invoke$arity$variadic(G__13043,G__13044,seq13042__$2);
});

district0x.big_number.mod = (function district0x$big_number$mod(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13059 = arguments.length;
var i__12776__auto___13060 = (0);
while(true){
if((i__12776__auto___13060 < len__12775__auto___13059)){
args__12782__auto__.push((arguments[i__12776__auto___13060]));

var G__13061 = (i__12776__auto___13060 + (1));
i__12776__auto___13060 = G__13061;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13055){
var vec__13056 = p__13055;
var base = cljs.core.nth.call(null,vec__13056,(0),null);
if(cljs.core.truth_(x)){
return x.mod(y,base);
} else {
return null;
}
});

district0x.big_number.mod.cljs$lang$maxFixedArity = (2);

district0x.big_number.mod.cljs$lang$applyTo = (function (seq13052){
var G__13053 = cljs.core.first.call(null,seq13052);
var seq13052__$1 = cljs.core.next.call(null,seq13052);
var G__13054 = cljs.core.first.call(null,seq13052__$1);
var seq13052__$2 = cljs.core.next.call(null,seq13052__$1);
return district0x.big_number.mod.cljs$core$IFn$_invoke$arity$variadic(G__13053,G__13054,seq13052__$2);
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
var len__12775__auto___13069 = arguments.length;
var i__12776__auto___13070 = (0);
while(true){
if((i__12776__auto___13070 < len__12775__auto___13069)){
args__12782__auto__.push((arguments[i__12776__auto___13070]));

var G__13071 = (i__12776__auto___13070 + (1));
i__12776__auto___13070 = G__13071;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13065){
var vec__13066 = p__13065;
var base = cljs.core.nth.call(null,vec__13066,(0),null);
if(cljs.core.truth_(x)){
return x.plus(y,base);
} else {
return null;
}
});

district0x.big_number._PLUS_.cljs$lang$maxFixedArity = (2);

district0x.big_number._PLUS_.cljs$lang$applyTo = (function (seq13062){
var G__13063 = cljs.core.first.call(null,seq13062);
var seq13062__$1 = cljs.core.next.call(null,seq13062);
var G__13064 = cljs.core.first.call(null,seq13062__$1);
var seq13062__$2 = cljs.core.next.call(null,seq13062__$1);
return district0x.big_number._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__13063,G__13064,seq13062__$2);
});

district0x.big_number.sd = (function district0x$big_number$sd(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13078 = arguments.length;
var i__12776__auto___13079 = (0);
while(true){
if((i__12776__auto___13079 < len__12775__auto___13078)){
args__12782__auto__.push((arguments[i__12776__auto___13079]));

var G__13080 = (i__12776__auto___13079 + (1));
i__12776__auto___13079 = G__13080;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13074){
var vec__13075 = p__13074;
var z = cljs.core.nth.call(null,vec__13075,(0),null);
if(cljs.core.truth_(x)){
return x.sd(z);
} else {
return null;
}
});

district0x.big_number.sd.cljs$lang$maxFixedArity = (1);

district0x.big_number.sd.cljs$lang$applyTo = (function (seq13072){
var G__13073 = cljs.core.first.call(null,seq13072);
var seq13072__$1 = cljs.core.next.call(null,seq13072);
return district0x.big_number.sd.cljs$core$IFn$_invoke$arity$variadic(G__13073,seq13072__$1);
});

district0x.big_number.round = (function district0x$big_number$round(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13087 = arguments.length;
var i__12776__auto___13088 = (0);
while(true){
if((i__12776__auto___13088 < len__12775__auto___13087)){
args__12782__auto__.push((arguments[i__12776__auto___13088]));

var G__13089 = (i__12776__auto___13088 + (1));
i__12776__auto___13088 = G__13089;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13083){
var vec__13084 = p__13083;
var dp = cljs.core.nth.call(null,vec__13084,(0),null);
var rm = cljs.core.nth.call(null,vec__13084,(1),null);
if(cljs.core.truth_(x)){
return x.round(dp,rm);
} else {
return null;
}
});

district0x.big_number.round.cljs$lang$maxFixedArity = (1);

district0x.big_number.round.cljs$lang$applyTo = (function (seq13081){
var G__13082 = cljs.core.first.call(null,seq13081);
var seq13081__$1 = cljs.core.next.call(null,seq13081);
return district0x.big_number.round.cljs$core$IFn$_invoke$arity$variadic(G__13082,seq13081__$1);
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
var len__12775__auto___13097 = arguments.length;
var i__12776__auto___13098 = (0);
while(true){
if((i__12776__auto___13098 < len__12775__auto___13097)){
args__12782__auto__.push((arguments[i__12776__auto___13098]));

var G__13099 = (i__12776__auto___13098 + (1));
i__12776__auto___13098 = G__13099;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__13093){
var vec__13094 = p__13093;
var base = cljs.core.nth.call(null,vec__13094,(0),null);
if(cljs.core.truth_(x)){
return x.times(y,base);
} else {
return null;
}
});

district0x.big_number._STAR_.cljs$lang$maxFixedArity = (2);

district0x.big_number._STAR_.cljs$lang$applyTo = (function (seq13090){
var G__13091 = cljs.core.first.call(null,seq13090);
var seq13090__$1 = cljs.core.next.call(null,seq13090);
var G__13092 = cljs.core.first.call(null,seq13090__$1);
var seq13090__$2 = cljs.core.next.call(null,seq13090__$1);
return district0x.big_number._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__13091,G__13092,seq13090__$2);
});

district0x.big_number.__GT_digits = (function district0x$big_number$__GT_digits(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13106 = arguments.length;
var i__12776__auto___13107 = (0);
while(true){
if((i__12776__auto___13107 < len__12775__auto___13106)){
args__12782__auto__.push((arguments[i__12776__auto___13107]));

var G__13108 = (i__12776__auto___13107 + (1));
i__12776__auto___13107 = G__13108;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13102){
var vec__13103 = p__13102;
var sd = cljs.core.nth.call(null,vec__13103,(0),null);
var rm = cljs.core.nth.call(null,vec__13103,(1),null);
if(cljs.core.truth_(x)){
return x.toDigits(sd,rm);
} else {
return null;
}
});

district0x.big_number.__GT_digits.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_digits.cljs$lang$applyTo = (function (seq13100){
var G__13101 = cljs.core.first.call(null,seq13100);
var seq13100__$1 = cljs.core.next.call(null,seq13100);
return district0x.big_number.__GT_digits.cljs$core$IFn$_invoke$arity$variadic(G__13101,seq13100__$1);
});

district0x.big_number.__GT_exponential = (function district0x$big_number$__GT_exponential(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13115 = arguments.length;
var i__12776__auto___13116 = (0);
while(true){
if((i__12776__auto___13116 < len__12775__auto___13115)){
args__12782__auto__.push((arguments[i__12776__auto___13116]));

var G__13117 = (i__12776__auto___13116 + (1));
i__12776__auto___13116 = G__13117;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13111){
var vec__13112 = p__13111;
var dp = cljs.core.nth.call(null,vec__13112,(0),null);
var rm = cljs.core.nth.call(null,vec__13112,(1),null);
if(cljs.core.truth_(x)){
return x.toExponential(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_exponential.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_exponential.cljs$lang$applyTo = (function (seq13109){
var G__13110 = cljs.core.first.call(null,seq13109);
var seq13109__$1 = cljs.core.next.call(null,seq13109);
return district0x.big_number.__GT_exponential.cljs$core$IFn$_invoke$arity$variadic(G__13110,seq13109__$1);
});

district0x.big_number.__GT_fixed = (function district0x$big_number$__GT_fixed(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13124 = arguments.length;
var i__12776__auto___13125 = (0);
while(true){
if((i__12776__auto___13125 < len__12775__auto___13124)){
args__12782__auto__.push((arguments[i__12776__auto___13125]));

var G__13126 = (i__12776__auto___13125 + (1));
i__12776__auto___13125 = G__13126;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13120){
var vec__13121 = p__13120;
var dp = cljs.core.nth.call(null,vec__13121,(0),null);
var rm = cljs.core.nth.call(null,vec__13121,(1),null);
if(cljs.core.truth_(x)){
return x.toFormat(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_fixed.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_fixed.cljs$lang$applyTo = (function (seq13118){
var G__13119 = cljs.core.first.call(null,seq13118);
var seq13118__$1 = cljs.core.next.call(null,seq13118);
return district0x.big_number.__GT_fixed.cljs$core$IFn$_invoke$arity$variadic(G__13119,seq13118__$1);
});

district0x.big_number.__GT_format = (function district0x$big_number$__GT_format(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13133 = arguments.length;
var i__12776__auto___13134 = (0);
while(true){
if((i__12776__auto___13134 < len__12775__auto___13133)){
args__12782__auto__.push((arguments[i__12776__auto___13134]));

var G__13135 = (i__12776__auto___13134 + (1));
i__12776__auto___13134 = G__13135;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13129){
var vec__13130 = p__13129;
var dp = cljs.core.nth.call(null,vec__13130,(0),null);
var rm = cljs.core.nth.call(null,vec__13130,(1),null);
if(cljs.core.truth_(x)){
return x.toFixed(dp,rm);
} else {
return null;
}
});

district0x.big_number.__GT_format.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_format.cljs$lang$applyTo = (function (seq13127){
var G__13128 = cljs.core.first.call(null,seq13127);
var seq13127__$1 = cljs.core.next.call(null,seq13127);
return district0x.big_number.__GT_format.cljs$core$IFn$_invoke$arity$variadic(G__13128,seq13127__$1);
});

district0x.big_number.__GT_fraction = (function district0x$big_number$__GT_fraction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13142 = arguments.length;
var i__12776__auto___13143 = (0);
while(true){
if((i__12776__auto___13143 < len__12775__auto___13142)){
args__12782__auto__.push((arguments[i__12776__auto___13143]));

var G__13144 = (i__12776__auto___13143 + (1));
i__12776__auto___13143 = G__13144;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13138){
var vec__13139 = p__13138;
var max = cljs.core.nth.call(null,vec__13139,(0),null);
if(cljs.core.truth_(x)){
return x.toFraction(max);
} else {
return null;
}
});

district0x.big_number.__GT_fraction.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_fraction.cljs$lang$applyTo = (function (seq13136){
var G__13137 = cljs.core.first.call(null,seq13136);
var seq13136__$1 = cljs.core.next.call(null,seq13136);
return district0x.big_number.__GT_fraction.cljs$core$IFn$_invoke$arity$variadic(G__13137,seq13136__$1);
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
var len__12775__auto___13152 = arguments.length;
var i__12776__auto___13153 = (0);
while(true){
if((i__12776__auto___13153 < len__12775__auto___13152)){
args__12782__auto__.push((arguments[i__12776__auto___13153]));

var G__13154 = (i__12776__auto___13153 + (1));
i__12776__auto___13153 = G__13154;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__13148){
var vec__13149 = p__13148;
var m = cljs.core.nth.call(null,vec__13149,(0),null);
if(cljs.core.truth_(x)){
return x.pow(n,m);
} else {
return null;
}
});

district0x.big_number.pow.cljs$lang$maxFixedArity = (2);

district0x.big_number.pow.cljs$lang$applyTo = (function (seq13145){
var G__13146 = cljs.core.first.call(null,seq13145);
var seq13145__$1 = cljs.core.next.call(null,seq13145);
var G__13147 = cljs.core.first.call(null,seq13145__$1);
var seq13145__$2 = cljs.core.next.call(null,seq13145__$1);
return district0x.big_number.pow.cljs$core$IFn$_invoke$arity$variadic(G__13146,G__13147,seq13145__$2);
});

district0x.big_number.__GT_precision = (function district0x$big_number$__GT_precision(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13161 = arguments.length;
var i__12776__auto___13162 = (0);
while(true){
if((i__12776__auto___13162 < len__12775__auto___13161)){
args__12782__auto__.push((arguments[i__12776__auto___13162]));

var G__13163 = (i__12776__auto___13162 + (1));
i__12776__auto___13162 = G__13163;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13157){
var vec__13158 = p__13157;
var sd = cljs.core.nth.call(null,vec__13158,(0),null);
var rm = cljs.core.nth.call(null,vec__13158,(1),null);
if(cljs.core.truth_(x)){
return x.toPrecision(sd,rm);
} else {
return null;
}
});

district0x.big_number.__GT_precision.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_precision.cljs$lang$applyTo = (function (seq13155){
var G__13156 = cljs.core.first.call(null,seq13155);
var seq13155__$1 = cljs.core.next.call(null,seq13155);
return district0x.big_number.__GT_precision.cljs$core$IFn$_invoke$arity$variadic(G__13156,seq13155__$1);
});

district0x.big_number.__GT_str = (function district0x$big_number$__GT_str(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13170 = arguments.length;
var i__12776__auto___13171 = (0);
while(true){
if((i__12776__auto___13171 < len__12775__auto___13170)){
args__12782__auto__.push((arguments[i__12776__auto___13171]));

var G__13172 = (i__12776__auto___13171 + (1));
i__12776__auto___13171 = G__13172;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13166){
var vec__13167 = p__13166;
var base = cljs.core.nth.call(null,vec__13167,(0),null);
if(cljs.core.truth_(x)){
return x.toString(base);
} else {
return null;
}
});

district0x.big_number.__GT_str.cljs$lang$maxFixedArity = (1);

district0x.big_number.__GT_str.cljs$lang$applyTo = (function (seq13164){
var G__13165 = cljs.core.first.call(null,seq13164);
var seq13164__$1 = cljs.core.next.call(null,seq13164);
return district0x.big_number.__GT_str.cljs$core$IFn$_invoke$arity$variadic(G__13165,seq13164__$1);
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

//# sourceMappingURL=big_number.js.map