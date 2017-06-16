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
district0x.test.contracts.deploy_contract_BANG_ = (function district0x$test$contracts$deploy_contract_BANG_(p__26497){
var map__26512 = p__26497;
var map__26512__$1 = ((((!((map__26512 == null)))?((((map__26512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26512):map__26512);
var web3 = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var from = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var abi = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var res_ch = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"res-ch","res-ch",2062004549));
var args = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var gas = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"gas","gas",-139961463),(4000000));
return cljs.core.apply.call(null,cljs_web3.eth.contract_new,web3,abi,cljs.core.into.call(null,cljs.core.vec.call(null,args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),bin,new cljs.core.Keyword(null,"gas","gas",-139961463),gas,new cljs.core.Keyword(null,"from","from",1815293044),from], null),((function (map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

if(cljs.core.truth_((res["address"]))){
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (1))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26517__$1,(2),res_ch,res);
} else {
if((state_val_26518 === (2))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26517__$1,inst_26515);
} else {
return null;
}
}
});})(c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas))
;
return ((function (switch__21547__auto__,c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas){
return (function() {
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__ = null;
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____0 = (function (){
var statearr_26522 = [null,null,null,null,null,null,null];
(statearr_26522[(0)] = district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__);

(statearr_26522[(1)] = (1));

return statearr_26522;
});
var district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____1 = (function (state_26517){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26523){if((e26523 instanceof Object)){
var ex__21551__auto__ = e26523;
var statearr_26524_26526 = state_26517;
(statearr_26524_26526[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26527 = state_26517;
state_26517 = G__26527;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____0;
district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto____1;
return district0x$test$contracts$deploy_contract_BANG__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas))
})();
var state__21661__auto__ = (function (){var statearr_26525 = f__21660__auto__.call(null);
(statearr_26525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas))
);

return c__21659__auto__;
} else {
return null;
}
});})(map__26512,map__26512__$1,web3,from,abi,bin,res_ch,args,gas))
], null)));
});
district0x.test.contracts.state_call_BANG_ = (function district0x$test$contracts$state_call_BANG_(instance,method,p__26528){
var map__26531 = p__26528;
var map__26531__$1 = ((((!((map__26531 == null)))?((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var from = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var value = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"value","value",305978217),(0));
var args = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var gas = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"gas","gas",-139961463),(4000000));
var value_ether = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"value-ether","value-ether",1133880998));
var on_success = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
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
})())?((function (map__26531,map__26531__$1,from,value,args,gas,value_ether,on_success,on_error,callback){
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
});})(map__26531,map__26531__$1,from,value,args,gas,value_ether,on_success,on_error,callback))
:null)], null)));
});
district0x.test.contracts.create_channelled_res_fn = (function district0x$test$contracts$create_channelled_res_fn(f){
return (function() { 
var G__26557__delegate = function (args){
var ch = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (ch){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,ch){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,ch){
return (function (state_26548){
var state_val_26549 = (state_26548[(1)]);
if((state_val_26549 === (1))){
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26548__$1,(2),ch,res);
} else {
if((state_val_26549 === (2))){
var inst_26546 = (state_26548[(2)]);
var state_26548__$1 = state_26548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26548__$1,inst_26546);
} else {
return null;
}
}
});})(c__21659__auto__,ch))
;
return ((function (switch__21547__auto__,c__21659__auto__,ch){
return (function() {
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__ = null;
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____0 = (function (){
var statearr_26553 = [null,null,null,null,null,null,null];
(statearr_26553[(0)] = district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__);

(statearr_26553[(1)] = (1));

return statearr_26553;
});
var district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____1 = (function (state_26548){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26554){if((e26554 instanceof Object)){
var ex__21551__auto__ = e26554;
var statearr_26555_26558 = state_26548;
(statearr_26555_26558[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26559 = state_26548;
state_26548 = G__26559;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__ = function(state_26548){
switch(arguments.length){
case 0:
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____1.call(this,state_26548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____0;
district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto____1;
return district0x$test$contracts$create_channelled_res_fn_$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,ch))
})();
var state__21661__auto__ = (function (){var statearr_26556 = f__21660__auto__.call(null);
(statearr_26556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,ch))
);

return c__21659__auto__;
});})(ch))
], null)));

return ch;
};
var G__26557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26560__i = 0, G__26560__a = new Array(arguments.length -  0);
while (G__26560__i < G__26560__a.length) {G__26560__a[G__26560__i] = arguments[G__26560__i + 0]; ++G__26560__i;}
  args = new cljs.core.IndexedSeq(G__26560__a,0);
} 
return G__26557__delegate.call(this,args);};
G__26557.cljs$lang$maxFixedArity = 0;
G__26557.cljs$lang$applyTo = (function (arglist__26561){
var args = cljs.core.seq(arglist__26561);
return G__26557__delegate(args);
});
G__26557.cljs$core$IFn$_invoke$arity$variadic = G__26557__delegate;
return G__26557;
})()
;
});
district0x.test.contracts.state_call_ch_BANG_ = (function district0x$test$contracts$state_call_ch_BANG_(instance,method,opts){
var res_ch = cljs.core.async.chan.call(null);
district0x.test.contracts.state_call_BANG_.call(null,instance,method,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (res_ch){
return (function (res){
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,res_ch){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,res_ch){
return (function (state_26589){
var state_val_26590 = (state_26589[(1)]);
if((state_val_26590 === (1))){
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26589__$1,(2),res_ch,res);
} else {
if((state_val_26590 === (2))){
var inst_26587 = (state_26589[(2)]);
var state_26589__$1 = state_26589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26589__$1,inst_26587);
} else {
return null;
}
}
});})(c__21659__auto__,res_ch))
;
return ((function (switch__21547__auto__,c__21659__auto__,res_ch){
return (function() {
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__ = null;
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0 = (function (){
var statearr_26594 = [null,null,null,null,null,null,null];
(statearr_26594[(0)] = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__);

(statearr_26594[(1)] = (1));

return statearr_26594;
});
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1 = (function (state_26589){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26595){if((e26595 instanceof Object)){
var ex__21551__auto__ = e26595;
var statearr_26596_26610 = state_26589;
(statearr_26596_26610[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26611 = state_26589;
state_26589 = G__26611;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__ = function(state_26589){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1.call(this,state_26589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0;
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1;
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,res_ch))
})();
var state__21661__auto__ = (function (){var statearr_26597 = f__21660__auto__.call(null);
(statearr_26597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,res_ch))
);

return c__21659__auto__;
});})(res_ch))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (res_ch){
return (function (err){
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,res_ch){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,res_ch){
return (function (state_26601){
var state_val_26602 = (state_26601[(1)]);
if((state_val_26602 === (1))){
var state_26601__$1 = state_26601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26601__$1,(2),res_ch,err);
} else {
if((state_val_26602 === (2))){
var inst_26599 = (state_26601[(2)]);
var state_26601__$1 = state_26601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26601__$1,inst_26599);
} else {
return null;
}
}
});})(c__21659__auto__,res_ch))
;
return ((function (switch__21547__auto__,c__21659__auto__,res_ch){
return (function() {
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__ = null;
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0 = (function (){
var statearr_26606 = [null,null,null,null,null,null,null];
(statearr_26606[(0)] = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__);

(statearr_26606[(1)] = (1));

return statearr_26606;
});
var district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1 = (function (state_26601){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26607){if((e26607 instanceof Object)){
var ex__21551__auto__ = e26607;
var statearr_26608_26612 = state_26601;
(statearr_26608_26612[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26613 = state_26601;
state_26601 = G__26613;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__ = function(state_26601){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1.call(this,state_26601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____0;
district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto____1;
return district0x$test$contracts$state_call_ch_BANG__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,res_ch))
})();
var state__21661__auto__ = (function (){var statearr_26609 = f__21660__auto__.call(null);
(statearr_26609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,res_ch))
);

return c__21659__auto__;
});})(res_ch))
));

return res_ch;
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("district0x.test.contracts","contract-call-ch","district0x.test.contracts/contract-call-ch",559738669),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("district0x.utils","chan?","district0x.utils/chan?",-998730675,null)),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.maybe_impl.call(null,district0x.utils.chan_QMARK_,new cljs.core.Symbol("u","chan?","u/chan?",1219569,null)),cljs.spec.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("district0x.utils","chan?","district0x.utils/chan?",-998730675,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
district0x.test.contracts.contract_call_ch = (function district0x$test$contracts$contract_call_ch(var_args){
var args__12782__auto__ = [];
var len__12775__auto___26629 = arguments.length;
var i__12776__auto___26630 = (0);
while(true){
if((i__12776__auto___26630 < len__12775__auto___26629)){
args__12782__auto__.push((arguments[i__12776__auto___26630]));

var G__26631 = (i__12776__auto___26630 + (1));
i__12776__auto___26630 = G__26631;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var map__26615 = cljs.spec.conform.call(null,new cljs.core.Keyword("district0x.test.contracts","contract-call-ch","district0x.test.contracts/contract-call-ch",559738669),args);
var map__26615__$1 = ((((!((map__26615 == null)))?((((map__26615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615):map__26615);
var params = map__26615__$1;
var ch = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var args__$1 = cljs.core.get.call(null,map__26615__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__26615,map__26615__$1,params,ch,args__$1,ch__$1){
return (function (err,res){
district0x.test.contracts.assert_no_error.call(null,err);

var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1){
return (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (1))){
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26620__$1,(2),ch__$1,res);
} else {
if((state_val_26621 === (2))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26620__$1,inst_26618);
} else {
return null;
}
}
});})(c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1))
;
return ((function (switch__21547__auto__,c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1){
return (function() {
var district0x$test$contracts$state_machine__21548__auto__ = null;
var district0x$test$contracts$state_machine__21548__auto____0 = (function (){
var statearr_26625 = [null,null,null,null,null,null,null];
(statearr_26625[(0)] = district0x$test$contracts$state_machine__21548__auto__);

(statearr_26625[(1)] = (1));

return statearr_26625;
});
var district0x$test$contracts$state_machine__21548__auto____1 = (function (state_26620){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26626){if((e26626 instanceof Object)){
var ex__21551__auto__ = e26626;
var statearr_26627_26632 = state_26620;
(statearr_26627_26632[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26633 = state_26620;
state_26620 = G__26633;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$state_machine__21548__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return district0x$test$contracts$state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$state_machine__21548__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$state_machine__21548__auto____0;
district0x$test$contracts$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$state_machine__21548__auto____1;
return district0x$test$contracts$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1))
})();
var state__21661__auto__ = (function (){var statearr_26628 = f__21660__auto__.call(null);
(statearr_26628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,map__26615,map__26615__$1,params,ch,args__$1,ch__$1))
);

return c__21659__auto__;
});})(map__26615,map__26615__$1,params,ch,args__$1,ch__$1))
], null)));
}

return ch__$1;
});

district0x.test.contracts.contract_call_ch.cljs$lang$maxFixedArity = (0);

district0x.test.contracts.contract_call_ch.cljs$lang$applyTo = (function (seq26614){
return district0x.test.contracts.contract_call_ch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26614));
});

district0x.test.contracts.wait_BANG_ = (function district0x$test$contracts$wait_BANG_(seconds,wait_ch){
return setTimeout((function (){
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__){
return (function (state_26649){
var state_val_26650 = (state_26649[(1)]);
if((state_val_26650 === (1))){
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26649__$1,(2),wait_ch,seconds);
} else {
if((state_val_26650 === (2))){
var inst_26647 = (state_26649[(2)]);
var state_26649__$1 = state_26649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26649__$1,inst_26647);
} else {
return null;
}
}
});})(c__21659__auto__))
;
return ((function (switch__21547__auto__,c__21659__auto__){
return (function() {
var district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__ = null;
var district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____0 = (function (){
var statearr_26654 = [null,null,null,null,null,null,null];
(statearr_26654[(0)] = district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__);

(statearr_26654[(1)] = (1));

return statearr_26654;
});
var district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____1 = (function (state_26649){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26655){if((e26655 instanceof Object)){
var ex__21551__auto__ = e26655;
var statearr_26656_26658 = state_26649;
(statearr_26656_26658[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26659 = state_26649;
state_26649 = G__26659;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__ = function(state_26649){
switch(arguments.length){
case 0:
return district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____1.call(this,state_26649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____0;
district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$wait_BANG__$_state_machine__21548__auto____1;
return district0x$test$contracts$wait_BANG__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__))
})();
var state__21661__auto__ = (function (){var statearr_26657 = f__21660__auto__.call(null);
(statearr_26657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_26657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__))
);

return c__21659__auto__;
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
var c__21659__auto___26704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___26704,ch){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___26704,ch){
return (function (state_26694){
var state_val_26695 = (state_26694[(1)]);
if((state_val_26695 === (1))){
var inst_26682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26683 = [seconds];
var inst_26684 = (new cljs.core.PersistentVector(null,1,(5),inst_26682,inst_26683,null));
var inst_26685 = district0x.test.contracts.increase_time_ch_BANG_.call(null,web3,inst_26684);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26694__$1,(2),inst_26685);
} else {
if((state_val_26695 === (2))){
var inst_26687 = (state_26694[(2)]);
var inst_26688 = district0x.test.contracts.mine_ch_BANG_.call(null,web3);
var state_26694__$1 = (function (){var statearr_26696 = state_26694;
(statearr_26696[(7)] = inst_26687);

return statearr_26696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26694__$1,(4),inst_26688);
} else {
if((state_val_26695 === (3))){
var inst_26692 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26694__$1,inst_26692);
} else {
if((state_val_26695 === (4))){
var inst_26690 = (state_26694[(2)]);
var state_26694__$1 = state_26694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26694__$1,(3),ch,inst_26690);
} else {
return null;
}
}
}
}
});})(c__21659__auto___26704,ch))
;
return ((function (switch__21547__auto__,c__21659__auto___26704,ch){
return (function() {
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__ = null;
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____0 = (function (){
var statearr_26700 = [null,null,null,null,null,null,null,null];
(statearr_26700[(0)] = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__);

(statearr_26700[(1)] = (1));

return statearr_26700;
});
var district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____1 = (function (state_26694){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_26694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e26701){if((e26701 instanceof Object)){
var ex__21551__auto__ = e26701;
var statearr_26702_26705 = state_26694;
(statearr_26702_26705[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26706 = state_26694;
state_26694 = G__26706;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__ = function(state_26694){
switch(arguments.length){
case 0:
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____0.call(this);
case 1:
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____1.call(this,state_26694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____0;
district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto____1;
return district0x$test$contracts$increase_time_and_mine_ch_BANG__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___26704,ch))
})();
var state__21661__auto__ = (function (){var statearr_26703 = f__21660__auto__.call(null);
(statearr_26703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___26704);

return statearr_26703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___26704,ch))
);


return ch;
});
