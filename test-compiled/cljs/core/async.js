// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args18287 = [];
var len__12775__auto___18293 = arguments.length;
var i__12776__auto___18294 = (0);
while(true){
if((i__12776__auto___18294 < len__12775__auto___18293)){
args18287.push((arguments[i__12776__auto___18294]));

var G__18295 = (i__12776__auto___18294 + (1));
i__12776__auto___18294 = G__18295;
continue;
} else {
}
break;
}

var G__18289 = args18287.length;
switch (G__18289) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18287.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18290 = (function (f,blockable,meta18291){
this.f = f;
this.blockable = blockable;
this.meta18291 = meta18291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18292,meta18291__$1){
var self__ = this;
var _18292__$1 = this;
return (new cljs.core.async.t_cljs$core$async18290(self__.f,self__.blockable,meta18291__$1));
});

cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18292){
var self__ = this;
var _18292__$1 = this;
return self__.meta18291;
});

cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18291","meta18291",1434107500,null)], null);
});

cljs.core.async.t_cljs$core$async18290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18290";

cljs.core.async.t_cljs$core$async18290.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async18290");
});

cljs.core.async.__GT_t_cljs$core$async18290 = (function cljs$core$async$__GT_t_cljs$core$async18290(f__$1,blockable__$1,meta18291){
return (new cljs.core.async.t_cljs$core$async18290(f__$1,blockable__$1,meta18291));
});

}

return (new cljs.core.async.t_cljs$core$async18290(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args18299 = [];
var len__12775__auto___18302 = arguments.length;
var i__12776__auto___18303 = (0);
while(true){
if((i__12776__auto___18303 < len__12775__auto___18302)){
args18299.push((arguments[i__12776__auto___18303]));

var G__18304 = (i__12776__auto___18303 + (1));
i__12776__auto___18303 = G__18304;
continue;
} else {
}
break;
}

var G__18301 = args18299.length;
switch (G__18301) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18299.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args18306 = [];
var len__12775__auto___18309 = arguments.length;
var i__12776__auto___18310 = (0);
while(true){
if((i__12776__auto___18310 < len__12775__auto___18309)){
args18306.push((arguments[i__12776__auto___18310]));

var G__18311 = (i__12776__auto___18310 + (1));
i__12776__auto___18310 = G__18311;
continue;
} else {
}
break;
}

var G__18308 = args18306.length;
switch (G__18308) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18306.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args18313 = [];
var len__12775__auto___18316 = arguments.length;
var i__12776__auto___18317 = (0);
while(true){
if((i__12776__auto___18317 < len__12775__auto___18316)){
args18313.push((arguments[i__12776__auto___18317]));

var G__18318 = (i__12776__auto___18317 + (1));
i__12776__auto___18317 = G__18318;
continue;
} else {
}
break;
}

var G__18315 = args18313.length;
switch (G__18315) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18313.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18320 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18320);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18320,ret){
return (function (){
return fn1.call(null,val_18320);
});})(val_18320,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args18321 = [];
var len__12775__auto___18324 = arguments.length;
var i__12776__auto___18325 = (0);
while(true){
if((i__12776__auto___18325 < len__12775__auto___18324)){
args18321.push((arguments[i__12776__auto___18325]));

var G__18326 = (i__12776__auto___18325 + (1));
i__12776__auto___18325 = G__18326;
continue;
} else {
}
break;
}

var G__18323 = args18321.length;
switch (G__18323) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18321.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__12615__auto___18328 = n;
var x_18329 = (0);
while(true){
if((x_18329 < n__12615__auto___18328)){
(a[x_18329] = (0));

var G__18330 = (x_18329 + (1));
x_18329 = G__18330;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__18331 = (i + (1));
i = G__18331;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async18335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18335 = (function (alt_flag,flag,meta18336){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18336 = meta18336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18337,meta18336__$1){
var self__ = this;
var _18337__$1 = this;
return (new cljs.core.async.t_cljs$core$async18335(self__.alt_flag,self__.flag,meta18336__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18337){
var self__ = this;
var _18337__$1 = this;
return self__.meta18336;
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18336","meta18336",951971849,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18335";

cljs.core.async.t_cljs$core$async18335.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async18335");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18335 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18335(alt_flag__$1,flag__$1,meta18336){
return (new cljs.core.async.t_cljs$core$async18335(alt_flag__$1,flag__$1,meta18336));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18335(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18341 = (function (alt_handler,flag,cb,meta18342){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18342 = meta18342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18343,meta18342__$1){
var self__ = this;
var _18343__$1 = this;
return (new cljs.core.async.t_cljs$core$async18341(self__.alt_handler,self__.flag,self__.cb,meta18342__$1));
});

cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18343){
var self__ = this;
var _18343__$1 = this;
return self__.meta18342;
});

cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18342","meta18342",-697062149,null)], null);
});

cljs.core.async.t_cljs$core$async18341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18341";

cljs.core.async.t_cljs$core$async18341.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async18341");
});

cljs.core.async.__GT_t_cljs$core$async18341 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18341(alt_handler__$1,flag__$1,cb__$1,meta18342){
return (new cljs.core.async.t_cljs$core$async18341(alt_handler__$1,flag__$1,cb__$1,meta18342));
});

}

return (new cljs.core.async.t_cljs$core$async18341(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18344_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18345_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18345_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11700__auto__ = wport;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18346 = (i + (1));
i = G__18346;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11700__auto__ = ret;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__11688__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11688__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___18352 = arguments.length;
var i__12776__auto___18353 = (0);
while(true){
if((i__12776__auto___18353 < len__12775__auto___18352)){
args__12782__auto__.push((arguments[i__12776__auto___18353]));

var G__18354 = (i__12776__auto___18353 + (1));
i__12776__auto___18353 = G__18354;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18349){
var map__18350 = p__18349;
var map__18350__$1 = ((((!((map__18350 == null)))?((((map__18350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18350):map__18350);
var opts = map__18350__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18347){
var G__18348 = cljs.core.first.call(null,seq18347);
var seq18347__$1 = cljs.core.next.call(null,seq18347);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18348,seq18347__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18355 = [];
var len__12775__auto___18405 = arguments.length;
var i__12776__auto___18406 = (0);
while(true){
if((i__12776__auto___18406 < len__12775__auto___18405)){
args18355.push((arguments[i__12776__auto___18406]));

var G__18407 = (i__12776__auto___18406 + (1));
i__12776__auto___18406 = G__18407;
continue;
} else {
}
break;
}

var G__18357 = args18355.length;
switch (G__18357) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18355.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18242__auto___18409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___18409){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___18409){
return (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (7))){
var inst_18377 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18383_18410 = state_18381__$1;
(statearr_18383_18410[(2)] = inst_18377);

(statearr_18383_18410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (1))){
var state_18381__$1 = state_18381;
var statearr_18384_18411 = state_18381__$1;
(statearr_18384_18411[(2)] = null);

(statearr_18384_18411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (4))){
var inst_18360 = (state_18381[(7)]);
var inst_18360__$1 = (state_18381[(2)]);
var inst_18361 = (inst_18360__$1 == null);
var state_18381__$1 = (function (){var statearr_18385 = state_18381;
(statearr_18385[(7)] = inst_18360__$1);

return statearr_18385;
})();
if(cljs.core.truth_(inst_18361)){
var statearr_18386_18412 = state_18381__$1;
(statearr_18386_18412[(1)] = (5));

} else {
var statearr_18387_18413 = state_18381__$1;
(statearr_18387_18413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (13))){
var state_18381__$1 = state_18381;
var statearr_18388_18414 = state_18381__$1;
(statearr_18388_18414[(2)] = null);

(statearr_18388_18414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (6))){
var inst_18360 = (state_18381[(7)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18381__$1,(11),to,inst_18360);
} else {
if((state_val_18382 === (3))){
var inst_18379 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18381__$1,inst_18379);
} else {
if((state_val_18382 === (12))){
var state_18381__$1 = state_18381;
var statearr_18389_18415 = state_18381__$1;
(statearr_18389_18415[(2)] = null);

(statearr_18389_18415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (2))){
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18381__$1,(4),from);
} else {
if((state_val_18382 === (11))){
var inst_18370 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
if(cljs.core.truth_(inst_18370)){
var statearr_18390_18416 = state_18381__$1;
(statearr_18390_18416[(1)] = (12));

} else {
var statearr_18391_18417 = state_18381__$1;
(statearr_18391_18417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (9))){
var state_18381__$1 = state_18381;
var statearr_18392_18418 = state_18381__$1;
(statearr_18392_18418[(2)] = null);

(statearr_18392_18418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (5))){
var state_18381__$1 = state_18381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18393_18419 = state_18381__$1;
(statearr_18393_18419[(1)] = (8));

} else {
var statearr_18394_18420 = state_18381__$1;
(statearr_18394_18420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (14))){
var inst_18375 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18395_18421 = state_18381__$1;
(statearr_18395_18421[(2)] = inst_18375);

(statearr_18395_18421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (10))){
var inst_18367 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18396_18422 = state_18381__$1;
(statearr_18396_18422[(2)] = inst_18367);

(statearr_18396_18422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (8))){
var inst_18364 = cljs.core.async.close_BANG_.call(null,to);
var state_18381__$1 = state_18381;
var statearr_18397_18423 = state_18381__$1;
(statearr_18397_18423[(2)] = inst_18364);

(statearr_18397_18423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___18409))
;
return ((function (switch__18130__auto__,c__18242__auto___18409){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_18401 = [null,null,null,null,null,null,null,null];
(statearr_18401[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_18401[(1)] = (1));

return statearr_18401;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_18381){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18402){if((e18402 instanceof Object)){
var ex__18134__auto__ = e18402;
var statearr_18403_18424 = state_18381;
(statearr_18403_18424[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18425 = state_18381;
state_18381 = G__18425;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___18409))
})();
var state__18244__auto__ = (function (){var statearr_18404 = f__18243__auto__.call(null);
(statearr_18404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18409);

return statearr_18404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___18409))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18613){
var vec__18614 = p__18613;
var v = cljs.core.nth.call(null,vec__18614,(0),null);
var p = cljs.core.nth.call(null,vec__18614,(1),null);
var job = vec__18614;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18242__auto___18800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results){
return (function (state_18621){
var state_val_18622 = (state_18621[(1)]);
if((state_val_18622 === (1))){
var state_18621__$1 = state_18621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18621__$1,(2),res,v);
} else {
if((state_val_18622 === (2))){
var inst_18618 = (state_18621[(2)]);
var inst_18619 = cljs.core.async.close_BANG_.call(null,res);
var state_18621__$1 = (function (){var statearr_18623 = state_18621;
(statearr_18623[(7)] = inst_18618);

return statearr_18623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18621__$1,inst_18619);
} else {
return null;
}
}
});})(c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results))
;
return ((function (switch__18130__auto__,c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_18627 = [null,null,null,null,null,null,null,null];
(statearr_18627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__);

(statearr_18627[(1)] = (1));

return statearr_18627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1 = (function (state_18621){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18628){if((e18628 instanceof Object)){
var ex__18134__auto__ = e18628;
var statearr_18629_18801 = state_18621;
(statearr_18629_18801[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18802 = state_18621;
state_18621 = G__18802;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = function(state_18621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1.call(this,state_18621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results))
})();
var state__18244__auto__ = (function (){var statearr_18630 = f__18243__auto__.call(null);
(statearr_18630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18800);

return statearr_18630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___18800,res,vec__18614,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18631){
var vec__18632 = p__18631;
var v = cljs.core.nth.call(null,vec__18632,(0),null);
var p = cljs.core.nth.call(null,vec__18632,(1),null);
var job = vec__18632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__12615__auto___18803 = n;
var __18804 = (0);
while(true){
if((__18804 < n__12615__auto___18803)){
var G__18635_18805 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18635_18805) {
case "compute":
var c__18242__auto___18807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18804,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (__18804,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function (state_18648){
var state_val_18649 = (state_18648[(1)]);
if((state_val_18649 === (1))){
var state_18648__$1 = state_18648;
var statearr_18650_18808 = state_18648__$1;
(statearr_18650_18808[(2)] = null);

(statearr_18650_18808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18649 === (2))){
var state_18648__$1 = state_18648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18648__$1,(4),jobs);
} else {
if((state_val_18649 === (3))){
var inst_18646 = (state_18648[(2)]);
var state_18648__$1 = state_18648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18648__$1,inst_18646);
} else {
if((state_val_18649 === (4))){
var inst_18638 = (state_18648[(2)]);
var inst_18639 = process.call(null,inst_18638);
var state_18648__$1 = state_18648;
if(cljs.core.truth_(inst_18639)){
var statearr_18651_18809 = state_18648__$1;
(statearr_18651_18809[(1)] = (5));

} else {
var statearr_18652_18810 = state_18648__$1;
(statearr_18652_18810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18649 === (5))){
var state_18648__$1 = state_18648;
var statearr_18653_18811 = state_18648__$1;
(statearr_18653_18811[(2)] = null);

(statearr_18653_18811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18649 === (6))){
var state_18648__$1 = state_18648;
var statearr_18654_18812 = state_18648__$1;
(statearr_18654_18812[(2)] = null);

(statearr_18654_18812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18649 === (7))){
var inst_18644 = (state_18648[(2)]);
var state_18648__$1 = state_18648;
var statearr_18655_18813 = state_18648__$1;
(statearr_18655_18813[(2)] = inst_18644);

(statearr_18655_18813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18804,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
;
return ((function (__18804,switch__18130__auto__,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_18659 = [null,null,null,null,null,null,null];
(statearr_18659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__);

(statearr_18659[(1)] = (1));

return statearr_18659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1 = (function (state_18648){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18660){if((e18660 instanceof Object)){
var ex__18134__auto__ = e18660;
var statearr_18661_18814 = state_18648;
(statearr_18661_18814[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18815 = state_18648;
state_18648 = G__18815;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = function(state_18648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1.call(this,state_18648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__;
})()
;})(__18804,switch__18130__auto__,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
})();
var state__18244__auto__ = (function (){var statearr_18662 = f__18243__auto__.call(null);
(statearr_18662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18807);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(__18804,c__18242__auto___18807,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
);


break;
case "async":
var c__18242__auto___18816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18804,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (__18804,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function (state_18675){
var state_val_18676 = (state_18675[(1)]);
if((state_val_18676 === (1))){
var state_18675__$1 = state_18675;
var statearr_18677_18817 = state_18675__$1;
(statearr_18677_18817[(2)] = null);

(statearr_18677_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (2))){
var state_18675__$1 = state_18675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18675__$1,(4),jobs);
} else {
if((state_val_18676 === (3))){
var inst_18673 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18675__$1,inst_18673);
} else {
if((state_val_18676 === (4))){
var inst_18665 = (state_18675[(2)]);
var inst_18666 = async.call(null,inst_18665);
var state_18675__$1 = state_18675;
if(cljs.core.truth_(inst_18666)){
var statearr_18678_18818 = state_18675__$1;
(statearr_18678_18818[(1)] = (5));

} else {
var statearr_18679_18819 = state_18675__$1;
(statearr_18679_18819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (5))){
var state_18675__$1 = state_18675;
var statearr_18680_18820 = state_18675__$1;
(statearr_18680_18820[(2)] = null);

(statearr_18680_18820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (6))){
var state_18675__$1 = state_18675;
var statearr_18681_18821 = state_18675__$1;
(statearr_18681_18821[(2)] = null);

(statearr_18681_18821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18676 === (7))){
var inst_18671 = (state_18675[(2)]);
var state_18675__$1 = state_18675;
var statearr_18682_18822 = state_18675__$1;
(statearr_18682_18822[(2)] = inst_18671);

(statearr_18682_18822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18804,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
;
return ((function (__18804,switch__18130__auto__,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_18686 = [null,null,null,null,null,null,null];
(statearr_18686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__);

(statearr_18686[(1)] = (1));

return statearr_18686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1 = (function (state_18675){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18687){if((e18687 instanceof Object)){
var ex__18134__auto__ = e18687;
var statearr_18688_18823 = state_18675;
(statearr_18688_18823[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18824 = state_18675;
state_18675 = G__18824;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = function(state_18675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1.call(this,state_18675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__;
})()
;})(__18804,switch__18130__auto__,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
})();
var state__18244__auto__ = (function (){var statearr_18689 = f__18243__auto__.call(null);
(statearr_18689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18816);

return statearr_18689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(__18804,c__18242__auto___18816,G__18635_18805,n__12615__auto___18803,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18825 = (__18804 + (1));
__18804 = G__18825;
continue;
} else {
}
break;
}

var c__18242__auto___18826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___18826,jobs,results,process,async){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___18826,jobs,results,process,async){
return (function (state_18711){
var state_val_18712 = (state_18711[(1)]);
if((state_val_18712 === (1))){
var state_18711__$1 = state_18711;
var statearr_18713_18827 = state_18711__$1;
(statearr_18713_18827[(2)] = null);

(statearr_18713_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (2))){
var state_18711__$1 = state_18711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18711__$1,(4),from);
} else {
if((state_val_18712 === (3))){
var inst_18709 = (state_18711[(2)]);
var state_18711__$1 = state_18711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18711__$1,inst_18709);
} else {
if((state_val_18712 === (4))){
var inst_18692 = (state_18711[(7)]);
var inst_18692__$1 = (state_18711[(2)]);
var inst_18693 = (inst_18692__$1 == null);
var state_18711__$1 = (function (){var statearr_18714 = state_18711;
(statearr_18714[(7)] = inst_18692__$1);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18693)){
var statearr_18715_18828 = state_18711__$1;
(statearr_18715_18828[(1)] = (5));

} else {
var statearr_18716_18829 = state_18711__$1;
(statearr_18716_18829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (5))){
var inst_18695 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18711__$1 = state_18711;
var statearr_18717_18830 = state_18711__$1;
(statearr_18717_18830[(2)] = inst_18695);

(statearr_18717_18830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (6))){
var inst_18697 = (state_18711[(8)]);
var inst_18692 = (state_18711[(7)]);
var inst_18697__$1 = cljs.core.async.chan.call(null,(1));
var inst_18698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18699 = [inst_18692,inst_18697__$1];
var inst_18700 = (new cljs.core.PersistentVector(null,2,(5),inst_18698,inst_18699,null));
var state_18711__$1 = (function (){var statearr_18718 = state_18711;
(statearr_18718[(8)] = inst_18697__$1);

return statearr_18718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18711__$1,(8),jobs,inst_18700);
} else {
if((state_val_18712 === (7))){
var inst_18707 = (state_18711[(2)]);
var state_18711__$1 = state_18711;
var statearr_18719_18831 = state_18711__$1;
(statearr_18719_18831[(2)] = inst_18707);

(statearr_18719_18831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18712 === (8))){
var inst_18697 = (state_18711[(8)]);
var inst_18702 = (state_18711[(2)]);
var state_18711__$1 = (function (){var statearr_18720 = state_18711;
(statearr_18720[(9)] = inst_18702);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18711__$1,(9),results,inst_18697);
} else {
if((state_val_18712 === (9))){
var inst_18704 = (state_18711[(2)]);
var state_18711__$1 = (function (){var statearr_18721 = state_18711;
(statearr_18721[(10)] = inst_18704);

return statearr_18721;
})();
var statearr_18722_18832 = state_18711__$1;
(statearr_18722_18832[(2)] = null);

(statearr_18722_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___18826,jobs,results,process,async))
;
return ((function (switch__18130__auto__,c__18242__auto___18826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_18726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__);

(statearr_18726[(1)] = (1));

return statearr_18726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1 = (function (state_18711){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18727){if((e18727 instanceof Object)){
var ex__18134__auto__ = e18727;
var statearr_18728_18833 = state_18711;
(statearr_18728_18833[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18834 = state_18711;
state_18711 = G__18834;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = function(state_18711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1.call(this,state_18711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___18826,jobs,results,process,async))
})();
var state__18244__auto__ = (function (){var statearr_18729 = f__18243__auto__.call(null);
(statearr_18729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18826);

return statearr_18729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___18826,jobs,results,process,async))
);


var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__,jobs,results,process,async){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__,jobs,results,process,async){
return (function (state_18767){
var state_val_18768 = (state_18767[(1)]);
if((state_val_18768 === (7))){
var inst_18763 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18769_18835 = state_18767__$1;
(statearr_18769_18835[(2)] = inst_18763);

(statearr_18769_18835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (20))){
var state_18767__$1 = state_18767;
var statearr_18770_18836 = state_18767__$1;
(statearr_18770_18836[(2)] = null);

(statearr_18770_18836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (1))){
var state_18767__$1 = state_18767;
var statearr_18771_18837 = state_18767__$1;
(statearr_18771_18837[(2)] = null);

(statearr_18771_18837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (4))){
var inst_18732 = (state_18767[(7)]);
var inst_18732__$1 = (state_18767[(2)]);
var inst_18733 = (inst_18732__$1 == null);
var state_18767__$1 = (function (){var statearr_18772 = state_18767;
(statearr_18772[(7)] = inst_18732__$1);

return statearr_18772;
})();
if(cljs.core.truth_(inst_18733)){
var statearr_18773_18838 = state_18767__$1;
(statearr_18773_18838[(1)] = (5));

} else {
var statearr_18774_18839 = state_18767__$1;
(statearr_18774_18839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (15))){
var inst_18745 = (state_18767[(8)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18767__$1,(18),to,inst_18745);
} else {
if((state_val_18768 === (21))){
var inst_18758 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18775_18840 = state_18767__$1;
(statearr_18775_18840[(2)] = inst_18758);

(statearr_18775_18840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (13))){
var inst_18760 = (state_18767[(2)]);
var state_18767__$1 = (function (){var statearr_18776 = state_18767;
(statearr_18776[(9)] = inst_18760);

return statearr_18776;
})();
var statearr_18777_18841 = state_18767__$1;
(statearr_18777_18841[(2)] = null);

(statearr_18777_18841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (6))){
var inst_18732 = (state_18767[(7)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18767__$1,(11),inst_18732);
} else {
if((state_val_18768 === (17))){
var inst_18753 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
if(cljs.core.truth_(inst_18753)){
var statearr_18778_18842 = state_18767__$1;
(statearr_18778_18842[(1)] = (19));

} else {
var statearr_18779_18843 = state_18767__$1;
(statearr_18779_18843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (3))){
var inst_18765 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18767__$1,inst_18765);
} else {
if((state_val_18768 === (12))){
var inst_18742 = (state_18767[(10)]);
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18767__$1,(14),inst_18742);
} else {
if((state_val_18768 === (2))){
var state_18767__$1 = state_18767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18767__$1,(4),results);
} else {
if((state_val_18768 === (19))){
var state_18767__$1 = state_18767;
var statearr_18780_18844 = state_18767__$1;
(statearr_18780_18844[(2)] = null);

(statearr_18780_18844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (11))){
var inst_18742 = (state_18767[(2)]);
var state_18767__$1 = (function (){var statearr_18781 = state_18767;
(statearr_18781[(10)] = inst_18742);

return statearr_18781;
})();
var statearr_18782_18845 = state_18767__$1;
(statearr_18782_18845[(2)] = null);

(statearr_18782_18845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (9))){
var state_18767__$1 = state_18767;
var statearr_18783_18846 = state_18767__$1;
(statearr_18783_18846[(2)] = null);

(statearr_18783_18846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (5))){
var state_18767__$1 = state_18767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18784_18847 = state_18767__$1;
(statearr_18784_18847[(1)] = (8));

} else {
var statearr_18785_18848 = state_18767__$1;
(statearr_18785_18848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (14))){
var inst_18745 = (state_18767[(8)]);
var inst_18747 = (state_18767[(11)]);
var inst_18745__$1 = (state_18767[(2)]);
var inst_18746 = (inst_18745__$1 == null);
var inst_18747__$1 = cljs.core.not.call(null,inst_18746);
var state_18767__$1 = (function (){var statearr_18786 = state_18767;
(statearr_18786[(8)] = inst_18745__$1);

(statearr_18786[(11)] = inst_18747__$1);

return statearr_18786;
})();
if(inst_18747__$1){
var statearr_18787_18849 = state_18767__$1;
(statearr_18787_18849[(1)] = (15));

} else {
var statearr_18788_18850 = state_18767__$1;
(statearr_18788_18850[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (16))){
var inst_18747 = (state_18767[(11)]);
var state_18767__$1 = state_18767;
var statearr_18789_18851 = state_18767__$1;
(statearr_18789_18851[(2)] = inst_18747);

(statearr_18789_18851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (10))){
var inst_18739 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18790_18852 = state_18767__$1;
(statearr_18790_18852[(2)] = inst_18739);

(statearr_18790_18852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (18))){
var inst_18750 = (state_18767[(2)]);
var state_18767__$1 = state_18767;
var statearr_18791_18853 = state_18767__$1;
(statearr_18791_18853[(2)] = inst_18750);

(statearr_18791_18853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18768 === (8))){
var inst_18736 = cljs.core.async.close_BANG_.call(null,to);
var state_18767__$1 = state_18767;
var statearr_18792_18854 = state_18767__$1;
(statearr_18792_18854[(2)] = inst_18736);

(statearr_18792_18854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto__,jobs,results,process,async))
;
return ((function (switch__18130__auto__,c__18242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_18796 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__);

(statearr_18796[(1)] = (1));

return statearr_18796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1 = (function (state_18767){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18797){if((e18797 instanceof Object)){
var ex__18134__auto__ = e18797;
var statearr_18798_18855 = state_18767;
(statearr_18798_18855[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18856 = state_18767;
state_18767 = G__18856;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__ = function(state_18767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1.call(this,state_18767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__,jobs,results,process,async))
})();
var state__18244__auto__ = (function (){var statearr_18799 = f__18243__auto__.call(null);
(statearr_18799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_18799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__,jobs,results,process,async))
);

return c__18242__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args18857 = [];
var len__12775__auto___18860 = arguments.length;
var i__12776__auto___18861 = (0);
while(true){
if((i__12776__auto___18861 < len__12775__auto___18860)){
args18857.push((arguments[i__12776__auto___18861]));

var G__18862 = (i__12776__auto___18861 + (1));
i__12776__auto___18861 = G__18862;
continue;
} else {
}
break;
}

var G__18859 = args18857.length;
switch (G__18859) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18857.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args18864 = [];
var len__12775__auto___18867 = arguments.length;
var i__12776__auto___18868 = (0);
while(true){
if((i__12776__auto___18868 < len__12775__auto___18867)){
args18864.push((arguments[i__12776__auto___18868]));

var G__18869 = (i__12776__auto___18868 + (1));
i__12776__auto___18868 = G__18869;
continue;
} else {
}
break;
}

var G__18866 = args18864.length;
switch (G__18866) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18864.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args18871 = [];
var len__12775__auto___18924 = arguments.length;
var i__12776__auto___18925 = (0);
while(true){
if((i__12776__auto___18925 < len__12775__auto___18924)){
args18871.push((arguments[i__12776__auto___18925]));

var G__18926 = (i__12776__auto___18925 + (1));
i__12776__auto___18925 = G__18926;
continue;
} else {
}
break;
}

var G__18873 = args18871.length;
switch (G__18873) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18871.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18242__auto___18928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___18928,tc,fc){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___18928,tc,fc){
return (function (state_18899){
var state_val_18900 = (state_18899[(1)]);
if((state_val_18900 === (7))){
var inst_18895 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
var statearr_18901_18929 = state_18899__$1;
(statearr_18901_18929[(2)] = inst_18895);

(statearr_18901_18929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (1))){
var state_18899__$1 = state_18899;
var statearr_18902_18930 = state_18899__$1;
(statearr_18902_18930[(2)] = null);

(statearr_18902_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (4))){
var inst_18876 = (state_18899[(7)]);
var inst_18876__$1 = (state_18899[(2)]);
var inst_18877 = (inst_18876__$1 == null);
var state_18899__$1 = (function (){var statearr_18903 = state_18899;
(statearr_18903[(7)] = inst_18876__$1);

return statearr_18903;
})();
if(cljs.core.truth_(inst_18877)){
var statearr_18904_18931 = state_18899__$1;
(statearr_18904_18931[(1)] = (5));

} else {
var statearr_18905_18932 = state_18899__$1;
(statearr_18905_18932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (13))){
var state_18899__$1 = state_18899;
var statearr_18906_18933 = state_18899__$1;
(statearr_18906_18933[(2)] = null);

(statearr_18906_18933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (6))){
var inst_18876 = (state_18899[(7)]);
var inst_18882 = p.call(null,inst_18876);
var state_18899__$1 = state_18899;
if(cljs.core.truth_(inst_18882)){
var statearr_18907_18934 = state_18899__$1;
(statearr_18907_18934[(1)] = (9));

} else {
var statearr_18908_18935 = state_18899__$1;
(statearr_18908_18935[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (3))){
var inst_18897 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18899__$1,inst_18897);
} else {
if((state_val_18900 === (12))){
var state_18899__$1 = state_18899;
var statearr_18909_18936 = state_18899__$1;
(statearr_18909_18936[(2)] = null);

(statearr_18909_18936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (2))){
var state_18899__$1 = state_18899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18899__$1,(4),ch);
} else {
if((state_val_18900 === (11))){
var inst_18876 = (state_18899[(7)]);
var inst_18886 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18899__$1,(8),inst_18886,inst_18876);
} else {
if((state_val_18900 === (9))){
var state_18899__$1 = state_18899;
var statearr_18910_18937 = state_18899__$1;
(statearr_18910_18937[(2)] = tc);

(statearr_18910_18937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (5))){
var inst_18879 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18880 = cljs.core.async.close_BANG_.call(null,fc);
var state_18899__$1 = (function (){var statearr_18911 = state_18899;
(statearr_18911[(8)] = inst_18879);

return statearr_18911;
})();
var statearr_18912_18938 = state_18899__$1;
(statearr_18912_18938[(2)] = inst_18880);

(statearr_18912_18938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (14))){
var inst_18893 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
var statearr_18913_18939 = state_18899__$1;
(statearr_18913_18939[(2)] = inst_18893);

(statearr_18913_18939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (10))){
var state_18899__$1 = state_18899;
var statearr_18914_18940 = state_18899__$1;
(statearr_18914_18940[(2)] = fc);

(statearr_18914_18940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18900 === (8))){
var inst_18888 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
if(cljs.core.truth_(inst_18888)){
var statearr_18915_18941 = state_18899__$1;
(statearr_18915_18941[(1)] = (12));

} else {
var statearr_18916_18942 = state_18899__$1;
(statearr_18916_18942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___18928,tc,fc))
;
return ((function (switch__18130__auto__,c__18242__auto___18928,tc,fc){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_18920 = [null,null,null,null,null,null,null,null,null];
(statearr_18920[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_18920[(1)] = (1));

return statearr_18920;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_18899){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_18899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e18921){if((e18921 instanceof Object)){
var ex__18134__auto__ = e18921;
var statearr_18922_18943 = state_18899;
(statearr_18922_18943[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18944 = state_18899;
state_18899 = G__18944;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_18899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_18899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___18928,tc,fc))
})();
var state__18244__auto__ = (function (){var statearr_18923 = f__18243__auto__.call(null);
(statearr_18923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___18928);

return statearr_18923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___18928,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__){
return (function (state_19008){
var state_val_19009 = (state_19008[(1)]);
if((state_val_19009 === (7))){
var inst_19004 = (state_19008[(2)]);
var state_19008__$1 = state_19008;
var statearr_19010_19031 = state_19008__$1;
(statearr_19010_19031[(2)] = inst_19004);

(statearr_19010_19031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (1))){
var inst_18988 = init;
var state_19008__$1 = (function (){var statearr_19011 = state_19008;
(statearr_19011[(7)] = inst_18988);

return statearr_19011;
})();
var statearr_19012_19032 = state_19008__$1;
(statearr_19012_19032[(2)] = null);

(statearr_19012_19032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (4))){
var inst_18991 = (state_19008[(8)]);
var inst_18991__$1 = (state_19008[(2)]);
var inst_18992 = (inst_18991__$1 == null);
var state_19008__$1 = (function (){var statearr_19013 = state_19008;
(statearr_19013[(8)] = inst_18991__$1);

return statearr_19013;
})();
if(cljs.core.truth_(inst_18992)){
var statearr_19014_19033 = state_19008__$1;
(statearr_19014_19033[(1)] = (5));

} else {
var statearr_19015_19034 = state_19008__$1;
(statearr_19015_19034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (6))){
var inst_18995 = (state_19008[(9)]);
var inst_18988 = (state_19008[(7)]);
var inst_18991 = (state_19008[(8)]);
var inst_18995__$1 = f.call(null,inst_18988,inst_18991);
var inst_18996 = cljs.core.reduced_QMARK_.call(null,inst_18995__$1);
var state_19008__$1 = (function (){var statearr_19016 = state_19008;
(statearr_19016[(9)] = inst_18995__$1);

return statearr_19016;
})();
if(inst_18996){
var statearr_19017_19035 = state_19008__$1;
(statearr_19017_19035[(1)] = (8));

} else {
var statearr_19018_19036 = state_19008__$1;
(statearr_19018_19036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (3))){
var inst_19006 = (state_19008[(2)]);
var state_19008__$1 = state_19008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19008__$1,inst_19006);
} else {
if((state_val_19009 === (2))){
var state_19008__$1 = state_19008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19008__$1,(4),ch);
} else {
if((state_val_19009 === (9))){
var inst_18995 = (state_19008[(9)]);
var inst_18988 = inst_18995;
var state_19008__$1 = (function (){var statearr_19019 = state_19008;
(statearr_19019[(7)] = inst_18988);

return statearr_19019;
})();
var statearr_19020_19037 = state_19008__$1;
(statearr_19020_19037[(2)] = null);

(statearr_19020_19037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (5))){
var inst_18988 = (state_19008[(7)]);
var state_19008__$1 = state_19008;
var statearr_19021_19038 = state_19008__$1;
(statearr_19021_19038[(2)] = inst_18988);

(statearr_19021_19038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (10))){
var inst_19002 = (state_19008[(2)]);
var state_19008__$1 = state_19008;
var statearr_19022_19039 = state_19008__$1;
(statearr_19022_19039[(2)] = inst_19002);

(statearr_19022_19039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19009 === (8))){
var inst_18995 = (state_19008[(9)]);
var inst_18998 = cljs.core.deref.call(null,inst_18995);
var state_19008__$1 = state_19008;
var statearr_19023_19040 = state_19008__$1;
(statearr_19023_19040[(2)] = inst_18998);

(statearr_19023_19040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto__))
;
return ((function (switch__18130__auto__,c__18242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18131__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18131__auto____0 = (function (){
var statearr_19027 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19027[(0)] = cljs$core$async$reduce_$_state_machine__18131__auto__);

(statearr_19027[(1)] = (1));

return statearr_19027;
});
var cljs$core$async$reduce_$_state_machine__18131__auto____1 = (function (state_19008){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_19008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e19028){if((e19028 instanceof Object)){
var ex__18134__auto__ = e19028;
var statearr_19029_19041 = state_19008;
(statearr_19029_19041[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19042 = state_19008;
state_19008 = G__19042;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18131__auto__ = function(state_19008){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18131__auto____1.call(this,state_19008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18131__auto____0;
cljs$core$async$reduce_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18131__auto____1;
return cljs$core$async$reduce_$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__))
})();
var state__18244__auto__ = (function (){var statearr_19030 = f__18243__auto__.call(null);
(statearr_19030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_19030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__))
);

return c__18242__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__,f__$1){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__,f__$1){
return (function (state_19062){
var state_val_19063 = (state_19062[(1)]);
if((state_val_19063 === (1))){
var inst_19057 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19062__$1 = state_19062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19062__$1,(2),inst_19057);
} else {
if((state_val_19063 === (2))){
var inst_19059 = (state_19062[(2)]);
var inst_19060 = f__$1.call(null,inst_19059);
var state_19062__$1 = state_19062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19062__$1,inst_19060);
} else {
return null;
}
}
});})(c__18242__auto__,f__$1))
;
return ((function (switch__18130__auto__,c__18242__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18131__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18131__auto____0 = (function (){
var statearr_19067 = [null,null,null,null,null,null,null];
(statearr_19067[(0)] = cljs$core$async$transduce_$_state_machine__18131__auto__);

(statearr_19067[(1)] = (1));

return statearr_19067;
});
var cljs$core$async$transduce_$_state_machine__18131__auto____1 = (function (state_19062){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_19062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e19068){if((e19068 instanceof Object)){
var ex__18134__auto__ = e19068;
var statearr_19069_19071 = state_19062;
(statearr_19069_19071[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19072 = state_19062;
state_19062 = G__19072;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18131__auto__ = function(state_19062){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18131__auto____1.call(this,state_19062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18131__auto____0;
cljs$core$async$transduce_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18131__auto____1;
return cljs$core$async$transduce_$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__,f__$1))
})();
var state__18244__auto__ = (function (){var statearr_19070 = f__18243__auto__.call(null);
(statearr_19070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_19070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__,f__$1))
);

return c__18242__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19073 = [];
var len__12775__auto___19125 = arguments.length;
var i__12776__auto___19126 = (0);
while(true){
if((i__12776__auto___19126 < len__12775__auto___19125)){
args19073.push((arguments[i__12776__auto___19126]));

var G__19127 = (i__12776__auto___19126 + (1));
i__12776__auto___19126 = G__19127;
continue;
} else {
}
break;
}

var G__19075 = args19073.length;
switch (G__19075) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19073.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__){
return (function (state_19100){
var state_val_19101 = (state_19100[(1)]);
if((state_val_19101 === (7))){
var inst_19082 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19102_19129 = state_19100__$1;
(statearr_19102_19129[(2)] = inst_19082);

(statearr_19102_19129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (1))){
var inst_19076 = cljs.core.seq.call(null,coll);
var inst_19077 = inst_19076;
var state_19100__$1 = (function (){var statearr_19103 = state_19100;
(statearr_19103[(7)] = inst_19077);

return statearr_19103;
})();
var statearr_19104_19130 = state_19100__$1;
(statearr_19104_19130[(2)] = null);

(statearr_19104_19130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (4))){
var inst_19077 = (state_19100[(7)]);
var inst_19080 = cljs.core.first.call(null,inst_19077);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19100__$1,(7),ch,inst_19080);
} else {
if((state_val_19101 === (13))){
var inst_19094 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19105_19131 = state_19100__$1;
(statearr_19105_19131[(2)] = inst_19094);

(statearr_19105_19131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (6))){
var inst_19085 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
if(cljs.core.truth_(inst_19085)){
var statearr_19106_19132 = state_19100__$1;
(statearr_19106_19132[(1)] = (8));

} else {
var statearr_19107_19133 = state_19100__$1;
(statearr_19107_19133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (3))){
var inst_19098 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19100__$1,inst_19098);
} else {
if((state_val_19101 === (12))){
var state_19100__$1 = state_19100;
var statearr_19108_19134 = state_19100__$1;
(statearr_19108_19134[(2)] = null);

(statearr_19108_19134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (2))){
var inst_19077 = (state_19100[(7)]);
var state_19100__$1 = state_19100;
if(cljs.core.truth_(inst_19077)){
var statearr_19109_19135 = state_19100__$1;
(statearr_19109_19135[(1)] = (4));

} else {
var statearr_19110_19136 = state_19100__$1;
(statearr_19110_19136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (11))){
var inst_19091 = cljs.core.async.close_BANG_.call(null,ch);
var state_19100__$1 = state_19100;
var statearr_19111_19137 = state_19100__$1;
(statearr_19111_19137[(2)] = inst_19091);

(statearr_19111_19137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (9))){
var state_19100__$1 = state_19100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19112_19138 = state_19100__$1;
(statearr_19112_19138[(1)] = (11));

} else {
var statearr_19113_19139 = state_19100__$1;
(statearr_19113_19139[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (5))){
var inst_19077 = (state_19100[(7)]);
var state_19100__$1 = state_19100;
var statearr_19114_19140 = state_19100__$1;
(statearr_19114_19140[(2)] = inst_19077);

(statearr_19114_19140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (10))){
var inst_19096 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19115_19141 = state_19100__$1;
(statearr_19115_19141[(2)] = inst_19096);

(statearr_19115_19141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (8))){
var inst_19077 = (state_19100[(7)]);
var inst_19087 = cljs.core.next.call(null,inst_19077);
var inst_19077__$1 = inst_19087;
var state_19100__$1 = (function (){var statearr_19116 = state_19100;
(statearr_19116[(7)] = inst_19077__$1);

return statearr_19116;
})();
var statearr_19117_19142 = state_19100__$1;
(statearr_19117_19142[(2)] = null);

(statearr_19117_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto__))
;
return ((function (switch__18130__auto__,c__18242__auto__){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_19121 = [null,null,null,null,null,null,null,null];
(statearr_19121[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_19121[(1)] = (1));

return statearr_19121;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_19100){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_19100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e19122){if((e19122 instanceof Object)){
var ex__18134__auto__ = e19122;
var statearr_19123_19143 = state_19100;
(statearr_19123_19143[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19144 = state_19100;
state_19100 = G__19144;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_19100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_19100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__))
})();
var state__18244__auto__ = (function (){var statearr_19124 = f__18243__auto__.call(null);
(statearr_19124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_19124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__))
);

return c__18242__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12363__auto__ = (((_ == null))?null:_);
var m__12364__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,_);
} else {
var m__12364__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__12364__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,ch);
} else {
var m__12364__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m);
} else {
var m__12364__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19370 = (function (mult,ch,cs,meta19371){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19371 = meta19371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19372,meta19371__$1){
var self__ = this;
var _19372__$1 = this;
return (new cljs.core.async.t_cljs$core$async19370(self__.mult,self__.ch,self__.cs,meta19371__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19372){
var self__ = this;
var _19372__$1 = this;
return self__.meta19371;
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19371","meta19371",-68301931,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19370";

cljs.core.async.t_cljs$core$async19370.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async19370");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19370 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19370(mult__$1,ch__$1,cs__$1,meta19371){
return (new cljs.core.async.t_cljs$core$async19370(mult__$1,ch__$1,cs__$1,meta19371));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19370(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18242__auto___19595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___19595,cs,m,dchan,dctr,done){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___19595,cs,m,dchan,dctr,done){
return (function (state_19507){
var state_val_19508 = (state_19507[(1)]);
if((state_val_19508 === (7))){
var inst_19503 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19509_19596 = state_19507__$1;
(statearr_19509_19596[(2)] = inst_19503);

(statearr_19509_19596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (20))){
var inst_19406 = (state_19507[(7)]);
var inst_19418 = cljs.core.first.call(null,inst_19406);
var inst_19419 = cljs.core.nth.call(null,inst_19418,(0),null);
var inst_19420 = cljs.core.nth.call(null,inst_19418,(1),null);
var state_19507__$1 = (function (){var statearr_19510 = state_19507;
(statearr_19510[(8)] = inst_19419);

return statearr_19510;
})();
if(cljs.core.truth_(inst_19420)){
var statearr_19511_19597 = state_19507__$1;
(statearr_19511_19597[(1)] = (22));

} else {
var statearr_19512_19598 = state_19507__$1;
(statearr_19512_19598[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (27))){
var inst_19450 = (state_19507[(9)]);
var inst_19375 = (state_19507[(10)]);
var inst_19455 = (state_19507[(11)]);
var inst_19448 = (state_19507[(12)]);
var inst_19455__$1 = cljs.core._nth.call(null,inst_19448,inst_19450);
var inst_19456 = cljs.core.async.put_BANG_.call(null,inst_19455__$1,inst_19375,done);
var state_19507__$1 = (function (){var statearr_19513 = state_19507;
(statearr_19513[(11)] = inst_19455__$1);

return statearr_19513;
})();
if(cljs.core.truth_(inst_19456)){
var statearr_19514_19599 = state_19507__$1;
(statearr_19514_19599[(1)] = (30));

} else {
var statearr_19515_19600 = state_19507__$1;
(statearr_19515_19600[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (1))){
var state_19507__$1 = state_19507;
var statearr_19516_19601 = state_19507__$1;
(statearr_19516_19601[(2)] = null);

(statearr_19516_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (24))){
var inst_19406 = (state_19507[(7)]);
var inst_19425 = (state_19507[(2)]);
var inst_19426 = cljs.core.next.call(null,inst_19406);
var inst_19384 = inst_19426;
var inst_19385 = null;
var inst_19386 = (0);
var inst_19387 = (0);
var state_19507__$1 = (function (){var statearr_19517 = state_19507;
(statearr_19517[(13)] = inst_19387);

(statearr_19517[(14)] = inst_19425);

(statearr_19517[(15)] = inst_19386);

(statearr_19517[(16)] = inst_19385);

(statearr_19517[(17)] = inst_19384);

return statearr_19517;
})();
var statearr_19518_19602 = state_19507__$1;
(statearr_19518_19602[(2)] = null);

(statearr_19518_19602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (39))){
var state_19507__$1 = state_19507;
var statearr_19522_19603 = state_19507__$1;
(statearr_19522_19603[(2)] = null);

(statearr_19522_19603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (4))){
var inst_19375 = (state_19507[(10)]);
var inst_19375__$1 = (state_19507[(2)]);
var inst_19376 = (inst_19375__$1 == null);
var state_19507__$1 = (function (){var statearr_19523 = state_19507;
(statearr_19523[(10)] = inst_19375__$1);

return statearr_19523;
})();
if(cljs.core.truth_(inst_19376)){
var statearr_19524_19604 = state_19507__$1;
(statearr_19524_19604[(1)] = (5));

} else {
var statearr_19525_19605 = state_19507__$1;
(statearr_19525_19605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (15))){
var inst_19387 = (state_19507[(13)]);
var inst_19386 = (state_19507[(15)]);
var inst_19385 = (state_19507[(16)]);
var inst_19384 = (state_19507[(17)]);
var inst_19402 = (state_19507[(2)]);
var inst_19403 = (inst_19387 + (1));
var tmp19519 = inst_19386;
var tmp19520 = inst_19385;
var tmp19521 = inst_19384;
var inst_19384__$1 = tmp19521;
var inst_19385__$1 = tmp19520;
var inst_19386__$1 = tmp19519;
var inst_19387__$1 = inst_19403;
var state_19507__$1 = (function (){var statearr_19526 = state_19507;
(statearr_19526[(13)] = inst_19387__$1);

(statearr_19526[(15)] = inst_19386__$1);

(statearr_19526[(18)] = inst_19402);

(statearr_19526[(16)] = inst_19385__$1);

(statearr_19526[(17)] = inst_19384__$1);

return statearr_19526;
})();
var statearr_19527_19606 = state_19507__$1;
(statearr_19527_19606[(2)] = null);

(statearr_19527_19606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (21))){
var inst_19429 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19531_19607 = state_19507__$1;
(statearr_19531_19607[(2)] = inst_19429);

(statearr_19531_19607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (31))){
var inst_19455 = (state_19507[(11)]);
var inst_19459 = done.call(null,null);
var inst_19460 = cljs.core.async.untap_STAR_.call(null,m,inst_19455);
var state_19507__$1 = (function (){var statearr_19532 = state_19507;
(statearr_19532[(19)] = inst_19459);

return statearr_19532;
})();
var statearr_19533_19608 = state_19507__$1;
(statearr_19533_19608[(2)] = inst_19460);

(statearr_19533_19608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (32))){
var inst_19449 = (state_19507[(20)]);
var inst_19450 = (state_19507[(9)]);
var inst_19447 = (state_19507[(21)]);
var inst_19448 = (state_19507[(12)]);
var inst_19462 = (state_19507[(2)]);
var inst_19463 = (inst_19450 + (1));
var tmp19528 = inst_19449;
var tmp19529 = inst_19447;
var tmp19530 = inst_19448;
var inst_19447__$1 = tmp19529;
var inst_19448__$1 = tmp19530;
var inst_19449__$1 = tmp19528;
var inst_19450__$1 = inst_19463;
var state_19507__$1 = (function (){var statearr_19534 = state_19507;
(statearr_19534[(20)] = inst_19449__$1);

(statearr_19534[(9)] = inst_19450__$1);

(statearr_19534[(21)] = inst_19447__$1);

(statearr_19534[(12)] = inst_19448__$1);

(statearr_19534[(22)] = inst_19462);

return statearr_19534;
})();
var statearr_19535_19609 = state_19507__$1;
(statearr_19535_19609[(2)] = null);

(statearr_19535_19609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (40))){
var inst_19475 = (state_19507[(23)]);
var inst_19479 = done.call(null,null);
var inst_19480 = cljs.core.async.untap_STAR_.call(null,m,inst_19475);
var state_19507__$1 = (function (){var statearr_19536 = state_19507;
(statearr_19536[(24)] = inst_19479);

return statearr_19536;
})();
var statearr_19537_19610 = state_19507__$1;
(statearr_19537_19610[(2)] = inst_19480);

(statearr_19537_19610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (33))){
var inst_19466 = (state_19507[(25)]);
var inst_19468 = cljs.core.chunked_seq_QMARK_.call(null,inst_19466);
var state_19507__$1 = state_19507;
if(inst_19468){
var statearr_19538_19611 = state_19507__$1;
(statearr_19538_19611[(1)] = (36));

} else {
var statearr_19539_19612 = state_19507__$1;
(statearr_19539_19612[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (13))){
var inst_19396 = (state_19507[(26)]);
var inst_19399 = cljs.core.async.close_BANG_.call(null,inst_19396);
var state_19507__$1 = state_19507;
var statearr_19540_19613 = state_19507__$1;
(statearr_19540_19613[(2)] = inst_19399);

(statearr_19540_19613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (22))){
var inst_19419 = (state_19507[(8)]);
var inst_19422 = cljs.core.async.close_BANG_.call(null,inst_19419);
var state_19507__$1 = state_19507;
var statearr_19541_19614 = state_19507__$1;
(statearr_19541_19614[(2)] = inst_19422);

(statearr_19541_19614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (36))){
var inst_19466 = (state_19507[(25)]);
var inst_19470 = cljs.core.chunk_first.call(null,inst_19466);
var inst_19471 = cljs.core.chunk_rest.call(null,inst_19466);
var inst_19472 = cljs.core.count.call(null,inst_19470);
var inst_19447 = inst_19471;
var inst_19448 = inst_19470;
var inst_19449 = inst_19472;
var inst_19450 = (0);
var state_19507__$1 = (function (){var statearr_19542 = state_19507;
(statearr_19542[(20)] = inst_19449);

(statearr_19542[(9)] = inst_19450);

(statearr_19542[(21)] = inst_19447);

(statearr_19542[(12)] = inst_19448);

return statearr_19542;
})();
var statearr_19543_19615 = state_19507__$1;
(statearr_19543_19615[(2)] = null);

(statearr_19543_19615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (41))){
var inst_19466 = (state_19507[(25)]);
var inst_19482 = (state_19507[(2)]);
var inst_19483 = cljs.core.next.call(null,inst_19466);
var inst_19447 = inst_19483;
var inst_19448 = null;
var inst_19449 = (0);
var inst_19450 = (0);
var state_19507__$1 = (function (){var statearr_19544 = state_19507;
(statearr_19544[(20)] = inst_19449);

(statearr_19544[(9)] = inst_19450);

(statearr_19544[(21)] = inst_19447);

(statearr_19544[(27)] = inst_19482);

(statearr_19544[(12)] = inst_19448);

return statearr_19544;
})();
var statearr_19545_19616 = state_19507__$1;
(statearr_19545_19616[(2)] = null);

(statearr_19545_19616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (43))){
var state_19507__$1 = state_19507;
var statearr_19546_19617 = state_19507__$1;
(statearr_19546_19617[(2)] = null);

(statearr_19546_19617[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (29))){
var inst_19491 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19547_19618 = state_19507__$1;
(statearr_19547_19618[(2)] = inst_19491);

(statearr_19547_19618[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (44))){
var inst_19500 = (state_19507[(2)]);
var state_19507__$1 = (function (){var statearr_19548 = state_19507;
(statearr_19548[(28)] = inst_19500);

return statearr_19548;
})();
var statearr_19549_19619 = state_19507__$1;
(statearr_19549_19619[(2)] = null);

(statearr_19549_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (6))){
var inst_19439 = (state_19507[(29)]);
var inst_19438 = cljs.core.deref.call(null,cs);
var inst_19439__$1 = cljs.core.keys.call(null,inst_19438);
var inst_19440 = cljs.core.count.call(null,inst_19439__$1);
var inst_19441 = cljs.core.reset_BANG_.call(null,dctr,inst_19440);
var inst_19446 = cljs.core.seq.call(null,inst_19439__$1);
var inst_19447 = inst_19446;
var inst_19448 = null;
var inst_19449 = (0);
var inst_19450 = (0);
var state_19507__$1 = (function (){var statearr_19550 = state_19507;
(statearr_19550[(20)] = inst_19449);

(statearr_19550[(30)] = inst_19441);

(statearr_19550[(29)] = inst_19439__$1);

(statearr_19550[(9)] = inst_19450);

(statearr_19550[(21)] = inst_19447);

(statearr_19550[(12)] = inst_19448);

return statearr_19550;
})();
var statearr_19551_19620 = state_19507__$1;
(statearr_19551_19620[(2)] = null);

(statearr_19551_19620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (28))){
var inst_19466 = (state_19507[(25)]);
var inst_19447 = (state_19507[(21)]);
var inst_19466__$1 = cljs.core.seq.call(null,inst_19447);
var state_19507__$1 = (function (){var statearr_19552 = state_19507;
(statearr_19552[(25)] = inst_19466__$1);

return statearr_19552;
})();
if(inst_19466__$1){
var statearr_19553_19621 = state_19507__$1;
(statearr_19553_19621[(1)] = (33));

} else {
var statearr_19554_19622 = state_19507__$1;
(statearr_19554_19622[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (25))){
var inst_19449 = (state_19507[(20)]);
var inst_19450 = (state_19507[(9)]);
var inst_19452 = (inst_19450 < inst_19449);
var inst_19453 = inst_19452;
var state_19507__$1 = state_19507;
if(cljs.core.truth_(inst_19453)){
var statearr_19555_19623 = state_19507__$1;
(statearr_19555_19623[(1)] = (27));

} else {
var statearr_19556_19624 = state_19507__$1;
(statearr_19556_19624[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (34))){
var state_19507__$1 = state_19507;
var statearr_19557_19625 = state_19507__$1;
(statearr_19557_19625[(2)] = null);

(statearr_19557_19625[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (17))){
var state_19507__$1 = state_19507;
var statearr_19558_19626 = state_19507__$1;
(statearr_19558_19626[(2)] = null);

(statearr_19558_19626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (3))){
var inst_19505 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19507__$1,inst_19505);
} else {
if((state_val_19508 === (12))){
var inst_19434 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19559_19627 = state_19507__$1;
(statearr_19559_19627[(2)] = inst_19434);

(statearr_19559_19627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (2))){
var state_19507__$1 = state_19507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19507__$1,(4),ch);
} else {
if((state_val_19508 === (23))){
var state_19507__$1 = state_19507;
var statearr_19560_19628 = state_19507__$1;
(statearr_19560_19628[(2)] = null);

(statearr_19560_19628[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (35))){
var inst_19489 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19561_19629 = state_19507__$1;
(statearr_19561_19629[(2)] = inst_19489);

(statearr_19561_19629[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (19))){
var inst_19406 = (state_19507[(7)]);
var inst_19410 = cljs.core.chunk_first.call(null,inst_19406);
var inst_19411 = cljs.core.chunk_rest.call(null,inst_19406);
var inst_19412 = cljs.core.count.call(null,inst_19410);
var inst_19384 = inst_19411;
var inst_19385 = inst_19410;
var inst_19386 = inst_19412;
var inst_19387 = (0);
var state_19507__$1 = (function (){var statearr_19562 = state_19507;
(statearr_19562[(13)] = inst_19387);

(statearr_19562[(15)] = inst_19386);

(statearr_19562[(16)] = inst_19385);

(statearr_19562[(17)] = inst_19384);

return statearr_19562;
})();
var statearr_19563_19630 = state_19507__$1;
(statearr_19563_19630[(2)] = null);

(statearr_19563_19630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (11))){
var inst_19406 = (state_19507[(7)]);
var inst_19384 = (state_19507[(17)]);
var inst_19406__$1 = cljs.core.seq.call(null,inst_19384);
var state_19507__$1 = (function (){var statearr_19564 = state_19507;
(statearr_19564[(7)] = inst_19406__$1);

return statearr_19564;
})();
if(inst_19406__$1){
var statearr_19565_19631 = state_19507__$1;
(statearr_19565_19631[(1)] = (16));

} else {
var statearr_19566_19632 = state_19507__$1;
(statearr_19566_19632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (9))){
var inst_19436 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19567_19633 = state_19507__$1;
(statearr_19567_19633[(2)] = inst_19436);

(statearr_19567_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (5))){
var inst_19382 = cljs.core.deref.call(null,cs);
var inst_19383 = cljs.core.seq.call(null,inst_19382);
var inst_19384 = inst_19383;
var inst_19385 = null;
var inst_19386 = (0);
var inst_19387 = (0);
var state_19507__$1 = (function (){var statearr_19568 = state_19507;
(statearr_19568[(13)] = inst_19387);

(statearr_19568[(15)] = inst_19386);

(statearr_19568[(16)] = inst_19385);

(statearr_19568[(17)] = inst_19384);

return statearr_19568;
})();
var statearr_19569_19634 = state_19507__$1;
(statearr_19569_19634[(2)] = null);

(statearr_19569_19634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (14))){
var state_19507__$1 = state_19507;
var statearr_19570_19635 = state_19507__$1;
(statearr_19570_19635[(2)] = null);

(statearr_19570_19635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (45))){
var inst_19497 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19571_19636 = state_19507__$1;
(statearr_19571_19636[(2)] = inst_19497);

(statearr_19571_19636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (26))){
var inst_19439 = (state_19507[(29)]);
var inst_19493 = (state_19507[(2)]);
var inst_19494 = cljs.core.seq.call(null,inst_19439);
var state_19507__$1 = (function (){var statearr_19572 = state_19507;
(statearr_19572[(31)] = inst_19493);

return statearr_19572;
})();
if(inst_19494){
var statearr_19573_19637 = state_19507__$1;
(statearr_19573_19637[(1)] = (42));

} else {
var statearr_19574_19638 = state_19507__$1;
(statearr_19574_19638[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (16))){
var inst_19406 = (state_19507[(7)]);
var inst_19408 = cljs.core.chunked_seq_QMARK_.call(null,inst_19406);
var state_19507__$1 = state_19507;
if(inst_19408){
var statearr_19575_19639 = state_19507__$1;
(statearr_19575_19639[(1)] = (19));

} else {
var statearr_19576_19640 = state_19507__$1;
(statearr_19576_19640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (38))){
var inst_19486 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19577_19641 = state_19507__$1;
(statearr_19577_19641[(2)] = inst_19486);

(statearr_19577_19641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (30))){
var state_19507__$1 = state_19507;
var statearr_19578_19642 = state_19507__$1;
(statearr_19578_19642[(2)] = null);

(statearr_19578_19642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (10))){
var inst_19387 = (state_19507[(13)]);
var inst_19385 = (state_19507[(16)]);
var inst_19395 = cljs.core._nth.call(null,inst_19385,inst_19387);
var inst_19396 = cljs.core.nth.call(null,inst_19395,(0),null);
var inst_19397 = cljs.core.nth.call(null,inst_19395,(1),null);
var state_19507__$1 = (function (){var statearr_19579 = state_19507;
(statearr_19579[(26)] = inst_19396);

return statearr_19579;
})();
if(cljs.core.truth_(inst_19397)){
var statearr_19580_19643 = state_19507__$1;
(statearr_19580_19643[(1)] = (13));

} else {
var statearr_19581_19644 = state_19507__$1;
(statearr_19581_19644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (18))){
var inst_19432 = (state_19507[(2)]);
var state_19507__$1 = state_19507;
var statearr_19582_19645 = state_19507__$1;
(statearr_19582_19645[(2)] = inst_19432);

(statearr_19582_19645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (42))){
var state_19507__$1 = state_19507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19507__$1,(45),dchan);
} else {
if((state_val_19508 === (37))){
var inst_19466 = (state_19507[(25)]);
var inst_19375 = (state_19507[(10)]);
var inst_19475 = (state_19507[(23)]);
var inst_19475__$1 = cljs.core.first.call(null,inst_19466);
var inst_19476 = cljs.core.async.put_BANG_.call(null,inst_19475__$1,inst_19375,done);
var state_19507__$1 = (function (){var statearr_19583 = state_19507;
(statearr_19583[(23)] = inst_19475__$1);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19476)){
var statearr_19584_19646 = state_19507__$1;
(statearr_19584_19646[(1)] = (39));

} else {
var statearr_19585_19647 = state_19507__$1;
(statearr_19585_19647[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19508 === (8))){
var inst_19387 = (state_19507[(13)]);
var inst_19386 = (state_19507[(15)]);
var inst_19389 = (inst_19387 < inst_19386);
var inst_19390 = inst_19389;
var state_19507__$1 = state_19507;
if(cljs.core.truth_(inst_19390)){
var statearr_19586_19648 = state_19507__$1;
(statearr_19586_19648[(1)] = (10));

} else {
var statearr_19587_19649 = state_19507__$1;
(statearr_19587_19649[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___19595,cs,m,dchan,dctr,done))
;
return ((function (switch__18130__auto__,c__18242__auto___19595,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18131__auto__ = null;
var cljs$core$async$mult_$_state_machine__18131__auto____0 = (function (){
var statearr_19591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19591[(0)] = cljs$core$async$mult_$_state_machine__18131__auto__);

(statearr_19591[(1)] = (1));

return statearr_19591;
});
var cljs$core$async$mult_$_state_machine__18131__auto____1 = (function (state_19507){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_19507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e19592){if((e19592 instanceof Object)){
var ex__18134__auto__ = e19592;
var statearr_19593_19650 = state_19507;
(statearr_19593_19650[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19651 = state_19507;
state_19507 = G__19651;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18131__auto__ = function(state_19507){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18131__auto____1.call(this,state_19507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18131__auto____0;
cljs$core$async$mult_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18131__auto____1;
return cljs$core$async$mult_$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___19595,cs,m,dchan,dctr,done))
})();
var state__18244__auto__ = (function (){var statearr_19594 = f__18243__auto__.call(null);
(statearr_19594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___19595);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___19595,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args19652 = [];
var len__12775__auto___19655 = arguments.length;
var i__12776__auto___19656 = (0);
while(true){
if((i__12776__auto___19656 < len__12775__auto___19655)){
args19652.push((arguments[i__12776__auto___19656]));

var G__19657 = (i__12776__auto___19656 + (1));
i__12776__auto___19656 = G__19657;
continue;
} else {
}
break;
}

var G__19654 = args19652.length;
switch (G__19654) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19652.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,ch);
} else {
var m__12364__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,ch);
} else {
var m__12364__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m);
} else {
var m__12364__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,state_map);
} else {
var m__12364__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12363__auto__ = (((m == null))?null:m);
var m__12364__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,m,mode);
} else {
var m__12364__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___19669 = arguments.length;
var i__12776__auto___19670 = (0);
while(true){
if((i__12776__auto___19670 < len__12775__auto___19669)){
args__12782__auto__.push((arguments[i__12776__auto___19670]));

var G__19671 = (i__12776__auto___19670 + (1));
i__12776__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((3) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12783__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19663){
var map__19664 = p__19663;
var map__19664__$1 = ((((!((map__19664 == null)))?((((map__19664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19664):map__19664);
var opts = map__19664__$1;
var statearr_19666_19672 = state;
(statearr_19666_19672[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__19664,map__19664__$1,opts){
return (function (val){
var statearr_19667_19673 = state;
(statearr_19667_19673[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19664,map__19664__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19668_19674 = state;
(statearr_19668_19674[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19659){
var G__19660 = cljs.core.first.call(null,seq19659);
var seq19659__$1 = cljs.core.next.call(null,seq19659);
var G__19661 = cljs.core.first.call(null,seq19659__$1);
var seq19659__$2 = cljs.core.next.call(null,seq19659__$1);
var G__19662 = cljs.core.first.call(null,seq19659__$2);
var seq19659__$3 = cljs.core.next.call(null,seq19659__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19660,G__19661,G__19662,seq19659__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19840 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19840 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19841){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19841 = meta19841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19842,meta19841__$1){
var self__ = this;
var _19842__$1 = this;
return (new cljs.core.async.t_cljs$core$async19840(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19841__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19842){
var self__ = this;
var _19842__$1 = this;
return self__.meta19841;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19841","meta19841",202475172,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19840.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19840";

cljs.core.async.t_cljs$core$async19840.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async19840");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19840 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19841){
return (new cljs.core.async.t_cljs$core$async19840(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19841));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19840(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18242__auto___20005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19942){
var state_val_19943 = (state_19942[(1)]);
if((state_val_19943 === (7))){
var inst_19858 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19944_20006 = state_19942__$1;
(statearr_19944_20006[(2)] = inst_19858);

(statearr_19944_20006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (20))){
var inst_19870 = (state_19942[(7)]);
var state_19942__$1 = state_19942;
var statearr_19945_20007 = state_19942__$1;
(statearr_19945_20007[(2)] = inst_19870);

(statearr_19945_20007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (27))){
var state_19942__$1 = state_19942;
var statearr_19946_20008 = state_19942__$1;
(statearr_19946_20008[(2)] = null);

(statearr_19946_20008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (1))){
var inst_19846 = (state_19942[(8)]);
var inst_19846__$1 = calc_state.call(null);
var inst_19848 = (inst_19846__$1 == null);
var inst_19849 = cljs.core.not.call(null,inst_19848);
var state_19942__$1 = (function (){var statearr_19947 = state_19942;
(statearr_19947[(8)] = inst_19846__$1);

return statearr_19947;
})();
if(inst_19849){
var statearr_19948_20009 = state_19942__$1;
(statearr_19948_20009[(1)] = (2));

} else {
var statearr_19949_20010 = state_19942__$1;
(statearr_19949_20010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (24))){
var inst_19916 = (state_19942[(9)]);
var inst_19893 = (state_19942[(10)]);
var inst_19902 = (state_19942[(11)]);
var inst_19916__$1 = inst_19893.call(null,inst_19902);
var state_19942__$1 = (function (){var statearr_19950 = state_19942;
(statearr_19950[(9)] = inst_19916__$1);

return statearr_19950;
})();
if(cljs.core.truth_(inst_19916__$1)){
var statearr_19951_20011 = state_19942__$1;
(statearr_19951_20011[(1)] = (29));

} else {
var statearr_19952_20012 = state_19942__$1;
(statearr_19952_20012[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (4))){
var inst_19861 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19861)){
var statearr_19953_20013 = state_19942__$1;
(statearr_19953_20013[(1)] = (8));

} else {
var statearr_19954_20014 = state_19942__$1;
(statearr_19954_20014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (15))){
var inst_19887 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19887)){
var statearr_19955_20015 = state_19942__$1;
(statearr_19955_20015[(1)] = (19));

} else {
var statearr_19956_20016 = state_19942__$1;
(statearr_19956_20016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (21))){
var inst_19892 = (state_19942[(12)]);
var inst_19892__$1 = (state_19942[(2)]);
var inst_19893 = cljs.core.get.call(null,inst_19892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19894 = cljs.core.get.call(null,inst_19892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19895 = cljs.core.get.call(null,inst_19892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19942__$1 = (function (){var statearr_19957 = state_19942;
(statearr_19957[(12)] = inst_19892__$1);

(statearr_19957[(10)] = inst_19893);

(statearr_19957[(13)] = inst_19894);

return statearr_19957;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19942__$1,(22),inst_19895);
} else {
if((state_val_19943 === (31))){
var inst_19924 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19924)){
var statearr_19958_20017 = state_19942__$1;
(statearr_19958_20017[(1)] = (32));

} else {
var statearr_19959_20018 = state_19942__$1;
(statearr_19959_20018[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (32))){
var inst_19901 = (state_19942[(14)]);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19942__$1,(35),out,inst_19901);
} else {
if((state_val_19943 === (33))){
var inst_19892 = (state_19942[(12)]);
var inst_19870 = inst_19892;
var state_19942__$1 = (function (){var statearr_19960 = state_19942;
(statearr_19960[(7)] = inst_19870);

return statearr_19960;
})();
var statearr_19961_20019 = state_19942__$1;
(statearr_19961_20019[(2)] = null);

(statearr_19961_20019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (13))){
var inst_19870 = (state_19942[(7)]);
var inst_19877 = inst_19870.cljs$lang$protocol_mask$partition0$;
var inst_19878 = (inst_19877 & (64));
var inst_19879 = inst_19870.cljs$core$ISeq$;
var inst_19880 = (inst_19878) || (inst_19879);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19880)){
var statearr_19962_20020 = state_19942__$1;
(statearr_19962_20020[(1)] = (16));

} else {
var statearr_19963_20021 = state_19942__$1;
(statearr_19963_20021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (22))){
var inst_19901 = (state_19942[(14)]);
var inst_19902 = (state_19942[(11)]);
var inst_19900 = (state_19942[(2)]);
var inst_19901__$1 = cljs.core.nth.call(null,inst_19900,(0),null);
var inst_19902__$1 = cljs.core.nth.call(null,inst_19900,(1),null);
var inst_19903 = (inst_19901__$1 == null);
var inst_19904 = cljs.core._EQ_.call(null,inst_19902__$1,change);
var inst_19905 = (inst_19903) || (inst_19904);
var state_19942__$1 = (function (){var statearr_19964 = state_19942;
(statearr_19964[(14)] = inst_19901__$1);

(statearr_19964[(11)] = inst_19902__$1);

return statearr_19964;
})();
if(cljs.core.truth_(inst_19905)){
var statearr_19965_20022 = state_19942__$1;
(statearr_19965_20022[(1)] = (23));

} else {
var statearr_19966_20023 = state_19942__$1;
(statearr_19966_20023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (36))){
var inst_19892 = (state_19942[(12)]);
var inst_19870 = inst_19892;
var state_19942__$1 = (function (){var statearr_19967 = state_19942;
(statearr_19967[(7)] = inst_19870);

return statearr_19967;
})();
var statearr_19968_20024 = state_19942__$1;
(statearr_19968_20024[(2)] = null);

(statearr_19968_20024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (29))){
var inst_19916 = (state_19942[(9)]);
var state_19942__$1 = state_19942;
var statearr_19969_20025 = state_19942__$1;
(statearr_19969_20025[(2)] = inst_19916);

(statearr_19969_20025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (6))){
var state_19942__$1 = state_19942;
var statearr_19970_20026 = state_19942__$1;
(statearr_19970_20026[(2)] = false);

(statearr_19970_20026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (28))){
var inst_19912 = (state_19942[(2)]);
var inst_19913 = calc_state.call(null);
var inst_19870 = inst_19913;
var state_19942__$1 = (function (){var statearr_19971 = state_19942;
(statearr_19971[(15)] = inst_19912);

(statearr_19971[(7)] = inst_19870);

return statearr_19971;
})();
var statearr_19972_20027 = state_19942__$1;
(statearr_19972_20027[(2)] = null);

(statearr_19972_20027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (25))){
var inst_19938 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19973_20028 = state_19942__$1;
(statearr_19973_20028[(2)] = inst_19938);

(statearr_19973_20028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (34))){
var inst_19936 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19974_20029 = state_19942__$1;
(statearr_19974_20029[(2)] = inst_19936);

(statearr_19974_20029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (17))){
var state_19942__$1 = state_19942;
var statearr_19975_20030 = state_19942__$1;
(statearr_19975_20030[(2)] = false);

(statearr_19975_20030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (3))){
var state_19942__$1 = state_19942;
var statearr_19976_20031 = state_19942__$1;
(statearr_19976_20031[(2)] = false);

(statearr_19976_20031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (12))){
var inst_19940 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19942__$1,inst_19940);
} else {
if((state_val_19943 === (2))){
var inst_19846 = (state_19942[(8)]);
var inst_19851 = inst_19846.cljs$lang$protocol_mask$partition0$;
var inst_19852 = (inst_19851 & (64));
var inst_19853 = inst_19846.cljs$core$ISeq$;
var inst_19854 = (inst_19852) || (inst_19853);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19854)){
var statearr_19977_20032 = state_19942__$1;
(statearr_19977_20032[(1)] = (5));

} else {
var statearr_19978_20033 = state_19942__$1;
(statearr_19978_20033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (23))){
var inst_19901 = (state_19942[(14)]);
var inst_19907 = (inst_19901 == null);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19907)){
var statearr_19979_20034 = state_19942__$1;
(statearr_19979_20034[(1)] = (26));

} else {
var statearr_19980_20035 = state_19942__$1;
(statearr_19980_20035[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (35))){
var inst_19927 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19927)){
var statearr_19981_20036 = state_19942__$1;
(statearr_19981_20036[(1)] = (36));

} else {
var statearr_19982_20037 = state_19942__$1;
(statearr_19982_20037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (19))){
var inst_19870 = (state_19942[(7)]);
var inst_19889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19870);
var state_19942__$1 = state_19942;
var statearr_19983_20038 = state_19942__$1;
(statearr_19983_20038[(2)] = inst_19889);

(statearr_19983_20038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (11))){
var inst_19870 = (state_19942[(7)]);
var inst_19874 = (inst_19870 == null);
var inst_19875 = cljs.core.not.call(null,inst_19874);
var state_19942__$1 = state_19942;
if(inst_19875){
var statearr_19984_20039 = state_19942__$1;
(statearr_19984_20039[(1)] = (13));

} else {
var statearr_19985_20040 = state_19942__$1;
(statearr_19985_20040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (9))){
var inst_19846 = (state_19942[(8)]);
var state_19942__$1 = state_19942;
var statearr_19986_20041 = state_19942__$1;
(statearr_19986_20041[(2)] = inst_19846);

(statearr_19986_20041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (5))){
var state_19942__$1 = state_19942;
var statearr_19987_20042 = state_19942__$1;
(statearr_19987_20042[(2)] = true);

(statearr_19987_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (14))){
var state_19942__$1 = state_19942;
var statearr_19988_20043 = state_19942__$1;
(statearr_19988_20043[(2)] = false);

(statearr_19988_20043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (26))){
var inst_19902 = (state_19942[(11)]);
var inst_19909 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19902);
var state_19942__$1 = state_19942;
var statearr_19989_20044 = state_19942__$1;
(statearr_19989_20044[(2)] = inst_19909);

(statearr_19989_20044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (16))){
var state_19942__$1 = state_19942;
var statearr_19990_20045 = state_19942__$1;
(statearr_19990_20045[(2)] = true);

(statearr_19990_20045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (38))){
var inst_19932 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19991_20046 = state_19942__$1;
(statearr_19991_20046[(2)] = inst_19932);

(statearr_19991_20046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (30))){
var inst_19893 = (state_19942[(10)]);
var inst_19894 = (state_19942[(13)]);
var inst_19902 = (state_19942[(11)]);
var inst_19919 = cljs.core.empty_QMARK_.call(null,inst_19893);
var inst_19920 = inst_19894.call(null,inst_19902);
var inst_19921 = cljs.core.not.call(null,inst_19920);
var inst_19922 = (inst_19919) && (inst_19921);
var state_19942__$1 = state_19942;
var statearr_19992_20047 = state_19942__$1;
(statearr_19992_20047[(2)] = inst_19922);

(statearr_19992_20047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (10))){
var inst_19846 = (state_19942[(8)]);
var inst_19866 = (state_19942[(2)]);
var inst_19867 = cljs.core.get.call(null,inst_19866,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19868 = cljs.core.get.call(null,inst_19866,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19869 = cljs.core.get.call(null,inst_19866,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19870 = inst_19846;
var state_19942__$1 = (function (){var statearr_19993 = state_19942;
(statearr_19993[(7)] = inst_19870);

(statearr_19993[(16)] = inst_19867);

(statearr_19993[(17)] = inst_19869);

(statearr_19993[(18)] = inst_19868);

return statearr_19993;
})();
var statearr_19994_20048 = state_19942__$1;
(statearr_19994_20048[(2)] = null);

(statearr_19994_20048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (18))){
var inst_19884 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19995_20049 = state_19942__$1;
(statearr_19995_20049[(2)] = inst_19884);

(statearr_19995_20049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (37))){
var state_19942__$1 = state_19942;
var statearr_19996_20050 = state_19942__$1;
(statearr_19996_20050[(2)] = null);

(statearr_19996_20050[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (8))){
var inst_19846 = (state_19942[(8)]);
var inst_19863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19846);
var state_19942__$1 = state_19942;
var statearr_19997_20051 = state_19942__$1;
(statearr_19997_20051[(2)] = inst_19863);

(statearr_19997_20051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18130__auto__,c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18131__auto__ = null;
var cljs$core$async$mix_$_state_machine__18131__auto____0 = (function (){
var statearr_20001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20001[(0)] = cljs$core$async$mix_$_state_machine__18131__auto__);

(statearr_20001[(1)] = (1));

return statearr_20001;
});
var cljs$core$async$mix_$_state_machine__18131__auto____1 = (function (state_19942){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_19942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20002){if((e20002 instanceof Object)){
var ex__18134__auto__ = e20002;
var statearr_20003_20052 = state_19942;
(statearr_20003_20052[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20053 = state_19942;
state_19942 = G__20053;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18131__auto__ = function(state_19942){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18131__auto____1.call(this,state_19942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18131__auto____0;
cljs$core$async$mix_$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18131__auto____1;
return cljs$core$async$mix_$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18244__auto__ = (function (){var statearr_20004 = f__18243__auto__.call(null);
(statearr_20004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20005);

return statearr_20004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12363__auto__ = (((p == null))?null:p);
var m__12364__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__12364__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12363__auto__ = (((p == null))?null:p);
var m__12364__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,p,v,ch);
} else {
var m__12364__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20054 = [];
var len__12775__auto___20057 = arguments.length;
var i__12776__auto___20058 = (0);
while(true){
if((i__12776__auto___20058 < len__12775__auto___20057)){
args20054.push((arguments[i__12776__auto___20058]));

var G__20059 = (i__12776__auto___20058 + (1));
i__12776__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var G__20056 = args20054.length;
switch (G__20056) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20054.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12363__auto__ = (((p == null))?null:p);
var m__12364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,p);
} else {
var m__12364__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12363__auto__ = (((p == null))?null:p);
var m__12364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12363__auto__)]);
if(!((m__12364__auto__ == null))){
return m__12364__auto__.call(null,p,v);
} else {
var m__12364__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12364__auto____$1 == null))){
return m__12364__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20062 = [];
var len__12775__auto___20187 = arguments.length;
var i__12776__auto___20188 = (0);
while(true){
if((i__12776__auto___20188 < len__12775__auto___20187)){
args20062.push((arguments[i__12776__auto___20188]));

var G__20189 = (i__12776__auto___20188 + (1));
i__12776__auto___20188 = G__20189;
continue;
} else {
}
break;
}

var G__20064 = args20062.length;
switch (G__20064) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20062.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11700__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11700__auto__,mults){
return (function (p1__20061_SHARP_){
if(cljs.core.truth_(p1__20061_SHARP_.call(null,topic))){
return p1__20061_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11700__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20066 = meta20066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20067,meta20066__$1){
var self__ = this;
var _20067__$1 = this;
return (new cljs.core.async.t_cljs$core$async20065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20066__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20067){
var self__ = this;
var _20067__$1 = this;
return self__.meta20066;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20066","meta20066",1435679458,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20065";

cljs.core.async.t_cljs$core$async20065.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async20065");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20065 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20066){
return (new cljs.core.async.t_cljs$core$async20065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20066));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18242__auto___20191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20191,mults,ensure_mult,p){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20191,mults,ensure_mult,p){
return (function (state_20139){
var state_val_20140 = (state_20139[(1)]);
if((state_val_20140 === (7))){
var inst_20135 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20141_20192 = state_20139__$1;
(statearr_20141_20192[(2)] = inst_20135);

(statearr_20141_20192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (20))){
var state_20139__$1 = state_20139;
var statearr_20142_20193 = state_20139__$1;
(statearr_20142_20193[(2)] = null);

(statearr_20142_20193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (1))){
var state_20139__$1 = state_20139;
var statearr_20143_20194 = state_20139__$1;
(statearr_20143_20194[(2)] = null);

(statearr_20143_20194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (24))){
var inst_20118 = (state_20139[(7)]);
var inst_20127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20118);
var state_20139__$1 = state_20139;
var statearr_20144_20195 = state_20139__$1;
(statearr_20144_20195[(2)] = inst_20127);

(statearr_20144_20195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (4))){
var inst_20070 = (state_20139[(8)]);
var inst_20070__$1 = (state_20139[(2)]);
var inst_20071 = (inst_20070__$1 == null);
var state_20139__$1 = (function (){var statearr_20145 = state_20139;
(statearr_20145[(8)] = inst_20070__$1);

return statearr_20145;
})();
if(cljs.core.truth_(inst_20071)){
var statearr_20146_20196 = state_20139__$1;
(statearr_20146_20196[(1)] = (5));

} else {
var statearr_20147_20197 = state_20139__$1;
(statearr_20147_20197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (15))){
var inst_20112 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20148_20198 = state_20139__$1;
(statearr_20148_20198[(2)] = inst_20112);

(statearr_20148_20198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (21))){
var inst_20132 = (state_20139[(2)]);
var state_20139__$1 = (function (){var statearr_20149 = state_20139;
(statearr_20149[(9)] = inst_20132);

return statearr_20149;
})();
var statearr_20150_20199 = state_20139__$1;
(statearr_20150_20199[(2)] = null);

(statearr_20150_20199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (13))){
var inst_20094 = (state_20139[(10)]);
var inst_20096 = cljs.core.chunked_seq_QMARK_.call(null,inst_20094);
var state_20139__$1 = state_20139;
if(inst_20096){
var statearr_20151_20200 = state_20139__$1;
(statearr_20151_20200[(1)] = (16));

} else {
var statearr_20152_20201 = state_20139__$1;
(statearr_20152_20201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (22))){
var inst_20124 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
if(cljs.core.truth_(inst_20124)){
var statearr_20153_20202 = state_20139__$1;
(statearr_20153_20202[(1)] = (23));

} else {
var statearr_20154_20203 = state_20139__$1;
(statearr_20154_20203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (6))){
var inst_20070 = (state_20139[(8)]);
var inst_20118 = (state_20139[(7)]);
var inst_20120 = (state_20139[(11)]);
var inst_20118__$1 = topic_fn.call(null,inst_20070);
var inst_20119 = cljs.core.deref.call(null,mults);
var inst_20120__$1 = cljs.core.get.call(null,inst_20119,inst_20118__$1);
var state_20139__$1 = (function (){var statearr_20155 = state_20139;
(statearr_20155[(7)] = inst_20118__$1);

(statearr_20155[(11)] = inst_20120__$1);

return statearr_20155;
})();
if(cljs.core.truth_(inst_20120__$1)){
var statearr_20156_20204 = state_20139__$1;
(statearr_20156_20204[(1)] = (19));

} else {
var statearr_20157_20205 = state_20139__$1;
(statearr_20157_20205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (25))){
var inst_20129 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20158_20206 = state_20139__$1;
(statearr_20158_20206[(2)] = inst_20129);

(statearr_20158_20206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (17))){
var inst_20094 = (state_20139[(10)]);
var inst_20103 = cljs.core.first.call(null,inst_20094);
var inst_20104 = cljs.core.async.muxch_STAR_.call(null,inst_20103);
var inst_20105 = cljs.core.async.close_BANG_.call(null,inst_20104);
var inst_20106 = cljs.core.next.call(null,inst_20094);
var inst_20080 = inst_20106;
var inst_20081 = null;
var inst_20082 = (0);
var inst_20083 = (0);
var state_20139__$1 = (function (){var statearr_20159 = state_20139;
(statearr_20159[(12)] = inst_20083);

(statearr_20159[(13)] = inst_20081);

(statearr_20159[(14)] = inst_20082);

(statearr_20159[(15)] = inst_20080);

(statearr_20159[(16)] = inst_20105);

return statearr_20159;
})();
var statearr_20160_20207 = state_20139__$1;
(statearr_20160_20207[(2)] = null);

(statearr_20160_20207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (3))){
var inst_20137 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20139__$1,inst_20137);
} else {
if((state_val_20140 === (12))){
var inst_20114 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20161_20208 = state_20139__$1;
(statearr_20161_20208[(2)] = inst_20114);

(statearr_20161_20208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (2))){
var state_20139__$1 = state_20139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20139__$1,(4),ch);
} else {
if((state_val_20140 === (23))){
var state_20139__$1 = state_20139;
var statearr_20162_20209 = state_20139__$1;
(statearr_20162_20209[(2)] = null);

(statearr_20162_20209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (19))){
var inst_20070 = (state_20139[(8)]);
var inst_20120 = (state_20139[(11)]);
var inst_20122 = cljs.core.async.muxch_STAR_.call(null,inst_20120);
var state_20139__$1 = state_20139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20139__$1,(22),inst_20122,inst_20070);
} else {
if((state_val_20140 === (11))){
var inst_20080 = (state_20139[(15)]);
var inst_20094 = (state_20139[(10)]);
var inst_20094__$1 = cljs.core.seq.call(null,inst_20080);
var state_20139__$1 = (function (){var statearr_20163 = state_20139;
(statearr_20163[(10)] = inst_20094__$1);

return statearr_20163;
})();
if(inst_20094__$1){
var statearr_20164_20210 = state_20139__$1;
(statearr_20164_20210[(1)] = (13));

} else {
var statearr_20165_20211 = state_20139__$1;
(statearr_20165_20211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (9))){
var inst_20116 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20166_20212 = state_20139__$1;
(statearr_20166_20212[(2)] = inst_20116);

(statearr_20166_20212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (5))){
var inst_20077 = cljs.core.deref.call(null,mults);
var inst_20078 = cljs.core.vals.call(null,inst_20077);
var inst_20079 = cljs.core.seq.call(null,inst_20078);
var inst_20080 = inst_20079;
var inst_20081 = null;
var inst_20082 = (0);
var inst_20083 = (0);
var state_20139__$1 = (function (){var statearr_20167 = state_20139;
(statearr_20167[(12)] = inst_20083);

(statearr_20167[(13)] = inst_20081);

(statearr_20167[(14)] = inst_20082);

(statearr_20167[(15)] = inst_20080);

return statearr_20167;
})();
var statearr_20168_20213 = state_20139__$1;
(statearr_20168_20213[(2)] = null);

(statearr_20168_20213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (14))){
var state_20139__$1 = state_20139;
var statearr_20172_20214 = state_20139__$1;
(statearr_20172_20214[(2)] = null);

(statearr_20172_20214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (16))){
var inst_20094 = (state_20139[(10)]);
var inst_20098 = cljs.core.chunk_first.call(null,inst_20094);
var inst_20099 = cljs.core.chunk_rest.call(null,inst_20094);
var inst_20100 = cljs.core.count.call(null,inst_20098);
var inst_20080 = inst_20099;
var inst_20081 = inst_20098;
var inst_20082 = inst_20100;
var inst_20083 = (0);
var state_20139__$1 = (function (){var statearr_20173 = state_20139;
(statearr_20173[(12)] = inst_20083);

(statearr_20173[(13)] = inst_20081);

(statearr_20173[(14)] = inst_20082);

(statearr_20173[(15)] = inst_20080);

return statearr_20173;
})();
var statearr_20174_20215 = state_20139__$1;
(statearr_20174_20215[(2)] = null);

(statearr_20174_20215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (10))){
var inst_20083 = (state_20139[(12)]);
var inst_20081 = (state_20139[(13)]);
var inst_20082 = (state_20139[(14)]);
var inst_20080 = (state_20139[(15)]);
var inst_20088 = cljs.core._nth.call(null,inst_20081,inst_20083);
var inst_20089 = cljs.core.async.muxch_STAR_.call(null,inst_20088);
var inst_20090 = cljs.core.async.close_BANG_.call(null,inst_20089);
var inst_20091 = (inst_20083 + (1));
var tmp20169 = inst_20081;
var tmp20170 = inst_20082;
var tmp20171 = inst_20080;
var inst_20080__$1 = tmp20171;
var inst_20081__$1 = tmp20169;
var inst_20082__$1 = tmp20170;
var inst_20083__$1 = inst_20091;
var state_20139__$1 = (function (){var statearr_20175 = state_20139;
(statearr_20175[(12)] = inst_20083__$1);

(statearr_20175[(17)] = inst_20090);

(statearr_20175[(13)] = inst_20081__$1);

(statearr_20175[(14)] = inst_20082__$1);

(statearr_20175[(15)] = inst_20080__$1);

return statearr_20175;
})();
var statearr_20176_20216 = state_20139__$1;
(statearr_20176_20216[(2)] = null);

(statearr_20176_20216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (18))){
var inst_20109 = (state_20139[(2)]);
var state_20139__$1 = state_20139;
var statearr_20177_20217 = state_20139__$1;
(statearr_20177_20217[(2)] = inst_20109);

(statearr_20177_20217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20140 === (8))){
var inst_20083 = (state_20139[(12)]);
var inst_20082 = (state_20139[(14)]);
var inst_20085 = (inst_20083 < inst_20082);
var inst_20086 = inst_20085;
var state_20139__$1 = state_20139;
if(cljs.core.truth_(inst_20086)){
var statearr_20178_20218 = state_20139__$1;
(statearr_20178_20218[(1)] = (10));

} else {
var statearr_20179_20219 = state_20139__$1;
(statearr_20179_20219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20191,mults,ensure_mult,p))
;
return ((function (switch__18130__auto__,c__18242__auto___20191,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20183[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20183[(1)] = (1));

return statearr_20183;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20139){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20184){if((e20184 instanceof Object)){
var ex__18134__auto__ = e20184;
var statearr_20185_20220 = state_20139;
(statearr_20185_20220[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20221 = state_20139;
state_20139 = G__20221;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20191,mults,ensure_mult,p))
})();
var state__18244__auto__ = (function (){var statearr_20186 = f__18243__auto__.call(null);
(statearr_20186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20191);

return statearr_20186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20191,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20222 = [];
var len__12775__auto___20225 = arguments.length;
var i__12776__auto___20226 = (0);
while(true){
if((i__12776__auto___20226 < len__12775__auto___20225)){
args20222.push((arguments[i__12776__auto___20226]));

var G__20227 = (i__12776__auto___20226 + (1));
i__12776__auto___20226 = G__20227;
continue;
} else {
}
break;
}

var G__20224 = args20222.length;
switch (G__20224) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20222.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20229 = [];
var len__12775__auto___20232 = arguments.length;
var i__12776__auto___20233 = (0);
while(true){
if((i__12776__auto___20233 < len__12775__auto___20232)){
args20229.push((arguments[i__12776__auto___20233]));

var G__20234 = (i__12776__auto___20233 + (1));
i__12776__auto___20233 = G__20234;
continue;
} else {
}
break;
}

var G__20231 = args20229.length;
switch (G__20231) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20229.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20236 = [];
var len__12775__auto___20307 = arguments.length;
var i__12776__auto___20308 = (0);
while(true){
if((i__12776__auto___20308 < len__12775__auto___20307)){
args20236.push((arguments[i__12776__auto___20308]));

var G__20309 = (i__12776__auto___20308 + (1));
i__12776__auto___20308 = G__20309;
continue;
} else {
}
break;
}

var G__20238 = args20236.length;
switch (G__20238) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20236.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18242__auto___20311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20277){
var state_val_20278 = (state_20277[(1)]);
if((state_val_20278 === (7))){
var state_20277__$1 = state_20277;
var statearr_20279_20312 = state_20277__$1;
(statearr_20279_20312[(2)] = null);

(statearr_20279_20312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (1))){
var state_20277__$1 = state_20277;
var statearr_20280_20313 = state_20277__$1;
(statearr_20280_20313[(2)] = null);

(statearr_20280_20313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (4))){
var inst_20241 = (state_20277[(7)]);
var inst_20243 = (inst_20241 < cnt);
var state_20277__$1 = state_20277;
if(cljs.core.truth_(inst_20243)){
var statearr_20281_20314 = state_20277__$1;
(statearr_20281_20314[(1)] = (6));

} else {
var statearr_20282_20315 = state_20277__$1;
(statearr_20282_20315[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (15))){
var inst_20273 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20283_20316 = state_20277__$1;
(statearr_20283_20316[(2)] = inst_20273);

(statearr_20283_20316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (13))){
var inst_20266 = cljs.core.async.close_BANG_.call(null,out);
var state_20277__$1 = state_20277;
var statearr_20284_20317 = state_20277__$1;
(statearr_20284_20317[(2)] = inst_20266);

(statearr_20284_20317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (6))){
var state_20277__$1 = state_20277;
var statearr_20285_20318 = state_20277__$1;
(statearr_20285_20318[(2)] = null);

(statearr_20285_20318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (3))){
var inst_20275 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20277__$1,inst_20275);
} else {
if((state_val_20278 === (12))){
var inst_20263 = (state_20277[(8)]);
var inst_20263__$1 = (state_20277[(2)]);
var inst_20264 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20263__$1);
var state_20277__$1 = (function (){var statearr_20286 = state_20277;
(statearr_20286[(8)] = inst_20263__$1);

return statearr_20286;
})();
if(cljs.core.truth_(inst_20264)){
var statearr_20287_20319 = state_20277__$1;
(statearr_20287_20319[(1)] = (13));

} else {
var statearr_20288_20320 = state_20277__$1;
(statearr_20288_20320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (2))){
var inst_20240 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20241 = (0);
var state_20277__$1 = (function (){var statearr_20289 = state_20277;
(statearr_20289[(7)] = inst_20241);

(statearr_20289[(9)] = inst_20240);

return statearr_20289;
})();
var statearr_20290_20321 = state_20277__$1;
(statearr_20290_20321[(2)] = null);

(statearr_20290_20321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (11))){
var inst_20241 = (state_20277[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20277,(10),Object,null,(9));
var inst_20250 = chs__$1.call(null,inst_20241);
var inst_20251 = done.call(null,inst_20241);
var inst_20252 = cljs.core.async.take_BANG_.call(null,inst_20250,inst_20251);
var state_20277__$1 = state_20277;
var statearr_20291_20322 = state_20277__$1;
(statearr_20291_20322[(2)] = inst_20252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (9))){
var inst_20241 = (state_20277[(7)]);
var inst_20254 = (state_20277[(2)]);
var inst_20255 = (inst_20241 + (1));
var inst_20241__$1 = inst_20255;
var state_20277__$1 = (function (){var statearr_20292 = state_20277;
(statearr_20292[(7)] = inst_20241__$1);

(statearr_20292[(10)] = inst_20254);

return statearr_20292;
})();
var statearr_20293_20323 = state_20277__$1;
(statearr_20293_20323[(2)] = null);

(statearr_20293_20323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (5))){
var inst_20261 = (state_20277[(2)]);
var state_20277__$1 = (function (){var statearr_20294 = state_20277;
(statearr_20294[(11)] = inst_20261);

return statearr_20294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20277__$1,(12),dchan);
} else {
if((state_val_20278 === (14))){
var inst_20263 = (state_20277[(8)]);
var inst_20268 = cljs.core.apply.call(null,f,inst_20263);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20277__$1,(16),out,inst_20268);
} else {
if((state_val_20278 === (16))){
var inst_20270 = (state_20277[(2)]);
var state_20277__$1 = (function (){var statearr_20295 = state_20277;
(statearr_20295[(12)] = inst_20270);

return statearr_20295;
})();
var statearr_20296_20324 = state_20277__$1;
(statearr_20296_20324[(2)] = null);

(statearr_20296_20324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (10))){
var inst_20245 = (state_20277[(2)]);
var inst_20246 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20277__$1 = (function (){var statearr_20297 = state_20277;
(statearr_20297[(13)] = inst_20245);

return statearr_20297;
})();
var statearr_20298_20325 = state_20277__$1;
(statearr_20298_20325[(2)] = inst_20246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (8))){
var inst_20259 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20299_20326 = state_20277__$1;
(statearr_20299_20326[(2)] = inst_20259);

(statearr_20299_20326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18130__auto__,c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20303[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20303[(1)] = (1));

return statearr_20303;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20277){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20304){if((e20304 instanceof Object)){
var ex__18134__auto__ = e20304;
var statearr_20305_20327 = state_20277;
(statearr_20305_20327[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20328 = state_20277;
state_20277 = G__20328;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18244__auto__ = (function (){var statearr_20306 = f__18243__auto__.call(null);
(statearr_20306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20311);

return statearr_20306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20311,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args20330 = [];
var len__12775__auto___20388 = arguments.length;
var i__12776__auto___20389 = (0);
while(true){
if((i__12776__auto___20389 < len__12775__auto___20388)){
args20330.push((arguments[i__12776__auto___20389]));

var G__20390 = (i__12776__auto___20389 + (1));
i__12776__auto___20389 = G__20390;
continue;
} else {
}
break;
}

var G__20332 = args20330.length;
switch (G__20332) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20330.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___20392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20392,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20392,out){
return (function (state_20364){
var state_val_20365 = (state_20364[(1)]);
if((state_val_20365 === (7))){
var inst_20343 = (state_20364[(7)]);
var inst_20344 = (state_20364[(8)]);
var inst_20343__$1 = (state_20364[(2)]);
var inst_20344__$1 = cljs.core.nth.call(null,inst_20343__$1,(0),null);
var inst_20345 = cljs.core.nth.call(null,inst_20343__$1,(1),null);
var inst_20346 = (inst_20344__$1 == null);
var state_20364__$1 = (function (){var statearr_20366 = state_20364;
(statearr_20366[(9)] = inst_20345);

(statearr_20366[(7)] = inst_20343__$1);

(statearr_20366[(8)] = inst_20344__$1);

return statearr_20366;
})();
if(cljs.core.truth_(inst_20346)){
var statearr_20367_20393 = state_20364__$1;
(statearr_20367_20393[(1)] = (8));

} else {
var statearr_20368_20394 = state_20364__$1;
(statearr_20368_20394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (1))){
var inst_20333 = cljs.core.vec.call(null,chs);
var inst_20334 = inst_20333;
var state_20364__$1 = (function (){var statearr_20369 = state_20364;
(statearr_20369[(10)] = inst_20334);

return statearr_20369;
})();
var statearr_20370_20395 = state_20364__$1;
(statearr_20370_20395[(2)] = null);

(statearr_20370_20395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (4))){
var inst_20334 = (state_20364[(10)]);
var state_20364__$1 = state_20364;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20364__$1,(7),inst_20334);
} else {
if((state_val_20365 === (6))){
var inst_20360 = (state_20364[(2)]);
var state_20364__$1 = state_20364;
var statearr_20371_20396 = state_20364__$1;
(statearr_20371_20396[(2)] = inst_20360);

(statearr_20371_20396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (3))){
var inst_20362 = (state_20364[(2)]);
var state_20364__$1 = state_20364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20364__$1,inst_20362);
} else {
if((state_val_20365 === (2))){
var inst_20334 = (state_20364[(10)]);
var inst_20336 = cljs.core.count.call(null,inst_20334);
var inst_20337 = (inst_20336 > (0));
var state_20364__$1 = state_20364;
if(cljs.core.truth_(inst_20337)){
var statearr_20373_20397 = state_20364__$1;
(statearr_20373_20397[(1)] = (4));

} else {
var statearr_20374_20398 = state_20364__$1;
(statearr_20374_20398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (11))){
var inst_20334 = (state_20364[(10)]);
var inst_20353 = (state_20364[(2)]);
var tmp20372 = inst_20334;
var inst_20334__$1 = tmp20372;
var state_20364__$1 = (function (){var statearr_20375 = state_20364;
(statearr_20375[(10)] = inst_20334__$1);

(statearr_20375[(11)] = inst_20353);

return statearr_20375;
})();
var statearr_20376_20399 = state_20364__$1;
(statearr_20376_20399[(2)] = null);

(statearr_20376_20399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (9))){
var inst_20344 = (state_20364[(8)]);
var state_20364__$1 = state_20364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20364__$1,(11),out,inst_20344);
} else {
if((state_val_20365 === (5))){
var inst_20358 = cljs.core.async.close_BANG_.call(null,out);
var state_20364__$1 = state_20364;
var statearr_20377_20400 = state_20364__$1;
(statearr_20377_20400[(2)] = inst_20358);

(statearr_20377_20400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (10))){
var inst_20356 = (state_20364[(2)]);
var state_20364__$1 = state_20364;
var statearr_20378_20401 = state_20364__$1;
(statearr_20378_20401[(2)] = inst_20356);

(statearr_20378_20401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20365 === (8))){
var inst_20345 = (state_20364[(9)]);
var inst_20343 = (state_20364[(7)]);
var inst_20344 = (state_20364[(8)]);
var inst_20334 = (state_20364[(10)]);
var inst_20348 = (function (){var cs = inst_20334;
var vec__20339 = inst_20343;
var v = inst_20344;
var c = inst_20345;
return ((function (cs,vec__20339,v,c,inst_20345,inst_20343,inst_20344,inst_20334,state_val_20365,c__18242__auto___20392,out){
return (function (p1__20329_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20329_SHARP_);
});
;})(cs,vec__20339,v,c,inst_20345,inst_20343,inst_20344,inst_20334,state_val_20365,c__18242__auto___20392,out))
})();
var inst_20349 = cljs.core.filterv.call(null,inst_20348,inst_20334);
var inst_20334__$1 = inst_20349;
var state_20364__$1 = (function (){var statearr_20379 = state_20364;
(statearr_20379[(10)] = inst_20334__$1);

return statearr_20379;
})();
var statearr_20380_20402 = state_20364__$1;
(statearr_20380_20402[(2)] = null);

(statearr_20380_20402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20392,out))
;
return ((function (switch__18130__auto__,c__18242__auto___20392,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20384[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20384[(1)] = (1));

return statearr_20384;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20364){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20385){if((e20385 instanceof Object)){
var ex__18134__auto__ = e20385;
var statearr_20386_20403 = state_20364;
(statearr_20386_20403[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20404 = state_20364;
state_20364 = G__20404;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20392,out))
})();
var state__18244__auto__ = (function (){var statearr_20387 = f__18243__auto__.call(null);
(statearr_20387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20392);

return statearr_20387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args20405 = [];
var len__12775__auto___20454 = arguments.length;
var i__12776__auto___20455 = (0);
while(true){
if((i__12776__auto___20455 < len__12775__auto___20454)){
args20405.push((arguments[i__12776__auto___20455]));

var G__20456 = (i__12776__auto___20455 + (1));
i__12776__auto___20455 = G__20456;
continue;
} else {
}
break;
}

var G__20407 = args20405.length;
switch (G__20407) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20405.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___20458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20458,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20458,out){
return (function (state_20431){
var state_val_20432 = (state_20431[(1)]);
if((state_val_20432 === (7))){
var inst_20413 = (state_20431[(7)]);
var inst_20413__$1 = (state_20431[(2)]);
var inst_20414 = (inst_20413__$1 == null);
var inst_20415 = cljs.core.not.call(null,inst_20414);
var state_20431__$1 = (function (){var statearr_20433 = state_20431;
(statearr_20433[(7)] = inst_20413__$1);

return statearr_20433;
})();
if(inst_20415){
var statearr_20434_20459 = state_20431__$1;
(statearr_20434_20459[(1)] = (8));

} else {
var statearr_20435_20460 = state_20431__$1;
(statearr_20435_20460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (1))){
var inst_20408 = (0);
var state_20431__$1 = (function (){var statearr_20436 = state_20431;
(statearr_20436[(8)] = inst_20408);

return statearr_20436;
})();
var statearr_20437_20461 = state_20431__$1;
(statearr_20437_20461[(2)] = null);

(statearr_20437_20461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (4))){
var state_20431__$1 = state_20431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20431__$1,(7),ch);
} else {
if((state_val_20432 === (6))){
var inst_20426 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20438_20462 = state_20431__$1;
(statearr_20438_20462[(2)] = inst_20426);

(statearr_20438_20462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (3))){
var inst_20428 = (state_20431[(2)]);
var inst_20429 = cljs.core.async.close_BANG_.call(null,out);
var state_20431__$1 = (function (){var statearr_20439 = state_20431;
(statearr_20439[(9)] = inst_20428);

return statearr_20439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20431__$1,inst_20429);
} else {
if((state_val_20432 === (2))){
var inst_20408 = (state_20431[(8)]);
var inst_20410 = (inst_20408 < n);
var state_20431__$1 = state_20431;
if(cljs.core.truth_(inst_20410)){
var statearr_20440_20463 = state_20431__$1;
(statearr_20440_20463[(1)] = (4));

} else {
var statearr_20441_20464 = state_20431__$1;
(statearr_20441_20464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (11))){
var inst_20408 = (state_20431[(8)]);
var inst_20418 = (state_20431[(2)]);
var inst_20419 = (inst_20408 + (1));
var inst_20408__$1 = inst_20419;
var state_20431__$1 = (function (){var statearr_20442 = state_20431;
(statearr_20442[(8)] = inst_20408__$1);

(statearr_20442[(10)] = inst_20418);

return statearr_20442;
})();
var statearr_20443_20465 = state_20431__$1;
(statearr_20443_20465[(2)] = null);

(statearr_20443_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (9))){
var state_20431__$1 = state_20431;
var statearr_20444_20466 = state_20431__$1;
(statearr_20444_20466[(2)] = null);

(statearr_20444_20466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (5))){
var state_20431__$1 = state_20431;
var statearr_20445_20467 = state_20431__$1;
(statearr_20445_20467[(2)] = null);

(statearr_20445_20467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (10))){
var inst_20423 = (state_20431[(2)]);
var state_20431__$1 = state_20431;
var statearr_20446_20468 = state_20431__$1;
(statearr_20446_20468[(2)] = inst_20423);

(statearr_20446_20468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20432 === (8))){
var inst_20413 = (state_20431[(7)]);
var state_20431__$1 = state_20431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20431__$1,(11),out,inst_20413);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20458,out))
;
return ((function (switch__18130__auto__,c__18242__auto___20458,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20450[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20450[(1)] = (1));

return statearr_20450;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20431){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20451){if((e20451 instanceof Object)){
var ex__18134__auto__ = e20451;
var statearr_20452_20469 = state_20431;
(statearr_20452_20469[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20470 = state_20431;
state_20431 = G__20470;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20458,out))
})();
var state__18244__auto__ = (function (){var statearr_20453 = f__18243__auto__.call(null);
(statearr_20453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20458);

return statearr_20453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20458,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20478 = (function (map_LT_,f,ch,meta20479){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20479 = meta20479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20480,meta20479__$1){
var self__ = this;
var _20480__$1 = this;
return (new cljs.core.async.t_cljs$core$async20478(self__.map_LT_,self__.f,self__.ch,meta20479__$1));
});

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20480){
var self__ = this;
var _20480__$1 = this;
return self__.meta20479;
});

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20481 = (function (map_LT_,f,ch,meta20479,_,fn1,meta20482){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20479 = meta20479;
this._ = _;
this.fn1 = fn1;
this.meta20482 = meta20482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20483,meta20482__$1){
var self__ = this;
var _20483__$1 = this;
return (new cljs.core.async.t_cljs$core$async20481(self__.map_LT_,self__.f,self__.ch,self__.meta20479,self__._,self__.fn1,meta20482__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20483){
var self__ = this;
var _20483__$1 = this;
return self__.meta20482;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20471_SHARP_){
return f1.call(null,(((p1__20471_SHARP_ == null))?null:self__.f.call(null,p1__20471_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20479","meta20479",1636752839,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20478","cljs.core.async/t_cljs$core$async20478",1425543235,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20482","meta20482",-1396293193,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20481";

cljs.core.async.t_cljs$core$async20481.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async20481");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20481 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20481(map_LT___$1,f__$1,ch__$1,meta20479__$1,___$2,fn1__$1,meta20482){
return (new cljs.core.async.t_cljs$core$async20481(map_LT___$1,f__$1,ch__$1,meta20479__$1,___$2,fn1__$1,meta20482));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20481(self__.map_LT_,self__.f,self__.ch,self__.meta20479,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11688__auto__ = ret;
if(cljs.core.truth_(and__11688__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11688__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20479","meta20479",1636752839,null)], null);
});

cljs.core.async.t_cljs$core$async20478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20478";

cljs.core.async.t_cljs$core$async20478.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async20478");
});

cljs.core.async.__GT_t_cljs$core$async20478 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20478(map_LT___$1,f__$1,ch__$1,meta20479){
return (new cljs.core.async.t_cljs$core$async20478(map_LT___$1,f__$1,ch__$1,meta20479));
});

}

return (new cljs.core.async.t_cljs$core$async20478(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20487 = (function (map_GT_,f,ch,meta20488){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20488 = meta20488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20489,meta20488__$1){
var self__ = this;
var _20489__$1 = this;
return (new cljs.core.async.t_cljs$core$async20487(self__.map_GT_,self__.f,self__.ch,meta20488__$1));
});

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20489){
var self__ = this;
var _20489__$1 = this;
return self__.meta20488;
});

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20488","meta20488",-495966977,null)], null);
});

cljs.core.async.t_cljs$core$async20487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20487";

cljs.core.async.t_cljs$core$async20487.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async20487");
});

cljs.core.async.__GT_t_cljs$core$async20487 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20487(map_GT___$1,f__$1,ch__$1,meta20488){
return (new cljs.core.async.t_cljs$core$async20487(map_GT___$1,f__$1,ch__$1,meta20488));
});

}

return (new cljs.core.async.t_cljs$core$async20487(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20493 = (function (filter_GT_,p,ch,meta20494){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20494 = meta20494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20495,meta20494__$1){
var self__ = this;
var _20495__$1 = this;
return (new cljs.core.async.t_cljs$core$async20493(self__.filter_GT_,self__.p,self__.ch,meta20494__$1));
});

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20495){
var self__ = this;
var _20495__$1 = this;
return self__.meta20494;
});

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20494","meta20494",-367815415,null)], null);
});

cljs.core.async.t_cljs$core$async20493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20493";

cljs.core.async.t_cljs$core$async20493.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async20493");
});

cljs.core.async.__GT_t_cljs$core$async20493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20493(filter_GT___$1,p__$1,ch__$1,meta20494){
return (new cljs.core.async.t_cljs$core$async20493(filter_GT___$1,p__$1,ch__$1,meta20494));
});

}

return (new cljs.core.async.t_cljs$core$async20493(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args20496 = [];
var len__12775__auto___20540 = arguments.length;
var i__12776__auto___20541 = (0);
while(true){
if((i__12776__auto___20541 < len__12775__auto___20540)){
args20496.push((arguments[i__12776__auto___20541]));

var G__20542 = (i__12776__auto___20541 + (1));
i__12776__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var G__20498 = args20496.length;
switch (G__20498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20496.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___20544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20544,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20544,out){
return (function (state_20519){
var state_val_20520 = (state_20519[(1)]);
if((state_val_20520 === (7))){
var inst_20515 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20521_20545 = state_20519__$1;
(statearr_20521_20545[(2)] = inst_20515);

(statearr_20521_20545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (1))){
var state_20519__$1 = state_20519;
var statearr_20522_20546 = state_20519__$1;
(statearr_20522_20546[(2)] = null);

(statearr_20522_20546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (4))){
var inst_20501 = (state_20519[(7)]);
var inst_20501__$1 = (state_20519[(2)]);
var inst_20502 = (inst_20501__$1 == null);
var state_20519__$1 = (function (){var statearr_20523 = state_20519;
(statearr_20523[(7)] = inst_20501__$1);

return statearr_20523;
})();
if(cljs.core.truth_(inst_20502)){
var statearr_20524_20547 = state_20519__$1;
(statearr_20524_20547[(1)] = (5));

} else {
var statearr_20525_20548 = state_20519__$1;
(statearr_20525_20548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (6))){
var inst_20501 = (state_20519[(7)]);
var inst_20506 = p.call(null,inst_20501);
var state_20519__$1 = state_20519;
if(cljs.core.truth_(inst_20506)){
var statearr_20526_20549 = state_20519__$1;
(statearr_20526_20549[(1)] = (8));

} else {
var statearr_20527_20550 = state_20519__$1;
(statearr_20527_20550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (3))){
var inst_20517 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20519__$1,inst_20517);
} else {
if((state_val_20520 === (2))){
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20519__$1,(4),ch);
} else {
if((state_val_20520 === (11))){
var inst_20509 = (state_20519[(2)]);
var state_20519__$1 = state_20519;
var statearr_20528_20551 = state_20519__$1;
(statearr_20528_20551[(2)] = inst_20509);

(statearr_20528_20551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (9))){
var state_20519__$1 = state_20519;
var statearr_20529_20552 = state_20519__$1;
(statearr_20529_20552[(2)] = null);

(statearr_20529_20552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (5))){
var inst_20504 = cljs.core.async.close_BANG_.call(null,out);
var state_20519__$1 = state_20519;
var statearr_20530_20553 = state_20519__$1;
(statearr_20530_20553[(2)] = inst_20504);

(statearr_20530_20553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (10))){
var inst_20512 = (state_20519[(2)]);
var state_20519__$1 = (function (){var statearr_20531 = state_20519;
(statearr_20531[(8)] = inst_20512);

return statearr_20531;
})();
var statearr_20532_20554 = state_20519__$1;
(statearr_20532_20554[(2)] = null);

(statearr_20532_20554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20520 === (8))){
var inst_20501 = (state_20519[(7)]);
var state_20519__$1 = state_20519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20519__$1,(11),out,inst_20501);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20544,out))
;
return ((function (switch__18130__auto__,c__18242__auto___20544,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20536 = [null,null,null,null,null,null,null,null,null];
(statearr_20536[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20536[(1)] = (1));

return statearr_20536;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20519){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20537){if((e20537 instanceof Object)){
var ex__18134__auto__ = e20537;
var statearr_20538_20555 = state_20519;
(statearr_20538_20555[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20556 = state_20519;
state_20519 = G__20556;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20544,out))
})();
var state__18244__auto__ = (function (){var statearr_20539 = f__18243__auto__.call(null);
(statearr_20539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20544);

return statearr_20539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20544,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20557 = [];
var len__12775__auto___20560 = arguments.length;
var i__12776__auto___20561 = (0);
while(true){
if((i__12776__auto___20561 < len__12775__auto___20560)){
args20557.push((arguments[i__12776__auto___20561]));

var G__20562 = (i__12776__auto___20561 + (1));
i__12776__auto___20561 = G__20562;
continue;
} else {
}
break;
}

var G__20559 = args20557.length;
switch (G__20559) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20557.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto__){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto__){
return (function (state_20729){
var state_val_20730 = (state_20729[(1)]);
if((state_val_20730 === (7))){
var inst_20725 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
var statearr_20731_20772 = state_20729__$1;
(statearr_20731_20772[(2)] = inst_20725);

(statearr_20731_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (20))){
var inst_20695 = (state_20729[(7)]);
var inst_20706 = (state_20729[(2)]);
var inst_20707 = cljs.core.next.call(null,inst_20695);
var inst_20681 = inst_20707;
var inst_20682 = null;
var inst_20683 = (0);
var inst_20684 = (0);
var state_20729__$1 = (function (){var statearr_20732 = state_20729;
(statearr_20732[(8)] = inst_20681);

(statearr_20732[(9)] = inst_20682);

(statearr_20732[(10)] = inst_20684);

(statearr_20732[(11)] = inst_20683);

(statearr_20732[(12)] = inst_20706);

return statearr_20732;
})();
var statearr_20733_20773 = state_20729__$1;
(statearr_20733_20773[(2)] = null);

(statearr_20733_20773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (1))){
var state_20729__$1 = state_20729;
var statearr_20734_20774 = state_20729__$1;
(statearr_20734_20774[(2)] = null);

(statearr_20734_20774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (4))){
var inst_20670 = (state_20729[(13)]);
var inst_20670__$1 = (state_20729[(2)]);
var inst_20671 = (inst_20670__$1 == null);
var state_20729__$1 = (function (){var statearr_20735 = state_20729;
(statearr_20735[(13)] = inst_20670__$1);

return statearr_20735;
})();
if(cljs.core.truth_(inst_20671)){
var statearr_20736_20775 = state_20729__$1;
(statearr_20736_20775[(1)] = (5));

} else {
var statearr_20737_20776 = state_20729__$1;
(statearr_20737_20776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (15))){
var state_20729__$1 = state_20729;
var statearr_20741_20777 = state_20729__$1;
(statearr_20741_20777[(2)] = null);

(statearr_20741_20777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (21))){
var state_20729__$1 = state_20729;
var statearr_20742_20778 = state_20729__$1;
(statearr_20742_20778[(2)] = null);

(statearr_20742_20778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (13))){
var inst_20681 = (state_20729[(8)]);
var inst_20682 = (state_20729[(9)]);
var inst_20684 = (state_20729[(10)]);
var inst_20683 = (state_20729[(11)]);
var inst_20691 = (state_20729[(2)]);
var inst_20692 = (inst_20684 + (1));
var tmp20738 = inst_20681;
var tmp20739 = inst_20682;
var tmp20740 = inst_20683;
var inst_20681__$1 = tmp20738;
var inst_20682__$1 = tmp20739;
var inst_20683__$1 = tmp20740;
var inst_20684__$1 = inst_20692;
var state_20729__$1 = (function (){var statearr_20743 = state_20729;
(statearr_20743[(8)] = inst_20681__$1);

(statearr_20743[(9)] = inst_20682__$1);

(statearr_20743[(10)] = inst_20684__$1);

(statearr_20743[(14)] = inst_20691);

(statearr_20743[(11)] = inst_20683__$1);

return statearr_20743;
})();
var statearr_20744_20779 = state_20729__$1;
(statearr_20744_20779[(2)] = null);

(statearr_20744_20779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (22))){
var state_20729__$1 = state_20729;
var statearr_20745_20780 = state_20729__$1;
(statearr_20745_20780[(2)] = null);

(statearr_20745_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (6))){
var inst_20670 = (state_20729[(13)]);
var inst_20679 = f.call(null,inst_20670);
var inst_20680 = cljs.core.seq.call(null,inst_20679);
var inst_20681 = inst_20680;
var inst_20682 = null;
var inst_20683 = (0);
var inst_20684 = (0);
var state_20729__$1 = (function (){var statearr_20746 = state_20729;
(statearr_20746[(8)] = inst_20681);

(statearr_20746[(9)] = inst_20682);

(statearr_20746[(10)] = inst_20684);

(statearr_20746[(11)] = inst_20683);

return statearr_20746;
})();
var statearr_20747_20781 = state_20729__$1;
(statearr_20747_20781[(2)] = null);

(statearr_20747_20781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (17))){
var inst_20695 = (state_20729[(7)]);
var inst_20699 = cljs.core.chunk_first.call(null,inst_20695);
var inst_20700 = cljs.core.chunk_rest.call(null,inst_20695);
var inst_20701 = cljs.core.count.call(null,inst_20699);
var inst_20681 = inst_20700;
var inst_20682 = inst_20699;
var inst_20683 = inst_20701;
var inst_20684 = (0);
var state_20729__$1 = (function (){var statearr_20748 = state_20729;
(statearr_20748[(8)] = inst_20681);

(statearr_20748[(9)] = inst_20682);

(statearr_20748[(10)] = inst_20684);

(statearr_20748[(11)] = inst_20683);

return statearr_20748;
})();
var statearr_20749_20782 = state_20729__$1;
(statearr_20749_20782[(2)] = null);

(statearr_20749_20782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (3))){
var inst_20727 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20729__$1,inst_20727);
} else {
if((state_val_20730 === (12))){
var inst_20715 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
var statearr_20750_20783 = state_20729__$1;
(statearr_20750_20783[(2)] = inst_20715);

(statearr_20750_20783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (2))){
var state_20729__$1 = state_20729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20729__$1,(4),in$);
} else {
if((state_val_20730 === (23))){
var inst_20723 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
var statearr_20751_20784 = state_20729__$1;
(statearr_20751_20784[(2)] = inst_20723);

(statearr_20751_20784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (19))){
var inst_20710 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
var statearr_20752_20785 = state_20729__$1;
(statearr_20752_20785[(2)] = inst_20710);

(statearr_20752_20785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (11))){
var inst_20681 = (state_20729[(8)]);
var inst_20695 = (state_20729[(7)]);
var inst_20695__$1 = cljs.core.seq.call(null,inst_20681);
var state_20729__$1 = (function (){var statearr_20753 = state_20729;
(statearr_20753[(7)] = inst_20695__$1);

return statearr_20753;
})();
if(inst_20695__$1){
var statearr_20754_20786 = state_20729__$1;
(statearr_20754_20786[(1)] = (14));

} else {
var statearr_20755_20787 = state_20729__$1;
(statearr_20755_20787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (9))){
var inst_20717 = (state_20729[(2)]);
var inst_20718 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20729__$1 = (function (){var statearr_20756 = state_20729;
(statearr_20756[(15)] = inst_20717);

return statearr_20756;
})();
if(cljs.core.truth_(inst_20718)){
var statearr_20757_20788 = state_20729__$1;
(statearr_20757_20788[(1)] = (21));

} else {
var statearr_20758_20789 = state_20729__$1;
(statearr_20758_20789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (5))){
var inst_20673 = cljs.core.async.close_BANG_.call(null,out);
var state_20729__$1 = state_20729;
var statearr_20759_20790 = state_20729__$1;
(statearr_20759_20790[(2)] = inst_20673);

(statearr_20759_20790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (14))){
var inst_20695 = (state_20729[(7)]);
var inst_20697 = cljs.core.chunked_seq_QMARK_.call(null,inst_20695);
var state_20729__$1 = state_20729;
if(inst_20697){
var statearr_20760_20791 = state_20729__$1;
(statearr_20760_20791[(1)] = (17));

} else {
var statearr_20761_20792 = state_20729__$1;
(statearr_20761_20792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (16))){
var inst_20713 = (state_20729[(2)]);
var state_20729__$1 = state_20729;
var statearr_20762_20793 = state_20729__$1;
(statearr_20762_20793[(2)] = inst_20713);

(statearr_20762_20793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20730 === (10))){
var inst_20682 = (state_20729[(9)]);
var inst_20684 = (state_20729[(10)]);
var inst_20689 = cljs.core._nth.call(null,inst_20682,inst_20684);
var state_20729__$1 = state_20729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20729__$1,(13),out,inst_20689);
} else {
if((state_val_20730 === (18))){
var inst_20695 = (state_20729[(7)]);
var inst_20704 = cljs.core.first.call(null,inst_20695);
var state_20729__$1 = state_20729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20729__$1,(20),out,inst_20704);
} else {
if((state_val_20730 === (8))){
var inst_20684 = (state_20729[(10)]);
var inst_20683 = (state_20729[(11)]);
var inst_20686 = (inst_20684 < inst_20683);
var inst_20687 = inst_20686;
var state_20729__$1 = state_20729;
if(cljs.core.truth_(inst_20687)){
var statearr_20763_20794 = state_20729__$1;
(statearr_20763_20794[(1)] = (10));

} else {
var statearr_20764_20795 = state_20729__$1;
(statearr_20764_20795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto__))
;
return ((function (switch__18130__auto__,c__18242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____1 = (function (state_20729){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20769){if((e20769 instanceof Object)){
var ex__18134__auto__ = e20769;
var statearr_20770_20796 = state_20729;
(statearr_20770_20796[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20797 = state_20729;
state_20729 = G__20797;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__ = function(state_20729){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____1.call(this,state_20729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18131__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto__))
})();
var state__18244__auto__ = (function (){var statearr_20771 = f__18243__auto__.call(null);
(statearr_20771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto__);

return statearr_20771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto__))
);

return c__18242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20798 = [];
var len__12775__auto___20801 = arguments.length;
var i__12776__auto___20802 = (0);
while(true){
if((i__12776__auto___20802 < len__12775__auto___20801)){
args20798.push((arguments[i__12776__auto___20802]));

var G__20803 = (i__12776__auto___20802 + (1));
i__12776__auto___20802 = G__20803;
continue;
} else {
}
break;
}

var G__20800 = args20798.length;
switch (G__20800) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20798.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args20805 = [];
var len__12775__auto___20808 = arguments.length;
var i__12776__auto___20809 = (0);
while(true){
if((i__12776__auto___20809 < len__12775__auto___20808)){
args20805.push((arguments[i__12776__auto___20809]));

var G__20810 = (i__12776__auto___20809 + (1));
i__12776__auto___20809 = G__20810;
continue;
} else {
}
break;
}

var G__20807 = args20805.length;
switch (G__20807) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20805.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args20812 = [];
var len__12775__auto___20863 = arguments.length;
var i__12776__auto___20864 = (0);
while(true){
if((i__12776__auto___20864 < len__12775__auto___20863)){
args20812.push((arguments[i__12776__auto___20864]));

var G__20865 = (i__12776__auto___20864 + (1));
i__12776__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var G__20814 = args20812.length;
switch (G__20814) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20812.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___20867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20867,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20867,out){
return (function (state_20838){
var state_val_20839 = (state_20838[(1)]);
if((state_val_20839 === (7))){
var inst_20833 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20840_20868 = state_20838__$1;
(statearr_20840_20868[(2)] = inst_20833);

(statearr_20840_20868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (1))){
var inst_20815 = null;
var state_20838__$1 = (function (){var statearr_20841 = state_20838;
(statearr_20841[(7)] = inst_20815);

return statearr_20841;
})();
var statearr_20842_20869 = state_20838__$1;
(statearr_20842_20869[(2)] = null);

(statearr_20842_20869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (4))){
var inst_20818 = (state_20838[(8)]);
var inst_20818__$1 = (state_20838[(2)]);
var inst_20819 = (inst_20818__$1 == null);
var inst_20820 = cljs.core.not.call(null,inst_20819);
var state_20838__$1 = (function (){var statearr_20843 = state_20838;
(statearr_20843[(8)] = inst_20818__$1);

return statearr_20843;
})();
if(inst_20820){
var statearr_20844_20870 = state_20838__$1;
(statearr_20844_20870[(1)] = (5));

} else {
var statearr_20845_20871 = state_20838__$1;
(statearr_20845_20871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (6))){
var state_20838__$1 = state_20838;
var statearr_20846_20872 = state_20838__$1;
(statearr_20846_20872[(2)] = null);

(statearr_20846_20872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (3))){
var inst_20835 = (state_20838[(2)]);
var inst_20836 = cljs.core.async.close_BANG_.call(null,out);
var state_20838__$1 = (function (){var statearr_20847 = state_20838;
(statearr_20847[(9)] = inst_20835);

return statearr_20847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20838__$1,inst_20836);
} else {
if((state_val_20839 === (2))){
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20838__$1,(4),ch);
} else {
if((state_val_20839 === (11))){
var inst_20818 = (state_20838[(8)]);
var inst_20827 = (state_20838[(2)]);
var inst_20815 = inst_20818;
var state_20838__$1 = (function (){var statearr_20848 = state_20838;
(statearr_20848[(7)] = inst_20815);

(statearr_20848[(10)] = inst_20827);

return statearr_20848;
})();
var statearr_20849_20873 = state_20838__$1;
(statearr_20849_20873[(2)] = null);

(statearr_20849_20873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (9))){
var inst_20818 = (state_20838[(8)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20838__$1,(11),out,inst_20818);
} else {
if((state_val_20839 === (5))){
var inst_20818 = (state_20838[(8)]);
var inst_20815 = (state_20838[(7)]);
var inst_20822 = cljs.core._EQ_.call(null,inst_20818,inst_20815);
var state_20838__$1 = state_20838;
if(inst_20822){
var statearr_20851_20874 = state_20838__$1;
(statearr_20851_20874[(1)] = (8));

} else {
var statearr_20852_20875 = state_20838__$1;
(statearr_20852_20875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (10))){
var inst_20830 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20853_20876 = state_20838__$1;
(statearr_20853_20876[(2)] = inst_20830);

(statearr_20853_20876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (8))){
var inst_20815 = (state_20838[(7)]);
var tmp20850 = inst_20815;
var inst_20815__$1 = tmp20850;
var state_20838__$1 = (function (){var statearr_20854 = state_20838;
(statearr_20854[(7)] = inst_20815__$1);

return statearr_20854;
})();
var statearr_20855_20877 = state_20838__$1;
(statearr_20855_20877[(2)] = null);

(statearr_20855_20877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20867,out))
;
return ((function (switch__18130__auto__,c__18242__auto___20867,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20859[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20859[(1)] = (1));

return statearr_20859;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20838){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20860){if((e20860 instanceof Object)){
var ex__18134__auto__ = e20860;
var statearr_20861_20878 = state_20838;
(statearr_20861_20878[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20879 = state_20838;
state_20838 = G__20879;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20867,out))
})();
var state__18244__auto__ = (function (){var statearr_20862 = f__18243__auto__.call(null);
(statearr_20862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20867);

return statearr_20862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20867,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20880 = [];
var len__12775__auto___20950 = arguments.length;
var i__12776__auto___20951 = (0);
while(true){
if((i__12776__auto___20951 < len__12775__auto___20950)){
args20880.push((arguments[i__12776__auto___20951]));

var G__20952 = (i__12776__auto___20951 + (1));
i__12776__auto___20951 = G__20952;
continue;
} else {
}
break;
}

var G__20882 = args20880.length;
switch (G__20882) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20880.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___20954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___20954,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___20954,out){
return (function (state_20920){
var state_val_20921 = (state_20920[(1)]);
if((state_val_20921 === (7))){
var inst_20916 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20922_20955 = state_20920__$1;
(statearr_20922_20955[(2)] = inst_20916);

(statearr_20922_20955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (1))){
var inst_20883 = (new Array(n));
var inst_20884 = inst_20883;
var inst_20885 = (0);
var state_20920__$1 = (function (){var statearr_20923 = state_20920;
(statearr_20923[(7)] = inst_20884);

(statearr_20923[(8)] = inst_20885);

return statearr_20923;
})();
var statearr_20924_20956 = state_20920__$1;
(statearr_20924_20956[(2)] = null);

(statearr_20924_20956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (4))){
var inst_20888 = (state_20920[(9)]);
var inst_20888__$1 = (state_20920[(2)]);
var inst_20889 = (inst_20888__$1 == null);
var inst_20890 = cljs.core.not.call(null,inst_20889);
var state_20920__$1 = (function (){var statearr_20925 = state_20920;
(statearr_20925[(9)] = inst_20888__$1);

return statearr_20925;
})();
if(inst_20890){
var statearr_20926_20957 = state_20920__$1;
(statearr_20926_20957[(1)] = (5));

} else {
var statearr_20927_20958 = state_20920__$1;
(statearr_20927_20958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (15))){
var inst_20910 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20928_20959 = state_20920__$1;
(statearr_20928_20959[(2)] = inst_20910);

(statearr_20928_20959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (13))){
var state_20920__$1 = state_20920;
var statearr_20929_20960 = state_20920__$1;
(statearr_20929_20960[(2)] = null);

(statearr_20929_20960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (6))){
var inst_20885 = (state_20920[(8)]);
var inst_20906 = (inst_20885 > (0));
var state_20920__$1 = state_20920;
if(cljs.core.truth_(inst_20906)){
var statearr_20930_20961 = state_20920__$1;
(statearr_20930_20961[(1)] = (12));

} else {
var statearr_20931_20962 = state_20920__$1;
(statearr_20931_20962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (3))){
var inst_20918 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20920__$1,inst_20918);
} else {
if((state_val_20921 === (12))){
var inst_20884 = (state_20920[(7)]);
var inst_20908 = cljs.core.vec.call(null,inst_20884);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20920__$1,(15),out,inst_20908);
} else {
if((state_val_20921 === (2))){
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20920__$1,(4),ch);
} else {
if((state_val_20921 === (11))){
var inst_20900 = (state_20920[(2)]);
var inst_20901 = (new Array(n));
var inst_20884 = inst_20901;
var inst_20885 = (0);
var state_20920__$1 = (function (){var statearr_20932 = state_20920;
(statearr_20932[(10)] = inst_20900);

(statearr_20932[(7)] = inst_20884);

(statearr_20932[(8)] = inst_20885);

return statearr_20932;
})();
var statearr_20933_20963 = state_20920__$1;
(statearr_20933_20963[(2)] = null);

(statearr_20933_20963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (9))){
var inst_20884 = (state_20920[(7)]);
var inst_20898 = cljs.core.vec.call(null,inst_20884);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20920__$1,(11),out,inst_20898);
} else {
if((state_val_20921 === (5))){
var inst_20893 = (state_20920[(11)]);
var inst_20888 = (state_20920[(9)]);
var inst_20884 = (state_20920[(7)]);
var inst_20885 = (state_20920[(8)]);
var inst_20892 = (inst_20884[inst_20885] = inst_20888);
var inst_20893__$1 = (inst_20885 + (1));
var inst_20894 = (inst_20893__$1 < n);
var state_20920__$1 = (function (){var statearr_20934 = state_20920;
(statearr_20934[(11)] = inst_20893__$1);

(statearr_20934[(12)] = inst_20892);

return statearr_20934;
})();
if(cljs.core.truth_(inst_20894)){
var statearr_20935_20964 = state_20920__$1;
(statearr_20935_20964[(1)] = (8));

} else {
var statearr_20936_20965 = state_20920__$1;
(statearr_20936_20965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (14))){
var inst_20913 = (state_20920[(2)]);
var inst_20914 = cljs.core.async.close_BANG_.call(null,out);
var state_20920__$1 = (function (){var statearr_20938 = state_20920;
(statearr_20938[(13)] = inst_20913);

return statearr_20938;
})();
var statearr_20939_20966 = state_20920__$1;
(statearr_20939_20966[(2)] = inst_20914);

(statearr_20939_20966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (10))){
var inst_20904 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
var statearr_20940_20967 = state_20920__$1;
(statearr_20940_20967[(2)] = inst_20904);

(statearr_20940_20967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20921 === (8))){
var inst_20893 = (state_20920[(11)]);
var inst_20884 = (state_20920[(7)]);
var tmp20937 = inst_20884;
var inst_20884__$1 = tmp20937;
var inst_20885 = inst_20893;
var state_20920__$1 = (function (){var statearr_20941 = state_20920;
(statearr_20941[(7)] = inst_20884__$1);

(statearr_20941[(8)] = inst_20885);

return statearr_20941;
})();
var statearr_20942_20968 = state_20920__$1;
(statearr_20942_20968[(2)] = null);

(statearr_20942_20968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___20954,out))
;
return ((function (switch__18130__auto__,c__18242__auto___20954,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_20946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20946[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_20946[(1)] = (1));

return statearr_20946;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_20920){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_20920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e20947){if((e20947 instanceof Object)){
var ex__18134__auto__ = e20947;
var statearr_20948_20969 = state_20920;
(statearr_20948_20969[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20970 = state_20920;
state_20920 = G__20970;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_20920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_20920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___20954,out))
})();
var state__18244__auto__ = (function (){var statearr_20949 = f__18243__auto__.call(null);
(statearr_20949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___20954);

return statearr_20949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___20954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20971 = [];
var len__12775__auto___21045 = arguments.length;
var i__12776__auto___21046 = (0);
while(true){
if((i__12776__auto___21046 < len__12775__auto___21045)){
args20971.push((arguments[i__12776__auto___21046]));

var G__21047 = (i__12776__auto___21046 + (1));
i__12776__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var G__20973 = args20971.length;
switch (G__20973) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20971.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18242__auto___21049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18242__auto___21049,out){
return (function (){
var f__18243__auto__ = (function (){var switch__18130__auto__ = ((function (c__18242__auto___21049,out){
return (function (state_21015){
var state_val_21016 = (state_21015[(1)]);
if((state_val_21016 === (7))){
var inst_21011 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
var statearr_21017_21050 = state_21015__$1;
(statearr_21017_21050[(2)] = inst_21011);

(statearr_21017_21050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (1))){
var inst_20974 = [];
var inst_20975 = inst_20974;
var inst_20976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21015__$1 = (function (){var statearr_21018 = state_21015;
(statearr_21018[(7)] = inst_20976);

(statearr_21018[(8)] = inst_20975);

return statearr_21018;
})();
var statearr_21019_21051 = state_21015__$1;
(statearr_21019_21051[(2)] = null);

(statearr_21019_21051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (4))){
var inst_20979 = (state_21015[(9)]);
var inst_20979__$1 = (state_21015[(2)]);
var inst_20980 = (inst_20979__$1 == null);
var inst_20981 = cljs.core.not.call(null,inst_20980);
var state_21015__$1 = (function (){var statearr_21020 = state_21015;
(statearr_21020[(9)] = inst_20979__$1);

return statearr_21020;
})();
if(inst_20981){
var statearr_21021_21052 = state_21015__$1;
(statearr_21021_21052[(1)] = (5));

} else {
var statearr_21022_21053 = state_21015__$1;
(statearr_21022_21053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (15))){
var inst_21005 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
var statearr_21023_21054 = state_21015__$1;
(statearr_21023_21054[(2)] = inst_21005);

(statearr_21023_21054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (13))){
var state_21015__$1 = state_21015;
var statearr_21024_21055 = state_21015__$1;
(statearr_21024_21055[(2)] = null);

(statearr_21024_21055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (6))){
var inst_20975 = (state_21015[(8)]);
var inst_21000 = inst_20975.length;
var inst_21001 = (inst_21000 > (0));
var state_21015__$1 = state_21015;
if(cljs.core.truth_(inst_21001)){
var statearr_21025_21056 = state_21015__$1;
(statearr_21025_21056[(1)] = (12));

} else {
var statearr_21026_21057 = state_21015__$1;
(statearr_21026_21057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (3))){
var inst_21013 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21015__$1,inst_21013);
} else {
if((state_val_21016 === (12))){
var inst_20975 = (state_21015[(8)]);
var inst_21003 = cljs.core.vec.call(null,inst_20975);
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21015__$1,(15),out,inst_21003);
} else {
if((state_val_21016 === (2))){
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21015__$1,(4),ch);
} else {
if((state_val_21016 === (11))){
var inst_20979 = (state_21015[(9)]);
var inst_20983 = (state_21015[(10)]);
var inst_20993 = (state_21015[(2)]);
var inst_20994 = [];
var inst_20995 = inst_20994.push(inst_20979);
var inst_20975 = inst_20994;
var inst_20976 = inst_20983;
var state_21015__$1 = (function (){var statearr_21027 = state_21015;
(statearr_21027[(7)] = inst_20976);

(statearr_21027[(11)] = inst_20995);

(statearr_21027[(8)] = inst_20975);

(statearr_21027[(12)] = inst_20993);

return statearr_21027;
})();
var statearr_21028_21058 = state_21015__$1;
(statearr_21028_21058[(2)] = null);

(statearr_21028_21058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (9))){
var inst_20975 = (state_21015[(8)]);
var inst_20991 = cljs.core.vec.call(null,inst_20975);
var state_21015__$1 = state_21015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21015__$1,(11),out,inst_20991);
} else {
if((state_val_21016 === (5))){
var inst_20976 = (state_21015[(7)]);
var inst_20979 = (state_21015[(9)]);
var inst_20983 = (state_21015[(10)]);
var inst_20983__$1 = f.call(null,inst_20979);
var inst_20984 = cljs.core._EQ_.call(null,inst_20983__$1,inst_20976);
var inst_20985 = cljs.core.keyword_identical_QMARK_.call(null,inst_20976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20986 = (inst_20984) || (inst_20985);
var state_21015__$1 = (function (){var statearr_21029 = state_21015;
(statearr_21029[(10)] = inst_20983__$1);

return statearr_21029;
})();
if(cljs.core.truth_(inst_20986)){
var statearr_21030_21059 = state_21015__$1;
(statearr_21030_21059[(1)] = (8));

} else {
var statearr_21031_21060 = state_21015__$1;
(statearr_21031_21060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (14))){
var inst_21008 = (state_21015[(2)]);
var inst_21009 = cljs.core.async.close_BANG_.call(null,out);
var state_21015__$1 = (function (){var statearr_21033 = state_21015;
(statearr_21033[(13)] = inst_21008);

return statearr_21033;
})();
var statearr_21034_21061 = state_21015__$1;
(statearr_21034_21061[(2)] = inst_21009);

(statearr_21034_21061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (10))){
var inst_20998 = (state_21015[(2)]);
var state_21015__$1 = state_21015;
var statearr_21035_21062 = state_21015__$1;
(statearr_21035_21062[(2)] = inst_20998);

(statearr_21035_21062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21016 === (8))){
var inst_20979 = (state_21015[(9)]);
var inst_20975 = (state_21015[(8)]);
var inst_20983 = (state_21015[(10)]);
var inst_20988 = inst_20975.push(inst_20979);
var tmp21032 = inst_20975;
var inst_20975__$1 = tmp21032;
var inst_20976 = inst_20983;
var state_21015__$1 = (function (){var statearr_21036 = state_21015;
(statearr_21036[(7)] = inst_20976);

(statearr_21036[(14)] = inst_20988);

(statearr_21036[(8)] = inst_20975__$1);

return statearr_21036;
})();
var statearr_21037_21063 = state_21015__$1;
(statearr_21037_21063[(2)] = null);

(statearr_21037_21063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18242__auto___21049,out))
;
return ((function (switch__18130__auto__,c__18242__auto___21049,out){
return (function() {
var cljs$core$async$state_machine__18131__auto__ = null;
var cljs$core$async$state_machine__18131__auto____0 = (function (){
var statearr_21041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21041[(0)] = cljs$core$async$state_machine__18131__auto__);

(statearr_21041[(1)] = (1));

return statearr_21041;
});
var cljs$core$async$state_machine__18131__auto____1 = (function (state_21015){
while(true){
var ret_value__18132__auto__ = (function (){try{while(true){
var result__18133__auto__ = switch__18130__auto__.call(null,state_21015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18133__auto__;
}
break;
}
}catch (e21042){if((e21042 instanceof Object)){
var ex__18134__auto__ = e21042;
var statearr_21043_21064 = state_21015;
(statearr_21043_21064[(5)] = ex__18134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21065 = state_21015;
state_21015 = G__21065;
continue;
} else {
return ret_value__18132__auto__;
}
break;
}
});
cljs$core$async$state_machine__18131__auto__ = function(state_21015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18131__auto____1.call(this,state_21015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18131__auto____0;
cljs$core$async$state_machine__18131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18131__auto____1;
return cljs$core$async$state_machine__18131__auto__;
})()
;})(switch__18130__auto__,c__18242__auto___21049,out))
})();
var state__18244__auto__ = (function (){var statearr_21044 = f__18243__auto__.call(null);
(statearr_21044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18242__auto___21049);

return statearr_21044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18244__auto__);
});})(c__18242__auto___21049,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map