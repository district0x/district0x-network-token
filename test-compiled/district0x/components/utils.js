// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.components.utils');
goog.require('cljs.core');
goog.require('reagent.core');
district0x.components.utils.parse_props_children = (function district0x$components$utils$parse_props_children(props,children){
if(cljs.core.map_QMARK_.call(null,props)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [props], null),children)], null);
}
});
district0x.components.utils.create_with_default_props = (function district0x$components$utils$create_with_default_props(component,default_props){
return (function() { 
var G__36205__delegate = function (props,children){
var vec__36202 = district0x.components.utils.parse_props_children.call(null,props,children);
var props__$1 = cljs.core.nth.call(null,vec__36202,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__36202,(1),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,reagent.core.merge_props.call(null,default_props,props__$1)], null),children__$1));
};
var G__36205 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__36206__i = 0, G__36206__a = new Array(arguments.length -  1);
while (G__36206__i < G__36206__a.length) {G__36206__a[G__36206__i] = arguments[G__36206__i + 1]; ++G__36206__i;}
  children = new cljs.core.IndexedSeq(G__36206__a,0);
} 
return G__36205__delegate.call(this,props,children);};
G__36205.cljs$lang$maxFixedArity = 1;
G__36205.cljs$lang$applyTo = (function (arglist__36207){
var props = cljs.core.first(arglist__36207);
var children = cljs.core.rest(arglist__36207);
return G__36205__delegate(props,children);
});
G__36205.cljs$core$IFn$_invoke$arity$variadic = G__36205__delegate;
return G__36205;
})()
;
});
district0x.components.utils.current_component_mui_theme = (function district0x$components$utils$current_component_mui_theme(){
return (reagent.core.current_component.call(null)["_reactInternalInstance"]["_context"]["muiTheme"]);
});

//# sourceMappingURL=utils.js.map