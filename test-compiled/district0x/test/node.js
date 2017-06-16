// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.test.node');
goog.require('cljs.core');
district0x.test.node.fs = require("fs");
district0x.test.node.fetch_contract = (function district0x$test$node$fetch_contract(var_args){
var args__12782__auto__ = [];
var len__12775__auto___15600 = arguments.length;
var i__12776__auto___15601 = (0);
while(true){
if((i__12776__auto___15601 < len__12775__auto___15600)){
args__12782__auto__.push((arguments[i__12776__auto___15601]));

var G__15602 = (i__12776__auto___15601 + (1));
i__12776__auto___15601 = G__15602;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic = (function (file_name,p__15594){
var vec__15595 = p__15594;
var map__15598 = cljs.core.nth.call(null,vec__15595,(0),null);
var map__15598__$1 = ((((!((map__15598 == null)))?((((map__15598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15598):map__15598);
var contracts_path = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"contracts-path","contracts-path",695214927),[cljs.core.str(process.cwd()),cljs.core.str("/resources/public/contracts/build/")].join(''));
var response_format = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
return district0x.test.node.fs.readFileSync([cljs.core.str(contracts_path),cljs.core.str(file_name)].join(''),"utf-8");
});

district0x.test.node.fetch_contract.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_contract.cljs$lang$applyTo = (function (seq15592){
var G__15593 = cljs.core.first.call(null,seq15592);
var seq15592__$1 = cljs.core.next.call(null,seq15592);
return district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic(G__15593,seq15592__$1);
});

district0x.test.node.fetch_abi = (function district0x$test$node$fetch_abi(var_args){
var args__12782__auto__ = [];
var len__12775__auto___15609 = arguments.length;
var i__12776__auto___15610 = (0);
while(true){
if((i__12776__auto___15610 < len__12775__auto___15609)){
args__12782__auto__.push((arguments[i__12776__auto___15610]));

var G__15611 = (i__12776__auto___15610 + (1));
i__12776__auto___15610 = G__15611;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,p__15605){
var vec__15606 = p__15605;
var opts = cljs.core.nth.call(null,vec__15606,(0),null);
return JSON.parse(district0x.test.node.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".abi")].join('')));
});

district0x.test.node.fetch_abi.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_abi.cljs$lang$applyTo = (function (seq15603){
var G__15604 = cljs.core.first.call(null,seq15603);
var seq15603__$1 = cljs.core.next.call(null,seq15603);
return district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic(G__15604,seq15603__$1);
});

district0x.test.node.fetch_bin = (function district0x$test$node$fetch_bin(var_args){
var args__12782__auto__ = [];
var len__12775__auto___15618 = arguments.length;
var i__12776__auto___15619 = (0);
while(true){
if((i__12776__auto___15619 < len__12775__auto___15618)){
args__12782__auto__.push((arguments[i__12776__auto___15619]));

var G__15620 = (i__12776__auto___15619 + (1));
i__12776__auto___15619 = G__15620;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,p__15614){
var vec__15615 = p__15614;
var opts = cljs.core.nth.call(null,vec__15615,(0),null);
return district0x.test.node.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".bin")].join(''),opts);
});

district0x.test.node.fetch_bin.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_bin.cljs$lang$applyTo = (function (seq15612){
var G__15613 = cljs.core.first.call(null,seq15612);
var seq15612__$1 = cljs.core.next.call(null,seq15612);
return district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic(G__15613,seq15612__$1);
});


//# sourceMappingURL=node.js.map