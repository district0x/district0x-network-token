// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.evm');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.evm.send_async_fn = (function cljs_web3$evm$send_async_fn(web3){
return (web3["currentProvider"]["sendAsync"]);
});
cljs_web3.evm.increase_time_BANG_ = (function cljs_web3$evm$increase_time_BANG_(web3,args,callback){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_increaseTime",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null)),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
});
cljs_web3.evm.mine_BANG_ = (function cljs_web3$evm$mine_BANG_(web3,callback){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_mine",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null)),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
});
cljs_web3.evm.revert_BANG_ = (function cljs_web3$evm$revert_BANG_(web3,args,callback){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_revert",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null)),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
});
cljs_web3.evm.snapshot_BANG_ = (function cljs_web3$evm$snapshot_BANG_(web3,callback){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_snapshot",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null)),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
});

//# sourceMappingURL=evm.js.map