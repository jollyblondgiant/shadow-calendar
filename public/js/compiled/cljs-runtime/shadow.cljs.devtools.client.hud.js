goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_37526){
var state_val_37527 = (state_37526[(1)]);
if((state_val_37527 === (7))){
var state_37526__$1 = state_37526;
var statearr_37528_37728 = state_37526__$1;
(statearr_37528_37728[(2)] = false);

(statearr_37528_37728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (1))){
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37526__$1,(2),req);
} else {
if((state_val_37527 === (4))){
var inst_37490 = (state_37526[(7)]);
var inst_37496 = (inst_37490 == null);
var inst_37497 = cljs.core.not(inst_37496);
var state_37526__$1 = state_37526;
if(inst_37497){
var statearr_37529_37733 = state_37526__$1;
(statearr_37529_37733[(1)] = (6));

} else {
var statearr_37530_37734 = state_37526__$1;
(statearr_37530_37734[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (15))){
var state_37526__$1 = state_37526;
var statearr_37535_37735 = state_37526__$1;
(statearr_37535_37735[(2)] = null);

(statearr_37535_37735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (13))){
var inst_37490 = (state_37526[(7)]);
var state_37526__$1 = state_37526;
var statearr_37536_37736 = state_37526__$1;
(statearr_37536_37736[(2)] = inst_37490);

(statearr_37536_37736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (6))){
var inst_37490 = (state_37526[(7)]);
var inst_37499 = inst_37490.cljs$lang$protocol_mask$partition0$;
var inst_37500 = (inst_37499 & (64));
var inst_37501 = inst_37490.cljs$core$ISeq$;
var inst_37502 = (cljs.core.PROTOCOL_SENTINEL === inst_37501);
var inst_37503 = ((inst_37500) || (inst_37502));
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37503)){
var statearr_37543_37740 = state_37526__$1;
(statearr_37543_37740[(1)] = (9));

} else {
var statearr_37544_37741 = state_37526__$1;
(statearr_37544_37741[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (17))){
var inst_37522 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37545_37744 = state_37526__$1;
(statearr_37545_37744[(2)] = inst_37522);

(statearr_37545_37744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (3))){
var state_37526__$1 = state_37526;
var statearr_37547_37747 = state_37526__$1;
(statearr_37547_37747[(2)] = null);

(statearr_37547_37747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (12))){
var inst_37490 = (state_37526[(7)]);
var inst_37512 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37490);
var state_37526__$1 = state_37526;
var statearr_37554_37748 = state_37526__$1;
(statearr_37554_37748[(2)] = inst_37512);

(statearr_37554_37748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (2))){
var inst_37490 = (state_37526[(7)]);
var inst_37490__$1 = (state_37526[(2)]);
var inst_37491 = (inst_37490__$1 == null);
var state_37526__$1 = (function (){var statearr_37555 = state_37526;
(statearr_37555[(7)] = inst_37490__$1);

return statearr_37555;
})();
if(cljs.core.truth_(inst_37491)){
var statearr_37556_37749 = state_37526__$1;
(statearr_37556_37749[(1)] = (3));

} else {
var statearr_37557_37750 = state_37526__$1;
(statearr_37557_37750[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (11))){
var inst_37507 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37558_37751 = state_37526__$1;
(statearr_37558_37751[(2)] = inst_37507);

(statearr_37558_37751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (9))){
var state_37526__$1 = state_37526;
var statearr_37559_37752 = state_37526__$1;
(statearr_37559_37752[(2)] = true);

(statearr_37559_37752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (5))){
var inst_37524 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37526__$1,inst_37524);
} else {
if((state_val_37527 === (14))){
var inst_37515 = (state_37526[(8)]);
var inst_37515__$1 = (state_37526[(2)]);
var inst_37516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37515__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_37517 = (inst_37516 === (0));
var state_37526__$1 = (function (){var statearr_37560 = state_37526;
(statearr_37560[(8)] = inst_37515__$1);

return statearr_37560;
})();
if(cljs.core.truth_(inst_37517)){
var statearr_37561_37753 = state_37526__$1;
(statearr_37561_37753[(1)] = (15));

} else {
var statearr_37562_37754 = state_37526__$1;
(statearr_37562_37754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (16))){
var inst_37515 = (state_37526[(8)]);
var inst_37520 = console.warn("file open failed",inst_37515);
var state_37526__$1 = state_37526;
var statearr_37563_37755 = state_37526__$1;
(statearr_37563_37755[(2)] = inst_37520);

(statearr_37563_37755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (10))){
var state_37526__$1 = state_37526;
var statearr_37564_37756 = state_37526__$1;
(statearr_37564_37756[(2)] = false);

(statearr_37564_37756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (8))){
var inst_37510 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37510)){
var statearr_37565_37757 = state_37526__$1;
(statearr_37565_37757[(1)] = (12));

} else {
var statearr_37566_37758 = state_37526__$1;
(statearr_37566_37758[(1)] = (13));

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
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____0 = (function (){
var statearr_37567 = [null,null,null,null,null,null,null,null,null];
(statearr_37567[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__);

(statearr_37567[(1)] = (1));

return statearr_37567;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____1 = (function (state_37526){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_37526);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e37568){if((e37568 instanceof Object)){
var ex__33998__auto__ = e37568;
var statearr_37569_37763 = state_37526;
(statearr_37569_37763[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37766 = state_37526;
state_37526 = G__37766;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__ = function(state_37526){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____1.call(this,state_37526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_37570 = f__34085__auto__();
(statearr_37570[(6)] = c__34084__auto__);

return statearr_37570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__37573 = arguments.length;
switch (G__37573) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___37778 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___37778 == null)){
} else {
var x_37779 = temp__5739__auto___37778;
shadow.dom.remove(x_37779);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__34084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34085__auto__ = (function (){var switch__33994__auto__ = (function (state_37587){
var state_val_37588 = (state_37587[(1)]);
if((state_val_37588 === (1))){
var inst_37575 = cljs.core.async.timeout((250));
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37587__$1,(2),inst_37575);
} else {
if((state_val_37588 === (2))){
var inst_37577 = (state_37587[(2)]);
var inst_37578 = [el];
var inst_37579 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_37580 = [inst_37579];
var inst_37581 = cljs.core.PersistentHashMap.fromArrays(inst_37578,inst_37580);
var inst_37582 = shadow.animate.start((250),inst_37581);
var state_37587__$1 = (function (){var statearr_37595 = state_37587;
(statearr_37595[(7)] = inst_37577);

return statearr_37595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37587__$1,(3),inst_37582);
} else {
if((state_val_37588 === (3))){
var inst_37584 = (state_37587[(2)]);
var inst_37585 = shadow.dom.remove(container_el);
var state_37587__$1 = (function (){var statearr_37596 = state_37587;
(statearr_37596[(8)] = inst_37584);

return statearr_37596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37587__$1,inst_37585);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____0 = (function (){
var statearr_37598 = [null,null,null,null,null,null,null,null,null];
(statearr_37598[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__);

(statearr_37598[(1)] = (1));

return statearr_37598;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____1 = (function (state_37587){
while(true){
var ret_value__33996__auto__ = (function (){try{while(true){
var result__33997__auto__ = switch__33994__auto__(state_37587);
if(cljs.core.keyword_identical_QMARK_(result__33997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33997__auto__;
}
break;
}
}catch (e37602){if((e37602 instanceof Object)){
var ex__33998__auto__ = e37602;
var statearr_37603_37799 = state_37587;
(statearr_37603_37799[(5)] = ex__33998__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37800 = state_37587;
state_37587 = G__37800;
continue;
} else {
return ret_value__33996__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__ = function(state_37587){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____1.call(this,state_37587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33995__auto__;
})()
})();
var state__34087__auto__ = (function (){var statearr_37605 = f__34085__auto__();
(statearr_37605[(6)] = c__34084__auto__);

return statearr_37605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34087__auto__);
}));

return c__34084__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4458__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__37617(s__37618){
return (new cljs.core.LazySeq(null,(function (){
var s__37618__$1 = s__37618;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37618__$1);
if(temp__5735__auto__){
var s__37618__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37618__$2)){
var c__4456__auto__ = cljs.core.chunk_first(s__37618__$2);
var size__4457__auto__ = cljs.core.count(c__4456__auto__);
var b__37620 = cljs.core.chunk_buffer(size__4457__auto__);
if((function (){var i__37619 = (0);
while(true){
if((i__37619 < size__4457__auto__)){
var vec__37624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4456__auto__,i__37619);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37624,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37624,(1),null);
cljs.core.chunk_append(b__37620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__37629 = "%4d | %s";
var G__37630 = (((1) + idx) + start_idx);
var G__37631 = text;
return goog.string.format(G__37629,G__37630,G__37631);
})()], null));

var G__37806 = (i__37619 + (1));
i__37619 = G__37806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37620),shadow$cljs$devtools$client$hud$source_line_html_$_iter__37617(cljs.core.chunk_rest(s__37618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37620),null);
}
} else {
var vec__37632 = cljs.core.first(s__37618__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__37636 = "%4d | %s";
var G__37637 = (((1) + idx) + start_idx);
var G__37638 = text;
return goog.string.format(G__37636,G__37637,G__37638);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__37617(cljs.core.rest(s__37618__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4458__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__37644 = arguments.length;
switch (G__37644) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__37653){
var map__37656 = p__37653;
var map__37656__$1 = (((((!((map__37656 == null))))?(((((map__37656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37656):map__37656);
var warning = map__37656__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__37664){
var map__37665 = p__37664;
var map__37665__$1 = (((((!((map__37665 == null))))?(((((map__37665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37665):map__37665);
var warning = map__37665__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37665__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__37671 = source_excerpt;
var map__37671__$1 = (((((!((map__37671 == null))))?(((((map__37671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37671):map__37671);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4061__auto__ = column;
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__37678){
var map__37679 = p__37678;
var map__37679__$1 = (((((!((map__37679 == null))))?(((((map__37679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37679):map__37679);
var msg = map__37679__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__37681 = info;
var map__37681__$1 = (((((!((map__37681 == null))))?(((((map__37681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37681):map__37681);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37681__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37677_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__37677_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4458__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__37686(s__37687){
return (new cljs.core.LazySeq(null,(function (){
var s__37687__$1 = s__37687;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37687__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37699 = cljs.core.first(xs__6292__auto__);
var map__37699__$1 = (((((!((map__37699 == null))))?(((((map__37699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37699):map__37699);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4454__auto__ = ((function (s__37687__$1,map__37699,map__37699__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__37681,map__37681__$1,sources,sources_with_warnings,map__37679,map__37679__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__37686_$_iter__37688(s__37689){
return (new cljs.core.LazySeq(null,((function (s__37687__$1,map__37699,map__37699__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__37681,map__37681__$1,sources,sources_with_warnings,map__37679,map__37679__$1,msg,type,info){
return (function (){
var s__37689__$1 = s__37689;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37689__$1);
if(temp__5735__auto____$1){
var s__37689__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37689__$2)){
var c__4456__auto__ = cljs.core.chunk_first(s__37689__$2);
var size__4457__auto__ = cljs.core.count(c__4456__auto__);
var b__37691 = cljs.core.chunk_buffer(size__4457__auto__);
if((function (){var i__37690 = (0);
while(true){
if((i__37690 < size__4457__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4456__auto__,i__37690);
cljs.core.chunk_append(b__37691,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__37880 = (i__37690 + (1));
i__37690 = G__37880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37691),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__37686_$_iter__37688(cljs.core.chunk_rest(s__37689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37691),null);
}
} else {
var warning = cljs.core.first(s__37689__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__37686_$_iter__37688(cljs.core.rest(s__37689__$2)));
}
} else {
return null;
}
break;
}
});})(s__37687__$1,map__37699,map__37699__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__37681,map__37681__$1,sources,sources_with_warnings,map__37679,map__37679__$1,msg,type,info))
,null,null));
});})(s__37687__$1,map__37699,map__37699__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__37681,map__37681__$1,sources,sources_with_warnings,map__37679,map__37679__$1,msg,type,info))
;
var fs__4455__auto__ = cljs.core.seq(iterys__4454__auto__(warnings));
if(fs__4455__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4455__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__37686(cljs.core.rest(s__37687__$1)));
} else {
var G__37881 = cljs.core.rest(s__37687__$1);
s__37687__$1 = G__37881;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4458__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__37710){
var map__37711 = p__37710;
var map__37711__$1 = (((((!((map__37711 == null))))?(((((map__37711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37711):map__37711);
var msg = map__37711__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
