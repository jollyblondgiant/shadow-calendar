goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.object._id[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.object._id["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.object._type[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.object._type["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.object._data[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4364__auto__.call(null,this$));
} else {
var m__4361__auto__ = (shadow.object._data["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4361__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.object._update[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4364__auto__.call(null,this$,update_fn));
} else {
var m__4361__auto__ = (shadow.object._update["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4361__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4363__auto__ = (((this$ == null))?null:this$);
var m__4364__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4364__auto__.call(null,this$,cause));
} else {
var m__4361__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4361__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__36431 = arguments.length;
switch (G__36431) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4061__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4061__auto__){
return or__4061__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__37012 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__37012;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36591_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__36591_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__36611 = arguments.length;
switch (G__36611) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36616_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__36616_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__36622){
var map__36623 = p__36622;
var map__36623__$1 = (((((!((map__36623 == null))))?(((((map__36623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36623):map__36623);
var oref = map__36623__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36623__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36627_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__36627_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__37017 = parent;
dom = G__37017;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37022 = arguments.length;
var i__4666__auto___37023 = (0);
while(true){
if((i__4666__auto___37023 < len__4665__auto___37022)){
args__4671__auto__.push((arguments[i__4666__auto___37023]));

var G__37027 = (i__4666__auto___37023 + (1));
i__4666__auto___37023 = G__37027;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((2) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4672__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__36655 = cljs.core.seq(reactions_to_trigger);
var chunk__36656 = null;
var count__36657 = (0);
var i__36658 = (0);
while(true){
if((i__36658 < count__36657)){
var rfn = chunk__36656.cljs$core$IIndexed$_nth$arity$2(null,i__36658);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__37031 = seq__36655;
var G__37032 = chunk__36656;
var G__37033 = count__36657;
var G__37034 = (i__36658 + (1));
seq__36655 = G__37031;
chunk__36656 = G__37032;
count__36657 = G__37033;
i__36658 = G__37034;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36655);
if(temp__5735__auto____$1){
var seq__36655__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36655__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__36655__$1);
var G__37038 = cljs.core.chunk_rest(seq__36655__$1);
var G__37039 = c__4485__auto__;
var G__37040 = cljs.core.count(c__4485__auto__);
var G__37041 = (0);
seq__36655 = G__37038;
chunk__36656 = G__37039;
count__36657 = G__37040;
i__36658 = G__37041;
continue;
} else {
var rfn = cljs.core.first(seq__36655__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__37045 = cljs.core.next(seq__36655__$1);
var G__37046 = null;
var G__37047 = (0);
var G__37048 = (0);
seq__36655 = G__37045;
chunk__36656 = G__37046;
count__36657 = G__37047;
i__36658 = G__37048;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq36652){
var G__36653 = cljs.core.first(seq36652);
var seq36652__$1 = cljs.core.next(seq36652);
var G__36654 = cljs.core.first(seq36652__$1);
var seq36652__$2 = cljs.core.next(seq36652__$1);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36653,G__36654,seq36652__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__36672_37049 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__36673_37050 = null;
var count__36674_37051 = (0);
var i__36675_37052 = (0);
while(true){
if((i__36675_37052 < count__36674_37051)){
var child_37053 = chunk__36673_37050.cljs$core$IIndexed$_nth$arity$2(null,i__36675_37052);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37053,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37053,ev,notify_fn));


var G__37054 = seq__36672_37049;
var G__37055 = chunk__36673_37050;
var G__37056 = count__36674_37051;
var G__37057 = (i__36675_37052 + (1));
seq__36672_37049 = G__37054;
chunk__36673_37050 = G__37055;
count__36674_37051 = G__37056;
i__36675_37052 = G__37057;
continue;
} else {
var temp__5735__auto___37058 = cljs.core.seq(seq__36672_37049);
if(temp__5735__auto___37058){
var seq__36672_37059__$1 = temp__5735__auto___37058;
if(cljs.core.chunked_seq_QMARK_(seq__36672_37059__$1)){
var c__4485__auto___37060 = cljs.core.chunk_first(seq__36672_37059__$1);
var G__37061 = cljs.core.chunk_rest(seq__36672_37059__$1);
var G__37062 = c__4485__auto___37060;
var G__37063 = cljs.core.count(c__4485__auto___37060);
var G__37064 = (0);
seq__36672_37049 = G__37061;
chunk__36673_37050 = G__37062;
count__36674_37051 = G__37063;
i__36675_37052 = G__37064;
continue;
} else {
var child_37066 = cljs.core.first(seq__36672_37059__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37066,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37066,ev,notify_fn));


var G__37067 = cljs.core.next(seq__36672_37059__$1);
var G__37068 = null;
var G__37069 = (0);
var G__37070 = (0);
seq__36672_37049 = G__37067;
chunk__36673_37050 = G__37068;
count__36674_37051 = G__37069;
i__36675_37052 = G__37070;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37071 = arguments.length;
var i__4666__auto___37072 = (0);
while(true){
if((i__4666__auto___37072 < len__4665__auto___37071)){
args__4671__auto__.push((arguments[i__4666__auto___37072]));

var G__37073 = (i__4666__auto___37072 + (1));
i__4666__auto___37072 = G__37073;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((2) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4672__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq36689){
var G__36690 = cljs.core.first(seq36689);
var seq36689__$1 = cljs.core.next(seq36689);
var G__36691 = cljs.core.first(seq36689__$1);
var seq36689__$2 = cljs.core.next(seq36689__$1);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36690,G__36691,seq36689__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37074 = arguments.length;
var i__4666__auto___37075 = (0);
while(true){
if((i__4666__auto___37075 < len__4665__auto___37074)){
args__4671__auto__.push((arguments[i__4666__auto___37075]));

var G__37078 = (i__4666__auto___37075 + (1));
i__4666__auto___37075 = G__37078;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((2) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4672__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__37079 = shadow.object.get_parent(current);
current = G__37079;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq36692){
var G__36693 = cljs.core.first(seq36692);
var seq36692__$1 = cljs.core.next(seq36692);
var G__36694 = cljs.core.first(seq36692__$1);
var seq36692__$2 = cljs.core.next(seq36692__$1);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36693,G__36694,seq36692__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37081 = arguments.length;
var i__4666__auto___37082 = (0);
while(true){
if((i__4666__auto___37082 < len__4665__auto___37081)){
args__4671__auto__.push((arguments[i__4666__auto___37082]));

var G__37083 = (i__4666__auto___37082 + (1));
i__4666__auto___37082 = G__37083;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((2) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4672__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq36695){
var G__36696 = cljs.core.first(seq36695);
var seq36695__$1 = cljs.core.next(seq36695);
var G__36697 = cljs.core.first(seq36695__$1);
var seq36695__$2 = cljs.core.next(seq36695__$1);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36696,G__36697,seq36695__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__36711 = this$;
var G__36712 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__36711,G__36712) : custom_remove.call(null,G__36711,G__36712));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__36714 = arguments.length;
switch (G__36714) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__36715 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__36716 = null;
var count__36717 = (0);
var i__36718 = (0);
while(true){
if((i__36718 < count__36717)){
var vec__36725 = chunk__36716.cljs$core$IIndexed$_nth$arity$2(null,i__36718);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36725,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36725,(1),null);
var ev_def = vec__36725;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_37088__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36715,chunk__36716,count__36717,i__36718,vec__36725,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36715,chunk__36716,count__36717,i__36718,vec__36725,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36715,chunk__36716,count__36717,i__36718,handler_37088__$1,vec__36725,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37088__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37088__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37088__$1.call(null,oref,e,el));
});})(seq__36715,chunk__36716,count__36717,i__36718,handler_37088__$1,vec__36725,ev,handler,ev_def))
);


var G__37089 = seq__36715;
var G__37090 = chunk__36716;
var G__37091 = count__36717;
var G__37092 = (i__36718 + (1));
seq__36715 = G__37089;
chunk__36716 = G__37090;
count__36717 = G__37091;
i__36718 = G__37092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36715);
if(temp__5735__auto__){
var seq__36715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36715__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__36715__$1);
var G__37095 = cljs.core.chunk_rest(seq__36715__$1);
var G__37096 = c__4485__auto__;
var G__37097 = cljs.core.count(c__4485__auto__);
var G__37098 = (0);
seq__36715 = G__37095;
chunk__36716 = G__37096;
count__36717 = G__37097;
i__36718 = G__37098;
continue;
} else {
var vec__36728 = cljs.core.first(seq__36715__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36728,(1),null);
var ev_def = vec__36728;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_37099__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36715,chunk__36716,count__36717,i__36718,vec__36728,ev,handler,ev_def,seq__36715__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36715,chunk__36716,count__36717,i__36718,vec__36728,ev,handler,ev_def,seq__36715__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36715,chunk__36716,count__36717,i__36718,handler_37099__$1,vec__36728,ev,handler,ev_def,seq__36715__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37099__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37099__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37099__$1.call(null,oref,e,el));
});})(seq__36715,chunk__36716,count__36717,i__36718,handler_37099__$1,vec__36728,ev,handler,ev_def,seq__36715__$1,temp__5735__auto__))
);


var G__37103 = cljs.core.next(seq__36715__$1);
var G__37104 = null;
var G__37105 = (0);
var G__37106 = (0);
seq__36715 = G__37103;
chunk__36716 = G__37104;
count__36717 = G__37105;
i__36718 = G__37106;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__36731){
var vec__36732 = p__36731;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732,(1),null);
if(cljs.core.truth_((function (){var and__4050__auto__ = event;
if(cljs.core.truth_(and__4050__auto__)){
return handler;
} else {
return and__4050__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37132 = arguments.length;
var i__4666__auto___37133 = (0);
while(true){
if((i__4666__auto___37133 < len__4665__auto___37132)){
args__4671__auto__.push((arguments[i__4666__auto___37133]));

var G__37134 = (i__4666__auto___37133 + (1));
i__4666__auto___37133 = G__37134;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e36737){if((e36737 instanceof Object)){
var e = e36737;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e36737;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq36735){
var G__36736 = cljs.core.first(seq36735);
var seq36735__$1 = cljs.core.next(seq36735);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36736,seq36735__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__36739 = arguments.length;
switch (G__36739) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__36741 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36741) : shadow.dom.build.call(null,G__36741));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4315__auto__,k__4316__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
return this__4315__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4316__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4317__auto__,k36743,else__4318__auto__){
var self__ = this;
var this__4317__auto____$1 = this;
var G__36747 = k36743;
var G__36747__$1 = (((G__36747 instanceof cljs.core.Keyword))?G__36747.fqn:null);
switch (G__36747__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36743,else__4318__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4334__auto__,f__4335__auto__,init__4336__auto__){
var self__ = this;
var this__4334__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4337__auto__,p__36748){
var vec__36749 = p__36748;
var k__4338__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36749,(0),null);
var v__4339__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36749,(1),null);
return (f__4335__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4335__auto__.cljs$core$IFn$_invoke$arity$3(ret__4337__auto__,k__4338__auto__,v__4339__auto__) : f__4335__auto__.call(null,ret__4337__auto__,k__4338__auto__,v__4339__auto__));
}),init__4336__auto__,this__4334__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4329__auto__,writer__4330__auto__,opts__4331__auto__){
var self__ = this;
var this__4329__auto____$1 = this;
var pr_pair__4332__auto__ = (function (keyval__4333__auto__){
return cljs.core.pr_sequential_writer(writer__4330__auto__,cljs.core.pr_writer,""," ","",opts__4331__auto__,keyval__4333__auto__);
});
return cljs.core.pr_sequential_writer(writer__4330__auto__,pr_pair__4332__auto__,"#shadow.object.Watch{",", ","}",opts__4331__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36742){
var self__ = this;
var G__36742__$1 = this;
return (new cljs.core.RecordIter((0),G__36742__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4310__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4319__auto__){
var self__ = this;
var this__4319__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4311__auto__){
var self__ = this;
var this__4311__auto____$1 = this;
var h__4173__auto__ = self__.__hash;
if((!((h__4173__auto__ == null)))){
return h__4173__auto__;
} else {
var h__4173__auto____$1 = (function (){var fexpr__36752 = (function (coll__4312__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4312__auto__));
});
return fexpr__36752(this__4311__auto____$1);
})();
(self__.__hash = h__4173__auto____$1);

return h__4173__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36744,other36745){
var self__ = this;
var this36744__$1 = this;
return (((!((other36745 == null)))) && ((this36744__$1.constructor === other36745.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36744__$1.key,other36745.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36744__$1.handler,other36745.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36744__$1.__extmap,other36745.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4324__auto__,k__4325__auto__){
var self__ = this;
var this__4324__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4325__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4324__auto____$1),self__.__meta),k__4325__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4325__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4322__auto__,k__4323__auto__,G__36742){
var self__ = this;
var this__4322__auto____$1 = this;
var pred__36753 = cljs.core.keyword_identical_QMARK_;
var expr__36754 = k__4323__auto__;
if(cljs.core.truth_((function (){var G__36756 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__36757 = expr__36754;
return (pred__36753.cljs$core$IFn$_invoke$arity$2 ? pred__36753.cljs$core$IFn$_invoke$arity$2(G__36756,G__36757) : pred__36753.call(null,G__36756,G__36757));
})())){
return (new shadow.object.Watch(G__36742,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36758 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__36759 = expr__36754;
return (pred__36753.cljs$core$IFn$_invoke$arity$2 ? pred__36753.cljs$core$IFn$_invoke$arity$2(G__36758,G__36759) : pred__36753.call(null,G__36758,G__36759));
})())){
return (new shadow.object.Watch(self__.key,G__36742,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4323__auto__,G__36742),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4327__auto__){
var self__ = this;
var this__4327__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4314__auto__,G__36742){
var self__ = this;
var this__4314__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__36742,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4320__auto__,entry__4321__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4321__auto__)){
return this__4320__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4321__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4320__auto____$1,entry__4321__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4358__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4358__auto__,writer__4359__auto__){
return cljs.core._write(writer__4359__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__36746){
var extmap__4354__auto__ = (function (){var G__36760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36746,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__36746)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36760);
} else {
return G__36760;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__36746),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__36746),null,cljs.core.not_empty(extmap__4354__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36761_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__36761_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__36767 = cljs.core.seq(self__.watches);
var chunk__36768 = null;
var count__36769 = (0);
var i__36770 = (0);
while(true){
if((i__36770 < count__36769)){
var map__36779 = chunk__36768.cljs$core$IIndexed$_nth$arity$2(null,i__36770);
var map__36779__$1 = (((((!((map__36779 == null))))?(((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36779):map__36779);
var watch = map__36779__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36779__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__37233 = seq__36767;
var G__37234 = chunk__36768;
var G__37235 = count__36769;
var G__37236 = (i__36770 + (1));
seq__36767 = G__37233;
chunk__36768 = G__37234;
count__36769 = G__37235;
i__36770 = G__37236;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36767);
if(temp__5735__auto__){
var seq__36767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36767__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__36767__$1);
var G__37240 = cljs.core.chunk_rest(seq__36767__$1);
var G__37241 = c__4485__auto__;
var G__37242 = cljs.core.count(c__4485__auto__);
var G__37243 = (0);
seq__36767 = G__37240;
chunk__36768 = G__37241;
count__36769 = G__37242;
i__36770 = G__37243;
continue;
} else {
var map__36781 = cljs.core.first(seq__36767__$1);
var map__36781__$1 = (((((!((map__36781 == null))))?(((((map__36781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36781):map__36781);
var watch = map__36781__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__37245 = cljs.core.next(seq__36767__$1);
var G__37246 = null;
var G__37247 = (0);
var G__37248 = (0);
seq__36767 = G__37245;
chunk__36768 = G__37246;
count__36769 = G__37247;
i__36770 = G__37248;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__36794_37249 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__36795_37250 = null;
var count__36796_37251 = (0);
var i__36797_37252 = (0);
while(true){
if((i__36797_37252 < count__36796_37251)){
var child_37254 = chunk__36795_37250.cljs$core$IIndexed$_nth$arity$2(null,i__36797_37252);
shadow.object._destroy_BANG_(child_37254,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__37255 = seq__36794_37249;
var G__37256 = chunk__36795_37250;
var G__37257 = count__36796_37251;
var G__37258 = (i__36797_37252 + (1));
seq__36794_37249 = G__37255;
chunk__36795_37250 = G__37256;
count__36796_37251 = G__37257;
i__36797_37252 = G__37258;
continue;
} else {
var temp__5735__auto___37260 = cljs.core.seq(seq__36794_37249);
if(temp__5735__auto___37260){
var seq__36794_37261__$1 = temp__5735__auto___37260;
if(cljs.core.chunked_seq_QMARK_(seq__36794_37261__$1)){
var c__4485__auto___37262 = cljs.core.chunk_first(seq__36794_37261__$1);
var G__37263 = cljs.core.chunk_rest(seq__36794_37261__$1);
var G__37264 = c__4485__auto___37262;
var G__37265 = cljs.core.count(c__4485__auto___37262);
var G__37266 = (0);
seq__36794_37249 = G__37263;
chunk__36795_37250 = G__37264;
count__36796_37251 = G__37265;
i__36797_37252 = G__37266;
continue;
} else {
var child_37267 = cljs.core.first(seq__36794_37261__$1);
shadow.object._destroy_BANG_(child_37267,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__37269 = cljs.core.next(seq__36794_37261__$1);
var G__37270 = null;
var G__37271 = (0);
var G__37272 = (0);
seq__36794_37249 = G__37269;
chunk__36795_37250 = G__37270;
count__36796_37251 = G__37271;
i__36797_37252 = G__37272;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_37273 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_37273 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_37273);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4304__auto__,writer__4305__auto__,opt__4306__auto__){
return cljs.core._write(writer__4305__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__36841 = arguments.length;
switch (G__36841) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__36869 = arguments.length;
switch (G__36869) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4671__auto__ = [];
var len__4665__auto___37314 = arguments.length;
var i__4666__auto___37315 = (0);
while(true){
if((i__4666__auto___37315 < len__4665__auto___37314)){
args__4671__auto__.push((arguments[i__4666__auto___37315]));

var G__37316 = (i__4666__auto___37315 + (1));
i__4666__auto___37315 = G__37316;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((2) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4672__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_37317 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___37318 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___37318)){
var dom_37319 = temp__5733__auto___37318;
shadow.dom.set_data(dom_37319,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_37319,dom_events_37317);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37319], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37319], 0));
} else {
var temp__5735__auto___37320 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___37320)){
var dom_fn_37321 = temp__5735__auto___37320;
var dom_37322 = (function (){var G__36921 = (dom_fn_37321.cljs$core$IFn$_invoke$arity$2 ? dom_fn_37321.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_37321.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36921) : shadow.dom.build.call(null,G__36921));
})();
shadow.dom.set_data(dom_37322,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37322], 0));

shadow.object.bind_dom_events(oref,dom_37322,dom_events_37317);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37322], 0));
} else {
}
}

var temp__5735__auto___37323 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___37323)){
var watches_37324 = temp__5735__auto___37323;
var seq__36925_37325 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_37324));
var chunk__36926_37326 = null;
var count__36927_37327 = (0);
var i__36928_37328 = (0);
while(true){
if((i__36928_37328 < count__36927_37327)){
var vec__36937_37329 = chunk__36926_37326.cljs$core$IIndexed$_nth$arity$2(null,i__36928_37328);
var attr_37330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36937_37329,(0),null);
var handler_37331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36937_37329,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37330,((function (seq__36925_37325,chunk__36926_37326,count__36927_37327,i__36928_37328,vec__36937_37329,attr_37330,handler_37331,watches_37324,temp__5735__auto___37323,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37331.cljs$core$IFn$_invoke$arity$3 ? handler_37331.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37331.call(null,oref,old,new$));
});})(seq__36925_37325,chunk__36926_37326,count__36927_37327,i__36928_37328,vec__36937_37329,attr_37330,handler_37331,watches_37324,temp__5735__auto___37323,oid,parent,result_chan,odef,obj,oref))
);


var G__37332 = seq__36925_37325;
var G__37333 = chunk__36926_37326;
var G__37334 = count__36927_37327;
var G__37335 = (i__36928_37328 + (1));
seq__36925_37325 = G__37332;
chunk__36926_37326 = G__37333;
count__36927_37327 = G__37334;
i__36928_37328 = G__37335;
continue;
} else {
var temp__5735__auto___37336__$1 = cljs.core.seq(seq__36925_37325);
if(temp__5735__auto___37336__$1){
var seq__36925_37337__$1 = temp__5735__auto___37336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36925_37337__$1)){
var c__4485__auto___37338 = cljs.core.chunk_first(seq__36925_37337__$1);
var G__37339 = cljs.core.chunk_rest(seq__36925_37337__$1);
var G__37340 = c__4485__auto___37338;
var G__37341 = cljs.core.count(c__4485__auto___37338);
var G__37342 = (0);
seq__36925_37325 = G__37339;
chunk__36926_37326 = G__37340;
count__36927_37327 = G__37341;
i__36928_37328 = G__37342;
continue;
} else {
var vec__36941_37343 = cljs.core.first(seq__36925_37337__$1);
var attr_37344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941_37343,(0),null);
var handler_37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941_37343,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37344,((function (seq__36925_37325,chunk__36926_37326,count__36927_37327,i__36928_37328,vec__36941_37343,attr_37344,handler_37345,seq__36925_37337__$1,temp__5735__auto___37336__$1,watches_37324,temp__5735__auto___37323,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37345.cljs$core$IFn$_invoke$arity$3 ? handler_37345.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37345.call(null,oref,old,new$));
});})(seq__36925_37325,chunk__36926_37326,count__36927_37327,i__36928_37328,vec__36941_37343,attr_37344,handler_37345,seq__36925_37337__$1,temp__5735__auto___37336__$1,watches_37324,temp__5735__auto___37323,oid,parent,result_chan,odef,obj,oref))
);


var G__37346 = cljs.core.next(seq__36925_37337__$1);
var G__37347 = null;
var G__37348 = (0);
var G__37349 = (0);
seq__36925_37325 = G__37346;
chunk__36926_37326 = G__37347;
count__36927_37327 = G__37348;
i__36928_37328 = G__37349;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq36914){
var G__36915 = cljs.core.first(seq36914);
var seq36914__$1 = cljs.core.next(seq36914);
var G__36916 = cljs.core.first(seq36914__$1);
var seq36914__$2 = cljs.core.next(seq36914__$1);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36915,G__36916,seq36914__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__36946 = arguments.length;
switch (G__36946) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__36944_SHARP_){
var G__36947 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__36944_SHARP_) : node_gen.call(null,p1__36944_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__36947) : shadow.dom.build.call(null,G__36947));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__36948 = new_child;
var G__36949 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__36948,G__36949) : shadow.object.notify_down_BANG_.call(null,G__36948,G__36949));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__36950_37358 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__36951_37359 = null;
var count__36952_37360 = (0);
var i__36953_37361 = (0);
while(true){
if((i__36953_37361 < count__36952_37360)){
var obj_37362 = chunk__36951_37359.cljs$core$IIndexed$_nth$arity$2(null,i__36953_37361);
var obj_37363__$1 = shadow.object.get_from_dom(obj_37362);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37363__$1);


var G__37364 = seq__36950_37358;
var G__37365 = chunk__36951_37359;
var G__37366 = count__36952_37360;
var G__37367 = (i__36953_37361 + (1));
seq__36950_37358 = G__37364;
chunk__36951_37359 = G__37365;
count__36952_37360 = G__37366;
i__36953_37361 = G__37367;
continue;
} else {
var temp__5735__auto___37368 = cljs.core.seq(seq__36950_37358);
if(temp__5735__auto___37368){
var seq__36950_37369__$1 = temp__5735__auto___37368;
if(cljs.core.chunked_seq_QMARK_(seq__36950_37369__$1)){
var c__4485__auto___37370 = cljs.core.chunk_first(seq__36950_37369__$1);
var G__37371 = cljs.core.chunk_rest(seq__36950_37369__$1);
var G__37372 = c__4485__auto___37370;
var G__37373 = cljs.core.count(c__4485__auto___37370);
var G__37374 = (0);
seq__36950_37358 = G__37371;
chunk__36951_37359 = G__37372;
count__36952_37360 = G__37373;
i__36953_37361 = G__37374;
continue;
} else {
var obj_37375 = cljs.core.first(seq__36950_37369__$1);
var obj_37376__$1 = shadow.object.get_from_dom(obj_37375);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37376__$1);


var G__37377 = cljs.core.next(seq__36950_37369__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__36950_37358 = G__37377;
chunk__36951_37359 = G__37378;
count__36952_37360 = G__37379;
i__36953_37361 = G__37380;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__36956 = arguments.length;
switch (G__36956) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__36954_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__36954_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__36957){
var vec__36958 = p__36957;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__36961_37386 = cljs.core.seq((function (){var G__36966 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__36966) : coll_transform.call(null,G__36966));
})());
var chunk__36962_37387 = null;
var count__36963_37388 = (0);
var i__36964_37389 = (0);
while(true){
if((i__36964_37389 < count__36963_37388)){
var item_37390 = chunk__36962_37387.cljs$core$IIndexed$_nth$arity$2(null,i__36964_37389);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37390));


var G__37391 = seq__36961_37386;
var G__37392 = chunk__36962_37387;
var G__37393 = count__36963_37388;
var G__37394 = (i__36964_37389 + (1));
seq__36961_37386 = G__37391;
chunk__36962_37387 = G__37392;
count__36963_37388 = G__37393;
i__36964_37389 = G__37394;
continue;
} else {
var temp__5735__auto___37395 = cljs.core.seq(seq__36961_37386);
if(temp__5735__auto___37395){
var seq__36961_37396__$1 = temp__5735__auto___37395;
if(cljs.core.chunked_seq_QMARK_(seq__36961_37396__$1)){
var c__4485__auto___37397 = cljs.core.chunk_first(seq__36961_37396__$1);
var G__37398 = cljs.core.chunk_rest(seq__36961_37396__$1);
var G__37399 = c__4485__auto___37397;
var G__37400 = cljs.core.count(c__4485__auto___37397);
var G__37401 = (0);
seq__36961_37386 = G__37398;
chunk__36962_37387 = G__37399;
count__36963_37388 = G__37400;
i__36964_37389 = G__37401;
continue;
} else {
var item_37402 = cljs.core.first(seq__36961_37396__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37402));


var G__37403 = cljs.core.next(seq__36961_37396__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__36961_37386 = G__37403;
chunk__36962_37387 = G__37404;
count__36963_37388 = G__37405;
i__36964_37389 = G__37406;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4152__auto__ = count_new;
var y__4153__auto__ = count_children;
return ((x__4152__auto__ < y__4153__auto__) ? x__4152__auto__ : y__4153__auto__);
})();
var n__4542__auto___37407 = count_children__$1;
var idx_37408 = (0);
while(true){
if((idx_37408 < n__4542__auto___37407)){
var cn_37409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_37408);
var cc_37410 = shadow.object.get_from_dom(cn_37409);
var ckey_37411 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_37410);
var cval_37412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_37410,item_key);
var vec__36967_37413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_37408);
var nkey_37414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967_37413,(0),null);
var nval_37415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36967_37413,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_37411,nkey_37414)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_37412,nval_37415)))){
} else {
var new_obj_37416 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_37414,nval_37415], null));
shadow.dom.replace_node(cn_37409,new_obj_37416);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_37410);

shadow.object.notify_tree_BANG_(new_obj_37416,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__37417 = (idx_37408 + (1));
idx_37408 = G__37417;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__36970_37418 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__36971_37419 = null;
var count__36972_37420 = (0);
var i__36973_37421 = (0);
while(true){
if((i__36973_37421 < count__36972_37420)){
var item_37425 = chunk__36971_37419.cljs$core$IIndexed$_nth$arity$2(null,i__36973_37421);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37425));


var G__37426 = seq__36970_37418;
var G__37427 = chunk__36971_37419;
var G__37428 = count__36972_37420;
var G__37429 = (i__36973_37421 + (1));
seq__36970_37418 = G__37426;
chunk__36971_37419 = G__37427;
count__36972_37420 = G__37428;
i__36973_37421 = G__37429;
continue;
} else {
var temp__5735__auto___37430 = cljs.core.seq(seq__36970_37418);
if(temp__5735__auto___37430){
var seq__36970_37431__$1 = temp__5735__auto___37430;
if(cljs.core.chunked_seq_QMARK_(seq__36970_37431__$1)){
var c__4485__auto___37432 = cljs.core.chunk_first(seq__36970_37431__$1);
var G__37433 = cljs.core.chunk_rest(seq__36970_37431__$1);
var G__37434 = c__4485__auto___37432;
var G__37435 = cljs.core.count(c__4485__auto___37432);
var G__37436 = (0);
seq__36970_37418 = G__37433;
chunk__36971_37419 = G__37434;
count__36972_37420 = G__37435;
i__36973_37421 = G__37436;
continue;
} else {
var item_37437 = cljs.core.first(seq__36970_37431__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37437));


var G__37438 = cljs.core.next(seq__36970_37431__$1);
var G__37439 = null;
var G__37440 = (0);
var G__37441 = (0);
seq__36970_37418 = G__37438;
chunk__36971_37419 = G__37439;
count__36972_37420 = G__37440;
i__36973_37421 = G__37441;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4050__auto__ = key;
if(cljs.core.truth_(and__4050__auto__)){
return path;
} else {
return and__4050__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__36974 = "inspect!";
var G__36975 = shadow.object._id(oref);
var G__36976 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__36977 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36974,G__36975,G__36976,G__36977) : shadow.object.info.call(null,G__36974,G__36975,G__36976,G__36977));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__36978_37442 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__36979_37443 = null;
var count__36980_37444 = (0);
var i__36981_37445 = (0);
while(true){
if((i__36981_37445 < count__36980_37444)){
var vec__36996_37446 = chunk__36979_37443.cljs$core$IIndexed$_nth$arity$2(null,i__36981_37445);
var id_37447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37446,(0),null);
var oref_37448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36996_37446,(1),null);
var G__36999_37449 = "dump";
var G__37000_37450 = id_37447;
var G__37001_37451 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37448)], 0));
var G__37002_37452 = cljs.core.deref(shadow.object._data(oref_37448));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__36999_37449,G__37000_37450,G__37001_37451,G__37002_37452) : shadow.object.info.call(null,G__36999_37449,G__37000_37450,G__37001_37451,G__37002_37452));


var G__37455 = seq__36978_37442;
var G__37456 = chunk__36979_37443;
var G__37457 = count__36980_37444;
var G__37458 = (i__36981_37445 + (1));
seq__36978_37442 = G__37455;
chunk__36979_37443 = G__37456;
count__36980_37444 = G__37457;
i__36981_37445 = G__37458;
continue;
} else {
var temp__5735__auto___37459 = cljs.core.seq(seq__36978_37442);
if(temp__5735__auto___37459){
var seq__36978_37460__$1 = temp__5735__auto___37459;
if(cljs.core.chunked_seq_QMARK_(seq__36978_37460__$1)){
var c__4485__auto___37461 = cljs.core.chunk_first(seq__36978_37460__$1);
var G__37462 = cljs.core.chunk_rest(seq__36978_37460__$1);
var G__37463 = c__4485__auto___37461;
var G__37464 = cljs.core.count(c__4485__auto___37461);
var G__37465 = (0);
seq__36978_37442 = G__37462;
chunk__36979_37443 = G__37463;
count__36980_37444 = G__37464;
i__36981_37445 = G__37465;
continue;
} else {
var vec__37003_37466 = cljs.core.first(seq__36978_37460__$1);
var id_37467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37003_37466,(0),null);
var oref_37468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37003_37466,(1),null);
var G__37006_37469 = "dump";
var G__37007_37470 = id_37467;
var G__37008_37471 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37468)], 0));
var G__37009_37472 = cljs.core.deref(shadow.object._data(oref_37468));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__37006_37469,G__37007_37470,G__37008_37471,G__37009_37472) : shadow.object.info.call(null,G__37006_37469,G__37007_37470,G__37008_37471,G__37009_37472));


var G__37475 = cljs.core.next(seq__36978_37460__$1);
var G__37476 = null;
var G__37477 = (0);
var G__37478 = (0);
seq__36978_37442 = G__37475;
chunk__36979_37443 = G__37476;
count__36980_37444 = G__37477;
i__36981_37445 = G__37478;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
