// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.test.contracts');
goog.require('cljs.core');
goog.require('cljs_web3.evm');
goog.require('district0x.utils');
goog.require('cljs_web3.personal');
goog.require('cljs.test');
goog.require('cljs_web3.eth');
goog.require('cljs_web3.net');
goog.require('district0x.big_number');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('cljs_web3.core');
goog.require('cljs_web3.shh');
goog.require('cljs_time.coerce');
goog.require('cljs.spec');
goog.require('cljs_web3.db');
district0x.test.contracts.assert_no_error = (function district0x$test$contracts$assert_no_error(err){
if(cljs.core.truth_(err)){
console.error(err);
} else {
}

if(cljs.core.not.call(null,err)){
return null;
} else {
throw (new Error("Assert failed: (not err)"));
}
});
district0x.test.contracts.deploy_contract_BANG_ = (function district0x$test$contracts$deploy_contract_BANG_(p__15351){
var map__15366 = p__15351;
var map__15366__$1 = ((((!((map__15366 == null)))?((((map__15366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15366):map__15366);
var web3 = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var from = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var abi = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var res_ch = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"res-ch","res-ch",2062004549));
var args = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var gas = cljs.core.get.call(null,map__15366__$1,new cljs.core.Keyword(null,"gas","gas",-139961463),(4000000));
return cljs.core.apply.call(null,cljs_web3.eth.contract_new,web3,abi,cljs.core.into.call(null,cljs.core.vec.call(null,args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),bin,new cljs.core.Keyword(null,"gas","gas",-139961463),gas,new cljs.core.Keyword(null,"from","from",1815293044),from], null),((function (map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

if(cljs.core.truth_((res["address"]))){
var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (state_15371){
var state_val_15372 = (state_15371[(1)]);
if((state_val_15372 === (1))){
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15371__$1,(2),res_ch,res);
} else {
if((state_val_15372 === (2))){
var inst_15369 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15371__$1,inst_15369);
} else {
return null;
}
}
});})(c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas))
;
return ((function (switch__15002__auto__,c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas){
return (function() {
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__ = null;
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____0 = (function (){
var statearr_15376 = [null,null,null,null,null,null,null];
(statearr_15376[(0)] = district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__);

(statearr_15376[(1)] = (1));

return statearr_15376;
});
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____1 = (function (state_15371){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15377){if((e15377 instanceof Object)){
var ex__15006__auto__ = e15377;
var statearr_15378_15380 = state_15371;
(statearr_15378_15380[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15381 = state_15371;
state_15371 = G__15381;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____0;
district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto____1;
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas))
})();
var state__15025__auto__ = (function (){var statearr_15379 = f__15024__auto__.call(null);
(statearr_15379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__,map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas))
);

return c__15023__auto__;
} else {
return null;
}
});})(map__15366,map__15366__$1,web3,from,abi,bin,res_ch,args,gas))
], null)));
});
district0x.test.contracts.state_call_BANG_ = (function district0x$test$contracts$state_call_BANG_(instance,method,p__15382){
var map__15385 = p__15382;
var map__15385__$1 = ((((!((map__15385 == null)))?((((map__15385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15385):map__15385);
var from = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var value = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"value","value",305978217),(0));
var args = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var gas = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"gas","gas",-139961463),(4000000));
var value_ether = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"value-ether","value-ether",1133880998));
var on_success = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return cljs.core.apply.call(null,cljs_web3.eth.contract_call,instance,method,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gas","gas",-139961463),gas,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(value_ether)?cljs_web3.core.to_wei.call(null,value_ether,new cljs.core.Keyword(null,"ether","ether",-911152777)):value)], null),(cljs.core.truth_((function (){var or__11700__auto__ = on_success;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
var or__11700__auto____$1 = on_error;
if(cljs.core.truth_(or__11700__auto____$1)){
return or__11700__auto____$1;
} else {
return callback;
}
}
})())?((function (map__15385,map__15385__$1,from,value,args,gas,value_ether,on_success,on_error,callback){
return (function (err,res){
if(cljs.core.truth_((function (){var and__11688__auto__ = err;
if(cljs.core.truth_(and__11688__auto__)){
return on_error;
} else {
return and__11688__auto__;
}
})())){
on_error.call(null,err);
} else {
}

if(cljs.core.truth_((function (){var and__11688__auto__ = res;
if(cljs.core.truth_(and__11688__auto__)){
return on_success;
} else {
return and__11688__auto__;
}
})())){
on_success.call(null,res);
} else {
}

if(cljs.core.truth_(callback)){
return callback.call(null,err,res);
} else {
return null;
}
});})(map__15385,map__15385__$1,from,value,args,gas,value_ether,on_success,on_error,callback))
:null)], null)));
});
district0x.test.contracts.create_channelled_res_fn = (function district0x$test$contracts$create_channelled_res_fn(f){
return (function() { 
var G__15411__delegate = function (args){
var ch = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (ch){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__,ch){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__,ch){
return (function (state_15402){
var state_val_15403 = (state_15402[(1)]);
if((state_val_15403 === (1))){
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15402__$1,(2),ch,res);
} else {
if((state_val_15403 === (2))){
var inst_15400 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15402__$1,inst_15400);
} else {
return null;
}
}
});})(c__15023__auto__,ch))
;
return ((function (switch__15002__auto__,c__15023__auto__,ch){
return (function() {
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__ = null;
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____0 = (function (){
var statearr_15407 = [null,null,null,null,null,null,null];
(statearr_15407[(0)] = district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__);

(statearr_15407[(1)] = (1));

return statearr_15407;
});
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____1 = (function (state_15402){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15408){if((e15408 instanceof Object)){
var ex__15006__auto__ = e15408;
var statearr_15409_15412 = state_15402;
(statearr_15409_15412[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15413 = state_15402;
state_15402 = G__15413;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__ = function(state_15402){
switch(arguments.length){
case 0:
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____1.call(this,state_15402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____0;
district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto____1;
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__,ch))
})();
var state__15025__auto__ = (function (){var statearr_15410 = f__15024__auto__.call(null);
(statearr_15410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__,ch))
);

return c__15023__auto__;
});})(ch))
], null)));

return ch;
};
var G__15411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15414__i = 0, G__15414__a = new Array(arguments.length -  0);
while (G__15414__i < G__15414__a.length) {G__15414__a[G__15414__i] = arguments[G__15414__i + 0]; ++G__15414__i;}
  args = new cljs.core.IndexedSeq(G__15414__a,0);
} 
return G__15411__delegate.call(this,args);};
G__15411.cljs$lang$maxFixedArity = 0;
G__15411.cljs$lang$applyTo = (function (arglist__15415){
var args = cljs.core.seq(arglist__15415);
return G__15411__delegate(args);
});
G__15411.cljs$core$IFn$_invoke$arity$variadic = G__15411__delegate;
return G__15411;
})()
;
});
district0x.test.contracts.state_call_ch_BANG_ = (function district0x$test$contracts$state_call_ch_BANG_(instance,method,opts){
var res_ch = cljs.core.async.chan.call(null);
district0x.test.contracts.state_call_BANG_.call(null,instance,method,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (res_ch){
return (function (res){
var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__,res_ch){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__,res_ch){
return (function (state_15443){
var state_val_15444 = (state_15443[(1)]);
if((state_val_15444 === (1))){
var state_15443__$1 = state_15443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15443__$1,(2),res_ch,res);
} else {
if((state_val_15444 === (2))){
var inst_15441 = (state_15443[(2)]);
var state_15443__$1 = state_15443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15443__$1,inst_15441);
} else {
return null;
}
}
});})(c__15023__auto__,res_ch))
;
return ((function (switch__15002__auto__,c__15023__auto__,res_ch){
return (function() {
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__ = null;
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0 = (function (){
var statearr_15448 = [null,null,null,null,null,null,null];
(statearr_15448[(0)] = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__);

(statearr_15448[(1)] = (1));

return statearr_15448;
});
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1 = (function (state_15443){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15449){if((e15449 instanceof Object)){
var ex__15006__auto__ = e15449;
var statearr_15450_15464 = state_15443;
(statearr_15450_15464[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15465 = state_15443;
state_15443 = G__15465;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__ = function(state_15443){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1.call(this,state_15443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0;
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1;
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__,res_ch))
})();
var state__15025__auto__ = (function (){var statearr_15451 = f__15024__auto__.call(null);
(statearr_15451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__,res_ch))
);

return c__15023__auto__;
});})(res_ch))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (res_ch){
return (function (err){
var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__,res_ch){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__,res_ch){
return (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (1))){
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,(2),res_ch,err);
} else {
if((state_val_15456 === (2))){
var inst_15453 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15455__$1,inst_15453);
} else {
return null;
}
}
});})(c__15023__auto__,res_ch))
;
return ((function (switch__15002__auto__,c__15023__auto__,res_ch){
return (function() {
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__ = null;
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0 = (function (){
var statearr_15460 = [null,null,null,null,null,null,null];
(statearr_15460[(0)] = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__);

(statearr_15460[(1)] = (1));

return statearr_15460;
});
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1 = (function (state_15455){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15461){if((e15461 instanceof Object)){
var ex__15006__auto__ = e15461;
var statearr_15462_15466 = state_15455;
(statearr_15462_15466[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15467 = state_15455;
state_15455 = G__15467;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____0;
district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto____1;
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__,res_ch))
})();
var state__15025__auto__ = (function (){var statearr_15463 = f__15024__auto__.call(null);
(statearr_15463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__,res_ch))
);

return c__15023__auto__;
});})(res_ch))
));

return res_ch;
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.test.contracts","contract-call-ch","district0x.test.contracts/contract-call-ch",559738669),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("district0x.utils","chan?","district0x.utils/chan?",-998730675,null)),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.maybe_impl.call(null,district0x.utils.chan_QMARK_,new cljs.core.Symbol("u","chan?","u/chan?",1219569,null)),cljs.spec.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("district0x.utils","chan?","district0x.utils/chan?",-998730675,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
district0x.test.contracts.contract_call_ch = (function district0x$test$contracts$contract_call_ch(var_args){
var args__12782__auto__ = [];
var len__12775__auto___15483 = arguments.length;
var i__12776__auto___15484 = (0);
while(true){
if((i__12776__auto___15484 < len__12775__auto___15483)){
args__12782__auto__.push((arguments[i__12776__auto___15484]));

var G__15485 = (i__12776__auto___15484 + (1));
i__12776__auto___15484 = G__15485;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var map__15469 = cljs.spec.conform.call(null,new cljs.core.Keyword("district0x.test.contracts","contract-call-ch","district0x.test.contracts/contract-call-ch",559738669),args);
var map__15469__$1 = ((((!((map__15469 == null)))?((((map__15469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15469):map__15469);
var params = map__15469__$1;
var ch = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var args__$1 = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var ch__$1 = (function (){var or__11700__auto__ = ch;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),params)){
console.error(cljs.spec.explain_str.call(null,new cljs.core.Keyword("district0x.test.contracts","contract-call-ch","district0x.test.contracts/contract-call-ch",559738669),params));
} else {
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__15469,map__15469__$1,params,ch,args__$1,ch__$1){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1){
return (function (state_15474){
var state_val_15475 = (state_15474[(1)]);
if((state_val_15475 === (1))){
var state_15474__$1 = state_15474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15474__$1,(2),ch__$1,res);
} else {
if((state_val_15475 === (2))){
var inst_15472 = (state_15474[(2)]);
var state_15474__$1 = state_15474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15474__$1,inst_15472);
} else {
return null;
}
}
});})(c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1))
;
return ((function (switch__15002__auto__,c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1){
return (function() {
var district0x$test$contracts$state_machine__15003__auto__ = null;
var district0x$test$contracts$state_machine__15003__auto____0 = (function (){
var statearr_15479 = [null,null,null,null,null,null,null];
(statearr_15479[(0)] = district0x$test$contracts$state_machine__15003__auto__);

(statearr_15479[(1)] = (1));

return statearr_15479;
});
var district0x$test$contracts$state_machine__15003__auto____1 = (function (state_15474){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15480){if((e15480 instanceof Object)){
var ex__15006__auto__ = e15480;
var statearr_15481_15486 = state_15474;
(statearr_15481_15486[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15487 = state_15474;
state_15474 = G__15487;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$state_machine__15003__auto__ = function(state_15474){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$state_machine__15003__auto____1.call(this,state_15474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_machine__15003__auto____0;
district0x$test$contracts$state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_machine__15003__auto____1;
return district0x$test$contracts$state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1))
})();
var state__15025__auto__ = (function (){var statearr_15482 = f__15024__auto__.call(null);
(statearr_15482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__,map__15469,map__15469__$1,params,ch,args__$1,ch__$1))
);

return c__15023__auto__;
});})(map__15469,map__15469__$1,params,ch,args__$1,ch__$1))
], null)));
}

return ch__$1;
});

district0x.test.contracts.contract_call_ch.cljs$lang$maxFixedArity = (0);

district0x.test.contracts.contract_call_ch.cljs$lang$applyTo = (function (seq15468){
return district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15468));
});

district0x.test.contracts.wait_BANG_ = (function district0x$test$contracts$wait_BANG_(seconds,wait_ch){
return setTimeout((function (){
var c__15023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto__){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto__){
return (function (state_15503){
var state_val_15504 = (state_15503[(1)]);
if((state_val_15504 === (1))){
var state_15503__$1 = state_15503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15503__$1,(2),wait_ch,seconds);
} else {
if((state_val_15504 === (2))){
var inst_15501 = (state_15503[(2)]);
var state_15503__$1 = state_15503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15503__$1,inst_15501);
} else {
return null;
}
}
});})(c__15023__auto__))
;
return ((function (switch__15002__auto__,c__15023__auto__){
return (function() {
var district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__ = null;
var district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____0 = (function (){
var statearr_15508 = [null,null,null,null,null,null,null];
(statearr_15508[(0)] = district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__);

(statearr_15508[(1)] = (1));

return statearr_15508;
});
var district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____1 = (function (state_15503){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15509){if((e15509 instanceof Object)){
var ex__15006__auto__ = e15509;
var statearr_15510_15512 = state_15503;
(statearr_15510_15512[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15513 = state_15503;
state_15503 = G__15513;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__ = function(state_15503){
switch(arguments.length){
case 0:
return district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____1.call(this,state_15503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____0;
district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$wait_BANG__$_state_machine__15003__auto____1;
return district0x$test$contracts$wait_BANG__$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto__))
})();
var state__15025__auto__ = (function (){var statearr_15511 = f__15024__auto__.call(null);
(statearr_15511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto__);

return statearr_15511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto__))
);

return c__15023__auto__;
}),(seconds * (1000)));
});
district0x.test.contracts.now_plus_seconds = (function district0x$test$contracts$now_plus_seconds(seconds){
return Math.floor(cljs_time.coerce.to_epoch.call(null,cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.seconds.call(null,seconds))));
});
district0x.test.contracts.get_balance_ch = district0x.test.contracts.create_channelled_res_fn.call(null,cljs_web3.eth.get_balance);
district0x.test.contracts.mine_ch_BANG_ = district0x.test.contracts.create_channelled_res_fn.call(null,cljs_web3.evm.mine_BANG_);
district0x.test.contracts.increase_time_ch_BANG_ = district0x.test.contracts.create_channelled_res_fn.call(null,cljs_web3.evm.increase_time_BANG_);
district0x.test.contracts.snapshot_ch_BANG_ = district0x.test.contracts.create_channelled_res_fn.call(null,cljs_web3.evm.snapshot_BANG_);
district0x.test.contracts.revert_ch_BANG_ = district0x.test.contracts.create_channelled_res_fn.call(null,cljs_web3.evm.revert_BANG_);
district0x.test.contracts.increase_time_and_mine_ch_BANG_ = (function district0x$test$contracts$increase_time_and_mine_ch_BANG_(web3,seconds){
var ch = cljs.core.async.chan.call(null);
var c__15023__auto___15558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15023__auto___15558,ch){
return (function (){
var f__15024__auto__ = (function (){var switch__15002__auto__ = ((function (c__15023__auto___15558,ch){
return (function (state_15548){
var state_val_15549 = (state_15548[(1)]);
if((state_val_15549 === (1))){
var inst_15536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15537 = [seconds];
var inst_15538 = (new cljs.core.PersistentVector(null,1,(5),inst_15536,inst_15537,null));
var inst_15539 = district0x.test.contracts.increase_time_ch_BANG_.call(null,web3,inst_15538);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15548__$1,(2),inst_15539);
} else {
if((state_val_15549 === (2))){
var inst_15541 = (state_15548[(2)]);
var inst_15542 = district0x.test.contracts.mine_ch_BANG_.call(null,web3);
var state_15548__$1 = (function (){var statearr_15550 = state_15548;
(statearr_15550[(7)] = inst_15541);

return statearr_15550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15548__$1,(4),inst_15542);
} else {
if((state_val_15549 === (3))){
var inst_15546 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15548__$1,inst_15546);
} else {
if((state_val_15549 === (4))){
var inst_15544 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15548__$1,(3),ch,inst_15544);
} else {
return null;
}
}
}
}
});})(c__15023__auto___15558,ch))
;
return ((function (switch__15002__auto__,c__15023__auto___15558,ch){
return (function() {
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__ = null;
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____0 = (function (){
var statearr_15554 = [null,null,null,null,null,null,null,null];
(statearr_15554[(0)] = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__);

(statearr_15554[(1)] = (1));

return statearr_15554;
});
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____1 = (function (state_15548){
while(true){
var ret_value__15004__auto__ = (function (){try{while(true){
var result__15005__auto__ = switch__15002__auto__.call(null,state_15548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15005__auto__;
}
break;
}
}catch (e15555){if((e15555 instanceof Object)){
var ex__15006__auto__ = e15555;
var statearr_15556_15559 = state_15548;
(statearr_15556_15559[(5)] = ex__15006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15560 = state_15548;
state_15548 = G__15560;
continue;
} else {
return ret_value__15004__auto__;
}
break;
}
});
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__ = function(state_15548){
switch(arguments.length){
case 0:
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____0.call(this);
case 1:
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____1.call(this,state_15548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____0;
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto____1;
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__15003__auto__;
})()
;})(switch__15002__auto__,c__15023__auto___15558,ch))
})();
var state__15025__auto__ = (function (){var statearr_15557 = f__15024__auto__.call(null);
(statearr_15557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15023__auto___15558);

return statearr_15557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15025__auto__);
});})(c__15023__auto___15558,ch))
);


return ch;
});

//# sourceMappingURL=contracts.js.map