// 题目描述
// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序

// input
// var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
// C.prototype.bop = 'bip'; 
// iterate(new C());

// output
// ["foo: bar", "baz: bim"]


// 方法1
function iterate(obj) {
    var result = [];
    Object.keys(obj).forEach(function(property) {
        result.push(property + ': ' + obj[property]); 
    });
    return result;
}

// 方法2
function iterate(obj) {
    var result = [];
    for(var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key + ': ' + obj[key]);
        }
    }
    return result;
}