var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var ts = new Rx.TestScheduler();
    var o = ts.createColdObservable(new Rx.Recorded(100, '5'));
    var o = ts.createHotObservable(new Rx.Recorded(100, '5'));
    var ob = ts.createObserver();
    var p = ts.createResolvedPromise(100, false);
    var p = ts.createRejectedPromise(100, false);
    var ob = ts.startWithTiming(function () { return Rx.Observable.create(null); }, 100, 200, 300);
    var ob = ts.startWithDispose(function () { return Rx.Observable.create(null); }, 300);
    var ob = ts.startWithCreate(function () { return Rx.Observable.create(null); });
});
