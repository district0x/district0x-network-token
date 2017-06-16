// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.test.node');
goog.require('cljs.core');
district0x.test.node.fs = require("fs");
district0x.test.node.fetch_contract = (function district0x$test$node$fetch_contract(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26746 = arguments.length;
var i__12776__auto___26747 = (0);
while(true){
if((i__12776__auto___26747 < len__12775__auto___26746)){
args__12782__auto__.push((arguments[i__12776__auto___26747]));

var G__26748 = (i__12776__auto___26747 + (1));
i__12776__auto___26747 = G__26748;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic = (function (file_name,p__26740){
var vec__26741 = p__26740;
var map__26744 = cljs.core.nth.call(null,vec__26741,(0),null);
var map__26744__$1 = ((((!((map__26744 == null)))?((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var contracts_path = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"contracts-path","contracts-path",695214927),[cljs.core.str(process.cwd()),cljs.core.str("/resources/public/contracts/build/")].join(''));
var response_format = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
return district0x.test.node.fs.readFileSync([cljs.core.str(contracts_path),cljs.core.str(file_name)].join(''),"utf-8");
});

district0x.test.node.fetch_contract.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_contract.cljs$lang$applyTo = (function (seq26738){
var G__26739 = cljs.core.first.call(null,seq26738);
var seq26738__$1 = cljs.core.next.call(null,seq26738);
return district0x.test.node.fetch_contract.cljs$core$IFn$_invoke$arity$variadic(G__26739,seq26738__$1);
});

district0x.test.node.fetch_abi = (function district0x$test$node$fetch_abi(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26755 = arguments.length;
var i__12776__auto___26756 = (0);
while(true){
if((i__12776__auto___26756 < len__12775__auto___26755)){
args__12782__auto__.push((arguments[i__12776__auto___26756]));

var G__26757 = (i__12776__auto___26756 + (1));
i__12776__auto___26756 = G__26757;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,p__26751){
var vec__26752 = p__26751;
var opts = cljs.core.nth.call(null,vec__26752,(0),null);
return JSON.parse(district0x.test.node.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".abi")].join('')));
});

district0x.test.node.fetch_abi.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_abi.cljs$lang$applyTo = (function (seq26749){
var G__26750 = cljs.core.first.call(null,seq26749);
var seq26749__$1 = cljs.core.next.call(null,seq26749);
return district0x.test.node.fetch_abi.cljs$core$IFn$_invoke$arity$variadic(G__26750,seq26749__$1);
});

district0x.test.node.fetch_bin = (function district0x$test$node$fetch_bin(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26764 = arguments.length;
var i__12776__auto___26765 = (0);
while(true){
if((i__12776__auto___26765 < len__12775__auto___26764)){
args__12782__auto__.push((arguments[i__12776__auto___26765]));

var G__26766 = (i__12776__auto___26765 + (1));
i__12776__auto___26765 = G__26766;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,p__26760){
var vec__26761 = p__26760;
var opts = cljs.core.nth.call(null,vec__26761,(0),null);
return district0x.test.node.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".bin")].join(''),opts);
});

district0x.test.node.fetch_bin.cljs$lang$maxFixedArity = (1);

district0x.test.node.fetch_bin.cljs$lang$applyTo = (function (seq26758){
var G__26759 = cljs.core.first.call(null,seq26758);
var seq26758__$1 = cljs.core.next.call(null,seq26758);
return district0x.test.node.fetch_bin.cljs$core$IFn$_invoke$arity$variadic(G__26759,seq26758__$1);
});

