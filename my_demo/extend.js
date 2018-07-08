// jQuery的$.extend方法是我们在开发中经常用到的方法，用于合并若干个对象，且支持深拷贝
// Object.assign 浅拷贝

// 以下例子说明instanceof没法判断是纯对象还是数组
// value instanceof Object
// true
// value instanceof Array
// true
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value);
    } else {
        return Object.prototype.toString.call(value) === '[object Array]';
    }
}

var extend = function(dst, src, isDeep) {
    if (isObject(src) || isArray(src)) {
        for (var property in src) {
            var value = src[property];
            if (isDeep && (isObject(value) || isArray(value))) {
                var copy = isObject ? {} : [];
                dst[property] = extend(copy, value, isDeep);
            } else {
                dst[property] = value;
            }
        }
    } else {
        dst = src;
    }
    
    return dst;
}

// test
var a = {name:1};
var b = {name:2};
var c = {name:3};
extend(a, {name: [a, b, c], value: a}, true);
console.log(a);
console.log(a.name[0] === a) // false 
console.log(a.value === a) // false


