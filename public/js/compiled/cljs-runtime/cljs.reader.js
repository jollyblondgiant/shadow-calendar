goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__32559 = b.append("0");
b = G__32559;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__32447 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32447,(10),null);
var v = vec__32447;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4061__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4061__auto__)){
return or__4061__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__32454 = months__$1;
var G__32455 = cljs.reader.leap_year_QMARK_(years__$1);
return cljs.reader.days_in_month(G__32454,G__32455);
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5733__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__32456 = temp__5733__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32456,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__32475_32574 = cljs.core.seq(form);
var chunk__32476_32575 = null;
var count__32477_32576 = (0);
var i__32478_32577 = (0);
while(true){
if((i__32478_32577 < count__32477_32576)){
var x_32578 = chunk__32476_32575.cljs$core$IIndexed$_nth$arity$2(null,i__32478_32577);
arr.push(x_32578);


var G__32584 = seq__32475_32574;
var G__32585 = chunk__32476_32575;
var G__32586 = count__32477_32576;
var G__32587 = (i__32478_32577 + (1));
seq__32475_32574 = G__32584;
chunk__32476_32575 = G__32585;
count__32477_32576 = G__32586;
i__32478_32577 = G__32587;
continue;
} else {
var temp__5735__auto___32588 = cljs.core.seq(seq__32475_32574);
if(temp__5735__auto___32588){
var seq__32475_32589__$1 = temp__5735__auto___32588;
if(cljs.core.chunked_seq_QMARK_(seq__32475_32589__$1)){
var c__4485__auto___32590 = cljs.core.chunk_first(seq__32475_32589__$1);
var G__32591 = cljs.core.chunk_rest(seq__32475_32589__$1);
var G__32592 = c__4485__auto___32590;
var G__32593 = cljs.core.count(c__4485__auto___32590);
var G__32594 = (0);
seq__32475_32574 = G__32591;
chunk__32476_32575 = G__32592;
count__32477_32576 = G__32593;
i__32478_32577 = G__32594;
continue;
} else {
var x_32595 = cljs.core.first(seq__32475_32589__$1);
arr.push(x_32595);


var G__32596 = cljs.core.next(seq__32475_32589__$1);
var G__32597 = null;
var G__32598 = (0);
var G__32599 = (0);
seq__32475_32574 = G__32596;
chunk__32476_32575 = G__32597;
count__32477_32576 = G__32598;
i__32478_32577 = G__32599;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__32482_32600 = cljs.core.seq(form);
var chunk__32483_32601 = null;
var count__32484_32602 = (0);
var i__32485_32603 = (0);
while(true){
if((i__32485_32603 < count__32484_32602)){
var vec__32513_32604 = chunk__32483_32601.cljs$core$IIndexed$_nth$arity$2(null,i__32485_32603);
var k_32605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513_32604,(0),null);
var v_32606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513_32604,(1),null);
var G__32516_32607 = obj;
var G__32517_32608 = cljs.core.name(k_32605);
var G__32518_32609 = v_32606;
goog.object.set(G__32516_32607,G__32517_32608,G__32518_32609);


var G__32610 = seq__32482_32600;
var G__32611 = chunk__32483_32601;
var G__32612 = count__32484_32602;
var G__32613 = (i__32485_32603 + (1));
seq__32482_32600 = G__32610;
chunk__32483_32601 = G__32611;
count__32484_32602 = G__32612;
i__32485_32603 = G__32613;
continue;
} else {
var temp__5735__auto___32614 = cljs.core.seq(seq__32482_32600);
if(temp__5735__auto___32614){
var seq__32482_32615__$1 = temp__5735__auto___32614;
if(cljs.core.chunked_seq_QMARK_(seq__32482_32615__$1)){
var c__4485__auto___32616 = cljs.core.chunk_first(seq__32482_32615__$1);
var G__32617 = cljs.core.chunk_rest(seq__32482_32615__$1);
var G__32618 = c__4485__auto___32616;
var G__32619 = cljs.core.count(c__4485__auto___32616);
var G__32620 = (0);
seq__32482_32600 = G__32617;
chunk__32483_32601 = G__32618;
count__32484_32602 = G__32619;
i__32485_32603 = G__32620;
continue;
} else {
var vec__32524_32621 = cljs.core.first(seq__32482_32615__$1);
var k_32622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524_32621,(0),null);
var v_32623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32524_32621,(1),null);
var G__32531_32624 = obj;
var G__32532_32625 = cljs.core.name(k_32622);
var G__32533_32626 = v_32623;
goog.object.set(G__32531_32624,G__32532_32625,G__32533_32626);


var G__32627 = cljs.core.next(seq__32482_32615__$1);
var G__32628 = null;
var G__32629 = (0);
var G__32630 = (0);
seq__32482_32600 = G__32627;
chunk__32483_32601 = G__32628;
count__32484_32602 = G__32629;
i__32485_32603 = G__32630;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__32543 = arguments.length;
switch (G__32543) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__32544,reader){
var map__32545 = p__32544;
var map__32545__$1 = (((((!((map__32545 == null))))?(((((map__32545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32545):map__32545);
var opts = map__32545__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__32549 = arguments.length;
switch (G__32549) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

//# sourceMappingURL=cljs.reader.js.map
