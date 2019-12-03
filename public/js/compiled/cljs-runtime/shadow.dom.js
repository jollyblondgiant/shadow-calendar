goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35707 = coll;
var G__35708 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35707,G__35708) : shadow.dom.lazy_native_coll_seq.call(null,G__35707,G__35708));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4061__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35754 = arguments.length;
switch (G__35754) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35760 = arguments.length;
switch (G__35760) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35765 = arguments.length;
switch (G__35765) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35777 = arguments.length;
switch (G__35777) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35793 = arguments.length;
switch (G__35793) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35794 = document;
var G__35795 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35794,G__35795);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35796 = shadow.dom.dom_node(parent);
var G__35797 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35796,G__35797);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35798 = shadow.dom.dom_node(el);
var G__35799 = cls;
return goog.dom.classlist.add(G__35798,G__35799);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35801 = shadow.dom.dom_node(el);
var G__35802 = cls;
return goog.dom.classlist.remove(G__35801,G__35802);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35804 = arguments.length;
switch (G__35804) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35807 = shadow.dom.dom_node(el);
var G__35808 = cls;
return goog.dom.classlist.toggle(G__35807,G__35808);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4061__auto__ = (!((typeof document !== 'undefined')));
if(or__4061__auto__){
return or__4061__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35813){if((e35813 instanceof Object)){
var e = e35813;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35813;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4061__auto__ = (!((typeof document !== 'undefined')));
if(or__4061__auto__){
return or__4061__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35816 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35817 = null;
var count__35818 = (0);
var i__35819 = (0);
while(true){
if((i__35819 < count__35818)){
var el = chunk__35817.cljs$core$IIndexed$_nth$arity$2(null,i__35819);
var handler_36398__$1 = ((function (seq__35816,chunk__35817,count__35818,i__35819,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35816,chunk__35817,count__35818,i__35819,el))
;
var G__35828_36400 = el;
var G__35829_36401 = cljs.core.name(ev);
var G__35830_36402 = handler_36398__$1;
shadow.dom.dom_listen(G__35828_36400,G__35829_36401,G__35830_36402);


var G__36404 = seq__35816;
var G__36405 = chunk__35817;
var G__36406 = count__35818;
var G__36407 = (i__35819 + (1));
seq__35816 = G__36404;
chunk__35817 = G__36405;
count__35818 = G__36406;
i__35819 = G__36407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35816);
if(temp__5735__auto__){
var seq__35816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35816__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__35816__$1);
var G__36409 = cljs.core.chunk_rest(seq__35816__$1);
var G__36410 = c__4485__auto__;
var G__36411 = cljs.core.count(c__4485__auto__);
var G__36412 = (0);
seq__35816 = G__36409;
chunk__35817 = G__36410;
count__35818 = G__36411;
i__35819 = G__36412;
continue;
} else {
var el = cljs.core.first(seq__35816__$1);
var handler_36415__$1 = ((function (seq__35816,chunk__35817,count__35818,i__35819,el,seq__35816__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35816,chunk__35817,count__35818,i__35819,el,seq__35816__$1,temp__5735__auto__))
;
var G__35836_36417 = el;
var G__35837_36418 = cljs.core.name(ev);
var G__35838_36419 = handler_36415__$1;
shadow.dom.dom_listen(G__35836_36417,G__35837_36418,G__35838_36419);


var G__36420 = cljs.core.next(seq__35816__$1);
var G__36421 = null;
var G__36422 = (0);
var G__36423 = (0);
seq__35816 = G__36420;
chunk__35817 = G__36421;
count__35818 = G__36422;
i__35819 = G__36423;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35841 = arguments.length;
switch (G__35841) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35844 = shadow.dom.dom_node(el);
var G__35845 = cljs.core.name(ev);
var G__35846 = handler__$1;
return shadow.dom.dom_listen(G__35844,G__35845,G__35846);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35849 = shadow.dom.dom_node(el);
var G__35850 = cljs.core.name(ev);
var G__35851 = handler;
return shadow.dom.dom_listen_remove(G__35849,G__35850,G__35851);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35854 = cljs.core.seq(events);
var chunk__35855 = null;
var count__35856 = (0);
var i__35857 = (0);
while(true){
if((i__35857 < count__35856)){
var vec__35868 = chunk__35855.cljs$core$IIndexed$_nth$arity$2(null,i__35857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35868,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36432 = seq__35854;
var G__36433 = chunk__35855;
var G__36434 = count__35856;
var G__36435 = (i__35857 + (1));
seq__35854 = G__36432;
chunk__35855 = G__36433;
count__35856 = G__36434;
i__35857 = G__36435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35854);
if(temp__5735__auto__){
var seq__35854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35854__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__35854__$1);
var G__36436 = cljs.core.chunk_rest(seq__35854__$1);
var G__36437 = c__4485__auto__;
var G__36438 = cljs.core.count(c__4485__auto__);
var G__36439 = (0);
seq__35854 = G__36436;
chunk__35855 = G__36437;
count__35856 = G__36438;
i__35857 = G__36439;
continue;
} else {
var vec__35872 = cljs.core.first(seq__35854__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36441 = cljs.core.next(seq__35854__$1);
var G__36442 = null;
var G__36443 = (0);
var G__36444 = (0);
seq__35854 = G__36441;
chunk__35855 = G__36442;
count__35856 = G__36443;
i__35857 = G__36444;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35877 = cljs.core.seq(styles);
var chunk__35878 = null;
var count__35879 = (0);
var i__35880 = (0);
while(true){
if((i__35880 < count__35879)){
var vec__35894 = chunk__35878.cljs$core$IIndexed$_nth$arity$2(null,i__35880);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35894,(1),null);
var G__35898_36446 = dom;
var G__35899_36447 = cljs.core.name(k);
var G__35900_36448 = (((v == null))?"":v);
goog.style.setStyle(G__35898_36446,G__35899_36447,G__35900_36448);


var G__36450 = seq__35877;
var G__36451 = chunk__35878;
var G__36452 = count__35879;
var G__36453 = (i__35880 + (1));
seq__35877 = G__36450;
chunk__35878 = G__36451;
count__35879 = G__36452;
i__35880 = G__36453;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35877);
if(temp__5735__auto__){
var seq__35877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35877__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__35877__$1);
var G__36455 = cljs.core.chunk_rest(seq__35877__$1);
var G__36456 = c__4485__auto__;
var G__36457 = cljs.core.count(c__4485__auto__);
var G__36458 = (0);
seq__35877 = G__36455;
chunk__35878 = G__36456;
count__35879 = G__36457;
i__35880 = G__36458;
continue;
} else {
var vec__35902 = cljs.core.first(seq__35877__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35902,(1),null);
var G__35905_36460 = dom;
var G__35906_36461 = cljs.core.name(k);
var G__35907_36462 = (((v == null))?"":v);
goog.style.setStyle(G__35905_36460,G__35906_36461,G__35907_36462);


var G__36463 = cljs.core.next(seq__35877__$1);
var G__36464 = null;
var G__36465 = (0);
var G__36466 = (0);
seq__35877 = G__36463;
chunk__35878 = G__36464;
count__35879 = G__36465;
i__35880 = G__36466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35909_36469 = key;
var G__35909_36470__$1 = (((G__35909_36469 instanceof cljs.core.Keyword))?G__35909_36469.fqn:null);
switch (G__35909_36470__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36474 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4061__auto__ = goog.string.startsWith(ks_36474,"data-");
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return goog.string.startsWith(ks_36474,"aria-");
}
})())){
el.setAttribute(ks_36474,value);
} else {
(el[ks_36474] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35921 = shadow.dom.dom_node(el);
var G__35922 = cls;
return goog.dom.classlist.contains(G__35921,G__35922);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35927){
var map__35928 = p__35927;
var map__35928__$1 = (((((!((map__35928 == null))))?(((((map__35928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35928):map__35928);
var props = map__35928__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35930 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35930,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35930,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35930,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35933 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35933,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35933;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35935 = arguments.length;
switch (G__35935) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35936){
var vec__35937 = p__35936;
var seq__35938 = cljs.core.seq(vec__35937);
var first__35939 = cljs.core.first(seq__35938);
var seq__35938__$1 = cljs.core.next(seq__35938);
var nn = first__35939;
var first__35939__$1 = cljs.core.first(seq__35938__$1);
var seq__35938__$2 = cljs.core.next(seq__35938__$1);
var np = first__35939__$1;
var nc = seq__35938__$2;
var node = vec__35937;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35940 = nn;
var G__35941 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35940,G__35941) : create_fn.call(null,G__35940,G__35941));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35942 = nn;
var G__35943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35942,G__35943) : create_fn.call(null,G__35942,G__35943));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35944 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(1),null);
var seq__35947_36499 = cljs.core.seq(node_children);
var chunk__35948_36500 = null;
var count__35949_36501 = (0);
var i__35950_36502 = (0);
while(true){
if((i__35950_36502 < count__35949_36501)){
var child_struct_36503 = chunk__35948_36500.cljs$core$IIndexed$_nth$arity$2(null,i__35950_36502);
var children_36505 = shadow.dom.dom_node(child_struct_36503);
if(cljs.core.seq_QMARK_(children_36505)){
var seq__35969_36506 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36505));
var chunk__35971_36507 = null;
var count__35972_36508 = (0);
var i__35973_36509 = (0);
while(true){
if((i__35973_36509 < count__35972_36508)){
var child_36511 = chunk__35971_36507.cljs$core$IIndexed$_nth$arity$2(null,i__35973_36509);
if(cljs.core.truth_(child_36511)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36511);


var G__36512 = seq__35969_36506;
var G__36513 = chunk__35971_36507;
var G__36514 = count__35972_36508;
var G__36515 = (i__35973_36509 + (1));
seq__35969_36506 = G__36512;
chunk__35971_36507 = G__36513;
count__35972_36508 = G__36514;
i__35973_36509 = G__36515;
continue;
} else {
var G__36516 = seq__35969_36506;
var G__36517 = chunk__35971_36507;
var G__36518 = count__35972_36508;
var G__36519 = (i__35973_36509 + (1));
seq__35969_36506 = G__36516;
chunk__35971_36507 = G__36517;
count__35972_36508 = G__36518;
i__35973_36509 = G__36519;
continue;
}
} else {
var temp__5735__auto___36521 = cljs.core.seq(seq__35969_36506);
if(temp__5735__auto___36521){
var seq__35969_36522__$1 = temp__5735__auto___36521;
if(cljs.core.chunked_seq_QMARK_(seq__35969_36522__$1)){
var c__4485__auto___36523 = cljs.core.chunk_first(seq__35969_36522__$1);
var G__36524 = cljs.core.chunk_rest(seq__35969_36522__$1);
var G__36525 = c__4485__auto___36523;
var G__36526 = cljs.core.count(c__4485__auto___36523);
var G__36527 = (0);
seq__35969_36506 = G__36524;
chunk__35971_36507 = G__36525;
count__35972_36508 = G__36526;
i__35973_36509 = G__36527;
continue;
} else {
var child_36528 = cljs.core.first(seq__35969_36522__$1);
if(cljs.core.truth_(child_36528)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36528);


var G__36529 = cljs.core.next(seq__35969_36522__$1);
var G__36530 = null;
var G__36531 = (0);
var G__36532 = (0);
seq__35969_36506 = G__36529;
chunk__35971_36507 = G__36530;
count__35972_36508 = G__36531;
i__35973_36509 = G__36532;
continue;
} else {
var G__36533 = cljs.core.next(seq__35969_36522__$1);
var G__36534 = null;
var G__36535 = (0);
var G__36536 = (0);
seq__35969_36506 = G__36533;
chunk__35971_36507 = G__36534;
count__35972_36508 = G__36535;
i__35973_36509 = G__36536;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36505);
}


var G__36538 = seq__35947_36499;
var G__36539 = chunk__35948_36500;
var G__36540 = count__35949_36501;
var G__36541 = (i__35950_36502 + (1));
seq__35947_36499 = G__36538;
chunk__35948_36500 = G__36539;
count__35949_36501 = G__36540;
i__35950_36502 = G__36541;
continue;
} else {
var temp__5735__auto___36543 = cljs.core.seq(seq__35947_36499);
if(temp__5735__auto___36543){
var seq__35947_36544__$1 = temp__5735__auto___36543;
if(cljs.core.chunked_seq_QMARK_(seq__35947_36544__$1)){
var c__4485__auto___36545 = cljs.core.chunk_first(seq__35947_36544__$1);
var G__36546 = cljs.core.chunk_rest(seq__35947_36544__$1);
var G__36547 = c__4485__auto___36545;
var G__36548 = cljs.core.count(c__4485__auto___36545);
var G__36549 = (0);
seq__35947_36499 = G__36546;
chunk__35948_36500 = G__36547;
count__35949_36501 = G__36548;
i__35950_36502 = G__36549;
continue;
} else {
var child_struct_36550 = cljs.core.first(seq__35947_36544__$1);
var children_36551 = shadow.dom.dom_node(child_struct_36550);
if(cljs.core.seq_QMARK_(children_36551)){
var seq__35980_36553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36551));
var chunk__35982_36554 = null;
var count__35983_36555 = (0);
var i__35984_36556 = (0);
while(true){
if((i__35984_36556 < count__35983_36555)){
var child_36557 = chunk__35982_36554.cljs$core$IIndexed$_nth$arity$2(null,i__35984_36556);
if(cljs.core.truth_(child_36557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36557);


var G__36558 = seq__35980_36553;
var G__36559 = chunk__35982_36554;
var G__36560 = count__35983_36555;
var G__36561 = (i__35984_36556 + (1));
seq__35980_36553 = G__36558;
chunk__35982_36554 = G__36559;
count__35983_36555 = G__36560;
i__35984_36556 = G__36561;
continue;
} else {
var G__36562 = seq__35980_36553;
var G__36563 = chunk__35982_36554;
var G__36564 = count__35983_36555;
var G__36565 = (i__35984_36556 + (1));
seq__35980_36553 = G__36562;
chunk__35982_36554 = G__36563;
count__35983_36555 = G__36564;
i__35984_36556 = G__36565;
continue;
}
} else {
var temp__5735__auto___36567__$1 = cljs.core.seq(seq__35980_36553);
if(temp__5735__auto___36567__$1){
var seq__35980_36568__$1 = temp__5735__auto___36567__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35980_36568__$1)){
var c__4485__auto___36569 = cljs.core.chunk_first(seq__35980_36568__$1);
var G__36570 = cljs.core.chunk_rest(seq__35980_36568__$1);
var G__36571 = c__4485__auto___36569;
var G__36572 = cljs.core.count(c__4485__auto___36569);
var G__36573 = (0);
seq__35980_36553 = G__36570;
chunk__35982_36554 = G__36571;
count__35983_36555 = G__36572;
i__35984_36556 = G__36573;
continue;
} else {
var child_36575 = cljs.core.first(seq__35980_36568__$1);
if(cljs.core.truth_(child_36575)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36575);


var G__36576 = cljs.core.next(seq__35980_36568__$1);
var G__36577 = null;
var G__36578 = (0);
var G__36579 = (0);
seq__35980_36553 = G__36576;
chunk__35982_36554 = G__36577;
count__35983_36555 = G__36578;
i__35984_36556 = G__36579;
continue;
} else {
var G__36580 = cljs.core.next(seq__35980_36568__$1);
var G__36581 = null;
var G__36582 = (0);
var G__36583 = (0);
seq__35980_36553 = G__36580;
chunk__35982_36554 = G__36581;
count__35983_36555 = G__36582;
i__35984_36556 = G__36583;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36551);
}


var G__36585 = cljs.core.next(seq__35947_36544__$1);
var G__36586 = null;
var G__36587 = (0);
var G__36588 = (0);
seq__35947_36499 = G__36585;
chunk__35948_36500 = G__36586;
count__35949_36501 = G__36587;
i__35950_36502 = G__36588;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__36011 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__36011);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36016 = cljs.core.seq(node);
var chunk__36017 = null;
var count__36019 = (0);
var i__36020 = (0);
while(true){
if((i__36020 < count__36019)){
var n = chunk__36017.cljs$core$IIndexed$_nth$arity$2(null,i__36020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36596 = seq__36016;
var G__36597 = chunk__36017;
var G__36598 = count__36019;
var G__36599 = (i__36020 + (1));
seq__36016 = G__36596;
chunk__36017 = G__36597;
count__36019 = G__36598;
i__36020 = G__36599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36016);
if(temp__5735__auto__){
var seq__36016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36016__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__36016__$1);
var G__36600 = cljs.core.chunk_rest(seq__36016__$1);
var G__36601 = c__4485__auto__;
var G__36602 = cljs.core.count(c__4485__auto__);
var G__36603 = (0);
seq__36016 = G__36600;
chunk__36017 = G__36601;
count__36019 = G__36602;
i__36020 = G__36603;
continue;
} else {
var n = cljs.core.first(seq__36016__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36604 = cljs.core.next(seq__36016__$1);
var G__36605 = null;
var G__36606 = (0);
var G__36607 = (0);
seq__36016 = G__36604;
chunk__36017 = G__36605;
count__36019 = G__36606;
i__36020 = G__36607;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__36032 = shadow.dom.dom_node(new$);
var G__36033 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__36032,G__36033);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36035 = arguments.length;
switch (G__36035) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36041 = arguments.length;
switch (G__36041) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36046 = arguments.length;
switch (G__36046) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4061__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4671__auto__ = [];
var len__4665__auto___36625 = arguments.length;
var i__4666__auto___36626 = (0);
while(true){
if((i__4666__auto___36626 < len__4665__auto___36625)){
args__4671__auto__.push((arguments[i__4666__auto___36626]));

var G__36630 = (i__4666__auto___36626 + (1));
i__4666__auto___36626 = G__36630;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((0) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4672__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36054_36631 = cljs.core.seq(nodes);
var chunk__36055_36632 = null;
var count__36056_36633 = (0);
var i__36057_36634 = (0);
while(true){
if((i__36057_36634 < count__36056_36633)){
var node_36635 = chunk__36055_36632.cljs$core$IIndexed$_nth$arity$2(null,i__36057_36634);
fragment.appendChild(shadow.dom._to_dom(node_36635));


var G__36636 = seq__36054_36631;
var G__36637 = chunk__36055_36632;
var G__36638 = count__36056_36633;
var G__36639 = (i__36057_36634 + (1));
seq__36054_36631 = G__36636;
chunk__36055_36632 = G__36637;
count__36056_36633 = G__36638;
i__36057_36634 = G__36639;
continue;
} else {
var temp__5735__auto___36640 = cljs.core.seq(seq__36054_36631);
if(temp__5735__auto___36640){
var seq__36054_36641__$1 = temp__5735__auto___36640;
if(cljs.core.chunked_seq_QMARK_(seq__36054_36641__$1)){
var c__4485__auto___36642 = cljs.core.chunk_first(seq__36054_36641__$1);
var G__36643 = cljs.core.chunk_rest(seq__36054_36641__$1);
var G__36644 = c__4485__auto___36642;
var G__36645 = cljs.core.count(c__4485__auto___36642);
var G__36646 = (0);
seq__36054_36631 = G__36643;
chunk__36055_36632 = G__36644;
count__36056_36633 = G__36645;
i__36057_36634 = G__36646;
continue;
} else {
var node_36647 = cljs.core.first(seq__36054_36641__$1);
fragment.appendChild(shadow.dom._to_dom(node_36647));


var G__36648 = cljs.core.next(seq__36054_36641__$1);
var G__36649 = null;
var G__36650 = (0);
var G__36651 = (0);
seq__36054_36631 = G__36648;
chunk__36055_36632 = G__36649;
count__36056_36633 = G__36650;
i__36057_36634 = G__36651;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36050){
var self__4653__auto__ = this;
return self__4653__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36050));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36058_36659 = cljs.core.seq(scripts);
var chunk__36059_36660 = null;
var count__36060_36661 = (0);
var i__36061_36662 = (0);
while(true){
if((i__36061_36662 < count__36060_36661)){
var vec__36068_36663 = chunk__36059_36660.cljs$core$IIndexed$_nth$arity$2(null,i__36061_36662);
var script_tag_36664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36068_36663,(0),null);
var script_body_36665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36068_36663,(1),null);
eval(script_body_36665);


var G__36666 = seq__36058_36659;
var G__36667 = chunk__36059_36660;
var G__36668 = count__36060_36661;
var G__36669 = (i__36061_36662 + (1));
seq__36058_36659 = G__36666;
chunk__36059_36660 = G__36667;
count__36060_36661 = G__36668;
i__36061_36662 = G__36669;
continue;
} else {
var temp__5735__auto___36670 = cljs.core.seq(seq__36058_36659);
if(temp__5735__auto___36670){
var seq__36058_36671__$1 = temp__5735__auto___36670;
if(cljs.core.chunked_seq_QMARK_(seq__36058_36671__$1)){
var c__4485__auto___36676 = cljs.core.chunk_first(seq__36058_36671__$1);
var G__36677 = cljs.core.chunk_rest(seq__36058_36671__$1);
var G__36678 = c__4485__auto___36676;
var G__36679 = cljs.core.count(c__4485__auto___36676);
var G__36680 = (0);
seq__36058_36659 = G__36677;
chunk__36059_36660 = G__36678;
count__36060_36661 = G__36679;
i__36061_36662 = G__36680;
continue;
} else {
var vec__36071_36681 = cljs.core.first(seq__36058_36671__$1);
var script_tag_36682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071_36681,(0),null);
var script_body_36683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071_36681,(1),null);
eval(script_body_36683);


var G__36684 = cljs.core.next(seq__36058_36671__$1);
var G__36685 = null;
var G__36686 = (0);
var G__36687 = (0);
seq__36058_36659 = G__36684;
chunk__36059_36660 = G__36685;
count__36060_36661 = G__36686;
i__36061_36662 = G__36687;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36074){
var vec__36075 = p__36074;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__36082 = shadow.dom.dom_node(el);
var G__36083 = cls;
return goog.dom.getAncestorByClass(G__36082,G__36083);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36085 = arguments.length;
switch (G__36085) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__36089 = shadow.dom.dom_node(el);
var G__36090 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__36089,G__36090);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__36094 = shadow.dom.dom_node(el);
var G__36095 = cljs.core.name(tag);
var G__36096 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__36094,G__36095,G__36096);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__36099 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__36099);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__36100 = shadow.dom.dom_node(dom);
var G__36101 = value;
return goog.dom.forms.setValue(G__36100,G__36101);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36105 = cljs.core.seq(style_keys);
var chunk__36106 = null;
var count__36107 = (0);
var i__36108 = (0);
while(true){
if((i__36108 < count__36107)){
var it = chunk__36106.cljs$core$IIndexed$_nth$arity$2(null,i__36108);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36698 = seq__36105;
var G__36699 = chunk__36106;
var G__36700 = count__36107;
var G__36701 = (i__36108 + (1));
seq__36105 = G__36698;
chunk__36106 = G__36699;
count__36107 = G__36700;
i__36108 = G__36701;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36105);
if(temp__5735__auto__){
var seq__36105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36105__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__36105__$1);
var G__36702 = cljs.core.chunk_rest(seq__36105__$1);
var G__36703 = c__4485__auto__;
var G__36704 = cljs.core.count(c__4485__auto__);
var G__36705 = (0);
seq__36105 = G__36702;
chunk__36106 = G__36703;
count__36107 = G__36704;
i__36108 = G__36705;
continue;
} else {
var it = cljs.core.first(seq__36105__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36706 = cljs.core.next(seq__36105__$1);
var G__36707 = null;
var G__36708 = (0);
var G__36709 = (0);
seq__36105 = G__36706;
chunk__36106 = G__36707;
count__36107 = G__36708;
i__36108 = G__36709;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4315__auto__,k__4316__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
return this__4315__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4316__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4317__auto__,k36110,else__4318__auto__){
var self__ = this;
var this__4317__auto____$1 = this;
var G__36119 = k36110;
var G__36119__$1 = (((G__36119 instanceof cljs.core.Keyword))?G__36119.fqn:null);
switch (G__36119__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36110,else__4318__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4334__auto__,f__4335__auto__,init__4336__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4337__auto__,p__36123){
var vec__36124 = p__36123;
var k__4338__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(0),null);
var v__4339__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36124,(1),null);
return (f__4335__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4335__auto__.cljs$core$IFn$_invoke$arity$3(ret__4337__auto__,k__4338__auto__,v__4339__auto__) : f__4335__auto__.call(null,ret__4337__auto__,k__4338__auto__,v__4339__auto__));
}),init__4336__auto__,this__4334__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4329__auto__,writer__4330__auto__,opts__4331__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var pr_pair__4332__auto__ = (function (keyval__4333__auto__){
return cljs.core.pr_sequential_writer(writer__4330__auto__,cljs.core.pr_writer,""," ","",opts__4331__auto__,keyval__4333__auto__);
});
return cljs.core.pr_sequential_writer(writer__4330__auto__,pr_pair__4332__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4331__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36109){
var self__ = this;
var G__36109__$1 = this;
return (new cljs.core.RecordIter((0),G__36109__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4310__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4319__auto__){
var self__ = this;
var this__4319__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4311__auto__){
var self__ = this;
var this__4311__auto____$1 = this;
var h__4173__auto__ = self__.__hash;
if((!((h__4173__auto__ == null)))){
return h__4173__auto__;
} else {
var h__4173__auto____$1 = (function (){var fexpr__36138 = (function (coll__4312__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4312__auto__));
});
return fexpr__36138(this__4311__auto____$1);
})();
(self__.__hash = h__4173__auto____$1);

return h__4173__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36111,other36112){
var self__ = this;
var this36111__$1 = this;
return (((!((other36112 == null)))) && ((this36111__$1.constructor === other36112.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36111__$1.x,other36112.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36111__$1.y,other36112.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36111__$1.__extmap,other36112.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4324__auto__,k__4325__auto__){
var self__ = this;
var this__4324__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4325__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4324__auto____$1),self__.__meta),k__4325__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4325__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4322__auto__,k__4323__auto__,G__36109){
var self__ = this;
var this__4322__auto____$1 = this;
var pred__36147 = cljs.core.keyword_identical_QMARK_;
var expr__36148 = k__4323__auto__;
if(cljs.core.truth_((function (){var G__36150 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__36151 = expr__36148;
return (pred__36147.cljs$core$IFn$_invoke$arity$2 ? pred__36147.cljs$core$IFn$_invoke$arity$2(G__36150,G__36151) : pred__36147.call(null,G__36150,G__36151));
})())){
return (new shadow.dom.Coordinate(G__36109,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36152 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__36153 = expr__36148;
return (pred__36147.cljs$core$IFn$_invoke$arity$2 ? pred__36147.cljs$core$IFn$_invoke$arity$2(G__36152,G__36153) : pred__36147.call(null,G__36152,G__36153));
})())){
return (new shadow.dom.Coordinate(self__.x,G__36109,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4323__auto__,G__36109),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4327__auto__){
var self__ = this;
var this__4327__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4314__auto__,G__36109){
var self__ = this;
var this__4314__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36109,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4320__auto__,entry__4321__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4321__auto__)){
return this__4320__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4320__auto____$1,entry__4321__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4358__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4358__auto__,writer__4359__auto__){
return cljs.core._write(writer__4359__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36115){
var extmap__4354__auto__ = (function (){var G__36159 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36115,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36115)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36159);
} else {
return G__36159;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36115),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36115),null,cljs.core.not_empty(extmap__4354__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__36162 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__36162);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__36163 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__36163);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__36164 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__36164);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4315__auto__,k__4316__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
return this__4315__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4316__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4317__auto__,k36166,else__4318__auto__){
var self__ = this;
var this__4317__auto____$1 = this;
var G__36171 = k36166;
var G__36171__$1 = (((G__36171 instanceof cljs.core.Keyword))?G__36171.fqn:null);
switch (G__36171__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36166,else__4318__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4334__auto__,f__4335__auto__,init__4336__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4337__auto__,p__36172){
var vec__36173 = p__36172;
var k__4338__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(0),null);
var v__4339__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(1),null);
return (f__4335__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4335__auto__.cljs$core$IFn$_invoke$arity$3(ret__4337__auto__,k__4338__auto__,v__4339__auto__) : f__4335__auto__.call(null,ret__4337__auto__,k__4338__auto__,v__4339__auto__));
}),init__4336__auto__,this__4334__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4329__auto__,writer__4330__auto__,opts__4331__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var pr_pair__4332__auto__ = (function (keyval__4333__auto__){
return cljs.core.pr_sequential_writer(writer__4330__auto__,cljs.core.pr_writer,""," ","",opts__4331__auto__,keyval__4333__auto__);
});
return cljs.core.pr_sequential_writer(writer__4330__auto__,pr_pair__4332__auto__,"#shadow.dom.Size{",", ","}",opts__4331__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36165){
var self__ = this;
var G__36165__$1 = this;
return (new cljs.core.RecordIter((0),G__36165__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4310__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4319__auto__){
var self__ = this;
var this__4319__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4311__auto__){
var self__ = this;
var this__4311__auto____$1 = this;
var h__4173__auto__ = self__.__hash;
if((!((h__4173__auto__ == null)))){
return h__4173__auto__;
} else {
var h__4173__auto____$1 = (function (){var fexpr__36177 = (function (coll__4312__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4312__auto__));
});
return fexpr__36177(this__4311__auto____$1);
})();
(self__.__hash = h__4173__auto____$1);

return h__4173__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36167,other36168){
var self__ = this;
var this36167__$1 = this;
return (((!((other36168 == null)))) && ((this36167__$1.constructor === other36168.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36167__$1.w,other36168.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36167__$1.h,other36168.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36167__$1.__extmap,other36168.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4324__auto__,k__4325__auto__){
var self__ = this;
var this__4324__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4325__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4324__auto____$1),self__.__meta),k__4325__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4325__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4322__auto__,k__4323__auto__,G__36165){
var self__ = this;
var this__4322__auto____$1 = this;
var pred__36181 = cljs.core.keyword_identical_QMARK_;
var expr__36182 = k__4323__auto__;
if(cljs.core.truth_((function (){var G__36184 = new cljs.core.Keyword(null,"w","w",354169001);
var G__36185 = expr__36182;
return (pred__36181.cljs$core$IFn$_invoke$arity$2 ? pred__36181.cljs$core$IFn$_invoke$arity$2(G__36184,G__36185) : pred__36181.call(null,G__36184,G__36185));
})())){
return (new shadow.dom.Size(G__36165,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36187 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__36188 = expr__36182;
return (pred__36181.cljs$core$IFn$_invoke$arity$2 ? pred__36181.cljs$core$IFn$_invoke$arity$2(G__36187,G__36188) : pred__36181.call(null,G__36187,G__36188));
})())){
return (new shadow.dom.Size(self__.w,G__36165,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4323__auto__,G__36165),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4327__auto__){
var self__ = this;
var this__4327__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4314__auto__,G__36165){
var self__ = this;
var this__4314__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36165,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4320__auto__,entry__4321__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4321__auto__)){
return this__4320__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4320__auto____$1,entry__4321__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4358__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4358__auto__,writer__4359__auto__){
return cljs.core._write(writer__4359__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36169){
var extmap__4354__auto__ = (function (){var G__36198 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36169,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36198);
} else {
return G__36198;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36169),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36169),null,cljs.core.not_empty(extmap__4354__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__36203 = shadow.dom.dom_node(el);
return goog.style.getSize(G__36203);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4539__auto__ = opts;
var l__4540__auto__ = a__4539__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4540__auto__)){
var G__36762 = (i + (1));
var G__36763 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36762;
ret = G__36763;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36216){
var vec__36217 = p__36216;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36222 = arguments.length;
switch (G__36222) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36228_36765 = new_node;
var G__36229_36766 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__36228_36765,G__36229_36766);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36231_36771 = new_node;
var G__36232_36772 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__36231_36771,G__36232_36772);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36775 = ps;
var G__36776 = (i + (1));
el__$1 = G__36775;
i = G__36776;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__36235 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__36235);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__36240 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__36240);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__36243 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__36243);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36246 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36246,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36246,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36246,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36251_36783 = cljs.core.seq(props);
var chunk__36252_36784 = null;
var count__36253_36785 = (0);
var i__36254_36786 = (0);
while(true){
if((i__36254_36786 < count__36253_36785)){
var vec__36264_36787 = chunk__36252_36784.cljs$core$IIndexed$_nth$arity$2(null,i__36254_36786);
var k_36788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264_36787,(0),null);
var v_36789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36264_36787,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36788);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36788),v_36789);


var G__36790 = seq__36251_36783;
var G__36791 = chunk__36252_36784;
var G__36792 = count__36253_36785;
var G__36793 = (i__36254_36786 + (1));
seq__36251_36783 = G__36790;
chunk__36252_36784 = G__36791;
count__36253_36785 = G__36792;
i__36254_36786 = G__36793;
continue;
} else {
var temp__5735__auto___36798 = cljs.core.seq(seq__36251_36783);
if(temp__5735__auto___36798){
var seq__36251_36799__$1 = temp__5735__auto___36798;
if(cljs.core.chunked_seq_QMARK_(seq__36251_36799__$1)){
var c__4485__auto___36800 = cljs.core.chunk_first(seq__36251_36799__$1);
var G__36801 = cljs.core.chunk_rest(seq__36251_36799__$1);
var G__36802 = c__4485__auto___36800;
var G__36803 = cljs.core.count(c__4485__auto___36800);
var G__36804 = (0);
seq__36251_36783 = G__36801;
chunk__36252_36784 = G__36802;
count__36253_36785 = G__36803;
i__36254_36786 = G__36804;
continue;
} else {
var vec__36268_36805 = cljs.core.first(seq__36251_36799__$1);
var k_36806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36268_36805,(0),null);
var v_36807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36268_36805,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36806);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36806),v_36807);


var G__36808 = cljs.core.next(seq__36251_36799__$1);
var G__36809 = null;
var G__36810 = (0);
var G__36811 = (0);
seq__36251_36783 = G__36808;
chunk__36252_36784 = G__36809;
count__36253_36785 = G__36810;
i__36254_36786 = G__36811;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36276 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36276,(1),null);
var seq__36279_36812 = cljs.core.seq(node_children);
var chunk__36281_36813 = null;
var count__36282_36814 = (0);
var i__36283_36815 = (0);
while(true){
if((i__36283_36815 < count__36282_36814)){
var child_struct_36816 = chunk__36281_36813.cljs$core$IIndexed$_nth$arity$2(null,i__36283_36815);
if((!((child_struct_36816 == null)))){
if(typeof child_struct_36816 === 'string'){
var text_36817 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36817),child_struct_36816].join(''));
} else {
var children_36818 = shadow.dom.svg_node(child_struct_36816);
if(cljs.core.seq_QMARK_(children_36818)){
var seq__36309_36819 = cljs.core.seq(children_36818);
var chunk__36311_36820 = null;
var count__36312_36821 = (0);
var i__36313_36822 = (0);
while(true){
if((i__36313_36822 < count__36312_36821)){
var child_36823 = chunk__36311_36820.cljs$core$IIndexed$_nth$arity$2(null,i__36313_36822);
if(cljs.core.truth_(child_36823)){
node.appendChild(child_36823);


var G__36824 = seq__36309_36819;
var G__36825 = chunk__36311_36820;
var G__36826 = count__36312_36821;
var G__36827 = (i__36313_36822 + (1));
seq__36309_36819 = G__36824;
chunk__36311_36820 = G__36825;
count__36312_36821 = G__36826;
i__36313_36822 = G__36827;
continue;
} else {
var G__36828 = seq__36309_36819;
var G__36829 = chunk__36311_36820;
var G__36830 = count__36312_36821;
var G__36831 = (i__36313_36822 + (1));
seq__36309_36819 = G__36828;
chunk__36311_36820 = G__36829;
count__36312_36821 = G__36830;
i__36313_36822 = G__36831;
continue;
}
} else {
var temp__5735__auto___36832 = cljs.core.seq(seq__36309_36819);
if(temp__5735__auto___36832){
var seq__36309_36833__$1 = temp__5735__auto___36832;
if(cljs.core.chunked_seq_QMARK_(seq__36309_36833__$1)){
var c__4485__auto___36834 = cljs.core.chunk_first(seq__36309_36833__$1);
var G__36835 = cljs.core.chunk_rest(seq__36309_36833__$1);
var G__36836 = c__4485__auto___36834;
var G__36837 = cljs.core.count(c__4485__auto___36834);
var G__36838 = (0);
seq__36309_36819 = G__36835;
chunk__36311_36820 = G__36836;
count__36312_36821 = G__36837;
i__36313_36822 = G__36838;
continue;
} else {
var child_36840 = cljs.core.first(seq__36309_36833__$1);
if(cljs.core.truth_(child_36840)){
node.appendChild(child_36840);


var G__36842 = cljs.core.next(seq__36309_36833__$1);
var G__36843 = null;
var G__36844 = (0);
var G__36845 = (0);
seq__36309_36819 = G__36842;
chunk__36311_36820 = G__36843;
count__36312_36821 = G__36844;
i__36313_36822 = G__36845;
continue;
} else {
var G__36846 = cljs.core.next(seq__36309_36833__$1);
var G__36847 = null;
var G__36848 = (0);
var G__36849 = (0);
seq__36309_36819 = G__36846;
chunk__36311_36820 = G__36847;
count__36312_36821 = G__36848;
i__36313_36822 = G__36849;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36818);
}
}


var G__36850 = seq__36279_36812;
var G__36851 = chunk__36281_36813;
var G__36852 = count__36282_36814;
var G__36853 = (i__36283_36815 + (1));
seq__36279_36812 = G__36850;
chunk__36281_36813 = G__36851;
count__36282_36814 = G__36852;
i__36283_36815 = G__36853;
continue;
} else {
var G__36854 = seq__36279_36812;
var G__36855 = chunk__36281_36813;
var G__36856 = count__36282_36814;
var G__36857 = (i__36283_36815 + (1));
seq__36279_36812 = G__36854;
chunk__36281_36813 = G__36855;
count__36282_36814 = G__36856;
i__36283_36815 = G__36857;
continue;
}
} else {
var temp__5735__auto___36858 = cljs.core.seq(seq__36279_36812);
if(temp__5735__auto___36858){
var seq__36279_36859__$1 = temp__5735__auto___36858;
if(cljs.core.chunked_seq_QMARK_(seq__36279_36859__$1)){
var c__4485__auto___36860 = cljs.core.chunk_first(seq__36279_36859__$1);
var G__36861 = cljs.core.chunk_rest(seq__36279_36859__$1);
var G__36862 = c__4485__auto___36860;
var G__36863 = cljs.core.count(c__4485__auto___36860);
var G__36864 = (0);
seq__36279_36812 = G__36861;
chunk__36281_36813 = G__36862;
count__36282_36814 = G__36863;
i__36283_36815 = G__36864;
continue;
} else {
var child_struct_36865 = cljs.core.first(seq__36279_36859__$1);
if((!((child_struct_36865 == null)))){
if(typeof child_struct_36865 === 'string'){
var text_36867 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36867),child_struct_36865].join(''));
} else {
var children_36868 = shadow.dom.svg_node(child_struct_36865);
if(cljs.core.seq_QMARK_(children_36868)){
var seq__36321_36870 = cljs.core.seq(children_36868);
var chunk__36323_36871 = null;
var count__36324_36872 = (0);
var i__36325_36873 = (0);
while(true){
if((i__36325_36873 < count__36324_36872)){
var child_36874 = chunk__36323_36871.cljs$core$IIndexed$_nth$arity$2(null,i__36325_36873);
if(cljs.core.truth_(child_36874)){
node.appendChild(child_36874);


var G__36875 = seq__36321_36870;
var G__36876 = chunk__36323_36871;
var G__36877 = count__36324_36872;
var G__36878 = (i__36325_36873 + (1));
seq__36321_36870 = G__36875;
chunk__36323_36871 = G__36876;
count__36324_36872 = G__36877;
i__36325_36873 = G__36878;
continue;
} else {
var G__36879 = seq__36321_36870;
var G__36880 = chunk__36323_36871;
var G__36881 = count__36324_36872;
var G__36882 = (i__36325_36873 + (1));
seq__36321_36870 = G__36879;
chunk__36323_36871 = G__36880;
count__36324_36872 = G__36881;
i__36325_36873 = G__36882;
continue;
}
} else {
var temp__5735__auto___36883__$1 = cljs.core.seq(seq__36321_36870);
if(temp__5735__auto___36883__$1){
var seq__36321_36884__$1 = temp__5735__auto___36883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36321_36884__$1)){
var c__4485__auto___36885 = cljs.core.chunk_first(seq__36321_36884__$1);
var G__36887 = cljs.core.chunk_rest(seq__36321_36884__$1);
var G__36888 = c__4485__auto___36885;
var G__36889 = cljs.core.count(c__4485__auto___36885);
var G__36890 = (0);
seq__36321_36870 = G__36887;
chunk__36323_36871 = G__36888;
count__36324_36872 = G__36889;
i__36325_36873 = G__36890;
continue;
} else {
var child_36891 = cljs.core.first(seq__36321_36884__$1);
if(cljs.core.truth_(child_36891)){
node.appendChild(child_36891);


var G__36892 = cljs.core.next(seq__36321_36884__$1);
var G__36893 = null;
var G__36894 = (0);
var G__36895 = (0);
seq__36321_36870 = G__36892;
chunk__36323_36871 = G__36893;
count__36324_36872 = G__36894;
i__36325_36873 = G__36895;
continue;
} else {
var G__36896 = cljs.core.next(seq__36321_36884__$1);
var G__36897 = null;
var G__36898 = (0);
var G__36899 = (0);
seq__36321_36870 = G__36896;
chunk__36323_36871 = G__36897;
count__36324_36872 = G__36898;
i__36325_36873 = G__36899;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36868);
}
}


var G__36900 = cljs.core.next(seq__36279_36859__$1);
var G__36901 = null;
var G__36902 = (0);
var G__36903 = (0);
seq__36279_36812 = G__36900;
chunk__36281_36813 = G__36901;
count__36282_36814 = G__36902;
i__36283_36815 = G__36903;
continue;
} else {
var G__36904 = cljs.core.next(seq__36279_36859__$1);
var G__36905 = null;
var G__36906 = (0);
var G__36907 = (0);
seq__36279_36812 = G__36904;
chunk__36281_36813 = G__36905;
count__36282_36814 = G__36906;
i__36283_36815 = G__36907;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__36334_36908 = shadow.dom._to_svg;
var G__36335_36909 = "string";
var G__36336_36910 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__36334_36908,G__36335_36909,G__36336_36910);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__36339_36911 = shadow.dom._to_svg;
var G__36340_36912 = "null";
var G__36341_36913 = (function (_){
return null;
});
goog.object.set(G__36339_36911,G__36340_36912,G__36341_36913);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4671__auto__ = [];
var len__4665__auto___36917 = arguments.length;
var i__4666__auto___36918 = (0);
while(true){
if((i__4666__auto___36918 < len__4665__auto___36917)){
args__4671__auto__.push((arguments[i__4666__auto___36918]));

var G__36919 = (i__4666__auto___36918 + (1));
i__4666__auto___36918 = G__36919;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36343){
var G__36344 = cljs.core.first(seq36343);
var seq36343__$1 = cljs.core.next(seq36343);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36344,seq36343__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36346 = arguments.length;
switch (G__36346) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__36347_36922 = shadow.dom.dom_node(el);
var G__36348_36923 = cljs.core.name(event);
var G__36349_36924 = event_fn;
shadow.dom.dom_listen(G__36347_36922,G__36348_36923,G__36349_36924);

if(cljs.core.truth_((function (){var and__4050__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4050__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4050__auto__;
}
})())){
var c__34084__auto___36929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_36354){
var state_val_36355 = (state_36354[(1)]);
if((state_val_36355 === (1))){
var state_36354__$1 = state_36354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36354__$1,(2),once_or_cleanup);
} else {
if((state_val_36355 === (2))){
var inst_36351 = (state_36354[(2)]);
var inst_36352 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36354__$1 = (function (){var statearr_36356 = state_36354;
(statearr_36356[(7)] = inst_36351);

return statearr_36356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36354__$1,inst_36352);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33995__auto__ = null;
var shadow$dom$state_machine__33995__auto____0 = (function (){
var statearr_36357 = [null,null,null,null,null,null,null,null];
(statearr_36357[(0)] = shadow$dom$state_machine__33995__auto__);

(statearr_36357[(1)] = (1));

return statearr_36357;
});
var shadow$dom$state_machine__33995__auto____1 = (function (state_36354){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_36354);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e36358){if((e36358 instanceof Object)){
var ex__33998__auto__ = e36358;
var statearr_36359_36936 = state_36354;
(statearr_36359_36936[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36940 = state_36354;
state_36354 = G__36940;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
shadow$dom$state_machine__33995__auto__ = function(state_36354){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33995__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33995__auto____1.call(this,state_36354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33995__auto____0;
shadow$dom$state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33995__auto____1;
return shadow$dom$state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_36360 = f__34085__auto__();
(statearr_36360[(6)] = c__34084__auto___36929);

return statearr_36360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
