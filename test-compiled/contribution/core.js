// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.core');
goog.require('cljs.core');
goog.require('contribution.constants');
cljs.core.load_file("test-compiled/material-ui.inc.js");
goog.require('contribution.events');
cljs.core.load_file("test-compiled/react-flexbox-grid.inc.js");
goog.require('cljs_time.extend');
goog.require('reagent.core');
goog.require('district0x.subs');
goog.require('contribution.db');
goog.require('district0x.events');
cljs.core.load_file("test-compiled/web3.inc.js");
goog.require('madvas.re_frame.google_analytics_fx');
goog.require('contribution.subs');
goog.require('goog.string.format');
goog.require('cljs.spec');
goog.require('print.foo');
goog.require('contribution.components.main_panel');
goog.require('re_frame.core');
contribution.core.mount_root = (function contribution$core$mount_root(){
cljs.spec.check_asserts.call(null,goog.DEBUG);

madvas.re_frame.google_analytics_fx.set_enabled_BANG_.call(null,cljs.core.not.call(null,goog.DEBUG));

re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contribution.components.main_panel.main_panel], null),document.getElementById("app"));
});
contribution.core.init = (function contribution$core$init(){
cljs.spec.check_asserts.call(null,goog.DEBUG);

madvas.re_frame.google_analytics_fx.set_enabled_BANG_.call(null,cljs.core.not.call(null,goog.DEBUG));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","initialize","district0x/initialize",-56256997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-db","default-db",1505343439),contribution.db.default_db,new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","load-smart-contracts","district0x/load-smart-contracts",-1556189847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),contribution.constants.contracts_version], null)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","smart-contracts-loaded","district0x/smart-contracts-loaded",1436430088),new cljs.core.Keyword("district0x","my-addresses-loaded","district0x/my-addresses-loaded",-272389638)], null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","addresses->owners?","contribution/addresses->owners?",-1370315629)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch-dnt-balances","watch-dnt-balances",1714451517)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x","watch-my-eth-balances","district0x/watch-my-eth-balances",422226093)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-contrib-period","contribution/get-contrib-period",-2055933922),contribution.constants.current_contrib_period], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","get-configuration","contribution/get-configuration",904521636)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contribution","setup-event-listeners","contribution/setup-event-listeners",34858574)], null)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null),new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-now","update-now",1923846738)], null),new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"db-path","db-path",-68094099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-now-interval","update-now-interval",1888365022)], null)], null)], null)], null)], null));

return contribution.core.mount_root.call(null);
});
goog.exportSymbol('contribution.core.init', contribution.core.init);

//# sourceMappingURL=core.js.map