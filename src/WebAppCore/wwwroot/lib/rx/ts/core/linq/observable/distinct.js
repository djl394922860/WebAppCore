(function () {
    var o;
    o = o.distinct();
    o = o.distinct(function (x) { return x.length; });
    o = o.distinct(function (x) { return x.length; }, function (x) { return x.toString() + '' + x; });
});
