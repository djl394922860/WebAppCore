(function () {
    var os;
    var on;
    on.average();
    os.average(function (v, i, s) { return v.length + i; });
    os.average(function (v, i, s) { return v.length + i; }, {});
});
