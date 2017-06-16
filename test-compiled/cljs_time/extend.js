// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('cljs_time.extend');
goog.require('cljs.core');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.date.Date.prototype.cljs$core$IEquiv$ = true;

goog.date.Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof goog.date.Date)) && ((o__$1.getTime() === other.getTime())) && ((o__$1.getTimezoneOffset() === other.getTimezoneOffset()));
});

goog.date.Date.prototype.cljs$core$IComparable$ = true;

goog.date.Date.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return (o__$1.getTime() - other.getTime());
});
goog.date.DateTime.prototype.cljs$core$IEquiv$ = true;

goog.date.DateTime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof goog.date.Date)) && ((o__$1.getTime() === other.getTime())) && ((o__$1.getTimezoneOffset() === other.getTimezoneOffset()));
});

goog.date.DateTime.prototype.cljs$core$IComparable$ = true;

goog.date.DateTime.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return (o__$1.getTime() - other.getTime());
});
goog.date.UtcDateTime.prototype.cljs$core$IEquiv$ = true;

goog.date.UtcDateTime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof goog.date.Date)) && ((o__$1.getTime() === other.getTime())) && ((o__$1.getTimezoneOffset() === other.getTimezoneOffset()));
});

goog.date.UtcDateTime.prototype.cljs$core$IComparable$ = true;

goog.date.UtcDateTime.prototype.cljs$core$IComparable$_compare$arity$2 = (function (o,other){
var o__$1 = this;
return (o__$1.getTime() - other.getTime());
});

//# sourceMappingURL=extend.js.map