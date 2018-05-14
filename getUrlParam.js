// 题目描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

// input
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe test
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe a
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe
// output
// [1, 2, 3]
// 4
// ''
// {key: [1,2,3], test: 4}

function getUrlParam(sUrl, sKey) {
    var pattern = new RegExp('[?&](\\w+)=(\\w+)', 'g');
    var matches;
    var result = {};
    while(matches = pattern.exec(sUrl)) {
        if (result[matches[1]]) {
            result[matches[1]].push(matches[2]);
        } else {
            result[matches[1]] = [].concat(matches[2]);
        }
    }
    if (sKey === undefined) {
        return result;
    } else if (result[sKey] && result[sKey].length === 1) {
        return result[sKey][0];
    } else {
        return result[sKey] || '';
    }
}