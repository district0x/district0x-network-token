// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.components.text_field');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('district0x.utils');
goog.require('reagent.core');
goog.require('reagent.impl.template');
goog.require('goog.string.format');
goog.require('re_frame.core');
district0x.components.text_field.text_field_STAR_ = reagent.impl.template.adapt_react_class.call(null,(MaterialUI["TextField"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synthetic-input","synthetic-input",-135147697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (next,root_node,rendered_value,dom_value,component){
var input_node = root_node.querySelector("input");
var textarea_nodes = cljs.core.array_seq.call(null,root_node.querySelectorAll("textarea"));
var textarea_node = ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,textarea_nodes)))?cljs.core.second.call(null,textarea_nodes):null);
var target_node = (function (){var or__11700__auto__ = input_node;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return textarea_node;
}
})();
if(cljs.core.truth_(target_node)){
return next.call(null,target_node,rendered_value,dom_value,component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-write","on-write",31519475),((function (input_node,textarea_nodes,textarea_node,target_node){
return (function (new_value){
if(clojure.string.blank_QMARK_.call(null,new_value)){
return component.setState(({"hasValue": false, "isClean": false}));
} else {
return component.setState(({"hasValue": true, "isClean": false}));
}
});})(input_node,textarea_nodes,textarea_node,target_node))
], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (next,event){
return next.call(null,event,event.target.value);
})], null)], null));
district0x.components.text_field.text_field = (function district0x$components$text_field$text_field(p__46105){
var map__46108 = p__46105;
var map__46108__$1 = ((((!((map__46108 == null)))?((((map__46108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46108):map__46108);
var props = map__46108__$1;
var value = cljs.core.get.call(null,map__46108__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.text_field.text_field_STAR_,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210)], null),new cljs.core.Keyword(null,"floating-label-fixed","floating-label-fixed",1883528037),cljs.core.boolean$.call(null,cljs.core.seq.call(null,[cljs.core.str(value)].join('')))], null),props)], null);
});
district0x.components.text_field.form_text_field = (function district0x$components$text_field$form_text_field(p__46112){
var map__46115 = p__46112;
var map__46115__$1 = ((((!((map__46115 == null)))?((((map__46115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46115):map__46115);
var props = map__46115__$1;
var validator = cljs.core.get.call(null,map__46115__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var form_key = cljs.core.get.call(null,map__46115__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var field_key = cljs.core.get.call(null,map__46115__$1,new cljs.core.Keyword(null,"field-key","field-key",313262601));
var value = cljs.core.get.call(null,map__46115__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.text_field.text_field,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__46115,map__46115__$1,props,validator,form_key,field_key,value){
return (function (p1__46111_SHARP_,p2__46110_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","set-value","form/set-value",448367892),form_key,field_key,p2__46110_SHARP_,validator], null));
});})(map__46115,map__46115__$1,props,validator,form_key,field_key,value))
], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"form-key","form-key",-309492408),new cljs.core.Keyword(null,"field-key","field-key",313262601)))], null);
});
district0x.components.text_field.text_field_with_length = (function district0x$components$text_field$text_field_with_length(){
return (function (p__46120){
var map__46121 = p__46120;
var map__46121__$1 = ((((!((map__46121 == null)))?((((map__46121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46121):map__46121);
var props = map__46121__$1;
var value = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var max_length = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var min_length = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"min-length","min-length",-325792315));
var max_length_error_text = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"max-length-error-text","max-length-error-text",1868093654));
var min_length_error_text = cljs.core.get.call(null,map__46121__$1,new cljs.core.Keyword(null,"min-length-error-text","min-length-error-text",-1873601188));
var validator = district0x.utils.create_length_validator.call(null,min_length,max_length);
var valid_QMARK_ = validator.call(null,value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.text_field.form_text_field,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validator","validator",-1966190681),validator,new cljs.core.Keyword(null,"error-text","error-text",2021893718),(cljs.core.truth_(valid_QMARK_)?null:(((min_length > (0)))?(function (){var or__11700__auto__ = min_length_error_text;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return goog.string.format("Write between %s and %s characters",min_length,max_length);
}
})():(function (){var or__11700__auto__ = max_length_error_text;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return "Text is too long";
}
})()))], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"min-length","min-length",-325792315),new cljs.core.Keyword(null,"max-length","max-length",-254826109)))], null);
});
});
district0x.components.text_field.url_field = (function district0x$components$text_field$url_field(){
return (function (p__46127){
var map__46128 = p__46127;
var map__46128__$1 = ((((!((map__46128 == null)))?((((map__46128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46128):map__46128);
var props = map__46128__$1;
var value = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var max_length = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var allow_empty_QMARK_ = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314));
var max_length_error_text = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"max-length-error-text","max-length-error-text",1868093654));
var url_error_text = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"url-error-text","url-error-text",-114195781));
var max_length_validator = district0x.utils.create_length_validator.call(null,max_length);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.text_field.form_text_field,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validator","validator",-1966190681),cljs.core.every_pred.call(null,((function (max_length_validator,map__46128,map__46128__$1,props,value,on_change,max_length,allow_empty_QMARK_,max_length_error_text,url_error_text){
return (function (p1__46123_SHARP_){
return district0x.utils.http_url_QMARK_.call(null,p1__46123_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314),allow_empty_QMARK_], null));
});})(max_length_validator,map__46128,map__46128__$1,props,value,on_change,max_length,allow_empty_QMARK_,max_length_error_text,url_error_text))
,max_length_validator),new cljs.core.Keyword(null,"error-text","error-text",2021893718),((cljs.core.not.call(null,max_length_validator.call(null,value)))?(function (){var or__11700__auto__ = max_length_error_text;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return goog.string.format("URL must be shorter than %s characters",max_length);
}
})():(cljs.core.truth_(district0x.utils.http_url_QMARK_.call(null,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314),allow_empty_QMARK_], null)))?null:(function (){var or__11700__auto__ = url_error_text;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return "Invalid URL";
}
})()))], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314),new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"max-length-error-text","max-length-error-text",1868093654),new cljs.core.Keyword(null,"url-error-text","url-error-text",-114195781)))], null);
});
});
district0x.components.text_field.ether_field = (function district0x$components$text_field$ether_field(p__46131){
var map__46134 = p__46131;
var map__46134__$1 = ((((!((map__46134 == null)))?((((map__46134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46134):map__46134);
var props = map__46134__$1;
var value = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var form_key = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var field_key = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"field-key","field-key",313262601));
var allow_empty_QMARK_ = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314));
var only_positive_QMARK_ = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"only-positive?","only-positive?",-207754240));
var value_error_text = cljs.core.get.call(null,map__46134__$1,new cljs.core.Keyword(null,"value-error-text","value-error-text",-794148750));
var validator = (cljs.core.truth_(only_positive_QMARK_)?district0x.utils.pos_ether_value_QMARK_:district0x.utils.non_neg_ether_value_QMARK_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.text_field.text_field,reagent.core.merge_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (validator,map__46134,map__46134__$1,props,value,on_change,form_key,field_key,allow_empty_QMARK_,only_positive_QMARK_,value_error_text){
return (function (e,value__$1){
if(cljs.core.truth_(on_change)){
return on_change.call(null,e,value__$1);
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","set-value","form/set-value",448367892),form_key,field_key,value__$1,((function (validator,map__46134,map__46134__$1,props,value,on_change,form_key,field_key,allow_empty_QMARK_,only_positive_QMARK_,value_error_text){
return (function (p1__46130_SHARP_){
return validator.call(null,p1__46130_SHARP_,cljs.core.select_keys.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314)], null)));
});})(validator,map__46134,map__46134__$1,props,value,on_change,form_key,field_key,allow_empty_QMARK_,only_positive_QMARK_,value_error_text))
], null));
}
});})(validator,map__46134,map__46134__$1,props,value,on_change,form_key,field_key,allow_empty_QMARK_,only_positive_QMARK_,value_error_text))
,new cljs.core.Keyword(null,"error-text","error-text",2021893718),(cljs.core.truth_(validator.call(null,value,cljs.core.select_keys.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314)], null))))?null:(function (){var or__11700__auto__ = value_error_text;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return "Invalid value";
}
})())], null),cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"form-key","form-key",-309492408),new cljs.core.Keyword(null,"field-key","field-key",313262601),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314),new cljs.core.Keyword(null,"only-positive?","only-positive?",-207754240),new cljs.core.Keyword(null,"value-error-text","value-error-text",-794148750)))], null);
});

//# sourceMappingURL=text_field.js.map