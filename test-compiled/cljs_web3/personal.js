// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.personal');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.personal.get_prs = (function cljs_web3$personal$get_prs(web3){
return (web3["personal"]);
});
cljs_web3.personal.list_accounts = cljs_web3.utils.prop_or_clb_fn.call(null,"personal","listAccounts");
cljs_web3.personal.lock_account = (function cljs_web3$personal$lock_account(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26435 = arguments.length;
var i__12776__auto___26436 = (0);
while(true){
if((i__12776__auto___26436 < len__12775__auto___26435)){
args__12782__auto__.push((arguments[i__12776__auto___26436]));

var G__26437 = (i__12776__auto___26436 + (1));
i__12776__auto___26436 = G__26437;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"lockAccount",args);
});

cljs_web3.personal.lock_account.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.lock_account.cljs$lang$applyTo = (function (seq26433){
var G__26434 = cljs.core.first.call(null,seq26433);
var seq26433__$1 = cljs.core.next.call(null,seq26433);
return cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic(G__26434,seq26433__$1);
});

cljs_web3.personal.new_account = (function cljs_web3$personal$new_account(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26440 = arguments.length;
var i__12776__auto___26441 = (0);
while(true){
if((i__12776__auto___26441 < len__12775__auto___26440)){
args__12782__auto__.push((arguments[i__12776__auto___26441]));

var G__26442 = (i__12776__auto___26441 + (1));
i__12776__auto___26441 = G__26442;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"newAccount",args);
});

cljs_web3.personal.new_account.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.new_account.cljs$lang$applyTo = (function (seq26438){
var G__26439 = cljs.core.first.call(null,seq26438);
var seq26438__$1 = cljs.core.next.call(null,seq26438);
return cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic(G__26439,seq26438__$1);
});

cljs_web3.personal.unlock_account = (function cljs_web3$personal$unlock_account(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26445 = arguments.length;
var i__12776__auto___26446 = (0);
while(true){
if((i__12776__auto___26446 < len__12775__auto___26445)){
args__12782__auto__.push((arguments[i__12776__auto___26446]));

var G__26447 = (i__12776__auto___26446 + (1));
i__12776__auto___26446 = G__26447;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"unlockAccount",args);
});

cljs_web3.personal.unlock_account.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.unlock_account.cljs$lang$applyTo = (function (seq26443){
var G__26444 = cljs.core.first.call(null,seq26443);
var seq26443__$1 = cljs.core.next.call(null,seq26443);
return cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic(G__26444,seq26443__$1);
});

cljs_web3.personal.ec_recover = (function cljs_web3$personal$ec_recover(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26450 = arguments.length;
var i__12776__auto___26451 = (0);
while(true){
if((i__12776__auto___26451 < len__12775__auto___26450)){
args__12782__auto__.push((arguments[i__12776__auto___26451]));

var G__26452 = (i__12776__auto___26451 + (1));
i__12776__auto___26451 = G__26452;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"ecRecover",args);
});

cljs_web3.personal.ec_recover.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.ec_recover.cljs$lang$applyTo = (function (seq26448){
var G__26449 = cljs.core.first.call(null,seq26448);
var seq26448__$1 = cljs.core.next.call(null,seq26448);
return cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic(G__26449,seq26448__$1);
});

cljs_web3.personal.import_raw_key = (function cljs_web3$personal$import_raw_key(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26455 = arguments.length;
var i__12776__auto___26456 = (0);
while(true){
if((i__12776__auto___26456 < len__12775__auto___26455)){
args__12782__auto__.push((arguments[i__12776__auto___26456]));

var G__26457 = (i__12776__auto___26456 + (1));
i__12776__auto___26456 = G__26457;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"importRawKey",args);
});

cljs_web3.personal.import_raw_key.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.import_raw_key.cljs$lang$applyTo = (function (seq26453){
var G__26454 = cljs.core.first.call(null,seq26453);
var seq26453__$1 = cljs.core.next.call(null,seq26453);
return cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic(G__26454,seq26453__$1);
});

cljs_web3.personal.send_transaction = (function cljs_web3$personal$send_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26460 = arguments.length;
var i__12776__auto___26461 = (0);
while(true){
if((i__12776__auto___26461 < len__12775__auto___26460)){
args__12782__auto__.push((arguments[i__12776__auto___26461]));

var G__26462 = (i__12776__auto___26461 + (1));
i__12776__auto___26461 = G__26462;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"sendTransaction",args);
});

cljs_web3.personal.send_transaction.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.send_transaction.cljs$lang$applyTo = (function (seq26458){
var G__26459 = cljs.core.first.call(null,seq26458);
var seq26458__$1 = cljs.core.next.call(null,seq26458);
return cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic(G__26459,seq26458__$1);
});

cljs_web3.personal.sign = (function cljs_web3$personal$sign(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26465 = arguments.length;
var i__12776__auto___26466 = (0);
while(true){
if((i__12776__auto___26466 < len__12775__auto___26465)){
args__12782__auto__.push((arguments[i__12776__auto___26466]));

var G__26467 = (i__12776__auto___26466 + (1));
i__12776__auto___26466 = G__26467;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.personal.get_prs.call(null,web3),"sign",args);
});

cljs_web3.personal.sign.cljs$lang$maxFixedArity = (1);

cljs_web3.personal.sign.cljs$lang$applyTo = (function (seq26463){
var G__26464 = cljs.core.first.call(null,seq26463);
var seq26463__$1 = cljs.core.next.call(null,seq26463);
return cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic(G__26464,seq26463__$1);
});

