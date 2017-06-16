// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_web3.core');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
cljs_web3.core.version_api = cljs_web3.utils.prop_or_clb_fn.call(null,"version","api");
cljs_web3.core.version_node = cljs_web3.utils.prop_or_clb_fn.call(null,"version","node");
cljs_web3.core.version_network = cljs_web3.utils.prop_or_clb_fn.call(null,"version","network");
cljs_web3.core.version_ethereum = cljs_web3.utils.prop_or_clb_fn.call(null,"version","ethereum");
cljs_web3.core.version_whisper = cljs_web3.utils.prop_or_clb_fn.call(null,"version","whisper");
cljs_web3.core.connected_QMARK_ = (function cljs_web3$core$connected_QMARK_(web3){
return cljs_web3.utils.js_apply.call(null,web3,"isConnected");
});
cljs_web3.core.sha3 = (function cljs_web3$core$sha3(var_args){
var args21068 = [];
var len__12775__auto___21071 = arguments.length;
var i__12776__auto___21072 = (0);
while(true){
if((i__12776__auto___21072 < len__12775__auto___21071)){
args21068.push((arguments[i__12776__auto___21072]));

var G__21073 = (i__12776__auto___21072 + (1));
i__12776__auto___21072 = G__21073;
continue;
} else {
}
break;
}

var G__21070 = args21068.length;
switch (G__21070) {
case 1:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21068.length)].join('')));

}
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$1 = (function (string){
return cljs_web3.core.sha3.call(null,string,null);
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$2 = (function (string,options){
return cljs_web3.core.sha3.call(null,Web3,string,options);
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$3 = (function (Web3,string,options){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"sha3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,options], null));
});

cljs_web3.core.sha3.cljs$lang$maxFixedArity = 3;

cljs_web3.core.to_hex = (function cljs_web3$core$to_hex(var_args){
var args21075 = [];
var len__12775__auto___21078 = arguments.length;
var i__12776__auto___21079 = (0);
while(true){
if((i__12776__auto___21079 < len__12775__auto___21078)){
args21075.push((arguments[i__12776__auto___21079]));

var G__21080 = (i__12776__auto___21079 + (1));
i__12776__auto___21079 = G__21080;
continue;
} else {
}
break;
}

var G__21077 = args21075.length;
switch (G__21077) {
case 1:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21075.length)].join('')));

}
});

cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$1 = (function (any){
return cljs_web3.core.to_hex.call(null,Web3,any);
});

cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$2 = (function (Web3,any){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toHex",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [any], null));
});

cljs_web3.core.to_hex.cljs$lang$maxFixedArity = 2;

cljs_web3.core.to_ascii = (function cljs_web3$core$to_ascii(var_args){
var args21082 = [];
var len__12775__auto___21085 = arguments.length;
var i__12776__auto___21086 = (0);
while(true){
if((i__12776__auto___21086 < len__12775__auto___21085)){
args21082.push((arguments[i__12776__auto___21086]));

var G__21087 = (i__12776__auto___21086 + (1));
i__12776__auto___21086 = G__21087;
continue;
} else {
}
break;
}

var G__21084 = args21082.length;
switch (G__21084) {
case 1:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21082.length)].join('')));

}
});

cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$1 = (function (hex_string){
return cljs_web3.core.to_ascii.call(null,Web3,hex_string);
});

cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$2 = (function (Web3,hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toAscii",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hex_string], null));
});

cljs_web3.core.to_ascii.cljs$lang$maxFixedArity = 2;

cljs_web3.core.from_ascii = (function cljs_web3$core$from_ascii(var_args){
var args21089 = [];
var len__12775__auto___21092 = arguments.length;
var i__12776__auto___21093 = (0);
while(true){
if((i__12776__auto___21093 < len__12775__auto___21092)){
args21089.push((arguments[i__12776__auto___21093]));

var G__21094 = (i__12776__auto___21093 + (1));
i__12776__auto___21093 = G__21094;
continue;
} else {
}
break;
}

var G__21091 = args21089.length;
switch (G__21091) {
case 1:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21089.length)].join('')));

}
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$1 = (function (string){
return cljs_web3.core.from_ascii.call(null,string,null);
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$2 = (function (string,padding){
return cljs_web3.core.from_ascii.call(null,Web3,string,padding);
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$3 = (function (Web3,string,padding){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromAscii",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,padding], null));
});

cljs_web3.core.from_ascii.cljs$lang$maxFixedArity = 3;

cljs_web3.core.to_decimal = (function cljs_web3$core$to_decimal(var_args){
var args21096 = [];
var len__12775__auto___21099 = arguments.length;
var i__12776__auto___21100 = (0);
while(true){
if((i__12776__auto___21100 < len__12775__auto___21099)){
args21096.push((arguments[i__12776__auto___21100]));

var G__21101 = (i__12776__auto___21100 + (1));
i__12776__auto___21100 = G__21101;
continue;
} else {
}
break;
}

var G__21098 = args21096.length;
switch (G__21098) {
case 1:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21096.length)].join('')));

}
});

cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$1 = (function (hex_string){
return cljs_web3.core.to_decimal.call(null,Web3,hex_string);
});

cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$2 = (function (Web3,hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toDecimal",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hex_string], null));
});

cljs_web3.core.to_decimal.cljs$lang$maxFixedArity = 2;

cljs_web3.core.from_decimal = (function cljs_web3$core$from_decimal(var_args){
var args21103 = [];
var len__12775__auto___21106 = arguments.length;
var i__12776__auto___21107 = (0);
while(true){
if((i__12776__auto___21107 < len__12775__auto___21106)){
args21103.push((arguments[i__12776__auto___21107]));

var G__21108 = (i__12776__auto___21107 + (1));
i__12776__auto___21107 = G__21108;
continue;
} else {
}
break;
}

var G__21105 = args21103.length;
switch (G__21105) {
case 1:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21103.length)].join('')));

}
});

cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$1 = (function (number){
return cljs_web3.core.from_decimal.call(null,Web3,number);
});

cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$2 = (function (Web3,number){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromDecimal",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number], null));
});

cljs_web3.core.from_decimal.cljs$lang$maxFixedArity = 2;

cljs_web3.core.from_wei = (function cljs_web3$core$from_wei(var_args){
var args21110 = [];
var len__12775__auto___21113 = arguments.length;
var i__12776__auto___21114 = (0);
while(true){
if((i__12776__auto___21114 < len__12775__auto___21113)){
args21110.push((arguments[i__12776__auto___21114]));

var G__21115 = (i__12776__auto___21114 + (1));
i__12776__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var G__21112 = args21110.length;
switch (G__21112) {
case 2:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21110.length)].join('')));

}
});

cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2 = (function (number,unit){
return cljs_web3.core.from_wei.call(null,Web3,number,unit);
});

cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$3 = (function (Web3,number,unit){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromWei",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,cljs.core.name.call(null,unit)], null));
});

cljs_web3.core.from_wei.cljs$lang$maxFixedArity = 3;

cljs_web3.core.to_wei = (function cljs_web3$core$to_wei(var_args){
var args21117 = [];
var len__12775__auto___21120 = arguments.length;
var i__12776__auto___21121 = (0);
while(true){
if((i__12776__auto___21121 < len__12775__auto___21120)){
args21117.push((arguments[i__12776__auto___21121]));

var G__21122 = (i__12776__auto___21121 + (1));
i__12776__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var G__21119 = args21117.length;
switch (G__21119) {
case 2:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21117.length)].join('')));

}
});

cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$2 = (function (number,unit){
return cljs_web3.core.to_wei.call(null,Web3,number,unit);
});

cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$3 = (function (Web3,number,unit){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toWei",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,cljs.core.name.call(null,unit)], null));
});

cljs_web3.core.to_wei.cljs$lang$maxFixedArity = 3;

cljs_web3.core.to_big_number = (function cljs_web3$core$to_big_number(var_args){
var args21124 = [];
var len__12775__auto___21127 = arguments.length;
var i__12776__auto___21128 = (0);
while(true){
if((i__12776__auto___21128 < len__12775__auto___21127)){
args21124.push((arguments[i__12776__auto___21128]));

var G__21129 = (i__12776__auto___21128 + (1));
i__12776__auto___21128 = G__21129;
continue;
} else {
}
break;
}

var G__21126 = args21124.length;
switch (G__21126) {
case 1:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21124.length)].join('')));

}
});

cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$1 = (function (number_or_hex_string){
return cljs_web3.core.to_big_number.call(null,Web3,number_or_hex_string);
});

cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$2 = (function (Web3,number_or_hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toBigNumber",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number_or_hex_string], null));
});

cljs_web3.core.to_big_number.cljs$lang$maxFixedArity = 2;

cljs_web3.core.pad_left = (function cljs_web3$core$pad_left(var_args){
var args21131 = [];
var len__12775__auto___21134 = arguments.length;
var i__12776__auto___21135 = (0);
while(true){
if((i__12776__auto___21135 < len__12775__auto___21134)){
args21131.push((arguments[i__12776__auto___21135]));

var G__21136 = (i__12776__auto___21135 + (1));
i__12776__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var G__21133 = args21131.length;
switch (G__21133) {
case 2:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21131.length)].join('')));

}
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (string,chars){
return cljs_web3.core.pad_left.call(null,string,chars,null);
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (string,chars,sign){
return cljs_web3.core.pad_left.call(null,Web3,string,chars,sign);
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$4 = (function (Web3,string,chars,sign){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"padLeft",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,chars,sign], null));
});

cljs_web3.core.pad_left.cljs$lang$maxFixedArity = 4;

cljs_web3.core.pad_right = (function cljs_web3$core$pad_right(var_args){
var args21138 = [];
var len__12775__auto___21141 = arguments.length;
var i__12776__auto___21142 = (0);
while(true){
if((i__12776__auto___21142 < len__12775__auto___21141)){
args21138.push((arguments[i__12776__auto___21142]));

var G__21143 = (i__12776__auto___21142 + (1));
i__12776__auto___21142 = G__21143;
continue;
} else {
}
break;
}

var G__21140 = args21138.length;
switch (G__21140) {
case 2:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21138.length)].join('')));

}
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (string,chars){
return cljs_web3.core.pad_right.call(null,string,chars,null);
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (string,chars,sign){
return cljs_web3.core.pad_right.call(null,Web3,string,chars,sign);
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$4 = (function (Web3,string,chars,sign){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"padRight",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,chars,sign], null));
});

cljs_web3.core.pad_right.cljs$lang$maxFixedArity = 4;

cljs_web3.core.address_QMARK_ = (function cljs_web3$core$address_QMARK_(var_args){
var args21145 = [];
var len__12775__auto___21148 = arguments.length;
var i__12776__auto___21149 = (0);
while(true){
if((i__12776__auto___21149 < len__12775__auto___21148)){
args21145.push((arguments[i__12776__auto___21149]));

var G__21150 = (i__12776__auto___21149 + (1));
i__12776__auto___21149 = G__21150;
continue;
} else {
}
break;
}

var G__21147 = args21145.length;
switch (G__21147) {
case 1:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21145.length)].join('')));

}
});

cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (address){
return cljs_web3.core.address_QMARK_.call(null,Web3,address);
});

cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (Web3,address){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"isAddress",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});

cljs_web3.core.address_QMARK_.cljs$lang$maxFixedArity = 2;

cljs_web3.core.reset = (function cljs_web3$core$reset(web3){
return cljs_web3.utils.js_apply.call(null,web3,"reset");
});
cljs_web3.core.set_provider = (function cljs_web3$core$set_provider(web3,provider){
return cljs_web3.utils.js_apply.call(null,web3,"setProvider",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [provider], null));
});
cljs_web3.core.current_provider = (function cljs_web3$core$current_provider(web3){
return (web3["currentProvider"]);
});
cljs_web3.core.http_provider = (function cljs_web3$core$http_provider(Web3,uri){
var constructor$ = (Web3["providers"]["HttpProvider"]);
return (new constructor$(uri));
});
cljs_web3.core.ipc_provider = (function cljs_web3$core$ipc_provider(Web3,uri){
var constructor$ = (Web3["providers"]["IpcProvider"]);
return (new constructor$(uri));
});
cljs_web3.core.create_web3 = (function cljs_web3$core$create_web3(var_args){
var args21152 = [];
var len__12775__auto___21155 = arguments.length;
var i__12776__auto___21156 = (0);
while(true){
if((i__12776__auto___21156 < len__12775__auto___21155)){
args21152.push((arguments[i__12776__auto___21156]));

var G__21157 = (i__12776__auto___21156 + (1));
i__12776__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var G__21154 = args21152.length;
switch (G__21154) {
case 1:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21152.length)].join('')));

}
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cljs_web3.core.create_web3.call(null,Web3,url);
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2 = (function (Web3,url){
return (new Web3(cljs_web3.core.http_provider.call(null,Web3,url)));
});

cljs_web3.core.create_web3.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map