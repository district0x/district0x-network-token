// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('madvas.re_frame.google_analytics_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_ = true;
madvas.re_frame.google_analytics_fx.set_enabled_BANG_ = (function madvas$re_frame$google_analytics_fx$set_enabled_BANG_(enabled_QMARK_){
return madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_ = enabled_QMARK_;
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","send","ga/send",-652153972),(function (p__44675){
var vec__44676 = p__44675;
var fields_object = cljs.core.nth.call(null,vec__44676,(0),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send",cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","set","ga/set",304605992),(function (p__44679){
var vec__44680 = p__44679;
var fields_object = cljs.core.nth.call(null,vec__44680,(0),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("set",cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","create","ga/create",-1301494034),(function (p__44683){
var vec__44684 = p__44683;
var tracking_id = cljs.core.nth.call(null,vec__44684,(0),null);
var cookie_domain = cljs.core.nth.call(null,vec__44684,(1),null);
var name = cljs.core.nth.call(null,vec__44684,(2),null);
var fields_object = cljs.core.nth.call(null,vec__44684,(3),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("create",tracking_id,cookie_domain,name,cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","page-view","ga/page-view",-1684523984),(function (p__44687){
var vec__44688 = p__44687;
var page = cljs.core.nth.call(null,vec__44688,(0),null);
var fields_object = cljs.core.nth.call(null,vec__44688,(1),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","pageview",page,cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","event","ga/event",301434432),(function (p__44691){
var vec__44692 = p__44691;
var category = cljs.core.nth.call(null,vec__44692,(0),null);
var action = cljs.core.nth.call(null,vec__44692,(1),null);
var label = cljs.core.nth.call(null,vec__44692,(2),null);
var value = cljs.core.nth.call(null,vec__44692,(3),null);
var fields_object = cljs.core.nth.call(null,vec__44692,(4),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","event",category,action,label,value,cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","social","ga/social",-1560252477),(function (p__44695){
var vec__44696 = p__44695;
var social_network = cljs.core.nth.call(null,vec__44696,(0),null);
var social_action = cljs.core.nth.call(null,vec__44696,(1),null);
var social_target = cljs.core.nth.call(null,vec__44696,(2),null);
var fields_object = cljs.core.nth.call(null,vec__44696,(3),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","social",social_network,social_action,social_target,cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","screen-view","ga/screen-view",-754743105),(function (p__44699){
var vec__44700 = p__44699;
var fields_object = cljs.core.nth.call(null,vec__44700,(0),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","screenview",(cljs.core.truth_(fields_object)?cljs.core.clj__GT_js.call(null,fields_object):null));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","timing","ga/timing",-1849205649),(function (p__44703){
var vec__44704 = p__44703;
var timing_category = cljs.core.nth.call(null,vec__44704,(0),null);
var timing_var = cljs.core.nth.call(null,vec__44704,(1),null);
var timing_value = cljs.core.nth.call(null,vec__44704,(2),null);
var timing_label = cljs.core.nth.call(null,vec__44704,(3),null);
var fields_object = cljs.core.nth.call(null,vec__44704,(4),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","timing",timing_category,timing_var,timing_value,timing_label,cljs.core.clj__GT_js.call(null,fields_object));
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("ga","exception","ga/exception",-335273270),(function (p__44707){
var vec__44708 = p__44707;
var description = cljs.core.nth.call(null,vec__44708,(0),null);
var fatal_QMARK_ = cljs.core.nth.call(null,vec__44708,(1),null);
if(cljs.core.truth_(madvas.re_frame.google_analytics_fx._STAR_enabled_STAR_)){
return ga("send","exception",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exDescription","exDescription",-513472376),description,new cljs.core.Keyword(null,"exFatal","exFatal",-1648118005),(cljs.core.truth_(fatal_QMARK_)?true:false)], null)));
} else {
return null;
}
}));

//# sourceMappingURL=google_analytics_fx.js.map