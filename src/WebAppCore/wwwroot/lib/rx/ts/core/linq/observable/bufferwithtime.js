(function () {
    var o;
    var so = o.bufferWithTime(100);
    so = o.bufferWithTime(100, 5);
    var so = o.bufferWithTime(100, Rx.Scheduler.async);
    so = o.bufferWithTime(100, 5, Rx.Scheduler.async);
});
