goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4363__auto__ = (((value == null))?null:value);
var m__4364__auto__ = (devtools.format._header[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4364__auto__.call(null,value));
} else {
var m__4361__auto__ = (devtools.format._header["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4361__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4363__auto__ = (((value == null))?null:value);
var m__4364__auto__ = (devtools.format._has_body[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4364__auto__.call(null,value));
} else {
var m__4361__auto__ = (devtools.format._has_body["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4361__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4363__auto__ = (((value == null))?null:value);
var m__4364__auto__ = (devtools.format._body[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4364__auto__.call(null,value));
} else {
var m__4361__auto__ = (devtools.format._body["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4361__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27651 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27651["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27652 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27652["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27653 = temp__5733__auto____$2;
return (o27653["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27654 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27654["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27655 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27655["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27656 = temp__5733__auto____$2;
return (o27656["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27662 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27662["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27663 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27663["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27664 = temp__5733__auto____$2;
return (o27664["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27666 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27666["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27667 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27667["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27668 = temp__5733__auto____$2;
return (o27668["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27670 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27670["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27671 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27671["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27672 = temp__5733__auto____$2;
return (o27672["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27674 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27674["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27675 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27675["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27676 = temp__5733__auto____$2;
return (o27676["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27681 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27681["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27682 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27682["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27683 = temp__5733__auto____$2;
return (o27683["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27837 = arguments.length;
var i__4666__auto___27839 = (0);
while(true){
if((i__4666__auto___27839 < len__4665__auto___27837)){
args__4671__auto__.push((arguments[i__4666__auto___27839]));

var G__27842 = (i__4666__auto___27839 + (1));
i__4666__auto___27839 = G__27842;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27688){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27688));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27845 = arguments.length;
var i__4666__auto___27846 = (0);
while(true){
if((i__4666__auto___27846 < len__4665__auto___27845)){
args__4671__auto__.push((arguments[i__4666__auto___27846]));

var G__27847 = (i__4666__auto___27846 + (1));
i__4666__auto___27846 = G__27847;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27696){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27696));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27851 = arguments.length;
var i__4666__auto___27852 = (0);
while(true){
if((i__4666__auto___27852 < len__4665__auto___27851)){
args__4671__auto__.push((arguments[i__4666__auto___27852]));

var G__27854 = (i__4666__auto___27852 + (1));
i__4666__auto___27852 = G__27854;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27704){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27704));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27855 = arguments.length;
var i__4666__auto___27856 = (0);
while(true){
if((i__4666__auto___27856 < len__4665__auto___27855)){
args__4671__auto__.push((arguments[i__4666__auto___27856]));

var G__27860 = (i__4666__auto___27856 + (1));
i__4666__auto___27856 = G__27860;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27715){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27715));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27880 = arguments.length;
var i__4666__auto___27881 = (0);
while(true){
if((i__4666__auto___27881 < len__4665__auto___27880)){
args__4671__auto__.push((arguments[i__4666__auto___27881]));

var G__27882 = (i__4666__auto___27881 + (1));
i__4666__auto___27881 = G__27882;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27727){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27727));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27887 = arguments.length;
var i__4666__auto___27888 = (0);
while(true){
if((i__4666__auto___27888 < len__4665__auto___27887)){
args__4671__auto__.push((arguments[i__4666__auto___27888]));

var G__27889 = (i__4666__auto___27888 + (1));
i__4666__auto___27888 = G__27889;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27736){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27736));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27900 = arguments.length;
var i__4666__auto___27901 = (0);
while(true){
if((i__4666__auto___27901 < len__4665__auto___27900)){
args__4671__auto__.push((arguments[i__4666__auto___27901]));

var G__27902 = (i__4666__auto___27901 + (1));
i__4666__auto___27901 = G__27902;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27745){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27745));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27906 = arguments.length;
var i__4666__auto___27907 = (0);
while(true){
if((i__4666__auto___27907 < len__4665__auto___27906)){
args__4671__auto__.push((arguments[i__4666__auto___27907]));

var G__27908 = (i__4666__auto___27907 + (1));
i__4666__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27757){
var vec__27759 = p__27757;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27759,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27754_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27754_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27755){
var G__27756 = cljs.core.first(seq27755);
var seq27755__$1 = cljs.core.next(seq27755);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27756,seq27755__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27765 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27766 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27767 = (function (){var G__27768 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27769 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27770 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27768,G__27769,G__27770) : devtools.format.make_template_fn.call(null,G__27768,G__27769,G__27770));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27765,G__27766,G__27767) : devtools.format.make_template_fn.call(null,G__27765,G__27766,G__27767));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27915 = arguments.length;
var i__4666__auto___27916 = (0);
while(true){
if((i__4666__auto___27916 < len__4665__auto___27915)){
args__4671__auto__.push((arguments[i__4666__auto___27916]));

var G__27940 = (i__4666__auto___27916 + (1));
i__4666__auto___27916 = G__27940;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27772){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27772));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4671__auto__ = [];
var len__4665__auto___27947 = arguments.length;
var i__4666__auto___27948 = (0);
while(true){
if((i__4666__auto___27948 < len__4665__auto___27947)){
args__4671__auto__.push((arguments[i__4666__auto___27948]));

var G__27952 = (i__4666__auto___27948 + (1));
i__4666__auto___27948 = G__27952;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27777){
var G__27778 = cljs.core.first(seq27777);
var seq27777__$1 = cljs.core.next(seq27777);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27778,seq27777__$1);
}));


//# sourceMappingURL=devtools.format.js.map
