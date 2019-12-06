goog.provide('shadow_calendar.core');
goog.require('cljs.core');
goog.require('reagent.core');
var module$shadow_calendar$bar=shadow.js.require("module$shadow_calendar$bar", {});
var module$shadow_calendar$calendar=shadow.js.require("module$shadow_calendar$calendar", {});
if((typeof shadow_calendar !== 'undefined') && (typeof shadow_calendar.core !== 'undefined') && (typeof shadow_calendar.core.app_state !== 'undefined')){
} else {
shadow_calendar.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
shadow_calendar.core.calendar = (function shadow_calendar$core$calendar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow_calendar.core.app_state))], null),reagent.core.create_element.cljs$core$IFn$_invoke$arity$1(module$shadow_calendar$bar.myComponent),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
shadow_calendar.core.start = (function shadow_calendar$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Calendar], null),document.getElementById("app"));
});
shadow_calendar.core.init = (function shadow_calendar$core$init(){
return shadow_calendar.core.start();
});
goog.exportSymbol('shadow_calendar.core.init', shadow_calendar.core.init);
shadow_calendar.core.stop = (function shadow_calendar$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=shadow_calendar.core.js.map
