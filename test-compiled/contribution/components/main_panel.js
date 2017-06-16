// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.components.main_panel');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('contribution.constants');
goog.require('district0x.utils');
goog.require('district0x.components.misc');
goog.require('reagent.core');
goog.require('contribution.styles');
goog.require('medley.core');
goog.require('district0x.components.active_address_select_field');
goog.require('district0x.components.utils');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.core');
goog.require('re_frame.core');
contribution.components.main_panel.paper = district0x.components.utils.create_with_default_props.call(null,district0x.components.misc.paper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.paper], null));
contribution.components.main_panel.contracts_not_found_page = (function contribution$components$main_panel$contracts_not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.center_layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.paper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),"xs",new cljs.core.Keyword(null,"middle","middle",-701029031),"xs",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"We couldn't find district0x Contribution smart contracts.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Your MetaMask Chrome extension is most likely not pointed to Ethereum Mainnet, please check."], null)], null)], null)], null);
});
contribution.components.main_panel.app_bar_right_elements = (function contribution$components$main_panel$app_bar_right_elements(){
var active_address_balance_eth = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","active-address-balance","district0x/active-address-balance",658715129),new cljs.core.Keyword(null,"eth","eth",1381694970)], null));
var active_address_balance_dnt = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","active-address-balance","district0x/active-address-balance",658715129),new cljs.core.Keyword(null,"dnt","dnt",2065197951)], null));
var connection_error_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error?","district0x/blockchain-connection-error?",1624111314)], null));
var my_addresses = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","my-addresses","district0x/my-addresses",1741284138)], null));
var contracts_not_found_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","contracts-not-found?","district0x/contracts-not-found?",210394191)], null));
return ((function (active_address_balance_eth,active_address_balance_dnt,connection_error_QMARK_,my_addresses,contracts_not_found_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,connection_error_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middle","middle",-701029031),"xs",new cljs.core.Keyword(null,"end","end",-268185958),"xs"], null),(cljs.core.truth_((function (){var and__11688__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,my_addresses));
if(and__11688__auto__){
return cljs.core.deref.call(null,active_address_balance_dnt);
} else {
return and__11688__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.bolder","h2.bolder",-112654481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.app_bar_balance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null))], null),district0x.utils.format_dnt_with_symbol.call(null,cljs.core.deref.call(null,active_address_balance_dnt))], null):null),(cljs.core.truth_((function (){var and__11688__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,my_addresses));
if(and__11688__auto__){
return cljs.core.deref.call(null,active_address_balance_eth);
} else {
return and__11688__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.bolder","h2.bolder",-112654481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.app_bar_balance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null))], null),district0x.utils.format_eth_with_symbol.call(null,cljs.core.deref.call(null,active_address_balance_eth))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.active_address_select_field.active_address_select_field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select-field-props","select-field-props",-1518361213),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.active_address_select_field,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),contribution.styles.active_address_select_field_label,new cljs.core.Keyword(null,"underline-style","underline-style",55487069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),contribution.styles.theme_blue], null)], null),new cljs.core.Keyword(null,"single-address-props","single-address-props",1806318978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.active_address_single], null)], null)], null)], null);
}
});
;})(active_address_balance_eth,active_address_balance_dnt,connection_error_QMARK_,my_addresses,contracts_not_found_QMARK_))
});
contribution.components.main_panel.info_line = (function contribution$components$main_panel$info_line(var_args){
var args__12782__auto__ = [];
var len__12775__auto___36304 = arguments.length;
var i__12776__auto___36305 = (0);
while(true){
if((i__12776__auto___36305 < len__12775__auto___36304)){
args__12782__auto__.push((arguments[i__12776__auto___36305]));

var G__36306 = (i__12776__auto___36305 + (1));
i__12776__auto___36305 = G__36306;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((1) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((1)),(0),null)):null);
return contribution.components.main_panel.info_line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12783__auto__);
});

contribution.components.main_panel.info_line.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var vec__36301 = district0x.components.utils.parse_props_children.call(null,props,children);
var props__$1 = cljs.core.nth.call(null,vec__36301,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__36301,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),props__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),contribution.styles.theme_cyan], null)], null),cljs.core.first.call(null,children__$1)], null)," ",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.rest.call(null,children__$1))], null);
});

contribution.components.main_panel.info_line.cljs$lang$maxFixedArity = (1);

contribution.components.main_panel.info_line.cljs$lang$applyTo = (function (seq36299){
var G__36300 = cljs.core.first.call(null,seq36299);
var seq36299__$1 = cljs.core.next.call(null,seq36299);
return contribution.components.main_panel.info_line.cljs$core$IFn$_invoke$arity$variadic(G__36300,seq36299__$1);
});

contribution.components.main_panel.admin_panel = (function contribution$components$main_panel$admin_panel(){
var active_address_owner_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","active-address-owner?","db/active-address-owner?",42008335)], null));
var active_address_founder_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","active-address-founder?","db/active-address-founder?",976692115)], null));
var current_contrib_period = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187)], null));
var enable_contrib_form = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.contribution","enable-contrib-period","form.contribution/enable-contrib-period",1276086133)], null));
var contrib_config = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","configuration","contribution/configuration",-2091662648)], null));
var contrib_period_status = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period-status","contribution/current-contrib-period-status",-1891703700)], null));
var contrib_contract_dnt_balance = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","dnt-balance","contribution/dnt-balance",1513778359)], null));
return ((function (active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance){
return (function (){
var map__36329 = cljs.core.deref.call(null,current_contrib_period);
var map__36329__$1 = ((((!((map__36329 == null)))?((((map__36329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36329):map__36329);
var contributors_count = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","contributors-count","contrib-period/contributors-count",1705370112));
var hard_cap_amount = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","hard-cap-amount","contrib-period/hard-cap-amount",1654671072));
var soft_cap_amount = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","soft-cap-amount","contrib-period/soft-cap-amount",1087290602));
var total_contributed = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754));
var soft_cap_reached_QMARK_ = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","soft-cap-reached?","contrib-period/soft-cap-reached?",1587863344));
var end_time = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303));
var stake = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","stake","contrib-period/stake",-1370585102));
var start_time = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083));
var enabled_QMARK_ = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","enabled?","contrib-period/enabled?",-703066538));
var after_soft_cap_duration = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","after-soft-cap-duration","contrib-period/after-soft-cap-duration",-1142293670));
var hard_cap_reached_QMARK_ = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword("contrib-period","hard-cap-reached?","contrib-period/hard-cap-reached?",-695663106));
var map__36330 = cljs.core.deref.call(null,enable_contrib_form);
var map__36330__$1 = ((((!((map__36330 == null)))?((((map__36330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36330):map__36330);
var loading_QMARK_ = cljs.core.get.call(null,map__36330__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var map__36331 = cljs.core.deref.call(null,contrib_config);
var map__36331__$1 = ((((!((map__36331 == null)))?((((map__36331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36331):map__36331);
var stopped_QMARK_ = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","stopped?","contribution/stopped?",-912616402));
var founder1 = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","founder1","contribution/founder1",848926779));
var founder2 = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","founder2","contribution/founder2",-245260069));
var early_sponsor = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","early-sponsor","contribution/early-sponsor",-611101281));
var wallet = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","wallet","contribution/wallet",75766613));
var advisers = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("contribution","advisers","contribution/advisers",-710646550));
var contribution_address = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"contribution-address","contribution-address",-483759603));
var dnt_token_address = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"dnt-token-address","dnt-token-address",39639804));
var transfers_enabled_QMARK_ = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword("dnt-token","transfers-enabled?","dnt-token/transfers-enabled?",1221151406));
if(cljs.core.truth_(cljs.core.deref.call(null,active_address_owner_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.paper,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row_with_cols,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.margin_bottom_gutter,contribution.styles.text_center)], null),"Admin Panel"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.margin_bottom_gutter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Contribution Contract:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),contribution_address], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"DNT Token Contract:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),dnt_token_address], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Founder 1:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),founder1], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Founder 2:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),founder2], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Early Sponsor:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),early_sponsor], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Wallet:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),wallet], null)], null)], null),(function (){var iter__12480__auto__ = ((function (map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance){
return (function contribution$components$main_panel$admin_panel_$_iter__36335(s__36336){
return (new cljs.core.LazySeq(null,((function (map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance){
return (function (){
var s__36336__$1 = s__36336;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36336__$1);
if(temp__4657__auto__){
var s__36336__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36336__$2)){
var c__12478__auto__ = cljs.core.chunk_first.call(null,s__36336__$2);
var size__12479__auto__ = cljs.core.count.call(null,c__12478__auto__);
var b__36338 = cljs.core.chunk_buffer.call(null,size__12479__auto__);
if((function (){var i__36337 = (0);
while(true){
if((i__36337 < size__12479__auto__)){
var vec__36345 = cljs.core._nth.call(null,c__12478__auto__,i__36337);
var i = cljs.core.nth.call(null,vec__36345,(0),null);
var adviser = cljs.core.nth.call(null,vec__36345,(1),null);
cljs.core.chunk_append.call(null,b__36338,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adviser], null),[cljs.core.str("Adviser "),cljs.core.str((i + (1))),cljs.core.str(":")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),adviser], null)], null)], null));

var G__36351 = (i__36337 + (1));
i__36337 = G__36351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36338),contribution$components$main_panel$admin_panel_$_iter__36335.call(null,cljs.core.chunk_rest.call(null,s__36336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36338),null);
}
} else {
var vec__36348 = cljs.core.first.call(null,s__36336__$2);
var i = cljs.core.nth.call(null,vec__36348,(0),null);
var adviser = cljs.core.nth.call(null,vec__36348,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adviser], null),[cljs.core.str("Adviser "),cljs.core.str((i + (1))),cljs.core.str(":")].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.etherscan_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),adviser], null)], null)], null),contribution$components$main_panel$admin_panel_$_iter__36335.call(null,cljs.core.rest.call(null,s__36336__$2)));
}
} else {
return null;
}
break;
}
});})(map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance))
,null,null));
});})(map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance))
;
return iter__12480__auto__.call(null,medley.core.indexed.call(null,advisers));
})()], null),(cljs.core.truth_(total_contributed)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Contribution Round:",(contribution.constants.current_contrib_period + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Start Time:",district0x.utils.format_local_datetime.call(null,start_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"End Time:",district0x.utils.format_local_datetime.call(null,end_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Soft Cap:",district0x.utils.format_eth_with_symbol.call(null,soft_cap_amount)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"After Soft Cap Duration:",cljs_time.core.in_hours.call(null,cljs_time.core.millis.call(null,after_soft_cap_duration))," hours"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Hard Cap:",district0x.utils.format_eth_with_symbol.call(null,hard_cap_amount)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Enabled?",district0x.utils.bool__GT_yes_BAR_no.call(null,enabled_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Token Distribution:",district0x.utils.format_dnt_with_symbol.call(null,stake)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Soft Cap Reached?",district0x.utils.bool__GT_yes_BAR_no.call(null,soft_cap_reached_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Hard Cap Reached?",district0x.utils.bool__GT_yes_BAR_no.call(null,hard_cap_reached_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Total Contributed:",district0x.utils.format_eth_with_symbol.call(null,total_contributed)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Contributors Count:",contributors_count], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Emergency stop?",district0x.utils.bool__GT_yes_BAR_no.call(null,stopped_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"Contribution Contract DNT Balance:",district0x.utils.format_dnt_with_symbol.call(null,cljs.core.deref.call(null,contrib_contract_dnt_balance))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.info_line,"DNT Transfers Enabled?",district0x.utils.bool__GT_yes_BAR_no.call(null,transfers_enabled_QMARK_)], null)], null):null),(((cljs.core.not.call(null,enabled_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.deref.call(null,contrib_period_status),new cljs.core.Keyword("contrib-period-status","not-started","contrib-period-status/not-started",-519893104))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.text_right], null),((cljs.core.not.call(null,loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"label","label",1718410804),"Enable",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.margin_top_gutter_less,new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","enable-contrib-period","contribution/enable-contrib-period",1198295135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contribution","period-index","contribution/period-index",-1877665997),contribution.constants.current_contrib_period], null)], null));
});})(map__36329,map__36329__$1,contributors_count,hard_cap_amount,soft_cap_amount,total_contributed,soft_cap_reached_QMARK_,end_time,stake,start_time,enabled_QMARK_,after_soft_cap_duration,hard_cap_reached_QMARK_,map__36330,map__36330__$1,loading_QMARK_,map__36331,map__36331__$1,stopped_QMARK_,founder1,founder2,early_sponsor,wallet,advisers,contribution_address,dnt_token_address,transfers_enabled_QMARK_,active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"thickness","thickness",-940175454),(3)], null)], null))], null):null)], null)], null);
} else {
return null;
}
});
;})(active_address_owner_QMARK_,active_address_founder_QMARK_,current_contrib_period,enable_contrib_form,contrib_config,contrib_period_status,contrib_contract_dnt_balance))
});
contribution.components.main_panel.contribution_tile = (function contribution$components$main_panel$contribution_tile(){
var xs_sm_width_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","window-xs-sm-width?","district0x/window-xs-sm-width?",606649051)], null));
return ((function (xs_sm_width_QMARK_){
return (function() { 
var G__36358__delegate = function (p__36355,children){
var map__36356 = p__36355;
var map__36356__$1 = ((((!((map__36356 == null)))?((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36356):map__36356);
var title = cljs.core.get.call(null,map__36356__$1,new cljs.core.Keyword(null,"title","title",636505583));
var index = cljs.core.get.call(null,map__36356__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"md","md",707286655),(4),new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.stats_tile_title,(cljs.core.truth_(cljs.core.deref.call(null,xs_sm_width_QMARK_))?cljs.core.merge.call(null,contribution.styles.margin_top_gutter_less,contribution.styles.stats_tile_border_bottom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)):contribution.styles.stats_tile_border_bottom))], null),title], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"middle","middle",-701029031),"xs",new cljs.core.Keyword(null,"center","center",-748944368),"xs",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.stats_tile,((cljs.core._EQ_.call(null,index,(2)))?null:(cljs.core.truth_(cljs.core.deref.call(null,xs_sm_width_QMARK_))?contribution.styles.stats_tile_border_bottom:contribution.styles.stats_tile_border_right)))], null)], null),children)], null);
};
var G__36358 = function (p__36355,var_args){
var children = null;
if (arguments.length > 1) {
var G__36359__i = 0, G__36359__a = new Array(arguments.length -  1);
while (G__36359__i < G__36359__a.length) {G__36359__a[G__36359__i] = arguments[G__36359__i + 1]; ++G__36359__i;}
  children = new cljs.core.IndexedSeq(G__36359__a,0);
} 
return G__36358__delegate.call(this,p__36355,children);};
G__36358.cljs$lang$maxFixedArity = 1;
G__36358.cljs$lang$applyTo = (function (arglist__36360){
var p__36355 = cljs.core.first(arglist__36360);
var children = cljs.core.rest(arglist__36360);
return G__36358__delegate(p__36355,children);
});
G__36358.cljs$core$IFn$_invoke$arity$variadic = G__36358__delegate;
return G__36358;
})()
;
;})(xs_sm_width_QMARK_))
});
contribution.components.main_panel.contrib_period_status__GT_countdown_title = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("contrib-period-status","not-started","contrib-period-status/not-started",-519893104),"Starts in",new cljs.core.Keyword("contrib-period-status","running","contrib-period-status/running",-83361607),"Ends in",new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548),"Ended"], null);
contribution.components.main_panel.unit__GT_name = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),"day",new cljs.core.Keyword(null,"hours","hours",58380855),"hour",new cljs.core.Keyword(null,"minutes","minutes",1319166394),"minute",new cljs.core.Keyword(null,"seconds","seconds",-445266194),"second"], null);
contribution.components.main_panel.countdown_time_item = (function contribution$components$main_panel$countdown_time_item(p__36361){
var map__36364 = p__36361;
var map__36364__$1 = ((((!((map__36364 == null)))?((((map__36364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36364):map__36364);
var unit = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.call(null,map__36364__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.contrib_countdown_value,contribution.styles.text_left)], null),(((value < (10)))?[cljs.core.str((0)),cljs.core.str(value)].join(''):value)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.contrib_countdown_unit], null)," ",district0x.utils.pluralize.call(null,contribution.components.main_panel.unit__GT_name.call(null,unit),value)], null)], null);
});
contribution.components.main_panel.countdown = (function contribution$components$main_panel$countdown(){
return (function (p__36371){
var map__36372 = p__36371;
var map__36372__$1 = ((((!((map__36372 == null)))?((((map__36372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36372):map__36372);
var from_time = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"from-time","from-time",-533256503));
var to_time = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"to-time","to-time",-276247292));
if(cljs.core.truth_((function (){var and__11688__auto__ = from_time;
if(cljs.core.truth_(and__11688__auto__)){
return to_time;
} else {
return and__11688__auto__;
}
})())){
var map__36374 = district0x.utils.time_remaining.call(null,from_time,to_time);
var map__36374__$1 = ((((!((map__36374 == null)))?((((map__36374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36374):map__36374);
var days = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__36374__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.no_wrap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown_time_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),days,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"days","days",-1394072564)], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown_time_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),hours,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"hours","hours",58380855)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.no_wrap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown_time_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),minutes,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown_time_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),seconds,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),district0x.utils.format_local_datetime.call(null,to_time)], null)], null);
} else {
return null;
}
});
});
contribution.components.main_panel.contribution_stats_tiles = (function contribution$components$main_panel$contribution_stats_tiles(){
var xs_width_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","window-xs-width?","district0x/window-xs-width?",14187919)], null));
var current_contrib_period = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187)], null));
var contrib_period_status = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period-status","contribution/current-contrib-period-status",-1891703700)], null));
var now = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","now","db/now",-1650520537)], null));
return ((function (xs_width_QMARK_,current_contrib_period,contrib_period_status,now){
return (function (){
var map__36381 = cljs.core.deref.call(null,current_contrib_period);
var map__36381__$1 = ((((!((map__36381 == null)))?((((map__36381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36381):map__36381);
var loading_QMARK_ = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","loading?","contrib-period/loading?",1769340230));
var start_time = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","start-time","contrib-period/start-time",946868083));
var end_time = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","end-time","contrib-period/end-time",-1445080303));
var total_contributed = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754));
var stake = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","stake","contrib-period/stake",-1370585102));
var contributors_count = cljs.core.get.call(null,map__36381__$1,new cljs.core.Keyword("contrib-period","contributors-count","contrib-period/contributors-count",1705370112));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row_with_cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center","center",-748944368),"xs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.margin_bottom_gutter_more,contribution.styles.text_center)], null),"Contribution Period ",contribution.constants.contrib_period__GT_name.call(null,contribution.constants.current_contrib_period)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_tile,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),contribution.components.main_panel.contrib_period_status__GT_countdown_title.call(null,cljs.core.deref.call(null,contrib_period_status)),new cljs.core.Keyword(null,"index","index",-1531685915),(0)], null),(cljs.core.truth_((function (){var and__11688__auto__ = start_time;
if(cljs.core.truth_(and__11688__auto__)){
return end_time;
} else {
return and__11688__auto__;
}
})())?(function (){var pred__36383 = cljs.core._EQ_;
var expr__36384 = cljs.core.deref.call(null,contrib_period_status);
if(cljs.core.truth_(pred__36383.call(null,new cljs.core.Keyword("contrib-period-status","not-started","contrib-period-status/not-started",-519893104),expr__36384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from-time","from-time",-533256503),cljs.core.deref.call(null,now),new cljs.core.Keyword(null,"to-time","to-time",-276247292),start_time], null)], null);
} else {
if(cljs.core.truth_(pred__36383.call(null,new cljs.core.Keyword("contrib-period-status","running","contrib-period-status/running",-83361607),expr__36384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.countdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from-time","from-time",-533256503),cljs.core.deref.call(null,now),new cljs.core.Keyword(null,"to-time","to-time",-276247292),end_time], null)], null);
} else {
if(cljs.core.truth_(pred__36383.call(null,new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548),expr__36384))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),district0x.utils.format_local_date.call(null,end_time)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36384)].join('')));
}
}
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_tile,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Raised",new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null),(cljs.core.truth_(total_contributed)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middle","middle",-701029031),"xs",new cljs.core.Keyword(null,"center","center",-748944368),"xs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.stats_tile_amount], null),district0x.utils.format_metric.call(null,total_contributed)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em"], null)], null)," ETH"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.stats_tile_amount_subtitle], null),contributors_count,district0x.utils.pluralize.call(null," participant",contributors_count)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_tile,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Token Distribution",new cljs.core.Keyword(null,"index","index",-1531685915),(2)], null),(cljs.core.truth_(stake)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.stats_tile_amount], null),(stake / (1000000))," Mil"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.stats_tile_amount_subtitle], null),"DNT tokens"], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress], null))], null)], null);
});
;})(xs_width_QMARK_,current_contrib_period,contrib_period_status,now))
});
contribution.components.main_panel.contribution_soft_cap_progress = (function contribution$components$main_panel$contribution_soft_cap_progress(){
var current_contrib_period = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187)], null));
return ((function (current_contrib_period){
return (function (){
var map__36388 = cljs.core.deref.call(null,current_contrib_period);
var map__36388__$1 = ((((!((map__36388 == null)))?((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36388):map__36388);
var total_contributed = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword("contrib-period","total-contributed","contrib-period/total-contributed",-1212088754));
var soft_cap_amount = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword("contrib-period","soft-cap-amount","contrib-period/soft-cap-amount",1087290602));
var after_soft_cap_duration = cljs.core.get.call(null,map__36388__$1,new cljs.core.Keyword("contrib-period","after-soft-cap-duration","contrib-period/after-soft-cap-duration",-1142293670));
if(cljs.core.truth_((function (){var and__11688__auto__ = total_contributed;
if(cljs.core.truth_(and__11688__auto__)){
var and__11688__auto____$1 = soft_cap_amount;
if(cljs.core.truth_(and__11688__auto____$1)){
return after_soft_cap_duration;
} else {
return and__11688__auto____$1;
}
} else {
return and__11688__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),"xs",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.margin_top_gutter_more], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.linear_progress,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),"determinate",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.soft_cap_progress,new cljs.core.Keyword(null,"color","color",1011675173),contribution.styles.theme_orange,new cljs.core.Keyword(null,"max","max",61366548),(function (){var or__11700__auto__ = soft_cap_amount;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (6000000);
}
})(),new cljs.core.Keyword(null,"value","value",305978217),total_contributed], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.full_width], null),"Soft Cap ",parseInt(total_contributed),"/",(function (){var or__11700__auto__ = soft_cap_amount;
if(cljs.core.truth_(or__11700__auto__)){
return or__11700__auto__;
} else {
return (0);
}
})()," ETH"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,contribution.styles.fade_white_text)], null),"After soft cap is reached, the contribution period will be closed in ",cljs_time.core.in_hours.call(null,cljs_time.core.seconds.call(null,after_soft_cap_duration))," hours"], null)], null);
} else {
return null;
}
});
;})(current_contrib_period))
});
contribution.components.main_panel.external_link = (function contribution$components$main_panel$external_link(body,href){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"_blank","_blank",1070304072),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),contribution.styles.theme_green], null)], null),body], null);
});
contribution.components.main_panel.contribution_contribute_section = (function contribution$components$main_panel$contribution_contribute_section(){
var contribution_address = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contribution-contract-address","contribution-contract-address",-281271207)], null));
var contribute_form = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form.contribution","contribute","form.contribution/contribute",-966625464)], null));
var can_use_form_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","can-submit-into-blockchain?","district0x/can-submit-into-blockchain?",801808027)], null));
var contrib_period_status = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period-status","contribution/current-contrib-period-status",-1891703700)], null));
var current_contrib_period = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","current-contrib-period","contribution/current-contrib-period",26048187)], null));
var contrib_config = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","configuration","contribution/configuration",-2091662648)], null));
return ((function (contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config){
return (function (){
var map__36400 = cljs.core.deref.call(null,current_contrib_period);
var map__36400__$1 = ((((!((map__36400 == null)))?((((map__36400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36400):map__36400);
var stake = cljs.core.get.call(null,map__36400__$1,new cljs.core.Keyword("contrib-period","stake","contrib-period/stake",-1370585102));
var enabled_QMARK_ = cljs.core.get.call(null,map__36400__$1,new cljs.core.Keyword("contrib-period","enabled?","contrib-period/enabled?",-703066538));
var map__36401 = cljs.core.deref.call(null,contribute_form);
var map__36401__$1 = ((((!((map__36401 == null)))?((((map__36401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36401):map__36401);
var data = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var loading_QMARK_ = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var map__36402 = data;
var map__36402__$1 = ((((!((map__36402 == null)))?((((map__36402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36402):map__36402);
var amount = cljs.core.get.call(null,map__36402__$1,new cljs.core.Keyword("contribution","amount","contribution/amount",-1003108592));
var map__36403 = cljs.core.deref.call(null,contrib_config);
var map__36403__$1 = ((((!((map__36403 == null)))?((((map__36403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36403):map__36403);
var stopped_QMARK_ = cljs.core.get.call(null,map__36403__$1,new cljs.core.Keyword("contribution","stopped?","contribution/stopped?",-912616402));
var error_text = ((cljs.core.not.call(null,district0x.utils.non_neg_ether_value_QMARK_.call(null,amount)))?"This is not valid Ether value":(((district0x.utils.parse_float.call(null,amount) < contribution.constants.min_contrib_amount))?[cljs.core.str("Minimum contribution amount is "),cljs.core.str(contribution.constants.min_contrib_amount),cljs.core.str(" ETH")].join(''):null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),"xs",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.margin_top_gutter_more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,contribution.styles.margin_bottom_gutter_less)], null),"How to Contribute"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.full_width], null),"You can send Ether directly to contribution smart contract"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),contribution.styles.theme_green], null))], null),(cljs.core.truth_(enabled_QMARK_)?cljs.core.deref.call(null,contribution_address):"(Contract address will be published soon)")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),contribution.styles.theme_orange,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em"], null))], null),(cljs.core.truth_(enabled_QMARK_)?(cljs.core.truth_(stopped_QMARK_)?"(Contribution was temporarily paused due to emergency)":new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("contrib-period-status","not-started","contrib-period-status/not-started",-519893104),"(Contribution period has not started yet)",new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548),"(Contribution period has been finished)"], null).call(null,cljs.core.deref.call(null,contrib_period_status))):null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,contribution.styles.margin_top_gutter_less)], null),"or you can use following form by using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.external_link,"MetaMask","https://metamask.io/"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.external_link,"Mist","https://github.com/ethereum/mist"], null),", or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.external_link,"Parity","https://parity.io/"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.row,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.full_width,new cljs.core.Keyword(null,"middle","middle",-701029031),"xs",new cljs.core.Keyword(null,"center","center",-748944368),"xs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.text_field,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"floating-label-fixed","floating-label-fixed",1883528037),true,new cljs.core.Keyword(null,"floating-label-text","floating-label-text",740415797),"Amount in Ether",new cljs.core.Keyword(null,"default-value","default-value",232220170),amount,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),contribution.styles.desktop_gutter_mini,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),contribution.styles.desktop_gutter_mini], null),new cljs.core.Keyword(null,"error-text","error-text",2021893718),error_text,new cljs.core.Keyword(null,"error-style","error-style",1259113567),contribution.styles.text_left,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__11700__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548),cljs.core.deref.call(null,contrib_period_status));
if(or__11700__auto__){
return or__11700__auto__;
} else {
var or__11700__auto____$1 = cljs.core.not.call(null,enabled_QMARK_);
if(or__11700__auto____$1){
return or__11700__auto____$1;
} else {
return stopped_QMARK_;
}
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__36400,map__36400__$1,stake,enabled_QMARK_,map__36401,map__36401__$1,data,loading_QMARK_,map__36402,map__36402__$1,amount,map__36403,map__36403__$1,stopped_QMARK_,error_text,contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config){
return (function (p1__36391_SHARP_,p2__36390_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","set-value","form/set-value",448367892),new cljs.core.Keyword("form.contribution","contribute","form.contribution/contribute",-966625464),new cljs.core.Keyword("contribution","amount","contribution/amount",-1003108592),p2__36390_SHARP_], null));
});})(map__36400,map__36400__$1,stake,enabled_QMARK_,map__36401,map__36401__$1,data,loading_QMARK_,map__36402,map__36402__$1,amount,map__36403,map__36403__$1,stopped_QMARK_,error_text,contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config))
], null)], null),((cljs.core.not.call(null,loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"label","label",1718410804),"Send",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__11700__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,can_use_form_QMARK_));
if(or__11700__auto__){
return or__11700__auto__;
} else {
var or__11700__auto____$1 = cljs.core.boolean$.call(null,error_text);
if(or__11700__auto____$1){
return or__11700__auto____$1;
} else {
var or__11700__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword("contrib-period-status","ended","contrib-period-status/ended",-1094958548),cljs.core.deref.call(null,contrib_period_status));
if(or__11700__auto____$2){
return or__11700__auto____$2;
} else {
var or__11700__auto____$3 = cljs.core.not.call(null,enabled_QMARK_);
if(or__11700__auto____$3){
return or__11700__auto____$3;
} else {
return stopped_QMARK_;
}
}
}
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),contribution.styles.desktop_gutter_mini,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),contribution.styles.desktop_gutter_mini,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (map__36400,map__36400__$1,stake,enabled_QMARK_,map__36401,map__36401__$1,data,loading_QMARK_,map__36402,map__36402__$1,amount,map__36403,map__36403__$1,stopped_QMARK_,error_text,contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","contribute","contribution/contribute",-888702930),data], null));
});})(map__36400,map__36400__$1,stake,enabled_QMARK_,map__36401,map__36401__$1,data,loading_QMARK_,map__36402,map__36402__$1,amount,map__36403,map__36403__$1,stopped_QMARK_,error_text,contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config))
], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),contribution.styles.desktop_gutter_mini,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),contribution.styles.desktop_gutter_mini,new cljs.core.Keyword(null,"width","width",-384071477),(88)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"thickness","thickness",-940175454),(2)], null)], null)], null))], null),(cljs.core.truth_(stake)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.distribution_note], null),"Please note: ",district0x.utils.format_eth.call(null,stake)," DNT tokens will be divided and distributed amongst all\n            participants, each receiving an allocation proportional to the amount they contributed, relative to the\n            total collected."], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.full_width,contribution.styles.fade_white_text,contribution.styles.margin_top_gutter,contribution.styles.margin_bottom_gutter_mini)], null),"Copyright \u00A9 2017 district0x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.full_width], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/district0x-logo-title-white.svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(15)], null)], null)], null)], null)], null);
});
;})(contribution_address,contribute_form,can_use_form_QMARK_,contrib_period_status,current_contrib_period,contrib_config))
});
contribution.components.main_panel.contribution_panel = (function contribution$components$main_panel$contribution_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.paper,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_stats_tiles], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_soft_cap_progress], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_contribute_section], null)], null);
});
contribution.components.main_panel.logo = (function contribution$components$main_panel$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://district0x.io"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.logo,new cljs.core.Keyword(null,"src","src",-1651076051),"./images/district0x-logo.svg"], null)], null)], null);
});
contribution.components.main_panel.main_panel = (function contribution$components$main_panel$main_panel(){
var connection_error_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","blockchain-connection-error?","district0x/blockchain-connection-error?",1624111314)], null));
var snackbar = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","snackbar","district0x/snackbar",42970791)], null));
var contracts_not_found_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","contracts-not-found?","district0x/contracts-not-found?",210394191)], null));
var xs_width_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","window-xs-width?","district0x/window-xs-width?",14187919)], null));
return ((function (connection_error_QMARK_,snackbar,contracts_not_found_QMARK_,xs_width_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),contribution.styles.mui_theme], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(20),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/green-blob2.svg",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.blob4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/cyan-blob.svg",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.blob1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/green-blob1.svg",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.blob2], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"./images/green-blobs.svg",new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.blob3], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show-menu-icon-button","show-menu-icon-button",-171061201),false,new cljs.core.Keyword(null,"style","style",-496642736),contribution.styles.app_bar,new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.logo], null)),new cljs.core.Keyword(null,"icon-element-right","icon-element-right",-2138850585),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.app_bar_right_elements], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.snackbar,clojure.set.rename_keys.call(null,cljs.core.deref.call(null,snackbar),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"open","open",-1763596448)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,contribution.styles.content_wrap,(cljs.core.truth_(cljs.core.deref.call(null,xs_width_QMARK_))?contribution.styles.padding_all.call(null,contribution.styles.desktop_gutter_mini):null))], null),(cljs.core.truth_(cljs.core.deref.call(null,contracts_not_found_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contracts_not_found_page], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.components.misc.center_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.contribution_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.admin_panel], null)], null))], null)], null)], null);
});
;})(connection_error_QMARK_,snackbar,contracts_not_found_QMARK_,xs_width_QMARK_))
});

//# sourceMappingURL=main_panel.js.map