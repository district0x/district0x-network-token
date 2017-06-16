// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.dispatch_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district0x","dispatch","district0x/dispatch",-1235341893),(function (event){
if(cljs.core.truth_(event)){
return re_frame.core.dispatch.call(null,event);
} else {
return null;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district0x","dispatch-n","district0x/dispatch-n",967825054),(function (events){
if(cljs.core.sequential_QMARK_.call(null,events)){
var seq__35568 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,events));
var chunk__35569 = null;
var count__35570 = (0);
var i__35571 = (0);
while(true){
if((i__35571 < count__35570)){
var event = cljs.core._nth.call(null,chunk__35569,i__35571);
re_frame.core.dispatch.call(null,event);

var G__35572 = seq__35568;
var G__35573 = chunk__35569;
var G__35574 = count__35570;
var G__35575 = (i__35571 + (1));
seq__35568 = G__35572;
chunk__35569 = G__35573;
count__35570 = G__35574;
i__35571 = G__35575;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35568);
if(temp__4657__auto__){
var seq__35568__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35568__$1)){
var c__12511__auto__ = cljs.core.chunk_first.call(null,seq__35568__$1);
var G__35576 = cljs.core.chunk_rest.call(null,seq__35568__$1);
var G__35577 = c__12511__auto__;
var G__35578 = cljs.core.count.call(null,c__12511__auto__);
var G__35579 = (0);
seq__35568 = G__35576;
chunk__35569 = G__35577;
count__35570 = G__35578;
i__35571 = G__35579;
continue;
} else {
var event = cljs.core.first.call(null,seq__35568__$1);
re_frame.core.dispatch.call(null,event);

var G__35580 = cljs.core.next.call(null,seq__35568__$1);
var G__35581 = null;
var G__35582 = (0);
var G__35583 = (0);
seq__35568 = G__35580;
chunk__35569 = G__35581;
count__35570 = G__35582;
i__35571 = G__35583;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

//# sourceMappingURL=dispatch_fx.js.map