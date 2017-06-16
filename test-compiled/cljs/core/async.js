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
var args21704 = [];
var len__12775__auto___21710 = arguments.length;
var i__12776__auto___21711 = (0);
while(true){
if((i__12776__auto___21711 < len__12775__auto___21710)){
args21704.push((arguments[i__12776__auto___21711]));

var G__21712 = (i__12776__auto___21711 + (1));
i__12776__auto___21711 = G__21712;
continue;
} else {
}
break;
}

var G__21706 = args21704.length;
switch (G__21706) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21704.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21707 = (function (f,blockable,meta21708){
this.f = f;
this.blockable = blockable;
this.meta21708 = meta21708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21709,meta21708__$1){
var self__ = this;
var _21709__$1 = this;
return (new cljs.core.async.t_cljs$core$async21707(self__.f,self__.blockable,meta21708__$1));
});

cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21709){
var self__ = this;
var _21709__$1 = this;
return self__.meta21708;
});

cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21708","meta21708",-214245458,null)], null);
});

cljs.core.async.t_cljs$core$async21707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21707";

cljs.core.async.t_cljs$core$async21707.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async21707");
});

cljs.core.async.__GT_t_cljs$core$async21707 = (function cljs$core$async$__GT_t_cljs$core$async21707(f__$1,blockable__$1,meta21708){
return (new cljs.core.async.t_cljs$core$async21707(f__$1,blockable__$1,meta21708));
});

}

return (new cljs.core.async.t_cljs$core$async21707(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21716 = [];
var len__12775__auto___21719 = arguments.length;
var i__12776__auto___21720 = (0);
while(true){
if((i__12776__auto___21720 < len__12775__auto___21719)){
args21716.push((arguments[i__12776__auto___21720]));

var G__21721 = (i__12776__auto___21720 + (1));
i__12776__auto___21720 = G__21721;
continue;
} else {
}
break;
}

var G__21718 = args21716.length;
switch (G__21718) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21716.length)].join('')));

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
var args21723 = [];
var len__12775__auto___21726 = arguments.length;
var i__12776__auto___21727 = (0);
while(true){
if((i__12776__auto___21727 < len__12775__auto___21726)){
args21723.push((arguments[i__12776__auto___21727]));

var G__21728 = (i__12776__auto___21727 + (1));
i__12776__auto___21727 = G__21728;
continue;
} else {
}
break;
}

var G__21725 = args21723.length;
switch (G__21725) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21723.length)].join('')));

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
var args21730 = [];
var len__12775__auto___21733 = arguments.length;
var i__12776__auto___21734 = (0);
while(true){
if((i__12776__auto___21734 < len__12775__auto___21733)){
args21730.push((arguments[i__12776__auto___21734]));

var G__21735 = (i__12776__auto___21734 + (1));
i__12776__auto___21734 = G__21735;
continue;
} else {
}
break;
}

var G__21732 = args21730.length;
switch (G__21732) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21730.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21737 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21737);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21737,ret){
return (function (){
return fn1.call(null,val_21737);
});})(val_21737,ret))
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
var args21738 = [];
var len__12775__auto___21741 = arguments.length;
var i__12776__auto___21742 = (0);
while(true){
if((i__12776__auto___21742 < len__12775__auto___21741)){
args21738.push((arguments[i__12776__auto___21742]));

var G__21743 = (i__12776__auto___21742 + (1));
i__12776__auto___21742 = G__21743;
continue;
} else {
}
break;
}

var G__21740 = args21738.length;
switch (G__21740) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21738.length)].join('')));

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
var n__12615__auto___21745 = n;
var x_21746 = (0);
while(true){
if((x_21746 < n__12615__auto___21745)){
(a[x_21746] = (0));

var G__21747 = (x_21746 + (1));
x_21746 = G__21747;
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

var G__21748 = (i + (1));
i = G__21748;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21752 = (function (alt_flag,flag,meta21753){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21753 = meta21753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21754,meta21753__$1){
var self__ = this;
var _21754__$1 = this;
return (new cljs.core.async.t_cljs$core$async21752(self__.alt_flag,self__.flag,meta21753__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21754){
var self__ = this;
var _21754__$1 = this;
return self__.meta21753;
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21753","meta21753",1391056534,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21752";

cljs.core.async.t_cljs$core$async21752.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async21752");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21752 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21752(alt_flag__$1,flag__$1,meta21753){
return (new cljs.core.async.t_cljs$core$async21752(alt_flag__$1,flag__$1,meta21753));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21752(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21758 = (function (alt_handler,flag,cb,meta21759){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21759 = meta21759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21760,meta21759__$1){
var self__ = this;
var _21760__$1 = this;
return (new cljs.core.async.t_cljs$core$async21758(self__.alt_handler,self__.flag,self__.cb,meta21759__$1));
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21760){
var self__ = this;
var _21760__$1 = this;
return self__.meta21759;
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21759","meta21759",1253994804,null)], null);
});

cljs.core.async.t_cljs$core$async21758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21758";

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async21758");
});

cljs.core.async.__GT_t_cljs$core$async21758 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21758(alt_handler__$1,flag__$1,cb__$1,meta21759){
return (new cljs.core.async.t_cljs$core$async21758(alt_handler__$1,flag__$1,cb__$1,meta21759));
});

}

return (new cljs.core.async.t_cljs$core$async21758(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21761_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21762_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21762_SHARP_,port], null));
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
var G__21763 = (i + (1));
i = G__21763;
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
var len__12775__auto___21769 = arguments.length;
var i__12776__auto___21770 = (0);
while(true){
if((i__12776__auto___21770 < len__12775__auto___21769)){
args__12782__auto__.push((arguments[i__12776__auto___21770]));

var G__21771 = (i__12776__auto___21770 + (1));
i__12776__auto___21770 = G__21771;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21766){
var map__21767 = p__21766;
var map__21767__$1 = ((((!((map__21767 == null)))?((((map__21767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21767):map__21767);
var opts = map__21767__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21764){
var G__21765 = cljs.core.first.call(null,seq21764);
var seq21764__$1 = cljs.core.next.call(null,seq21764);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21765,seq21764__$1);
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
var args21772 = [];
var len__12775__auto___21822 = arguments.length;
var i__12776__auto___21823 = (0);
while(true){
if((i__12776__auto___21823 < len__12775__auto___21822)){
args21772.push((arguments[i__12776__auto___21823]));

var G__21824 = (i__12776__auto___21823 + (1));
i__12776__auto___21823 = G__21824;
continue;
} else {
}
break;
}

var G__21774 = args21772.length;
switch (G__21774) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21772.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21659__auto___21826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___21826){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___21826){
return (function (state_21798){
var state_val_21799 = (state_21798[(1)]);
if((state_val_21799 === (7))){
var inst_21794 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21800_21827 = state_21798__$1;
(statearr_21800_21827[(2)] = inst_21794);

(statearr_21800_21827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (1))){
var state_21798__$1 = state_21798;
var statearr_21801_21828 = state_21798__$1;
(statearr_21801_21828[(2)] = null);

(statearr_21801_21828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (4))){
var inst_21777 = (state_21798[(7)]);
var inst_21777__$1 = (state_21798[(2)]);
var inst_21778 = (inst_21777__$1 == null);
var state_21798__$1 = (function (){var statearr_21802 = state_21798;
(statearr_21802[(7)] = inst_21777__$1);

return statearr_21802;
})();
if(cljs.core.truth_(inst_21778)){
var statearr_21803_21829 = state_21798__$1;
(statearr_21803_21829[(1)] = (5));

} else {
var statearr_21804_21830 = state_21798__$1;
(statearr_21804_21830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (13))){
var state_21798__$1 = state_21798;
var statearr_21805_21831 = state_21798__$1;
(statearr_21805_21831[(2)] = null);

(statearr_21805_21831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (6))){
var inst_21777 = (state_21798[(7)]);
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21798__$1,(11),to,inst_21777);
} else {
if((state_val_21799 === (3))){
var inst_21796 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21798__$1,inst_21796);
} else {
if((state_val_21799 === (12))){
var state_21798__$1 = state_21798;
var statearr_21806_21832 = state_21798__$1;
(statearr_21806_21832[(2)] = null);

(statearr_21806_21832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (2))){
var state_21798__$1 = state_21798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21798__$1,(4),from);
} else {
if((state_val_21799 === (11))){
var inst_21787 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
if(cljs.core.truth_(inst_21787)){
var statearr_21807_21833 = state_21798__$1;
(statearr_21807_21833[(1)] = (12));

} else {
var statearr_21808_21834 = state_21798__$1;
(statearr_21808_21834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (9))){
var state_21798__$1 = state_21798;
var statearr_21809_21835 = state_21798__$1;
(statearr_21809_21835[(2)] = null);

(statearr_21809_21835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (5))){
var state_21798__$1 = state_21798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21810_21836 = state_21798__$1;
(statearr_21810_21836[(1)] = (8));

} else {
var statearr_21811_21837 = state_21798__$1;
(statearr_21811_21837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (14))){
var inst_21792 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21812_21838 = state_21798__$1;
(statearr_21812_21838[(2)] = inst_21792);

(statearr_21812_21838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (10))){
var inst_21784 = (state_21798[(2)]);
var state_21798__$1 = state_21798;
var statearr_21813_21839 = state_21798__$1;
(statearr_21813_21839[(2)] = inst_21784);

(statearr_21813_21839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21799 === (8))){
var inst_21781 = cljs.core.async.close_BANG_.call(null,to);
var state_21798__$1 = state_21798;
var statearr_21814_21840 = state_21798__$1;
(statearr_21814_21840[(2)] = inst_21781);

(statearr_21814_21840[(1)] = (10));


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
});})(c__21659__auto___21826))
;
return ((function (switch__21547__auto__,c__21659__auto___21826){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_21818 = [null,null,null,null,null,null,null,null];
(statearr_21818[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_21818[(1)] = (1));

return statearr_21818;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_21798){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_21798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e21819){if((e21819 instanceof Object)){
var ex__21551__auto__ = e21819;
var statearr_21820_21841 = state_21798;
(statearr_21820_21841[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21842 = state_21798;
state_21798 = G__21842;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_21798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_21798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___21826))
})();
var state__21661__auto__ = (function (){var statearr_21821 = f__21660__auto__.call(null);
(statearr_21821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___21826);

return statearr_21821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___21826))
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
return (function (p__22030){
var vec__22031 = p__22030;
var v = cljs.core.nth.call(null,vec__22031,(0),null);
var p = cljs.core.nth.call(null,vec__22031,(1),null);
var job = vec__22031;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21659__auto___22217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results){
return (function (state_22038){
var state_val_22039 = (state_22038[(1)]);
if((state_val_22039 === (1))){
var state_22038__$1 = state_22038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22038__$1,(2),res,v);
} else {
if((state_val_22039 === (2))){
var inst_22035 = (state_22038[(2)]);
var inst_22036 = cljs.core.async.close_BANG_.call(null,res);
var state_22038__$1 = (function (){var statearr_22040 = state_22038;
(statearr_22040[(7)] = inst_22035);

return statearr_22040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22038__$1,inst_22036);
} else {
return null;
}
}
});})(c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results))
;
return ((function (switch__21547__auto__,c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_22044 = [null,null,null,null,null,null,null,null];
(statearr_22044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__);

(statearr_22044[(1)] = (1));

return statearr_22044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1 = (function (state_22038){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22045){if((e22045 instanceof Object)){
var ex__21551__auto__ = e22045;
var statearr_22046_22218 = state_22038;
(statearr_22046_22218[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22219 = state_22038;
state_22038 = G__22219;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = function(state_22038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1.call(this,state_22038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results))
})();
var state__21661__auto__ = (function (){var statearr_22047 = f__21660__auto__.call(null);
(statearr_22047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___22217);

return statearr_22047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___22217,res,vec__22031,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22048){
var vec__22049 = p__22048;
var v = cljs.core.nth.call(null,vec__22049,(0),null);
var p = cljs.core.nth.call(null,vec__22049,(1),null);
var job = vec__22049;
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
var n__12615__auto___22220 = n;
var __22221 = (0);
while(true){
if((__22221 < n__12615__auto___22220)){
var G__22052_22222 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22052_22222) {
case "compute":
var c__21659__auto___22224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22221,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (__22221,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function (state_22065){
var state_val_22066 = (state_22065[(1)]);
if((state_val_22066 === (1))){
var state_22065__$1 = state_22065;
var statearr_22067_22225 = state_22065__$1;
(statearr_22067_22225[(2)] = null);

(statearr_22067_22225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (2))){
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22065__$1,(4),jobs);
} else {
if((state_val_22066 === (3))){
var inst_22063 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22065__$1,inst_22063);
} else {
if((state_val_22066 === (4))){
var inst_22055 = (state_22065[(2)]);
var inst_22056 = process.call(null,inst_22055);
var state_22065__$1 = state_22065;
if(cljs.core.truth_(inst_22056)){
var statearr_22068_22226 = state_22065__$1;
(statearr_22068_22226[(1)] = (5));

} else {
var statearr_22069_22227 = state_22065__$1;
(statearr_22069_22227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (5))){
var state_22065__$1 = state_22065;
var statearr_22070_22228 = state_22065__$1;
(statearr_22070_22228[(2)] = null);

(statearr_22070_22228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (6))){
var state_22065__$1 = state_22065;
var statearr_22071_22229 = state_22065__$1;
(statearr_22071_22229[(2)] = null);

(statearr_22071_22229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22066 === (7))){
var inst_22061 = (state_22065[(2)]);
var state_22065__$1 = state_22065;
var statearr_22072_22230 = state_22065__$1;
(statearr_22072_22230[(2)] = inst_22061);

(statearr_22072_22230[(1)] = (3));


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
});})(__22221,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
;
return ((function (__22221,switch__21547__auto__,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_22076 = [null,null,null,null,null,null,null];
(statearr_22076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__);

(statearr_22076[(1)] = (1));

return statearr_22076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1 = (function (state_22065){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22077){if((e22077 instanceof Object)){
var ex__21551__auto__ = e22077;
var statearr_22078_22231 = state_22065;
(statearr_22078_22231[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22232 = state_22065;
state_22065 = G__22232;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = function(state_22065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1.call(this,state_22065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__;
})()
;})(__22221,switch__21547__auto__,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
})();
var state__21661__auto__ = (function (){var statearr_22079 = f__21660__auto__.call(null);
(statearr_22079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___22224);

return statearr_22079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(__22221,c__21659__auto___22224,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
);


break;
case "async":
var c__21659__auto___22233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22221,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (__22221,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function (state_22092){
var state_val_22093 = (state_22092[(1)]);
if((state_val_22093 === (1))){
var state_22092__$1 = state_22092;
var statearr_22094_22234 = state_22092__$1;
(statearr_22094_22234[(2)] = null);

(statearr_22094_22234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22093 === (2))){
var state_22092__$1 = state_22092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22092__$1,(4),jobs);
} else {
if((state_val_22093 === (3))){
var inst_22090 = (state_22092[(2)]);
var state_22092__$1 = state_22092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22092__$1,inst_22090);
} else {
if((state_val_22093 === (4))){
var inst_22082 = (state_22092[(2)]);
var inst_22083 = async.call(null,inst_22082);
var state_22092__$1 = state_22092;
if(cljs.core.truth_(inst_22083)){
var statearr_22095_22235 = state_22092__$1;
(statearr_22095_22235[(1)] = (5));

} else {
var statearr_22096_22236 = state_22092__$1;
(statearr_22096_22236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22093 === (5))){
var state_22092__$1 = state_22092;
var statearr_22097_22237 = state_22092__$1;
(statearr_22097_22237[(2)] = null);

(statearr_22097_22237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22093 === (6))){
var state_22092__$1 = state_22092;
var statearr_22098_22238 = state_22092__$1;
(statearr_22098_22238[(2)] = null);

(statearr_22098_22238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22093 === (7))){
var inst_22088 = (state_22092[(2)]);
var state_22092__$1 = state_22092;
var statearr_22099_22239 = state_22092__$1;
(statearr_22099_22239[(2)] = inst_22088);

(statearr_22099_22239[(1)] = (3));


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
});})(__22221,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
;
return ((function (__22221,switch__21547__auto__,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_22103 = [null,null,null,null,null,null,null];
(statearr_22103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__);

(statearr_22103[(1)] = (1));

return statearr_22103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1 = (function (state_22092){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22104){if((e22104 instanceof Object)){
var ex__21551__auto__ = e22104;
var statearr_22105_22240 = state_22092;
(statearr_22105_22240[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22241 = state_22092;
state_22092 = G__22241;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = function(state_22092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1.call(this,state_22092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__;
})()
;})(__22221,switch__21547__auto__,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
})();
var state__21661__auto__ = (function (){var statearr_22106 = f__21660__auto__.call(null);
(statearr_22106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___22233);

return statearr_22106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(__22221,c__21659__auto___22233,G__22052_22222,n__12615__auto___22220,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22242 = (__22221 + (1));
__22221 = G__22242;
continue;
} else {
}
break;
}

var c__21659__auto___22243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___22243,jobs,results,process,async){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___22243,jobs,results,process,async){
return (function (state_22128){
var state_val_22129 = (state_22128[(1)]);
if((state_val_22129 === (1))){
var state_22128__$1 = state_22128;
var statearr_22130_22244 = state_22128__$1;
(statearr_22130_22244[(2)] = null);

(statearr_22130_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (2))){
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(4),from);
} else {
if((state_val_22129 === (3))){
var inst_22126 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else {
if((state_val_22129 === (4))){
var inst_22109 = (state_22128[(7)]);
var inst_22109__$1 = (state_22128[(2)]);
var inst_22110 = (inst_22109__$1 == null);
var state_22128__$1 = (function (){var statearr_22131 = state_22128;
(statearr_22131[(7)] = inst_22109__$1);

return statearr_22131;
})();
if(cljs.core.truth_(inst_22110)){
var statearr_22132_22245 = state_22128__$1;
(statearr_22132_22245[(1)] = (5));

} else {
var statearr_22133_22246 = state_22128__$1;
(statearr_22133_22246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (5))){
var inst_22112 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22128__$1 = state_22128;
var statearr_22134_22247 = state_22128__$1;
(statearr_22134_22247[(2)] = inst_22112);

(statearr_22134_22247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (6))){
var inst_22109 = (state_22128[(7)]);
var inst_22114 = (state_22128[(8)]);
var inst_22114__$1 = cljs.core.async.chan.call(null,(1));
var inst_22115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22116 = [inst_22109,inst_22114__$1];
var inst_22117 = (new cljs.core.PersistentVector(null,2,(5),inst_22115,inst_22116,null));
var state_22128__$1 = (function (){var statearr_22135 = state_22128;
(statearr_22135[(8)] = inst_22114__$1);

return statearr_22135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,(8),jobs,inst_22117);
} else {
if((state_val_22129 === (7))){
var inst_22124 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22136_22248 = state_22128__$1;
(statearr_22136_22248[(2)] = inst_22124);

(statearr_22136_22248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (8))){
var inst_22114 = (state_22128[(8)]);
var inst_22119 = (state_22128[(2)]);
var state_22128__$1 = (function (){var statearr_22137 = state_22128;
(statearr_22137[(9)] = inst_22119);

return statearr_22137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,(9),results,inst_22114);
} else {
if((state_val_22129 === (9))){
var inst_22121 = (state_22128[(2)]);
var state_22128__$1 = (function (){var statearr_22138 = state_22128;
(statearr_22138[(10)] = inst_22121);

return statearr_22138;
})();
var statearr_22139_22249 = state_22128__$1;
(statearr_22139_22249[(2)] = null);

(statearr_22139_22249[(1)] = (2));


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
});})(c__21659__auto___22243,jobs,results,process,async))
;
return ((function (switch__21547__auto__,c__21659__auto___22243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1 = (function (state_22128){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object)){
var ex__21551__auto__ = e22144;
var statearr_22145_22250 = state_22128;
(statearr_22145_22250[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22251 = state_22128;
state_22128 = G__22251;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___22243,jobs,results,process,async))
})();
var state__21661__auto__ = (function (){var statearr_22146 = f__21660__auto__.call(null);
(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___22243);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___22243,jobs,results,process,async))
);


var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,jobs,results,process,async){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,jobs,results,process,async){
return (function (state_22184){
var state_val_22185 = (state_22184[(1)]);
if((state_val_22185 === (7))){
var inst_22180 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22186_22252 = state_22184__$1;
(statearr_22186_22252[(2)] = inst_22180);

(statearr_22186_22252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (20))){
var state_22184__$1 = state_22184;
var statearr_22187_22253 = state_22184__$1;
(statearr_22187_22253[(2)] = null);

(statearr_22187_22253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (1))){
var state_22184__$1 = state_22184;
var statearr_22188_22254 = state_22184__$1;
(statearr_22188_22254[(2)] = null);

(statearr_22188_22254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (4))){
var inst_22149 = (state_22184[(7)]);
var inst_22149__$1 = (state_22184[(2)]);
var inst_22150 = (inst_22149__$1 == null);
var state_22184__$1 = (function (){var statearr_22189 = state_22184;
(statearr_22189[(7)] = inst_22149__$1);

return statearr_22189;
})();
if(cljs.core.truth_(inst_22150)){
var statearr_22190_22255 = state_22184__$1;
(statearr_22190_22255[(1)] = (5));

} else {
var statearr_22191_22256 = state_22184__$1;
(statearr_22191_22256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (15))){
var inst_22162 = (state_22184[(8)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22184__$1,(18),to,inst_22162);
} else {
if((state_val_22185 === (21))){
var inst_22175 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22192_22257 = state_22184__$1;
(statearr_22192_22257[(2)] = inst_22175);

(statearr_22192_22257[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (13))){
var inst_22177 = (state_22184[(2)]);
var state_22184__$1 = (function (){var statearr_22193 = state_22184;
(statearr_22193[(9)] = inst_22177);

return statearr_22193;
})();
var statearr_22194_22258 = state_22184__$1;
(statearr_22194_22258[(2)] = null);

(statearr_22194_22258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (6))){
var inst_22149 = (state_22184[(7)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22184__$1,(11),inst_22149);
} else {
if((state_val_22185 === (17))){
var inst_22170 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
if(cljs.core.truth_(inst_22170)){
var statearr_22195_22259 = state_22184__$1;
(statearr_22195_22259[(1)] = (19));

} else {
var statearr_22196_22260 = state_22184__$1;
(statearr_22196_22260[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (3))){
var inst_22182 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22184__$1,inst_22182);
} else {
if((state_val_22185 === (12))){
var inst_22159 = (state_22184[(10)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22184__$1,(14),inst_22159);
} else {
if((state_val_22185 === (2))){
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22184__$1,(4),results);
} else {
if((state_val_22185 === (19))){
var state_22184__$1 = state_22184;
var statearr_22197_22261 = state_22184__$1;
(statearr_22197_22261[(2)] = null);

(statearr_22197_22261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (11))){
var inst_22159 = (state_22184[(2)]);
var state_22184__$1 = (function (){var statearr_22198 = state_22184;
(statearr_22198[(10)] = inst_22159);

return statearr_22198;
})();
var statearr_22199_22262 = state_22184__$1;
(statearr_22199_22262[(2)] = null);

(statearr_22199_22262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (9))){
var state_22184__$1 = state_22184;
var statearr_22200_22263 = state_22184__$1;
(statearr_22200_22263[(2)] = null);

(statearr_22200_22263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (5))){
var state_22184__$1 = state_22184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22201_22264 = state_22184__$1;
(statearr_22201_22264[(1)] = (8));

} else {
var statearr_22202_22265 = state_22184__$1;
(statearr_22202_22265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (14))){
var inst_22164 = (state_22184[(11)]);
var inst_22162 = (state_22184[(8)]);
var inst_22162__$1 = (state_22184[(2)]);
var inst_22163 = (inst_22162__$1 == null);
var inst_22164__$1 = cljs.core.not.call(null,inst_22163);
var state_22184__$1 = (function (){var statearr_22203 = state_22184;
(statearr_22203[(11)] = inst_22164__$1);

(statearr_22203[(8)] = inst_22162__$1);

return statearr_22203;
})();
if(inst_22164__$1){
var statearr_22204_22266 = state_22184__$1;
(statearr_22204_22266[(1)] = (15));

} else {
var statearr_22205_22267 = state_22184__$1;
(statearr_22205_22267[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (16))){
var inst_22164 = (state_22184[(11)]);
var state_22184__$1 = state_22184;
var statearr_22206_22268 = state_22184__$1;
(statearr_22206_22268[(2)] = inst_22164);

(statearr_22206_22268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (10))){
var inst_22156 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22207_22269 = state_22184__$1;
(statearr_22207_22269[(2)] = inst_22156);

(statearr_22207_22269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (18))){
var inst_22167 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22208_22270 = state_22184__$1;
(statearr_22208_22270[(2)] = inst_22167);

(statearr_22208_22270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (8))){
var inst_22153 = cljs.core.async.close_BANG_.call(null,to);
var state_22184__$1 = state_22184;
var statearr_22209_22271 = state_22184__$1;
(statearr_22209_22271[(2)] = inst_22153);

(statearr_22209_22271[(1)] = (10));


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
});})(c__21659__auto__,jobs,results,process,async))
;
return ((function (switch__21547__auto__,c__21659__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_22213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__);

(statearr_22213[(1)] = (1));

return statearr_22213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1 = (function (state_22184){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22214){if((e22214 instanceof Object)){
var ex__21551__auto__ = e22214;
var statearr_22215_22272 = state_22184;
(statearr_22215_22272[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22273 = state_22184;
state_22184 = G__22273;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__ = function(state_22184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1.call(this,state_22184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,jobs,results,process,async))
})();
var state__21661__auto__ = (function (){var statearr_22216 = f__21660__auto__.call(null);
(statearr_22216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_22216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,jobs,results,process,async))
);

return c__21659__auto__;
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
var args22274 = [];
var len__12775__auto___22277 = arguments.length;
var i__12776__auto___22278 = (0);
while(true){
if((i__12776__auto___22278 < len__12775__auto___22277)){
args22274.push((arguments[i__12776__auto___22278]));

var G__22279 = (i__12776__auto___22278 + (1));
i__12776__auto___22278 = G__22279;
continue;
} else {
}
break;
}

var G__22276 = args22274.length;
switch (G__22276) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22274.length)].join('')));

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
var args22281 = [];
var len__12775__auto___22284 = arguments.length;
var i__12776__auto___22285 = (0);
while(true){
if((i__12776__auto___22285 < len__12775__auto___22284)){
args22281.push((arguments[i__12776__auto___22285]));

var G__22286 = (i__12776__auto___22285 + (1));
i__12776__auto___22285 = G__22286;
continue;
} else {
}
break;
}

var G__22283 = args22281.length;
switch (G__22283) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22281.length)].join('')));

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
var args22288 = [];
var len__12775__auto___22341 = arguments.length;
var i__12776__auto___22342 = (0);
while(true){
if((i__12776__auto___22342 < len__12775__auto___22341)){
args22288.push((arguments[i__12776__auto___22342]));

var G__22343 = (i__12776__auto___22342 + (1));
i__12776__auto___22342 = G__22343;
continue;
} else {
}
break;
}

var G__22290 = args22288.length;
switch (G__22290) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22288.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21659__auto___22345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___22345,tc,fc){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___22345,tc,fc){
return (function (state_22316){
var state_val_22317 = (state_22316[(1)]);
if((state_val_22317 === (7))){
var inst_22312 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22318_22346 = state_22316__$1;
(statearr_22318_22346[(2)] = inst_22312);

(statearr_22318_22346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (1))){
var state_22316__$1 = state_22316;
var statearr_22319_22347 = state_22316__$1;
(statearr_22319_22347[(2)] = null);

(statearr_22319_22347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (4))){
var inst_22293 = (state_22316[(7)]);
var inst_22293__$1 = (state_22316[(2)]);
var inst_22294 = (inst_22293__$1 == null);
var state_22316__$1 = (function (){var statearr_22320 = state_22316;
(statearr_22320[(7)] = inst_22293__$1);

return statearr_22320;
})();
if(cljs.core.truth_(inst_22294)){
var statearr_22321_22348 = state_22316__$1;
(statearr_22321_22348[(1)] = (5));

} else {
var statearr_22322_22349 = state_22316__$1;
(statearr_22322_22349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (13))){
var state_22316__$1 = state_22316;
var statearr_22323_22350 = state_22316__$1;
(statearr_22323_22350[(2)] = null);

(statearr_22323_22350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (6))){
var inst_22293 = (state_22316[(7)]);
var inst_22299 = p.call(null,inst_22293);
var state_22316__$1 = state_22316;
if(cljs.core.truth_(inst_22299)){
var statearr_22324_22351 = state_22316__$1;
(statearr_22324_22351[(1)] = (9));

} else {
var statearr_22325_22352 = state_22316__$1;
(statearr_22325_22352[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (3))){
var inst_22314 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22316__$1,inst_22314);
} else {
if((state_val_22317 === (12))){
var state_22316__$1 = state_22316;
var statearr_22326_22353 = state_22316__$1;
(statearr_22326_22353[(2)] = null);

(statearr_22326_22353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (2))){
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22316__$1,(4),ch);
} else {
if((state_val_22317 === (11))){
var inst_22293 = (state_22316[(7)]);
var inst_22303 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22316__$1,(8),inst_22303,inst_22293);
} else {
if((state_val_22317 === (9))){
var state_22316__$1 = state_22316;
var statearr_22327_22354 = state_22316__$1;
(statearr_22327_22354[(2)] = tc);

(statearr_22327_22354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (5))){
var inst_22296 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22297 = cljs.core.async.close_BANG_.call(null,fc);
var state_22316__$1 = (function (){var statearr_22328 = state_22316;
(statearr_22328[(8)] = inst_22296);

return statearr_22328;
})();
var statearr_22329_22355 = state_22316__$1;
(statearr_22329_22355[(2)] = inst_22297);

(statearr_22329_22355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (14))){
var inst_22310 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22330_22356 = state_22316__$1;
(statearr_22330_22356[(2)] = inst_22310);

(statearr_22330_22356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (10))){
var state_22316__$1 = state_22316;
var statearr_22331_22357 = state_22316__$1;
(statearr_22331_22357[(2)] = fc);

(statearr_22331_22357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (8))){
var inst_22305 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
if(cljs.core.truth_(inst_22305)){
var statearr_22332_22358 = state_22316__$1;
(statearr_22332_22358[(1)] = (12));

} else {
var statearr_22333_22359 = state_22316__$1;
(statearr_22333_22359[(1)] = (13));

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
});})(c__21659__auto___22345,tc,fc))
;
return ((function (switch__21547__auto__,c__21659__auto___22345,tc,fc){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_22337 = [null,null,null,null,null,null,null,null,null];
(statearr_22337[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_22337[(1)] = (1));

return statearr_22337;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_22316){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22338){if((e22338 instanceof Object)){
var ex__21551__auto__ = e22338;
var statearr_22339_22360 = state_22316;
(statearr_22339_22360[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22361 = state_22316;
state_22316 = G__22361;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_22316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_22316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___22345,tc,fc))
})();
var state__21661__auto__ = (function (){var statearr_22340 = f__21660__auto__.call(null);
(statearr_22340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___22345);

return statearr_22340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___22345,tc,fc))
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
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__){
return (function (state_22425){
var state_val_22426 = (state_22425[(1)]);
if((state_val_22426 === (7))){
var inst_22421 = (state_22425[(2)]);
var state_22425__$1 = state_22425;
var statearr_22427_22448 = state_22425__$1;
(statearr_22427_22448[(2)] = inst_22421);

(statearr_22427_22448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (1))){
var inst_22405 = init;
var state_22425__$1 = (function (){var statearr_22428 = state_22425;
(statearr_22428[(7)] = inst_22405);

return statearr_22428;
})();
var statearr_22429_22449 = state_22425__$1;
(statearr_22429_22449[(2)] = null);

(statearr_22429_22449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (4))){
var inst_22408 = (state_22425[(8)]);
var inst_22408__$1 = (state_22425[(2)]);
var inst_22409 = (inst_22408__$1 == null);
var state_22425__$1 = (function (){var statearr_22430 = state_22425;
(statearr_22430[(8)] = inst_22408__$1);

return statearr_22430;
})();
if(cljs.core.truth_(inst_22409)){
var statearr_22431_22450 = state_22425__$1;
(statearr_22431_22450[(1)] = (5));

} else {
var statearr_22432_22451 = state_22425__$1;
(statearr_22432_22451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (6))){
var inst_22412 = (state_22425[(9)]);
var inst_22408 = (state_22425[(8)]);
var inst_22405 = (state_22425[(7)]);
var inst_22412__$1 = f.call(null,inst_22405,inst_22408);
var inst_22413 = cljs.core.reduced_QMARK_.call(null,inst_22412__$1);
var state_22425__$1 = (function (){var statearr_22433 = state_22425;
(statearr_22433[(9)] = inst_22412__$1);

return statearr_22433;
})();
if(inst_22413){
var statearr_22434_22452 = state_22425__$1;
(statearr_22434_22452[(1)] = (8));

} else {
var statearr_22435_22453 = state_22425__$1;
(statearr_22435_22453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (3))){
var inst_22423 = (state_22425[(2)]);
var state_22425__$1 = state_22425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22425__$1,inst_22423);
} else {
if((state_val_22426 === (2))){
var state_22425__$1 = state_22425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22425__$1,(4),ch);
} else {
if((state_val_22426 === (9))){
var inst_22412 = (state_22425[(9)]);
var inst_22405 = inst_22412;
var state_22425__$1 = (function (){var statearr_22436 = state_22425;
(statearr_22436[(7)] = inst_22405);

return statearr_22436;
})();
var statearr_22437_22454 = state_22425__$1;
(statearr_22437_22454[(2)] = null);

(statearr_22437_22454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (5))){
var inst_22405 = (state_22425[(7)]);
var state_22425__$1 = state_22425;
var statearr_22438_22455 = state_22425__$1;
(statearr_22438_22455[(2)] = inst_22405);

(statearr_22438_22455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (10))){
var inst_22419 = (state_22425[(2)]);
var state_22425__$1 = state_22425;
var statearr_22439_22456 = state_22425__$1;
(statearr_22439_22456[(2)] = inst_22419);

(statearr_22439_22456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22426 === (8))){
var inst_22412 = (state_22425[(9)]);
var inst_22415 = cljs.core.deref.call(null,inst_22412);
var state_22425__$1 = state_22425;
var statearr_22440_22457 = state_22425__$1;
(statearr_22440_22457[(2)] = inst_22415);

(statearr_22440_22457[(1)] = (10));


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
});})(c__21659__auto__))
;
return ((function (switch__21547__auto__,c__21659__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21548__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21548__auto____0 = (function (){
var statearr_22444 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22444[(0)] = cljs$core$async$reduce_$_state_machine__21548__auto__);

(statearr_22444[(1)] = (1));

return statearr_22444;
});
var cljs$core$async$reduce_$_state_machine__21548__auto____1 = (function (state_22425){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22445){if((e22445 instanceof Object)){
var ex__21551__auto__ = e22445;
var statearr_22446_22458 = state_22425;
(statearr_22446_22458[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22459 = state_22425;
state_22425 = G__22459;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21548__auto__ = function(state_22425){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21548__auto____1.call(this,state_22425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21548__auto____0;
cljs$core$async$reduce_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21548__auto____1;
return cljs$core$async$reduce_$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__))
})();
var state__21661__auto__ = (function (){var statearr_22447 = f__21660__auto__.call(null);
(statearr_22447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_22447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__))
);

return c__21659__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__,f__$1){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__,f__$1){
return (function (state_22479){
var state_val_22480 = (state_22479[(1)]);
if((state_val_22480 === (1))){
var inst_22474 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22479__$1 = state_22479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22479__$1,(2),inst_22474);
} else {
if((state_val_22480 === (2))){
var inst_22476 = (state_22479[(2)]);
var inst_22477 = f__$1.call(null,inst_22476);
var state_22479__$1 = state_22479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22479__$1,inst_22477);
} else {
return null;
}
}
});})(c__21659__auto__,f__$1))
;
return ((function (switch__21547__auto__,c__21659__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21548__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21548__auto____0 = (function (){
var statearr_22484 = [null,null,null,null,null,null,null];
(statearr_22484[(0)] = cljs$core$async$transduce_$_state_machine__21548__auto__);

(statearr_22484[(1)] = (1));

return statearr_22484;
});
var cljs$core$async$transduce_$_state_machine__21548__auto____1 = (function (state_22479){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22485){if((e22485 instanceof Object)){
var ex__21551__auto__ = e22485;
var statearr_22486_22488 = state_22479;
(statearr_22486_22488[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22489 = state_22479;
state_22479 = G__22489;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21548__auto__ = function(state_22479){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21548__auto____1.call(this,state_22479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21548__auto____0;
cljs$core$async$transduce_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21548__auto____1;
return cljs$core$async$transduce_$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__,f__$1))
})();
var state__21661__auto__ = (function (){var statearr_22487 = f__21660__auto__.call(null);
(statearr_22487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_22487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__,f__$1))
);

return c__21659__auto__;
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
var args22490 = [];
var len__12775__auto___22542 = arguments.length;
var i__12776__auto___22543 = (0);
while(true){
if((i__12776__auto___22543 < len__12775__auto___22542)){
args22490.push((arguments[i__12776__auto___22543]));

var G__22544 = (i__12776__auto___22543 + (1));
i__12776__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var G__22492 = args22490.length;
switch (G__22492) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22490.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__){
return (function (state_22517){
var state_val_22518 = (state_22517[(1)]);
if((state_val_22518 === (7))){
var inst_22499 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22519_22546 = state_22517__$1;
(statearr_22519_22546[(2)] = inst_22499);

(statearr_22519_22546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (1))){
var inst_22493 = cljs.core.seq.call(null,coll);
var inst_22494 = inst_22493;
var state_22517__$1 = (function (){var statearr_22520 = state_22517;
(statearr_22520[(7)] = inst_22494);

return statearr_22520;
})();
var statearr_22521_22547 = state_22517__$1;
(statearr_22521_22547[(2)] = null);

(statearr_22521_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (4))){
var inst_22494 = (state_22517[(7)]);
var inst_22497 = cljs.core.first.call(null,inst_22494);
var state_22517__$1 = state_22517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22517__$1,(7),ch,inst_22497);
} else {
if((state_val_22518 === (13))){
var inst_22511 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22522_22548 = state_22517__$1;
(statearr_22522_22548[(2)] = inst_22511);

(statearr_22522_22548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (6))){
var inst_22502 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22502)){
var statearr_22523_22549 = state_22517__$1;
(statearr_22523_22549[(1)] = (8));

} else {
var statearr_22524_22550 = state_22517__$1;
(statearr_22524_22550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (3))){
var inst_22515 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22517__$1,inst_22515);
} else {
if((state_val_22518 === (12))){
var state_22517__$1 = state_22517;
var statearr_22525_22551 = state_22517__$1;
(statearr_22525_22551[(2)] = null);

(statearr_22525_22551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (2))){
var inst_22494 = (state_22517[(7)]);
var state_22517__$1 = state_22517;
if(cljs.core.truth_(inst_22494)){
var statearr_22526_22552 = state_22517__$1;
(statearr_22526_22552[(1)] = (4));

} else {
var statearr_22527_22553 = state_22517__$1;
(statearr_22527_22553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (11))){
var inst_22508 = cljs.core.async.close_BANG_.call(null,ch);
var state_22517__$1 = state_22517;
var statearr_22528_22554 = state_22517__$1;
(statearr_22528_22554[(2)] = inst_22508);

(statearr_22528_22554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (9))){
var state_22517__$1 = state_22517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22529_22555 = state_22517__$1;
(statearr_22529_22555[(1)] = (11));

} else {
var statearr_22530_22556 = state_22517__$1;
(statearr_22530_22556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (5))){
var inst_22494 = (state_22517[(7)]);
var state_22517__$1 = state_22517;
var statearr_22531_22557 = state_22517__$1;
(statearr_22531_22557[(2)] = inst_22494);

(statearr_22531_22557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (10))){
var inst_22513 = (state_22517[(2)]);
var state_22517__$1 = state_22517;
var statearr_22532_22558 = state_22517__$1;
(statearr_22532_22558[(2)] = inst_22513);

(statearr_22532_22558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22518 === (8))){
var inst_22494 = (state_22517[(7)]);
var inst_22504 = cljs.core.next.call(null,inst_22494);
var inst_22494__$1 = inst_22504;
var state_22517__$1 = (function (){var statearr_22533 = state_22517;
(statearr_22533[(7)] = inst_22494__$1);

return statearr_22533;
})();
var statearr_22534_22559 = state_22517__$1;
(statearr_22534_22559[(2)] = null);

(statearr_22534_22559[(1)] = (2));


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
});})(c__21659__auto__))
;
return ((function (switch__21547__auto__,c__21659__auto__){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_22538 = [null,null,null,null,null,null,null,null];
(statearr_22538[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_22538[(1)] = (1));

return statearr_22538;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_22517){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e22539){if((e22539 instanceof Object)){
var ex__21551__auto__ = e22539;
var statearr_22540_22560 = state_22517;
(statearr_22540_22560[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22561 = state_22517;
state_22517 = G__22561;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_22517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_22517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__))
})();
var state__21661__auto__ = (function (){var statearr_22541 = f__21660__auto__.call(null);
(statearr_22541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_22541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__))
);

return c__21659__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22787 = (function (mult,ch,cs,meta22788){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22788 = meta22788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22789,meta22788__$1){
var self__ = this;
var _22789__$1 = this;
return (new cljs.core.async.t_cljs$core$async22787(self__.mult,self__.ch,self__.cs,meta22788__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22789){
var self__ = this;
var _22789__$1 = this;
return self__.meta22788;
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22788","meta22788",2124939020,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22787";

cljs.core.async.t_cljs$core$async22787.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async22787");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22787 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22787(mult__$1,ch__$1,cs__$1,meta22788){
return (new cljs.core.async.t_cljs$core$async22787(mult__$1,ch__$1,cs__$1,meta22788));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22787(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21659__auto___23012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23012,cs,m,dchan,dctr,done){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23012,cs,m,dchan,dctr,done){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (7))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22926_23013 = state_22924__$1;
(statearr_22926_23013[(2)] = inst_22920);

(statearr_22926_23013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (20))){
var inst_22823 = (state_22924[(7)]);
var inst_22835 = cljs.core.first.call(null,inst_22823);
var inst_22836 = cljs.core.nth.call(null,inst_22835,(0),null);
var inst_22837 = cljs.core.nth.call(null,inst_22835,(1),null);
var state_22924__$1 = (function (){var statearr_22927 = state_22924;
(statearr_22927[(8)] = inst_22836);

return statearr_22927;
})();
if(cljs.core.truth_(inst_22837)){
var statearr_22928_23014 = state_22924__$1;
(statearr_22928_23014[(1)] = (22));

} else {
var statearr_22929_23015 = state_22924__$1;
(statearr_22929_23015[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (27))){
var inst_22865 = (state_22924[(9)]);
var inst_22792 = (state_22924[(10)]);
var inst_22867 = (state_22924[(11)]);
var inst_22872 = (state_22924[(12)]);
var inst_22872__$1 = cljs.core._nth.call(null,inst_22865,inst_22867);
var inst_22873 = cljs.core.async.put_BANG_.call(null,inst_22872__$1,inst_22792,done);
var state_22924__$1 = (function (){var statearr_22930 = state_22924;
(statearr_22930[(12)] = inst_22872__$1);

return statearr_22930;
})();
if(cljs.core.truth_(inst_22873)){
var statearr_22931_23016 = state_22924__$1;
(statearr_22931_23016[(1)] = (30));

} else {
var statearr_22932_23017 = state_22924__$1;
(statearr_22932_23017[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (1))){
var state_22924__$1 = state_22924;
var statearr_22933_23018 = state_22924__$1;
(statearr_22933_23018[(2)] = null);

(statearr_22933_23018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (24))){
var inst_22823 = (state_22924[(7)]);
var inst_22842 = (state_22924[(2)]);
var inst_22843 = cljs.core.next.call(null,inst_22823);
var inst_22801 = inst_22843;
var inst_22802 = null;
var inst_22803 = (0);
var inst_22804 = (0);
var state_22924__$1 = (function (){var statearr_22934 = state_22924;
(statearr_22934[(13)] = inst_22804);

(statearr_22934[(14)] = inst_22802);

(statearr_22934[(15)] = inst_22842);

(statearr_22934[(16)] = inst_22801);

(statearr_22934[(17)] = inst_22803);

return statearr_22934;
})();
var statearr_22935_23019 = state_22924__$1;
(statearr_22935_23019[(2)] = null);

(statearr_22935_23019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (39))){
var state_22924__$1 = state_22924;
var statearr_22939_23020 = state_22924__$1;
(statearr_22939_23020[(2)] = null);

(statearr_22939_23020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (4))){
var inst_22792 = (state_22924[(10)]);
var inst_22792__$1 = (state_22924[(2)]);
var inst_22793 = (inst_22792__$1 == null);
var state_22924__$1 = (function (){var statearr_22940 = state_22924;
(statearr_22940[(10)] = inst_22792__$1);

return statearr_22940;
})();
if(cljs.core.truth_(inst_22793)){
var statearr_22941_23021 = state_22924__$1;
(statearr_22941_23021[(1)] = (5));

} else {
var statearr_22942_23022 = state_22924__$1;
(statearr_22942_23022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (15))){
var inst_22804 = (state_22924[(13)]);
var inst_22802 = (state_22924[(14)]);
var inst_22801 = (state_22924[(16)]);
var inst_22803 = (state_22924[(17)]);
var inst_22819 = (state_22924[(2)]);
var inst_22820 = (inst_22804 + (1));
var tmp22936 = inst_22802;
var tmp22937 = inst_22801;
var tmp22938 = inst_22803;
var inst_22801__$1 = tmp22937;
var inst_22802__$1 = tmp22936;
var inst_22803__$1 = tmp22938;
var inst_22804__$1 = inst_22820;
var state_22924__$1 = (function (){var statearr_22943 = state_22924;
(statearr_22943[(13)] = inst_22804__$1);

(statearr_22943[(14)] = inst_22802__$1);

(statearr_22943[(18)] = inst_22819);

(statearr_22943[(16)] = inst_22801__$1);

(statearr_22943[(17)] = inst_22803__$1);

return statearr_22943;
})();
var statearr_22944_23023 = state_22924__$1;
(statearr_22944_23023[(2)] = null);

(statearr_22944_23023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (21))){
var inst_22846 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22948_23024 = state_22924__$1;
(statearr_22948_23024[(2)] = inst_22846);

(statearr_22948_23024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (31))){
var inst_22872 = (state_22924[(12)]);
var inst_22876 = done.call(null,null);
var inst_22877 = cljs.core.async.untap_STAR_.call(null,m,inst_22872);
var state_22924__$1 = (function (){var statearr_22949 = state_22924;
(statearr_22949[(19)] = inst_22876);

return statearr_22949;
})();
var statearr_22950_23025 = state_22924__$1;
(statearr_22950_23025[(2)] = inst_22877);

(statearr_22950_23025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (32))){
var inst_22866 = (state_22924[(20)]);
var inst_22865 = (state_22924[(9)]);
var inst_22867 = (state_22924[(11)]);
var inst_22864 = (state_22924[(21)]);
var inst_22879 = (state_22924[(2)]);
var inst_22880 = (inst_22867 + (1));
var tmp22945 = inst_22866;
var tmp22946 = inst_22865;
var tmp22947 = inst_22864;
var inst_22864__$1 = tmp22947;
var inst_22865__$1 = tmp22946;
var inst_22866__$1 = tmp22945;
var inst_22867__$1 = inst_22880;
var state_22924__$1 = (function (){var statearr_22951 = state_22924;
(statearr_22951[(20)] = inst_22866__$1);

(statearr_22951[(9)] = inst_22865__$1);

(statearr_22951[(11)] = inst_22867__$1);

(statearr_22951[(21)] = inst_22864__$1);

(statearr_22951[(22)] = inst_22879);

return statearr_22951;
})();
var statearr_22952_23026 = state_22924__$1;
(statearr_22952_23026[(2)] = null);

(statearr_22952_23026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (40))){
var inst_22892 = (state_22924[(23)]);
var inst_22896 = done.call(null,null);
var inst_22897 = cljs.core.async.untap_STAR_.call(null,m,inst_22892);
var state_22924__$1 = (function (){var statearr_22953 = state_22924;
(statearr_22953[(24)] = inst_22896);

return statearr_22953;
})();
var statearr_22954_23027 = state_22924__$1;
(statearr_22954_23027[(2)] = inst_22897);

(statearr_22954_23027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (33))){
var inst_22883 = (state_22924[(25)]);
var inst_22885 = cljs.core.chunked_seq_QMARK_.call(null,inst_22883);
var state_22924__$1 = state_22924;
if(inst_22885){
var statearr_22955_23028 = state_22924__$1;
(statearr_22955_23028[(1)] = (36));

} else {
var statearr_22956_23029 = state_22924__$1;
(statearr_22956_23029[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (13))){
var inst_22813 = (state_22924[(26)]);
var inst_22816 = cljs.core.async.close_BANG_.call(null,inst_22813);
var state_22924__$1 = state_22924;
var statearr_22957_23030 = state_22924__$1;
(statearr_22957_23030[(2)] = inst_22816);

(statearr_22957_23030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (22))){
var inst_22836 = (state_22924[(8)]);
var inst_22839 = cljs.core.async.close_BANG_.call(null,inst_22836);
var state_22924__$1 = state_22924;
var statearr_22958_23031 = state_22924__$1;
(statearr_22958_23031[(2)] = inst_22839);

(statearr_22958_23031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (36))){
var inst_22883 = (state_22924[(25)]);
var inst_22887 = cljs.core.chunk_first.call(null,inst_22883);
var inst_22888 = cljs.core.chunk_rest.call(null,inst_22883);
var inst_22889 = cljs.core.count.call(null,inst_22887);
var inst_22864 = inst_22888;
var inst_22865 = inst_22887;
var inst_22866 = inst_22889;
var inst_22867 = (0);
var state_22924__$1 = (function (){var statearr_22959 = state_22924;
(statearr_22959[(20)] = inst_22866);

(statearr_22959[(9)] = inst_22865);

(statearr_22959[(11)] = inst_22867);

(statearr_22959[(21)] = inst_22864);

return statearr_22959;
})();
var statearr_22960_23032 = state_22924__$1;
(statearr_22960_23032[(2)] = null);

(statearr_22960_23032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (41))){
var inst_22883 = (state_22924[(25)]);
var inst_22899 = (state_22924[(2)]);
var inst_22900 = cljs.core.next.call(null,inst_22883);
var inst_22864 = inst_22900;
var inst_22865 = null;
var inst_22866 = (0);
var inst_22867 = (0);
var state_22924__$1 = (function (){var statearr_22961 = state_22924;
(statearr_22961[(20)] = inst_22866);

(statearr_22961[(27)] = inst_22899);

(statearr_22961[(9)] = inst_22865);

(statearr_22961[(11)] = inst_22867);

(statearr_22961[(21)] = inst_22864);

return statearr_22961;
})();
var statearr_22962_23033 = state_22924__$1;
(statearr_22962_23033[(2)] = null);

(statearr_22962_23033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (43))){
var state_22924__$1 = state_22924;
var statearr_22963_23034 = state_22924__$1;
(statearr_22963_23034[(2)] = null);

(statearr_22963_23034[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (29))){
var inst_22908 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22964_23035 = state_22924__$1;
(statearr_22964_23035[(2)] = inst_22908);

(statearr_22964_23035[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (44))){
var inst_22917 = (state_22924[(2)]);
var state_22924__$1 = (function (){var statearr_22965 = state_22924;
(statearr_22965[(28)] = inst_22917);

return statearr_22965;
})();
var statearr_22966_23036 = state_22924__$1;
(statearr_22966_23036[(2)] = null);

(statearr_22966_23036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var inst_22856 = (state_22924[(29)]);
var inst_22855 = cljs.core.deref.call(null,cs);
var inst_22856__$1 = cljs.core.keys.call(null,inst_22855);
var inst_22857 = cljs.core.count.call(null,inst_22856__$1);
var inst_22858 = cljs.core.reset_BANG_.call(null,dctr,inst_22857);
var inst_22863 = cljs.core.seq.call(null,inst_22856__$1);
var inst_22864 = inst_22863;
var inst_22865 = null;
var inst_22866 = (0);
var inst_22867 = (0);
var state_22924__$1 = (function (){var statearr_22967 = state_22924;
(statearr_22967[(20)] = inst_22866);

(statearr_22967[(9)] = inst_22865);

(statearr_22967[(29)] = inst_22856__$1);

(statearr_22967[(11)] = inst_22867);

(statearr_22967[(30)] = inst_22858);

(statearr_22967[(21)] = inst_22864);

return statearr_22967;
})();
var statearr_22968_23037 = state_22924__$1;
(statearr_22968_23037[(2)] = null);

(statearr_22968_23037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (28))){
var inst_22864 = (state_22924[(21)]);
var inst_22883 = (state_22924[(25)]);
var inst_22883__$1 = cljs.core.seq.call(null,inst_22864);
var state_22924__$1 = (function (){var statearr_22969 = state_22924;
(statearr_22969[(25)] = inst_22883__$1);

return statearr_22969;
})();
if(inst_22883__$1){
var statearr_22970_23038 = state_22924__$1;
(statearr_22970_23038[(1)] = (33));

} else {
var statearr_22971_23039 = state_22924__$1;
(statearr_22971_23039[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (25))){
var inst_22866 = (state_22924[(20)]);
var inst_22867 = (state_22924[(11)]);
var inst_22869 = (inst_22867 < inst_22866);
var inst_22870 = inst_22869;
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22870)){
var statearr_22972_23040 = state_22924__$1;
(statearr_22972_23040[(1)] = (27));

} else {
var statearr_22973_23041 = state_22924__$1;
(statearr_22973_23041[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (34))){
var state_22924__$1 = state_22924;
var statearr_22974_23042 = state_22924__$1;
(statearr_22974_23042[(2)] = null);

(statearr_22974_23042[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (17))){
var state_22924__$1 = state_22924;
var statearr_22975_23043 = state_22924__$1;
(statearr_22975_23043[(2)] = null);

(statearr_22975_23043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (12))){
var inst_22851 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22976_23044 = state_22924__$1;
(statearr_22976_23044[(2)] = inst_22851);

(statearr_22976_23044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (2))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(4),ch);
} else {
if((state_val_22925 === (23))){
var state_22924__$1 = state_22924;
var statearr_22977_23045 = state_22924__$1;
(statearr_22977_23045[(2)] = null);

(statearr_22977_23045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (35))){
var inst_22906 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22978_23046 = state_22924__$1;
(statearr_22978_23046[(2)] = inst_22906);

(statearr_22978_23046[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (19))){
var inst_22823 = (state_22924[(7)]);
var inst_22827 = cljs.core.chunk_first.call(null,inst_22823);
var inst_22828 = cljs.core.chunk_rest.call(null,inst_22823);
var inst_22829 = cljs.core.count.call(null,inst_22827);
var inst_22801 = inst_22828;
var inst_22802 = inst_22827;
var inst_22803 = inst_22829;
var inst_22804 = (0);
var state_22924__$1 = (function (){var statearr_22979 = state_22924;
(statearr_22979[(13)] = inst_22804);

(statearr_22979[(14)] = inst_22802);

(statearr_22979[(16)] = inst_22801);

(statearr_22979[(17)] = inst_22803);

return statearr_22979;
})();
var statearr_22980_23047 = state_22924__$1;
(statearr_22980_23047[(2)] = null);

(statearr_22980_23047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (11))){
var inst_22801 = (state_22924[(16)]);
var inst_22823 = (state_22924[(7)]);
var inst_22823__$1 = cljs.core.seq.call(null,inst_22801);
var state_22924__$1 = (function (){var statearr_22981 = state_22924;
(statearr_22981[(7)] = inst_22823__$1);

return statearr_22981;
})();
if(inst_22823__$1){
var statearr_22982_23048 = state_22924__$1;
(statearr_22982_23048[(1)] = (16));

} else {
var statearr_22983_23049 = state_22924__$1;
(statearr_22983_23049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (9))){
var inst_22853 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22984_23050 = state_22924__$1;
(statearr_22984_23050[(2)] = inst_22853);

(statearr_22984_23050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (5))){
var inst_22799 = cljs.core.deref.call(null,cs);
var inst_22800 = cljs.core.seq.call(null,inst_22799);
var inst_22801 = inst_22800;
var inst_22802 = null;
var inst_22803 = (0);
var inst_22804 = (0);
var state_22924__$1 = (function (){var statearr_22985 = state_22924;
(statearr_22985[(13)] = inst_22804);

(statearr_22985[(14)] = inst_22802);

(statearr_22985[(16)] = inst_22801);

(statearr_22985[(17)] = inst_22803);

return statearr_22985;
})();
var statearr_22986_23051 = state_22924__$1;
(statearr_22986_23051[(2)] = null);

(statearr_22986_23051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (14))){
var state_22924__$1 = state_22924;
var statearr_22987_23052 = state_22924__$1;
(statearr_22987_23052[(2)] = null);

(statearr_22987_23052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (45))){
var inst_22914 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22988_23053 = state_22924__$1;
(statearr_22988_23053[(2)] = inst_22914);

(statearr_22988_23053[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (26))){
var inst_22856 = (state_22924[(29)]);
var inst_22910 = (state_22924[(2)]);
var inst_22911 = cljs.core.seq.call(null,inst_22856);
var state_22924__$1 = (function (){var statearr_22989 = state_22924;
(statearr_22989[(31)] = inst_22910);

return statearr_22989;
})();
if(inst_22911){
var statearr_22990_23054 = state_22924__$1;
(statearr_22990_23054[(1)] = (42));

} else {
var statearr_22991_23055 = state_22924__$1;
(statearr_22991_23055[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (16))){
var inst_22823 = (state_22924[(7)]);
var inst_22825 = cljs.core.chunked_seq_QMARK_.call(null,inst_22823);
var state_22924__$1 = state_22924;
if(inst_22825){
var statearr_22992_23056 = state_22924__$1;
(statearr_22992_23056[(1)] = (19));

} else {
var statearr_22993_23057 = state_22924__$1;
(statearr_22993_23057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (38))){
var inst_22903 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22994_23058 = state_22924__$1;
(statearr_22994_23058[(2)] = inst_22903);

(statearr_22994_23058[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (30))){
var state_22924__$1 = state_22924;
var statearr_22995_23059 = state_22924__$1;
(statearr_22995_23059[(2)] = null);

(statearr_22995_23059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (10))){
var inst_22804 = (state_22924[(13)]);
var inst_22802 = (state_22924[(14)]);
var inst_22812 = cljs.core._nth.call(null,inst_22802,inst_22804);
var inst_22813 = cljs.core.nth.call(null,inst_22812,(0),null);
var inst_22814 = cljs.core.nth.call(null,inst_22812,(1),null);
var state_22924__$1 = (function (){var statearr_22996 = state_22924;
(statearr_22996[(26)] = inst_22813);

return statearr_22996;
})();
if(cljs.core.truth_(inst_22814)){
var statearr_22997_23060 = state_22924__$1;
(statearr_22997_23060[(1)] = (13));

} else {
var statearr_22998_23061 = state_22924__$1;
(statearr_22998_23061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (18))){
var inst_22849 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22999_23062 = state_22924__$1;
(statearr_22999_23062[(2)] = inst_22849);

(statearr_22999_23062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (42))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(45),dchan);
} else {
if((state_val_22925 === (37))){
var inst_22892 = (state_22924[(23)]);
var inst_22792 = (state_22924[(10)]);
var inst_22883 = (state_22924[(25)]);
var inst_22892__$1 = cljs.core.first.call(null,inst_22883);
var inst_22893 = cljs.core.async.put_BANG_.call(null,inst_22892__$1,inst_22792,done);
var state_22924__$1 = (function (){var statearr_23000 = state_22924;
(statearr_23000[(23)] = inst_22892__$1);

return statearr_23000;
})();
if(cljs.core.truth_(inst_22893)){
var statearr_23001_23063 = state_22924__$1;
(statearr_23001_23063[(1)] = (39));

} else {
var statearr_23002_23064 = state_22924__$1;
(statearr_23002_23064[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (8))){
var inst_22804 = (state_22924[(13)]);
var inst_22803 = (state_22924[(17)]);
var inst_22806 = (inst_22804 < inst_22803);
var inst_22807 = inst_22806;
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22807)){
var statearr_23003_23065 = state_22924__$1;
(statearr_23003_23065[(1)] = (10));

} else {
var statearr_23004_23066 = state_22924__$1;
(statearr_23004_23066[(1)] = (11));

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
});})(c__21659__auto___23012,cs,m,dchan,dctr,done))
;
return ((function (switch__21547__auto__,c__21659__auto___23012,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21548__auto__ = null;
var cljs$core$async$mult_$_state_machine__21548__auto____0 = (function (){
var statearr_23008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23008[(0)] = cljs$core$async$mult_$_state_machine__21548__auto__);

(statearr_23008[(1)] = (1));

return statearr_23008;
});
var cljs$core$async$mult_$_state_machine__21548__auto____1 = (function (state_22924){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23009){if((e23009 instanceof Object)){
var ex__21551__auto__ = e23009;
var statearr_23010_23067 = state_22924;
(statearr_23010_23067[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23068 = state_22924;
state_22924 = G__23068;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21548__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21548__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21548__auto____0;
cljs$core$async$mult_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21548__auto____1;
return cljs$core$async$mult_$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23012,cs,m,dchan,dctr,done))
})();
var state__21661__auto__ = (function (){var statearr_23011 = f__21660__auto__.call(null);
(statearr_23011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23012);

return statearr_23011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23012,cs,m,dchan,dctr,done))
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
var args23069 = [];
var len__12775__auto___23072 = arguments.length;
var i__12776__auto___23073 = (0);
while(true){
if((i__12776__auto___23073 < len__12775__auto___23072)){
args23069.push((arguments[i__12776__auto___23073]));

var G__23074 = (i__12776__auto___23073 + (1));
i__12776__auto___23073 = G__23074;
continue;
} else {
}
break;
}

var G__23071 = args23069.length;
switch (G__23071) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23069.length)].join('')));

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
var len__12775__auto___23086 = arguments.length;
var i__12776__auto___23087 = (0);
while(true){
if((i__12776__auto___23087 < len__12775__auto___23086)){
args__12782__auto__.push((arguments[i__12776__auto___23087]));

var G__23088 = (i__12776__auto___23087 + (1));
i__12776__auto___23087 = G__23088;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((3) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12783__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23080){
var map__23081 = p__23080;
var map__23081__$1 = ((((!((map__23081 == null)))?((((map__23081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23081):map__23081);
var opts = map__23081__$1;
var statearr_23083_23089 = state;
(statearr_23083_23089[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23081,map__23081__$1,opts){
return (function (val){
var statearr_23084_23090 = state;
(statearr_23084_23090[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23081,map__23081__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23085_23091 = state;
(statearr_23085_23091[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23076){
var G__23077 = cljs.core.first.call(null,seq23076);
var seq23076__$1 = cljs.core.next.call(null,seq23076);
var G__23078 = cljs.core.first.call(null,seq23076__$1);
var seq23076__$2 = cljs.core.next.call(null,seq23076__$1);
var G__23079 = cljs.core.first.call(null,seq23076__$2);
var seq23076__$3 = cljs.core.next.call(null,seq23076__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23077,G__23078,G__23079,seq23076__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23257 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23258){
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
this.meta23258 = meta23258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23259,meta23258__$1){
var self__ = this;
var _23259__$1 = this;
return (new cljs.core.async.t_cljs$core$async23257(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23258__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23259){
var self__ = this;
var _23259__$1 = this;
return self__.meta23258;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23257.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23258","meta23258",-1691414081,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23257";

cljs.core.async.t_cljs$core$async23257.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23257");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23257 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23257(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23258){
return (new cljs.core.async.t_cljs$core$async23257(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23258));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23257(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21659__auto___23422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23359){
var state_val_23360 = (state_23359[(1)]);
if((state_val_23360 === (7))){
var inst_23275 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23361_23423 = state_23359__$1;
(statearr_23361_23423[(2)] = inst_23275);

(statearr_23361_23423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (20))){
var inst_23287 = (state_23359[(7)]);
var state_23359__$1 = state_23359;
var statearr_23362_23424 = state_23359__$1;
(statearr_23362_23424[(2)] = inst_23287);

(statearr_23362_23424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (27))){
var state_23359__$1 = state_23359;
var statearr_23363_23425 = state_23359__$1;
(statearr_23363_23425[(2)] = null);

(statearr_23363_23425[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (1))){
var inst_23263 = (state_23359[(8)]);
var inst_23263__$1 = calc_state.call(null);
var inst_23265 = (inst_23263__$1 == null);
var inst_23266 = cljs.core.not.call(null,inst_23265);
var state_23359__$1 = (function (){var statearr_23364 = state_23359;
(statearr_23364[(8)] = inst_23263__$1);

return statearr_23364;
})();
if(inst_23266){
var statearr_23365_23426 = state_23359__$1;
(statearr_23365_23426[(1)] = (2));

} else {
var statearr_23366_23427 = state_23359__$1;
(statearr_23366_23427[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (24))){
var inst_23310 = (state_23359[(9)]);
var inst_23319 = (state_23359[(10)]);
var inst_23333 = (state_23359[(11)]);
var inst_23333__$1 = inst_23310.call(null,inst_23319);
var state_23359__$1 = (function (){var statearr_23367 = state_23359;
(statearr_23367[(11)] = inst_23333__$1);

return statearr_23367;
})();
if(cljs.core.truth_(inst_23333__$1)){
var statearr_23368_23428 = state_23359__$1;
(statearr_23368_23428[(1)] = (29));

} else {
var statearr_23369_23429 = state_23359__$1;
(statearr_23369_23429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (4))){
var inst_23278 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23278)){
var statearr_23370_23430 = state_23359__$1;
(statearr_23370_23430[(1)] = (8));

} else {
var statearr_23371_23431 = state_23359__$1;
(statearr_23371_23431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (15))){
var inst_23304 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23304)){
var statearr_23372_23432 = state_23359__$1;
(statearr_23372_23432[(1)] = (19));

} else {
var statearr_23373_23433 = state_23359__$1;
(statearr_23373_23433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (21))){
var inst_23309 = (state_23359[(12)]);
var inst_23309__$1 = (state_23359[(2)]);
var inst_23310 = cljs.core.get.call(null,inst_23309__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23311 = cljs.core.get.call(null,inst_23309__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23312 = cljs.core.get.call(null,inst_23309__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23359__$1 = (function (){var statearr_23374 = state_23359;
(statearr_23374[(9)] = inst_23310);

(statearr_23374[(13)] = inst_23311);

(statearr_23374[(12)] = inst_23309__$1);

return statearr_23374;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23359__$1,(22),inst_23312);
} else {
if((state_val_23360 === (31))){
var inst_23341 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23341)){
var statearr_23375_23434 = state_23359__$1;
(statearr_23375_23434[(1)] = (32));

} else {
var statearr_23376_23435 = state_23359__$1;
(statearr_23376_23435[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (32))){
var inst_23318 = (state_23359[(14)]);
var state_23359__$1 = state_23359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23359__$1,(35),out,inst_23318);
} else {
if((state_val_23360 === (33))){
var inst_23309 = (state_23359[(12)]);
var inst_23287 = inst_23309;
var state_23359__$1 = (function (){var statearr_23377 = state_23359;
(statearr_23377[(7)] = inst_23287);

return statearr_23377;
})();
var statearr_23378_23436 = state_23359__$1;
(statearr_23378_23436[(2)] = null);

(statearr_23378_23436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (13))){
var inst_23287 = (state_23359[(7)]);
var inst_23294 = inst_23287.cljs$lang$protocol_mask$partition0$;
var inst_23295 = (inst_23294 & (64));
var inst_23296 = inst_23287.cljs$core$ISeq$;
var inst_23297 = (inst_23295) || (inst_23296);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23297)){
var statearr_23379_23437 = state_23359__$1;
(statearr_23379_23437[(1)] = (16));

} else {
var statearr_23380_23438 = state_23359__$1;
(statearr_23380_23438[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (22))){
var inst_23318 = (state_23359[(14)]);
var inst_23319 = (state_23359[(10)]);
var inst_23317 = (state_23359[(2)]);
var inst_23318__$1 = cljs.core.nth.call(null,inst_23317,(0),null);
var inst_23319__$1 = cljs.core.nth.call(null,inst_23317,(1),null);
var inst_23320 = (inst_23318__$1 == null);
var inst_23321 = cljs.core._EQ_.call(null,inst_23319__$1,change);
var inst_23322 = (inst_23320) || (inst_23321);
var state_23359__$1 = (function (){var statearr_23381 = state_23359;
(statearr_23381[(14)] = inst_23318__$1);

(statearr_23381[(10)] = inst_23319__$1);

return statearr_23381;
})();
if(cljs.core.truth_(inst_23322)){
var statearr_23382_23439 = state_23359__$1;
(statearr_23382_23439[(1)] = (23));

} else {
var statearr_23383_23440 = state_23359__$1;
(statearr_23383_23440[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (36))){
var inst_23309 = (state_23359[(12)]);
var inst_23287 = inst_23309;
var state_23359__$1 = (function (){var statearr_23384 = state_23359;
(statearr_23384[(7)] = inst_23287);

return statearr_23384;
})();
var statearr_23385_23441 = state_23359__$1;
(statearr_23385_23441[(2)] = null);

(statearr_23385_23441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (29))){
var inst_23333 = (state_23359[(11)]);
var state_23359__$1 = state_23359;
var statearr_23386_23442 = state_23359__$1;
(statearr_23386_23442[(2)] = inst_23333);

(statearr_23386_23442[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (6))){
var state_23359__$1 = state_23359;
var statearr_23387_23443 = state_23359__$1;
(statearr_23387_23443[(2)] = false);

(statearr_23387_23443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (28))){
var inst_23329 = (state_23359[(2)]);
var inst_23330 = calc_state.call(null);
var inst_23287 = inst_23330;
var state_23359__$1 = (function (){var statearr_23388 = state_23359;
(statearr_23388[(15)] = inst_23329);

(statearr_23388[(7)] = inst_23287);

return statearr_23388;
})();
var statearr_23389_23444 = state_23359__$1;
(statearr_23389_23444[(2)] = null);

(statearr_23389_23444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (25))){
var inst_23355 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23390_23445 = state_23359__$1;
(statearr_23390_23445[(2)] = inst_23355);

(statearr_23390_23445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (34))){
var inst_23353 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23391_23446 = state_23359__$1;
(statearr_23391_23446[(2)] = inst_23353);

(statearr_23391_23446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (17))){
var state_23359__$1 = state_23359;
var statearr_23392_23447 = state_23359__$1;
(statearr_23392_23447[(2)] = false);

(statearr_23392_23447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (3))){
var state_23359__$1 = state_23359;
var statearr_23393_23448 = state_23359__$1;
(statearr_23393_23448[(2)] = false);

(statearr_23393_23448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (12))){
var inst_23357 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23359__$1,inst_23357);
} else {
if((state_val_23360 === (2))){
var inst_23263 = (state_23359[(8)]);
var inst_23268 = inst_23263.cljs$lang$protocol_mask$partition0$;
var inst_23269 = (inst_23268 & (64));
var inst_23270 = inst_23263.cljs$core$ISeq$;
var inst_23271 = (inst_23269) || (inst_23270);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23271)){
var statearr_23394_23449 = state_23359__$1;
(statearr_23394_23449[(1)] = (5));

} else {
var statearr_23395_23450 = state_23359__$1;
(statearr_23395_23450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (23))){
var inst_23318 = (state_23359[(14)]);
var inst_23324 = (inst_23318 == null);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23324)){
var statearr_23396_23451 = state_23359__$1;
(statearr_23396_23451[(1)] = (26));

} else {
var statearr_23397_23452 = state_23359__$1;
(statearr_23397_23452[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (35))){
var inst_23344 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23344)){
var statearr_23398_23453 = state_23359__$1;
(statearr_23398_23453[(1)] = (36));

} else {
var statearr_23399_23454 = state_23359__$1;
(statearr_23399_23454[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (19))){
var inst_23287 = (state_23359[(7)]);
var inst_23306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23287);
var state_23359__$1 = state_23359;
var statearr_23400_23455 = state_23359__$1;
(statearr_23400_23455[(2)] = inst_23306);

(statearr_23400_23455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (11))){
var inst_23287 = (state_23359[(7)]);
var inst_23291 = (inst_23287 == null);
var inst_23292 = cljs.core.not.call(null,inst_23291);
var state_23359__$1 = state_23359;
if(inst_23292){
var statearr_23401_23456 = state_23359__$1;
(statearr_23401_23456[(1)] = (13));

} else {
var statearr_23402_23457 = state_23359__$1;
(statearr_23402_23457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (9))){
var inst_23263 = (state_23359[(8)]);
var state_23359__$1 = state_23359;
var statearr_23403_23458 = state_23359__$1;
(statearr_23403_23458[(2)] = inst_23263);

(statearr_23403_23458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (5))){
var state_23359__$1 = state_23359;
var statearr_23404_23459 = state_23359__$1;
(statearr_23404_23459[(2)] = true);

(statearr_23404_23459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (14))){
var state_23359__$1 = state_23359;
var statearr_23405_23460 = state_23359__$1;
(statearr_23405_23460[(2)] = false);

(statearr_23405_23460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (26))){
var inst_23319 = (state_23359[(10)]);
var inst_23326 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23319);
var state_23359__$1 = state_23359;
var statearr_23406_23461 = state_23359__$1;
(statearr_23406_23461[(2)] = inst_23326);

(statearr_23406_23461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (16))){
var state_23359__$1 = state_23359;
var statearr_23407_23462 = state_23359__$1;
(statearr_23407_23462[(2)] = true);

(statearr_23407_23462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (38))){
var inst_23349 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23408_23463 = state_23359__$1;
(statearr_23408_23463[(2)] = inst_23349);

(statearr_23408_23463[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (30))){
var inst_23310 = (state_23359[(9)]);
var inst_23311 = (state_23359[(13)]);
var inst_23319 = (state_23359[(10)]);
var inst_23336 = cljs.core.empty_QMARK_.call(null,inst_23310);
var inst_23337 = inst_23311.call(null,inst_23319);
var inst_23338 = cljs.core.not.call(null,inst_23337);
var inst_23339 = (inst_23336) && (inst_23338);
var state_23359__$1 = state_23359;
var statearr_23409_23464 = state_23359__$1;
(statearr_23409_23464[(2)] = inst_23339);

(statearr_23409_23464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (10))){
var inst_23263 = (state_23359[(8)]);
var inst_23283 = (state_23359[(2)]);
var inst_23284 = cljs.core.get.call(null,inst_23283,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23285 = cljs.core.get.call(null,inst_23283,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23286 = cljs.core.get.call(null,inst_23283,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23287 = inst_23263;
var state_23359__$1 = (function (){var statearr_23410 = state_23359;
(statearr_23410[(16)] = inst_23285);

(statearr_23410[(17)] = inst_23284);

(statearr_23410[(7)] = inst_23287);

(statearr_23410[(18)] = inst_23286);

return statearr_23410;
})();
var statearr_23411_23465 = state_23359__$1;
(statearr_23411_23465[(2)] = null);

(statearr_23411_23465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (18))){
var inst_23301 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23412_23466 = state_23359__$1;
(statearr_23412_23466[(2)] = inst_23301);

(statearr_23412_23466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (37))){
var state_23359__$1 = state_23359;
var statearr_23413_23467 = state_23359__$1;
(statearr_23413_23467[(2)] = null);

(statearr_23413_23467[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23360 === (8))){
var inst_23263 = (state_23359[(8)]);
var inst_23280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23263);
var state_23359__$1 = state_23359;
var statearr_23414_23468 = state_23359__$1;
(statearr_23414_23468[(2)] = inst_23280);

(statearr_23414_23468[(1)] = (10));


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
});})(c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21547__auto__,c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21548__auto__ = null;
var cljs$core$async$mix_$_state_machine__21548__auto____0 = (function (){
var statearr_23418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23418[(0)] = cljs$core$async$mix_$_state_machine__21548__auto__);

(statearr_23418[(1)] = (1));

return statearr_23418;
});
var cljs$core$async$mix_$_state_machine__21548__auto____1 = (function (state_23359){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23419){if((e23419 instanceof Object)){
var ex__21551__auto__ = e23419;
var statearr_23420_23469 = state_23359;
(statearr_23420_23469[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23470 = state_23359;
state_23359 = G__23470;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21548__auto__ = function(state_23359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21548__auto____1.call(this,state_23359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21548__auto____0;
cljs$core$async$mix_$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21548__auto____1;
return cljs$core$async$mix_$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21661__auto__ = (function (){var statearr_23421 = f__21660__auto__.call(null);
(statearr_23421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23422);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23471 = [];
var len__12775__auto___23474 = arguments.length;
var i__12776__auto___23475 = (0);
while(true){
if((i__12776__auto___23475 < len__12775__auto___23474)){
args23471.push((arguments[i__12776__auto___23475]));

var G__23476 = (i__12776__auto___23475 + (1));
i__12776__auto___23475 = G__23476;
continue;
} else {
}
break;
}

var G__23473 = args23471.length;
switch (G__23473) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23471.length)].join('')));

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
var args23479 = [];
var len__12775__auto___23604 = arguments.length;
var i__12776__auto___23605 = (0);
while(true){
if((i__12776__auto___23605 < len__12775__auto___23604)){
args23479.push((arguments[i__12776__auto___23605]));

var G__23606 = (i__12776__auto___23605 + (1));
i__12776__auto___23605 = G__23606;
continue;
} else {
}
break;
}

var G__23481 = args23479.length;
switch (G__23481) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23479.length)].join('')));

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
return (function (p1__23478_SHARP_){
if(cljs.core.truth_(p1__23478_SHARP_.call(null,topic))){
return p1__23478_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23478_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11700__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23482 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23483){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23483 = meta23483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23484,meta23483__$1){
var self__ = this;
var _23484__$1 = this;
return (new cljs.core.async.t_cljs$core$async23482(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23483__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23484){
var self__ = this;
var _23484__$1 = this;
return self__.meta23483;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23483","meta23483",1247657486,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23482";

cljs.core.async.t_cljs$core$async23482.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23482");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23482 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23483){
return (new cljs.core.async.t_cljs$core$async23482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23483));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23482(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21659__auto___23608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23608,mults,ensure_mult,p){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23608,mults,ensure_mult,p){
return (function (state_23556){
var state_val_23557 = (state_23556[(1)]);
if((state_val_23557 === (7))){
var inst_23552 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23558_23609 = state_23556__$1;
(statearr_23558_23609[(2)] = inst_23552);

(statearr_23558_23609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (20))){
var state_23556__$1 = state_23556;
var statearr_23559_23610 = state_23556__$1;
(statearr_23559_23610[(2)] = null);

(statearr_23559_23610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (1))){
var state_23556__$1 = state_23556;
var statearr_23560_23611 = state_23556__$1;
(statearr_23560_23611[(2)] = null);

(statearr_23560_23611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (24))){
var inst_23535 = (state_23556[(7)]);
var inst_23544 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23535);
var state_23556__$1 = state_23556;
var statearr_23561_23612 = state_23556__$1;
(statearr_23561_23612[(2)] = inst_23544);

(statearr_23561_23612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (4))){
var inst_23487 = (state_23556[(8)]);
var inst_23487__$1 = (state_23556[(2)]);
var inst_23488 = (inst_23487__$1 == null);
var state_23556__$1 = (function (){var statearr_23562 = state_23556;
(statearr_23562[(8)] = inst_23487__$1);

return statearr_23562;
})();
if(cljs.core.truth_(inst_23488)){
var statearr_23563_23613 = state_23556__$1;
(statearr_23563_23613[(1)] = (5));

} else {
var statearr_23564_23614 = state_23556__$1;
(statearr_23564_23614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (15))){
var inst_23529 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23565_23615 = state_23556__$1;
(statearr_23565_23615[(2)] = inst_23529);

(statearr_23565_23615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (21))){
var inst_23549 = (state_23556[(2)]);
var state_23556__$1 = (function (){var statearr_23566 = state_23556;
(statearr_23566[(9)] = inst_23549);

return statearr_23566;
})();
var statearr_23567_23616 = state_23556__$1;
(statearr_23567_23616[(2)] = null);

(statearr_23567_23616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (13))){
var inst_23511 = (state_23556[(10)]);
var inst_23513 = cljs.core.chunked_seq_QMARK_.call(null,inst_23511);
var state_23556__$1 = state_23556;
if(inst_23513){
var statearr_23568_23617 = state_23556__$1;
(statearr_23568_23617[(1)] = (16));

} else {
var statearr_23569_23618 = state_23556__$1;
(statearr_23569_23618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (22))){
var inst_23541 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
if(cljs.core.truth_(inst_23541)){
var statearr_23570_23619 = state_23556__$1;
(statearr_23570_23619[(1)] = (23));

} else {
var statearr_23571_23620 = state_23556__$1;
(statearr_23571_23620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (6))){
var inst_23537 = (state_23556[(11)]);
var inst_23535 = (state_23556[(7)]);
var inst_23487 = (state_23556[(8)]);
var inst_23535__$1 = topic_fn.call(null,inst_23487);
var inst_23536 = cljs.core.deref.call(null,mults);
var inst_23537__$1 = cljs.core.get.call(null,inst_23536,inst_23535__$1);
var state_23556__$1 = (function (){var statearr_23572 = state_23556;
(statearr_23572[(11)] = inst_23537__$1);

(statearr_23572[(7)] = inst_23535__$1);

return statearr_23572;
})();
if(cljs.core.truth_(inst_23537__$1)){
var statearr_23573_23621 = state_23556__$1;
(statearr_23573_23621[(1)] = (19));

} else {
var statearr_23574_23622 = state_23556__$1;
(statearr_23574_23622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (25))){
var inst_23546 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23575_23623 = state_23556__$1;
(statearr_23575_23623[(2)] = inst_23546);

(statearr_23575_23623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (17))){
var inst_23511 = (state_23556[(10)]);
var inst_23520 = cljs.core.first.call(null,inst_23511);
var inst_23521 = cljs.core.async.muxch_STAR_.call(null,inst_23520);
var inst_23522 = cljs.core.async.close_BANG_.call(null,inst_23521);
var inst_23523 = cljs.core.next.call(null,inst_23511);
var inst_23497 = inst_23523;
var inst_23498 = null;
var inst_23499 = (0);
var inst_23500 = (0);
var state_23556__$1 = (function (){var statearr_23576 = state_23556;
(statearr_23576[(12)] = inst_23497);

(statearr_23576[(13)] = inst_23522);

(statearr_23576[(14)] = inst_23499);

(statearr_23576[(15)] = inst_23500);

(statearr_23576[(16)] = inst_23498);

return statearr_23576;
})();
var statearr_23577_23624 = state_23556__$1;
(statearr_23577_23624[(2)] = null);

(statearr_23577_23624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (3))){
var inst_23554 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23556__$1,inst_23554);
} else {
if((state_val_23557 === (12))){
var inst_23531 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23578_23625 = state_23556__$1;
(statearr_23578_23625[(2)] = inst_23531);

(statearr_23578_23625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (2))){
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23556__$1,(4),ch);
} else {
if((state_val_23557 === (23))){
var state_23556__$1 = state_23556;
var statearr_23579_23626 = state_23556__$1;
(statearr_23579_23626[(2)] = null);

(statearr_23579_23626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (19))){
var inst_23537 = (state_23556[(11)]);
var inst_23487 = (state_23556[(8)]);
var inst_23539 = cljs.core.async.muxch_STAR_.call(null,inst_23537);
var state_23556__$1 = state_23556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23556__$1,(22),inst_23539,inst_23487);
} else {
if((state_val_23557 === (11))){
var inst_23497 = (state_23556[(12)]);
var inst_23511 = (state_23556[(10)]);
var inst_23511__$1 = cljs.core.seq.call(null,inst_23497);
var state_23556__$1 = (function (){var statearr_23580 = state_23556;
(statearr_23580[(10)] = inst_23511__$1);

return statearr_23580;
})();
if(inst_23511__$1){
var statearr_23581_23627 = state_23556__$1;
(statearr_23581_23627[(1)] = (13));

} else {
var statearr_23582_23628 = state_23556__$1;
(statearr_23582_23628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (9))){
var inst_23533 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23583_23629 = state_23556__$1;
(statearr_23583_23629[(2)] = inst_23533);

(statearr_23583_23629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (5))){
var inst_23494 = cljs.core.deref.call(null,mults);
var inst_23495 = cljs.core.vals.call(null,inst_23494);
var inst_23496 = cljs.core.seq.call(null,inst_23495);
var inst_23497 = inst_23496;
var inst_23498 = null;
var inst_23499 = (0);
var inst_23500 = (0);
var state_23556__$1 = (function (){var statearr_23584 = state_23556;
(statearr_23584[(12)] = inst_23497);

(statearr_23584[(14)] = inst_23499);

(statearr_23584[(15)] = inst_23500);

(statearr_23584[(16)] = inst_23498);

return statearr_23584;
})();
var statearr_23585_23630 = state_23556__$1;
(statearr_23585_23630[(2)] = null);

(statearr_23585_23630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (14))){
var state_23556__$1 = state_23556;
var statearr_23589_23631 = state_23556__$1;
(statearr_23589_23631[(2)] = null);

(statearr_23589_23631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (16))){
var inst_23511 = (state_23556[(10)]);
var inst_23515 = cljs.core.chunk_first.call(null,inst_23511);
var inst_23516 = cljs.core.chunk_rest.call(null,inst_23511);
var inst_23517 = cljs.core.count.call(null,inst_23515);
var inst_23497 = inst_23516;
var inst_23498 = inst_23515;
var inst_23499 = inst_23517;
var inst_23500 = (0);
var state_23556__$1 = (function (){var statearr_23590 = state_23556;
(statearr_23590[(12)] = inst_23497);

(statearr_23590[(14)] = inst_23499);

(statearr_23590[(15)] = inst_23500);

(statearr_23590[(16)] = inst_23498);

return statearr_23590;
})();
var statearr_23591_23632 = state_23556__$1;
(statearr_23591_23632[(2)] = null);

(statearr_23591_23632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (10))){
var inst_23497 = (state_23556[(12)]);
var inst_23499 = (state_23556[(14)]);
var inst_23500 = (state_23556[(15)]);
var inst_23498 = (state_23556[(16)]);
var inst_23505 = cljs.core._nth.call(null,inst_23498,inst_23500);
var inst_23506 = cljs.core.async.muxch_STAR_.call(null,inst_23505);
var inst_23507 = cljs.core.async.close_BANG_.call(null,inst_23506);
var inst_23508 = (inst_23500 + (1));
var tmp23586 = inst_23497;
var tmp23587 = inst_23499;
var tmp23588 = inst_23498;
var inst_23497__$1 = tmp23586;
var inst_23498__$1 = tmp23588;
var inst_23499__$1 = tmp23587;
var inst_23500__$1 = inst_23508;
var state_23556__$1 = (function (){var statearr_23592 = state_23556;
(statearr_23592[(12)] = inst_23497__$1);

(statearr_23592[(17)] = inst_23507);

(statearr_23592[(14)] = inst_23499__$1);

(statearr_23592[(15)] = inst_23500__$1);

(statearr_23592[(16)] = inst_23498__$1);

return statearr_23592;
})();
var statearr_23593_23633 = state_23556__$1;
(statearr_23593_23633[(2)] = null);

(statearr_23593_23633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (18))){
var inst_23526 = (state_23556[(2)]);
var state_23556__$1 = state_23556;
var statearr_23594_23634 = state_23556__$1;
(statearr_23594_23634[(2)] = inst_23526);

(statearr_23594_23634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23557 === (8))){
var inst_23499 = (state_23556[(14)]);
var inst_23500 = (state_23556[(15)]);
var inst_23502 = (inst_23500 < inst_23499);
var inst_23503 = inst_23502;
var state_23556__$1 = state_23556;
if(cljs.core.truth_(inst_23503)){
var statearr_23595_23635 = state_23556__$1;
(statearr_23595_23635[(1)] = (10));

} else {
var statearr_23596_23636 = state_23556__$1;
(statearr_23596_23636[(1)] = (11));

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
});})(c__21659__auto___23608,mults,ensure_mult,p))
;
return ((function (switch__21547__auto__,c__21659__auto___23608,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_23600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23600[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_23600[(1)] = (1));

return statearr_23600;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_23556){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23601){if((e23601 instanceof Object)){
var ex__21551__auto__ = e23601;
var statearr_23602_23637 = state_23556;
(statearr_23602_23637[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23638 = state_23556;
state_23556 = G__23638;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_23556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_23556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23608,mults,ensure_mult,p))
})();
var state__21661__auto__ = (function (){var statearr_23603 = f__21660__auto__.call(null);
(statearr_23603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23608);

return statearr_23603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23608,mults,ensure_mult,p))
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
var args23639 = [];
var len__12775__auto___23642 = arguments.length;
var i__12776__auto___23643 = (0);
while(true){
if((i__12776__auto___23643 < len__12775__auto___23642)){
args23639.push((arguments[i__12776__auto___23643]));

var G__23644 = (i__12776__auto___23643 + (1));
i__12776__auto___23643 = G__23644;
continue;
} else {
}
break;
}

var G__23641 = args23639.length;
switch (G__23641) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23639.length)].join('')));

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
var args23646 = [];
var len__12775__auto___23649 = arguments.length;
var i__12776__auto___23650 = (0);
while(true){
if((i__12776__auto___23650 < len__12775__auto___23649)){
args23646.push((arguments[i__12776__auto___23650]));

var G__23651 = (i__12776__auto___23650 + (1));
i__12776__auto___23650 = G__23651;
continue;
} else {
}
break;
}

var G__23648 = args23646.length;
switch (G__23648) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23646.length)].join('')));

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
var args23653 = [];
var len__12775__auto___23724 = arguments.length;
var i__12776__auto___23725 = (0);
while(true){
if((i__12776__auto___23725 < len__12775__auto___23724)){
args23653.push((arguments[i__12776__auto___23725]));

var G__23726 = (i__12776__auto___23725 + (1));
i__12776__auto___23725 = G__23726;
continue;
} else {
}
break;
}

var G__23655 = args23653.length;
switch (G__23655) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23653.length)].join('')));

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
var c__21659__auto___23728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23694){
var state_val_23695 = (state_23694[(1)]);
if((state_val_23695 === (7))){
var state_23694__$1 = state_23694;
var statearr_23696_23729 = state_23694__$1;
(statearr_23696_23729[(2)] = null);

(statearr_23696_23729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (1))){
var state_23694__$1 = state_23694;
var statearr_23697_23730 = state_23694__$1;
(statearr_23697_23730[(2)] = null);

(statearr_23697_23730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (4))){
var inst_23658 = (state_23694[(7)]);
var inst_23660 = (inst_23658 < cnt);
var state_23694__$1 = state_23694;
if(cljs.core.truth_(inst_23660)){
var statearr_23698_23731 = state_23694__$1;
(statearr_23698_23731[(1)] = (6));

} else {
var statearr_23699_23732 = state_23694__$1;
(statearr_23699_23732[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (15))){
var inst_23690 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
var statearr_23700_23733 = state_23694__$1;
(statearr_23700_23733[(2)] = inst_23690);

(statearr_23700_23733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (13))){
var inst_23683 = cljs.core.async.close_BANG_.call(null,out);
var state_23694__$1 = state_23694;
var statearr_23701_23734 = state_23694__$1;
(statearr_23701_23734[(2)] = inst_23683);

(statearr_23701_23734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (6))){
var state_23694__$1 = state_23694;
var statearr_23702_23735 = state_23694__$1;
(statearr_23702_23735[(2)] = null);

(statearr_23702_23735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (3))){
var inst_23692 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23694__$1,inst_23692);
} else {
if((state_val_23695 === (12))){
var inst_23680 = (state_23694[(8)]);
var inst_23680__$1 = (state_23694[(2)]);
var inst_23681 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23680__$1);
var state_23694__$1 = (function (){var statearr_23703 = state_23694;
(statearr_23703[(8)] = inst_23680__$1);

return statearr_23703;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23704_23736 = state_23694__$1;
(statearr_23704_23736[(1)] = (13));

} else {
var statearr_23705_23737 = state_23694__$1;
(statearr_23705_23737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (2))){
var inst_23657 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23658 = (0);
var state_23694__$1 = (function (){var statearr_23706 = state_23694;
(statearr_23706[(7)] = inst_23658);

(statearr_23706[(9)] = inst_23657);

return statearr_23706;
})();
var statearr_23707_23738 = state_23694__$1;
(statearr_23707_23738[(2)] = null);

(statearr_23707_23738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (11))){
var inst_23658 = (state_23694[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23694,(10),Object,null,(9));
var inst_23667 = chs__$1.call(null,inst_23658);
var inst_23668 = done.call(null,inst_23658);
var inst_23669 = cljs.core.async.take_BANG_.call(null,inst_23667,inst_23668);
var state_23694__$1 = state_23694;
var statearr_23708_23739 = state_23694__$1;
(statearr_23708_23739[(2)] = inst_23669);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (9))){
var inst_23658 = (state_23694[(7)]);
var inst_23671 = (state_23694[(2)]);
var inst_23672 = (inst_23658 + (1));
var inst_23658__$1 = inst_23672;
var state_23694__$1 = (function (){var statearr_23709 = state_23694;
(statearr_23709[(7)] = inst_23658__$1);

(statearr_23709[(10)] = inst_23671);

return statearr_23709;
})();
var statearr_23710_23740 = state_23694__$1;
(statearr_23710_23740[(2)] = null);

(statearr_23710_23740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (5))){
var inst_23678 = (state_23694[(2)]);
var state_23694__$1 = (function (){var statearr_23711 = state_23694;
(statearr_23711[(11)] = inst_23678);

return statearr_23711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23694__$1,(12),dchan);
} else {
if((state_val_23695 === (14))){
var inst_23680 = (state_23694[(8)]);
var inst_23685 = cljs.core.apply.call(null,f,inst_23680);
var state_23694__$1 = state_23694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23694__$1,(16),out,inst_23685);
} else {
if((state_val_23695 === (16))){
var inst_23687 = (state_23694[(2)]);
var state_23694__$1 = (function (){var statearr_23712 = state_23694;
(statearr_23712[(12)] = inst_23687);

return statearr_23712;
})();
var statearr_23713_23741 = state_23694__$1;
(statearr_23713_23741[(2)] = null);

(statearr_23713_23741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (10))){
var inst_23662 = (state_23694[(2)]);
var inst_23663 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23694__$1 = (function (){var statearr_23714 = state_23694;
(statearr_23714[(13)] = inst_23662);

return statearr_23714;
})();
var statearr_23715_23742 = state_23694__$1;
(statearr_23715_23742[(2)] = inst_23663);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23695 === (8))){
var inst_23676 = (state_23694[(2)]);
var state_23694__$1 = state_23694;
var statearr_23716_23743 = state_23694__$1;
(statearr_23716_23743[(2)] = inst_23676);

(statearr_23716_23743[(1)] = (5));


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
});})(c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21547__auto__,c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_23720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23720[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_23720[(1)] = (1));

return statearr_23720;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_23694){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23721){if((e23721 instanceof Object)){
var ex__21551__auto__ = e23721;
var statearr_23722_23744 = state_23694;
(statearr_23722_23744[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23745 = state_23694;
state_23694 = G__23745;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_23694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_23694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21661__auto__ = (function (){var statearr_23723 = f__21660__auto__.call(null);
(statearr_23723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23728);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23728,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23747 = [];
var len__12775__auto___23805 = arguments.length;
var i__12776__auto___23806 = (0);
while(true){
if((i__12776__auto___23806 < len__12775__auto___23805)){
args23747.push((arguments[i__12776__auto___23806]));

var G__23807 = (i__12776__auto___23806 + (1));
i__12776__auto___23806 = G__23807;
continue;
} else {
}
break;
}

var G__23749 = args23747.length;
switch (G__23749) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23747.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___23809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23809,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23809,out){
return (function (state_23781){
var state_val_23782 = (state_23781[(1)]);
if((state_val_23782 === (7))){
var inst_23761 = (state_23781[(7)]);
var inst_23760 = (state_23781[(8)]);
var inst_23760__$1 = (state_23781[(2)]);
var inst_23761__$1 = cljs.core.nth.call(null,inst_23760__$1,(0),null);
var inst_23762 = cljs.core.nth.call(null,inst_23760__$1,(1),null);
var inst_23763 = (inst_23761__$1 == null);
var state_23781__$1 = (function (){var statearr_23783 = state_23781;
(statearr_23783[(7)] = inst_23761__$1);

(statearr_23783[(9)] = inst_23762);

(statearr_23783[(8)] = inst_23760__$1);

return statearr_23783;
})();
if(cljs.core.truth_(inst_23763)){
var statearr_23784_23810 = state_23781__$1;
(statearr_23784_23810[(1)] = (8));

} else {
var statearr_23785_23811 = state_23781__$1;
(statearr_23785_23811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (1))){
var inst_23750 = cljs.core.vec.call(null,chs);
var inst_23751 = inst_23750;
var state_23781__$1 = (function (){var statearr_23786 = state_23781;
(statearr_23786[(10)] = inst_23751);

return statearr_23786;
})();
var statearr_23787_23812 = state_23781__$1;
(statearr_23787_23812[(2)] = null);

(statearr_23787_23812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (4))){
var inst_23751 = (state_23781[(10)]);
var state_23781__$1 = state_23781;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23781__$1,(7),inst_23751);
} else {
if((state_val_23782 === (6))){
var inst_23777 = (state_23781[(2)]);
var state_23781__$1 = state_23781;
var statearr_23788_23813 = state_23781__$1;
(statearr_23788_23813[(2)] = inst_23777);

(statearr_23788_23813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (3))){
var inst_23779 = (state_23781[(2)]);
var state_23781__$1 = state_23781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23781__$1,inst_23779);
} else {
if((state_val_23782 === (2))){
var inst_23751 = (state_23781[(10)]);
var inst_23753 = cljs.core.count.call(null,inst_23751);
var inst_23754 = (inst_23753 > (0));
var state_23781__$1 = state_23781;
if(cljs.core.truth_(inst_23754)){
var statearr_23790_23814 = state_23781__$1;
(statearr_23790_23814[(1)] = (4));

} else {
var statearr_23791_23815 = state_23781__$1;
(statearr_23791_23815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (11))){
var inst_23751 = (state_23781[(10)]);
var inst_23770 = (state_23781[(2)]);
var tmp23789 = inst_23751;
var inst_23751__$1 = tmp23789;
var state_23781__$1 = (function (){var statearr_23792 = state_23781;
(statearr_23792[(10)] = inst_23751__$1);

(statearr_23792[(11)] = inst_23770);

return statearr_23792;
})();
var statearr_23793_23816 = state_23781__$1;
(statearr_23793_23816[(2)] = null);

(statearr_23793_23816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (9))){
var inst_23761 = (state_23781[(7)]);
var state_23781__$1 = state_23781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23781__$1,(11),out,inst_23761);
} else {
if((state_val_23782 === (5))){
var inst_23775 = cljs.core.async.close_BANG_.call(null,out);
var state_23781__$1 = state_23781;
var statearr_23794_23817 = state_23781__$1;
(statearr_23794_23817[(2)] = inst_23775);

(statearr_23794_23817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (10))){
var inst_23773 = (state_23781[(2)]);
var state_23781__$1 = state_23781;
var statearr_23795_23818 = state_23781__$1;
(statearr_23795_23818[(2)] = inst_23773);

(statearr_23795_23818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23782 === (8))){
var inst_23761 = (state_23781[(7)]);
var inst_23751 = (state_23781[(10)]);
var inst_23762 = (state_23781[(9)]);
var inst_23760 = (state_23781[(8)]);
var inst_23765 = (function (){var cs = inst_23751;
var vec__23756 = inst_23760;
var v = inst_23761;
var c = inst_23762;
return ((function (cs,vec__23756,v,c,inst_23761,inst_23751,inst_23762,inst_23760,state_val_23782,c__21659__auto___23809,out){
return (function (p1__23746_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23746_SHARP_);
});
;})(cs,vec__23756,v,c,inst_23761,inst_23751,inst_23762,inst_23760,state_val_23782,c__21659__auto___23809,out))
})();
var inst_23766 = cljs.core.filterv.call(null,inst_23765,inst_23751);
var inst_23751__$1 = inst_23766;
var state_23781__$1 = (function (){var statearr_23796 = state_23781;
(statearr_23796[(10)] = inst_23751__$1);

return statearr_23796;
})();
var statearr_23797_23819 = state_23781__$1;
(statearr_23797_23819[(2)] = null);

(statearr_23797_23819[(1)] = (2));


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
});})(c__21659__auto___23809,out))
;
return ((function (switch__21547__auto__,c__21659__auto___23809,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_23801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23801[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_23801[(1)] = (1));

return statearr_23801;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_23781){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23802){if((e23802 instanceof Object)){
var ex__21551__auto__ = e23802;
var statearr_23803_23820 = state_23781;
(statearr_23803_23820[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23821 = state_23781;
state_23781 = G__23821;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_23781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_23781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23809,out))
})();
var state__21661__auto__ = (function (){var statearr_23804 = f__21660__auto__.call(null);
(statearr_23804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23809);

return statearr_23804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23809,out))
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
var args23822 = [];
var len__12775__auto___23871 = arguments.length;
var i__12776__auto___23872 = (0);
while(true){
if((i__12776__auto___23872 < len__12775__auto___23871)){
args23822.push((arguments[i__12776__auto___23872]));

var G__23873 = (i__12776__auto___23872 + (1));
i__12776__auto___23872 = G__23873;
continue;
} else {
}
break;
}

var G__23824 = args23822.length;
switch (G__23824) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23822.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___23875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23875,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23875,out){
return (function (state_23848){
var state_val_23849 = (state_23848[(1)]);
if((state_val_23849 === (7))){
var inst_23830 = (state_23848[(7)]);
var inst_23830__$1 = (state_23848[(2)]);
var inst_23831 = (inst_23830__$1 == null);
var inst_23832 = cljs.core.not.call(null,inst_23831);
var state_23848__$1 = (function (){var statearr_23850 = state_23848;
(statearr_23850[(7)] = inst_23830__$1);

return statearr_23850;
})();
if(inst_23832){
var statearr_23851_23876 = state_23848__$1;
(statearr_23851_23876[(1)] = (8));

} else {
var statearr_23852_23877 = state_23848__$1;
(statearr_23852_23877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (1))){
var inst_23825 = (0);
var state_23848__$1 = (function (){var statearr_23853 = state_23848;
(statearr_23853[(8)] = inst_23825);

return statearr_23853;
})();
var statearr_23854_23878 = state_23848__$1;
(statearr_23854_23878[(2)] = null);

(statearr_23854_23878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (4))){
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23848__$1,(7),ch);
} else {
if((state_val_23849 === (6))){
var inst_23843 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23855_23879 = state_23848__$1;
(statearr_23855_23879[(2)] = inst_23843);

(statearr_23855_23879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (3))){
var inst_23845 = (state_23848[(2)]);
var inst_23846 = cljs.core.async.close_BANG_.call(null,out);
var state_23848__$1 = (function (){var statearr_23856 = state_23848;
(statearr_23856[(9)] = inst_23845);

return statearr_23856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23848__$1,inst_23846);
} else {
if((state_val_23849 === (2))){
var inst_23825 = (state_23848[(8)]);
var inst_23827 = (inst_23825 < n);
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23827)){
var statearr_23857_23880 = state_23848__$1;
(statearr_23857_23880[(1)] = (4));

} else {
var statearr_23858_23881 = state_23848__$1;
(statearr_23858_23881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (11))){
var inst_23825 = (state_23848[(8)]);
var inst_23835 = (state_23848[(2)]);
var inst_23836 = (inst_23825 + (1));
var inst_23825__$1 = inst_23836;
var state_23848__$1 = (function (){var statearr_23859 = state_23848;
(statearr_23859[(8)] = inst_23825__$1);

(statearr_23859[(10)] = inst_23835);

return statearr_23859;
})();
var statearr_23860_23882 = state_23848__$1;
(statearr_23860_23882[(2)] = null);

(statearr_23860_23882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (9))){
var state_23848__$1 = state_23848;
var statearr_23861_23883 = state_23848__$1;
(statearr_23861_23883[(2)] = null);

(statearr_23861_23883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (5))){
var state_23848__$1 = state_23848;
var statearr_23862_23884 = state_23848__$1;
(statearr_23862_23884[(2)] = null);

(statearr_23862_23884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (10))){
var inst_23840 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23863_23885 = state_23848__$1;
(statearr_23863_23885[(2)] = inst_23840);

(statearr_23863_23885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23849 === (8))){
var inst_23830 = (state_23848[(7)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23848__$1,(11),out,inst_23830);
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
});})(c__21659__auto___23875,out))
;
return ((function (switch__21547__auto__,c__21659__auto___23875,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_23848){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__21551__auto__ = e23868;
var statearr_23869_23886 = state_23848;
(statearr_23869_23886[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23887 = state_23848;
state_23848 = G__23887;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23875,out))
})();
var state__21661__auto__ = (function (){var statearr_23870 = f__21660__auto__.call(null);
(statearr_23870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23875);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23875,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23895 = (function (map_LT_,f,ch,meta23896){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23896 = meta23896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23897,meta23896__$1){
var self__ = this;
var _23897__$1 = this;
return (new cljs.core.async.t_cljs$core$async23895(self__.map_LT_,self__.f,self__.ch,meta23896__$1));
});

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23897){
var self__ = this;
var _23897__$1 = this;
return self__.meta23896;
});

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23898 = (function (map_LT_,f,ch,meta23896,_,fn1,meta23899){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23896 = meta23896;
this._ = _;
this.fn1 = fn1;
this.meta23899 = meta23899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23900,meta23899__$1){
var self__ = this;
var _23900__$1 = this;
return (new cljs.core.async.t_cljs$core$async23898(self__.map_LT_,self__.f,self__.ch,self__.meta23896,self__._,self__.fn1,meta23899__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23900){
var self__ = this;
var _23900__$1 = this;
return self__.meta23899;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23888_SHARP_){
return f1.call(null,(((p1__23888_SHARP_ == null))?null:self__.f.call(null,p1__23888_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23896","meta23896",-1439837498,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23895","cljs.core.async/t_cljs$core$async23895",1448901755,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23899","meta23899",-1827306226,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23898";

cljs.core.async.t_cljs$core$async23898.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23898");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23898 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23898(map_LT___$1,f__$1,ch__$1,meta23896__$1,___$2,fn1__$1,meta23899){
return (new cljs.core.async.t_cljs$core$async23898(map_LT___$1,f__$1,ch__$1,meta23896__$1,___$2,fn1__$1,meta23899));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23898(self__.map_LT_,self__.f,self__.ch,self__.meta23896,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23896","meta23896",-1439837498,null)], null);
});

cljs.core.async.t_cljs$core$async23895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23895";

cljs.core.async.t_cljs$core$async23895.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23895");
});

cljs.core.async.__GT_t_cljs$core$async23895 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23895(map_LT___$1,f__$1,ch__$1,meta23896){
return (new cljs.core.async.t_cljs$core$async23895(map_LT___$1,f__$1,ch__$1,meta23896));
});

}

return (new cljs.core.async.t_cljs$core$async23895(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23904 = (function (map_GT_,f,ch,meta23905){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23905 = meta23905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23906,meta23905__$1){
var self__ = this;
var _23906__$1 = this;
return (new cljs.core.async.t_cljs$core$async23904(self__.map_GT_,self__.f,self__.ch,meta23905__$1));
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23906){
var self__ = this;
var _23906__$1 = this;
return self__.meta23905;
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23905","meta23905",64101953,null)], null);
});

cljs.core.async.t_cljs$core$async23904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23904";

cljs.core.async.t_cljs$core$async23904.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23904");
});

cljs.core.async.__GT_t_cljs$core$async23904 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23904(map_GT___$1,f__$1,ch__$1,meta23905){
return (new cljs.core.async.t_cljs$core$async23904(map_GT___$1,f__$1,ch__$1,meta23905));
});

}

return (new cljs.core.async.t_cljs$core$async23904(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23910 = (function (filter_GT_,p,ch,meta23911){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23911 = meta23911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23912,meta23911__$1){
var self__ = this;
var _23912__$1 = this;
return (new cljs.core.async.t_cljs$core$async23910(self__.filter_GT_,self__.p,self__.ch,meta23911__$1));
});

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23912){
var self__ = this;
var _23912__$1 = this;
return self__.meta23911;
});

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23911","meta23911",1287777610,null)], null);
});

cljs.core.async.t_cljs$core$async23910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23910";

cljs.core.async.t_cljs$core$async23910.cljs$lang$ctorPrWriter = (function (this__12306__auto__,writer__12307__auto__,opt__12308__auto__){
return cljs.core._write.call(null,writer__12307__auto__,"cljs.core.async/t_cljs$core$async23910");
});

cljs.core.async.__GT_t_cljs$core$async23910 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23910(filter_GT___$1,p__$1,ch__$1,meta23911){
return (new cljs.core.async.t_cljs$core$async23910(filter_GT___$1,p__$1,ch__$1,meta23911));
});

}

return (new cljs.core.async.t_cljs$core$async23910(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23913 = [];
var len__12775__auto___23957 = arguments.length;
var i__12776__auto___23958 = (0);
while(true){
if((i__12776__auto___23958 < len__12775__auto___23957)){
args23913.push((arguments[i__12776__auto___23958]));

var G__23959 = (i__12776__auto___23958 + (1));
i__12776__auto___23958 = G__23959;
continue;
} else {
}
break;
}

var G__23915 = args23913.length;
switch (G__23915) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23913.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___23961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___23961,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___23961,out){
return (function (state_23936){
var state_val_23937 = (state_23936[(1)]);
if((state_val_23937 === (7))){
var inst_23932 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23938_23962 = state_23936__$1;
(statearr_23938_23962[(2)] = inst_23932);

(statearr_23938_23962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (1))){
var state_23936__$1 = state_23936;
var statearr_23939_23963 = state_23936__$1;
(statearr_23939_23963[(2)] = null);

(statearr_23939_23963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (4))){
var inst_23918 = (state_23936[(7)]);
var inst_23918__$1 = (state_23936[(2)]);
var inst_23919 = (inst_23918__$1 == null);
var state_23936__$1 = (function (){var statearr_23940 = state_23936;
(statearr_23940[(7)] = inst_23918__$1);

return statearr_23940;
})();
if(cljs.core.truth_(inst_23919)){
var statearr_23941_23964 = state_23936__$1;
(statearr_23941_23964[(1)] = (5));

} else {
var statearr_23942_23965 = state_23936__$1;
(statearr_23942_23965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (6))){
var inst_23918 = (state_23936[(7)]);
var inst_23923 = p.call(null,inst_23918);
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23923)){
var statearr_23943_23966 = state_23936__$1;
(statearr_23943_23966[(1)] = (8));

} else {
var statearr_23944_23967 = state_23936__$1;
(statearr_23944_23967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (3))){
var inst_23934 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23936__$1,inst_23934);
} else {
if((state_val_23937 === (2))){
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23936__$1,(4),ch);
} else {
if((state_val_23937 === (11))){
var inst_23926 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23945_23968 = state_23936__$1;
(statearr_23945_23968[(2)] = inst_23926);

(statearr_23945_23968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (9))){
var state_23936__$1 = state_23936;
var statearr_23946_23969 = state_23936__$1;
(statearr_23946_23969[(2)] = null);

(statearr_23946_23969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (5))){
var inst_23921 = cljs.core.async.close_BANG_.call(null,out);
var state_23936__$1 = state_23936;
var statearr_23947_23970 = state_23936__$1;
(statearr_23947_23970[(2)] = inst_23921);

(statearr_23947_23970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (10))){
var inst_23929 = (state_23936[(2)]);
var state_23936__$1 = (function (){var statearr_23948 = state_23936;
(statearr_23948[(8)] = inst_23929);

return statearr_23948;
})();
var statearr_23949_23971 = state_23936__$1;
(statearr_23949_23971[(2)] = null);

(statearr_23949_23971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (8))){
var inst_23918 = (state_23936[(7)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23936__$1,(11),out,inst_23918);
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
});})(c__21659__auto___23961,out))
;
return ((function (switch__21547__auto__,c__21659__auto___23961,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_23953 = [null,null,null,null,null,null,null,null,null];
(statearr_23953[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_23953[(1)] = (1));

return statearr_23953;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_23936){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_23936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object)){
var ex__21551__auto__ = e23954;
var statearr_23955_23972 = state_23936;
(statearr_23955_23972[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23973 = state_23936;
state_23936 = G__23973;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_23936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_23936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___23961,out))
})();
var state__21661__auto__ = (function (){var statearr_23956 = f__21660__auto__.call(null);
(statearr_23956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___23961);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___23961,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23974 = [];
var len__12775__auto___23977 = arguments.length;
var i__12776__auto___23978 = (0);
while(true){
if((i__12776__auto___23978 < len__12775__auto___23977)){
args23974.push((arguments[i__12776__auto___23978]));

var G__23979 = (i__12776__auto___23978 + (1));
i__12776__auto___23978 = G__23979;
continue;
} else {
}
break;
}

var G__23976 = args23974.length;
switch (G__23976) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23974.length)].join('')));

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
var c__21659__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto__){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto__){
return (function (state_24146){
var state_val_24147 = (state_24146[(1)]);
if((state_val_24147 === (7))){
var inst_24142 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24148_24189 = state_24146__$1;
(statearr_24148_24189[(2)] = inst_24142);

(statearr_24148_24189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (20))){
var inst_24112 = (state_24146[(7)]);
var inst_24123 = (state_24146[(2)]);
var inst_24124 = cljs.core.next.call(null,inst_24112);
var inst_24098 = inst_24124;
var inst_24099 = null;
var inst_24100 = (0);
var inst_24101 = (0);
var state_24146__$1 = (function (){var statearr_24149 = state_24146;
(statearr_24149[(8)] = inst_24101);

(statearr_24149[(9)] = inst_24099);

(statearr_24149[(10)] = inst_24123);

(statearr_24149[(11)] = inst_24098);

(statearr_24149[(12)] = inst_24100);

return statearr_24149;
})();
var statearr_24150_24190 = state_24146__$1;
(statearr_24150_24190[(2)] = null);

(statearr_24150_24190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (1))){
var state_24146__$1 = state_24146;
var statearr_24151_24191 = state_24146__$1;
(statearr_24151_24191[(2)] = null);

(statearr_24151_24191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (4))){
var inst_24087 = (state_24146[(13)]);
var inst_24087__$1 = (state_24146[(2)]);
var inst_24088 = (inst_24087__$1 == null);
var state_24146__$1 = (function (){var statearr_24152 = state_24146;
(statearr_24152[(13)] = inst_24087__$1);

return statearr_24152;
})();
if(cljs.core.truth_(inst_24088)){
var statearr_24153_24192 = state_24146__$1;
(statearr_24153_24192[(1)] = (5));

} else {
var statearr_24154_24193 = state_24146__$1;
(statearr_24154_24193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (15))){
var state_24146__$1 = state_24146;
var statearr_24158_24194 = state_24146__$1;
(statearr_24158_24194[(2)] = null);

(statearr_24158_24194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (21))){
var state_24146__$1 = state_24146;
var statearr_24159_24195 = state_24146__$1;
(statearr_24159_24195[(2)] = null);

(statearr_24159_24195[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (13))){
var inst_24101 = (state_24146[(8)]);
var inst_24099 = (state_24146[(9)]);
var inst_24098 = (state_24146[(11)]);
var inst_24100 = (state_24146[(12)]);
var inst_24108 = (state_24146[(2)]);
var inst_24109 = (inst_24101 + (1));
var tmp24155 = inst_24099;
var tmp24156 = inst_24098;
var tmp24157 = inst_24100;
var inst_24098__$1 = tmp24156;
var inst_24099__$1 = tmp24155;
var inst_24100__$1 = tmp24157;
var inst_24101__$1 = inst_24109;
var state_24146__$1 = (function (){var statearr_24160 = state_24146;
(statearr_24160[(8)] = inst_24101__$1);

(statearr_24160[(14)] = inst_24108);

(statearr_24160[(9)] = inst_24099__$1);

(statearr_24160[(11)] = inst_24098__$1);

(statearr_24160[(12)] = inst_24100__$1);

return statearr_24160;
})();
var statearr_24161_24196 = state_24146__$1;
(statearr_24161_24196[(2)] = null);

(statearr_24161_24196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (22))){
var state_24146__$1 = state_24146;
var statearr_24162_24197 = state_24146__$1;
(statearr_24162_24197[(2)] = null);

(statearr_24162_24197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (6))){
var inst_24087 = (state_24146[(13)]);
var inst_24096 = f.call(null,inst_24087);
var inst_24097 = cljs.core.seq.call(null,inst_24096);
var inst_24098 = inst_24097;
var inst_24099 = null;
var inst_24100 = (0);
var inst_24101 = (0);
var state_24146__$1 = (function (){var statearr_24163 = state_24146;
(statearr_24163[(8)] = inst_24101);

(statearr_24163[(9)] = inst_24099);

(statearr_24163[(11)] = inst_24098);

(statearr_24163[(12)] = inst_24100);

return statearr_24163;
})();
var statearr_24164_24198 = state_24146__$1;
(statearr_24164_24198[(2)] = null);

(statearr_24164_24198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (17))){
var inst_24112 = (state_24146[(7)]);
var inst_24116 = cljs.core.chunk_first.call(null,inst_24112);
var inst_24117 = cljs.core.chunk_rest.call(null,inst_24112);
var inst_24118 = cljs.core.count.call(null,inst_24116);
var inst_24098 = inst_24117;
var inst_24099 = inst_24116;
var inst_24100 = inst_24118;
var inst_24101 = (0);
var state_24146__$1 = (function (){var statearr_24165 = state_24146;
(statearr_24165[(8)] = inst_24101);

(statearr_24165[(9)] = inst_24099);

(statearr_24165[(11)] = inst_24098);

(statearr_24165[(12)] = inst_24100);

return statearr_24165;
})();
var statearr_24166_24199 = state_24146__$1;
(statearr_24166_24199[(2)] = null);

(statearr_24166_24199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (3))){
var inst_24144 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24146__$1,inst_24144);
} else {
if((state_val_24147 === (12))){
var inst_24132 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24167_24200 = state_24146__$1;
(statearr_24167_24200[(2)] = inst_24132);

(statearr_24167_24200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (2))){
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24146__$1,(4),in$);
} else {
if((state_val_24147 === (23))){
var inst_24140 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24168_24201 = state_24146__$1;
(statearr_24168_24201[(2)] = inst_24140);

(statearr_24168_24201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (19))){
var inst_24127 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24169_24202 = state_24146__$1;
(statearr_24169_24202[(2)] = inst_24127);

(statearr_24169_24202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (11))){
var inst_24098 = (state_24146[(11)]);
var inst_24112 = (state_24146[(7)]);
var inst_24112__$1 = cljs.core.seq.call(null,inst_24098);
var state_24146__$1 = (function (){var statearr_24170 = state_24146;
(statearr_24170[(7)] = inst_24112__$1);

return statearr_24170;
})();
if(inst_24112__$1){
var statearr_24171_24203 = state_24146__$1;
(statearr_24171_24203[(1)] = (14));

} else {
var statearr_24172_24204 = state_24146__$1;
(statearr_24172_24204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (9))){
var inst_24134 = (state_24146[(2)]);
var inst_24135 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24146__$1 = (function (){var statearr_24173 = state_24146;
(statearr_24173[(15)] = inst_24134);

return statearr_24173;
})();
if(cljs.core.truth_(inst_24135)){
var statearr_24174_24205 = state_24146__$1;
(statearr_24174_24205[(1)] = (21));

} else {
var statearr_24175_24206 = state_24146__$1;
(statearr_24175_24206[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (5))){
var inst_24090 = cljs.core.async.close_BANG_.call(null,out);
var state_24146__$1 = state_24146;
var statearr_24176_24207 = state_24146__$1;
(statearr_24176_24207[(2)] = inst_24090);

(statearr_24176_24207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (14))){
var inst_24112 = (state_24146[(7)]);
var inst_24114 = cljs.core.chunked_seq_QMARK_.call(null,inst_24112);
var state_24146__$1 = state_24146;
if(inst_24114){
var statearr_24177_24208 = state_24146__$1;
(statearr_24177_24208[(1)] = (17));

} else {
var statearr_24178_24209 = state_24146__$1;
(statearr_24178_24209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (16))){
var inst_24130 = (state_24146[(2)]);
var state_24146__$1 = state_24146;
var statearr_24179_24210 = state_24146__$1;
(statearr_24179_24210[(2)] = inst_24130);

(statearr_24179_24210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24147 === (10))){
var inst_24101 = (state_24146[(8)]);
var inst_24099 = (state_24146[(9)]);
var inst_24106 = cljs.core._nth.call(null,inst_24099,inst_24101);
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24146__$1,(13),out,inst_24106);
} else {
if((state_val_24147 === (18))){
var inst_24112 = (state_24146[(7)]);
var inst_24121 = cljs.core.first.call(null,inst_24112);
var state_24146__$1 = state_24146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24146__$1,(20),out,inst_24121);
} else {
if((state_val_24147 === (8))){
var inst_24101 = (state_24146[(8)]);
var inst_24100 = (state_24146[(12)]);
var inst_24103 = (inst_24101 < inst_24100);
var inst_24104 = inst_24103;
var state_24146__$1 = state_24146;
if(cljs.core.truth_(inst_24104)){
var statearr_24180_24211 = state_24146__$1;
(statearr_24180_24211[(1)] = (10));

} else {
var statearr_24181_24212 = state_24146__$1;
(statearr_24181_24212[(1)] = (11));

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
});})(c__21659__auto__))
;
return ((function (switch__21547__auto__,c__21659__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____0 = (function (){
var statearr_24185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24185[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__);

(statearr_24185[(1)] = (1));

return statearr_24185;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____1 = (function (state_24146){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_24146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e24186){if((e24186 instanceof Object)){
var ex__21551__auto__ = e24186;
var statearr_24187_24213 = state_24146;
(statearr_24187_24213[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_24146;
state_24146 = G__24214;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__ = function(state_24146){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____1.call(this,state_24146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21548__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto__))
})();
var state__21661__auto__ = (function (){var statearr_24188 = f__21660__auto__.call(null);
(statearr_24188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto__);

return statearr_24188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto__))
);

return c__21659__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24215 = [];
var len__12775__auto___24218 = arguments.length;
var i__12776__auto___24219 = (0);
while(true){
if((i__12776__auto___24219 < len__12775__auto___24218)){
args24215.push((arguments[i__12776__auto___24219]));

var G__24220 = (i__12776__auto___24219 + (1));
i__12776__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

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
var args24222 = [];
var len__12775__auto___24225 = arguments.length;
var i__12776__auto___24226 = (0);
while(true){
if((i__12776__auto___24226 < len__12775__auto___24225)){
args24222.push((arguments[i__12776__auto___24226]));

var G__24227 = (i__12776__auto___24226 + (1));
i__12776__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

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
var args24229 = [];
var len__12775__auto___24280 = arguments.length;
var i__12776__auto___24281 = (0);
while(true){
if((i__12776__auto___24281 < len__12775__auto___24280)){
args24229.push((arguments[i__12776__auto___24281]));

var G__24282 = (i__12776__auto___24281 + (1));
i__12776__auto___24281 = G__24282;
continue;
} else {
}
break;
}

var G__24231 = args24229.length;
switch (G__24231) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24229.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___24284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___24284,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___24284,out){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24250 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24285 = state_24255__$1;
(statearr_24257_24285[(2)] = inst_24250);

(statearr_24257_24285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var inst_24232 = null;
var state_24255__$1 = (function (){var statearr_24258 = state_24255;
(statearr_24258[(7)] = inst_24232);

return statearr_24258;
})();
var statearr_24259_24286 = state_24255__$1;
(statearr_24259_24286[(2)] = null);

(statearr_24259_24286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24235 = (state_24255[(8)]);
var inst_24235__$1 = (state_24255[(2)]);
var inst_24236 = (inst_24235__$1 == null);
var inst_24237 = cljs.core.not.call(null,inst_24236);
var state_24255__$1 = (function (){var statearr_24260 = state_24255;
(statearr_24260[(8)] = inst_24235__$1);

return statearr_24260;
})();
if(inst_24237){
var statearr_24261_24287 = state_24255__$1;
(statearr_24261_24287[(1)] = (5));

} else {
var statearr_24262_24288 = state_24255__$1;
(statearr_24262_24288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var state_24255__$1 = state_24255;
var statearr_24263_24289 = state_24255__$1;
(statearr_24263_24289[(2)] = null);

(statearr_24263_24289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (3))){
var inst_24252 = (state_24255[(2)]);
var inst_24253 = cljs.core.async.close_BANG_.call(null,out);
var state_24255__$1 = (function (){var statearr_24264 = state_24255;
(statearr_24264[(9)] = inst_24252);

return statearr_24264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),ch);
} else {
if((state_val_24256 === (11))){
var inst_24235 = (state_24255[(8)]);
var inst_24244 = (state_24255[(2)]);
var inst_24232 = inst_24235;
var state_24255__$1 = (function (){var statearr_24265 = state_24255;
(statearr_24265[(7)] = inst_24232);

(statearr_24265[(10)] = inst_24244);

return statearr_24265;
})();
var statearr_24266_24290 = state_24255__$1;
(statearr_24266_24290[(2)] = null);

(statearr_24266_24290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (9))){
var inst_24235 = (state_24255[(8)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(11),out,inst_24235);
} else {
if((state_val_24256 === (5))){
var inst_24235 = (state_24255[(8)]);
var inst_24232 = (state_24255[(7)]);
var inst_24239 = cljs.core._EQ_.call(null,inst_24235,inst_24232);
var state_24255__$1 = state_24255;
if(inst_24239){
var statearr_24268_24291 = state_24255__$1;
(statearr_24268_24291[(1)] = (8));

} else {
var statearr_24269_24292 = state_24255__$1;
(statearr_24269_24292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (10))){
var inst_24247 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24270_24293 = state_24255__$1;
(statearr_24270_24293[(2)] = inst_24247);

(statearr_24270_24293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (8))){
var inst_24232 = (state_24255[(7)]);
var tmp24267 = inst_24232;
var inst_24232__$1 = tmp24267;
var state_24255__$1 = (function (){var statearr_24271 = state_24255;
(statearr_24271[(7)] = inst_24232__$1);

return statearr_24271;
})();
var statearr_24272_24294 = state_24255__$1;
(statearr_24272_24294[(2)] = null);

(statearr_24272_24294[(1)] = (2));


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
});})(c__21659__auto___24284,out))
;
return ((function (switch__21547__auto__,c__21659__auto___24284,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_24276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24276[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_24276[(1)] = (1));

return statearr_24276;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_24255){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e24277){if((e24277 instanceof Object)){
var ex__21551__auto__ = e24277;
var statearr_24278_24295 = state_24255;
(statearr_24278_24295[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24296 = state_24255;
state_24255 = G__24296;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___24284,out))
})();
var state__21661__auto__ = (function (){var statearr_24279 = f__21660__auto__.call(null);
(statearr_24279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___24284);

return statearr_24279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___24284,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24297 = [];
var len__12775__auto___24367 = arguments.length;
var i__12776__auto___24368 = (0);
while(true){
if((i__12776__auto___24368 < len__12775__auto___24367)){
args24297.push((arguments[i__12776__auto___24368]));

var G__24369 = (i__12776__auto___24368 + (1));
i__12776__auto___24368 = G__24369;
continue;
} else {
}
break;
}

var G__24299 = args24297.length;
switch (G__24299) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24297.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___24371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___24371,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___24371,out){
return (function (state_24337){
var state_val_24338 = (state_24337[(1)]);
if((state_val_24338 === (7))){
var inst_24333 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24339_24372 = state_24337__$1;
(statearr_24339_24372[(2)] = inst_24333);

(statearr_24339_24372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (1))){
var inst_24300 = (new Array(n));
var inst_24301 = inst_24300;
var inst_24302 = (0);
var state_24337__$1 = (function (){var statearr_24340 = state_24337;
(statearr_24340[(7)] = inst_24301);

(statearr_24340[(8)] = inst_24302);

return statearr_24340;
})();
var statearr_24341_24373 = state_24337__$1;
(statearr_24341_24373[(2)] = null);

(statearr_24341_24373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (4))){
var inst_24305 = (state_24337[(9)]);
var inst_24305__$1 = (state_24337[(2)]);
var inst_24306 = (inst_24305__$1 == null);
var inst_24307 = cljs.core.not.call(null,inst_24306);
var state_24337__$1 = (function (){var statearr_24342 = state_24337;
(statearr_24342[(9)] = inst_24305__$1);

return statearr_24342;
})();
if(inst_24307){
var statearr_24343_24374 = state_24337__$1;
(statearr_24343_24374[(1)] = (5));

} else {
var statearr_24344_24375 = state_24337__$1;
(statearr_24344_24375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (15))){
var inst_24327 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24345_24376 = state_24337__$1;
(statearr_24345_24376[(2)] = inst_24327);

(statearr_24345_24376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (13))){
var state_24337__$1 = state_24337;
var statearr_24346_24377 = state_24337__$1;
(statearr_24346_24377[(2)] = null);

(statearr_24346_24377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (6))){
var inst_24302 = (state_24337[(8)]);
var inst_24323 = (inst_24302 > (0));
var state_24337__$1 = state_24337;
if(cljs.core.truth_(inst_24323)){
var statearr_24347_24378 = state_24337__$1;
(statearr_24347_24378[(1)] = (12));

} else {
var statearr_24348_24379 = state_24337__$1;
(statearr_24348_24379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (3))){
var inst_24335 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24337__$1,inst_24335);
} else {
if((state_val_24338 === (12))){
var inst_24301 = (state_24337[(7)]);
var inst_24325 = cljs.core.vec.call(null,inst_24301);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24337__$1,(15),out,inst_24325);
} else {
if((state_val_24338 === (2))){
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24337__$1,(4),ch);
} else {
if((state_val_24338 === (11))){
var inst_24317 = (state_24337[(2)]);
var inst_24318 = (new Array(n));
var inst_24301 = inst_24318;
var inst_24302 = (0);
var state_24337__$1 = (function (){var statearr_24349 = state_24337;
(statearr_24349[(7)] = inst_24301);

(statearr_24349[(8)] = inst_24302);

(statearr_24349[(10)] = inst_24317);

return statearr_24349;
})();
var statearr_24350_24380 = state_24337__$1;
(statearr_24350_24380[(2)] = null);

(statearr_24350_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (9))){
var inst_24301 = (state_24337[(7)]);
var inst_24315 = cljs.core.vec.call(null,inst_24301);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24337__$1,(11),out,inst_24315);
} else {
if((state_val_24338 === (5))){
var inst_24301 = (state_24337[(7)]);
var inst_24305 = (state_24337[(9)]);
var inst_24302 = (state_24337[(8)]);
var inst_24310 = (state_24337[(11)]);
var inst_24309 = (inst_24301[inst_24302] = inst_24305);
var inst_24310__$1 = (inst_24302 + (1));
var inst_24311 = (inst_24310__$1 < n);
var state_24337__$1 = (function (){var statearr_24351 = state_24337;
(statearr_24351[(12)] = inst_24309);

(statearr_24351[(11)] = inst_24310__$1);

return statearr_24351;
})();
if(cljs.core.truth_(inst_24311)){
var statearr_24352_24381 = state_24337__$1;
(statearr_24352_24381[(1)] = (8));

} else {
var statearr_24353_24382 = state_24337__$1;
(statearr_24353_24382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (14))){
var inst_24330 = (state_24337[(2)]);
var inst_24331 = cljs.core.async.close_BANG_.call(null,out);
var state_24337__$1 = (function (){var statearr_24355 = state_24337;
(statearr_24355[(13)] = inst_24330);

return statearr_24355;
})();
var statearr_24356_24383 = state_24337__$1;
(statearr_24356_24383[(2)] = inst_24331);

(statearr_24356_24383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (10))){
var inst_24321 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24357_24384 = state_24337__$1;
(statearr_24357_24384[(2)] = inst_24321);

(statearr_24357_24384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (8))){
var inst_24301 = (state_24337[(7)]);
var inst_24310 = (state_24337[(11)]);
var tmp24354 = inst_24301;
var inst_24301__$1 = tmp24354;
var inst_24302 = inst_24310;
var state_24337__$1 = (function (){var statearr_24358 = state_24337;
(statearr_24358[(7)] = inst_24301__$1);

(statearr_24358[(8)] = inst_24302);

return statearr_24358;
})();
var statearr_24359_24385 = state_24337__$1;
(statearr_24359_24385[(2)] = null);

(statearr_24359_24385[(1)] = (2));


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
});})(c__21659__auto___24371,out))
;
return ((function (switch__21547__auto__,c__21659__auto___24371,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_24363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24363[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_24363[(1)] = (1));

return statearr_24363;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_24337){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_24337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e24364){if((e24364 instanceof Object)){
var ex__21551__auto__ = e24364;
var statearr_24365_24386 = state_24337;
(statearr_24365_24386[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24387 = state_24337;
state_24337 = G__24387;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___24371,out))
})();
var state__21661__auto__ = (function (){var statearr_24366 = f__21660__auto__.call(null);
(statearr_24366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___24371);

return statearr_24366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___24371,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24388 = [];
var len__12775__auto___24462 = arguments.length;
var i__12776__auto___24463 = (0);
while(true){
if((i__12776__auto___24463 < len__12775__auto___24462)){
args24388.push((arguments[i__12776__auto___24463]));

var G__24464 = (i__12776__auto___24463 + (1));
i__12776__auto___24463 = G__24464;
continue;
} else {
}
break;
}

var G__24390 = args24388.length;
switch (G__24390) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24388.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21659__auto___24466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21659__auto___24466,out){
return (function (){
var f__21660__auto__ = (function (){var switch__21547__auto__ = ((function (c__21659__auto___24466,out){
return (function (state_24432){
var state_val_24433 = (state_24432[(1)]);
if((state_val_24433 === (7))){
var inst_24428 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24434_24467 = state_24432__$1;
(statearr_24434_24467[(2)] = inst_24428);

(statearr_24434_24467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (1))){
var inst_24391 = [];
var inst_24392 = inst_24391;
var inst_24393 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24432__$1 = (function (){var statearr_24435 = state_24432;
(statearr_24435[(7)] = inst_24392);

(statearr_24435[(8)] = inst_24393);

return statearr_24435;
})();
var statearr_24436_24468 = state_24432__$1;
(statearr_24436_24468[(2)] = null);

(statearr_24436_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (4))){
var inst_24396 = (state_24432[(9)]);
var inst_24396__$1 = (state_24432[(2)]);
var inst_24397 = (inst_24396__$1 == null);
var inst_24398 = cljs.core.not.call(null,inst_24397);
var state_24432__$1 = (function (){var statearr_24437 = state_24432;
(statearr_24437[(9)] = inst_24396__$1);

return statearr_24437;
})();
if(inst_24398){
var statearr_24438_24469 = state_24432__$1;
(statearr_24438_24469[(1)] = (5));

} else {
var statearr_24439_24470 = state_24432__$1;
(statearr_24439_24470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (15))){
var inst_24422 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24440_24471 = state_24432__$1;
(statearr_24440_24471[(2)] = inst_24422);

(statearr_24440_24471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (13))){
var state_24432__$1 = state_24432;
var statearr_24441_24472 = state_24432__$1;
(statearr_24441_24472[(2)] = null);

(statearr_24441_24472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (6))){
var inst_24392 = (state_24432[(7)]);
var inst_24417 = inst_24392.length;
var inst_24418 = (inst_24417 > (0));
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24418)){
var statearr_24442_24473 = state_24432__$1;
(statearr_24442_24473[(1)] = (12));

} else {
var statearr_24443_24474 = state_24432__$1;
(statearr_24443_24474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (3))){
var inst_24430 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24432__$1,inst_24430);
} else {
if((state_val_24433 === (12))){
var inst_24392 = (state_24432[(7)]);
var inst_24420 = cljs.core.vec.call(null,inst_24392);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24432__$1,(15),out,inst_24420);
} else {
if((state_val_24433 === (2))){
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24432__$1,(4),ch);
} else {
if((state_val_24433 === (11))){
var inst_24396 = (state_24432[(9)]);
var inst_24400 = (state_24432[(10)]);
var inst_24410 = (state_24432[(2)]);
var inst_24411 = [];
var inst_24412 = inst_24411.push(inst_24396);
var inst_24392 = inst_24411;
var inst_24393 = inst_24400;
var state_24432__$1 = (function (){var statearr_24444 = state_24432;
(statearr_24444[(7)] = inst_24392);

(statearr_24444[(11)] = inst_24410);

(statearr_24444[(8)] = inst_24393);

(statearr_24444[(12)] = inst_24412);

return statearr_24444;
})();
var statearr_24445_24475 = state_24432__$1;
(statearr_24445_24475[(2)] = null);

(statearr_24445_24475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (9))){
var inst_24392 = (state_24432[(7)]);
var inst_24408 = cljs.core.vec.call(null,inst_24392);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24432__$1,(11),out,inst_24408);
} else {
if((state_val_24433 === (5))){
var inst_24396 = (state_24432[(9)]);
var inst_24393 = (state_24432[(8)]);
var inst_24400 = (state_24432[(10)]);
var inst_24400__$1 = f.call(null,inst_24396);
var inst_24401 = cljs.core._EQ_.call(null,inst_24400__$1,inst_24393);
var inst_24402 = cljs.core.keyword_identical_QMARK_.call(null,inst_24393,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24403 = (inst_24401) || (inst_24402);
var state_24432__$1 = (function (){var statearr_24446 = state_24432;
(statearr_24446[(10)] = inst_24400__$1);

return statearr_24446;
})();
if(cljs.core.truth_(inst_24403)){
var statearr_24447_24476 = state_24432__$1;
(statearr_24447_24476[(1)] = (8));

} else {
var statearr_24448_24477 = state_24432__$1;
(statearr_24448_24477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (14))){
var inst_24425 = (state_24432[(2)]);
var inst_24426 = cljs.core.async.close_BANG_.call(null,out);
var state_24432__$1 = (function (){var statearr_24450 = state_24432;
(statearr_24450[(13)] = inst_24425);

return statearr_24450;
})();
var statearr_24451_24478 = state_24432__$1;
(statearr_24451_24478[(2)] = inst_24426);

(statearr_24451_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (10))){
var inst_24415 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24452_24479 = state_24432__$1;
(statearr_24452_24479[(2)] = inst_24415);

(statearr_24452_24479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (8))){
var inst_24392 = (state_24432[(7)]);
var inst_24396 = (state_24432[(9)]);
var inst_24400 = (state_24432[(10)]);
var inst_24405 = inst_24392.push(inst_24396);
var tmp24449 = inst_24392;
var inst_24392__$1 = tmp24449;
var inst_24393 = inst_24400;
var state_24432__$1 = (function (){var statearr_24453 = state_24432;
(statearr_24453[(7)] = inst_24392__$1);

(statearr_24453[(8)] = inst_24393);

(statearr_24453[(14)] = inst_24405);

return statearr_24453;
})();
var statearr_24454_24480 = state_24432__$1;
(statearr_24454_24480[(2)] = null);

(statearr_24454_24480[(1)] = (2));


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
});})(c__21659__auto___24466,out))
;
return ((function (switch__21547__auto__,c__21659__auto___24466,out){
return (function() {
var cljs$core$async$state_machine__21548__auto__ = null;
var cljs$core$async$state_machine__21548__auto____0 = (function (){
var statearr_24458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24458[(0)] = cljs$core$async$state_machine__21548__auto__);

(statearr_24458[(1)] = (1));

return statearr_24458;
});
var cljs$core$async$state_machine__21548__auto____1 = (function (state_24432){
while(true){
var ret_value__21549__auto__ = (function (){try{while(true){
var result__21550__auto__ = switch__21547__auto__.call(null,state_24432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21550__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object)){
var ex__21551__auto__ = e24459;
var statearr_24460_24481 = state_24432;
(statearr_24460_24481[(5)] = ex__21551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24482 = state_24432;
state_24432 = G__24482;
continue;
} else {
return ret_value__21549__auto__;
}
break;
}
});
cljs$core$async$state_machine__21548__auto__ = function(state_24432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21548__auto____1.call(this,state_24432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21548__auto____0;
cljs$core$async$state_machine__21548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21548__auto____1;
return cljs$core$async$state_machine__21548__auto__;
})()
;})(switch__21547__auto__,c__21659__auto___24466,out))
})();
var state__21661__auto__ = (function (){var statearr_24461 = f__21660__auto__.call(null);
(statearr_24461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21659__auto___24466);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21661__auto__);
});})(c__21659__auto___24466,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

