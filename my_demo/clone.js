// 实现函数clone,可以对五种主要数据类型(Number,String,,Boolean,Object,Array)
// 注意要深拷贝,考虑对象或数组的成员依然是对象或数组的情况

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

function clone(value) {
    if (isArray(value)) {
        var result = [];
        for (var i = 0; i < value.length; i++) {
            result[i] = clone(value[i]);
        }
        return result;
    } else if (isObject(value)) {
        var result = {};
        for (var key in value) {
            result[key] = clone(value[key]);
        }
        return result;
    } else {
        return value;
    }
}

var result = clone({name: 'mjy', age: 24, test: {a: 1, b: 2}});
console.log(result);   // { name: 'mjy', age: 24, test: { a: 1, b: 2 } }
result.name = 'plusone';
console.log(result);   // { name: 'plusone', age: 24, test: { a: 1, b: 2 } }