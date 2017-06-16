// Compiled by ClojureScript 1.9.227 {:target :nodejs}
goog.provide('contribution.cmd');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('contribution.tests');
goog.require('cljs.test');
cljs.nodejs.enable_util_print_BANG_.call(null);
window = ({});
console.error = (function (x){
return console.log(x);
});
contribution.cmd._main = (function contribution$cmd$_main(var_args){
var args__12782__auto__ = [];
var len__12775__auto___46545 = arguments.length;
var i__12776__auto___46546 = (0);
while(true){
if((i__12776__auto___46546 < len__12775__auto___46545)){
args__12782__auto__.push((arguments[i__12776__auto___46546]));

var G__46547 = (i__12776__auto___46546 + (1));
i__12776__auto___46546 = G__46547;
continue;
} else {
}
break;
}

var argseq__12783__auto__ = ((((0) < args__12782__auto__.length))?(new cljs.core.IndexedSeq(args__12782__auto__.slice((0)),(0),null)):null);
return contribution.cmd._main.cljs$core$IFn$_invoke$arity$variadic(argseq__12783__auto__);
});

contribution.cmd._main.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return cljs.test.run_block.call(null,(function (){var env46543 = cljs.test.empty_env.call(null);
var summary46544 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env46543,summary46544){
return (function (){
cljs.test.set_env_BANG_.call(null,env46543);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19304__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19304__auto__,env46543,summary46544){
return (function (){
if((env__19304__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),contribution.tests.cljs_test_each_fixtures);
});})(env__19304__auto__,env46543,summary46544))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return contribution.tests.contracts_setup;},new cljs.core.Symbol("contribution.tests","contracts-setup","contribution.tests/contracts-setup",-1558627354,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),new cljs.core.Symbol(null,"contracts-setup","contracts-setup",97471779,null),"/Users/matus/www/district0x/contribution/test/contribution/tests.cljs",25,1,145,145,cljs.core.List.EMPTY,null,(cljs.core.truth_(contribution.tests.contracts_setup)?contribution.tests.contracts_setup.cljs$lang$test:null)])),new cljs.core.Var(function(){return contribution.tests.contribution1;},new cljs.core.Symbol("contribution.tests","contribution1","contribution.tests/contribution1",1527943044,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),new cljs.core.Symbol(null,"contribution1","contribution1",-25224121,null),"/Users/matus/www/district0x/contribution/test/contribution/tests.cljs",23,1,178,178,cljs.core.List.EMPTY,null,(cljs.core.truth_(contribution.tests.contribution1)?contribution.tests.contribution1.cljs$lang$test:null)])),new cljs.core.Var(function(){return contribution.tests.contribution2;},new cljs.core.Symbol("contribution.tests","contribution2","contribution.tests/contribution2",525743895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),new cljs.core.Symbol(null,"contribution2","contribution2",-1264018862,null),"/Users/matus/www/district0x/contribution/test/contribution/tests.cljs",23,1,469,469,cljs.core.List.EMPTY,null,(cljs.core.truth_(contribution.tests.contribution2)?contribution.tests.contribution2.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19304__auto__,env46543,summary46544){
return (function (){
if((env__19304__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19304__auto__,env46543,summary46544))
], null));
})());
});})(env46543,summary46544))
,((function (env46543,summary46544){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"contribution.tests","contribution.tests",-774683836,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env46543,summary46544))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env46543,summary46544){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary46544,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary46544),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env46543,summary46544))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env46543,summary46544){
return (function (){
cljs.test.set_env_BANG_.call(null,env46543);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary46544));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary46544),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env46543,summary46544))
], null));
})());
});

contribution.cmd._main.cljs$lang$maxFixedArity = (0);

contribution.cmd._main.cljs$lang$applyTo = (function (seq46542){
return contribution.cmd._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46542));
});

cljs.core._STAR_main_cli_fn_STAR_ = contribution.cmd._main;
