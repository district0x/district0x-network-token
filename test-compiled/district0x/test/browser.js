// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.test.browser');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
district0x.test.browser.fetch_contract = (function district0x$test$browser$fetch_contract(file_name,res_ch,p__46140){
var map__46155 = p__46140;
var map__46155__$1 = ((((!((map__46155 == null)))?((((map__46155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46155):map__46155);
var contracts_path = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"contracts-path","contracts-path",695214927),"contracts/build/");
var response_format = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
return ajax.core.GET.call(null,[cljs.core.str(contracts_path),cljs.core.str(file_name),cljs.core.str("?_="),cljs.core.str((new Date()).getTime())].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),response_format,new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__46155,map__46155__$1,contracts_path,response_format){
return (function (p1__46138_SHARP_){
var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format){
return (function (state_46160){
var state_val_46161 = (state_46160[(1)]);
if((state_val_46161 === (1))){
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46160__$1,(2),res_ch,p1__46138_SHARP_);
} else {
if((state_val_46161 === (2))){
var inst_46158 = (state_46160[(2)]);
var state_46160__$1 = state_46160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46160__$1,inst_46158);
} else {
return null;
}
}
});})(c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format))
;
return ((function (switch__18130__auto__,c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format){
return (function() {
var district0x$test$browser$fetch_contract_$_state_machine__18131__auto__ = null;
var district0x$test$browser$fetch_contract_$_state_machine__18131__auto____0 = (function (){
var statearr_46165 = [null,null,null,null,null,null,null];
(statearr_46165[(0)] = district0x$test$browser$fetch_contract_$_state_machine__18131__auto__);

(statearr_46165[(1)] = (1));

return statearr_46165;
});
var district0x$test$browser$fetch_contract_$_state_machine__18131__auto____1 = (function (state_46160){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_46160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e46166){if((e46166 instanceof Object)){
var ex__18134__auto__ = e46166;
var statearr_46167_46169 = state_46160;
(statearr_46167_46169[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46170 = state_46160;
state_46160 = G__46170;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
district0x$test$browser$fetch_contract_$_state_machine__18131__auto__ = function(state_46160){
switch(arguments.length){
case 0:
return district0x$test$browser$fetch_contract_$_state_machine__18131__auto____0.call(this);
case 1:
return district0x$test$browser$fetch_contract_$_state_machine__18131__auto____1.call(this,state_46160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
district0x$test$browser$fetch_contract_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = district0x$test$browser$fetch_contract_$_state_machine__18131__auto____0;
district0x$test$browser$fetch_contract_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = district0x$test$browser$fetch_contract_$_state_machine__18131__auto____1;
return district0x$test$browser$fetch_contract_$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format))
})();
var state__18244__auto__ = (function (){var statearr_46168 = f__18243__auto__.call(null);
(statearr_46168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__,map__46155,map__46155__$1,contracts_path,response_format))
);

return c__18242__auto__;
});})(map__46155,map__46155__$1,contracts_path,response_format))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (map__46155,map__46155__$1,contracts_path,response_format){
return (function (p1__46139_SHARP_){
return console.error(p1__46139_SHARP_);
});})(map__46155,map__46155__$1,contracts_path,response_format))
], null));
});
district0x.test.browser.fetch_abi = (function district0x$test$browser$fetch_abi(var_args){
var args__12782__auto__ = [];
var len__12775__auto___46178 = arguments.length;
var i__12776__auto___46179 = (0);
while(true){
if((i__12776__auto___46179 < len__12775__auto___46178)){
args__12782__auto__.push((arguments[i__12776__auto___46179]));

var G__46180 = (i__12776__auto___46179 + (1));
i__12776__auto___46179 = G__46180;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.test.browser.fetch_abi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.test.browser.fetch_abi.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,res_ch,p__46174){
var vec__46175 = p__46174;
var opts = cljs.core.nth.call(null,vec__46175,(0),null);
return district0x.test.browser.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".abi")].join(''),res_ch,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)));
});

district0x.test.browser.fetch_abi.cljs$lang$maxFixedArity = (2);

district0x.test.browser.fetch_abi.cljs$lang$applyTo = (function (seq46171){
var G__46172 = cljs.core.first.call(null,seq46171);
var seq46171__$1 = cljs.core.next.call(null,seq46171);
var G__46173 = cljs.core.first.call(null,seq46171__$1);
var seq46171__$2 = cljs.core.next.call(null,seq46171__$1);
return district0x.test.browser.fetch_abi.cljs$core$IFn$_invoke$arity$variadic(G__46172,G__46173,seq46171__$2);
});

district0x.test.browser.fetch_bin = (function district0x$test$browser$fetch_bin(var_args){
var args__12782__auto__ = [];
var len__12775__auto___46188 = arguments.length;
var i__12776__auto___46189 = (0);
while(true){
if((i__12776__auto___46189 < len__12775__auto___46188)){
args__12782__auto__.push((arguments[i__12776__auto___46189]));

var G__46190 = (i__12776__auto___46189 + (1));
i__12776__auto___46189 = G__46190;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((2) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((2)),(0),null)):null);
return district0x.test.browser.fetch_bin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12783__auto__);
});

district0x.test.browser.fetch_bin.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,res_ch,p__46184){
var vec__46185 = p__46184;
var opts = cljs.core.nth.call(null,vec__46185,(0),null);
return district0x.test.browser.fetch_contract.call(null,[cljs.core.str(contract_name),cljs.core.str(".bin")].join(''),res_ch,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"text","text",-1790561697)));
});

district0x.test.browser.fetch_bin.cljs$lang$maxFixedArity = (2);

district0x.test.browser.fetch_bin.cljs$lang$applyTo = (function (seq46181){
var G__46182 = cljs.core.first.call(null,seq46181);
var seq46181__$1 = cljs.core.next.call(null,seq46181);
var G__46183 = cljs.core.first.call(null,seq46181__$1);
var seq46181__$2 = cljs.core.next.call(null,seq46181__$1);
return district0x.test.browser.fetch_bin.cljs$core$IFn$_invoke$arity$variadic(G__46182,G__46183,seq46181__$2);
});

district0x.test.browser.fetch_abi_bin = (function district0x$test$browser$fetch_abi_bin(var_args){
var args__12782__auto__ = [];
var len__12775__auto___46199 = arguments.length;
var i__12776__auto___46200 = (0);
while(true){
if((i__12776__auto___46200 < len__12775__auto___46199)){
args__12782__auto__.push((arguments[i__12776__auto___46200]));

var G__46201 = (i__12776__auto___46200 + (1));
i__12776__auto___46200 = G__46201;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((3) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((3)),(0),null)):null);
return district0x.test.browser.fetch_abi_bin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12783__auto__);
});

district0x.test.browser.fetch_abi_bin.cljs$core$IFn$_invoke$arity$variadic = (function (contract_name,abi_res_ch,bin_res_ch,p__46195){
var vec__46196 = p__46195;
var opts = cljs.core.nth.call(null,vec__46196,(0),null);
district0x.test.browser.fetch_abi.call(null,contract_name,abi_res_ch,opts);

return district0x.test.browser.fetch_bin.call(null,contract_name,bin_res_ch,opts);
});

district0x.test.browser.fetch_abi_bin.cljs$lang$maxFixedArity = (3);

district0x.test.browser.fetch_abi_bin.cljs$lang$applyTo = (function (seq46191){
var G__46192 = cljs.core.first.call(null,seq46191);
var seq46191__$1 = cljs.core.next.call(null,seq46191);
var G__46193 = cljs.core.first.call(null,seq46191__$1);
var seq46191__$2 = cljs.core.next.call(null,seq46191__$1);
var G__46194 = cljs.core.first.call(null,seq46191__$2);
var seq46191__$3 = cljs.core.next.call(null,seq46191__$2);
return district0x.test.browser.fetch_abi_bin.cljs$core$IFn$_invoke$arity$variadic(G__46192,G__46193,G__46194,seq46191__$3);
});


//# sourceMappingURL=browser.js.map