// 基于闭包
// function Person(name) {
//     var _name = name;
//     this.getName = function() {
//         return _name;
//     }
// }

// var person = new Person('plsuone');
// console.log(person._name);
// console.log(person.getName());


// 基于强引用散列表
// var Person = (function() {
//     var privateData = {},
//         privateId = 0;
    
//     function Person(name) {
//         Object.defineProperty(this, '_id', {value: privateId++});

//         privateData[this._id] = {
//             name: name
//         };
//     }

//     Person.prototype.getName = function() {
//         return privateData[this._id].name;
//     };

//     return Person;
// })();

// var person = new Person('plsuone');
// console.log(person.getName());


// 基于WeakMap
var Person = (function() {
    var privateData = new WeakMap();

    function Person(name) {
        privateData.set(this, {name: name});
    }

    Person.prototype.getName = function() {
        return privateData.get(this).name;
    }

    return Person;
})();

var person = new Person('plsuone');
console.log(person.getName());