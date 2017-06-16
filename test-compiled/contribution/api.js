// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.api');
goog.require('cljs.core');
goog.require('district0x.big_number');
goog.require('cljs_web3.core');
contribution.api.big_num__GT_ether = cljs.core.comp.call(null,district0x.big_number.__GT_number,(function (p1__15563_SHARP_){
return cljs_web3.core.from_wei.call(null,p1__15563_SHARP_,new cljs.core.Keyword(null,"ether","ether",-911152777));
}));
contribution.api.parse_get_contrib_period = (function contribution$api$parse_get_contrib_period(p__15564){
var vec__15574 = p__15564;
var bool_vals = cljs.core.nth.call(null,vec__15574,(0),null);
var uint_vals = cljs.core.nth.call(null,vec__15574,(1),null);
var vec__15577 = bool_vals;
var enabled_QMARK_ = cljs.core.nth.call(null,vec__15577,(0),null);
var cancelled_QMARK_ = cljs.core.nth.call(null,vec__15577,(1),null);
var soft_cap_reached_QMARK_ = cljs.core.nth.call(null,vec__15577,(2),null);
var hard_cap_reached_QMARK_ = cljs.core.nth.call(null,vec__15577,(3),null);
var vec__15580 = uint_vals;
var soft_cap_amount = cljs.core.nth.call(null,vec__15580,(0),null);
var after_soft_cap_duration = cljs.core.nth.call(null,vec__15580,(1),null);
var hard_cap_amount = cljs.core.nth.call(null,vec__15580,(2),null);
var start_time = cljs.core.nth.call(null,vec__15580,(3),null);
var end_time = cljs.core.nth.call(null,vec__15580,(4),null);
var total_contributed = cljs.core.nth.call(null,vec__15580,(5),null);
var contributors_count = cljs.core.nth.call(null,vec__15580,(6),null);
var contrib_period_stake = cljs.core.nth.call(null,vec__15580,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("contrib-period","contributors-count","contrib-period/contributors-count",1705370112),new cljs.core.Keyword("contrib-period","hard-cap-amount","contrib-period/hard-cap-amount",1654671072),new cljs.core.Keyword("contrib-period","cancelled?","contrib-period/cancelled?",-404228631),new cljs.core.Keyword("contrib-period","soft-cap-amount","contrib-period/soft-cap-amount",1087290602),new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754),new cljs.core.Keyword("contrib-period","soft-cap-reached?","contrib-period/soft-cap-reached?",1587863344),new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303),new cljs.core.Keyword("contrib-period","stake","contrib-period/stake",-1370585102),new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083),new cljs.core.Keyword("contrib-period","enabled?","contrib-period/enabled?",-703066538),new cljs.core.Keyword("contrib-period","after-soft-cap-duration","contrib-period/after-soft-cap-duration",-1142293670),new cljs.core.Keyword("contrib-period","hard-cap-reached?","contrib-period/hard-cap-reached?",-695663106)],[district0x.big_number.__GT_number.call(null,contributors_count),contribution.api.big_num__GT_ether.call(null,hard_cap_amount),cancelled_QMARK_,contribution.api.big_num__GT_ether.call(null,soft_cap_amount),contribution.api.big_num__GT_ether.call(null,total_contributed),soft_cap_reached_QMARK_,district0x.big_number.__GT_date_time.call(null,end_time),contribution.api.big_num__GT_ether.call(null,contrib_period_stake),district0x.big_number.__GT_date_time.call(null,start_time),enabled_QMARK_,district0x.big_number.__GT_number.call(null,after_soft_cap_duration),hard_cap_reached_QMARK_]);
});
contribution.api.contrib_period_args = (function contribution$api$contrib_period_args(contrib_period){
return cljs.core.juxt.call(null,new cljs.core.Keyword("contribution","period-index","contribution/period-index",-1877665997),new cljs.core.Keyword("contrib-period","soft-cap-amount","contrib-period/soft-cap-amount",1087290602),new cljs.core.Keyword("contrib-period","after-soft-cap-duration","contrib-period/after-soft-cap-duration",-1142293670),new cljs.core.Keyword("contrib-period","hard-cap-amount","contrib-period/hard-cap-amount",1654671072),new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083),new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303)).call(null,contrib_period);
});
contribution.api.parse_get_configuration = (function contribution$api$parse_get_configuration(p__15583){
var vec__15587 = p__15583;
var stopped_QMARK_ = cljs.core.nth.call(null,vec__15587,(0),null);
var required_count = cljs.core.nth.call(null,vec__15587,(1),null);
var wallet = cljs.core.nth.call(null,vec__15587,(2),null);
var founder1 = cljs.core.nth.call(null,vec__15587,(3),null);
var founder2 = cljs.core.nth.call(null,vec__15587,(4),null);
var early_sponsor = cljs.core.nth.call(null,vec__15587,(5),null);
var advisers = cljs.core.nth.call(null,vec__15587,(6),null);
var transfers_enabled_QMARK_ = cljs.core.nth.call(null,vec__15587,(7),null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("contribution","stopped?","contribution/stopped?",-912616402),stopped_QMARK_,new cljs.core.Keyword("contribution","required-count","contribution/required-count",704684007),district0x.big_number.__GT_number.call(null,required_count),new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613),wallet,new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779),founder1,new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069),founder2,new cljs.core.Keyword("contribution","early-sponsor","contribution/early-sponsor",-611101281),early_sponsor,new cljs.core.Keyword("contribution","advisers","contribution/advisers",-710646550),advisers,new cljs.core.Keyword("dnt-token","transfers-enabled?","dnt-token/transfers-enabled?",1221151406),transfers_enabled_QMARK_], null);
});

//# sourceMappingURL=api.js.map