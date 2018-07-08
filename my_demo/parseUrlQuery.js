// https://www.baidu.com/index.php?tn=monline_3_dg

function urlParse(url) {
    // if (location.search.length > 0) {
    //     var query = location.search.substring(1);
    // } else {
    //     return;
    // }

    var query = url.split('?')[1];

    var result = {};
    var items = query.split('&');
    for (var i = 0; i < items.length; i++) {
        item = items[i].split('=');
        var name = decodeURIComponent(item[0]);
        var value = decodeURIComponent(item[1]);
        
        if (name.length > 0) {
            result[name] = value;
        }
    }
    return result;
}

console.log(urlParse('https://www.baidu.com/index.php?tn=monline_3_dg'));