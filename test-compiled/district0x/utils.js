// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('district0x.utils');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('medley.core');
goog.require('district0x.big_number');
goog.require('cljs_web3.core');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
goog.require('cemerick.url');
goog.require('goog.string.format');
goog.require('clojure.string');
district0x.utils.get_window_width_size = (function district0x$utils$get_window_width_size(width){
if((width >= (1200))){
return (3);
} else {
if((width >= (1024))){
return (2);
} else {
if((width >= (768))){
return (1);
} else {
return (0);

}
}
}
});
district0x.utils.address_QMARK_ = (function district0x$utils$address_QMARK_(x){
return cljs_web3.core.address_QMARK_.call(null,x);
});
district0x.utils.date_QMARK_ = (function district0x$utils$date_QMARK_(x){
return (x instanceof goog.date.DateTime);
});
district0x.utils.current_location_hash = (function district0x$utils$current_location_hash(){
var hash = clojure.string.replace.call(null,cljs.core.first.call(null,clojure.string.split.call(null,document.location.hash,/\?/)),"#","");
if(cljs.core.empty_QMARK_.call(null,hash)){
return "/";
} else {
return hash;
}
});
district0x.utils.current_url = (function district0x$utils$current_url(){
return cemerick.url.url.call(null,clojure.string.replace.call(null,location.href,"#",""));
});
district0x.utils.wei__GT_eth = (function district0x$utils$wei__GT_eth(x){
return cljs_web3.core.from_wei.call(null,x,new cljs.core.Keyword(null,"ether","ether",-911152777));
});
district0x.utils.wei__GT_eth__GT_num = cljs.core.comp.call(null,parseFloat,district0x.big_number.__GT_number,district0x.utils.wei__GT_eth);
district0x.utils.eth__GT_wei = (function district0x$utils$eth__GT_wei(x){
return cljs_web3.core.to_wei.call(null,x,new cljs.core.Keyword(null,"ether","ether",-911152777));
});
district0x.utils.eth__GT_wei__GT_num = cljs.core.comp.call(null,parseInt,district0x.utils.eth__GT_wei);
district0x.utils.big_num__GT_ether = cljs.core.comp.call(null,district0x.big_number.__GT_number,district0x.utils.wei__GT_eth);
district0x.utils.long__GT_epoch = (function district0x$utils$long__GT_epoch(x){
return (x / (1000));
});
district0x.utils.epoch__GT_long = (function district0x$utils$epoch__GT_long(x){
return (x * (1000));
});
district0x.utils.not_neg_QMARK_ = (function district0x$utils$not_neg_QMARK_(x){
return !((x < (0)));
});
/**
 * Truncate a string with suffix (ellipsis by default) if it is
 * longer than specified length.
 */
district0x.utils.truncate = (function district0x$utils$truncate(var_args){
var args13406 = [];
var len__12775__auto___13409 = arguments.length;
var i__12776__auto___13410 = (0);
while(true){
if((i__12776__auto___13410 < len__12775__auto___13409)){
args13406.push((arguments[i__12776__auto___13410]));

var G__13411 = (i__12776__auto___13410 + (1));
i__12776__auto___13410 = G__13411;
continue;
} else {
}
break;
}

var G__13408 = args13406.length;
switch (G__13408) {
case 2:
return district0x.utils.truncate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return district0x.utils.truncate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13406.length)].join('')));

}
});

district0x.utils.truncate.cljs$core$IFn$_invoke$arity$2 = (function (string,length){
return district0x.utils.truncate.call(null,string,length,"...");
});

district0x.utils.truncate.cljs$core$IFn$_invoke$arity$3 = (function (string,length,suffix){
var string_len = cljs.core.count.call(null,string);
var suffix_len = cljs.core.count.call(null,suffix);
if((string_len <= length)){
return string;
} else {
return [cljs.core.str(cljs.core.subs.call(null,string,(0),(length - suffix_len))),cljs.core.str(suffix)].join('');
}
});

district0x.utils.truncate.cljs$lang$maxFixedArity = 3;

district0x.utils.zero_address_QMARK_ = (function district0x$utils$zero_address_QMARK_(x){
return (cljs.core._EQ_.call(null,x,"0x0000000000000000000000000000000000000000")) || (cljs.core._EQ_.call(null,x,"0x"));
});
district0x.utils.ensure_vec = (function district0x$utils$ensure_vec(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
district0x.utils.format_eth = (function district0x$utils$format_eth(x){
if(cljs.core.truth_(x)){
return x.toLocaleString(undefined,({"maximumFractionDigits": (3)}));
} else {
return null;
}
});
district0x.utils.to_locale_string = (function district0x$utils$to_locale_string(x,max_fraction_digits){
if(cljs.core.truth_(x)){
return x.toLocaleString(undefined,({"maximumFractionDigits": max_fraction_digits}));
} else {
return null;
}
});
district0x.utils.format_eth_with_symbol = (function district0x$utils$format_eth_with_symbol(x){
if(cljs.core.truth_(x)){
return [cljs.core.str(district0x.utils.format_eth.call(null,x)),cljs.core.str(" ETH")].join('');
} else {
return null;
}
});
district0x.utils.format_dnt_with_symbol = (function district0x$utils$format_dnt_with_symbol(x){
if(cljs.core.truth_(x)){
return [cljs.core.str(district0x.utils.format_eth.call(null,x)),cljs.core.str(" DNT")].join('');
} else {
return null;
}
});
district0x.utils.format_metric = (function district0x$utils$format_metric(x){
if((x < (1000))){
return parseInt(x);
} else {
if((((999) < x)) && ((x < (1000000)))){
return goog.string.format("%.2fK",(x / (1000)));
} else {
if(((999999) < x)){
return goog.string.format("%.2fM",(x / (1000000)));
} else {
return null;
}
}
}
});
district0x.utils.format_datetime = (function district0x$utils$format_datetime(date){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697)),date);
} else {
return null;
}
});
district0x.utils.format_local_datetime = (function district0x$utils$format_local_datetime(date){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse_local.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697)),date);
} else {
return null;
}
});
district0x.utils.format_local_date = (function district0x$utils$format_local_date(date){
if(cljs.core.truth_(date)){
return cljs_time.format.unparse_local.call(null,cljs_time.format.formatter.call(null,"EEE, dd MMM yyyy Z"),date);
} else {
return null;
}
});
district0x.utils.bool__GT_yes_BAR_no = (function district0x$utils$bool__GT_yes_BAR_no(x){
if(cljs.core.truth_(x)){
return "yes";
} else {
return "no";
}
});
district0x.utils.etherscan_url = (function district0x$utils$etherscan_url(address){
return goog.string.format("https://etherscan.io/address/%s",address);
});
district0x.utils.time_remaining = (function district0x$utils$time_remaining(from_time,to_time){
var milis_difference = (cljs_time.coerce.to_long.call(null,to_time) - cljs_time.coerce.to_long.call(null,from_time));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),Math.floor(cljs.core.mod.call(null,(milis_difference / (1000)),(60))),new cljs.core.Keyword(null,"minutes","minutes",1319166394),Math.floor(cljs.core.mod.call(null,((milis_difference / (1000)) / (60)),(60))),new cljs.core.Keyword(null,"hours","hours",58380855),Math.floor(cljs.core.mod.call(null,(milis_difference / (3600000)),(24))),new cljs.core.Keyword(null,"days","days",-1394072564),Math.floor((milis_difference / (86400000)))], null);
});
district0x.utils.pluralize = (function district0x$utils$pluralize(text,count){
return [cljs.core.str(text),cljs.core.str(((cljs.core.not_EQ_.call(null,count,(1)))?"s":null))].join('');
});
district0x.utils.replace_comma = (function district0x$utils$replace_comma(x){
return clojure.string.replace.call(null,x,",",".");
});
district0x.utils.empty_string_QMARK_ = (function district0x$utils$empty_string_QMARK_(x){
return (typeof x === 'string') && (cljs.core.empty_QMARK_.call(null,x));
});
district0x.utils.parse_float = (function district0x$utils$parse_float(number){
if(typeof number === 'string'){
return parseFloat(district0x.utils.replace_comma.call(null,number));
} else {
return number;
}
});
district0x.utils.non_neg_QMARK_ = (function district0x$utils$non_neg_QMARK_(x){
return !((x < (0)));
});
district0x.utils.non_neg_ether_value_QMARK_ = (function district0x$utils$non_neg_ether_value_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13422 = arguments.length;
var i__12776__auto___13423 = (0);
while(true){
if((i__12776__auto___13423 < len__12775__auto___13422)){
args__12782__auto__.push((arguments[i__12776__auto___13423]));

var G__13424 = (i__12776__auto___13423 + (1));
i__12776__auto___13423 = G__13424;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.utils.non_neg_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.utils.non_neg_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13415){
var vec__13416 = p__13415;
var map__13419 = cljs.core.nth.call(null,vec__13416,(0),null);
var map__13419__$1 = ((((!((map__13419 == null)))?((((map__13419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13419):map__13419);
var allow_empty_QMARK_ = cljs.core.get.call(null,map__13419__$1,new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314));
try{if(cljs.core.truth_((function (){var and__11688__auto__ = cljs.core.not.call(null,allow_empty_QMARK_);
if(and__11688__auto__){
return district0x.utils.empty_string_QMARK_.call(null,x);
} else {
return and__11688__auto__;
}
})())){
throw (new Error());
} else {
}

var value = cljs_web3.core.to_wei.call(null,((typeof x === 'string')?district0x.utils.replace_comma.call(null,x):x),new cljs.core.Keyword(null,"ether","ether",-911152777));
var or__11700__auto__ = (typeof value === 'string') && (!(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,value))));
if(or__11700__auto__){
return or__11700__auto__;
} else {
var and__11688__auto__ = district0x.big_number.big_number_QMARK_.call(null,value);
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.not.call(null,district0x.big_number.big_number_QMARK_.call(null,value));
} else {
return and__11688__auto__;
}
}
}catch (e13421){var e = e13421;
return false;
}});

district0x.utils.non_neg_ether_value_QMARK_.cljs$lang$maxFixedArity = (1);

district0x.utils.non_neg_ether_value_QMARK_.cljs$lang$applyTo = (function (seq13413){
var G__13414 = cljs.core.first.call(null,seq13413);
var seq13413__$1 = cljs.core.next.call(null,seq13413);
return district0x.utils.non_neg_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13414,seq13413__$1);
});

district0x.utils.pos_ether_value_QMARK_ = (function district0x$utils$pos_ether_value_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13431 = arguments.length;
var i__12776__auto___13432 = (0);
while(true){
if((i__12776__auto___13432 < len__12775__auto___13431)){
args__12782__auto__.push((arguments[i__12776__auto___13432]));

var G__13433 = (i__12776__auto___13432 + (1));
i__12776__auto___13432 = G__13433;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.utils.pos_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.utils.pos_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13427){
var vec__13428 = p__13427;
var props = cljs.core.nth.call(null,vec__13428,(0),null);
var and__11688__auto__ = district0x.utils.non_neg_ether_value_QMARK_.call(null,x,props);
if(cljs.core.truth_(and__11688__auto__)){
var or__11700__auto__ = (typeof x === 'string') && ((district0x.utils.parse_float.call(null,x) > (0)));
if(or__11700__auto__){
return or__11700__auto__;
} else {
var or__11700__auto____$1 = (typeof x === 'number') && ((x > (0)));
if(or__11700__auto____$1){
return or__11700__auto____$1;
} else {
var and__11688__auto____$1 = district0x.big_number.big_number_QMARK_.call(null,x);
if(cljs.core.truth_(and__11688__auto____$1)){
return district0x.big_number.pos_QMARK_.call(null,x);
} else {
return and__11688__auto____$1;
}
}
}
} else {
return and__11688__auto__;
}
});

district0x.utils.pos_ether_value_QMARK_.cljs$lang$maxFixedArity = (1);

district0x.utils.pos_ether_value_QMARK_.cljs$lang$applyTo = (function (seq13425){
var G__13426 = cljs.core.first.call(null,seq13425);
var seq13425__$1 = cljs.core.next.call(null,seq13425);
return district0x.utils.pos_ether_value_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13426,seq13425__$1);
});

district0x.utils.non_neg_or_empty_ether_value_QMARK_ = (function district0x$utils$non_neg_or_empty_ether_value_QMARK_(p1__13434_SHARP_){
return district0x.utils.non_neg_ether_value_QMARK_.call(null,p1__13434_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314),true], null));
});
district0x.utils.num__GT_wei = (function district0x$utils$num__GT_wei(value){
return cljs_web3.core.to_wei.call(null,((typeof value === 'string')?district0x.utils.replace_comma.call(null,value):value),new cljs.core.Keyword(null,"ether","ether",-911152777));
});
district0x.utils.eth_props__GT_wei_props = (function district0x$utils$eth_props__GT_wei_props(args,wei_keys){
return medley.core.map_kv.call(null,(function (key,value){
if(cljs.core.contains_QMARK_.call(null,wei_keys,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((cljs.core.sequential_QMARK_.call(null,value))?cljs.core.map.call(null,district0x.utils.num__GT_wei,value):district0x.utils.num__GT_wei.call(null,value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
}
}),args);
});
district0x.utils.map__GT_vec = (function district0x$utils$map__GT_vec(m,keys_order){
return cljs.core.mapv.call(null,(function (arg_key){
if(cljs.core.sequential_QMARK_.call(null,arg_key)){
return cljs.core.map.call(null,(function (p1__13435_SHARP_){
return cljs.core.get.call(null,m,p1__13435_SHARP_);
}),arg_key);
} else {
return cljs.core.get.call(null,m,arg_key);
}
}),keys_order);
});
district0x.utils.http_url_pattern = /^(?:(?:https?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i;
district0x.utils.http_url_QMARK_ = (function district0x$utils$http_url_QMARK_(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13444 = arguments.length;
var i__12776__auto___13445 = (0);
while(true){
if((i__12776__auto___13445 < len__12775__auto___13444)){
args__12782__auto__.push((arguments[i__12776__auto___13445]));

var G__13446 = (i__12776__auto___13445 + (1));
i__12776__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return district0x.utils.http_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

district0x.utils.http_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13438){
var vec__13439 = p__13438;
var map__13442 = cljs.core.nth.call(null,vec__13439,(0),null);
var map__13442__$1 = ((((!((map__13442 == null)))?((((map__13442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13442):map__13442);
var allow_empty_QMARK_ = cljs.core.get.call(null,map__13442__$1,new cljs.core.Keyword(null,"allow-empty?","allow-empty?",231151314));
if(cljs.core.truth_((function (){var and__11688__auto__ = allow_empty_QMARK_;
if(cljs.core.truth_(and__11688__auto__)){
return cljs.core.empty_QMARK_.call(null,x);
} else {
return and__11688__auto__;
}
})())){
return true;
} else {
if(typeof x === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,district0x.utils.http_url_pattern,x));
} else {
return null;
}
}
});

district0x.utils.http_url_QMARK_.cljs$lang$maxFixedArity = (1);

district0x.utils.http_url_QMARK_.cljs$lang$applyTo = (function (seq13436){
var G__13437 = cljs.core.first.call(null,seq13436);
var seq13436__$1 = cljs.core.next.call(null,seq13436);
return district0x.utils.http_url_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__13437,seq13436__$1);
});

district0x.utils.create_length_validator = (function district0x$utils$create_length_validator(var_args){
var args13447 = [];
var len__12775__auto___13450 = arguments.length;
var i__12776__auto___13451 = (0);
while(true){
if((i__12776__auto___13451 < len__12775__auto___13450)){
args13447.push((arguments[i__12776__auto___13451]));

var G__13452 = (i__12776__auto___13451 + (1));
i__12776__auto___13451 = G__13452;
continue;
} else {
}
break;
}

var G__13449 = args13447.length;
switch (G__13449) {
case 1:
return district0x.utils.create_length_validator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district0x.utils.create_length_validator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13447.length)].join('')));

}
});

district0x.utils.create_length_validator.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return district0x.utils.create_length_validator.call(null,(0),max_length);
});

district0x.utils.create_length_validator.cljs$core$IFn$_invoke$arity$2 = (function (min_length,max_length){
if(cljs.core.truth_(max_length)){
return (function (x){
return (((function (){var or__11700__auto__ = min_length;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (0);
}
})() <= ((typeof x === 'string')?cljs.core.count.call(null,clojure.string.trim.call(null,x)):(0)))) && ((((typeof x === 'string')?cljs.core.count.call(null,clojure.string.trim.call(null,x)):(0)) <= max_length));
});
} else {
return cljs.core.constantly.call(null,true);
}
});

district0x.utils.create_length_validator.cljs$lang$maxFixedArity = 2;

district0x.utils.color_emphasize = (function district0x$utils$color_emphasize(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13455 = arguments.length;
var i__12776__auto___13456 = (0);
while(true){
if((i__12776__auto___13456 < len__12775__auto___13455)){
args__12782__auto__.push((arguments[i__12776__auto___13456]));

var G__13457 = (i__12776__auto___13456 + (1));
i__12776__auto___13456 = G__13457;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.utils.color_emphasize.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.utils.color_emphasize.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,MaterialUIUtils.colorManipulator.emphasize,args);
});

district0x.utils.color_emphasize.cljs$lang$maxFixedArity = (0);

district0x.utils.color_emphasize.cljs$lang$applyTo = (function (seq13454){
return district0x.utils.color_emphasize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13454));
});

district0x.utils.color_lighten = (function district0x$utils$color_lighten(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13459 = arguments.length;
var i__12776__auto___13460 = (0);
while(true){
if((i__12776__auto___13460 < len__12775__auto___13459)){
args__12782__auto__.push((arguments[i__12776__auto___13460]));

var G__13461 = (i__12776__auto___13460 + (1));
i__12776__auto___13460 = G__13461;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.utils.color_lighten.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.utils.color_lighten.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,MaterialUIUtils.colorManipulator.lighten,args);
});

district0x.utils.color_lighten.cljs$lang$maxFixedArity = (0);

district0x.utils.color_lighten.cljs$lang$applyTo = (function (seq13458){
return district0x.utils.color_lighten.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13458));
});

district0x.utils.color_darken = (function district0x$utils$color_darken(var_args){
var args__12782__auto__ = [];
var len__12775__auto___13463 = arguments.length;
var i__12776__auto___13464 = (0);
while(true){
if((i__12776__auto___13464 < len__12775__auto___13463)){
args__12782__auto__.push((arguments[i__12776__auto___13464]));

var G__13465 = (i__12776__auto___13464 + (1));
i__12776__auto___13464 = G__13465;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return district0x.utils.color_darken.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

district0x.utils.color_darken.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,MaterialUIUtils.colorManipulator.darken,args);
});

district0x.utils.color_darken.cljs$lang$maxFixedArity = (0);

district0x.utils.color_darken.cljs$lang$applyTo = (function (seq13462){
return district0x.utils.color_darken.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13462));
});

district0x.utils.chan_QMARK_ = (function district0x$utils$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
district0x.utils.error_QMARK_ = (function district0x$utils$error_QMARK_(x){
return (x instanceof Error);
});
district0x.utils.tx_address_QMARK_ = (function district0x$utils$tx_address_QMARK_(x){
return (typeof x === 'string') && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(66)));
});

//# sourceMappingURL=utils.js.map