goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4671__auto__ = [];
var len__4665__auto___38013 = arguments.length;
var i__4666__auto___38014 = (0);
while(true){
if((i__4666__auto___38014 < len__4665__auto___38013)){
args__4671__auto__.push((arguments[i__4666__auto___38014]));

var G__38015 = (i__4666__auto___38014 + (1));
i__4666__auto___38014 = G__38015;
continue;
} else {
}
break;
}

var argseq__4672__auto__ = ((((1) < args__4671__auto__.length))?(new cljs.core.IndexedSeq(args__4671__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4672__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37745){
var G__37746 = cljs.core.first(seq37745);
var seq37745__$1 = cljs.core.next(seq37745);
var self__4652__auto__ = this;
return self__4652__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37746,seq37745__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37768){
var map__37769 = p__37768;
var map__37769__$1 = (((((!((map__37769 == null))))?(((((map__37769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37769):map__37769);
var src = map__37769__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4061__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4061__auto__){
return or__4061__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37771 = cljs.core.seq(sources);
var chunk__37772 = null;
var count__37773 = (0);
var i__37774 = (0);
while(true){
if((i__37774 < count__37773)){
var map__37783 = chunk__37772.cljs$core$IIndexed$_nth$arity$2(null,i__37774);
var map__37783__$1 = (((((!((map__37783 == null))))?(((((map__37783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37783):map__37783);
var src = map__37783__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37783__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37783__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37783__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37785){var e_38022 = e37785;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38022);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38022.message)].join('')));
}

var G__38023 = seq__37771;
var G__38024 = chunk__37772;
var G__38025 = count__37773;
var G__38026 = (i__37774 + (1));
seq__37771 = G__38023;
chunk__37772 = G__38024;
count__37773 = G__38025;
i__37774 = G__38026;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37771);
if(temp__5735__auto__){
var seq__37771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37771__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__37771__$1);
var G__38027 = cljs.core.chunk_rest(seq__37771__$1);
var G__38028 = c__4485__auto__;
var G__38029 = cljs.core.count(c__4485__auto__);
var G__38030 = (0);
seq__37771 = G__38027;
chunk__37772 = G__38028;
count__37773 = G__38029;
i__37774 = G__38030;
continue;
} else {
var map__37786 = cljs.core.first(seq__37771__$1);
var map__37786__$1 = (((((!((map__37786 == null))))?(((((map__37786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37786):map__37786);
var src = map__37786__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37788){var e_38031 = e37788;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38031);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38031.message)].join('')));
}

var G__38032 = cljs.core.next(seq__37771__$1);
var G__38033 = null;
var G__38034 = (0);
var G__38035 = (0);
seq__37771 = G__38032;
chunk__37772 = G__38033;
count__37773 = G__38034;
i__37774 = G__38035;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37802 = cljs.core.seq(js_requires);
var chunk__37803 = null;
var count__37804 = (0);
var i__37805 = (0);
while(true){
if((i__37805 < count__37804)){
var js_ns = chunk__37803.cljs$core$IIndexed$_nth$arity$2(null,i__37805);
var require_str_38036 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38036);


var G__38037 = seq__37802;
var G__38038 = chunk__37803;
var G__38039 = count__37804;
var G__38040 = (i__37805 + (1));
seq__37802 = G__38037;
chunk__37803 = G__38038;
count__37804 = G__38039;
i__37805 = G__38040;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37802);
if(temp__5735__auto__){
var seq__37802__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37802__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__37802__$1);
var G__38041 = cljs.core.chunk_rest(seq__37802__$1);
var G__38042 = c__4485__auto__;
var G__38043 = cljs.core.count(c__4485__auto__);
var G__38044 = (0);
seq__37802 = G__38041;
chunk__37803 = G__38042;
count__37804 = G__38043;
i__37805 = G__38044;
continue;
} else {
var js_ns = cljs.core.first(seq__37802__$1);
var require_str_38045 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38045);


var G__38046 = cljs.core.next(seq__37802__$1);
var G__38047 = null;
var G__38048 = (0);
var G__38049 = (0);
seq__37802 = G__38046;
chunk__37803 = G__38047;
count__37804 = G__38048;
i__37805 = G__38049;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37807 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37807) : callback.call(null,G__37807));
} else {
var G__37808 = shadow.cljs.devtools.client.env.files_url();
var G__37809 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__37810 = "POST";
var G__37811 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37812 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37808,G__37809,G__37810,G__37811,G__37812);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37819){
var map__37820 = p__37819;
var map__37820__$1 = (((((!((map__37820 == null))))?(((((map__37820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37820):map__37820);
var msg = map__37820__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37820__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37826 = info;
var map__37826__$1 = (((((!((map__37826 == null))))?(((((map__37826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37826):map__37826);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4458__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37830(s__37831){
return (new cljs.core.LazySeq(null,(function (){
var s__37831__$1 = s__37831;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37831__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37838 = cljs.core.first(xs__6292__auto__);
var map__37838__$1 = (((((!((map__37838 == null))))?(((((map__37838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37838):map__37838);
var src = map__37838__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37838__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4454__auto__ = ((function (s__37831__$1,map__37838,map__37838__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37826,map__37826__$1,sources,compiled,map__37820,map__37820__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37830_$_iter__37832(s__37833){
return (new cljs.core.LazySeq(null,((function (s__37831__$1,map__37838,map__37838__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37826,map__37826__$1,sources,compiled,map__37820,map__37820__$1,msg,info,reload_info){
return (function (){
var s__37833__$1 = s__37833;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37833__$1);
if(temp__5735__auto____$1){
var s__37833__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37833__$2)){
var c__4456__auto__ = cljs.core.chunk_first(s__37833__$2);
var size__4457__auto__ = cljs.core.count(c__4456__auto__);
var b__37835 = cljs.core.chunk_buffer(size__4457__auto__);
if((function (){var i__37834 = (0);
while(true){
if((i__37834 < size__4457__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4456__auto__,i__37834);
cljs.core.chunk_append(b__37835,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38054 = (i__37834 + (1));
i__37834 = G__38054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37835),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37830_$_iter__37832(cljs.core.chunk_rest(s__37833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37835),null);
}
} else {
var warning = cljs.core.first(s__37833__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37830_$_iter__37832(cljs.core.rest(s__37833__$2)));
}
} else {
return null;
}
break;
}
});})(s__37831__$1,map__37838,map__37838__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37826,map__37826__$1,sources,compiled,map__37820,map__37820__$1,msg,info,reload_info))
,null,null));
});})(s__37831__$1,map__37838,map__37838__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37826,map__37826__$1,sources,compiled,map__37820,map__37820__$1,msg,info,reload_info))
;
var fs__4455__auto__ = cljs.core.seq(iterys__4454__auto__(warnings));
if(fs__4455__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4455__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37830(cljs.core.rest(s__37831__$1)));
} else {
var G__38057 = cljs.core.rest(s__37831__$1);
s__37831__$1 = G__38057;
continue;
}
} else {
var G__38059 = cljs.core.rest(s__37831__$1);
s__37831__$1 = G__38059;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4458__auto__(sources);
})()));
var seq__37848_38060 = cljs.core.seq(warnings);
var chunk__37849_38061 = null;
var count__37850_38062 = (0);
var i__37851_38063 = (0);
while(true){
if((i__37851_38063 < count__37850_38062)){
var map__37859_38064 = chunk__37849_38061.cljs$core$IIndexed$_nth$arity$2(null,i__37851_38063);
var map__37859_38065__$1 = (((((!((map__37859_38064 == null))))?(((((map__37859_38064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37859_38064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37859_38064):map__37859_38064);
var w_38066 = map__37859_38065__$1;
var msg_38067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859_38065__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859_38065__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859_38065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859_38065__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38070)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38068),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38069),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38067__$1)].join(''));


var G__38071 = seq__37848_38060;
var G__38072 = chunk__37849_38061;
var G__38073 = count__37850_38062;
var G__38074 = (i__37851_38063 + (1));
seq__37848_38060 = G__38071;
chunk__37849_38061 = G__38072;
count__37850_38062 = G__38073;
i__37851_38063 = G__38074;
continue;
} else {
var temp__5735__auto___38075 = cljs.core.seq(seq__37848_38060);
if(temp__5735__auto___38075){
var seq__37848_38076__$1 = temp__5735__auto___38075;
if(cljs.core.chunked_seq_QMARK_(seq__37848_38076__$1)){
var c__4485__auto___38077 = cljs.core.chunk_first(seq__37848_38076__$1);
var G__38078 = cljs.core.chunk_rest(seq__37848_38076__$1);
var G__38079 = c__4485__auto___38077;
var G__38080 = cljs.core.count(c__4485__auto___38077);
var G__38081 = (0);
seq__37848_38060 = G__38078;
chunk__37849_38061 = G__38079;
count__37850_38062 = G__38080;
i__37851_38063 = G__38081;
continue;
} else {
var map__37861_38082 = cljs.core.first(seq__37848_38076__$1);
var map__37861_38083__$1 = (((((!((map__37861_38082 == null))))?(((((map__37861_38082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37861_38082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37861_38082):map__37861_38082);
var w_38084 = map__37861_38083__$1;
var msg_38085__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38083__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38083__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38083__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861_38083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38088)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38086),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38087),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38085__$1)].join(''));


var G__38092 = cljs.core.next(seq__37848_38076__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__37848_38060 = G__38092;
chunk__37849_38061 = G__38093;
count__37850_38062 = G__38094;
i__37851_38063 = G__38095;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37863){
var map__37864 = p__37863;
var map__37864__$1 = (((((!((map__37864 == null))))?(((((map__37864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37864):map__37864);
var src = map__37864__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37872){
var map__37873 = p__37872;
var map__37873__$1 = (((((!((map__37873 == null))))?(((((map__37873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37873):map__37873);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37875){
var map__37876 = p__37875;
var map__37876__$1 = (((((!((map__37876 == null))))?(((((map__37876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37876):map__37876);
var rc = map__37876__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37876__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__37818_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37818_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37882){
var map__37883 = p__37882;
var map__37883__$1 = (((((!((map__37883 == null))))?(((((map__37883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37883):map__37883);
var msg = map__37883__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37885 = cljs.core.seq(updates);
var chunk__37887 = null;
var count__37888 = (0);
var i__37889 = (0);
while(true){
if((i__37889 < count__37888)){
var path = chunk__37887.cljs$core$IIndexed$_nth$arity$2(null,i__37889);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37915_38096 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37918_38097 = null;
var count__37919_38098 = (0);
var i__37920_38099 = (0);
while(true){
if((i__37920_38099 < count__37919_38098)){
var node_38100 = chunk__37918_38097.cljs$core$IIndexed$_nth$arity$2(null,i__37920_38099);
var path_match_38101 = shadow.cljs.devtools.client.browser.match_paths(node_38100.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38101)){
var new_link_38102 = (function (){var G__37928 = node_38100.cloneNode(true);
G__37928.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38101),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37928;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38101], 0));

goog.dom.insertSiblingAfter(new_link_38102,node_38100);

goog.dom.removeNode(node_38100);


var G__38106 = seq__37915_38096;
var G__38107 = chunk__37918_38097;
var G__38108 = count__37919_38098;
var G__38109 = (i__37920_38099 + (1));
seq__37915_38096 = G__38106;
chunk__37918_38097 = G__38107;
count__37919_38098 = G__38108;
i__37920_38099 = G__38109;
continue;
} else {
var G__38110 = seq__37915_38096;
var G__38111 = chunk__37918_38097;
var G__38112 = count__37919_38098;
var G__38113 = (i__37920_38099 + (1));
seq__37915_38096 = G__38110;
chunk__37918_38097 = G__38111;
count__37919_38098 = G__38112;
i__37920_38099 = G__38113;
continue;
}
} else {
var temp__5735__auto___38114 = cljs.core.seq(seq__37915_38096);
if(temp__5735__auto___38114){
var seq__37915_38115__$1 = temp__5735__auto___38114;
if(cljs.core.chunked_seq_QMARK_(seq__37915_38115__$1)){
var c__4485__auto___38117 = cljs.core.chunk_first(seq__37915_38115__$1);
var G__38119 = cljs.core.chunk_rest(seq__37915_38115__$1);
var G__38120 = c__4485__auto___38117;
var G__38121 = cljs.core.count(c__4485__auto___38117);
var G__38122 = (0);
seq__37915_38096 = G__38119;
chunk__37918_38097 = G__38120;
count__37919_38098 = G__38121;
i__37920_38099 = G__38122;
continue;
} else {
var node_38123 = cljs.core.first(seq__37915_38115__$1);
var path_match_38124 = shadow.cljs.devtools.client.browser.match_paths(node_38123.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38124)){
var new_link_38125 = (function (){var G__37929 = node_38123.cloneNode(true);
G__37929.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38124),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37929;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38124], 0));

goog.dom.insertSiblingAfter(new_link_38125,node_38123);

goog.dom.removeNode(node_38123);


var G__38126 = cljs.core.next(seq__37915_38115__$1);
var G__38127 = null;
var G__38128 = (0);
var G__38129 = (0);
seq__37915_38096 = G__38126;
chunk__37918_38097 = G__38127;
count__37919_38098 = G__38128;
i__37920_38099 = G__38129;
continue;
} else {
var G__38130 = cljs.core.next(seq__37915_38115__$1);
var G__38131 = null;
var G__38132 = (0);
var G__38133 = (0);
seq__37915_38096 = G__38130;
chunk__37918_38097 = G__38131;
count__37919_38098 = G__38132;
i__37920_38099 = G__38133;
continue;
}
}
} else {
}
}
break;
}


var G__38134 = seq__37885;
var G__38135 = chunk__37887;
var G__38136 = count__37888;
var G__38137 = (i__37889 + (1));
seq__37885 = G__38134;
chunk__37887 = G__38135;
count__37888 = G__38136;
i__37889 = G__38137;
continue;
} else {
var G__38138 = seq__37885;
var G__38139 = chunk__37887;
var G__38140 = count__37888;
var G__38141 = (i__37889 + (1));
seq__37885 = G__38138;
chunk__37887 = G__38139;
count__37888 = G__38140;
i__37889 = G__38141;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37885);
if(temp__5735__auto__){
var seq__37885__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37885__$1)){
var c__4485__auto__ = cljs.core.chunk_first(seq__37885__$1);
var G__38142 = cljs.core.chunk_rest(seq__37885__$1);
var G__38143 = c__4485__auto__;
var G__38144 = cljs.core.count(c__4485__auto__);
var G__38145 = (0);
seq__37885 = G__38142;
chunk__37887 = G__38143;
count__37888 = G__38144;
i__37889 = G__38145;
continue;
} else {
var path = cljs.core.first(seq__37885__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37930_38146 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37933_38147 = null;
var count__37934_38148 = (0);
var i__37935_38149 = (0);
while(true){
if((i__37935_38149 < count__37934_38148)){
var node_38152 = chunk__37933_38147.cljs$core$IIndexed$_nth$arity$2(null,i__37935_38149);
var path_match_38153 = shadow.cljs.devtools.client.browser.match_paths(node_38152.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38153)){
var new_link_38154 = (function (){var G__37940 = node_38152.cloneNode(true);
G__37940.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38153),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37940;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38153], 0));

goog.dom.insertSiblingAfter(new_link_38154,node_38152);

goog.dom.removeNode(node_38152);


var G__38155 = seq__37930_38146;
var G__38156 = chunk__37933_38147;
var G__38157 = count__37934_38148;
var G__38158 = (i__37935_38149 + (1));
seq__37930_38146 = G__38155;
chunk__37933_38147 = G__38156;
count__37934_38148 = G__38157;
i__37935_38149 = G__38158;
continue;
} else {
var G__38159 = seq__37930_38146;
var G__38160 = chunk__37933_38147;
var G__38161 = count__37934_38148;
var G__38162 = (i__37935_38149 + (1));
seq__37930_38146 = G__38159;
chunk__37933_38147 = G__38160;
count__37934_38148 = G__38161;
i__37935_38149 = G__38162;
continue;
}
} else {
var temp__5735__auto___38163__$1 = cljs.core.seq(seq__37930_38146);
if(temp__5735__auto___38163__$1){
var seq__37930_38164__$1 = temp__5735__auto___38163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37930_38164__$1)){
var c__4485__auto___38165 = cljs.core.chunk_first(seq__37930_38164__$1);
var G__38166 = cljs.core.chunk_rest(seq__37930_38164__$1);
var G__38167 = c__4485__auto___38165;
var G__38168 = cljs.core.count(c__4485__auto___38165);
var G__38169 = (0);
seq__37930_38146 = G__38166;
chunk__37933_38147 = G__38167;
count__37934_38148 = G__38168;
i__37935_38149 = G__38169;
continue;
} else {
var node_38170 = cljs.core.first(seq__37930_38164__$1);
var path_match_38171 = shadow.cljs.devtools.client.browser.match_paths(node_38170.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38171)){
var new_link_38172 = (function (){var G__37943 = node_38170.cloneNode(true);
G__37943.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38171),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37943;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38171], 0));

goog.dom.insertSiblingAfter(new_link_38172,node_38170);

goog.dom.removeNode(node_38170);


var G__38173 = cljs.core.next(seq__37930_38164__$1);
var G__38174 = null;
var G__38175 = (0);
var G__38176 = (0);
seq__37930_38146 = G__38173;
chunk__37933_38147 = G__38174;
count__37934_38148 = G__38175;
i__37935_38149 = G__38176;
continue;
} else {
var G__38177 = cljs.core.next(seq__37930_38164__$1);
var G__38178 = null;
var G__38179 = (0);
var G__38180 = (0);
seq__37930_38146 = G__38177;
chunk__37933_38147 = G__38178;
count__37934_38148 = G__38179;
i__37935_38149 = G__38180;
continue;
}
}
} else {
}
}
break;
}


var G__38181 = cljs.core.next(seq__37885__$1);
var G__38182 = null;
var G__38183 = (0);
var G__38184 = (0);
seq__37885 = G__38181;
chunk__37887 = G__38182;
count__37888 = G__38183;
i__37889 = G__38184;
continue;
} else {
var G__38185 = cljs.core.next(seq__37885__$1);
var G__38186 = null;
var G__38187 = (0);
var G__38188 = (0);
seq__37885 = G__38185;
chunk__37887 = G__38186;
count__37888 = G__38187;
i__37889 = G__38188;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37944){
var map__37945 = p__37944;
var map__37945__$1 = (((((!((map__37945 == null))))?(((((map__37945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37945):map__37945);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37947,done){
var map__37948 = p__37947;
var map__37948__$1 = (((((!((map__37948 == null))))?(((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37948):map__37948);
var msg = map__37948__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37948__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37950){
var map__37951 = p__37950;
var map__37951__$1 = (((((!((map__37951 == null))))?(((((map__37951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37951):map__37951);
var src = map__37951__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37951__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4050__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4050__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4050__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37953){var e = e37953;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37954,done){
var map__37955 = p__37954;
var map__37955__$1 = (((((!((map__37955 == null))))?(((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37955):map__37955);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37957){
var map__37958 = p__37957;
var map__37958__$1 = (((((!((map__37958 == null))))?(((((map__37958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37958):map__37958);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37960,done){
var map__37961 = p__37960;
var map__37961__$1 = (((((!((map__37961 == null))))?(((((map__37961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37961):map__37961);
var msg = map__37961__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37975_38199 = type;
var G__37975_38200__$1 = (((G__37975_38199 instanceof cljs.core.Keyword))?G__37975_38199.fqn:null);
switch (G__37975_38200__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37986 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37987 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__37988 = "POST";
var G__37989 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37990 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37986,G__37987,G__37988,G__37989,G__37990);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4061__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e37999){var e = e37999;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___38204 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___38204)){
var s_38205 = temp__5735__auto___38204;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_38205.onclose = (function (e){
return null;
}));

s_38205.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4050__auto__ = document;
if(cljs.core.truth_(and__4050__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4050__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
