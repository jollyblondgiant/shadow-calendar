goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31702){
var map__31703 = p__31702;
var map__31703__$1 = (((((!((map__31703 == null))))?(((((map__31703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31703):map__31703);
var m = map__31703__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31703__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4061__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31705_31931 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31706_31932 = null;
var count__31707_31933 = (0);
var i__31708_31934 = (0);
while(true){
if((i__31708_31934 < count__31707_31933)){
var f_31935 = chunk__31706_31932.cljs$core$IIndexed$_nth$arity$2(null,i__31708_31934);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31935], 0));


var G__31936 = seq__31705_31931;
var G__31937 = chunk__31706_31932;
var G__31938 = count__31707_31933;
var G__31939 = (i__31708_31934 + (1));
seq__31705_31931 = G__31936;
chunk__31706_31932 = G__31937;
count__31707_31933 = G__31938;
i__31708_31934 = G__31939;
continue;
} else {
var temp__5735__auto___31940 = cljs.core.seq(seq__31705_31931);
if(temp__5735__auto___31940){
var seq__31705_31941__$1 = temp__5735__auto___31940;
if(cljs.core.chunked_seq_QMARK_(seq__31705_31941__$1)){
var c__4485__auto___31942 = cljs.core.chunk_first(seq__31705_31941__$1);
var G__31943 = cljs.core.chunk_rest(seq__31705_31941__$1);
var G__31944 = c__4485__auto___31942;
var G__31945 = cljs.core.count(c__4485__auto___31942);
var G__31946 = (0);
seq__31705_31931 = G__31943;
chunk__31706_31932 = G__31944;
count__31707_31933 = G__31945;
i__31708_31934 = G__31946;
continue;
} else {
var f_31947 = cljs.core.first(seq__31705_31941__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31947], 0));


var G__31948 = cljs.core.next(seq__31705_31941__$1);
var G__31949 = null;
var G__31950 = (0);
var G__31951 = (0);
seq__31705_31931 = G__31948;
chunk__31706_31932 = G__31949;
count__31707_31933 = G__31950;
i__31708_31934 = G__31951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31952 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4061__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31952], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31952)))?cljs.core.second(arglists_31952):arglists_31952)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31713_31957 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31714_31958 = null;
var count__31715_31959 = (0);
var i__31716_31960 = (0);
while(true){
if((i__31716_31960 < count__31715_31959)){
var vec__31734_31961 = chunk__31714_31958.cljs$core$IIndexed$_nth$arity$2(null,i__31716_31960);
var name_31962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31734_31961,(0),null);
var map__31737_31963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31734_31961,(1),null);
var map__31737_31964__$1 = (((((!((map__31737_31963 == null))))?(((((map__31737_31963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31737_31963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31737_31963):map__31737_31963);
var doc_31965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31737_31964__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31737_31964__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31962], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31966], 0));

if(cljs.core.truth_(doc_31965)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31965], 0));
} else {
}


var G__31967 = seq__31713_31957;
var G__31968 = chunk__31714_31958;
var G__31969 = count__31715_31959;
var G__31970 = (i__31716_31960 + (1));
seq__31713_31957 = G__31967;
chunk__31714_31958 = G__31968;
count__31715_31959 = G__31969;
i__31716_31960 = G__31970;
continue;
} else {
var temp__5735__auto___31971 = cljs.core.seq(seq__31713_31957);
if(temp__5735__auto___31971){
var seq__31713_31972__$1 = temp__5735__auto___31971;
if(cljs.core.chunked_seq_QMARK_(seq__31713_31972__$1)){
var c__4485__auto___31973 = cljs.core.chunk_first(seq__31713_31972__$1);
var G__31974 = cljs.core.chunk_rest(seq__31713_31972__$1);
var G__31975 = c__4485__auto___31973;
var G__31976 = cljs.core.count(c__4485__auto___31973);
var G__31977 = (0);
seq__31713_31957 = G__31974;
chunk__31714_31958 = G__31975;
count__31715_31959 = G__31976;
i__31716_31960 = G__31977;
continue;
} else {
var vec__31740_31978 = cljs.core.first(seq__31713_31972__$1);
var name_31979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740_31978,(0),null);
var map__31743_31980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740_31978,(1),null);
var map__31743_31981__$1 = (((((!((map__31743_31980 == null))))?(((((map__31743_31980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31743_31980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31743_31980):map__31743_31980);
var doc_31982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31743_31981__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31743_31981__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31979], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31983], 0));

if(cljs.core.truth_(doc_31982)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31982], 0));
} else {
}


var G__31984 = cljs.core.next(seq__31713_31972__$1);
var G__31985 = null;
var G__31986 = (0);
var G__31987 = (0);
seq__31713_31957 = G__31984;
chunk__31714_31958 = G__31985;
count__31715_31959 = G__31986;
i__31716_31960 = G__31987;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31745 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31746 = null;
var count__31747 = (0);
var i__31748 = (0);
while(true){
if((i__31748 < count__31747)){
var role = chunk__31746.cljs$core$IIndexed$_nth$arity$2(null,i__31748);
var temp__5735__auto___31988__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31988__$1)){
var spec_31989 = temp__5735__auto___31988__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31989)], 0));
} else {
}


var G__31990 = seq__31745;
var G__31991 = chunk__31746;
var G__31992 = count__31747;
var G__31993 = (i__31748 + (1));
seq__31745 = G__31990;
chunk__31746 = G__31991;
count__31747 = G__31992;
i__31748 = G__31993;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31745);
if(temp__5735__auto____$1){
var seq__31745__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31745__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__31745__$1);
var G__31994 = cljs.core.chunk_rest(seq__31745__$1);
var G__31995 = c__4485__auto__;
var G__31996 = cljs.core.count(c__4485__auto__);
var G__31997 = (0);
seq__31745 = G__31994;
chunk__31746 = G__31995;
count__31747 = G__31996;
i__31748 = G__31997;
continue;
} else {
var role = cljs.core.first(seq__31745__$1);
var temp__5735__auto___31998__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31998__$2)){
var spec_31999 = temp__5735__auto___31998__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31999)], 0));
} else {
}


var G__32000 = cljs.core.next(seq__31745__$1);
var G__32001 = null;
var G__32002 = (0);
var G__32003 = (0);
seq__31745 = G__32000;
chunk__31746 = G__32001;
count__31747 = G__32002;
i__31748 = G__32003;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32006 = cljs.core.ex_cause(t);
via = G__32005;
t = G__32006;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31848 = datafied_throwable;
var map__31848__$1 = (((((!((map__31848 == null))))?(((((map__31848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31848):map__31848);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31848__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31848__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31848__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31849 = cljs.core.last(via);
var map__31849__$1 = (((((!((map__31849 == null))))?(((((map__31849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31849):map__31849);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31849__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31850 = data;
var map__31850__$1 = (((((!((map__31850 == null))))?(((((map__31850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31850):map__31850);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31850__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31850__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31850__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31851 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31851__$1 = (((((!((map__31851 == null))))?(((((map__31851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31851):map__31851);
var top_data = map__31851__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31860 = phase;
var G__31860__$1 = (((G__31860 instanceof cljs.core.Keyword))?G__31860.fqn:null);
switch (G__31860__$1) {
case "read-source":
var map__31861 = data;
var map__31861__$1 = (((((!((map__31861 == null))))?(((((map__31861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31861):map__31861);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31863 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31863__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31863,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31863);
var G__31863__$2 = (cljs.core.truth_((function (){var fexpr__31864 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31864.cljs$core$IFn$_invoke$arity$1 ? fexpr__31864.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31864.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31863__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31863__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31863__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31863__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31865 = top_data;
var G__31865__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31865,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31865);
var G__31865__$2 = (cljs.core.truth_((function (){var fexpr__31866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31866.cljs$core$IFn$_invoke$arity$1 ? fexpr__31866.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31866.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31865__$1);
var G__31865__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31865__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31865__$2);
var G__31865__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31865__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31865__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31865__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31865__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31867,(3),null);
var G__31870 = top_data;
var G__31870__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31870);
var G__31870__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31870__$1);
var G__31870__$3 = (cljs.core.truth_((function (){var and__4050__auto__ = source__$1;
if(cljs.core.truth_(and__4050__auto__)){
return method;
} else {
return and__4050__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31870__$2);
var G__31870__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31870__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31870__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31870__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31870__$4;
}

break;
case "execution":
var vec__31880 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31880,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31880,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31880,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31880,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31847_SHARP_){
var or__4061__auto__ = (p1__31847_SHARP_ == null);
if(or__4061__auto__){
return or__4061__auto__;
} else {
var fexpr__31884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31884.cljs$core$IFn$_invoke$arity$1 ? fexpr__31884.cljs$core$IFn$_invoke$arity$1(p1__31847_SHARP_) : fexpr__31884.call(null,p1__31847_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4061__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return line;
}
})();
var G__31885 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31885__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31885,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31885);
var G__31885__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31885__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31885__$1);
var G__31885__$3 = (cljs.core.truth_((function (){var or__4061__auto__ = fn;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
var and__4050__auto__ = source__$1;
if(cljs.core.truth_(and__4050__auto__)){
return method;
} else {
return and__4050__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31885__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4061__auto__ = fn;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31885__$2);
var G__31885__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31885__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31885__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31885__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31885__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31860__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31888){
var map__31889 = p__31888;
var map__31889__$1 = (((((!((map__31889 == null))))?(((((map__31889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31889):map__31889);
var triage_data = map__31889__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31889__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4061__auto__ = source;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4061__auto__ = line;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4061__auto__ = class$;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31891 = phase;
var G__31891__$1 = (((G__31891 instanceof cljs.core.Keyword))?G__31891.fqn:null);
switch (G__31891__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31892 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31893 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31894 = loc;
var G__31895 = (cljs.core.truth_(spec)?(function (){var sb__4596__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31896_32027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31897_32028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31898_32029 = true;
var _STAR_print_fn_STAR__temp_val__31899_32030 = (function (x__4597__auto__){
return sb__4596__auto__.append(x__4597__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31898_32029);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31899_32030);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31886_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31886_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31897_32028);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31896_32027);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4596__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31892,G__31893,G__31894,G__31895) : format.call(null,G__31892,G__31893,G__31894,G__31895));

break;
case "macroexpansion":
var G__31900 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31901 = cause_type;
var G__31902 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31903 = loc;
var G__31904 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31900,G__31901,G__31902,G__31903,G__31904) : format.call(null,G__31900,G__31901,G__31902,G__31903,G__31904));

break;
case "compile-syntax-check":
var G__31905 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31906 = cause_type;
var G__31907 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31908 = loc;
var G__31909 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31905,G__31906,G__31907,G__31908,G__31909) : format.call(null,G__31905,G__31906,G__31907,G__31908,G__31909));

break;
case "compilation":
var G__31910 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31911 = cause_type;
var G__31912 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31913 = loc;
var G__31914 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31910,G__31911,G__31912,G__31913,G__31914) : format.call(null,G__31910,G__31911,G__31912,G__31913,G__31914));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31915 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31916 = symbol;
var G__31917 = loc;
var G__31918 = (function (){var sb__4596__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31920_32035 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31921_32036 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31922_32037 = true;
var _STAR_print_fn_STAR__temp_val__31923_32038 = (function (x__4597__auto__){
return sb__4596__auto__.append(x__4597__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31922_32037);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31923_32038);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31887_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31887_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31921_32036);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31920_32035);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4596__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31915,G__31916,G__31917,G__31918) : format.call(null,G__31915,G__31916,G__31917,G__31918));
} else {
var G__31926 = "Execution error%s at %s(%s).\n%s\n";
var G__31927 = cause_type;
var G__31928 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31929 = loc;
var G__31930 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31926,G__31927,G__31928,G__31929,G__31930) : format.call(null,G__31926,G__31927,G__31928,G__31929,G__31930));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31891__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
