// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.utils');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('clojure.string');
cljs_web3.utils.js_val = (function cljs_web3$utils$js_val(clj_or_js_dict){
if(cljs.core.map_QMARK_.call(null,clj_or_js_dict)){
return cljs.core.clj__GT_js.call(null,clj_or_js_dict);
} else {
if(cljs.core.vector_QMARK_.call(null,clj_or_js_dict)){
return cljs.core.clj__GT_js.call(null,clj_or_js_dict);
} else {
return clj_or_js_dict;

}
}
});
cljs_web3.utils.js__GT_cljk = (function cljs_web3$utils$js__GT_cljk(p1__14137_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__14137_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
cljs_web3.utils.js__GT_cljkk = cljs.core.comp.call(null,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_kebab_case),cljs_web3.utils.js__GT_cljk);
cljs_web3.utils.cljkk__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_web3.utils.callback_js__GT_clj = (function cljs_web3$utils$callback_js__GT_clj(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return (function (err,res){
return x.call(null,err,cljs_web3.utils.js__GT_cljkk.call(null,res));
});
} else {
return x;
}
});
cljs_web3.utils.args_cljkk__GT_js = (function cljs_web3$utils$args_cljkk__GT_js(args){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs_web3.utils.cljkk__GT_js,cljs_web3.utils.callback_js__GT_clj),args);
});
cljs_web3.utils.js_apply = (function cljs_web3$utils$js_apply(var_args){
var args14138 = [];
var len__12775__auto___14141 = arguments.length;
var i__12776__auto___14142 = (0);
while(true){
if((i__12776__auto___14142 < len__12775__auto___14141)){
args14138.push((arguments[i__12776__auto___14142]));

var G__14143 = (i__12776__auto___14142 + (1));
i__12776__auto___14142 = G__14143;
continue;
} else {
}
break;
}

var G__14140 = args14138.length;
switch (G__14140) {
case 2:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14138.length)].join('')));

}
});

cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2 = (function (this$,method_name){
return cljs_web3.utils.js_apply.call(null,this$,method_name,null);
});

cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3 = (function (this$,method_name,args){
var method_name__$1 = cljs.core.name.call(null,method_name);
var temp__4655__auto__ = (this$[((clojure.string.includes_QMARK_.call(null,method_name__$1,"-"))?camel_snake_kebab.core.__GT_camelCase.call(null,method_name__$1):method_name__$1)]);
if(cljs.core.truth_(temp__4655__auto__)){
var method = temp__4655__auto__;
return cljs_web3.utils.js__GT_cljkk.call(null,method.apply(this$,cljs.core.clj__GT_js.call(null,cljs_web3.utils.args_cljkk__GT_js.call(null,args))));
} else {
throw [cljs.core.str("Method: "),cljs.core.str(method_name__$1),cljs.core.str(" was not found in object.")].join('');
}
});

cljs_web3.utils.js_apply.cljs$lang$maxFixedArity = 3;

cljs_web3.utils.js_prototype_apply = (function cljs_web3$utils$js_prototype_apply(js_obj,method_name,args){
return cljs_web3.utils.js_apply.call(null,(js_obj["prototype"]),method_name,args);
});
cljs_web3.utils.prop_or_clb_fn = (function cljs_web3$utils$prop_or_clb_fn(var_args){
var args__12782__auto__ = [];
var len__12775__auto___14146 = arguments.length;
var i__12776__auto___14147 = (0);
while(true){
if((i__12776__auto___14147 < len__12775__auto___14146)){
args__12782__auto__.push((arguments[i__12776__auto___14147]));

var G__14148 = (i__12776__auto___14147 + (1));
i__12776__auto___14147 = G__14148;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic = (function (ks){
return (function() { 
var G__14149__delegate = function (web3,args){
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args))){
return cljs_web3.utils.js_apply.call(null,cljs.core.apply.call(null,cljs.core.aget,web3,cljs.core.butlast.call(null,ks)),[cljs.core.str("get"),cljs.core.str(camel_snake_kebab.core.__GT_PascalCase.call(null,cljs.core.last.call(null,ks)))].join(''),args);
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs.core.apply.call(null,cljs.core.aget,web3,ks));
}
};
var G__14149 = function (web3,var_args){
var args = null;
if (arguments.length > 1) {
var G__14150__i = 0, G__14150__a = new Array(arguments.length -  1);
while (G__14150__i < G__14150__a.length) {G__14150__a[G__14150__i] = arguments[G__14150__i + 1]; ++G__14150__i;}
  args = new cljs.core.IndexedSeq(G__14150__a,0);
} 
return G__14149__delegate.call(this,web3,args);};
G__14149.cljs$lang$maxFixedArity = 1;
G__14149.cljs$lang$applyTo = (function (arglist__14151){
var web3 = cljs.core.first(arglist__14151);
var args = cljs.core.rest(arglist__14151);
return G__14149__delegate(web3,args);
});
G__14149.cljs$core$IFn$_invoke$arity$variadic = G__14149__delegate;
return G__14149;
})()
;
});

cljs_web3.utils.prop_or_clb_fn.cljs$lang$maxFixedArity = (0);

cljs_web3.utils.prop_or_clb_fn.cljs$lang$applyTo = (function (seq14145){
return cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14145));
});


//# sourceMappingURL=utils.js.map