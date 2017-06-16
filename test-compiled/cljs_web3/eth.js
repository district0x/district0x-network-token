// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.eth');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.eth.eth = (function cljs_web3$eth$eth(web3){
return (web3["eth"]);
});
cljs_web3.eth.get_compile = (function cljs_web3$eth$get_compile(web3){
return (cljs_web3.eth.eth.call(null,web3)["compile"]);
});
cljs_web3.eth.default_account = (function cljs_web3$eth$default_account(web3){
return (web3["eth"]["defaultAccount"]);
});
cljs_web3.eth.set_default_account_BANG_ = (function cljs_web3$eth$set_default_account_BANG_(web3,hex_str){
return (cljs_web3.eth.eth.call(null,web3)["defaultAccount"] = hex_str);
});
cljs_web3.eth.default_block = (function cljs_web3$eth$default_block(web3){
return (web3["eth"]["defaultBlock"]);
});
cljs_web3.eth.set_default_block_BANG_ = (function cljs_web3$eth$set_default_block_BANG_(web3,block){
return (cljs_web3.eth.eth.call(null,web3)["defaultBlock"] = block);
});
cljs_web3.eth.syncing = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","syncing");
cljs_web3.eth.syncing_QMARK_ = (function cljs_web3$eth$syncing_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24620 = arguments.length;
var i__12776__auto___24621 = (0);
while(true){
if((i__12776__auto___24621 < len__12775__auto___24620)){
args__12782__auto__.push((arguments[i__12776__auto___24621]));

var G__24622 = (i__12776__auto___24621 + (1));
i__12776__auto___24621 = G__24622;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"isSyncing",args);
});

cljs_web3.eth.syncing_QMARK_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.syncing_QMARK_.cljs$lang$applyTo = (function (seq24618){
var G__24619 = cljs.core.first.call(null,seq24618);
var seq24618__$1 = cljs.core.next.call(null,seq24618);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__24619,seq24618__$1);
});

cljs_web3.eth.coinbase = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","coinbase");
cljs_web3.eth.mining_QMARK_ = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","mining");
cljs_web3.eth.hashrate = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","hashrate");
cljs_web3.eth.gas_price = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","gasPrice");
cljs_web3.eth.accounts = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","accounts");
cljs_web3.eth.block_number = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","blockNumber");
cljs_web3.eth.register = (function cljs_web3$eth$register(web3,address){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"register",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
cljs_web3.eth.unregister = (function cljs_web3$eth$unregister(web3,address){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"unRegister",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
cljs_web3.eth.get_balance = (function cljs_web3$eth$get_balance(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24629 = arguments.length;
var i__12776__auto___24630 = (0);
while(true){
if((i__12776__auto___24630 < len__12775__auto___24629)){
args__12782__auto__.push((arguments[i__12776__auto___24630]));

var G__24631 = (i__12776__auto___24630 + (1));
i__12776__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24625){
var vec__24626 = p__24625;
var address = cljs.core.nth.call(null,vec__24626,(0),null);
var default_block = cljs.core.nth.call(null,vec__24626,(1),null);
var args = vec__24626;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBalance",args);
});

cljs_web3.eth.get_balance.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_balance.cljs$lang$applyTo = (function (seq24623){
var G__24624 = cljs.core.first.call(null,seq24623);
var seq24623__$1 = cljs.core.next.call(null,seq24623);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(G__24624,seq24623__$1);
});

cljs_web3.eth.get_storage_at = (function cljs_web3$eth$get_storage_at(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24638 = arguments.length;
var i__12776__auto___24639 = (0);
while(true){
if((i__12776__auto___24639 < len__12775__auto___24638)){
args__12782__auto__.push((arguments[i__12776__auto___24639]));

var G__24640 = (i__12776__auto___24639 + (1));
i__12776__auto___24639 = G__24640;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24634){
var vec__24635 = p__24634;
var address = cljs.core.nth.call(null,vec__24635,(0),null);
var position = cljs.core.nth.call(null,vec__24635,(1),null);
var default_block = cljs.core.nth.call(null,vec__24635,(2),null);
var args = vec__24635;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getStorageAt",args);
});

cljs_web3.eth.get_storage_at.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_storage_at.cljs$lang$applyTo = (function (seq24632){
var G__24633 = cljs.core.first.call(null,seq24632);
var seq24632__$1 = cljs.core.next.call(null,seq24632);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic(G__24633,seq24632__$1);
});

cljs_web3.eth.get_code = (function cljs_web3$eth$get_code(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24647 = arguments.length;
var i__12776__auto___24648 = (0);
while(true){
if((i__12776__auto___24648 < len__12775__auto___24647)){
args__12782__auto__.push((arguments[i__12776__auto___24648]));

var G__24649 = (i__12776__auto___24648 + (1));
i__12776__auto___24648 = G__24649;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24643){
var vec__24644 = p__24643;
var address = cljs.core.nth.call(null,vec__24644,(0),null);
var default_block = cljs.core.nth.call(null,vec__24644,(1),null);
var args = vec__24644;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getCode",args);
});

cljs_web3.eth.get_code.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_code.cljs$lang$applyTo = (function (seq24641){
var G__24642 = cljs.core.first.call(null,seq24641);
var seq24641__$1 = cljs.core.next.call(null,seq24641);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic(G__24642,seq24641__$1);
});

cljs_web3.eth.get_block = (function cljs_web3$eth$get_block(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24656 = arguments.length;
var i__12776__auto___24657 = (0);
while(true){
if((i__12776__auto___24657 < len__12775__auto___24656)){
args__12782__auto__.push((arguments[i__12776__auto___24657]));

var G__24658 = (i__12776__auto___24657 + (1));
i__12776__auto___24657 = G__24658;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24652){
var vec__24653 = p__24652;
var block_hash_or_number = cljs.core.nth.call(null,vec__24653,(0),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__24653,(1),null);
var args = vec__24653;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBlock",args);
});

cljs_web3.eth.get_block.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_block.cljs$lang$applyTo = (function (seq24650){
var G__24651 = cljs.core.first.call(null,seq24650);
var seq24650__$1 = cljs.core.next.call(null,seq24650);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic(G__24651,seq24650__$1);
});

cljs_web3.eth.get_block_transaction_count = (function cljs_web3$eth$get_block_transaction_count(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24665 = arguments.length;
var i__12776__auto___24666 = (0);
while(true){
if((i__12776__auto___24666 < len__12775__auto___24665)){
args__12782__auto__.push((arguments[i__12776__auto___24666]));

var G__24667 = (i__12776__auto___24666 + (1));
i__12776__auto___24666 = G__24667;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24661){
var vec__24662 = p__24661;
var block_hash_or_number = cljs.core.nth.call(null,vec__24662,(0),null);
var args = vec__24662;
cljs_web3.eth.eth.call(null,web3);


return args;
});

cljs_web3.eth.get_block_transaction_count.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_block_transaction_count.cljs$lang$applyTo = (function (seq24659){
var G__24660 = cljs.core.first.call(null,seq24659);
var seq24659__$1 = cljs.core.next.call(null,seq24659);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic(G__24660,seq24659__$1);
});

cljs_web3.eth.get_uncle = (function cljs_web3$eth$get_uncle(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24674 = arguments.length;
var i__12776__auto___24675 = (0);
while(true){
if((i__12776__auto___24675 < len__12775__auto___24674)){
args__12782__auto__.push((arguments[i__12776__auto___24675]));

var G__24676 = (i__12776__auto___24675 + (1));
i__12776__auto___24675 = G__24676;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24670){
var vec__24671 = p__24670;
var block_hash_or_number = cljs.core.nth.call(null,vec__24671,(0),null);
var uncle_number = cljs.core.nth.call(null,vec__24671,(1),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__24671,(2),null);
var args = vec__24671;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getUncle",args);
});

cljs_web3.eth.get_uncle.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_uncle.cljs$lang$applyTo = (function (seq24668){
var G__24669 = cljs.core.first.call(null,seq24668);
var seq24668__$1 = cljs.core.next.call(null,seq24668);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic(G__24669,seq24668__$1);
});

cljs_web3.eth.get_transaction = (function cljs_web3$eth$get_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24683 = arguments.length;
var i__12776__auto___24684 = (0);
while(true){
if((i__12776__auto___24684 < len__12775__auto___24683)){
args__12782__auto__.push((arguments[i__12776__auto___24684]));

var G__24685 = (i__12776__auto___24684 + (1));
i__12776__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24679){
var vec__24680 = p__24679;
var transaction_hash = cljs.core.nth.call(null,vec__24680,(0),null);
var args = vec__24680;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransaction",args);
});

cljs_web3.eth.get_transaction.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction.cljs$lang$applyTo = (function (seq24677){
var G__24678 = cljs.core.first.call(null,seq24677);
var seq24677__$1 = cljs.core.next.call(null,seq24677);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic(G__24678,seq24677__$1);
});

cljs_web3.eth.get_transaction_from_block = (function cljs_web3$eth$get_transaction_from_block(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24692 = arguments.length;
var i__12776__auto___24693 = (0);
while(true){
if((i__12776__auto___24693 < len__12775__auto___24692)){
args__12782__auto__.push((arguments[i__12776__auto___24693]));

var G__24694 = (i__12776__auto___24693 + (1));
i__12776__auto___24693 = G__24694;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24688){
var vec__24689 = p__24688;
var block_hash_or_number = cljs.core.nth.call(null,vec__24689,(0),null);
var index = cljs.core.nth.call(null,vec__24689,(1),null);
var args = vec__24689;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionFromBlock",args);
});

cljs_web3.eth.get_transaction_from_block.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_from_block.cljs$lang$applyTo = (function (seq24686){
var G__24687 = cljs.core.first.call(null,seq24686);
var seq24686__$1 = cljs.core.next.call(null,seq24686);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic(G__24687,seq24686__$1);
});

cljs_web3.eth.get_transaction_receipt = (function cljs_web3$eth$get_transaction_receipt(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24701 = arguments.length;
var i__12776__auto___24702 = (0);
while(true){
if((i__12776__auto___24702 < len__12775__auto___24701)){
args__12782__auto__.push((arguments[i__12776__auto___24702]));

var G__24703 = (i__12776__auto___24702 + (1));
i__12776__auto___24702 = G__24703;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24697){
var vec__24698 = p__24697;
var transaction_hash = cljs.core.nth.call(null,vec__24698,(0),null);
var args = vec__24698;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionReceipt",args);
});

cljs_web3.eth.get_transaction_receipt.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_receipt.cljs$lang$applyTo = (function (seq24695){
var G__24696 = cljs.core.first.call(null,seq24695);
var seq24695__$1 = cljs.core.next.call(null,seq24695);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic(G__24696,seq24695__$1);
});

cljs_web3.eth.get_transaction_count = (function cljs_web3$eth$get_transaction_count(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24710 = arguments.length;
var i__12776__auto___24711 = (0);
while(true){
if((i__12776__auto___24711 < len__12775__auto___24710)){
args__12782__auto__.push((arguments[i__12776__auto___24711]));

var G__24712 = (i__12776__auto___24711 + (1));
i__12776__auto___24711 = G__24712;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24706){
var vec__24707 = p__24706;
var address = cljs.core.nth.call(null,vec__24707,(0),null);
var default_block = cljs.core.nth.call(null,vec__24707,(1),null);
var args = vec__24707;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionCount",args);
});

cljs_web3.eth.get_transaction_count.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_count.cljs$lang$applyTo = (function (seq24704){
var G__24705 = cljs.core.first.call(null,seq24704);
var seq24704__$1 = cljs.core.next.call(null,seq24704);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic(G__24705,seq24704__$1);
});

cljs_web3.eth.send_transaction_BANG_ = (function cljs_web3$eth$send_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24719 = arguments.length;
var i__12776__auto___24720 = (0);
while(true){
if((i__12776__auto___24720 < len__12775__auto___24719)){
args__12782__auto__.push((arguments[i__12776__auto___24720]));

var G__24721 = (i__12776__auto___24720 + (1));
i__12776__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24715){
var vec__24716 = p__24715;
var transaction_object = cljs.core.nth.call(null,vec__24716,(0),null);
var args = vec__24716;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendTransaction",args);
});

cljs_web3.eth.send_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_transaction_BANG_.cljs$lang$applyTo = (function (seq24713){
var G__24714 = cljs.core.first.call(null,seq24713);
var seq24713__$1 = cljs.core.next.call(null,seq24713);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24714,seq24713__$1);
});

cljs_web3.eth.send_raw_transaction_BANG_ = (function cljs_web3$eth$send_raw_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24728 = arguments.length;
var i__12776__auto___24729 = (0);
while(true){
if((i__12776__auto___24729 < len__12775__auto___24728)){
args__12782__auto__.push((arguments[i__12776__auto___24729]));

var G__24730 = (i__12776__auto___24729 + (1));
i__12776__auto___24729 = G__24730;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24724){
var vec__24725 = p__24724;
var seq__24726 = cljs.core.seq.call(null,vec__24725);
var first__24727 = cljs.core.first.call(null,seq__24726);
var seq__24726__$1 = cljs.core.next.call(null,seq__24726);
var signed_transaction_data = first__24727;
var args = seq__24726__$1;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendRawTransaction",args);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$applyTo = (function (seq24722){
var G__24723 = cljs.core.first.call(null,seq24722);
var seq24722__$1 = cljs.core.next.call(null,seq24722);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24723,seq24722__$1);
});

cljs_web3.eth.send_iban_transaction_BANG_ = (function cljs_web3$eth$send_iban_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24737 = arguments.length;
var i__12776__auto___24738 = (0);
while(true){
if((i__12776__auto___24738 < len__12775__auto___24737)){
args__12782__auto__.push((arguments[i__12776__auto___24738]));

var G__24739 = (i__12776__auto___24738 + (1));
i__12776__auto___24738 = G__24739;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24733){
var vec__24734 = p__24733;
var seq__24735 = cljs.core.seq.call(null,vec__24734);
var first__24736 = cljs.core.first.call(null,seq__24735);
var seq__24735__$1 = cljs.core.next.call(null,seq__24735);
var signed_transaction_data = first__24736;
var args = seq__24735__$1;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendIBANTransaction",args);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$applyTo = (function (seq24731){
var G__24732 = cljs.core.first.call(null,seq24731);
var seq24731__$1 = cljs.core.next.call(null,seq24731);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24732,seq24731__$1);
});

cljs_web3.eth.sign = (function cljs_web3$eth$sign(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24746 = arguments.length;
var i__12776__auto___24747 = (0);
while(true){
if((i__12776__auto___24747 < len__12775__auto___24746)){
args__12782__auto__.push((arguments[i__12776__auto___24747]));

var G__24748 = (i__12776__auto___24747 + (1));
i__12776__auto___24747 = G__24748;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24742){
var vec__24743 = p__24742;
var address = cljs.core.nth.call(null,vec__24743,(0),null);
var data_to_sign = cljs.core.nth.call(null,vec__24743,(1),null);
var args = vec__24743;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sign",args);
});

cljs_web3.eth.sign.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.sign.cljs$lang$applyTo = (function (seq24740){
var G__24741 = cljs.core.first.call(null,seq24740);
var seq24740__$1 = cljs.core.next.call(null,seq24740);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic(G__24741,seq24740__$1);
});

cljs_web3.eth.sign_transaction = (function cljs_web3$eth$sign_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24751 = arguments.length;
var i__12776__auto___24752 = (0);
while(true){
if((i__12776__auto___24752 < len__12775__auto___24751)){
args__12782__auto__.push((arguments[i__12776__auto___24752]));

var G__24753 = (i__12776__auto___24752 + (1));
i__12776__auto___24752 = G__24753;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"signTransaction",args);
});

cljs_web3.eth.sign_transaction.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.sign_transaction.cljs$lang$applyTo = (function (seq24749){
var G__24750 = cljs.core.first.call(null,seq24749);
var seq24749__$1 = cljs.core.next.call(null,seq24749);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic(G__24750,seq24749__$1);
});

cljs_web3.eth.call_BANG_ = (function cljs_web3$eth$call_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24760 = arguments.length;
var i__12776__auto___24761 = (0);
while(true){
if((i__12776__auto___24761 < len__12775__auto___24760)){
args__12782__auto__.push((arguments[i__12776__auto___24761]));

var G__24762 = (i__12776__auto___24761 + (1));
i__12776__auto___24761 = G__24762;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24756){
var vec__24757 = p__24756;
var call_object = cljs.core.nth.call(null,vec__24757,(0),null);
var default_block = cljs.core.nth.call(null,vec__24757,(1),null);
var args = vec__24757;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"call",args);
});

cljs_web3.eth.call_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.call_BANG_.cljs$lang$applyTo = (function (seq24754){
var G__24755 = cljs.core.first.call(null,seq24754);
var seq24754__$1 = cljs.core.next.call(null,seq24754);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24755,seq24754__$1);
});

cljs_web3.eth.estimate_gas = (function cljs_web3$eth$estimate_gas(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24769 = arguments.length;
var i__12776__auto___24770 = (0);
while(true){
if((i__12776__auto___24770 < len__12775__auto___24769)){
args__12782__auto__.push((arguments[i__12776__auto___24770]));

var G__24771 = (i__12776__auto___24770 + (1));
i__12776__auto___24770 = G__24771;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24765){
var vec__24766 = p__24765;
var call_obejct = cljs.core.nth.call(null,vec__24766,(0),null);
var args = vec__24766;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"estimateGas",args);
});

cljs_web3.eth.estimate_gas.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.estimate_gas.cljs$lang$applyTo = (function (seq24763){
var G__24764 = cljs.core.first.call(null,seq24763);
var seq24763__$1 = cljs.core.next.call(null,seq24763);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic(G__24764,seq24763__$1);
});

cljs_web3.eth.filter = (function cljs_web3$eth$filter(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24774 = arguments.length;
var i__12776__auto___24775 = (0);
while(true){
if((i__12776__auto___24775 < len__12775__auto___24774)){
args__12782__auto__.push((arguments[i__12776__auto___24775]));

var G__24776 = (i__12776__auto___24775 + (1));
i__12776__auto___24775 = G__24776;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"filter",args);
});

cljs_web3.eth.filter.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.filter.cljs$lang$applyTo = (function (seq24772){
var G__24773 = cljs.core.first.call(null,seq24772);
var seq24772__$1 = cljs.core.next.call(null,seq24772);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic(G__24773,seq24772__$1);
});

cljs_web3.eth.get_compilers = (function cljs_web3$eth$get_compilers(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24779 = arguments.length;
var i__12776__auto___24780 = (0);
while(true){
if((i__12776__auto___24780 < len__12775__auto___24779)){
args__12782__auto__.push((arguments[i__12776__auto___24780]));

var G__24781 = (i__12776__auto___24780 + (1));
i__12776__auto___24780 = G__24781;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getCompilers",args);
});

cljs_web3.eth.get_compilers.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_compilers.cljs$lang$applyTo = (function (seq24777){
var G__24778 = cljs.core.first.call(null,seq24777);
var seq24777__$1 = cljs.core.next.call(null,seq24777);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic(G__24778,seq24777__$1);
});

cljs_web3.eth.compile_solidity = (function cljs_web3$eth$compile_solidity(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24788 = arguments.length;
var i__12776__auto___24789 = (0);
while(true){
if((i__12776__auto___24789 < len__12775__auto___24788)){
args__12782__auto__.push((arguments[i__12776__auto___24789]));

var G__24790 = (i__12776__auto___24789 + (1));
i__12776__auto___24789 = G__24790;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24784){
var vec__24785 = p__24784;
var source_string = cljs.core.nth.call(null,vec__24785,(0),null);
var args = vec__24785;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"solidity",args);
});

cljs_web3.eth.compile_solidity.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_solidity.cljs$lang$applyTo = (function (seq24782){
var G__24783 = cljs.core.first.call(null,seq24782);
var seq24782__$1 = cljs.core.next.call(null,seq24782);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic(G__24783,seq24782__$1);
});

cljs_web3.eth.compile_lll = (function cljs_web3$eth$compile_lll(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24797 = arguments.length;
var i__12776__auto___24798 = (0);
while(true){
if((i__12776__auto___24798 < len__12775__auto___24797)){
args__12782__auto__.push((arguments[i__12776__auto___24798]));

var G__24799 = (i__12776__auto___24798 + (1));
i__12776__auto___24798 = G__24799;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24793){
var vec__24794 = p__24793;
var source_string = cljs.core.nth.call(null,vec__24794,(0),null);
var args = vec__24794;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"lll",args);
});

cljs_web3.eth.compile_lll.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_lll.cljs$lang$applyTo = (function (seq24791){
var G__24792 = cljs.core.first.call(null,seq24791);
var seq24791__$1 = cljs.core.next.call(null,seq24791);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic(G__24792,seq24791__$1);
});

cljs_web3.eth.compile_serpent = (function cljs_web3$eth$compile_serpent(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24806 = arguments.length;
var i__12776__auto___24807 = (0);
while(true){
if((i__12776__auto___24807 < len__12775__auto___24806)){
args__12782__auto__.push((arguments[i__12776__auto___24807]));

var G__24808 = (i__12776__auto___24807 + (1));
i__12776__auto___24807 = G__24808;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24802){
var vec__24803 = p__24802;
var source_string = cljs.core.nth.call(null,vec__24803,(0),null);
var args = vec__24803;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"serpent",args);
});

cljs_web3.eth.compile_serpent.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_serpent.cljs$lang$applyTo = (function (seq24800){
var G__24801 = cljs.core.first.call(null,seq24800);
var seq24800__$1 = cljs.core.next.call(null,seq24800);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic(G__24801,seq24800__$1);
});

cljs_web3.eth.namereg = (function cljs_web3$eth$namereg(web3){
return (cljs_web3.eth.eth.call(null,web3)["namereg"]);
});
cljs_web3.eth.contract = (function cljs_web3$eth$contract(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24815 = arguments.length;
var i__12776__auto___24816 = (0);
while(true){
if((i__12776__auto___24816 < len__12775__auto___24815)){
args__12782__auto__.push((arguments[i__12776__auto___24816]));

var G__24817 = (i__12776__auto___24816 + (1));
i__12776__auto___24816 = G__24817;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24811){
var vec__24812 = p__24811;
var abi = cljs.core.nth.call(null,vec__24812,(0),null);
var args = vec__24812;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"contract",args);
});

cljs_web3.eth.contract.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.contract.cljs$lang$applyTo = (function (seq24809){
var G__24810 = cljs.core.first.call(null,seq24809);
var seq24809__$1 = cljs.core.next.call(null,seq24809);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(G__24810,seq24809__$1);
});

cljs_web3.eth.contract_at = (function cljs_web3$eth$contract_at(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24821 = arguments.length;
var i__12776__auto___24822 = (0);
while(true){
if((i__12776__auto___24822 < len__12775__auto___24821)){
args__12782__auto__.push((arguments[i__12776__auto___24822]));

var G__24823 = (i__12776__auto___24822 + (1));
i__12776__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.contract.call(null,web3,abi),"at",args);
});

cljs_web3.eth.contract_at.cljs$lang$maxFixedArity = (2);

cljs_web3.eth.contract_at.cljs$lang$applyTo = (function (seq24818){
var G__24819 = cljs.core.first.call(null,seq24818);
var seq24818__$1 = cljs.core.next.call(null,seq24818);
var G__24820 = cljs.core.first.call(null,seq24818__$1);
var seq24818__$2 = cljs.core.next.call(null,seq24818__$1);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic(G__24819,G__24820,seq24818__$2);
});

cljs_web3.eth.contract_new = (function cljs_web3$eth$contract_new(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24827 = arguments.length;
var i__12776__auto___24828 = (0);
while(true){
if((i__12776__auto___24828 < len__12775__auto___24827)){
args__12782__auto__.push((arguments[i__12776__auto___24828]));

var G__24829 = (i__12776__auto___24828 + (1));
i__12776__auto___24828 = G__24829;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.contract.call(null,web3,abi),"new",args);
});

cljs_web3.eth.contract_new.cljs$lang$maxFixedArity = (2);

cljs_web3.eth.contract_new.cljs$lang$applyTo = (function (seq24824){
var G__24825 = cljs.core.first.call(null,seq24824);
var seq24824__$1 = cljs.core.next.call(null,seq24824);
var G__24826 = cljs.core.first.call(null,seq24824__$1);
var seq24824__$2 = cljs.core.next.call(null,seq24824__$1);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic(G__24825,G__24826,seq24824__$2);
});

cljs_web3.eth.contract_call = (function cljs_web3$eth$contract_call(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24833 = arguments.length;
var i__12776__auto___24834 = (0);
while(true){
if((i__12776__auto___24834 < len__12775__auto___24833)){
args__12782__auto__.push((arguments[i__12776__auto___24834]));

var G__24835 = (i__12776__auto___24834 + (1));
i__12776__auto___24834 = G__24835;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
return cljs_web3.utils.js_apply.call(null,contract_instance,method,args);
});

cljs_web3.eth.contract_call.cljs$lang$maxFixedArity = (2);

cljs_web3.eth.contract_call.cljs$lang$applyTo = (function (seq24830){
var G__24831 = cljs.core.first.call(null,seq24830);
var seq24830__$1 = cljs.core.next.call(null,seq24830);
var G__24832 = cljs.core.first.call(null,seq24830__$1);
var seq24830__$2 = cljs.core.next.call(null,seq24830__$1);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(G__24831,G__24832,seq24830__$2);
});

cljs_web3.eth.stop_watching_BANG_ = (function cljs_web3$eth$stop_watching_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___24838 = arguments.length;
var i__12776__auto___24839 = (0);
while(true){
if((i__12776__auto___24839 < len__12775__auto___24838)){
args__12782__auto__.push((arguments[i__12776__auto___24839]));

var G__24840 = (i__12776__auto___24839 + (1));
i__12776__auto___24839 = G__24840;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (filter,args){
return cljs_web3.utils.js_apply.call(null,filter,"stopWatching",args);
});

cljs_web3.eth.stop_watching_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.stop_watching_BANG_.cljs$lang$applyTo = (function (seq24836){
var G__24837 = cljs.core.first.call(null,seq24836);
var seq24836__$1 = cljs.core.next.call(null,seq24836);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24837,seq24836__$1);
});

