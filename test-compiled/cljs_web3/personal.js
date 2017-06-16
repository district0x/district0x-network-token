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
var len__12775__auto___23018 = arguments.length;
var i__12776__auto___23019 = (0);
while(true){
if((i__12776__auto___23019 < len__12775__auto___23018)){
args__12782__auto__.push((arguments[i__12776__auto___23019]));

var G__23020 = (i__12776__auto___23019 + (1));
i__12776__auto___23019 = G__23020;
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

cljs_web3.personal.lock_account.cljs$lang$applyTo = (function (seq23016){
var G__23017 = cljs.core.first.call(null,seq23016);
var seq23016__$1 = cljs.core.next.call(null,seq23016);
return cljs_web3.personal.lock_account.cljs$core$IFn$_invoke$arity$variadic(G__23017,seq23016__$1);
});

cljs_web3.personal.new_account = (function cljs_web3$personal$new_account(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23023 = arguments.length;
var i__12776__auto___23024 = (0);
while(true){
if((i__12776__auto___23024 < len__12775__auto___23023)){
args__12782__auto__.push((arguments[i__12776__auto___23024]));

var G__23025 = (i__12776__auto___23024 + (1));
i__12776__auto___23024 = G__23025;
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

cljs_web3.personal.new_account.cljs$lang$applyTo = (function (seq23021){
var G__23022 = cljs.core.first.call(null,seq23021);
var seq23021__$1 = cljs.core.next.call(null,seq23021);
return cljs_web3.personal.new_account.cljs$core$IFn$_invoke$arity$variadic(G__23022,seq23021__$1);
});

cljs_web3.personal.unlock_account = (function cljs_web3$personal$unlock_account(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23028 = arguments.length;
var i__12776__auto___23029 = (0);
while(true){
if((i__12776__auto___23029 < len__12775__auto___23028)){
args__12782__auto__.push((arguments[i__12776__auto___23029]));

var G__23030 = (i__12776__auto___23029 + (1));
i__12776__auto___23029 = G__23030;
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

cljs_web3.personal.unlock_account.cljs$lang$applyTo = (function (seq23026){
var G__23027 = cljs.core.first.call(null,seq23026);
var seq23026__$1 = cljs.core.next.call(null,seq23026);
return cljs_web3.personal.unlock_account.cljs$core$IFn$_invoke$arity$variadic(G__23027,seq23026__$1);
});

cljs_web3.personal.ec_recover = (function cljs_web3$personal$ec_recover(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23033 = arguments.length;
var i__12776__auto___23034 = (0);
while(true){
if((i__12776__auto___23034 < len__12775__auto___23033)){
args__12782__auto__.push((arguments[i__12776__auto___23034]));

var G__23035 = (i__12776__auto___23034 + (1));
i__12776__auto___23034 = G__23035;
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

cljs_web3.personal.ec_recover.cljs$lang$applyTo = (function (seq23031){
var G__23032 = cljs.core.first.call(null,seq23031);
var seq23031__$1 = cljs.core.next.call(null,seq23031);
return cljs_web3.personal.ec_recover.cljs$core$IFn$_invoke$arity$variadic(G__23032,seq23031__$1);
});

cljs_web3.personal.import_raw_key = (function cljs_web3$personal$import_raw_key(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23038 = arguments.length;
var i__12776__auto___23039 = (0);
while(true){
if((i__12776__auto___23039 < len__12775__auto___23038)){
args__12782__auto__.push((arguments[i__12776__auto___23039]));

var G__23040 = (i__12776__auto___23039 + (1));
i__12776__auto___23039 = G__23040;
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

cljs_web3.personal.import_raw_key.cljs$lang$applyTo = (function (seq23036){
var G__23037 = cljs.core.first.call(null,seq23036);
var seq23036__$1 = cljs.core.next.call(null,seq23036);
return cljs_web3.personal.import_raw_key.cljs$core$IFn$_invoke$arity$variadic(G__23037,seq23036__$1);
});

cljs_web3.personal.send_transaction = (function cljs_web3$personal$send_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23043 = arguments.length;
var i__12776__auto___23044 = (0);
while(true){
if((i__12776__auto___23044 < len__12775__auto___23043)){
args__12782__auto__.push((arguments[i__12776__auto___23044]));

var G__23045 = (i__12776__auto___23044 + (1));
i__12776__auto___23044 = G__23045;
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

cljs_web3.personal.send_transaction.cljs$lang$applyTo = (function (seq23041){
var G__23042 = cljs.core.first.call(null,seq23041);
var seq23041__$1 = cljs.core.next.call(null,seq23041);
return cljs_web3.personal.send_transaction.cljs$core$IFn$_invoke$arity$variadic(G__23042,seq23041__$1);
});

cljs_web3.personal.sign = (function cljs_web3$personal$sign(var_args){
var args__12782__auto__ = [];
var len__12775__auto___23048 = arguments.length;
var i__12776__auto___23049 = (0);
while(true){
if((i__12776__auto___23049 < len__12775__auto___23048)){
args__12782__auto__.push((arguments[i__12776__auto___23049]));

var G__23050 = (i__12776__auto___23049 + (1));
i__12776__auto___23049 = G__23050;
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

cljs_web3.personal.sign.cljs$lang$applyTo = (function (seq23046){
var G__23047 = cljs.core.first.call(null,seq23046);
var seq23046__$1 = cljs.core.next.call(null,seq23046);
return cljs_web3.personal.sign.cljs$core$IFn$_invoke$arity$variadic(G__23047,seq23046__$1);
});


//# sourceMappingURL=personal.js.map