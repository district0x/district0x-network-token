// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.components.misc');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('district0x.components.utils');
goog.require('district0x.utils');
goog.require('re_frame.core');
goog.require('reagent.core');
district0x.components.misc.col = reagent.core.adapt_react_class.call(null,ReactFlexboxGrid.Col);
district0x.components.misc.row_with_cols = reagent.core.adapt_react_class.call(null,ReactFlexboxGrid.Row);
district0x.components.misc.grid = reagent.core.adapt_react_class.call(null,ReactFlexboxGrid.Grid);
district0x.components.misc.row = district0x.components.utils.create_with_default_props.call(null,district0x.components.misc.row_with_cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0)], null)], null));
district0x.components.misc.paper = (function district0x$components$misc$paper(){
var xs_width_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","window-xs-width?","district0x/window-xs-width?",14187919)], null));
var connection_error_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error?","district0x/blockchain-connection-error?",1624111314)], null));
return ((function (xs_width_QMARK_,connection_error_QMARK_){
return (function() { 
var G__36238__delegate = function (props,children){
var vec__36231 = district0x.components.utils.parse_props_children.call(null,props,children);
var map__36234 = cljs.core.nth.call(null,vec__36231,(0),null);
var map__36234__$1 = ((((!((map__36234 == null)))?((((map__36234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36234):map__36234);
var props__$1 = map__36234__$1;
var inner_style = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"inner-style","inner-style",-1651909244));
var use_loader_QMARK_ = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"use-loader?","use-loader?",1504043278));
var children__$1 = cljs.core.nth.call(null,vec__36231,(1),null);
var map__36235 = cljs.core.js__GT_clj.call(null,(district0x.components.utils.current_component_mui_theme.call(null)["spacing"]));
var map__36235__$1 = ((((!((map__36235 == null)))?((((map__36235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36235):map__36235);
var desktopGutter = cljs.core.get.call(null,map__36235__$1,"desktopGutter");
var desktopGutterLess = cljs.core.get.call(null,map__36235__$1,"desktopGutterLess");
var gutter = (cljs.core.truth_(cljs.core.deref.call(null,xs_width_QMARK_))?desktopGutterLess:desktopGutter);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,cljs.core.dissoc.call(null,props__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"inner-style","inner-style",-1651909244),new cljs.core.Keyword(null,"use-loader?","use-loader?",1504043278)),(cljs.core.truth_(use_loader_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.linear_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var and__11688__auto__ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,connection_error_QMARK_));
} else {
return and__11688__auto__;
}
})())?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null):null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"break-word","break-word",-153550263),new cljs.core.Keyword(null,"padding","padding",1660304693),gutter,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),gutter], null),new cljs.core.Keyword(null,"inner-style","inner-style",-1651909244).cljs$core$IFn$_invoke$arity$1(props__$1))], null)], null),children__$1))], null);
};
var G__36238 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__36239__i = 0, G__36239__a = new Array(arguments.length -  1);
while (G__36239__i < G__36239__a.length) {G__36239__a[G__36239__i] = arguments[G__36239__i + 1]; ++G__36239__i;}
  children = new cljs.core.IndexedSeq(G__36239__a,0);
} 
return G__36238__delegate.call(this,props,children);};
G__36238.cljs$lang$maxFixedArity = 1;
G__36238.cljs$lang$applyTo = (function (arglist__36240){
var props = cljs.core.first(arglist__36240);
var children = cljs.core.rest(arglist__36240);
return G__36238__delegate(props,children);
});
G__36238.cljs$core$IFn$_invoke$arity$variadic = G__36238__delegate;
return G__36238;
})()
;
;})(xs_width_QMARK_,connection_error_QMARK_))
});
district0x.components.misc.center_layout = (function district0x$components$misc$center_layout(var_args){
var args__12782__auto__ = [];
var len__12775__auto___36242 = arguments.length;
var i__12776__auto___36243 = (0);
while(true){
if((i__12776__auto___36243 < len__12775__auto___36242)){
args__12782__auto__.push((arguments[i__12776__auto___36243]));

var G__36244 = (i__12776__auto___36243 + (1));
i__12776__auto___36243 = G__36244;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.components.misc.center_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.components.misc.center_layout.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row_with_cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),"xs"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(10),new cljs.core.Keyword(null,"lg","lg",-80787836),(9),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null)], null),children)], null);
});

district0x.components.misc.center_layout.cljs$lang$maxFixedArity = (0);

district0x.components.misc.center_layout.cljs$lang$applyTo = (function (seq36241){
return district0x.components.misc.center_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36241));
});

district0x.components.misc.etherscan_link = (function district0x$components$misc$etherscan_link(var_args){
var args__12782__auto__ = [];
var len__12775__auto___36252 = arguments.length;
var i__12776__auto___36253 = (0);
while(true){
if((i__12776__auto___36253 < len__12775__auto___36252)){
args__12782__auto__.push((arguments[i__12776__auto___36253]));

var G__36254 = (i__12776__auto___36253 + (1));
i__12776__auto___36253 = G__36254;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.components.misc.etherscan_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.components.misc.etherscan_link.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var vec__36247 = district0x.components.utils.parse_props_children.call(null,props,children);
var map__36250 = cljs.core.nth.call(null,vec__36247,(0),null);
var map__36250__$1 = ((((!((map__36250 == null)))?((((map__36250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36250):map__36250);
var props__$1 = map__36250__$1;
var address = cljs.core.get.call(null,map__36250__$1,new cljs.core.Keyword(null,"address","address",559499426));
var children__$1 = cljs.core.nth.call(null,vec__36247,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),district0x.utils.etherscan_url.call(null,address),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"_blank","_blank",1070304072)], null),cljs.core.dissoc.call(null,props__$1,new cljs.core.Keyword(null,"address","address",559499426))),(cljs.core.truth_(children__$1)?children__$1:address)], null);
});

district0x.components.misc.etherscan_link.cljs$lang$maxFixedArity = (1);

district0x.components.misc.etherscan_link.cljs$lang$applyTo = (function (seq36245){
var G__36246 = cljs.core.first.call(null,seq36245);
var seq36245__$1 = cljs.core.next.call(null,seq36245);
return district0x.components.misc.etherscan_link.cljs$core$IFn$_invoke$arity$variadic(G__36246,seq36245__$1);
});

district0x.components.misc.watch = (function district0x$components$misc$watch(p__36255){
var map__36261 = p__36255;
var map__36261__$1 = ((((!((map__36261 == null)))?((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36261):map__36261);
var value = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"value","value",305978217));
var call_on_mount_QMARK_ = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"call-on-mount?","call-on-mount?",-1795431601),true);
var old_value = reagent.core.atom.call(null,(cljs.core.truth_(call_on_mount_QMARK_)?null:value));
return ((function (old_value,map__36261,map__36261__$1,value,call_on_mount_QMARK_){
return (function() { 
var G__36266__delegate = function (p__36263,childen){
var map__36264 = p__36263;
var map__36264__$1 = ((((!((map__36264 == null)))?((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36264):map__36264);
var on_change = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value__$1 = cljs.core.get.call(null,map__36264__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,old_value),value__$1)){
} else {
cljs.core.reset_BANG_.call(null,old_value,value__$1);

if(cljs.core.fn_QMARK_.call(null,on_change)){
on_change.call(null,value__$1);
} else {
}
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),childen);
};
var G__36266 = function (p__36263,var_args){
var childen = null;
if (arguments.length > 1) {
var G__36267__i = 0, G__36267__a = new Array(arguments.length -  1);
while (G__36267__i < G__36267__a.length) {G__36267__a[G__36267__i] = arguments[G__36267__i + 1]; ++G__36267__i;}
  childen = new cljs.core.IndexedSeq(G__36267__a,0);
} 
return G__36266__delegate.call(this,p__36263,childen);};
G__36266.cljs$lang$maxFixedArity = 1;
G__36266.cljs$lang$applyTo = (function (arglist__36268){
var p__36263 = cljs.core.first(arglist__36268);
var childen = cljs.core.rest(arglist__36268);
return G__36266__delegate(p__36263,childen);
});
G__36266.cljs$core$IFn$_invoke$arity$variadic = G__36266__delegate;
return G__36266;
})()
;
;})(old_value,map__36261,map__36261__$1,value,call_on_mount_QMARK_))
});
district0x.components.misc.youtube = (function district0x$components$misc$youtube(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),true], null),props)], null);
});

//# sourceMappingURL=misc.js.map