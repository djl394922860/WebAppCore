(function () {
    var os;
    var on;
    on.sum();
    os.sum(function (v, i, s) { return v.length + i; });
    os.sum(function (v, i, s) { return v.length + i; }, {});
});
