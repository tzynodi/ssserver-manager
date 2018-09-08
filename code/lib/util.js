var _ = require('underscore');



function isNull(obj){
    return _.isNull(obj) || _.isUndefined(obj);
}
exports.isNull = isNull;

function formatDate(obj){
    if(isNull(obj)) obj = Date.now();
    var date =  new Date(obj);
    var y = 1900 + date.getYear();
    var M = "0" + (date.getMonth() + 1);
    var d = "0" + date.getDate();
    var h = "0" + date.getHours();
    var m = "0" + date.getMinutes();
    var s = "0" + date.getSeconds();
    var ms = "00" + date.getMilliseconds();
    return y
        + "-" + M.substring(M.length - 2, M.length)
        + "-" + d.substring(d.length - 2, d.length)
        + " " + h.substring(h.length - 2, h.length)
        + ":" + m.substring(m.length - 2, m.length)
        + ":" + s.substring(s.length - 2, s.length)
        + "." + ms.substring(ms.length - 3, ms.length);
}
exports.formatDate = formatDate;