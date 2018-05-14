// 题目描述
// 为 Array 对象添加一个去除重复项的方法
// input
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// output
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

// 方法1
Array.prototype.uniq = function () {
    var result = [];
    for(var i = 0; i < this.length; i++) {
        // 要注意this的问题
        var that = this;
        if (result.findIndex(function(item) {
            return Object.is(item, that[i]);
        }) === -1) {
            result.push(this[i]);
        }
    }
    return result;
}

// 方法2 箭头函数可以解决this的问题
Array.prototype.uniq = function () {
    var result = [];
    for(var i = 0; i < this.length; i++) {
        if (result.findIndex((item) => {
            return Object.is(item, this[i]);
        }) === -1) {
            result.push(this[i]);
        }
    }
    return result;
}

// 方法3 牛客网为什么不支持ES6!!! 这么写很麻烦啊啊啊

