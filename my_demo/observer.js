// JavaScript自定义事件(观察者模式)

// var Event = {
//     handles: {},
//     on: function(eventName, callback) {
//         if (!this.handles[eventName]) {
//             this.handles[eventName] = [];
//         }
//         this.handles[eventName].push(callback);
//     },
//     emit: function(eventName, ...args) {
//         if (this.handles[eventName]) {
//             this.handles[eventName].forEach((callback) => {
//                 callback(...args);
//             })
//         }
//     }
// }

// // test1
// Event.on('test', function (result) {
//     console.log(result);
// });
// Event.on('test', function () {
//     console.log('test');
// });
// Event.emit('test', 'hello world'); // 输出 'hello world' 和 'test'




// var Event = {
//     on: function(eventName, callback) {
//         if (!this.handles) {
//             // 调用on时为当前对象定义不可枚举属性handles
//             Object.defineProperty(this, 'handles', {
//                 value: {},
//                 enumerable: false,
//                 configurable: true,
//                 writable: true
//             })
//         }
//         if (!this.handles[eventName]) {
//             this.handles[eventName] = [];
//         }
//         this.handles[eventName].push(callback);
//     },
//     emit: function(eventName, ...args) {
//         if (this.handles[eventName]) {
//             this.handles[eventName].forEach((callback) => {
//                 callback(...args);
//             })
//         }
//     }
// }

// // test2
// var person1 = {};
// var person2 = {};
// // 注意Object.assign浅拷贝,将源对象自身所有可枚举属性复制到目标对象
// Object.assign(person1, Event);
// Object.assign(person2, Event);
// person1.on('call1', function () {
//     console.log('person1');
// });
// person2.on('call2', function () {
//     console.log('person2');
// });
// person1.emit('call1'); // 输出 'person1'
// person1.emit('call2'); // 没有输出
// person2.emit('call1'); // 没有输出
// person2.emit('call2'); // 输出 'person2'




// 观察者模式：emit、on、remove
function Event() {
    this.handles = {};
}

Event.prototype = {
    constructor: Event,
    on: function(eventName, callback) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
        }
        this.handles[eventName].push(callback);
    },
    emit: function(eventName, ...args) {
        if (this.handles[eventName]) {
            this.handles[eventName].forEach((callback) => {
                callback(...args);
            })
        }
    },
    remove: function(eventName, handle) {
        if (this.handles[eventName]) {
            var index = this.handles[eventName].findIndex((callback) => {
                return callback === handle;
            });
            this.handles[eventName].splice(index, 1);
        }
    }
}

// test
var event = new Event();
function callback1() {
    console.log('callback1');
}
function callback2() {
    console.log('callback2');
}
function callback3() {
    console.log('callback3');
}
event.on('event', callback1);
event.on('event', callback2);
event.on('event', callback3);
event.emit('event');
event.remove('event', callback2);
event.emit('event');