goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27209){
var vec__27210 = p__27209;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27210,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__27213 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27229 = arguments.length;
switch (G__27229) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4149__auto__ = cljs.core.count(a);
var y__4150__auto__ = cljs.core.count(b);
return ((x__4149__auto__ > y__4150__auto__) ? x__4149__auto__ : y__4150__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4363__auto__ = (((x == null))?null:x);
var m__4364__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4364__auto__.call(null,x));
} else {
var m__4361__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4361__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4363__auto__ = (((a == null))?null:a);
var m__4364__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4363__auto__)]);
if((!((m__4364__auto__ == null)))){
return (m__4364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4364__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4364__auto__.call(null,a,b));
} else {
var m__4361__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4361__auto__ == null)))){
return (m__4361__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4361__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4361__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__27254_27342 = clojure.data.equality_partition;
var G__27255_27343 = "null";
var G__27256_27344 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__27254_27342,G__27255_27343,G__27256_27344);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27257_27347 = clojure.data.equality_partition;
var G__27258_27348 = "string";
var G__27259_27349 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__27257_27347,G__27258_27348,G__27259_27349);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27260_27352 = clojure.data.equality_partition;
var G__27261_27353 = "number";
var G__27262_27354 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__27260_27352,G__27261_27353,G__27262_27354);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27263_27355 = clojure.data.equality_partition;
var G__27264_27356 = "array";
var G__27265_27357 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__27263_27355,G__27264_27356,G__27265_27357);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27266_27358 = clojure.data.equality_partition;
var G__27267_27359 = "function";
var G__27268_27360 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__27266_27358,G__27267_27359,G__27268_27360);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27269_27361 = clojure.data.equality_partition;
var G__27270_27362 = "boolean";
var G__27271_27363 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__27269_27361,G__27270_27362,G__27271_27363);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__27273_27368 = clojure.data.equality_partition;
var G__27274_27369 = "_";
var G__27275_27370 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__27273_27368,G__27274_27369,G__27275_27370);
goog.object.set(clojure.data.Diff,"null",true);

var G__27280_27375 = clojure.data.diff_similar;
var G__27281_27376 = "null";
var G__27282_27377 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__27280_27375,G__27281_27376,G__27282_27377);

goog.object.set(clojure.data.Diff,"string",true);

var G__27283_27378 = clojure.data.diff_similar;
var G__27284_27379 = "string";
var G__27285_27380 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__27283_27378,G__27284_27379,G__27285_27380);

goog.object.set(clojure.data.Diff,"number",true);

var G__27286_27381 = clojure.data.diff_similar;
var G__27287_27382 = "number";
var G__27288_27383 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__27286_27381,G__27287_27382,G__27288_27383);

goog.object.set(clojure.data.Diff,"array",true);

var G__27289_27387 = clojure.data.diff_similar;
var G__27290_27388 = "array";
var G__27291_27389 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__27289_27387,G__27290_27388,G__27291_27389);

goog.object.set(clojure.data.Diff,"function",true);

var G__27307_27393 = clojure.data.diff_similar;
var G__27308_27394 = "function";
var G__27309_27395 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__27307_27393,G__27308_27394,G__27309_27395);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__27310_27396 = clojure.data.diff_similar;
var G__27311_27397 = "boolean";
var G__27312_27398 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__27310_27396,G__27311_27397,G__27312_27398);

goog.object.set(clojure.data.Diff,"_",true);

var G__27315_27402 = clojure.data.diff_similar;
var G__27316_27403 = "_";
var G__27317_27404 = (function (a,b){
var fexpr__27322 = (function (){var G__27323 = clojure.data.equality_partition(a);
var G__27323__$1 = (((G__27323 instanceof cljs.core.Keyword))?G__27323.fqn:null);
switch (G__27323__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27323__$1)].join('')));

}
})();
return (fexpr__27322.cljs$core$IFn$_invoke$arity$2 ? fexpr__27322.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27322.call(null,a,b));
});
goog.object.set(G__27315_27402,G__27316_27403,G__27317_27404);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
