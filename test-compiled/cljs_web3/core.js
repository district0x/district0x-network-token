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
var args24485 = [];
var len__12775__auto___24488 = arguments.length;
var i__12776__auto___24489 = (0);
while(true){
if((i__12776__auto___24489 < len__12775__auto___24488)){
args24485.push((arguments[i__12776__auto___24489]));

var G__24490 = (i__12776__auto___24489 + (1));
i__12776__auto___24489 = G__24490;
continue;
} else {
}
break;
}

var G__24487 = args24485.length;
switch (G__24487) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24485.length)].join('')));

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
var args24492 = [];
var len__12775__auto___24495 = arguments.length;
var i__12776__auto___24496 = (0);
while(true){
if((i__12776__auto___24496 < len__12775__auto___24495)){
args24492.push((arguments[i__12776__auto___24496]));

var G__24497 = (i__12776__auto___24496 + (1));
i__12776__auto___24496 = G__24497;
continue;
} else {
}
break;
}

var G__24494 = args24492.length;
switch (G__24494) {
case 1:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24492.length)].join('')));

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
var args24499 = [];
var len__12775__auto___24502 = arguments.length;
var i__12776__auto___24503 = (0);
while(true){
if((i__12776__auto___24503 < len__12775__auto___24502)){
args24499.push((arguments[i__12776__auto___24503]));

var G__24504 = (i__12776__auto___24503 + (1));
i__12776__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24501 = args24499.length;
switch (G__24501) {
case 1:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24499.length)].join('')));

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
var args24506 = [];
var len__12775__auto___24509 = arguments.length;
var i__12776__auto___24510 = (0);
while(true){
if((i__12776__auto___24510 < len__12775__auto___24509)){
args24506.push((arguments[i__12776__auto___24510]));

var G__24511 = (i__12776__auto___24510 + (1));
i__12776__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var G__24508 = args24506.length;
switch (G__24508) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24506.length)].join('')));

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
var args24513 = [];
var len__12775__auto___24516 = arguments.length;
var i__12776__auto___24517 = (0);
while(true){
if((i__12776__auto___24517 < len__12775__auto___24516)){
args24513.push((arguments[i__12776__auto___24517]));

var G__24518 = (i__12776__auto___24517 + (1));
i__12776__auto___24517 = G__24518;
continue;
} else {
}
break;
}

var G__24515 = args24513.length;
switch (G__24515) {
case 1:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24513.length)].join('')));

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
var args24520 = [];
var len__12775__auto___24523 = arguments.length;
var i__12776__auto___24524 = (0);
while(true){
if((i__12776__auto___24524 < len__12775__auto___24523)){
args24520.push((arguments[i__12776__auto___24524]));

var G__24525 = (i__12776__auto___24524 + (1));
i__12776__auto___24524 = G__24525;
continue;
} else {
}
break;
}

var G__24522 = args24520.length;
switch (G__24522) {
case 1:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24520.length)].join('')));

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
var args24527 = [];
var len__12775__auto___24530 = arguments.length;
var i__12776__auto___24531 = (0);
while(true){
if((i__12776__auto___24531 < len__12775__auto___24530)){
args24527.push((arguments[i__12776__auto___24531]));

var G__24532 = (i__12776__auto___24531 + (1));
i__12776__auto___24531 = G__24532;
continue;
} else {
}
break;
}

var G__24529 = args24527.length;
switch (G__24529) {
case 2:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24527.length)].join('')));

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
var args24534 = [];
var len__12775__auto___24537 = arguments.length;
var i__12776__auto___24538 = (0);
while(true){
if((i__12776__auto___24538 < len__12775__auto___24537)){
args24534.push((arguments[i__12776__auto___24538]));

var G__24539 = (i__12776__auto___24538 + (1));
i__12776__auto___24538 = G__24539;
continue;
} else {
}
break;
}

var G__24536 = args24534.length;
switch (G__24536) {
case 2:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24534.length)].join('')));

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
var args24541 = [];
var len__12775__auto___24544 = arguments.length;
var i__12776__auto___24545 = (0);
while(true){
if((i__12776__auto___24545 < len__12775__auto___24544)){
args24541.push((arguments[i__12776__auto___24545]));

var G__24546 = (i__12776__auto___24545 + (1));
i__12776__auto___24545 = G__24546;
continue;
} else {
}
break;
}

var G__24543 = args24541.length;
switch (G__24543) {
case 1:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24541.length)].join('')));

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
var args24548 = [];
var len__12775__auto___24551 = arguments.length;
var i__12776__auto___24552 = (0);
while(true){
if((i__12776__auto___24552 < len__12775__auto___24551)){
args24548.push((arguments[i__12776__auto___24552]));

var G__24553 = (i__12776__auto___24552 + (1));
i__12776__auto___24552 = G__24553;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

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
var args24555 = [];
var len__12775__auto___24558 = arguments.length;
var i__12776__auto___24559 = (0);
while(true){
if((i__12776__auto___24559 < len__12775__auto___24558)){
args24555.push((arguments[i__12776__auto___24559]));

var G__24560 = (i__12776__auto___24559 + (1));
i__12776__auto___24559 = G__24560;
continue;
} else {
}
break;
}

var G__24557 = args24555.length;
switch (G__24557) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24555.length)].join('')));

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
var args24562 = [];
var len__12775__auto___24565 = arguments.length;
var i__12776__auto___24566 = (0);
while(true){
if((i__12776__auto___24566 < len__12775__auto___24565)){
args24562.push((arguments[i__12776__auto___24566]));

var G__24567 = (i__12776__auto___24566 + (1));
i__12776__auto___24566 = G__24567;
continue;
} else {
}
break;
}

var G__24564 = args24562.length;
switch (G__24564) {
case 1:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24562.length)].join('')));

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
var args24569 = [];
var len__12775__auto___24572 = arguments.length;
var i__12776__auto___24573 = (0);
while(true){
if((i__12776__auto___24573 < len__12775__auto___24572)){
args24569.push((arguments[i__12776__auto___24573]));

var G__24574 = (i__12776__auto___24573 + (1));
i__12776__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var G__24571 = args24569.length;
switch (G__24571) {
case 1:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24569.length)].join('')));

}
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cljs_web3.core.create_web3.call(null,Web3,url);
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2 = (function (Web3,url){
return (new Web3(cljs_web3.core.http_provider.call(null,Web3,url)));
});

cljs_web3.core.create_web3.cljs$lang$maxFixedArity = 2;

