// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.components.active_address_select_field');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('district0x.utils');
goog.require('re_frame.core');
goog.require('reagent.core');
district0x.components.active_address_select_field.active_address_select_field = (function district0x$components$active_address_select_field$active_address_select_field(){
var xs_width_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","window-xs-width?","district0x/window-xs-width?",14187919)], null));
var my_addresses = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","my-addresses","district0x/my-addresses",1741284138)], null));
var active_address = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","active-address","district0x/active-address",-331101118)], null));
return ((function (xs_width_QMARK_,my_addresses,active_address){
return (function (p__36305){
var map__36306 = p__36305;
var map__36306__$1 = ((((!((map__36306 == null)))?((((map__36306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36306):map__36306);
var select_field_props = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"select-field-props","select-field-props",-1518361213));
var menu_item_props = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"menu-item-props","menu-item-props",-363823701));
var single_address_props = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"single-address-props","single-address-props",1806318978));
if(cljs.core.seq.call(null,cljs.core.deref.call(null,my_addresses))){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,my_addresses)))){
if(cljs.core.truth_(cljs.core.deref.call(null,xs_width_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),single_address_props,district0x.utils.truncate.call(null,cljs.core.deref.call(null,active_address),(function (){var or__11700__auto__ = new cljs.core.Keyword(null,"single-address-truncate","single-address-truncate",-1887240362).cljs$core$IFn$_invoke$arity$1(single_address_props);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (13);
}
})())], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.select_field,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,active_address),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address){
return (function (p1__36296_SHARP_,p2__36297_SHARP_,p3__36295_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","set-active-address","district0x/set-active-address",-1876941035),p3__36295_SHARP_], null));
});})(map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(170)], null),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),true], null),select_field_props),(function (){var iter__12480__auto__ = ((function (map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address){
return (function district0x$components$active_address_select_field$active_address_select_field_$_iter__36308(s__36309){
return (new cljs.core.LazySeq(null,((function (map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address){
return (function (){
var s__36309__$1 = s__36309;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36309__$1);
if(temp__4657__auto__){
var s__36309__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36309__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__36309__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__36311 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__36310 = (0);
while(true){
if((i__36310 < size__12479__auto__)){
var address = cljs.core._nth.call(null,c__12478__auto__,i__36310);
cljs.core.chunk_append.call(null,b__36311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),address,new cljs.core.Keyword(null,"primary-text","primary-text",146474209),district0x.utils.truncate.call(null,address,(function (){var or__11700__auto__ = new cljs.core.Keyword(null,"menu-item-truncate","menu-item-truncate",393400933).cljs$core$IFn$_invoke$arity$1(menu_item_props);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (25);
}
})()),new cljs.core.Keyword(null,"key","key",-1516042587),address], null),menu_item_props)], null));

var G__36312 = (i__36310 + (1));
i__36310 = G__36312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36311),district0x$components$active_address_select_field$active_address_select_field_$_iter__36308.call(null,cljs.core.chunk_rest.call(null,s__36309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36311),null);
}
} else {
var address = cljs.core.first.call(null,s__36309__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),address,new cljs.core.Keyword(null,"primary-text","primary-text",146474209),district0x.utils.truncate.call(null,address,(function (){var or__11700__auto__ = new cljs.core.Keyword(null,"menu-item-truncate","menu-item-truncate",393400933).cljs$core$IFn$_invoke$arity$1(menu_item_props);
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (25);
}
})()),new cljs.core.Keyword(null,"key","key",-1516042587),address], null),menu_item_props)], null),district0x$components$active_address_select_field$active_address_select_field_$_iter__36308.call(null,cljs.core.rest.call(null,s__36309__$2)));
}
} else {
return null;
}
break;
}
});})(map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address))
,null,null));
});})(map__36306,map__36306__$1,select_field_props,menu_item_props,single_address_props,xs_width_QMARK_,my_addresses,active_address))
;
return iter__12480__auto__.call(null,cljs.core.deref.call(null,my_addresses));
})()], null);
}
} else {
return null;
}
});
;})(xs_width_QMARK_,my_addresses,active_address))
});

//# sourceMappingURL=active_address_select_field.js.map