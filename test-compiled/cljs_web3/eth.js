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
var len__12775__auto___21203 = arguments.length;
var i__12776__auto___21204 = (0);
while(true){
if((i__12776__auto___21204 < len__12775__auto___21203)){
args__12782__auto__.push((arguments[i__12776__auto___21204]));

var G__21205 = (i__12776__auto___21204 + (1));
i__12776__auto___21204 = G__21205;
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

cljs_web3.eth.syncing_QMARK_.cljs$lang$applyTo = (function (seq21201){
var G__21202 = cljs.core.first.call(null,seq21201);
var seq21201__$1 = cljs.core.next.call(null,seq21201);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__21202,seq21201__$1);
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
var len__12775__auto___21212 = arguments.length;
var i__12776__auto___21213 = (0);
while(true){
if((i__12776__auto___21213 < len__12775__auto___21212)){
args__12782__auto__.push((arguments[i__12776__auto___21213]));

var G__21214 = (i__12776__auto___21213 + (1));
i__12776__auto___21213 = G__21214;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21208){
var vec__21209 = p__21208;
var address = cljs.core.nth.call(null,vec__21209,(0),null);
var default_block = cljs.core.nth.call(null,vec__21209,(1),null);
var args = vec__21209;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBalance",args);
});

cljs_web3.eth.get_balance.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_balance.cljs$lang$applyTo = (function (seq21206){
var G__21207 = cljs.core.first.call(null,seq21206);
var seq21206__$1 = cljs.core.next.call(null,seq21206);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic(G__21207,seq21206__$1);
});

cljs_web3.eth.get_storage_at = (function cljs_web3$eth$get_storage_at(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21221 = arguments.length;
var i__12776__auto___21222 = (0);
while(true){
if((i__12776__auto___21222 < len__12775__auto___21221)){
args__12782__auto__.push((arguments[i__12776__auto___21222]));

var G__21223 = (i__12776__auto___21222 + (1));
i__12776__auto___21222 = G__21223;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21217){
var vec__21218 = p__21217;
var address = cljs.core.nth.call(null,vec__21218,(0),null);
var position = cljs.core.nth.call(null,vec__21218,(1),null);
var default_block = cljs.core.nth.call(null,vec__21218,(2),null);
var args = vec__21218;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getStorageAt",args);
});

cljs_web3.eth.get_storage_at.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_storage_at.cljs$lang$applyTo = (function (seq21215){
var G__21216 = cljs.core.first.call(null,seq21215);
var seq21215__$1 = cljs.core.next.call(null,seq21215);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic(G__21216,seq21215__$1);
});

cljs_web3.eth.get_code = (function cljs_web3$eth$get_code(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21230 = arguments.length;
var i__12776__auto___21231 = (0);
while(true){
if((i__12776__auto___21231 < len__12775__auto___21230)){
args__12782__auto__.push((arguments[i__12776__auto___21231]));

var G__21232 = (i__12776__auto___21231 + (1));
i__12776__auto___21231 = G__21232;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21226){
var vec__21227 = p__21226;
var address = cljs.core.nth.call(null,vec__21227,(0),null);
var default_block = cljs.core.nth.call(null,vec__21227,(1),null);
var args = vec__21227;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getCode",args);
});

cljs_web3.eth.get_code.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_code.cljs$lang$applyTo = (function (seq21224){
var G__21225 = cljs.core.first.call(null,seq21224);
var seq21224__$1 = cljs.core.next.call(null,seq21224);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic(G__21225,seq21224__$1);
});

cljs_web3.eth.get_block = (function cljs_web3$eth$get_block(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21239 = arguments.length;
var i__12776__auto___21240 = (0);
while(true){
if((i__12776__auto___21240 < len__12775__auto___21239)){
args__12782__auto__.push((arguments[i__12776__auto___21240]));

var G__21241 = (i__12776__auto___21240 + (1));
i__12776__auto___21240 = G__21241;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21235){
var vec__21236 = p__21235;
var block_hash_or_number = cljs.core.nth.call(null,vec__21236,(0),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__21236,(1),null);
var args = vec__21236;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBlock",args);
});

cljs_web3.eth.get_block.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_block.cljs$lang$applyTo = (function (seq21233){
var G__21234 = cljs.core.first.call(null,seq21233);
var seq21233__$1 = cljs.core.next.call(null,seq21233);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic(G__21234,seq21233__$1);
});

cljs_web3.eth.get_block_transaction_count = (function cljs_web3$eth$get_block_transaction_count(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21248 = arguments.length;
var i__12776__auto___21249 = (0);
while(true){
if((i__12776__auto___21249 < len__12775__auto___21248)){
args__12782__auto__.push((arguments[i__12776__auto___21249]));

var G__21250 = (i__12776__auto___21249 + (1));
i__12776__auto___21249 = G__21250;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21244){
var vec__21245 = p__21244;
var block_hash_or_number = cljs.core.nth.call(null,vec__21245,(0),null);
var args = vec__21245;
cljs_web3.eth.eth.call(null,web3);


return args;
});

cljs_web3.eth.get_block_transaction_count.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_block_transaction_count.cljs$lang$applyTo = (function (seq21242){
var G__21243 = cljs.core.first.call(null,seq21242);
var seq21242__$1 = cljs.core.next.call(null,seq21242);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic(G__21243,seq21242__$1);
});

cljs_web3.eth.get_uncle = (function cljs_web3$eth$get_uncle(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21257 = arguments.length;
var i__12776__auto___21258 = (0);
while(true){
if((i__12776__auto___21258 < len__12775__auto___21257)){
args__12782__auto__.push((arguments[i__12776__auto___21258]));

var G__21259 = (i__12776__auto___21258 + (1));
i__12776__auto___21258 = G__21259;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21253){
var vec__21254 = p__21253;
var block_hash_or_number = cljs.core.nth.call(null,vec__21254,(0),null);
var uncle_number = cljs.core.nth.call(null,vec__21254,(1),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__21254,(2),null);
var args = vec__21254;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getUncle",args);
});

cljs_web3.eth.get_uncle.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_uncle.cljs$lang$applyTo = (function (seq21251){
var G__21252 = cljs.core.first.call(null,seq21251);
var seq21251__$1 = cljs.core.next.call(null,seq21251);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic(G__21252,seq21251__$1);
});

cljs_web3.eth.get_transaction = (function cljs_web3$eth$get_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21266 = arguments.length;
var i__12776__auto___21267 = (0);
while(true){
if((i__12776__auto___21267 < len__12775__auto___21266)){
args__12782__auto__.push((arguments[i__12776__auto___21267]));

var G__21268 = (i__12776__auto___21267 + (1));
i__12776__auto___21267 = G__21268;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21262){
var vec__21263 = p__21262;
var transaction_hash = cljs.core.nth.call(null,vec__21263,(0),null);
var args = vec__21263;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransaction",args);
});

cljs_web3.eth.get_transaction.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction.cljs$lang$applyTo = (function (seq21260){
var G__21261 = cljs.core.first.call(null,seq21260);
var seq21260__$1 = cljs.core.next.call(null,seq21260);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic(G__21261,seq21260__$1);
});

cljs_web3.eth.get_transaction_from_block = (function cljs_web3$eth$get_transaction_from_block(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21275 = arguments.length;
var i__12776__auto___21276 = (0);
while(true){
if((i__12776__auto___21276 < len__12775__auto___21275)){
args__12782__auto__.push((arguments[i__12776__auto___21276]));

var G__21277 = (i__12776__auto___21276 + (1));
i__12776__auto___21276 = G__21277;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21271){
var vec__21272 = p__21271;
var block_hash_or_number = cljs.core.nth.call(null,vec__21272,(0),null);
var index = cljs.core.nth.call(null,vec__21272,(1),null);
var args = vec__21272;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionFromBlock",args);
});

cljs_web3.eth.get_transaction_from_block.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_from_block.cljs$lang$applyTo = (function (seq21269){
var G__21270 = cljs.core.first.call(null,seq21269);
var seq21269__$1 = cljs.core.next.call(null,seq21269);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic(G__21270,seq21269__$1);
});

cljs_web3.eth.get_transaction_receipt = (function cljs_web3$eth$get_transaction_receipt(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21284 = arguments.length;
var i__12776__auto___21285 = (0);
while(true){
if((i__12776__auto___21285 < len__12775__auto___21284)){
args__12782__auto__.push((arguments[i__12776__auto___21285]));

var G__21286 = (i__12776__auto___21285 + (1));
i__12776__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21280){
var vec__21281 = p__21280;
var transaction_hash = cljs.core.nth.call(null,vec__21281,(0),null);
var args = vec__21281;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionReceipt",args);
});

cljs_web3.eth.get_transaction_receipt.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_receipt.cljs$lang$applyTo = (function (seq21278){
var G__21279 = cljs.core.first.call(null,seq21278);
var seq21278__$1 = cljs.core.next.call(null,seq21278);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic(G__21279,seq21278__$1);
});

cljs_web3.eth.get_transaction_count = (function cljs_web3$eth$get_transaction_count(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21293 = arguments.length;
var i__12776__auto___21294 = (0);
while(true){
if((i__12776__auto___21294 < len__12775__auto___21293)){
args__12782__auto__.push((arguments[i__12776__auto___21294]));

var G__21295 = (i__12776__auto___21294 + (1));
i__12776__auto___21294 = G__21295;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21289){
var vec__21290 = p__21289;
var address = cljs.core.nth.call(null,vec__21290,(0),null);
var default_block = cljs.core.nth.call(null,vec__21290,(1),null);
var args = vec__21290;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionCount",args);
});

cljs_web3.eth.get_transaction_count.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.get_transaction_count.cljs$lang$applyTo = (function (seq21287){
var G__21288 = cljs.core.first.call(null,seq21287);
var seq21287__$1 = cljs.core.next.call(null,seq21287);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic(G__21288,seq21287__$1);
});

cljs_web3.eth.send_transaction_BANG_ = (function cljs_web3$eth$send_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21302 = arguments.length;
var i__12776__auto___21303 = (0);
while(true){
if((i__12776__auto___21303 < len__12775__auto___21302)){
args__12782__auto__.push((arguments[i__12776__auto___21303]));

var G__21304 = (i__12776__auto___21303 + (1));
i__12776__auto___21303 = G__21304;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21298){
var vec__21299 = p__21298;
var transaction_object = cljs.core.nth.call(null,vec__21299,(0),null);
var args = vec__21299;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendTransaction",args);
});

cljs_web3.eth.send_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_transaction_BANG_.cljs$lang$applyTo = (function (seq21296){
var G__21297 = cljs.core.first.call(null,seq21296);
var seq21296__$1 = cljs.core.next.call(null,seq21296);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21297,seq21296__$1);
});

cljs_web3.eth.send_raw_transaction_BANG_ = (function cljs_web3$eth$send_raw_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21311 = arguments.length;
var i__12776__auto___21312 = (0);
while(true){
if((i__12776__auto___21312 < len__12775__auto___21311)){
args__12782__auto__.push((arguments[i__12776__auto___21312]));

var G__21313 = (i__12776__auto___21312 + (1));
i__12776__auto___21312 = G__21313;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21307){
var vec__21308 = p__21307;
var seq__21309 = cljs.core.seq.call(null,vec__21308);
var first__21310 = cljs.core.first.call(null,seq__21309);
var seq__21309__$1 = cljs.core.next.call(null,seq__21309);
var signed_transaction_data = first__21310;
var args = seq__21309__$1;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendRawTransaction",args);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$applyTo = (function (seq21305){
var G__21306 = cljs.core.first.call(null,seq21305);
var seq21305__$1 = cljs.core.next.call(null,seq21305);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21306,seq21305__$1);
});

cljs_web3.eth.send_iban_transaction_BANG_ = (function cljs_web3$eth$send_iban_transaction_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21320 = arguments.length;
var i__12776__auto___21321 = (0);
while(true){
if((i__12776__auto___21321 < len__12775__auto___21320)){
args__12782__auto__.push((arguments[i__12776__auto___21321]));

var G__21322 = (i__12776__auto___21321 + (1));
i__12776__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21316){
var vec__21317 = p__21316;
var seq__21318 = cljs.core.seq.call(null,vec__21317);
var first__21319 = cljs.core.first.call(null,seq__21318);
var seq__21318__$1 = cljs.core.next.call(null,seq__21318);
var signed_transaction_data = first__21319;
var args = seq__21318__$1;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendIBANTransaction",args);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$applyTo = (function (seq21314){
var G__21315 = cljs.core.first.call(null,seq21314);
var seq21314__$1 = cljs.core.next.call(null,seq21314);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21315,seq21314__$1);
});

cljs_web3.eth.sign = (function cljs_web3$eth$sign(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21329 = arguments.length;
var i__12776__auto___21330 = (0);
while(true){
if((i__12776__auto___21330 < len__12775__auto___21329)){
args__12782__auto__.push((arguments[i__12776__auto___21330]));

var G__21331 = (i__12776__auto___21330 + (1));
i__12776__auto___21330 = G__21331;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21325){
var vec__21326 = p__21325;
var address = cljs.core.nth.call(null,vec__21326,(0),null);
var data_to_sign = cljs.core.nth.call(null,vec__21326,(1),null);
var args = vec__21326;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sign",args);
});

cljs_web3.eth.sign.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.sign.cljs$lang$applyTo = (function (seq21323){
var G__21324 = cljs.core.first.call(null,seq21323);
var seq21323__$1 = cljs.core.next.call(null,seq21323);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic(G__21324,seq21323__$1);
});

cljs_web3.eth.sign_transaction = (function cljs_web3$eth$sign_transaction(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21334 = arguments.length;
var i__12776__auto___21335 = (0);
while(true){
if((i__12776__auto___21335 < len__12775__auto___21334)){
args__12782__auto__.push((arguments[i__12776__auto___21335]));

var G__21336 = (i__12776__auto___21335 + (1));
i__12776__auto___21335 = G__21336;
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

cljs_web3.eth.sign_transaction.cljs$lang$applyTo = (function (seq21332){
var G__21333 = cljs.core.first.call(null,seq21332);
var seq21332__$1 = cljs.core.next.call(null,seq21332);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic(G__21333,seq21332__$1);
});

cljs_web3.eth.call_BANG_ = (function cljs_web3$eth$call_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21343 = arguments.length;
var i__12776__auto___21344 = (0);
while(true){
if((i__12776__auto___21344 < len__12775__auto___21343)){
args__12782__auto__.push((arguments[i__12776__auto___21344]));

var G__21345 = (i__12776__auto___21344 + (1));
i__12776__auto___21344 = G__21345;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21339){
var vec__21340 = p__21339;
var call_object = cljs.core.nth.call(null,vec__21340,(0),null);
var default_block = cljs.core.nth.call(null,vec__21340,(1),null);
var args = vec__21340;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"call",args);
});

cljs_web3.eth.call_BANG_.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.call_BANG_.cljs$lang$applyTo = (function (seq21337){
var G__21338 = cljs.core.first.call(null,seq21337);
var seq21337__$1 = cljs.core.next.call(null,seq21337);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21338,seq21337__$1);
});

cljs_web3.eth.estimate_gas = (function cljs_web3$eth$estimate_gas(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21352 = arguments.length;
var i__12776__auto___21353 = (0);
while(true){
if((i__12776__auto___21353 < len__12775__auto___21352)){
args__12782__auto__.push((arguments[i__12776__auto___21353]));

var G__21354 = (i__12776__auto___21353 + (1));
i__12776__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21348){
var vec__21349 = p__21348;
var call_obejct = cljs.core.nth.call(null,vec__21349,(0),null);
var args = vec__21349;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"estimateGas",args);
});

cljs_web3.eth.estimate_gas.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.estimate_gas.cljs$lang$applyTo = (function (seq21346){
var G__21347 = cljs.core.first.call(null,seq21346);
var seq21346__$1 = cljs.core.next.call(null,seq21346);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic(G__21347,seq21346__$1);
});

cljs_web3.eth.filter = (function cljs_web3$eth$filter(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21357 = arguments.length;
var i__12776__auto___21358 = (0);
while(true){
if((i__12776__auto___21358 < len__12775__auto___21357)){
args__12782__auto__.push((arguments[i__12776__auto___21358]));

var G__21359 = (i__12776__auto___21358 + (1));
i__12776__auto___21358 = G__21359;
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

cljs_web3.eth.filter.cljs$lang$applyTo = (function (seq21355){
var G__21356 = cljs.core.first.call(null,seq21355);
var seq21355__$1 = cljs.core.next.call(null,seq21355);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic(G__21356,seq21355__$1);
});

cljs_web3.eth.get_compilers = (function cljs_web3$eth$get_compilers(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21362 = arguments.length;
var i__12776__auto___21363 = (0);
while(true){
if((i__12776__auto___21363 < len__12775__auto___21362)){
args__12782__auto__.push((arguments[i__12776__auto___21363]));

var G__21364 = (i__12776__auto___21363 + (1));
i__12776__auto___21363 = G__21364;
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

cljs_web3.eth.get_compilers.cljs$lang$applyTo = (function (seq21360){
var G__21361 = cljs.core.first.call(null,seq21360);
var seq21360__$1 = cljs.core.next.call(null,seq21360);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic(G__21361,seq21360__$1);
});

cljs_web3.eth.compile_solidity = (function cljs_web3$eth$compile_solidity(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21371 = arguments.length;
var i__12776__auto___21372 = (0);
while(true){
if((i__12776__auto___21372 < len__12775__auto___21371)){
args__12782__auto__.push((arguments[i__12776__auto___21372]));

var G__21373 = (i__12776__auto___21372 + (1));
i__12776__auto___21372 = G__21373;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21367){
var vec__21368 = p__21367;
var source_string = cljs.core.nth.call(null,vec__21368,(0),null);
var args = vec__21368;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"solidity",args);
});

cljs_web3.eth.compile_solidity.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_solidity.cljs$lang$applyTo = (function (seq21365){
var G__21366 = cljs.core.first.call(null,seq21365);
var seq21365__$1 = cljs.core.next.call(null,seq21365);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic(G__21366,seq21365__$1);
});

cljs_web3.eth.compile_lll = (function cljs_web3$eth$compile_lll(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21380 = arguments.length;
var i__12776__auto___21381 = (0);
while(true){
if((i__12776__auto___21381 < len__12775__auto___21380)){
args__12782__auto__.push((arguments[i__12776__auto___21381]));

var G__21382 = (i__12776__auto___21381 + (1));
i__12776__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21376){
var vec__21377 = p__21376;
var source_string = cljs.core.nth.call(null,vec__21377,(0),null);
var args = vec__21377;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"lll",args);
});

cljs_web3.eth.compile_lll.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_lll.cljs$lang$applyTo = (function (seq21374){
var G__21375 = cljs.core.first.call(null,seq21374);
var seq21374__$1 = cljs.core.next.call(null,seq21374);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic(G__21375,seq21374__$1);
});

cljs_web3.eth.compile_serpent = (function cljs_web3$eth$compile_serpent(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21389 = arguments.length;
var i__12776__auto___21390 = (0);
while(true){
if((i__12776__auto___21390 < len__12775__auto___21389)){
args__12782__auto__.push((arguments[i__12776__auto___21390]));

var G__21391 = (i__12776__auto___21390 + (1));
i__12776__auto___21390 = G__21391;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21385){
var vec__21386 = p__21385;
var source_string = cljs.core.nth.call(null,vec__21386,(0),null);
var args = vec__21386;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"serpent",args);
});

cljs_web3.eth.compile_serpent.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.compile_serpent.cljs$lang$applyTo = (function (seq21383){
var G__21384 = cljs.core.first.call(null,seq21383);
var seq21383__$1 = cljs.core.next.call(null,seq21383);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic(G__21384,seq21383__$1);
});

cljs_web3.eth.namereg = (function cljs_web3$eth$namereg(web3){
return (cljs_web3.eth.eth.call(null,web3)["namereg"]);
});
cljs_web3.eth.contract = (function cljs_web3$eth$contract(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21398 = arguments.length;
var i__12776__auto___21399 = (0);
while(true){
if((i__12776__auto___21399 < len__12775__auto___21398)){
args__12782__auto__.push((arguments[i__12776__auto___21399]));

var G__21400 = (i__12776__auto___21399 + (1));
i__12776__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__21394){
var vec__21395 = p__21394;
var abi = cljs.core.nth.call(null,vec__21395,(0),null);
var args = vec__21395;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"contract",args);
});

cljs_web3.eth.contract.cljs$lang$maxFixedArity = (1);

cljs_web3.eth.contract.cljs$lang$applyTo = (function (seq21392){
var G__21393 = cljs.core.first.call(null,seq21392);
var seq21392__$1 = cljs.core.next.call(null,seq21392);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic(G__21393,seq21392__$1);
});

cljs_web3.eth.contract_at = (function cljs_web3$eth$contract_at(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21404 = arguments.length;
var i__12776__auto___21405 = (0);
while(true){
if((i__12776__auto___21405 < len__12775__auto___21404)){
args__12782__auto__.push((arguments[i__12776__auto___21405]));

var G__21406 = (i__12776__auto___21405 + (1));
i__12776__auto___21405 = G__21406;
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

cljs_web3.eth.contract_at.cljs$lang$applyTo = (function (seq21401){
var G__21402 = cljs.core.first.call(null,seq21401);
var seq21401__$1 = cljs.core.next.call(null,seq21401);
var G__21403 = cljs.core.first.call(null,seq21401__$1);
var seq21401__$2 = cljs.core.next.call(null,seq21401__$1);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic(G__21402,G__21403,seq21401__$2);
});

cljs_web3.eth.contract_new = (function cljs_web3$eth$contract_new(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21410 = arguments.length;
var i__12776__auto___21411 = (0);
while(true){
if((i__12776__auto___21411 < len__12775__auto___21410)){
args__12782__auto__.push((arguments[i__12776__auto___21411]));

var G__21412 = (i__12776__auto___21411 + (1));
i__12776__auto___21411 = G__21412;
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

cljs_web3.eth.contract_new.cljs$lang$applyTo = (function (seq21407){
var G__21408 = cljs.core.first.call(null,seq21407);
var seq21407__$1 = cljs.core.next.call(null,seq21407);
var G__21409 = cljs.core.first.call(null,seq21407__$1);
var seq21407__$2 = cljs.core.next.call(null,seq21407__$1);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic(G__21408,G__21409,seq21407__$2);
});

cljs_web3.eth.contract_call = (function cljs_web3$eth$contract_call(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21416 = arguments.length;
var i__12776__auto___21417 = (0);
while(true){
if((i__12776__auto___21417 < len__12775__auto___21416)){
args__12782__auto__.push((arguments[i__12776__auto___21417]));

var G__21418 = (i__12776__auto___21417 + (1));
i__12776__auto___21417 = G__21418;
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

cljs_web3.eth.contract_call.cljs$lang$applyTo = (function (seq21413){
var G__21414 = cljs.core.first.call(null,seq21413);
var seq21413__$1 = cljs.core.next.call(null,seq21413);
var G__21415 = cljs.core.first.call(null,seq21413__$1);
var seq21413__$2 = cljs.core.next.call(null,seq21413__$1);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic(G__21414,G__21415,seq21413__$2);
});

cljs_web3.eth.stop_watching_BANG_ = (function cljs_web3$eth$stop_watching_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___21421 = arguments.length;
var i__12776__auto___21422 = (0);
while(true){
if((i__12776__auto___21422 < len__12775__auto___21421)){
args__12782__auto__.push((arguments[i__12776__auto___21422]));

var G__21423 = (i__12776__auto___21422 + (1));
i__12776__auto___21422 = G__21423;
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

cljs_web3.eth.stop_watching_BANG_.cljs$lang$applyTo = (function (seq21419){
var G__21420 = cljs.core.first.call(null,seq21419);
var seq21419__$1 = cljs.core.next.call(null,seq21419);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21420,seq21419__$1);
});


//# sourceMappingURL=eth.js.map