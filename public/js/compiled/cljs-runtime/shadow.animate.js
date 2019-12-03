goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37107){
var vec__37108 = p__37107;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4050__auto__ = delay;
if(cljs.core.truth_(and__4050__auto__)){
return (delay > (0));
} else {
return and__4050__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4363__auto__ = (((animator == null))?null:animator);
var m__4364__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4364__auto__.call(null,animator));
} else {
var m__4361__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4361__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4363__auto__ = (((animator == null))?null:animator);
var m__4364__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4364__auto__.call(null,animator));
} else {
var m__4361__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4361__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4363__auto__ = (((animator == null))?null:animator);
var m__4364__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4364__auto__.call(null,animator));
} else {
var m__4361__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4361__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4363__auto__ = (((animator == null))?null:animator);
var m__4364__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4364__auto__.call(null,animator));
} else {
var m__4361__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4361__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4542__auto__ = self__.items.length;
var i__35637__auto__ = (0);
while(true){
if((i__35637__auto__ < n__4542__auto__)){
var map__37119_37531 = (self__.items[i__35637__auto__]);
var map__37119_37532__$1 = (((((!((map__37119_37531 == null))))?(((((map__37119_37531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37119_37531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37119_37531):map__37119_37531);
var el_37533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119_37532__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_37534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37119_37532__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_37533,from_37534);

var G__37537 = (i__35637__auto__ + (1));
i__35637__auto__ = G__37537;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4542__auto__ = self__.items.length;
var i__35637__auto__ = (0);
while(true){
if((i__35637__auto__ < n__4542__auto__)){
var map__37127_37538 = (self__.items[i__35637__auto__]);
var map__37127_37539__$1 = (((((!((map__37127_37538 == null))))?(((((map__37127_37538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37127_37538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37127_37538):map__37127_37538);
var el_37540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127_37539__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_37541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127_37539__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_37542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37127_37539__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_37541["transition"] = transition_37542);

goog.style.setStyle(el_37540,to_37541);

var G__37546 = (i__35637__auto__ + (1));
i__35637__auto__ = G__37546;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4542__auto__ = self__.items.length;
var i__35637__auto__ = (0);
while(true){
if((i__35637__auto__ < n__4542__auto__)){
var map__37135_37548 = (self__.items[i__35637__auto__]);
var map__37135_37549__$1 = (((((!((map__37135_37548 == null))))?(((((map__37135_37548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37135_37548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37135_37548):map__37135_37548);
var el_37550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37135_37549__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_37551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37135_37549__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_37551["transition"] = null);

goog.style.setStyle(el_37550,toggles_37551);

var G__37552 = (i__35637__auto__ + (1));
i__35637__auto__ = G__37552;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4315__auto__,k__4316__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
return this__4315__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4316__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4317__auto__,k37150,else__4318__auto__){
var self__ = this;
var this__4317__auto____$1 = this;
var G__37162 = k37150;
var G__37162__$1 = (((G__37162 instanceof cljs.core.Keyword))?G__37162.fqn:null);
switch (G__37162__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37150,else__4318__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4334__auto__,f__4335__auto__,init__4336__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4337__auto__,p__37163){
var vec__37164 = p__37163;
var k__4338__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(0),null);
var v__4339__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(1),null);
return (f__4335__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4335__auto__.cljs$core$IFn$_invoke$arity$3(ret__4337__auto__,k__4338__auto__,v__4339__auto__) : f__4335__auto__.call(null,ret__4337__auto__,k__4338__auto__,v__4339__auto__));
}),init__4336__auto__,this__4334__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4329__auto__,writer__4330__auto__,opts__4331__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var pr_pair__4332__auto__ = (function (keyval__4333__auto__){
return cljs.core.pr_sequential_writer(writer__4330__auto__,cljs.core.pr_writer,""," ","",opts__4331__auto__,keyval__4333__auto__);
});
return cljs.core.pr_sequential_writer(writer__4330__auto__,pr_pair__4332__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4331__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37149){
var self__ = this;
var G__37149__$1 = this;
return (new cljs.core.RecordIter((0),G__37149__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4310__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4319__auto__){
var self__ = this;
var this__4319__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4311__auto__){
var self__ = this;
var this__4311__auto____$1 = this;
var h__4173__auto__ = self__.__hash;
if((!((h__4173__auto__ == null)))){
return h__4173__auto__;
} else {
var h__4173__auto____$1 = (function (){var fexpr__37181 = (function (coll__4312__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4312__auto__));
});
return fexpr__37181(this__4311__auto____$1);
})();
(self__.__hash = h__4173__auto____$1);

return h__4173__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37151,other37152){
var self__ = this;
var this37151__$1 = this;
return (((!((other37152 == null)))) && ((this37151__$1.constructor === other37152.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.el,other37152.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.from,other37152.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.to,other37152.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.toggles,other37152.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.transition,other37152.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37151__$1.__extmap,other37152.__extmap)));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4324__auto__,k__4325__auto__){
var self__ = this;
var this__4324__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4325__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4324__auto____$1),self__.__meta),k__4325__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4325__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4322__auto__,k__4323__auto__,G__37149){
var self__ = this;
var this__4322__auto____$1 = this;
var pred__37183 = cljs.core.keyword_identical_QMARK_;
var expr__37184 = k__4323__auto__;
if(cljs.core.truth_((function (){var G__37186 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__37187 = expr__37184;
return (pred__37183.cljs$core$IFn$_invoke$arity$2 ? pred__37183.cljs$core$IFn$_invoke$arity$2(G__37186,G__37187) : pred__37183.call(null,G__37186,G__37187));
})())){
return (new shadow.animate.AnimationStep(G__37149,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37188 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__37189 = expr__37184;
return (pred__37183.cljs$core$IFn$_invoke$arity$2 ? pred__37183.cljs$core$IFn$_invoke$arity$2(G__37188,G__37189) : pred__37183.call(null,G__37188,G__37189));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__37149,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37190 = new cljs.core.Keyword(null,"to","to",192099007);
var G__37191 = expr__37184;
return (pred__37183.cljs$core$IFn$_invoke$arity$2 ? pred__37183.cljs$core$IFn$_invoke$arity$2(G__37190,G__37191) : pred__37183.call(null,G__37190,G__37191));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__37149,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37193 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__37194 = expr__37184;
return (pred__37183.cljs$core$IFn$_invoke$arity$2 ? pred__37183.cljs$core$IFn$_invoke$arity$2(G__37193,G__37194) : pred__37183.call(null,G__37193,G__37194));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__37149,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37198 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__37201 = expr__37184;
return (pred__37183.cljs$core$IFn$_invoke$arity$2 ? pred__37183.cljs$core$IFn$_invoke$arity$2(G__37198,G__37201) : pred__37183.call(null,G__37198,G__37201));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__37149,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4323__auto__,G__37149),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4327__auto__){
var self__ = this;
var this__4327__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4314__auto__,G__37149){
var self__ = this;
var this__4314__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__37149,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4320__auto__,entry__4321__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4321__auto__)){
return this__4320__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4320__auto____$1,entry__4321__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4358__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4358__auto__,writer__4359__auto__){
return cljs.core._write(writer__4359__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__37156){
var extmap__4354__auto__ = (function (){var G__37210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37156,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__37156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37210);
} else {
return G__37210;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__37156),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__37156),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__37156),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__37156),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__37156),null,cljs.core.not_empty(extmap__4354__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4458__auto__ = (function shadow$animate$setup_$_iter__37211(s__37212){
return (new cljs.core.LazySeq(null,(function (){
var s__37212__$1 = s__37212;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37212__$1);
if(temp__5735__auto__){
var s__37212__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37212__$2)){
var c__4456__auto__ = cljs.core.chunk_first(s__37212__$2);
var size__4457__auto__ = cljs.core.count(c__4456__auto__);
var b__37214 = cljs.core.chunk_buffer(size__4457__auto__);
if((function (){var i__37213 = (0);
while(true){
if((i__37213 < size__4457__auto__)){
var vec__37216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4456__auto__,i__37213);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(1),null);
cljs.core.chunk_append(b__37214,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__37572 = (i__37213 + (1));
i__37213 = G__37572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37214),shadow$animate$setup_$_iter__37211(cljs.core.chunk_rest(s__37212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37214),null);
}
} else {
var vec__37220 = cljs.core.first(s__37212__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37220,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__37211(cljs.core.rest(s__37212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4458__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_37230){
var state_val_37231 = (state_37230[(1)]);
if((state_val_37231 === (1))){
var inst_37224 = shadow.animate.get_duration(animator);
var inst_37225 = cljs.core.async.timeout(inst_37224);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37230__$1,(2),inst_37225);
} else {
if((state_val_37231 === (2))){
var inst_37227 = (state_37230[(2)]);
var inst_37228 = shadow.animate.finish_BANG_(animator);
var state_37230__$1 = (function (){var statearr_37232 = state_37230;
(statearr_37232[(7)] = inst_37228);

(statearr_37232[(8)] = inst_37227);

return statearr_37232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37230__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__33995__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__33995__auto____0 = (function (){
var statearr_37237 = [null,null,null,null,null,null,null,null,null];
(statearr_37237[(0)] = shadow$animate$continue_BANG__$_state_machine__33995__auto__);

(statearr_37237[(1)] = (1));

return statearr_37237;
});
var shadow$animate$continue_BANG__$_state_machine__33995__auto____1 = (function (state_37230){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_37230);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e37238){if((e37238 instanceof Object)){
var ex__33998__auto__ = e37238;
var statearr_37239_37574 = state_37230;
(statearr_37239_37574[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37604 = state_37230;
state_37230 = G__37604;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__33995__auto__ = function(state_37230){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__33995__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__33995__auto____1.call(this,state_37230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__33995__auto____0;
shadow$animate$continue_BANG__$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__33995__auto____1;
return shadow$animate$continue_BANG__$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_37244 = f__34085__auto__();
(statearr_37244[(6)] = c__34084__auto__);

return statearr_37244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__37259 = arguments.length;
switch (G__37259) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37274 = (function (attr,from,to,timing,delay,meta37275){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta37275 = meta37275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37276,meta37275__$1){
var self__ = this;
var _37276__$1 = this;
return (new shadow.animate.t_shadow$animate37274(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta37275__$1));
}));

(shadow.animate.t_shadow$animate37274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37276){
var self__ = this;
var _37276__$1 = this;
return self__.meta37275;
}));

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate37274.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate37274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta37275","meta37275",-216070160,null)], null);
}));

(shadow.animate.t_shadow$animate37274.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37274.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37274");

(shadow.animate.t_shadow$animate37274.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37274");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37274.
 */
shadow.animate.__GT_t_shadow$animate37274 = (function shadow$animate$__GT_t_shadow$animate37274(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta37275){
return (new shadow.animate.t_shadow$animate37274(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta37275));
});

}

return (new shadow.animate.t_shadow$animate37274(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37280 = (function (attr,from,to,meta37281){
this.attr = attr;
this.from = from;
this.to = to;
this.meta37281 = meta37281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37282,meta37281__$1){
var self__ = this;
var _37282__$1 = this;
return (new shadow.animate.t_shadow$animate37280(self__.attr,self__.from,self__.to,meta37281__$1));
}));

(shadow.animate.t_shadow$animate37280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37282){
var self__ = this;
var _37282__$1 = this;
return self__.meta37281;
}));

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37280.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta37281","meta37281",-1319718591,null)], null);
}));

(shadow.animate.t_shadow$animate37280.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37280.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37280");

(shadow.animate.t_shadow$animate37280.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37280");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37280.
 */
shadow.animate.__GT_t_shadow$animate37280 = (function shadow$animate$toggle_$___GT_t_shadow$animate37280(attr__$1,from__$1,to__$1,meta37281){
return (new shadow.animate.t_shadow$animate37280(attr__$1,from__$1,to__$1,meta37281));
});

}

return (new shadow.animate.t_shadow$animate37280(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__37351 = arguments.length;
switch (G__37351) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37352 = (function (attrs,meta37353){
this.attrs = attrs;
this.meta37353 = meta37353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37354,meta37353__$1){
var self__ = this;
var _37354__$1 = this;
return (new shadow.animate.t_shadow$animate37352(self__.attrs,meta37353__$1));
}));

(shadow.animate.t_shadow$animate37352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37354){
var self__ = this;
var _37354__$1 = this;
return self__.meta37353;
}));

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37352.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37353","meta37353",594000621,null)], null);
}));

(shadow.animate.t_shadow$animate37352.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37352.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37352");

(shadow.animate.t_shadow$animate37352.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37352");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37352.
 */
shadow.animate.__GT_t_shadow$animate37352 = (function shadow$animate$__GT_t_shadow$animate37352(attrs__$1,meta37353){
return (new shadow.animate.t_shadow$animate37352(attrs__$1,meta37353));
});

}

return (new shadow.animate.t_shadow$animate37352(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37355 = (function (attr,meta37356){
this.attr = attr;
this.meta37356 = meta37356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37357,meta37356__$1){
var self__ = this;
var _37357__$1 = this;
return (new shadow.animate.t_shadow$animate37355(self__.attr,meta37356__$1));
}));

(shadow.animate.t_shadow$animate37355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37357){
var self__ = this;
var _37357__$1 = this;
return self__.meta37356;
}));

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37355.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta37356","meta37356",-791732542,null)], null);
}));

(shadow.animate.t_shadow$animate37355.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37355.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37355");

(shadow.animate.t_shadow$animate37355.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37355");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37355.
 */
shadow.animate.__GT_t_shadow$animate37355 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate37355(attr__$1,meta37356){
return (new shadow.animate.t_shadow$animate37355(attr__$1,meta37356));
});

}

return (new shadow.animate.t_shadow$animate37355(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37683 = arguments.length;
var i__4666__auto___37684 = (0);
while(true){
if((i__4666__auto___37684 < len__4665__auto___37683)){
args__4671__auto__.push((arguments[i__4666__auto___37684]));

var G__37685 = (i__4666__auto___37684 + (1));
i__4666__auto___37684 = G__37685;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5733__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var adef = temp__5733__auto__;
var G__37692 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__37693 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__37694 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__37695 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__37696 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__37697 = cljs.core.rest(transitions__$1);
to = G__37692;
from = G__37693;
toggles = G__37694;
timings = G__37695;
delays = G__37696;
transitions__$1 = G__37697;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37422 = (function (transitions,to,from,toggles,timings,delays,temp__5733__auto__,meta37423){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5733__auto__ = temp__5733__auto__;
this.meta37423 = meta37423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_37424,meta37423__$1){
var self__ = this;
var _37424__$1 = this;
return (new shadow.animate.t_shadow$animate37422(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5733__auto__,meta37423__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_37424){
var self__ = this;
var _37424__$1 = this;
return self__.meta37423;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"meta37423","meta37423",897808542,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

(shadow.animate.t_shadow$animate37422.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37422.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37422");

(shadow.animate.t_shadow$animate37422.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37422");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate37422.
 */
shadow.animate.__GT_t_shadow$animate37422 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__){
return (function shadow$animate$__GT_t_shadow$animate37422(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5733__auto____$1,meta37423){
return (new shadow.animate.t_shadow$animate37422(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5733__auto____$1,meta37423));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5733__auto__))
;

}

return (new shadow.animate.t_shadow$animate37422(transitions__$1,to,from,toggles,timings,delays,temp__5733__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq37382){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37382));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__37454 = arguments.length;
switch (G__37454) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__37474 = arguments.length;
switch (G__37474) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__37480 = arguments.length;
switch (G__37480) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37481 = (function (from,to,timing,delay,meta37482){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta37482 = meta37482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37483,meta37482__$1){
var self__ = this;
var _37483__$1 = this;
return (new shadow.animate.t_shadow$animate37481(self__.from,self__.to,self__.timing,self__.delay,meta37482__$1));
}));

(shadow.animate.t_shadow$animate37481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37483){
var self__ = this;
var _37483__$1 = this;
return self__.meta37482;
}));

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37481.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate37481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta37482","meta37482",-1337668968,null)], null);
}));

(shadow.animate.t_shadow$animate37481.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37481.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37481");

(shadow.animate.t_shadow$animate37481.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37481");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37481.
 */
shadow.animate.__GT_t_shadow$animate37481 = (function shadow$animate$__GT_t_shadow$animate37481(from__$1,to__$1,timing__$1,delay__$1,meta37482){
return (new shadow.animate.t_shadow$animate37481(from__$1,to__$1,timing__$1,delay__$1,meta37482));
});

}

return (new shadow.animate.t_shadow$animate37481(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__37485 = arguments.length;
switch (G__37485) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate37486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate37486 = (function (from,to,timing,delay,meta37487){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta37487 = meta37487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate37486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37488,meta37487__$1){
var self__ = this;
var _37488__$1 = this;
return (new shadow.animate.t_shadow$animate37486(self__.from,self__.to,self__.timing,self__.delay,meta37487__$1));
}));

(shadow.animate.t_shadow$animate37486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37488){
var self__ = this;
var _37488__$1 = this;
return self__.meta37487;
}));

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate37486.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate37486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta37487","meta37487",732137312,null)], null);
}));

(shadow.animate.t_shadow$animate37486.cljs$lang$type = true);

(shadow.animate.t_shadow$animate37486.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate37486");

(shadow.animate.t_shadow$animate37486.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.animate/t_shadow$animate37486");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate37486.
 */
shadow.animate.__GT_t_shadow$animate37486 = (function shadow$animate$__GT_t_shadow$animate37486(from__$1,to__$1,timing__$1,delay__$1,meta37487){
return (new shadow.animate.t_shadow$animate37486(from__$1,to__$1,timing__$1,delay__$1,meta37487));
});

}

return (new shadow.animate.t_shadow$animate37486(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
