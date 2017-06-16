// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23332,handler){
var map__23333 = p__23332;
var map__23333__$1 = ((((!((map__23333 == null)))?((((map__23333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23333):map__23333);
var uri = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23333__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23333,map__23333__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23331_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23331_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23333,map__23333__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___23345 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___23345)){
var response_type_23346 = temp__4657__auto___23345;
this$__$1.responseType = cljs.core.name.call(null,response_type_23346);
} else {
}

var seq__23335_23347 = cljs.core.seq.call(null,headers);
var chunk__23336_23348 = null;
var count__23337_23349 = (0);
var i__23338_23350 = (0);
while(true){
if((i__23338_23350 < count__23337_23349)){
var vec__23339_23351 = cljs.core._nth.call(null,chunk__23336_23348,i__23338_23350);
var k_23352 = cljs.core.nth.call(null,vec__23339_23351,(0),null);
var v_23353 = cljs.core.nth.call(null,vec__23339_23351,(1),null);
this$__$1.setRequestHeader(k_23352,v_23353);

var G__23354 = seq__23335_23347;
var G__23355 = chunk__23336_23348;
var G__23356 = count__23337_23349;
var G__23357 = (i__23338_23350 + (1));
seq__23335_23347 = G__23354;
chunk__23336_23348 = G__23355;
count__23337_23349 = G__23356;
i__23338_23350 = G__23357;
continue;
} else {
var temp__4657__auto___23358 = cljs.core.seq.call(null,seq__23335_23347);
if(temp__4657__auto___23358){
var seq__23335_23359__$1 = temp__4657__auto___23358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23335_23359__$1)){
var c__12511__auto___23360 = cljs.core.chunk_first.call(null,seq__23335_23359__$1);
var G__23361 = cljs.core.chunk_rest.call(null,seq__23335_23359__$1);
var G__23362 = c__12511__auto___23360;
var G__23363 = cljs.core.count.call(null,c__12511__auto___23360);
var G__23364 = (0);
seq__23335_23347 = G__23361;
chunk__23336_23348 = G__23362;
count__23337_23349 = G__23363;
i__23338_23350 = G__23364;
continue;
} else {
var vec__23342_23365 = cljs.core.first.call(null,seq__23335_23359__$1);
var k_23366 = cljs.core.nth.call(null,vec__23342_23365,(0),null);
var v_23367 = cljs.core.nth.call(null,vec__23342_23365,(1),null);
this$__$1.setRequestHeader(k_23366,v_23367);

var G__23368 = cljs.core.next.call(null,seq__23335_23359__$1);
var G__23369 = null;
var G__23370 = (0);
var G__23371 = (0);
seq__23335_23347 = G__23368;
chunk__23336_23348 = G__23369;
count__23337_23349 = G__23370;
i__23338_23350 = G__23371;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__11700__auto__ = body;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map