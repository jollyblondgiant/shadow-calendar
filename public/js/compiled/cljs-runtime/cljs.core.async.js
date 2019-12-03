goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34155 = arguments.length;
switch (G__34155) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34156 = (function (f,blockable,meta34157){
this.f = f;
this.blockable = blockable;
this.meta34157 = meta34157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34158,meta34157__$1){
var self__ = this;
var _34158__$1 = this;
return (new cljs.core.async.t_cljs$core$async34156(self__.f,self__.blockable,meta34157__$1));
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34158){
var self__ = this;
var _34158__$1 = this;
return self__.meta34157;
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34157","meta34157",-833338239,null)], null);
}));

(cljs.core.async.t_cljs$core$async34156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34156");

(cljs.core.async.t_cljs$core$async34156.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34156.
 */
cljs.core.async.__GT_t_cljs$core$async34156 = (function cljs$core$async$__GT_t_cljs$core$async34156(f__$1,blockable__$1,meta34157){
return (new cljs.core.async.t_cljs$core$async34156(f__$1,blockable__$1,meta34157));
});

}

return (new cljs.core.async.t_cljs$core$async34156(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__34161 = arguments.length;
switch (G__34161) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34163 = arguments.length;
switch (G__34163) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__34165 = arguments.length;
switch (G__34165) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35612 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35612) : fn1.call(null,val_35612));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35612) : fn1.call(null,val_35612));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34167 = arguments.length;
switch (G__34167) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4542__auto___35625 = n;
var x_35628 = (0);
while(true){
if((x_35628 < n__4542__auto___35625)){
(a[x_35628] = x_35628);

var G__35629 = (x_35628 + (1));
x_35628 = G__35629;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34168 = (function (flag,meta34169){
this.flag = flag;
this.meta34169 = meta34169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34170,meta34169__$1){
var self__ = this;
var _34170__$1 = this;
return (new cljs.core.async.t_cljs$core$async34168(self__.flag,meta34169__$1));
}));

(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34170){
var self__ = this;
var _34170__$1 = this;
return self__.meta34169;
}));

(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34169","meta34169",-1798384282,null)], null);
}));

(cljs.core.async.t_cljs$core$async34168.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34168");

(cljs.core.async.t_cljs$core$async34168.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34168");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34168.
 */
cljs.core.async.__GT_t_cljs$core$async34168 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34168(flag__$1,meta34169){
return (new cljs.core.async.t_cljs$core$async34168(flag__$1,meta34169));
});

}

return (new cljs.core.async.t_cljs$core$async34168(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34171 = (function (flag,cb,meta34172){
this.flag = flag;
this.cb = cb;
this.meta34172 = meta34172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34173,meta34172__$1){
var self__ = this;
var _34173__$1 = this;
return (new cljs.core.async.t_cljs$core$async34171(self__.flag,self__.cb,meta34172__$1));
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34173){
var self__ = this;
var _34173__$1 = this;
return self__.meta34172;
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34171");

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34171.
 */
cljs.core.async.__GT_t_cljs$core$async34171 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34171(flag__$1,cb__$1,meta34172){
return (new cljs.core.async.t_cljs$core$async34171(flag__$1,cb__$1,meta34172));
});

}

return (new cljs.core.async.t_cljs$core$async34171(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34174_SHARP_){
var G__34176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34174_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34176) : fret.call(null,G__34176));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34175_SHARP_){
var G__34177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34175_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34177) : fret.call(null,G__34177));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4061__auto__ = wport;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35657 = (i + (1));
i = G__35657;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4061__auto__ = ret;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4050__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4050__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4050__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4671__auto__ = [];
var len__4665__auto___35662 = arguments.length;
var i__4666__auto___35663 = (0);
while(true){
if((i__4666__auto___35663 < len__4665__auto___35662)){
args__4671__auto__.push((arguments[i__4666__auto___35663]));

var G__35671 = (i__4666__auto___35663 + (1));
i__4666__auto___35663 = G__35671;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34180){
var map__34181 = p__34180;
var map__34181__$1 = (((((!((map__34181 == null))))?(((((map__34181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34181):map__34181);
var opts = map__34181__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34178){
var G__34179 = cljs.core.first(seq34178);
var seq34178__$1 = cljs.core.next(seq34178);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34179,seq34178__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__34184 = arguments.length;
switch (G__34184) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34084__auto___35680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34208){
var state_val_34209 = (state_34208[(1)]);
if((state_val_34209 === (7))){
var inst_34204 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34210_35681 = state_34208__$1;
(statearr_34210_35681[(2)] = inst_34204);

(statearr_34210_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (1))){
var state_34208__$1 = state_34208;
var statearr_34211_35683 = state_34208__$1;
(statearr_34211_35683[(2)] = null);

(statearr_34211_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (4))){
var inst_34187 = (state_34208[(7)]);
var inst_34187__$1 = (state_34208[(2)]);
var inst_34188 = (inst_34187__$1 == null);
var state_34208__$1 = (function (){var statearr_34212 = state_34208;
(statearr_34212[(7)] = inst_34187__$1);

return statearr_34212;
})();
if(cljs.core.truth_(inst_34188)){
var statearr_34213_35684 = state_34208__$1;
(statearr_34213_35684[(1)] = (5));

} else {
var statearr_34214_35685 = state_34208__$1;
(statearr_34214_35685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (13))){
var state_34208__$1 = state_34208;
var statearr_34215_35686 = state_34208__$1;
(statearr_34215_35686[(2)] = null);

(statearr_34215_35686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (6))){
var inst_34187 = (state_34208[(7)]);
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34208__$1,(11),to,inst_34187);
} else {
if((state_val_34209 === (3))){
var inst_34206 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34208__$1,inst_34206);
} else {
if((state_val_34209 === (12))){
var state_34208__$1 = state_34208;
var statearr_34216_35687 = state_34208__$1;
(statearr_34216_35687[(2)] = null);

(statearr_34216_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (2))){
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34208__$1,(4),from);
} else {
if((state_val_34209 === (11))){
var inst_34197 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
if(cljs.core.truth_(inst_34197)){
var statearr_34217_35688 = state_34208__$1;
(statearr_34217_35688[(1)] = (12));

} else {
var statearr_34218_35689 = state_34208__$1;
(statearr_34218_35689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (9))){
var state_34208__$1 = state_34208;
var statearr_34219_35690 = state_34208__$1;
(statearr_34219_35690[(2)] = null);

(statearr_34219_35690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (5))){
var state_34208__$1 = state_34208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34220_35691 = state_34208__$1;
(statearr_34220_35691[(1)] = (8));

} else {
var statearr_34221_35692 = state_34208__$1;
(statearr_34221_35692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (14))){
var inst_34202 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34222_35701 = state_34208__$1;
(statearr_34222_35701[(2)] = inst_34202);

(statearr_34222_35701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (10))){
var inst_34194 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34223_35703 = state_34208__$1;
(statearr_34223_35703[(2)] = inst_34194);

(statearr_34223_35703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (8))){
var inst_34191 = cljs.core.async.close_BANG_(to);
var state_34208__$1 = state_34208;
var statearr_34224_35704 = state_34208__$1;
(statearr_34224_35704[(2)] = inst_34191);

(statearr_34224_35704[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_34225 = [null,null,null,null,null,null,null,null];
(statearr_34225[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_34225[(1)] = (1));

return statearr_34225;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_34208){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34208);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34226){if((e34226 instanceof Object)){
var ex__33998__auto__ = e34226;
var statearr_34227_35705 = state_34208;
(statearr_34227_35705[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35706 = state_34208;
state_34208 = G__35706;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_34208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_34208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34228 = f__34085__auto__();
(statearr_34228[(6)] = c__34084__auto___35680);

return statearr_34228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34229){
var vec__34230 = p__34229;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34230,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34230,(1),null);
var job = vec__34230;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34084__auto___35709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34237){
var state_val_34238 = (state_34237[(1)]);
if((state_val_34238 === (1))){
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34237__$1,(2),res,v);
} else {
if((state_val_34238 === (2))){
var inst_34234 = (state_34237[(2)]);
var inst_34235 = cljs.core.async.close_BANG_(res);
var state_34237__$1 = (function (){var statearr_34239 = state_34237;
(statearr_34239[(7)] = inst_34234);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34237__$1,inst_34235);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1 = (function (state_34237){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34237);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34241){if((e34241 instanceof Object)){
var ex__33998__auto__ = e34241;
var statearr_34242_35710 = state_34237;
(statearr_34242_35710[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35711 = state_34237;
state_34237 = G__35711;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = function(state_34237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1.call(this,state_34237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34243 = f__34085__auto__();
(statearr_34243[(6)] = c__34084__auto___35709);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34244){
var vec__34245 = p__34244;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34245,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34245,(1),null);
var job = vec__34245;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4542__auto___35712 = n;
var __35713 = (0);
while(true){
if((__35713 < n__4542__auto___35712)){
var G__34248_35714 = type;
var G__34248_35715__$1 = (((G__34248_35714 instanceof cljs.core.Keyword))?G__34248_35714.fqn:null);
switch (G__34248_35715__$1) {
case "compute":
var c__34084__auto___35721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35713,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = ((function (__35713,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function (state_34261){
var state_val_34262 = (state_34261[(1)]);
if((state_val_34262 === (1))){
var state_34261__$1 = state_34261;
var statearr_34263_35722 = state_34261__$1;
(statearr_34263_35722[(2)] = null);

(statearr_34263_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34262 === (2))){
var state_34261__$1 = state_34261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34261__$1,(4),jobs);
} else {
if((state_val_34262 === (3))){
var inst_34259 = (state_34261[(2)]);
var state_34261__$1 = state_34261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34261__$1,inst_34259);
} else {
if((state_val_34262 === (4))){
var inst_34251 = (state_34261[(2)]);
var inst_34252 = process(inst_34251);
var state_34261__$1 = state_34261;
if(cljs.core.truth_(inst_34252)){
var statearr_34264_35724 = state_34261__$1;
(statearr_34264_35724[(1)] = (5));

} else {
var statearr_34265_35726 = state_34261__$1;
(statearr_34265_35726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34262 === (5))){
var state_34261__$1 = state_34261;
var statearr_34266_35727 = state_34261__$1;
(statearr_34266_35727[(2)] = null);

(statearr_34266_35727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34262 === (6))){
var state_34261__$1 = state_34261;
var statearr_34267_35729 = state_34261__$1;
(statearr_34267_35729[(2)] = null);

(statearr_34267_35729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34262 === (7))){
var inst_34257 = (state_34261[(2)]);
var state_34261__$1 = state_34261;
var statearr_34268_35730 = state_34261__$1;
(statearr_34268_35730[(2)] = inst_34257);

(statearr_34268_35730[(1)] = (3));


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
});})(__35713,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
;
return ((function (__35713,switch__33994__auto__,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_34269 = [null,null,null,null,null,null,null];
(statearr_34269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__);

(statearr_34269[(1)] = (1));

return statearr_34269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1 = (function (state_34261){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34261);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34270){if((e34270 instanceof Object)){
var ex__33998__auto__ = e34270;
var statearr_34271_35731 = state_34261;
(statearr_34271_35731[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_34261;
state_34261 = G__35732;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = function(state_34261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1.call(this,state_34261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__;
})()
;})(__35713,switch__33994__auto__,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
})();
var state__34087__auto__ = (function (){var statearr_34272 = f__34085__auto__();
(statearr_34272[(6)] = c__34084__auto___35721);

return statearr_34272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
});})(__35713,c__34084__auto___35721,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
);


break;
case "async":
var c__34084__auto___35736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35713,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = ((function (__35713,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function (state_34285){
var state_val_34286 = (state_34285[(1)]);
if((state_val_34286 === (1))){
var state_34285__$1 = state_34285;
var statearr_34287_35737 = state_34285__$1;
(statearr_34287_35737[(2)] = null);

(statearr_34287_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34286 === (2))){
var state_34285__$1 = state_34285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34285__$1,(4),jobs);
} else {
if((state_val_34286 === (3))){
var inst_34283 = (state_34285[(2)]);
var state_34285__$1 = state_34285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34285__$1,inst_34283);
} else {
if((state_val_34286 === (4))){
var inst_34275 = (state_34285[(2)]);
var inst_34276 = async(inst_34275);
var state_34285__$1 = state_34285;
if(cljs.core.truth_(inst_34276)){
var statearr_34288_35740 = state_34285__$1;
(statearr_34288_35740[(1)] = (5));

} else {
var statearr_34289_35741 = state_34285__$1;
(statearr_34289_35741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34286 === (5))){
var state_34285__$1 = state_34285;
var statearr_34290_35742 = state_34285__$1;
(statearr_34290_35742[(2)] = null);

(statearr_34290_35742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34286 === (6))){
var state_34285__$1 = state_34285;
var statearr_34291_35745 = state_34285__$1;
(statearr_34291_35745[(2)] = null);

(statearr_34291_35745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34286 === (7))){
var inst_34281 = (state_34285[(2)]);
var state_34285__$1 = state_34285;
var statearr_34292_35748 = state_34285__$1;
(statearr_34292_35748[(2)] = inst_34281);

(statearr_34292_35748[(1)] = (3));


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
});})(__35713,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
;
return ((function (__35713,switch__33994__auto__,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_34293 = [null,null,null,null,null,null,null];
(statearr_34293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__);

(statearr_34293[(1)] = (1));

return statearr_34293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1 = (function (state_34285){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34285);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34294){if((e34294 instanceof Object)){
var ex__33998__auto__ = e34294;
var statearr_34295_35749 = state_34285;
(statearr_34295_35749[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35750 = state_34285;
state_34285 = G__35750;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = function(state_34285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1.call(this,state_34285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__;
})()
;})(__35713,switch__33994__auto__,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
})();
var state__34087__auto__ = (function (){var statearr_34296 = f__34085__auto__();
(statearr_34296[(6)] = c__34084__auto___35736);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
});})(__35713,c__34084__auto___35736,G__34248_35714,G__34248_35715__$1,n__4542__auto___35712,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34248_35715__$1)].join('')));

}

var G__35751 = (__35713 + (1));
__35713 = G__35751;
continue;
} else {
}
break;
}

var c__34084__auto___35752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34318){
var state_val_34319 = (state_34318[(1)]);
if((state_val_34319 === (7))){
var inst_34314 = (state_34318[(2)]);
var state_34318__$1 = state_34318;
var statearr_34320_35753 = state_34318__$1;
(statearr_34320_35753[(2)] = inst_34314);

(statearr_34320_35753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34319 === (1))){
var state_34318__$1 = state_34318;
var statearr_34321_35755 = state_34318__$1;
(statearr_34321_35755[(2)] = null);

(statearr_34321_35755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34319 === (4))){
var inst_34299 = (state_34318[(7)]);
var inst_34299__$1 = (state_34318[(2)]);
var inst_34300 = (inst_34299__$1 == null);
var state_34318__$1 = (function (){var statearr_34322 = state_34318;
(statearr_34322[(7)] = inst_34299__$1);

return statearr_34322;
})();
if(cljs.core.truth_(inst_34300)){
var statearr_34323_35756 = state_34318__$1;
(statearr_34323_35756[(1)] = (5));

} else {
var statearr_34324_35757 = state_34318__$1;
(statearr_34324_35757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34319 === (6))){
var inst_34299 = (state_34318[(7)]);
var inst_34304 = (state_34318[(8)]);
var inst_34304__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34305 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34306 = [inst_34299,inst_34304__$1];
var inst_34307 = (new cljs.core.PersistentVector(null,2,(5),inst_34305,inst_34306,null));
var state_34318__$1 = (function (){var statearr_34325 = state_34318;
(statearr_34325[(8)] = inst_34304__$1);

return statearr_34325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34318__$1,(8),jobs,inst_34307);
} else {
if((state_val_34319 === (3))){
var inst_34316 = (state_34318[(2)]);
var state_34318__$1 = state_34318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34318__$1,inst_34316);
} else {
if((state_val_34319 === (2))){
var state_34318__$1 = state_34318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34318__$1,(4),from);
} else {
if((state_val_34319 === (9))){
var inst_34311 = (state_34318[(2)]);
var state_34318__$1 = (function (){var statearr_34326 = state_34318;
(statearr_34326[(9)] = inst_34311);

return statearr_34326;
})();
var statearr_34327_35759 = state_34318__$1;
(statearr_34327_35759[(2)] = null);

(statearr_34327_35759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34319 === (5))){
var inst_34302 = cljs.core.async.close_BANG_(jobs);
var state_34318__$1 = state_34318;
var statearr_34328_35761 = state_34318__$1;
(statearr_34328_35761[(2)] = inst_34302);

(statearr_34328_35761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34319 === (8))){
var inst_34304 = (state_34318[(8)]);
var inst_34309 = (state_34318[(2)]);
var state_34318__$1 = (function (){var statearr_34329 = state_34318;
(statearr_34329[(10)] = inst_34309);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34318__$1,(9),results,inst_34304);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_34330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__);

(statearr_34330[(1)] = (1));

return statearr_34330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1 = (function (state_34318){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34318);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34331){if((e34331 instanceof Object)){
var ex__33998__auto__ = e34331;
var statearr_34332_35762 = state_34318;
(statearr_34332_35762[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35764 = state_34318;
state_34318 = G__35764;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = function(state_34318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1.call(this,state_34318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34333 = f__34085__auto__();
(statearr_34333[(6)] = c__34084__auto___35752);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34371){
var state_val_34372 = (state_34371[(1)]);
if((state_val_34372 === (7))){
var inst_34367 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
var statearr_34373_35766 = state_34371__$1;
(statearr_34373_35766[(2)] = inst_34367);

(statearr_34373_35766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (20))){
var state_34371__$1 = state_34371;
var statearr_34374_35767 = state_34371__$1;
(statearr_34374_35767[(2)] = null);

(statearr_34374_35767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (1))){
var state_34371__$1 = state_34371;
var statearr_34375_35768 = state_34371__$1;
(statearr_34375_35768[(2)] = null);

(statearr_34375_35768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (4))){
var inst_34336 = (state_34371[(7)]);
var inst_34336__$1 = (state_34371[(2)]);
var inst_34337 = (inst_34336__$1 == null);
var state_34371__$1 = (function (){var statearr_34376 = state_34371;
(statearr_34376[(7)] = inst_34336__$1);

return statearr_34376;
})();
if(cljs.core.truth_(inst_34337)){
var statearr_34377_35769 = state_34371__$1;
(statearr_34377_35769[(1)] = (5));

} else {
var statearr_34378_35770 = state_34371__$1;
(statearr_34378_35770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (15))){
var inst_34349 = (state_34371[(8)]);
var state_34371__$1 = state_34371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34371__$1,(18),to,inst_34349);
} else {
if((state_val_34372 === (21))){
var inst_34362 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
var statearr_34379_35771 = state_34371__$1;
(statearr_34379_35771[(2)] = inst_34362);

(statearr_34379_35771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (13))){
var inst_34364 = (state_34371[(2)]);
var state_34371__$1 = (function (){var statearr_34380 = state_34371;
(statearr_34380[(9)] = inst_34364);

return statearr_34380;
})();
var statearr_34381_35772 = state_34371__$1;
(statearr_34381_35772[(2)] = null);

(statearr_34381_35772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (6))){
var inst_34336 = (state_34371[(7)]);
var state_34371__$1 = state_34371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34371__$1,(11),inst_34336);
} else {
if((state_val_34372 === (17))){
var inst_34357 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
if(cljs.core.truth_(inst_34357)){
var statearr_34382_35773 = state_34371__$1;
(statearr_34382_35773[(1)] = (19));

} else {
var statearr_34383_35774 = state_34371__$1;
(statearr_34383_35774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (3))){
var inst_34369 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34371__$1,inst_34369);
} else {
if((state_val_34372 === (12))){
var inst_34346 = (state_34371[(10)]);
var state_34371__$1 = state_34371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34371__$1,(14),inst_34346);
} else {
if((state_val_34372 === (2))){
var state_34371__$1 = state_34371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34371__$1,(4),results);
} else {
if((state_val_34372 === (19))){
var state_34371__$1 = state_34371;
var statearr_34384_35776 = state_34371__$1;
(statearr_34384_35776[(2)] = null);

(statearr_34384_35776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (11))){
var inst_34346 = (state_34371[(2)]);
var state_34371__$1 = (function (){var statearr_34385 = state_34371;
(statearr_34385[(10)] = inst_34346);

return statearr_34385;
})();
var statearr_34386_35778 = state_34371__$1;
(statearr_34386_35778[(2)] = null);

(statearr_34386_35778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (9))){
var state_34371__$1 = state_34371;
var statearr_34387_35779 = state_34371__$1;
(statearr_34387_35779[(2)] = null);

(statearr_34387_35779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (5))){
var state_34371__$1 = state_34371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34388_35780 = state_34371__$1;
(statearr_34388_35780[(1)] = (8));

} else {
var statearr_34389_35781 = state_34371__$1;
(statearr_34389_35781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (14))){
var inst_34349 = (state_34371[(8)]);
var inst_34349__$1 = (state_34371[(2)]);
var inst_34350 = (inst_34349__$1 == null);
var inst_34351 = cljs.core.not(inst_34350);
var state_34371__$1 = (function (){var statearr_34390 = state_34371;
(statearr_34390[(8)] = inst_34349__$1);

return statearr_34390;
})();
if(inst_34351){
var statearr_34391_35782 = state_34371__$1;
(statearr_34391_35782[(1)] = (15));

} else {
var statearr_34392_35783 = state_34371__$1;
(statearr_34392_35783[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (16))){
var state_34371__$1 = state_34371;
var statearr_34393_35784 = state_34371__$1;
(statearr_34393_35784[(2)] = false);

(statearr_34393_35784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (10))){
var inst_34343 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
var statearr_34394_35785 = state_34371__$1;
(statearr_34394_35785[(2)] = inst_34343);

(statearr_34394_35785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (18))){
var inst_34354 = (state_34371[(2)]);
var state_34371__$1 = state_34371;
var statearr_34395_35786 = state_34371__$1;
(statearr_34395_35786[(2)] = inst_34354);

(statearr_34395_35786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34372 === (8))){
var inst_34340 = cljs.core.async.close_BANG_(to);
var state_34371__$1 = state_34371;
var statearr_34396_35787 = state_34371__$1;
(statearr_34396_35787[(2)] = inst_34340);

(statearr_34396_35787[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_34397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__);

(statearr_34397[(1)] = (1));

return statearr_34397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1 = (function (state_34371){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34371);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34398){if((e34398 instanceof Object)){
var ex__33998__auto__ = e34398;
var statearr_34399_35788 = state_34371;
(statearr_34399_35788[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_34371;
state_34371 = G__35789;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__ = function(state_34371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1.call(this,state_34371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34400 = f__34085__auto__();
(statearr_34400[(6)] = c__34084__auto__);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
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
var G__34402 = arguments.length;
switch (G__34402) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__34404 = arguments.length;
switch (G__34404) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__34406 = arguments.length;
switch (G__34406) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34084__auto___35805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (7))){
var inst_34428 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34434_35806 = state_34432__$1;
(statearr_34434_35806[(2)] = inst_34428);

(statearr_34434_35806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (1))){
var state_34432__$1 = state_34432;
var statearr_34435_35809 = state_34432__$1;
(statearr_34435_35809[(2)] = null);

(statearr_34435_35809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (4))){
var inst_34409 = (state_34432[(7)]);
var inst_34409__$1 = (state_34432[(2)]);
var inst_34410 = (inst_34409__$1 == null);
var state_34432__$1 = (function (){var statearr_34436 = state_34432;
(statearr_34436[(7)] = inst_34409__$1);

return statearr_34436;
})();
if(cljs.core.truth_(inst_34410)){
var statearr_34437_35810 = state_34432__$1;
(statearr_34437_35810[(1)] = (5));

} else {
var statearr_34438_35811 = state_34432__$1;
(statearr_34438_35811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (13))){
var state_34432__$1 = state_34432;
var statearr_34439_35812 = state_34432__$1;
(statearr_34439_35812[(2)] = null);

(statearr_34439_35812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (6))){
var inst_34409 = (state_34432[(7)]);
var inst_34415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34409) : p.call(null,inst_34409));
var state_34432__$1 = state_34432;
if(cljs.core.truth_(inst_34415)){
var statearr_34440_35814 = state_34432__$1;
(statearr_34440_35814[(1)] = (9));

} else {
var statearr_34441_35815 = state_34432__$1;
(statearr_34441_35815[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (3))){
var inst_34430 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34432__$1,inst_34430);
} else {
if((state_val_34433 === (12))){
var state_34432__$1 = state_34432;
var statearr_34442_35823 = state_34432__$1;
(statearr_34442_35823[(2)] = null);

(statearr_34442_35823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (2))){
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34432__$1,(4),ch);
} else {
if((state_val_34433 === (11))){
var inst_34409 = (state_34432[(7)]);
var inst_34419 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34432__$1,(8),inst_34419,inst_34409);
} else {
if((state_val_34433 === (9))){
var state_34432__$1 = state_34432;
var statearr_34443_35827 = state_34432__$1;
(statearr_34443_35827[(2)] = tc);

(statearr_34443_35827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (5))){
var inst_34412 = cljs.core.async.close_BANG_(tc);
var inst_34413 = cljs.core.async.close_BANG_(fc);
var state_34432__$1 = (function (){var statearr_34444 = state_34432;
(statearr_34444[(8)] = inst_34412);

return statearr_34444;
})();
var statearr_34445_35831 = state_34432__$1;
(statearr_34445_35831[(2)] = inst_34413);

(statearr_34445_35831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (14))){
var inst_34426 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34446_35832 = state_34432__$1;
(statearr_34446_35832[(2)] = inst_34426);

(statearr_34446_35832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (10))){
var state_34432__$1 = state_34432;
var statearr_34447_35833 = state_34432__$1;
(statearr_34447_35833[(2)] = fc);

(statearr_34447_35833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (8))){
var inst_34421 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
if(cljs.core.truth_(inst_34421)){
var statearr_34448_35834 = state_34432__$1;
(statearr_34448_35834[(1)] = (12));

} else {
var statearr_34449_35835 = state_34432__$1;
(statearr_34449_35835[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_34450 = [null,null,null,null,null,null,null,null,null];
(statearr_34450[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_34450[(1)] = (1));

return statearr_34450;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_34432){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34432);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34451){if((e34451 instanceof Object)){
var ex__33998__auto__ = e34451;
var statearr_34452_35840 = state_34432;
(statearr_34452_35840[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35842 = state_34432;
state_34432 = G__35842;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34453 = f__34085__auto__();
(statearr_34453[(6)] = c__34084__auto___35805);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34474){
var state_val_34475 = (state_34474[(1)]);
if((state_val_34475 === (7))){
var inst_34470 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34476_35843 = state_34474__$1;
(statearr_34476_35843[(2)] = inst_34470);

(statearr_34476_35843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (1))){
var inst_34454 = init;
var state_34474__$1 = (function (){var statearr_34477 = state_34474;
(statearr_34477[(7)] = inst_34454);

return statearr_34477;
})();
var statearr_34478_35847 = state_34474__$1;
(statearr_34478_35847[(2)] = null);

(statearr_34478_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (4))){
var inst_34457 = (state_34474[(8)]);
var inst_34457__$1 = (state_34474[(2)]);
var inst_34458 = (inst_34457__$1 == null);
var state_34474__$1 = (function (){var statearr_34479 = state_34474;
(statearr_34479[(8)] = inst_34457__$1);

return statearr_34479;
})();
if(cljs.core.truth_(inst_34458)){
var statearr_34480_35848 = state_34474__$1;
(statearr_34480_35848[(1)] = (5));

} else {
var statearr_34481_35852 = state_34474__$1;
(statearr_34481_35852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (6))){
var inst_34454 = (state_34474[(7)]);
var inst_34461 = (state_34474[(9)]);
var inst_34457 = (state_34474[(8)]);
var inst_34461__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34454,inst_34457) : f.call(null,inst_34454,inst_34457));
var inst_34462 = cljs.core.reduced_QMARK_(inst_34461__$1);
var state_34474__$1 = (function (){var statearr_34482 = state_34474;
(statearr_34482[(9)] = inst_34461__$1);

return statearr_34482;
})();
if(inst_34462){
var statearr_34483_35853 = state_34474__$1;
(statearr_34483_35853[(1)] = (8));

} else {
var statearr_34484_35858 = state_34474__$1;
(statearr_34484_35858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (3))){
var inst_34472 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34474__$1,inst_34472);
} else {
if((state_val_34475 === (2))){
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34474__$1,(4),ch);
} else {
if((state_val_34475 === (9))){
var inst_34461 = (state_34474[(9)]);
var inst_34454 = inst_34461;
var state_34474__$1 = (function (){var statearr_34485 = state_34474;
(statearr_34485[(7)] = inst_34454);

return statearr_34485;
})();
var statearr_34486_35862 = state_34474__$1;
(statearr_34486_35862[(2)] = null);

(statearr_34486_35862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (5))){
var inst_34454 = (state_34474[(7)]);
var state_34474__$1 = state_34474;
var statearr_34487_35866 = state_34474__$1;
(statearr_34487_35866[(2)] = inst_34454);

(statearr_34487_35866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (10))){
var inst_34468 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34488_35867 = state_34474__$1;
(statearr_34488_35867[(2)] = inst_34468);

(statearr_34488_35867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (8))){
var inst_34461 = (state_34474[(9)]);
var inst_34464 = cljs.core.deref(inst_34461);
var state_34474__$1 = state_34474;
var statearr_34489_35871 = state_34474__$1;
(statearr_34489_35871[(2)] = inst_34464);

(statearr_34489_35871[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33995__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33995__auto____0 = (function (){
var statearr_34490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34490[(0)] = cljs$core$async$reduce_$_state_machine__33995__auto__);

(statearr_34490[(1)] = (1));

return statearr_34490;
});
var cljs$core$async$reduce_$_state_machine__33995__auto____1 = (function (state_34474){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34474);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34491){if((e34491 instanceof Object)){
var ex__33998__auto__ = e34491;
var statearr_34492_35875 = state_34474;
(statearr_34492_35875[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35876 = state_34474;
state_34474 = G__35876;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33995__auto__ = function(state_34474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33995__auto____1.call(this,state_34474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33995__auto____0;
cljs$core$async$reduce_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33995__auto____1;
return cljs$core$async$reduce_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34493 = f__34085__auto__();
(statearr_34493[(6)] = c__34084__auto__);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34499){
var state_val_34500 = (state_34499[(1)]);
if((state_val_34500 === (1))){
var inst_34494 = cljs.core.async.reduce(f__$1,init,ch);
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34499__$1,(2),inst_34494);
} else {
if((state_val_34500 === (2))){
var inst_34496 = (state_34499[(2)]);
var inst_34497 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34496) : f__$1.call(null,inst_34496));
var state_34499__$1 = state_34499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34499__$1,inst_34497);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33995__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33995__auto____0 = (function (){
var statearr_34501 = [null,null,null,null,null,null,null];
(statearr_34501[(0)] = cljs$core$async$transduce_$_state_machine__33995__auto__);

(statearr_34501[(1)] = (1));

return statearr_34501;
});
var cljs$core$async$transduce_$_state_machine__33995__auto____1 = (function (state_34499){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34499);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__33998__auto__ = e34502;
var statearr_34503_35893 = state_34499;
(statearr_34503_35893[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35897 = state_34499;
state_34499 = G__35897;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33995__auto__ = function(state_34499){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33995__auto____1.call(this,state_34499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33995__auto____0;
cljs$core$async$transduce_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33995__auto____1;
return cljs$core$async$transduce_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34504 = f__34085__auto__();
(statearr_34504[(6)] = c__34084__auto__);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
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
var G__34506 = arguments.length;
switch (G__34506) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34531){
var state_val_34532 = (state_34531[(1)]);
if((state_val_34532 === (7))){
var inst_34513 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34533_35908 = state_34531__$1;
(statearr_34533_35908[(2)] = inst_34513);

(statearr_34533_35908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (1))){
var inst_34507 = cljs.core.seq(coll);
var inst_34508 = inst_34507;
var state_34531__$1 = (function (){var statearr_34534 = state_34531;
(statearr_34534[(7)] = inst_34508);

return statearr_34534;
})();
var statearr_34535_35910 = state_34531__$1;
(statearr_34535_35910[(2)] = null);

(statearr_34535_35910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (4))){
var inst_34508 = (state_34531[(7)]);
var inst_34511 = cljs.core.first(inst_34508);
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34531__$1,(7),ch,inst_34511);
} else {
if((state_val_34532 === (13))){
var inst_34525 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34536_35911 = state_34531__$1;
(statearr_34536_35911[(2)] = inst_34525);

(statearr_34536_35911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (6))){
var inst_34516 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
if(cljs.core.truth_(inst_34516)){
var statearr_34537_35912 = state_34531__$1;
(statearr_34537_35912[(1)] = (8));

} else {
var statearr_34538_35913 = state_34531__$1;
(statearr_34538_35913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (3))){
var inst_34529 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34531__$1,inst_34529);
} else {
if((state_val_34532 === (12))){
var state_34531__$1 = state_34531;
var statearr_34539_35914 = state_34531__$1;
(statearr_34539_35914[(2)] = null);

(statearr_34539_35914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (2))){
var inst_34508 = (state_34531[(7)]);
var state_34531__$1 = state_34531;
if(cljs.core.truth_(inst_34508)){
var statearr_34540_35915 = state_34531__$1;
(statearr_34540_35915[(1)] = (4));

} else {
var statearr_34541_35916 = state_34531__$1;
(statearr_34541_35916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (11))){
var inst_34522 = cljs.core.async.close_BANG_(ch);
var state_34531__$1 = state_34531;
var statearr_34542_35917 = state_34531__$1;
(statearr_34542_35917[(2)] = inst_34522);

(statearr_34542_35917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (9))){
var state_34531__$1 = state_34531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34543_35918 = state_34531__$1;
(statearr_34543_35918[(1)] = (11));

} else {
var statearr_34544_35919 = state_34531__$1;
(statearr_34544_35919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (5))){
var inst_34508 = (state_34531[(7)]);
var state_34531__$1 = state_34531;
var statearr_34545_35920 = state_34531__$1;
(statearr_34545_35920[(2)] = inst_34508);

(statearr_34545_35920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (10))){
var inst_34527 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34546_35923 = state_34531__$1;
(statearr_34546_35923[(2)] = inst_34527);

(statearr_34546_35923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (8))){
var inst_34508 = (state_34531[(7)]);
var inst_34518 = cljs.core.next(inst_34508);
var inst_34508__$1 = inst_34518;
var state_34531__$1 = (function (){var statearr_34547 = state_34531;
(statearr_34547[(7)] = inst_34508__$1);

return statearr_34547;
})();
var statearr_34548_35924 = state_34531__$1;
(statearr_34548_35924[(2)] = null);

(statearr_34548_35924[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_34549 = [null,null,null,null,null,null,null,null];
(statearr_34549[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_34549[(1)] = (1));

return statearr_34549;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_34531){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34531);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34550){if((e34550 instanceof Object)){
var ex__33998__auto__ = e34550;
var statearr_34551_35925 = state_34531;
(statearr_34551_35925[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35926 = state_34531;
state_34531 = G__35926;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_34531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_34531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34552 = f__34085__auto__();
(statearr_34552[(6)] = c__34084__auto__);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4363__auto__ = (((_ == null))?null:_);
var m__4364__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4364__auto__.call(null,_));
} else {
var m__4361__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4361__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4364__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4361__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4361__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4364__auto__.call(null,m,ch));
} else {
var m__4361__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4361__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4364__auto__.call(null,m));
} else {
var m__4361__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4361__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34553 = (function (ch,cs,meta34554){
this.ch = ch;
this.cs = cs;
this.meta34554 = meta34554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34555,meta34554__$1){
var self__ = this;
var _34555__$1 = this;
return (new cljs.core.async.t_cljs$core$async34553(self__.ch,self__.cs,meta34554__$1));
}));

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34555){
var self__ = this;
var _34555__$1 = this;
return self__.meta34554;
}));

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34554","meta34554",198107121,null)], null);
}));

(cljs.core.async.t_cljs$core$async34553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34553");

(cljs.core.async.t_cljs$core$async34553.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34553.
 */
cljs.core.async.__GT_t_cljs$core$async34553 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34553(ch__$1,cs__$1,meta34554){
return (new cljs.core.async.t_cljs$core$async34553(ch__$1,cs__$1,meta34554));
});

}

return (new cljs.core.async.t_cljs$core$async34553(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34084__auto___35951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34690){
var state_val_34691 = (state_34690[(1)]);
if((state_val_34691 === (7))){
var inst_34686 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34692_35958 = state_34690__$1;
(statearr_34692_35958[(2)] = inst_34686);

(statearr_34692_35958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (20))){
var inst_34589 = (state_34690[(7)]);
var inst_34601 = cljs.core.first(inst_34589);
var inst_34602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34601,(0),null);
var inst_34603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34601,(1),null);
var state_34690__$1 = (function (){var statearr_34693 = state_34690;
(statearr_34693[(8)] = inst_34602);

return statearr_34693;
})();
if(cljs.core.truth_(inst_34603)){
var statearr_34694_35959 = state_34690__$1;
(statearr_34694_35959[(1)] = (22));

} else {
var statearr_34695_35960 = state_34690__$1;
(statearr_34695_35960[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (27))){
var inst_34558 = (state_34690[(9)]);
var inst_34631 = (state_34690[(10)]);
var inst_34633 = (state_34690[(11)]);
var inst_34638 = (state_34690[(12)]);
var inst_34638__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34631,inst_34633);
var inst_34639 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34638__$1,inst_34558,done);
var state_34690__$1 = (function (){var statearr_34696 = state_34690;
(statearr_34696[(12)] = inst_34638__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34639)){
var statearr_34697_35961 = state_34690__$1;
(statearr_34697_35961[(1)] = (30));

} else {
var statearr_34698_35962 = state_34690__$1;
(statearr_34698_35962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (1))){
var state_34690__$1 = state_34690;
var statearr_34699_35975 = state_34690__$1;
(statearr_34699_35975[(2)] = null);

(statearr_34699_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (24))){
var inst_34589 = (state_34690[(7)]);
var inst_34608 = (state_34690[(2)]);
var inst_34609 = cljs.core.next(inst_34589);
var inst_34567 = inst_34609;
var inst_34568 = null;
var inst_34569 = (0);
var inst_34570 = (0);
var state_34690__$1 = (function (){var statearr_34700 = state_34690;
(statearr_34700[(13)] = inst_34567);

(statearr_34700[(14)] = inst_34570);

(statearr_34700[(15)] = inst_34569);

(statearr_34700[(16)] = inst_34608);

(statearr_34700[(17)] = inst_34568);

return statearr_34700;
})();
var statearr_34701_35976 = state_34690__$1;
(statearr_34701_35976[(2)] = null);

(statearr_34701_35976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (39))){
var state_34690__$1 = state_34690;
var statearr_34705_35977 = state_34690__$1;
(statearr_34705_35977[(2)] = null);

(statearr_34705_35977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (4))){
var inst_34558 = (state_34690[(9)]);
var inst_34558__$1 = (state_34690[(2)]);
var inst_34559 = (inst_34558__$1 == null);
var state_34690__$1 = (function (){var statearr_34706 = state_34690;
(statearr_34706[(9)] = inst_34558__$1);

return statearr_34706;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34707_35978 = state_34690__$1;
(statearr_34707_35978[(1)] = (5));

} else {
var statearr_34708_35979 = state_34690__$1;
(statearr_34708_35979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (15))){
var inst_34567 = (state_34690[(13)]);
var inst_34570 = (state_34690[(14)]);
var inst_34569 = (state_34690[(15)]);
var inst_34568 = (state_34690[(17)]);
var inst_34585 = (state_34690[(2)]);
var inst_34586 = (inst_34570 + (1));
var tmp34702 = inst_34567;
var tmp34703 = inst_34569;
var tmp34704 = inst_34568;
var inst_34567__$1 = tmp34702;
var inst_34568__$1 = tmp34704;
var inst_34569__$1 = tmp34703;
var inst_34570__$1 = inst_34586;
var state_34690__$1 = (function (){var statearr_34709 = state_34690;
(statearr_34709[(13)] = inst_34567__$1);

(statearr_34709[(14)] = inst_34570__$1);

(statearr_34709[(15)] = inst_34569__$1);

(statearr_34709[(18)] = inst_34585);

(statearr_34709[(17)] = inst_34568__$1);

return statearr_34709;
})();
var statearr_34710_35986 = state_34690__$1;
(statearr_34710_35986[(2)] = null);

(statearr_34710_35986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (21))){
var inst_34612 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34714_35987 = state_34690__$1;
(statearr_34714_35987[(2)] = inst_34612);

(statearr_34714_35987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (31))){
var inst_34638 = (state_34690[(12)]);
var inst_34642 = done(null);
var inst_34643 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34638);
var state_34690__$1 = (function (){var statearr_34715 = state_34690;
(statearr_34715[(19)] = inst_34642);

return statearr_34715;
})();
var statearr_34716_35988 = state_34690__$1;
(statearr_34716_35988[(2)] = inst_34643);

(statearr_34716_35988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (32))){
var inst_34632 = (state_34690[(20)]);
var inst_34631 = (state_34690[(10)]);
var inst_34633 = (state_34690[(11)]);
var inst_34630 = (state_34690[(21)]);
var inst_34645 = (state_34690[(2)]);
var inst_34646 = (inst_34633 + (1));
var tmp34711 = inst_34632;
var tmp34712 = inst_34631;
var tmp34713 = inst_34630;
var inst_34630__$1 = tmp34713;
var inst_34631__$1 = tmp34712;
var inst_34632__$1 = tmp34711;
var inst_34633__$1 = inst_34646;
var state_34690__$1 = (function (){var statearr_34717 = state_34690;
(statearr_34717[(20)] = inst_34632__$1);

(statearr_34717[(10)] = inst_34631__$1);

(statearr_34717[(11)] = inst_34633__$1);

(statearr_34717[(22)] = inst_34645);

(statearr_34717[(21)] = inst_34630__$1);

return statearr_34717;
})();
var statearr_34718_35989 = state_34690__$1;
(statearr_34718_35989[(2)] = null);

(statearr_34718_35989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (40))){
var inst_34658 = (state_34690[(23)]);
var inst_34662 = done(null);
var inst_34663 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34658);
var state_34690__$1 = (function (){var statearr_34719 = state_34690;
(statearr_34719[(24)] = inst_34662);

return statearr_34719;
})();
var statearr_34720_35990 = state_34690__$1;
(statearr_34720_35990[(2)] = inst_34663);

(statearr_34720_35990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (33))){
var inst_34649 = (state_34690[(25)]);
var inst_34651 = cljs.core.chunked_seq_QMARK_(inst_34649);
var state_34690__$1 = state_34690;
if(inst_34651){
var statearr_34721_35991 = state_34690__$1;
(statearr_34721_35991[(1)] = (36));

} else {
var statearr_34722_35992 = state_34690__$1;
(statearr_34722_35992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (13))){
var inst_34579 = (state_34690[(26)]);
var inst_34582 = cljs.core.async.close_BANG_(inst_34579);
var state_34690__$1 = state_34690;
var statearr_34723_35993 = state_34690__$1;
(statearr_34723_35993[(2)] = inst_34582);

(statearr_34723_35993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (22))){
var inst_34602 = (state_34690[(8)]);
var inst_34605 = cljs.core.async.close_BANG_(inst_34602);
var state_34690__$1 = state_34690;
var statearr_34724_35994 = state_34690__$1;
(statearr_34724_35994[(2)] = inst_34605);

(statearr_34724_35994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (36))){
var inst_34649 = (state_34690[(25)]);
var inst_34653 = cljs.core.chunk_first(inst_34649);
var inst_34654 = cljs.core.chunk_rest(inst_34649);
var inst_34655 = cljs.core.count(inst_34653);
var inst_34630 = inst_34654;
var inst_34631 = inst_34653;
var inst_34632 = inst_34655;
var inst_34633 = (0);
var state_34690__$1 = (function (){var statearr_34725 = state_34690;
(statearr_34725[(20)] = inst_34632);

(statearr_34725[(10)] = inst_34631);

(statearr_34725[(11)] = inst_34633);

(statearr_34725[(21)] = inst_34630);

return statearr_34725;
})();
var statearr_34726_35995 = state_34690__$1;
(statearr_34726_35995[(2)] = null);

(statearr_34726_35995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (41))){
var inst_34649 = (state_34690[(25)]);
var inst_34665 = (state_34690[(2)]);
var inst_34666 = cljs.core.next(inst_34649);
var inst_34630 = inst_34666;
var inst_34631 = null;
var inst_34632 = (0);
var inst_34633 = (0);
var state_34690__$1 = (function (){var statearr_34727 = state_34690;
(statearr_34727[(27)] = inst_34665);

(statearr_34727[(20)] = inst_34632);

(statearr_34727[(10)] = inst_34631);

(statearr_34727[(11)] = inst_34633);

(statearr_34727[(21)] = inst_34630);

return statearr_34727;
})();
var statearr_34728_35996 = state_34690__$1;
(statearr_34728_35996[(2)] = null);

(statearr_34728_35996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (43))){
var state_34690__$1 = state_34690;
var statearr_34729_35997 = state_34690__$1;
(statearr_34729_35997[(2)] = null);

(statearr_34729_35997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (29))){
var inst_34674 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34730_35998 = state_34690__$1;
(statearr_34730_35998[(2)] = inst_34674);

(statearr_34730_35998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (44))){
var inst_34683 = (state_34690[(2)]);
var state_34690__$1 = (function (){var statearr_34731 = state_34690;
(statearr_34731[(28)] = inst_34683);

return statearr_34731;
})();
var statearr_34732_35999 = state_34690__$1;
(statearr_34732_35999[(2)] = null);

(statearr_34732_35999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (6))){
var inst_34622 = (state_34690[(29)]);
var inst_34621 = cljs.core.deref(cs);
var inst_34622__$1 = cljs.core.keys(inst_34621);
var inst_34623 = cljs.core.count(inst_34622__$1);
var inst_34624 = cljs.core.reset_BANG_(dctr,inst_34623);
var inst_34629 = cljs.core.seq(inst_34622__$1);
var inst_34630 = inst_34629;
var inst_34631 = null;
var inst_34632 = (0);
var inst_34633 = (0);
var state_34690__$1 = (function (){var statearr_34733 = state_34690;
(statearr_34733[(30)] = inst_34624);

(statearr_34733[(20)] = inst_34632);

(statearr_34733[(10)] = inst_34631);

(statearr_34733[(11)] = inst_34633);

(statearr_34733[(29)] = inst_34622__$1);

(statearr_34733[(21)] = inst_34630);

return statearr_34733;
})();
var statearr_34734_36000 = state_34690__$1;
(statearr_34734_36000[(2)] = null);

(statearr_34734_36000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (28))){
var inst_34630 = (state_34690[(21)]);
var inst_34649 = (state_34690[(25)]);
var inst_34649__$1 = cljs.core.seq(inst_34630);
var state_34690__$1 = (function (){var statearr_34735 = state_34690;
(statearr_34735[(25)] = inst_34649__$1);

return statearr_34735;
})();
if(inst_34649__$1){
var statearr_34736_36001 = state_34690__$1;
(statearr_34736_36001[(1)] = (33));

} else {
var statearr_34737_36002 = state_34690__$1;
(statearr_34737_36002[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (25))){
var inst_34632 = (state_34690[(20)]);
var inst_34633 = (state_34690[(11)]);
var inst_34635 = (inst_34633 < inst_34632);
var inst_34636 = inst_34635;
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34636)){
var statearr_34738_36003 = state_34690__$1;
(statearr_34738_36003[(1)] = (27));

} else {
var statearr_34739_36004 = state_34690__$1;
(statearr_34739_36004[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (34))){
var state_34690__$1 = state_34690;
var statearr_34740_36005 = state_34690__$1;
(statearr_34740_36005[(2)] = null);

(statearr_34740_36005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (17))){
var state_34690__$1 = state_34690;
var statearr_34741_36006 = state_34690__$1;
(statearr_34741_36006[(2)] = null);

(statearr_34741_36006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (3))){
var inst_34688 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34690__$1,inst_34688);
} else {
if((state_val_34691 === (12))){
var inst_34617 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34742_36007 = state_34690__$1;
(statearr_34742_36007[(2)] = inst_34617);

(statearr_34742_36007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (2))){
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34690__$1,(4),ch);
} else {
if((state_val_34691 === (23))){
var state_34690__$1 = state_34690;
var statearr_34743_36008 = state_34690__$1;
(statearr_34743_36008[(2)] = null);

(statearr_34743_36008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (35))){
var inst_34672 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34744_36009 = state_34690__$1;
(statearr_34744_36009[(2)] = inst_34672);

(statearr_34744_36009[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (19))){
var inst_34589 = (state_34690[(7)]);
var inst_34593 = cljs.core.chunk_first(inst_34589);
var inst_34594 = cljs.core.chunk_rest(inst_34589);
var inst_34595 = cljs.core.count(inst_34593);
var inst_34567 = inst_34594;
var inst_34568 = inst_34593;
var inst_34569 = inst_34595;
var inst_34570 = (0);
var state_34690__$1 = (function (){var statearr_34745 = state_34690;
(statearr_34745[(13)] = inst_34567);

(statearr_34745[(14)] = inst_34570);

(statearr_34745[(15)] = inst_34569);

(statearr_34745[(17)] = inst_34568);

return statearr_34745;
})();
var statearr_34746_36010 = state_34690__$1;
(statearr_34746_36010[(2)] = null);

(statearr_34746_36010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (11))){
var inst_34567 = (state_34690[(13)]);
var inst_34589 = (state_34690[(7)]);
var inst_34589__$1 = cljs.core.seq(inst_34567);
var state_34690__$1 = (function (){var statearr_34747 = state_34690;
(statearr_34747[(7)] = inst_34589__$1);

return statearr_34747;
})();
if(inst_34589__$1){
var statearr_34748_36012 = state_34690__$1;
(statearr_34748_36012[(1)] = (16));

} else {
var statearr_34749_36013 = state_34690__$1;
(statearr_34749_36013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (9))){
var inst_34619 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34750_36014 = state_34690__$1;
(statearr_34750_36014[(2)] = inst_34619);

(statearr_34750_36014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (5))){
var inst_34565 = cljs.core.deref(cs);
var inst_34566 = cljs.core.seq(inst_34565);
var inst_34567 = inst_34566;
var inst_34568 = null;
var inst_34569 = (0);
var inst_34570 = (0);
var state_34690__$1 = (function (){var statearr_34751 = state_34690;
(statearr_34751[(13)] = inst_34567);

(statearr_34751[(14)] = inst_34570);

(statearr_34751[(15)] = inst_34569);

(statearr_34751[(17)] = inst_34568);

return statearr_34751;
})();
var statearr_34752_36018 = state_34690__$1;
(statearr_34752_36018[(2)] = null);

(statearr_34752_36018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (14))){
var state_34690__$1 = state_34690;
var statearr_34753_36021 = state_34690__$1;
(statearr_34753_36021[(2)] = null);

(statearr_34753_36021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (45))){
var inst_34680 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34754_36022 = state_34690__$1;
(statearr_34754_36022[(2)] = inst_34680);

(statearr_34754_36022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (26))){
var inst_34622 = (state_34690[(29)]);
var inst_34676 = (state_34690[(2)]);
var inst_34677 = cljs.core.seq(inst_34622);
var state_34690__$1 = (function (){var statearr_34755 = state_34690;
(statearr_34755[(31)] = inst_34676);

return statearr_34755;
})();
if(inst_34677){
var statearr_34756_36023 = state_34690__$1;
(statearr_34756_36023[(1)] = (42));

} else {
var statearr_34757_36024 = state_34690__$1;
(statearr_34757_36024[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (16))){
var inst_34589 = (state_34690[(7)]);
var inst_34591 = cljs.core.chunked_seq_QMARK_(inst_34589);
var state_34690__$1 = state_34690;
if(inst_34591){
var statearr_34758_36025 = state_34690__$1;
(statearr_34758_36025[(1)] = (19));

} else {
var statearr_34759_36026 = state_34690__$1;
(statearr_34759_36026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (38))){
var inst_34669 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34760_36027 = state_34690__$1;
(statearr_34760_36027[(2)] = inst_34669);

(statearr_34760_36027[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (30))){
var state_34690__$1 = state_34690;
var statearr_34761_36028 = state_34690__$1;
(statearr_34761_36028[(2)] = null);

(statearr_34761_36028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (10))){
var inst_34570 = (state_34690[(14)]);
var inst_34568 = (state_34690[(17)]);
var inst_34578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34568,inst_34570);
var inst_34579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34578,(0),null);
var inst_34580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34578,(1),null);
var state_34690__$1 = (function (){var statearr_34762 = state_34690;
(statearr_34762[(26)] = inst_34579);

return statearr_34762;
})();
if(cljs.core.truth_(inst_34580)){
var statearr_34763_36029 = state_34690__$1;
(statearr_34763_36029[(1)] = (13));

} else {
var statearr_34764_36030 = state_34690__$1;
(statearr_34764_36030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (18))){
var inst_34615 = (state_34690[(2)]);
var state_34690__$1 = state_34690;
var statearr_34765_36031 = state_34690__$1;
(statearr_34765_36031[(2)] = inst_34615);

(statearr_34765_36031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (42))){
var state_34690__$1 = state_34690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34690__$1,(45),dchan);
} else {
if((state_val_34691 === (37))){
var inst_34558 = (state_34690[(9)]);
var inst_34658 = (state_34690[(23)]);
var inst_34649 = (state_34690[(25)]);
var inst_34658__$1 = cljs.core.first(inst_34649);
var inst_34659 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34658__$1,inst_34558,done);
var state_34690__$1 = (function (){var statearr_34766 = state_34690;
(statearr_34766[(23)] = inst_34658__$1);

return statearr_34766;
})();
if(cljs.core.truth_(inst_34659)){
var statearr_34767_36036 = state_34690__$1;
(statearr_34767_36036[(1)] = (39));

} else {
var statearr_34768_36037 = state_34690__$1;
(statearr_34768_36037[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34691 === (8))){
var inst_34570 = (state_34690[(14)]);
var inst_34569 = (state_34690[(15)]);
var inst_34572 = (inst_34570 < inst_34569);
var inst_34573 = inst_34572;
var state_34690__$1 = state_34690;
if(cljs.core.truth_(inst_34573)){
var statearr_34769_36038 = state_34690__$1;
(statearr_34769_36038[(1)] = (10));

} else {
var statearr_34770_36039 = state_34690__$1;
(statearr_34770_36039[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__33995__auto__ = null;
var cljs$core$async$mult_$_state_machine__33995__auto____0 = (function (){
var statearr_34771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34771[(0)] = cljs$core$async$mult_$_state_machine__33995__auto__);

(statearr_34771[(1)] = (1));

return statearr_34771;
});
var cljs$core$async$mult_$_state_machine__33995__auto____1 = (function (state_34690){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34690);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34772){if((e34772 instanceof Object)){
var ex__33998__auto__ = e34772;
var statearr_34773_36042 = state_34690;
(statearr_34773_36042[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_34690;
state_34690 = G__36043;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33995__auto__ = function(state_34690){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33995__auto____1.call(this,state_34690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33995__auto____0;
cljs$core$async$mult_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33995__auto____1;
return cljs$core$async$mult_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34774 = f__34085__auto__();
(statearr_34774[(6)] = c__34084__auto___35951);

return statearr_34774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34776 = arguments.length;
switch (G__34776) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4364__auto__.call(null,m,ch));
} else {
var m__4361__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4361__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4364__auto__.call(null,m,ch));
} else {
var m__4361__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4361__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4364__auto__.call(null,m));
} else {
var m__4361__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4361__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4364__auto__.call(null,m,state_map));
} else {
var m__4361__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4361__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4363__auto__ = (((m == null))?null:m);
var m__4364__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4364__auto__.call(null,m,mode));
} else {
var m__4361__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4361__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4671__auto__ = [];
var len__4665__auto___36047 = arguments.length;
var i__4666__auto___36048 = (0);
while(true){
if((i__4666__auto___36048 < len__4665__auto___36047)){
args__4671__auto__.push((arguments[i__4666__auto___36048]));

var G__36049 = (i__4666__auto___36048 + (1));
i__4666__auto___36048 = G__36049;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((3) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4672__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34781){
var map__34782 = p__34781;
var map__34782__$1 = (((((!((map__34782 == null))))?(((((map__34782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34782):map__34782);
var opts = map__34782__$1;
var statearr_34784_36051 = state;
(statearr_34784_36051[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34785_36052 = state;
(statearr_34785_36052[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34786_36053 = state;
(statearr_34786_36053[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34777){
var G__34778 = cljs.core.first(seq34777);
var seq34777__$1 = cljs.core.next(seq34777);
var G__34779 = cljs.core.first(seq34777__$1);
var seq34777__$2 = cljs.core.next(seq34777__$1);
var G__34780 = cljs.core.first(seq34777__$2);
var seq34777__$3 = cljs.core.next(seq34777__$2);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34778,G__34779,G__34780,seq34777__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34787 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34788){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34788 = meta34788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34789,meta34788__$1){
var self__ = this;
var _34789__$1 = this;
return (new cljs.core.async.t_cljs$core$async34787(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34788__$1));
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34789){
var self__ = this;
var _34789__$1 = this;
return self__.meta34788;
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34788","meta34788",1137088260,null)], null);
}));

(cljs.core.async.t_cljs$core$async34787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34787");

(cljs.core.async.t_cljs$core$async34787.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34787.
 */
cljs.core.async.__GT_t_cljs$core$async34787 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34787(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34788){
return (new cljs.core.async.t_cljs$core$async34787(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34788));
});

}

return (new cljs.core.async.t_cljs$core$async34787(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34084__auto___36078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_34891){
var state_val_34892 = (state_34891[(1)]);
if((state_val_34892 === (7))){
var inst_34806 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34893_36079 = state_34891__$1;
(statearr_34893_36079[(2)] = inst_34806);

(statearr_34893_36079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (20))){
var inst_34818 = (state_34891[(7)]);
var state_34891__$1 = state_34891;
var statearr_34894_36080 = state_34891__$1;
(statearr_34894_36080[(2)] = inst_34818);

(statearr_34894_36080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (27))){
var state_34891__$1 = state_34891;
var statearr_34895_36081 = state_34891__$1;
(statearr_34895_36081[(2)] = null);

(statearr_34895_36081[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (1))){
var inst_34793 = (state_34891[(8)]);
var inst_34793__$1 = calc_state();
var inst_34795 = (inst_34793__$1 == null);
var inst_34796 = cljs.core.not(inst_34795);
var state_34891__$1 = (function (){var statearr_34896 = state_34891;
(statearr_34896[(8)] = inst_34793__$1);

return statearr_34896;
})();
if(inst_34796){
var statearr_34897_36086 = state_34891__$1;
(statearr_34897_36086[(1)] = (2));

} else {
var statearr_34898_36087 = state_34891__$1;
(statearr_34898_36087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (24))){
var inst_34865 = (state_34891[(9)]);
var inst_34851 = (state_34891[(10)]);
var inst_34842 = (state_34891[(11)]);
var inst_34865__$1 = (inst_34842.cljs$core$IFn$_invoke$arity$1 ? inst_34842.cljs$core$IFn$_invoke$arity$1(inst_34851) : inst_34842.call(null,inst_34851));
var state_34891__$1 = (function (){var statearr_34899 = state_34891;
(statearr_34899[(9)] = inst_34865__$1);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34865__$1)){
var statearr_34900_36088 = state_34891__$1;
(statearr_34900_36088[(1)] = (29));

} else {
var statearr_34901_36091 = state_34891__$1;
(statearr_34901_36091[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (4))){
var inst_34809 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34809)){
var statearr_34902_36092 = state_34891__$1;
(statearr_34902_36092[(1)] = (8));

} else {
var statearr_34903_36093 = state_34891__$1;
(statearr_34903_36093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (15))){
var inst_34836 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34836)){
var statearr_34904_36097 = state_34891__$1;
(statearr_34904_36097[(1)] = (19));

} else {
var statearr_34905_36098 = state_34891__$1;
(statearr_34905_36098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (21))){
var inst_34841 = (state_34891[(12)]);
var inst_34841__$1 = (state_34891[(2)]);
var inst_34842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34841__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34841__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34841__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34891__$1 = (function (){var statearr_34906 = state_34891;
(statearr_34906[(13)] = inst_34843);

(statearr_34906[(12)] = inst_34841__$1);

(statearr_34906[(11)] = inst_34842);

return statearr_34906;
})();
return cljs.core.async.ioc_alts_BANG_(state_34891__$1,(22),inst_34844);
} else {
if((state_val_34892 === (31))){
var inst_34873 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34873)){
var statearr_34907_36102 = state_34891__$1;
(statearr_34907_36102[(1)] = (32));

} else {
var statearr_34908_36103 = state_34891__$1;
(statearr_34908_36103[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (32))){
var inst_34850 = (state_34891[(14)]);
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34891__$1,(35),out,inst_34850);
} else {
if((state_val_34892 === (33))){
var inst_34841 = (state_34891[(12)]);
var inst_34818 = inst_34841;
var state_34891__$1 = (function (){var statearr_34909 = state_34891;
(statearr_34909[(7)] = inst_34818);

return statearr_34909;
})();
var statearr_34910_36104 = state_34891__$1;
(statearr_34910_36104[(2)] = null);

(statearr_34910_36104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (13))){
var inst_34818 = (state_34891[(7)]);
var inst_34825 = inst_34818.cljs$lang$protocol_mask$partition0$;
var inst_34826 = (inst_34825 & (64));
var inst_34827 = inst_34818.cljs$core$ISeq$;
var inst_34828 = (cljs.core.PROTOCOL_SENTINEL === inst_34827);
var inst_34829 = ((inst_34826) || (inst_34828));
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34829)){
var statearr_34911_36113 = state_34891__$1;
(statearr_34911_36113[(1)] = (16));

} else {
var statearr_34912_36114 = state_34891__$1;
(statearr_34912_36114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (22))){
var inst_34851 = (state_34891[(10)]);
var inst_34850 = (state_34891[(14)]);
var inst_34849 = (state_34891[(2)]);
var inst_34850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34849,(0),null);
var inst_34851__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34849,(1),null);
var inst_34852 = (inst_34850__$1 == null);
var inst_34853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34851__$1,change);
var inst_34854 = ((inst_34852) || (inst_34853));
var state_34891__$1 = (function (){var statearr_34913 = state_34891;
(statearr_34913[(10)] = inst_34851__$1);

(statearr_34913[(14)] = inst_34850__$1);

return statearr_34913;
})();
if(cljs.core.truth_(inst_34854)){
var statearr_34914_36116 = state_34891__$1;
(statearr_34914_36116[(1)] = (23));

} else {
var statearr_34915_36117 = state_34891__$1;
(statearr_34915_36117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (36))){
var inst_34841 = (state_34891[(12)]);
var inst_34818 = inst_34841;
var state_34891__$1 = (function (){var statearr_34916 = state_34891;
(statearr_34916[(7)] = inst_34818);

return statearr_34916;
})();
var statearr_34917_36118 = state_34891__$1;
(statearr_34917_36118[(2)] = null);

(statearr_34917_36118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (29))){
var inst_34865 = (state_34891[(9)]);
var state_34891__$1 = state_34891;
var statearr_34918_36120 = state_34891__$1;
(statearr_34918_36120[(2)] = inst_34865);

(statearr_34918_36120[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (6))){
var state_34891__$1 = state_34891;
var statearr_34919_36121 = state_34891__$1;
(statearr_34919_36121[(2)] = false);

(statearr_34919_36121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (28))){
var inst_34861 = (state_34891[(2)]);
var inst_34862 = calc_state();
var inst_34818 = inst_34862;
var state_34891__$1 = (function (){var statearr_34920 = state_34891;
(statearr_34920[(7)] = inst_34818);

(statearr_34920[(15)] = inst_34861);

return statearr_34920;
})();
var statearr_34921_36122 = state_34891__$1;
(statearr_34921_36122[(2)] = null);

(statearr_34921_36122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (25))){
var inst_34887 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34922_36127 = state_34891__$1;
(statearr_34922_36127[(2)] = inst_34887);

(statearr_34922_36127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (34))){
var inst_34885 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34923_36128 = state_34891__$1;
(statearr_34923_36128[(2)] = inst_34885);

(statearr_34923_36128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (17))){
var state_34891__$1 = state_34891;
var statearr_34924_36129 = state_34891__$1;
(statearr_34924_36129[(2)] = false);

(statearr_34924_36129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (3))){
var state_34891__$1 = state_34891;
var statearr_34925_36130 = state_34891__$1;
(statearr_34925_36130[(2)] = false);

(statearr_34925_36130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (12))){
var inst_34889 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34891__$1,inst_34889);
} else {
if((state_val_34892 === (2))){
var inst_34793 = (state_34891[(8)]);
var inst_34798 = inst_34793.cljs$lang$protocol_mask$partition0$;
var inst_34799 = (inst_34798 & (64));
var inst_34800 = inst_34793.cljs$core$ISeq$;
var inst_34801 = (cljs.core.PROTOCOL_SENTINEL === inst_34800);
var inst_34802 = ((inst_34799) || (inst_34801));
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34802)){
var statearr_34926_36131 = state_34891__$1;
(statearr_34926_36131[(1)] = (5));

} else {
var statearr_34927_36132 = state_34891__$1;
(statearr_34927_36132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (23))){
var inst_34850 = (state_34891[(14)]);
var inst_34856 = (inst_34850 == null);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34856)){
var statearr_34928_36133 = state_34891__$1;
(statearr_34928_36133[(1)] = (26));

} else {
var statearr_34929_36134 = state_34891__$1;
(statearr_34929_36134[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (35))){
var inst_34876 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34876)){
var statearr_34930_36135 = state_34891__$1;
(statearr_34930_36135[(1)] = (36));

} else {
var statearr_34931_36136 = state_34891__$1;
(statearr_34931_36136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (19))){
var inst_34818 = (state_34891[(7)]);
var inst_34838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34818);
var state_34891__$1 = state_34891;
var statearr_34932_36137 = state_34891__$1;
(statearr_34932_36137[(2)] = inst_34838);

(statearr_34932_36137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (11))){
var inst_34818 = (state_34891[(7)]);
var inst_34822 = (inst_34818 == null);
var inst_34823 = cljs.core.not(inst_34822);
var state_34891__$1 = state_34891;
if(inst_34823){
var statearr_34933_36139 = state_34891__$1;
(statearr_34933_36139[(1)] = (13));

} else {
var statearr_34934_36140 = state_34891__$1;
(statearr_34934_36140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (9))){
var inst_34793 = (state_34891[(8)]);
var state_34891__$1 = state_34891;
var statearr_34935_36141 = state_34891__$1;
(statearr_34935_36141[(2)] = inst_34793);

(statearr_34935_36141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (5))){
var state_34891__$1 = state_34891;
var statearr_34936_36142 = state_34891__$1;
(statearr_34936_36142[(2)] = true);

(statearr_34936_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (14))){
var state_34891__$1 = state_34891;
var statearr_34937_36143 = state_34891__$1;
(statearr_34937_36143[(2)] = false);

(statearr_34937_36143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (26))){
var inst_34851 = (state_34891[(10)]);
var inst_34858 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34851);
var state_34891__$1 = state_34891;
var statearr_34938_36144 = state_34891__$1;
(statearr_34938_36144[(2)] = inst_34858);

(statearr_34938_36144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (16))){
var state_34891__$1 = state_34891;
var statearr_34939_36145 = state_34891__$1;
(statearr_34939_36145[(2)] = true);

(statearr_34939_36145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (38))){
var inst_34881 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34940_36146 = state_34891__$1;
(statearr_34940_36146[(2)] = inst_34881);

(statearr_34940_36146[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (30))){
var inst_34843 = (state_34891[(13)]);
var inst_34851 = (state_34891[(10)]);
var inst_34842 = (state_34891[(11)]);
var inst_34868 = cljs.core.empty_QMARK_(inst_34842);
var inst_34869 = (inst_34843.cljs$core$IFn$_invoke$arity$1 ? inst_34843.cljs$core$IFn$_invoke$arity$1(inst_34851) : inst_34843.call(null,inst_34851));
var inst_34870 = cljs.core.not(inst_34869);
var inst_34871 = ((inst_34868) && (inst_34870));
var state_34891__$1 = state_34891;
var statearr_34941_36154 = state_34891__$1;
(statearr_34941_36154[(2)] = inst_34871);

(statearr_34941_36154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (10))){
var inst_34793 = (state_34891[(8)]);
var inst_34814 = (state_34891[(2)]);
var inst_34815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34814,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34814,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34814,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34818 = inst_34793;
var state_34891__$1 = (function (){var statearr_34942 = state_34891;
(statearr_34942[(7)] = inst_34818);

(statearr_34942[(16)] = inst_34816);

(statearr_34942[(17)] = inst_34817);

(statearr_34942[(18)] = inst_34815);

return statearr_34942;
})();
var statearr_34943_36155 = state_34891__$1;
(statearr_34943_36155[(2)] = null);

(statearr_34943_36155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (18))){
var inst_34833 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34944_36156 = state_34891__$1;
(statearr_34944_36156[(2)] = inst_34833);

(statearr_34944_36156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (37))){
var state_34891__$1 = state_34891;
var statearr_34945_36157 = state_34891__$1;
(statearr_34945_36157[(2)] = null);

(statearr_34945_36157[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (8))){
var inst_34793 = (state_34891[(8)]);
var inst_34811 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34793);
var state_34891__$1 = state_34891;
var statearr_34946_36158 = state_34891__$1;
(statearr_34946_36158[(2)] = inst_34811);

(statearr_34946_36158[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33995__auto__ = null;
var cljs$core$async$mix_$_state_machine__33995__auto____0 = (function (){
var statearr_34947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34947[(0)] = cljs$core$async$mix_$_state_machine__33995__auto__);

(statearr_34947[(1)] = (1));

return statearr_34947;
});
var cljs$core$async$mix_$_state_machine__33995__auto____1 = (function (state_34891){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_34891);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e34948){if((e34948 instanceof Object)){
var ex__33998__auto__ = e34948;
var statearr_34949_36160 = state_34891;
(statearr_34949_36160[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36161 = state_34891;
state_34891 = G__36161;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33995__auto__ = function(state_34891){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33995__auto____1.call(this,state_34891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33995__auto____0;
cljs$core$async$mix_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33995__auto____1;
return cljs$core$async$mix_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_34950 = f__34085__auto__();
(statearr_34950[(6)] = c__34084__auto___36078);

return statearr_34950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4363__auto__ = (((p == null))?null:p);
var m__4364__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4364__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4361__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4361__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4363__auto__ = (((p == null))?null:p);
var m__4364__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4364__auto__.call(null,p,v,ch));
} else {
var m__4361__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4361__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34952 = arguments.length;
switch (G__34952) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4363__auto__ = (((p == null))?null:p);
var m__4364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4364__auto__.call(null,p));
} else {
var m__4361__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4361__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4363__auto__ = (((p == null))?null:p);
var m__4364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4364__auto__.call(null,p,v));
} else {
var m__4361__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4361__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__34955 = arguments.length;
switch (G__34955) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4061__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34953_SHARP_){
if(cljs.core.truth_((p1__34953_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34953_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34953_SHARP_.call(null,topic)))){
return p1__34953_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34953_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34956 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34957){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34957 = meta34957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34958,meta34957__$1){
var self__ = this;
var _34958__$1 = this;
return (new cljs.core.async.t_cljs$core$async34956(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34957__$1));
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34958){
var self__ = this;
var _34958__$1 = this;
return self__.meta34957;
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34956.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34957","meta34957",393552074,null)], null);
}));

(cljs.core.async.t_cljs$core$async34956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34956");

(cljs.core.async.t_cljs$core$async34956.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async34956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34956.
 */
cljs.core.async.__GT_t_cljs$core$async34956 = (function cljs$core$async$__GT_t_cljs$core$async34956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34957){
return (new cljs.core.async.t_cljs$core$async34956(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34957));
});

}

return (new cljs.core.async.t_cljs$core$async34956(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34084__auto___36178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35030){
var state_val_35031 = (state_35030[(1)]);
if((state_val_35031 === (7))){
var inst_35026 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35032_36179 = state_35030__$1;
(statearr_35032_36179[(2)] = inst_35026);

(statearr_35032_36179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (20))){
var state_35030__$1 = state_35030;
var statearr_35033_36180 = state_35030__$1;
(statearr_35033_36180[(2)] = null);

(statearr_35033_36180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (1))){
var state_35030__$1 = state_35030;
var statearr_35034_36186 = state_35030__$1;
(statearr_35034_36186[(2)] = null);

(statearr_35034_36186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (24))){
var inst_35009 = (state_35030[(7)]);
var inst_35018 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35009);
var state_35030__$1 = state_35030;
var statearr_35035_36189 = state_35030__$1;
(statearr_35035_36189[(2)] = inst_35018);

(statearr_35035_36189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (4))){
var inst_34961 = (state_35030[(8)]);
var inst_34961__$1 = (state_35030[(2)]);
var inst_34962 = (inst_34961__$1 == null);
var state_35030__$1 = (function (){var statearr_35036 = state_35030;
(statearr_35036[(8)] = inst_34961__$1);

return statearr_35036;
})();
if(cljs.core.truth_(inst_34962)){
var statearr_35037_36190 = state_35030__$1;
(statearr_35037_36190[(1)] = (5));

} else {
var statearr_35038_36191 = state_35030__$1;
(statearr_35038_36191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (15))){
var inst_35003 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35039_36192 = state_35030__$1;
(statearr_35039_36192[(2)] = inst_35003);

(statearr_35039_36192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (21))){
var inst_35023 = (state_35030[(2)]);
var state_35030__$1 = (function (){var statearr_35040 = state_35030;
(statearr_35040[(9)] = inst_35023);

return statearr_35040;
})();
var statearr_35041_36193 = state_35030__$1;
(statearr_35041_36193[(2)] = null);

(statearr_35041_36193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (13))){
var inst_34985 = (state_35030[(10)]);
var inst_34987 = cljs.core.chunked_seq_QMARK_(inst_34985);
var state_35030__$1 = state_35030;
if(inst_34987){
var statearr_35042_36194 = state_35030__$1;
(statearr_35042_36194[(1)] = (16));

} else {
var statearr_35043_36195 = state_35030__$1;
(statearr_35043_36195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (22))){
var inst_35015 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
if(cljs.core.truth_(inst_35015)){
var statearr_35044_36196 = state_35030__$1;
(statearr_35044_36196[(1)] = (23));

} else {
var statearr_35045_36197 = state_35030__$1;
(statearr_35045_36197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (6))){
var inst_35009 = (state_35030[(7)]);
var inst_35011 = (state_35030[(11)]);
var inst_34961 = (state_35030[(8)]);
var inst_35009__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34961) : topic_fn.call(null,inst_34961));
var inst_35010 = cljs.core.deref(mults);
var inst_35011__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35010,inst_35009__$1);
var state_35030__$1 = (function (){var statearr_35046 = state_35030;
(statearr_35046[(7)] = inst_35009__$1);

(statearr_35046[(11)] = inst_35011__$1);

return statearr_35046;
})();
if(cljs.core.truth_(inst_35011__$1)){
var statearr_35047_36199 = state_35030__$1;
(statearr_35047_36199[(1)] = (19));

} else {
var statearr_35048_36200 = state_35030__$1;
(statearr_35048_36200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (25))){
var inst_35020 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35049_36201 = state_35030__$1;
(statearr_35049_36201[(2)] = inst_35020);

(statearr_35049_36201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (17))){
var inst_34985 = (state_35030[(10)]);
var inst_34994 = cljs.core.first(inst_34985);
var inst_34995 = cljs.core.async.muxch_STAR_(inst_34994);
var inst_34996 = cljs.core.async.close_BANG_(inst_34995);
var inst_34997 = cljs.core.next(inst_34985);
var inst_34971 = inst_34997;
var inst_34972 = null;
var inst_34973 = (0);
var inst_34974 = (0);
var state_35030__$1 = (function (){var statearr_35050 = state_35030;
(statearr_35050[(12)] = inst_34972);

(statearr_35050[(13)] = inst_34971);

(statearr_35050[(14)] = inst_34996);

(statearr_35050[(15)] = inst_34973);

(statearr_35050[(16)] = inst_34974);

return statearr_35050;
})();
var statearr_35051_36202 = state_35030__$1;
(statearr_35051_36202[(2)] = null);

(statearr_35051_36202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (3))){
var inst_35028 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35030__$1,inst_35028);
} else {
if((state_val_35031 === (12))){
var inst_35005 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35052_36204 = state_35030__$1;
(statearr_35052_36204[(2)] = inst_35005);

(statearr_35052_36204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (2))){
var state_35030__$1 = state_35030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35030__$1,(4),ch);
} else {
if((state_val_35031 === (23))){
var state_35030__$1 = state_35030;
var statearr_35053_36205 = state_35030__$1;
(statearr_35053_36205[(2)] = null);

(statearr_35053_36205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (19))){
var inst_35011 = (state_35030[(11)]);
var inst_34961 = (state_35030[(8)]);
var inst_35013 = cljs.core.async.muxch_STAR_(inst_35011);
var state_35030__$1 = state_35030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35030__$1,(22),inst_35013,inst_34961);
} else {
if((state_val_35031 === (11))){
var inst_34971 = (state_35030[(13)]);
var inst_34985 = (state_35030[(10)]);
var inst_34985__$1 = cljs.core.seq(inst_34971);
var state_35030__$1 = (function (){var statearr_35054 = state_35030;
(statearr_35054[(10)] = inst_34985__$1);

return statearr_35054;
})();
if(inst_34985__$1){
var statearr_35055_36206 = state_35030__$1;
(statearr_35055_36206[(1)] = (13));

} else {
var statearr_35056_36207 = state_35030__$1;
(statearr_35056_36207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (9))){
var inst_35007 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35057_36208 = state_35030__$1;
(statearr_35057_36208[(2)] = inst_35007);

(statearr_35057_36208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (5))){
var inst_34968 = cljs.core.deref(mults);
var inst_34969 = cljs.core.vals(inst_34968);
var inst_34970 = cljs.core.seq(inst_34969);
var inst_34971 = inst_34970;
var inst_34972 = null;
var inst_34973 = (0);
var inst_34974 = (0);
var state_35030__$1 = (function (){var statearr_35058 = state_35030;
(statearr_35058[(12)] = inst_34972);

(statearr_35058[(13)] = inst_34971);

(statearr_35058[(15)] = inst_34973);

(statearr_35058[(16)] = inst_34974);

return statearr_35058;
})();
var statearr_35059_36209 = state_35030__$1;
(statearr_35059_36209[(2)] = null);

(statearr_35059_36209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (14))){
var state_35030__$1 = state_35030;
var statearr_35063_36210 = state_35030__$1;
(statearr_35063_36210[(2)] = null);

(statearr_35063_36210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (16))){
var inst_34985 = (state_35030[(10)]);
var inst_34989 = cljs.core.chunk_first(inst_34985);
var inst_34990 = cljs.core.chunk_rest(inst_34985);
var inst_34991 = cljs.core.count(inst_34989);
var inst_34971 = inst_34990;
var inst_34972 = inst_34989;
var inst_34973 = inst_34991;
var inst_34974 = (0);
var state_35030__$1 = (function (){var statearr_35064 = state_35030;
(statearr_35064[(12)] = inst_34972);

(statearr_35064[(13)] = inst_34971);

(statearr_35064[(15)] = inst_34973);

(statearr_35064[(16)] = inst_34974);

return statearr_35064;
})();
var statearr_35065_36215 = state_35030__$1;
(statearr_35065_36215[(2)] = null);

(statearr_35065_36215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (10))){
var inst_34972 = (state_35030[(12)]);
var inst_34971 = (state_35030[(13)]);
var inst_34973 = (state_35030[(15)]);
var inst_34974 = (state_35030[(16)]);
var inst_34979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34972,inst_34974);
var inst_34980 = cljs.core.async.muxch_STAR_(inst_34979);
var inst_34981 = cljs.core.async.close_BANG_(inst_34980);
var inst_34982 = (inst_34974 + (1));
var tmp35060 = inst_34972;
var tmp35061 = inst_34971;
var tmp35062 = inst_34973;
var inst_34971__$1 = tmp35061;
var inst_34972__$1 = tmp35060;
var inst_34973__$1 = tmp35062;
var inst_34974__$1 = inst_34982;
var state_35030__$1 = (function (){var statearr_35066 = state_35030;
(statearr_35066[(12)] = inst_34972__$1);

(statearr_35066[(13)] = inst_34971__$1);

(statearr_35066[(15)] = inst_34973__$1);

(statearr_35066[(17)] = inst_34981);

(statearr_35066[(16)] = inst_34974__$1);

return statearr_35066;
})();
var statearr_35067_36221 = state_35030__$1;
(statearr_35067_36221[(2)] = null);

(statearr_35067_36221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (18))){
var inst_35000 = (state_35030[(2)]);
var state_35030__$1 = state_35030;
var statearr_35068_36223 = state_35030__$1;
(statearr_35068_36223[(2)] = inst_35000);

(statearr_35068_36223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35031 === (8))){
var inst_34973 = (state_35030[(15)]);
var inst_34974 = (state_35030[(16)]);
var inst_34976 = (inst_34974 < inst_34973);
var inst_34977 = inst_34976;
var state_35030__$1 = state_35030;
if(cljs.core.truth_(inst_34977)){
var statearr_35069_36224 = state_35030__$1;
(statearr_35069_36224[(1)] = (10));

} else {
var statearr_35070_36225 = state_35030__$1;
(statearr_35070_36225[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35030){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35030);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__33998__auto__ = e35072;
var statearr_35073_36226 = state_35030;
(statearr_35073_36226[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36227 = state_35030;
state_35030 = G__36227;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35074 = f__34085__auto__();
(statearr_35074[(6)] = c__34084__auto___36178);

return statearr_35074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35076 = arguments.length;
switch (G__35076) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35078 = arguments.length;
switch (G__35078) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__35080 = arguments.length;
switch (G__35080) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34084__auto___36236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35119){
var state_val_35120 = (state_35119[(1)]);
if((state_val_35120 === (7))){
var state_35119__$1 = state_35119;
var statearr_35121_36237 = state_35119__$1;
(statearr_35121_36237[(2)] = null);

(statearr_35121_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (1))){
var state_35119__$1 = state_35119;
var statearr_35122_36238 = state_35119__$1;
(statearr_35122_36238[(2)] = null);

(statearr_35122_36238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (4))){
var inst_35083 = (state_35119[(7)]);
var inst_35085 = (inst_35083 < cnt);
var state_35119__$1 = state_35119;
if(cljs.core.truth_(inst_35085)){
var statearr_35123_36239 = state_35119__$1;
(statearr_35123_36239[(1)] = (6));

} else {
var statearr_35124_36241 = state_35119__$1;
(statearr_35124_36241[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (15))){
var inst_35115 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
var statearr_35125_36242 = state_35119__$1;
(statearr_35125_36242[(2)] = inst_35115);

(statearr_35125_36242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (13))){
var inst_35108 = cljs.core.async.close_BANG_(out);
var state_35119__$1 = state_35119;
var statearr_35126_36244 = state_35119__$1;
(statearr_35126_36244[(2)] = inst_35108);

(statearr_35126_36244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (6))){
var state_35119__$1 = state_35119;
var statearr_35127_36245 = state_35119__$1;
(statearr_35127_36245[(2)] = null);

(statearr_35127_36245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (3))){
var inst_35117 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35119__$1,inst_35117);
} else {
if((state_val_35120 === (12))){
var inst_35105 = (state_35119[(8)]);
var inst_35105__$1 = (state_35119[(2)]);
var inst_35106 = cljs.core.some(cljs.core.nil_QMARK_,inst_35105__$1);
var state_35119__$1 = (function (){var statearr_35128 = state_35119;
(statearr_35128[(8)] = inst_35105__$1);

return statearr_35128;
})();
if(cljs.core.truth_(inst_35106)){
var statearr_35129_36249 = state_35119__$1;
(statearr_35129_36249[(1)] = (13));

} else {
var statearr_35130_36250 = state_35119__$1;
(statearr_35130_36250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (2))){
var inst_35082 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35083 = (0);
var state_35119__$1 = (function (){var statearr_35131 = state_35119;
(statearr_35131[(7)] = inst_35083);

(statearr_35131[(9)] = inst_35082);

return statearr_35131;
})();
var statearr_35132_36258 = state_35119__$1;
(statearr_35132_36258[(2)] = null);

(statearr_35132_36258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (11))){
var inst_35083 = (state_35119[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35119,(10),Object,null,(9));
var inst_35092 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35083) : chs__$1.call(null,inst_35083));
var inst_35093 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35083) : done.call(null,inst_35083));
var inst_35094 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35092,inst_35093);
var state_35119__$1 = state_35119;
var statearr_35133_36259 = state_35119__$1;
(statearr_35133_36259[(2)] = inst_35094);


cljs.core.async.impl.ioc_helpers.process_exception(state_35119__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (9))){
var inst_35083 = (state_35119[(7)]);
var inst_35096 = (state_35119[(2)]);
var inst_35097 = (inst_35083 + (1));
var inst_35083__$1 = inst_35097;
var state_35119__$1 = (function (){var statearr_35134 = state_35119;
(statearr_35134[(7)] = inst_35083__$1);

(statearr_35134[(10)] = inst_35096);

return statearr_35134;
})();
var statearr_35135_36263 = state_35119__$1;
(statearr_35135_36263[(2)] = null);

(statearr_35135_36263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (5))){
var inst_35103 = (state_35119[(2)]);
var state_35119__$1 = (function (){var statearr_35136 = state_35119;
(statearr_35136[(11)] = inst_35103);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35119__$1,(12),dchan);
} else {
if((state_val_35120 === (14))){
var inst_35105 = (state_35119[(8)]);
var inst_35110 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35105);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35119__$1,(16),out,inst_35110);
} else {
if((state_val_35120 === (16))){
var inst_35112 = (state_35119[(2)]);
var state_35119__$1 = (function (){var statearr_35137 = state_35119;
(statearr_35137[(12)] = inst_35112);

return statearr_35137;
})();
var statearr_35138_36267 = state_35119__$1;
(statearr_35138_36267[(2)] = null);

(statearr_35138_36267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (10))){
var inst_35087 = (state_35119[(2)]);
var inst_35088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35119__$1 = (function (){var statearr_35139 = state_35119;
(statearr_35139[(13)] = inst_35087);

return statearr_35139;
})();
var statearr_35140_36271 = state_35119__$1;
(statearr_35140_36271[(2)] = inst_35088);


cljs.core.async.impl.ioc_helpers.process_exception(state_35119__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (8))){
var inst_35101 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
var statearr_35141_36272 = state_35119__$1;
(statearr_35141_36272[(2)] = inst_35101);

(statearr_35141_36272[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35142[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35142[(1)] = (1));

return statearr_35142;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35119){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35119);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35143){if((e35143 instanceof Object)){
var ex__33998__auto__ = e35143;
var statearr_35144_36274 = state_35119;
(statearr_35144_36274[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36275 = state_35119;
state_35119 = G__36275;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35145 = f__34085__auto__();
(statearr_35145[(6)] = c__34084__auto___36236);

return statearr_35145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35148 = arguments.length;
switch (G__35148) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35180){
var state_val_35181 = (state_35180[(1)]);
if((state_val_35181 === (7))){
var inst_35159 = (state_35180[(7)]);
var inst_35160 = (state_35180[(8)]);
var inst_35159__$1 = (state_35180[(2)]);
var inst_35160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35159__$1,(0),null);
var inst_35161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35159__$1,(1),null);
var inst_35162 = (inst_35160__$1 == null);
var state_35180__$1 = (function (){var statearr_35182 = state_35180;
(statearr_35182[(7)] = inst_35159__$1);

(statearr_35182[(9)] = inst_35161);

(statearr_35182[(8)] = inst_35160__$1);

return statearr_35182;
})();
if(cljs.core.truth_(inst_35162)){
var statearr_35183_36293 = state_35180__$1;
(statearr_35183_36293[(1)] = (8));

} else {
var statearr_35184_36294 = state_35180__$1;
(statearr_35184_36294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (1))){
var inst_35149 = cljs.core.vec(chs);
var inst_35150 = inst_35149;
var state_35180__$1 = (function (){var statearr_35185 = state_35180;
(statearr_35185[(10)] = inst_35150);

return statearr_35185;
})();
var statearr_35186_36295 = state_35180__$1;
(statearr_35186_36295[(2)] = null);

(statearr_35186_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (4))){
var inst_35150 = (state_35180[(10)]);
var state_35180__$1 = state_35180;
return cljs.core.async.ioc_alts_BANG_(state_35180__$1,(7),inst_35150);
} else {
if((state_val_35181 === (6))){
var inst_35176 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35187_36296 = state_35180__$1;
(statearr_35187_36296[(2)] = inst_35176);

(statearr_35187_36296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (3))){
var inst_35178 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35180__$1,inst_35178);
} else {
if((state_val_35181 === (2))){
var inst_35150 = (state_35180[(10)]);
var inst_35152 = cljs.core.count(inst_35150);
var inst_35153 = (inst_35152 > (0));
var state_35180__$1 = state_35180;
if(cljs.core.truth_(inst_35153)){
var statearr_35189_36297 = state_35180__$1;
(statearr_35189_36297[(1)] = (4));

} else {
var statearr_35190_36298 = state_35180__$1;
(statearr_35190_36298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (11))){
var inst_35150 = (state_35180[(10)]);
var inst_35169 = (state_35180[(2)]);
var tmp35188 = inst_35150;
var inst_35150__$1 = tmp35188;
var state_35180__$1 = (function (){var statearr_35191 = state_35180;
(statearr_35191[(11)] = inst_35169);

(statearr_35191[(10)] = inst_35150__$1);

return statearr_35191;
})();
var statearr_35192_36305 = state_35180__$1;
(statearr_35192_36305[(2)] = null);

(statearr_35192_36305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (9))){
var inst_35160 = (state_35180[(8)]);
var state_35180__$1 = state_35180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35180__$1,(11),out,inst_35160);
} else {
if((state_val_35181 === (5))){
var inst_35174 = cljs.core.async.close_BANG_(out);
var state_35180__$1 = state_35180;
var statearr_35193_36306 = state_35180__$1;
(statearr_35193_36306[(2)] = inst_35174);

(statearr_35193_36306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (10))){
var inst_35172 = (state_35180[(2)]);
var state_35180__$1 = state_35180;
var statearr_35194_36307 = state_35180__$1;
(statearr_35194_36307[(2)] = inst_35172);

(statearr_35194_36307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35181 === (8))){
var inst_35159 = (state_35180[(7)]);
var inst_35161 = (state_35180[(9)]);
var inst_35160 = (state_35180[(8)]);
var inst_35150 = (state_35180[(10)]);
var inst_35164 = (function (){var cs = inst_35150;
var vec__35155 = inst_35159;
var v = inst_35160;
var c = inst_35161;
return (function (p1__35146_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35146_SHARP_);
});
})();
var inst_35165 = cljs.core.filterv(inst_35164,inst_35150);
var inst_35150__$1 = inst_35165;
var state_35180__$1 = (function (){var statearr_35195 = state_35180;
(statearr_35195[(10)] = inst_35150__$1);

return statearr_35195;
})();
var statearr_35196_36308 = state_35180__$1;
(statearr_35196_36308[(2)] = null);

(statearr_35196_36308[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35197[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35197[(1)] = (1));

return statearr_35197;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35180){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35180);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35198){if((e35198 instanceof Object)){
var ex__33998__auto__ = e35198;
var statearr_35199_36315 = state_35180;
(statearr_35199_36315[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36316 = state_35180;
state_35180 = G__36316;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35200 = f__34085__auto__();
(statearr_35200[(6)] = c__34084__auto___36292);

return statearr_35200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35202 = arguments.length;
switch (G__35202) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35226){
var state_val_35227 = (state_35226[(1)]);
if((state_val_35227 === (7))){
var inst_35208 = (state_35226[(7)]);
var inst_35208__$1 = (state_35226[(2)]);
var inst_35209 = (inst_35208__$1 == null);
var inst_35210 = cljs.core.not(inst_35209);
var state_35226__$1 = (function (){var statearr_35228 = state_35226;
(statearr_35228[(7)] = inst_35208__$1);

return statearr_35228;
})();
if(inst_35210){
var statearr_35229_36319 = state_35226__$1;
(statearr_35229_36319[(1)] = (8));

} else {
var statearr_35230_36320 = state_35226__$1;
(statearr_35230_36320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (1))){
var inst_35203 = (0);
var state_35226__$1 = (function (){var statearr_35231 = state_35226;
(statearr_35231[(8)] = inst_35203);

return statearr_35231;
})();
var statearr_35232_36327 = state_35226__$1;
(statearr_35232_36327[(2)] = null);

(statearr_35232_36327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (4))){
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35226__$1,(7),ch);
} else {
if((state_val_35227 === (6))){
var inst_35221 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
var statearr_35233_36328 = state_35226__$1;
(statearr_35233_36328[(2)] = inst_35221);

(statearr_35233_36328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (3))){
var inst_35223 = (state_35226[(2)]);
var inst_35224 = cljs.core.async.close_BANG_(out);
var state_35226__$1 = (function (){var statearr_35234 = state_35226;
(statearr_35234[(9)] = inst_35223);

return statearr_35234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35226__$1,inst_35224);
} else {
if((state_val_35227 === (2))){
var inst_35203 = (state_35226[(8)]);
var inst_35205 = (inst_35203 < n);
var state_35226__$1 = state_35226;
if(cljs.core.truth_(inst_35205)){
var statearr_35235_36329 = state_35226__$1;
(statearr_35235_36329[(1)] = (4));

} else {
var statearr_35236_36330 = state_35226__$1;
(statearr_35236_36330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (11))){
var inst_35203 = (state_35226[(8)]);
var inst_35213 = (state_35226[(2)]);
var inst_35214 = (inst_35203 + (1));
var inst_35203__$1 = inst_35214;
var state_35226__$1 = (function (){var statearr_35237 = state_35226;
(statearr_35237[(10)] = inst_35213);

(statearr_35237[(8)] = inst_35203__$1);

return statearr_35237;
})();
var statearr_35238_36331 = state_35226__$1;
(statearr_35238_36331[(2)] = null);

(statearr_35238_36331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (9))){
var state_35226__$1 = state_35226;
var statearr_35239_36332 = state_35226__$1;
(statearr_35239_36332[(2)] = null);

(statearr_35239_36332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (5))){
var state_35226__$1 = state_35226;
var statearr_35240_36333 = state_35226__$1;
(statearr_35240_36333[(2)] = null);

(statearr_35240_36333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (10))){
var inst_35218 = (state_35226[(2)]);
var state_35226__$1 = state_35226;
var statearr_35241_36337 = state_35226__$1;
(statearr_35241_36337[(2)] = inst_35218);

(statearr_35241_36337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35227 === (8))){
var inst_35208 = (state_35226[(7)]);
var state_35226__$1 = state_35226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35226__$1,(11),out,inst_35208);
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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35242[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35242[(1)] = (1));

return statearr_35242;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35226){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35226);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35243){if((e35243 instanceof Object)){
var ex__33998__auto__ = e35243;
var statearr_35244_36338 = state_35226;
(statearr_35244_36338[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36342 = state_35226;
state_35226 = G__36342;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35245 = f__34085__auto__();
(statearr_35245[(6)] = c__34084__auto___36318);

return statearr_35245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35247 = (function (f,ch,meta35248){
this.f = f;
this.ch = ch;
this.meta35248 = meta35248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35249,meta35248__$1){
var self__ = this;
var _35249__$1 = this;
return (new cljs.core.async.t_cljs$core$async35247(self__.f,self__.ch,meta35248__$1));
}));

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35249){
var self__ = this;
var _35249__$1 = this;
return self__.meta35248;
}));

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35250 = (function (f,ch,meta35248,_,fn1,meta35251){
this.f = f;
this.ch = ch;
this.meta35248 = meta35248;
this._ = _;
this.fn1 = fn1;
this.meta35251 = meta35251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35252,meta35251__$1){
var self__ = this;
var _35252__$1 = this;
return (new cljs.core.async.t_cljs$core$async35250(self__.f,self__.ch,self__.meta35248,self__._,self__.fn1,meta35251__$1));
}));

(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35252){
var self__ = this;
var _35252__$1 = this;
return self__.meta35251;
}));

(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35246_SHARP_){
var G__35253 = (((p1__35246_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35246_SHARP_) : self__.f.call(null,p1__35246_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35253) : f1.call(null,G__35253));
});
}));

(cljs.core.async.t_cljs$core$async35250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35248","meta35248",362862112,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35247","cljs.core.async/t_cljs$core$async35247",529385559,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35251","meta35251",819027276,null)], null);
}));

(cljs.core.async.t_cljs$core$async35250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35250");

(cljs.core.async.t_cljs$core$async35250.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async35250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35250.
 */
cljs.core.async.__GT_t_cljs$core$async35250 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35250(f__$1,ch__$1,meta35248__$1,___$2,fn1__$1,meta35251){
return (new cljs.core.async.t_cljs$core$async35250(f__$1,ch__$1,meta35248__$1,___$2,fn1__$1,meta35251));
});

}

return (new cljs.core.async.t_cljs$core$async35250(self__.f,self__.ch,self__.meta35248,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4050__auto__ = ret;
if(cljs.core.truth_(and__4050__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4050__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35254 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35254) : self__.f.call(null,G__35254));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35248","meta35248",362862112,null)], null);
}));

(cljs.core.async.t_cljs$core$async35247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35247");

(cljs.core.async.t_cljs$core$async35247.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async35247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35247.
 */
cljs.core.async.__GT_t_cljs$core$async35247 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35247(f__$1,ch__$1,meta35248){
return (new cljs.core.async.t_cljs$core$async35247(f__$1,ch__$1,meta35248));
});

}

return (new cljs.core.async.t_cljs$core$async35247(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35255 = (function (f,ch,meta35256){
this.f = f;
this.ch = ch;
this.meta35256 = meta35256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35257,meta35256__$1){
var self__ = this;
var _35257__$1 = this;
return (new cljs.core.async.t_cljs$core$async35255(self__.f,self__.ch,meta35256__$1));
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35257){
var self__ = this;
var _35257__$1 = this;
return self__.meta35256;
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35256","meta35256",162624423,null)], null);
}));

(cljs.core.async.t_cljs$core$async35255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35255");

(cljs.core.async.t_cljs$core$async35255.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async35255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35255.
 */
cljs.core.async.__GT_t_cljs$core$async35255 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35255(f__$1,ch__$1,meta35256){
return (new cljs.core.async.t_cljs$core$async35255(f__$1,ch__$1,meta35256));
});

}

return (new cljs.core.async.t_cljs$core$async35255(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35258 = (function (p,ch,meta35259){
this.p = p;
this.ch = ch;
this.meta35259 = meta35259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35260,meta35259__$1){
var self__ = this;
var _35260__$1 = this;
return (new cljs.core.async.t_cljs$core$async35258(self__.p,self__.ch,meta35259__$1));
}));

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35260){
var self__ = this;
var _35260__$1 = this;
return self__.meta35259;
}));

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35259","meta35259",345570239,null)], null);
}));

(cljs.core.async.t_cljs$core$async35258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35258");

(cljs.core.async.t_cljs$core$async35258.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"cljs.core.async/t_cljs$core$async35258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35258.
 */
cljs.core.async.__GT_t_cljs$core$async35258 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35258(p__$1,ch__$1,meta35259){
return (new cljs.core.async.t_cljs$core$async35258(p__$1,ch__$1,meta35259));
});

}

return (new cljs.core.async.t_cljs$core$async35258(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35262 = arguments.length;
switch (G__35262) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35283){
var state_val_35284 = (state_35283[(1)]);
if((state_val_35284 === (7))){
var inst_35279 = (state_35283[(2)]);
var state_35283__$1 = state_35283;
var statearr_35285_36363 = state_35283__$1;
(statearr_35285_36363[(2)] = inst_35279);

(statearr_35285_36363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (1))){
var state_35283__$1 = state_35283;
var statearr_35286_36364 = state_35283__$1;
(statearr_35286_36364[(2)] = null);

(statearr_35286_36364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (4))){
var inst_35265 = (state_35283[(7)]);
var inst_35265__$1 = (state_35283[(2)]);
var inst_35266 = (inst_35265__$1 == null);
var state_35283__$1 = (function (){var statearr_35287 = state_35283;
(statearr_35287[(7)] = inst_35265__$1);

return statearr_35287;
})();
if(cljs.core.truth_(inst_35266)){
var statearr_35288_36365 = state_35283__$1;
(statearr_35288_36365[(1)] = (5));

} else {
var statearr_35289_36366 = state_35283__$1;
(statearr_35289_36366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (6))){
var inst_35265 = (state_35283[(7)]);
var inst_35270 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35265) : p.call(null,inst_35265));
var state_35283__$1 = state_35283;
if(cljs.core.truth_(inst_35270)){
var statearr_35290_36367 = state_35283__$1;
(statearr_35290_36367[(1)] = (8));

} else {
var statearr_35291_36368 = state_35283__$1;
(statearr_35291_36368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (3))){
var inst_35281 = (state_35283[(2)]);
var state_35283__$1 = state_35283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35283__$1,inst_35281);
} else {
if((state_val_35284 === (2))){
var state_35283__$1 = state_35283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35283__$1,(4),ch);
} else {
if((state_val_35284 === (11))){
var inst_35273 = (state_35283[(2)]);
var state_35283__$1 = state_35283;
var statearr_35292_36369 = state_35283__$1;
(statearr_35292_36369[(2)] = inst_35273);

(statearr_35292_36369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (9))){
var state_35283__$1 = state_35283;
var statearr_35293_36370 = state_35283__$1;
(statearr_35293_36370[(2)] = null);

(statearr_35293_36370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (5))){
var inst_35268 = cljs.core.async.close_BANG_(out);
var state_35283__$1 = state_35283;
var statearr_35294_36371 = state_35283__$1;
(statearr_35294_36371[(2)] = inst_35268);

(statearr_35294_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (10))){
var inst_35276 = (state_35283[(2)]);
var state_35283__$1 = (function (){var statearr_35295 = state_35283;
(statearr_35295[(8)] = inst_35276);

return statearr_35295;
})();
var statearr_35296_36372 = state_35283__$1;
(statearr_35296_36372[(2)] = null);

(statearr_35296_36372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35284 === (8))){
var inst_35265 = (state_35283[(7)]);
var state_35283__$1 = state_35283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35283__$1,(11),out,inst_35265);
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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35297 = [null,null,null,null,null,null,null,null,null];
(statearr_35297[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35297[(1)] = (1));

return statearr_35297;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35283){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35283);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35298){if((e35298 instanceof Object)){
var ex__33998__auto__ = e35298;
var statearr_35299_36373 = state_35283;
(statearr_35299_36373[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_35283;
state_35283 = G__36374;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35300 = f__34085__auto__();
(statearr_35300[(6)] = c__34084__auto___36362);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35302 = arguments.length;
switch (G__35302) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35364){
var state_val_35365 = (state_35364[(1)]);
if((state_val_35365 === (7))){
var inst_35360 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
var statearr_35366_36377 = state_35364__$1;
(statearr_35366_36377[(2)] = inst_35360);

(statearr_35366_36377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (20))){
var inst_35330 = (state_35364[(7)]);
var inst_35341 = (state_35364[(2)]);
var inst_35342 = cljs.core.next(inst_35330);
var inst_35316 = inst_35342;
var inst_35317 = null;
var inst_35318 = (0);
var inst_35319 = (0);
var state_35364__$1 = (function (){var statearr_35367 = state_35364;
(statearr_35367[(8)] = inst_35317);

(statearr_35367[(9)] = inst_35341);

(statearr_35367[(10)] = inst_35319);

(statearr_35367[(11)] = inst_35318);

(statearr_35367[(12)] = inst_35316);

return statearr_35367;
})();
var statearr_35368_36379 = state_35364__$1;
(statearr_35368_36379[(2)] = null);

(statearr_35368_36379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (1))){
var state_35364__$1 = state_35364;
var statearr_35369_36381 = state_35364__$1;
(statearr_35369_36381[(2)] = null);

(statearr_35369_36381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (4))){
var inst_35305 = (state_35364[(13)]);
var inst_35305__$1 = (state_35364[(2)]);
var inst_35306 = (inst_35305__$1 == null);
var state_35364__$1 = (function (){var statearr_35370 = state_35364;
(statearr_35370[(13)] = inst_35305__$1);

return statearr_35370;
})();
if(cljs.core.truth_(inst_35306)){
var statearr_35371_36382 = state_35364__$1;
(statearr_35371_36382[(1)] = (5));

} else {
var statearr_35372_36384 = state_35364__$1;
(statearr_35372_36384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (15))){
var state_35364__$1 = state_35364;
var statearr_35376_36385 = state_35364__$1;
(statearr_35376_36385[(2)] = null);

(statearr_35376_36385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (21))){
var state_35364__$1 = state_35364;
var statearr_35377_36386 = state_35364__$1;
(statearr_35377_36386[(2)] = null);

(statearr_35377_36386[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (13))){
var inst_35317 = (state_35364[(8)]);
var inst_35319 = (state_35364[(10)]);
var inst_35318 = (state_35364[(11)]);
var inst_35316 = (state_35364[(12)]);
var inst_35326 = (state_35364[(2)]);
var inst_35327 = (inst_35319 + (1));
var tmp35373 = inst_35317;
var tmp35374 = inst_35318;
var tmp35375 = inst_35316;
var inst_35316__$1 = tmp35375;
var inst_35317__$1 = tmp35373;
var inst_35318__$1 = tmp35374;
var inst_35319__$1 = inst_35327;
var state_35364__$1 = (function (){var statearr_35378 = state_35364;
(statearr_35378[(8)] = inst_35317__$1);

(statearr_35378[(10)] = inst_35319__$1);

(statearr_35378[(14)] = inst_35326);

(statearr_35378[(11)] = inst_35318__$1);

(statearr_35378[(12)] = inst_35316__$1);

return statearr_35378;
})();
var statearr_35379_36388 = state_35364__$1;
(statearr_35379_36388[(2)] = null);

(statearr_35379_36388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (22))){
var state_35364__$1 = state_35364;
var statearr_35380_36389 = state_35364__$1;
(statearr_35380_36389[(2)] = null);

(statearr_35380_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (6))){
var inst_35305 = (state_35364[(13)]);
var inst_35314 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35305) : f.call(null,inst_35305));
var inst_35315 = cljs.core.seq(inst_35314);
var inst_35316 = inst_35315;
var inst_35317 = null;
var inst_35318 = (0);
var inst_35319 = (0);
var state_35364__$1 = (function (){var statearr_35381 = state_35364;
(statearr_35381[(8)] = inst_35317);

(statearr_35381[(10)] = inst_35319);

(statearr_35381[(11)] = inst_35318);

(statearr_35381[(12)] = inst_35316);

return statearr_35381;
})();
var statearr_35382_36390 = state_35364__$1;
(statearr_35382_36390[(2)] = null);

(statearr_35382_36390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (17))){
var inst_35330 = (state_35364[(7)]);
var inst_35334 = cljs.core.chunk_first(inst_35330);
var inst_35335 = cljs.core.chunk_rest(inst_35330);
var inst_35336 = cljs.core.count(inst_35334);
var inst_35316 = inst_35335;
var inst_35317 = inst_35334;
var inst_35318 = inst_35336;
var inst_35319 = (0);
var state_35364__$1 = (function (){var statearr_35383 = state_35364;
(statearr_35383[(8)] = inst_35317);

(statearr_35383[(10)] = inst_35319);

(statearr_35383[(11)] = inst_35318);

(statearr_35383[(12)] = inst_35316);

return statearr_35383;
})();
var statearr_35384_36392 = state_35364__$1;
(statearr_35384_36392[(2)] = null);

(statearr_35384_36392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (3))){
var inst_35362 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35364__$1,inst_35362);
} else {
if((state_val_35365 === (12))){
var inst_35350 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
var statearr_35385_36393 = state_35364__$1;
(statearr_35385_36393[(2)] = inst_35350);

(statearr_35385_36393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (2))){
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35364__$1,(4),in$);
} else {
if((state_val_35365 === (23))){
var inst_35358 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
var statearr_35386_36394 = state_35364__$1;
(statearr_35386_36394[(2)] = inst_35358);

(statearr_35386_36394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (19))){
var inst_35345 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
var statearr_35387_36395 = state_35364__$1;
(statearr_35387_36395[(2)] = inst_35345);

(statearr_35387_36395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (11))){
var inst_35330 = (state_35364[(7)]);
var inst_35316 = (state_35364[(12)]);
var inst_35330__$1 = cljs.core.seq(inst_35316);
var state_35364__$1 = (function (){var statearr_35388 = state_35364;
(statearr_35388[(7)] = inst_35330__$1);

return statearr_35388;
})();
if(inst_35330__$1){
var statearr_35389_36396 = state_35364__$1;
(statearr_35389_36396[(1)] = (14));

} else {
var statearr_35390_36397 = state_35364__$1;
(statearr_35390_36397[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (9))){
var inst_35352 = (state_35364[(2)]);
var inst_35353 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35364__$1 = (function (){var statearr_35391 = state_35364;
(statearr_35391[(15)] = inst_35352);

return statearr_35391;
})();
if(cljs.core.truth_(inst_35353)){
var statearr_35392_36399 = state_35364__$1;
(statearr_35392_36399[(1)] = (21));

} else {
var statearr_35393_36403 = state_35364__$1;
(statearr_35393_36403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (5))){
var inst_35308 = cljs.core.async.close_BANG_(out);
var state_35364__$1 = state_35364;
var statearr_35394_36408 = state_35364__$1;
(statearr_35394_36408[(2)] = inst_35308);

(statearr_35394_36408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (14))){
var inst_35330 = (state_35364[(7)]);
var inst_35332 = cljs.core.chunked_seq_QMARK_(inst_35330);
var state_35364__$1 = state_35364;
if(inst_35332){
var statearr_35395_36413 = state_35364__$1;
(statearr_35395_36413[(1)] = (17));

} else {
var statearr_35396_36414 = state_35364__$1;
(statearr_35396_36414[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (16))){
var inst_35348 = (state_35364[(2)]);
var state_35364__$1 = state_35364;
var statearr_35397_36416 = state_35364__$1;
(statearr_35397_36416[(2)] = inst_35348);

(statearr_35397_36416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35365 === (10))){
var inst_35317 = (state_35364[(8)]);
var inst_35319 = (state_35364[(10)]);
var inst_35324 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35317,inst_35319);
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35364__$1,(13),out,inst_35324);
} else {
if((state_val_35365 === (18))){
var inst_35330 = (state_35364[(7)]);
var inst_35339 = cljs.core.first(inst_35330);
var state_35364__$1 = state_35364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35364__$1,(20),out,inst_35339);
} else {
if((state_val_35365 === (8))){
var inst_35319 = (state_35364[(10)]);
var inst_35318 = (state_35364[(11)]);
var inst_35321 = (inst_35319 < inst_35318);
var inst_35322 = inst_35321;
var state_35364__$1 = state_35364;
if(cljs.core.truth_(inst_35322)){
var statearr_35398_36425 = state_35364__$1;
(statearr_35398_36425[(1)] = (10));

} else {
var statearr_35399_36426 = state_35364__$1;
(statearr_35399_36426[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____0 = (function (){
var statearr_35400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35400[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__);

(statearr_35400[(1)] = (1));

return statearr_35400;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____1 = (function (state_35364){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35364);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35401){if((e35401 instanceof Object)){
var ex__33998__auto__ = e35401;
var statearr_35402_36427 = state_35364;
(statearr_35402_36427[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35401;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36428 = state_35364;
state_35364 = G__36428;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__ = function(state_35364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____1.call(this,state_35364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33995__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35403 = f__34085__auto__();
(statearr_35403[(6)] = c__34084__auto__);

return statearr_35403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35405 = arguments.length;
switch (G__35405) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35407 = arguments.length;
switch (G__35407) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35409 = arguments.length;
switch (G__35409) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35433){
var state_val_35434 = (state_35433[(1)]);
if((state_val_35434 === (7))){
var inst_35428 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35435_36454 = state_35433__$1;
(statearr_35435_36454[(2)] = inst_35428);

(statearr_35435_36454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (1))){
var inst_35410 = null;
var state_35433__$1 = (function (){var statearr_35436 = state_35433;
(statearr_35436[(7)] = inst_35410);

return statearr_35436;
})();
var statearr_35437_36459 = state_35433__$1;
(statearr_35437_36459[(2)] = null);

(statearr_35437_36459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (4))){
var inst_35413 = (state_35433[(8)]);
var inst_35413__$1 = (state_35433[(2)]);
var inst_35414 = (inst_35413__$1 == null);
var inst_35415 = cljs.core.not(inst_35414);
var state_35433__$1 = (function (){var statearr_35438 = state_35433;
(statearr_35438[(8)] = inst_35413__$1);

return statearr_35438;
})();
if(inst_35415){
var statearr_35439_36467 = state_35433__$1;
(statearr_35439_36467[(1)] = (5));

} else {
var statearr_35440_36468 = state_35433__$1;
(statearr_35440_36468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (6))){
var state_35433__$1 = state_35433;
var statearr_35441_36472 = state_35433__$1;
(statearr_35441_36472[(2)] = null);

(statearr_35441_36472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (3))){
var inst_35430 = (state_35433[(2)]);
var inst_35431 = cljs.core.async.close_BANG_(out);
var state_35433__$1 = (function (){var statearr_35442 = state_35433;
(statearr_35442[(9)] = inst_35430);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35433__$1,inst_35431);
} else {
if((state_val_35434 === (2))){
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35433__$1,(4),ch);
} else {
if((state_val_35434 === (11))){
var inst_35413 = (state_35433[(8)]);
var inst_35422 = (state_35433[(2)]);
var inst_35410 = inst_35413;
var state_35433__$1 = (function (){var statearr_35443 = state_35433;
(statearr_35443[(10)] = inst_35422);

(statearr_35443[(7)] = inst_35410);

return statearr_35443;
})();
var statearr_35444_36473 = state_35433__$1;
(statearr_35444_36473[(2)] = null);

(statearr_35444_36473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (9))){
var inst_35413 = (state_35433[(8)]);
var state_35433__$1 = state_35433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35433__$1,(11),out,inst_35413);
} else {
if((state_val_35434 === (5))){
var inst_35413 = (state_35433[(8)]);
var inst_35410 = (state_35433[(7)]);
var inst_35417 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35413,inst_35410);
var state_35433__$1 = state_35433;
if(inst_35417){
var statearr_35446_36475 = state_35433__$1;
(statearr_35446_36475[(1)] = (8));

} else {
var statearr_35447_36476 = state_35433__$1;
(statearr_35447_36476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (10))){
var inst_35425 = (state_35433[(2)]);
var state_35433__$1 = state_35433;
var statearr_35448_36477 = state_35433__$1;
(statearr_35448_36477[(2)] = inst_35425);

(statearr_35448_36477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35434 === (8))){
var inst_35410 = (state_35433[(7)]);
var tmp35445 = inst_35410;
var inst_35410__$1 = tmp35445;
var state_35433__$1 = (function (){var statearr_35449 = state_35433;
(statearr_35449[(7)] = inst_35410__$1);

return statearr_35449;
})();
var statearr_35450_36478 = state_35433__$1;
(statearr_35450_36478[(2)] = null);

(statearr_35450_36478[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35451[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35451[(1)] = (1));

return statearr_35451;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35433){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35433);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35452){if((e35452 instanceof Object)){
var ex__33998__auto__ = e35452;
var statearr_35453_36479 = state_35433;
(statearr_35453_36479[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36480 = state_35433;
state_35433 = G__36480;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35454 = f__34085__auto__();
(statearr_35454[(6)] = c__34084__auto___36449);

return statearr_35454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35456 = arguments.length;
switch (G__35456) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35494){
var state_val_35495 = (state_35494[(1)]);
if((state_val_35495 === (7))){
var inst_35490 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35496_36484 = state_35494__$1;
(statearr_35496_36484[(2)] = inst_35490);

(statearr_35496_36484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (1))){
var inst_35457 = (new Array(n));
var inst_35458 = inst_35457;
var inst_35459 = (0);
var state_35494__$1 = (function (){var statearr_35497 = state_35494;
(statearr_35497[(7)] = inst_35458);

(statearr_35497[(8)] = inst_35459);

return statearr_35497;
})();
var statearr_35498_36486 = state_35494__$1;
(statearr_35498_36486[(2)] = null);

(statearr_35498_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (4))){
var inst_35462 = (state_35494[(9)]);
var inst_35462__$1 = (state_35494[(2)]);
var inst_35463 = (inst_35462__$1 == null);
var inst_35464 = cljs.core.not(inst_35463);
var state_35494__$1 = (function (){var statearr_35499 = state_35494;
(statearr_35499[(9)] = inst_35462__$1);

return statearr_35499;
})();
if(inst_35464){
var statearr_35500_36487 = state_35494__$1;
(statearr_35500_36487[(1)] = (5));

} else {
var statearr_35501_36488 = state_35494__$1;
(statearr_35501_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (15))){
var inst_35484 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35502_36490 = state_35494__$1;
(statearr_35502_36490[(2)] = inst_35484);

(statearr_35502_36490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (13))){
var state_35494__$1 = state_35494;
var statearr_35503_36491 = state_35494__$1;
(statearr_35503_36491[(2)] = null);

(statearr_35503_36491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (6))){
var inst_35459 = (state_35494[(8)]);
var inst_35480 = (inst_35459 > (0));
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35480)){
var statearr_35504_36492 = state_35494__$1;
(statearr_35504_36492[(1)] = (12));

} else {
var statearr_35505_36493 = state_35494__$1;
(statearr_35505_36493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (3))){
var inst_35492 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35494__$1,inst_35492);
} else {
if((state_val_35495 === (12))){
var inst_35458 = (state_35494[(7)]);
var inst_35482 = cljs.core.vec(inst_35458);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35494__$1,(15),out,inst_35482);
} else {
if((state_val_35495 === (2))){
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35494__$1,(4),ch);
} else {
if((state_val_35495 === (11))){
var inst_35474 = (state_35494[(2)]);
var inst_35475 = (new Array(n));
var inst_35458 = inst_35475;
var inst_35459 = (0);
var state_35494__$1 = (function (){var statearr_35506 = state_35494;
(statearr_35506[(10)] = inst_35474);

(statearr_35506[(7)] = inst_35458);

(statearr_35506[(8)] = inst_35459);

return statearr_35506;
})();
var statearr_35507_36496 = state_35494__$1;
(statearr_35507_36496[(2)] = null);

(statearr_35507_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (9))){
var inst_35458 = (state_35494[(7)]);
var inst_35472 = cljs.core.vec(inst_35458);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35494__$1,(11),out,inst_35472);
} else {
if((state_val_35495 === (5))){
var inst_35467 = (state_35494[(11)]);
var inst_35458 = (state_35494[(7)]);
var inst_35459 = (state_35494[(8)]);
var inst_35462 = (state_35494[(9)]);
var inst_35466 = (inst_35458[inst_35459] = inst_35462);
var inst_35467__$1 = (inst_35459 + (1));
var inst_35468 = (inst_35467__$1 < n);
var state_35494__$1 = (function (){var statearr_35508 = state_35494;
(statearr_35508[(11)] = inst_35467__$1);

(statearr_35508[(12)] = inst_35466);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35468)){
var statearr_35509_36497 = state_35494__$1;
(statearr_35509_36497[(1)] = (8));

} else {
var statearr_35510_36498 = state_35494__$1;
(statearr_35510_36498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (14))){
var inst_35487 = (state_35494[(2)]);
var inst_35488 = cljs.core.async.close_BANG_(out);
var state_35494__$1 = (function (){var statearr_35512 = state_35494;
(statearr_35512[(13)] = inst_35487);

return statearr_35512;
})();
var statearr_35513_36504 = state_35494__$1;
(statearr_35513_36504[(2)] = inst_35488);

(statearr_35513_36504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (10))){
var inst_35478 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35514_36510 = state_35494__$1;
(statearr_35514_36510[(2)] = inst_35478);

(statearr_35514_36510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (8))){
var inst_35467 = (state_35494[(11)]);
var inst_35458 = (state_35494[(7)]);
var tmp35511 = inst_35458;
var inst_35458__$1 = tmp35511;
var inst_35459 = inst_35467;
var state_35494__$1 = (function (){var statearr_35515 = state_35494;
(statearr_35515[(7)] = inst_35458__$1);

(statearr_35515[(8)] = inst_35459);

return statearr_35515;
})();
var statearr_35516_36520 = state_35494__$1;
(statearr_35516_36520[(2)] = null);

(statearr_35516_36520[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35517[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35517[(1)] = (1));

return statearr_35517;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35494){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35494);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35518){if((e35518 instanceof Object)){
var ex__33998__auto__ = e35518;
var statearr_35519_36537 = state_35494;
(statearr_35519_36537[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36542 = state_35494;
state_35494 = G__36542;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35520 = f__34085__auto__();
(statearr_35520[(6)] = c__34084__auto___36483);

return statearr_35520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35522 = arguments.length;
switch (G__35522) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34084__auto___36566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_35564){
var state_val_35565 = (state_35564[(1)]);
if((state_val_35565 === (7))){
var inst_35560 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35566_36574 = state_35564__$1;
(statearr_35566_36574[(2)] = inst_35560);

(statearr_35566_36574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (1))){
var inst_35523 = [];
var inst_35524 = inst_35523;
var inst_35525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35564__$1 = (function (){var statearr_35567 = state_35564;
(statearr_35567[(7)] = inst_35524);

(statearr_35567[(8)] = inst_35525);

return statearr_35567;
})();
var statearr_35568_36584 = state_35564__$1;
(statearr_35568_36584[(2)] = null);

(statearr_35568_36584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (4))){
var inst_35528 = (state_35564[(9)]);
var inst_35528__$1 = (state_35564[(2)]);
var inst_35529 = (inst_35528__$1 == null);
var inst_35530 = cljs.core.not(inst_35529);
var state_35564__$1 = (function (){var statearr_35569 = state_35564;
(statearr_35569[(9)] = inst_35528__$1);

return statearr_35569;
})();
if(inst_35530){
var statearr_35570_36589 = state_35564__$1;
(statearr_35570_36589[(1)] = (5));

} else {
var statearr_35571_36590 = state_35564__$1;
(statearr_35571_36590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (15))){
var inst_35554 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35572_36592 = state_35564__$1;
(statearr_35572_36592[(2)] = inst_35554);

(statearr_35572_36592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (13))){
var state_35564__$1 = state_35564;
var statearr_35573_36593 = state_35564__$1;
(statearr_35573_36593[(2)] = null);

(statearr_35573_36593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (6))){
var inst_35524 = (state_35564[(7)]);
var inst_35549 = inst_35524.length;
var inst_35550 = (inst_35549 > (0));
var state_35564__$1 = state_35564;
if(cljs.core.truth_(inst_35550)){
var statearr_35574_36594 = state_35564__$1;
(statearr_35574_36594[(1)] = (12));

} else {
var statearr_35575_36595 = state_35564__$1;
(statearr_35575_36595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (3))){
var inst_35562 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35564__$1,inst_35562);
} else {
if((state_val_35565 === (12))){
var inst_35524 = (state_35564[(7)]);
var inst_35552 = cljs.core.vec(inst_35524);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35564__$1,(15),out,inst_35552);
} else {
if((state_val_35565 === (2))){
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35564__$1,(4),ch);
} else {
if((state_val_35565 === (11))){
var inst_35528 = (state_35564[(9)]);
var inst_35532 = (state_35564[(10)]);
var inst_35542 = (state_35564[(2)]);
var inst_35543 = [];
var inst_35544 = inst_35543.push(inst_35528);
var inst_35524 = inst_35543;
var inst_35525 = inst_35532;
var state_35564__$1 = (function (){var statearr_35576 = state_35564;
(statearr_35576[(11)] = inst_35542);

(statearr_35576[(7)] = inst_35524);

(statearr_35576[(8)] = inst_35525);

(statearr_35576[(12)] = inst_35544);

return statearr_35576;
})();
var statearr_35577_36608 = state_35564__$1;
(statearr_35577_36608[(2)] = null);

(statearr_35577_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (9))){
var inst_35524 = (state_35564[(7)]);
var inst_35540 = cljs.core.vec(inst_35524);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35564__$1,(11),out,inst_35540);
} else {
if((state_val_35565 === (5))){
var inst_35525 = (state_35564[(8)]);
var inst_35528 = (state_35564[(9)]);
var inst_35532 = (state_35564[(10)]);
var inst_35532__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35528) : f.call(null,inst_35528));
var inst_35533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35532__$1,inst_35525);
var inst_35534 = cljs.core.keyword_identical_QMARK_(inst_35525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35535 = ((inst_35533) || (inst_35534));
var state_35564__$1 = (function (){var statearr_35578 = state_35564;
(statearr_35578[(10)] = inst_35532__$1);

return statearr_35578;
})();
if(cljs.core.truth_(inst_35535)){
var statearr_35579_36612 = state_35564__$1;
(statearr_35579_36612[(1)] = (8));

} else {
var statearr_35580_36614 = state_35564__$1;
(statearr_35580_36614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (14))){
var inst_35557 = (state_35564[(2)]);
var inst_35558 = cljs.core.async.close_BANG_(out);
var state_35564__$1 = (function (){var statearr_35582 = state_35564;
(statearr_35582[(13)] = inst_35557);

return statearr_35582;
})();
var statearr_35583_36615 = state_35564__$1;
(statearr_35583_36615[(2)] = inst_35558);

(statearr_35583_36615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (10))){
var inst_35547 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35584_36617 = state_35564__$1;
(statearr_35584_36617[(2)] = inst_35547);

(statearr_35584_36617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (8))){
var inst_35524 = (state_35564[(7)]);
var inst_35528 = (state_35564[(9)]);
var inst_35532 = (state_35564[(10)]);
var inst_35537 = inst_35524.push(inst_35528);
var tmp35581 = inst_35524;
var inst_35524__$1 = tmp35581;
var inst_35525 = inst_35532;
var state_35564__$1 = (function (){var statearr_35585 = state_35564;
(statearr_35585[(7)] = inst_35524__$1);

(statearr_35585[(8)] = inst_35525);

(statearr_35585[(14)] = inst_35537);

return statearr_35585;
})();
var statearr_35586_36619 = state_35564__$1;
(statearr_35586_36619[(2)] = null);

(statearr_35586_36619[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33995__auto__ = null;
var cljs$core$async$state_machine__33995__auto____0 = (function (){
var statearr_35587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35587[(0)] = cljs$core$async$state_machine__33995__auto__);

(statearr_35587[(1)] = (1));

return statearr_35587;
});
var cljs$core$async$state_machine__33995__auto____1 = (function (state_35564){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_35564);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e35588){if((e35588 instanceof Object)){
var ex__33998__auto__ = e35588;
var statearr_35589_36620 = state_35564;
(statearr_35589_36620[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36621 = state_35564;
state_35564 = G__36621;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
cljs$core$async$state_machine__33995__auto__ = function(state_35564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33995__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33995__auto____1.call(this,state_35564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33995__auto____0;
cljs$core$async$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33995__auto____1;
return cljs$core$async$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_35590 = f__34085__auto__();
(statearr_35590[(6)] = c__34084__auto___36566);

return statearr_35590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
