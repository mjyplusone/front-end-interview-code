// 牛客网上通不过。。。想不通

function formatDate(date, fmt) {
    if(/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'h+': date.getHours() > 12 ? date.getHours() % 12 : date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (var key in o) {
        if(new RegExp('(' + key + ')').test(fmt)) {
            var str = o[key] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    if(/(w)/.test(fmt)) {
        var week = ['日', '一', '二', '三', '四', '五', '六'];
        fmt = fmt.replace(RegExp.$1, week[date.getDay()]);
    }
    return fmt;
}
                              
function padLeftZero(str) {
    return ('00' + str).substr(str.length);                
}