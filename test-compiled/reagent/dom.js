// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
cljs.core.load_file("test-compiled/material-ui.inc.js");
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__11700__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13549 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_13549){
return (function (){
var _STAR_always_update_STAR_13550 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13550;
}});})(_STAR_always_update_STAR_13549))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13549;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args13551 = [];
var len__12775__auto___13554 = arguments.length;
var i__12776__auto___13555 = (0);
while(true){
if((i__12776__auto___13555 < len__12775__auto___13554)){
args13551.push((arguments[i__12776__auto___13555]));

var G__13556 = (i__12776__auto___13555 + (1));
i__12776__auto___13555 = G__13556;
continue;
} else {
}
break;
}

var G__13553 = args13551.length;
switch (G__13553) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13551.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__13562_13566 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__13563_13567 = null;
var count__13564_13568 = (0);
var i__13565_13569 = (0);
while(true){
if((i__13565_13569 < count__13564_13568)){
var v_13570 = cljs.core._nth.call(null,chunk__13563_13567,i__13565_13569);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13570);

var G__13571 = seq__13562_13566;
var G__13572 = chunk__13563_13567;
var G__13573 = count__13564_13568;
var G__13574 = (i__13565_13569 + (1));
seq__13562_13566 = G__13571;
chunk__13563_13567 = G__13572;
count__13564_13568 = G__13573;
i__13565_13569 = G__13574;
continue;
} else {
var temp__4657__auto___13575 = cljs.core.seq.call(null,seq__13562_13566);
if(temp__4657__auto___13575){
var seq__13562_13576__$1 = temp__4657__auto___13575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13562_13576__$1)){
var c__12511__auto___13577 = cljs.core.chunk_first.call(null,seq__13562_13576__$1);
var G__13578 = cljs.core.chunk_rest.call(null,seq__13562_13576__$1);
var G__13579 = c__12511__auto___13577;
var G__13580 = cljs.core.count.call(null,c__12511__auto___13577);
var G__13581 = (0);
seq__13562_13566 = G__13578;
chunk__13563_13567 = G__13579;
count__13564_13568 = G__13580;
i__13565_13569 = G__13581;
continue;
} else {
var v_13582 = cljs.core.first.call(null,seq__13562_13576__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_13582);

var G__13583 = cljs.core.next.call(null,seq__13562_13576__$1);
var G__13584 = null;
var G__13585 = (0);
var G__13586 = (0);
seq__13562_13566 = G__13583;
chunk__13563_13567 = G__13584;
count__13564_13568 = G__13585;
i__13565_13569 = G__13586;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map