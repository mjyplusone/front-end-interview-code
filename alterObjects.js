// 题目描述
// 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

// input
// var C = function(name) {this.name = name; return this;}; 
// var obj1 = new C('Rebecca'); 
// alterObjects(C, 'What\'s up'); obj1.greeting;

// output
// What's up

// 思路:共享的属性和方法可以在原型上定义

function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}