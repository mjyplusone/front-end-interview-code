var publish = {};   // 发布者
publish.list = [];  // 缓存列表 存放订阅者回调函数

// 增加订阅者
publish.listen = function(fn) {
    publish.list.push(fn);
}

// 发布消息
publish.trigger = function() {
    for (var i = 0; i < this.list.length; i++) {
        fn = this.list[i];
        fn.apply(this, arguments);
    }
}

// A订阅如下消息
publish.listen(function(color, size) {
    console.log('Color is: ' + color);
    console.log('Size is: ' + size);
});

// B订阅如下消息
publish.listen(function(color, size) {
    console.log('Another color is: ' + color);
    console.log('Another size is: ' + size);
});

// 发布消息
publish.trigger('red', 40);
publish.trigger('black', 42);


// function Girl() {
//     this._events = {}
// }

// // 订阅
// Girl.prototype.on = function (eventName, callback) {
//     //这里判断是不是第一次订阅
//     if (this._events[eventName]){ 
//         this._events[eventName].push(callback); 
//     } else {
//         this._events[eventName] = [callback]
//     }
// };

// // 发布
// Girl.prototype.emit = function (eventName, ...args) { 
//     if (this._events[eventName]) {
//         this._events[eventName].forEach(cb=>cb(...args));
//     }
// };

// let cry = (who) => {console.log(who+'哭');};
// let shopping = (who) => {console.log(who+'购物');};
// let eat = (who) => {console.log(who+'吃');};
// let smile = (who)=> {console.log(who+'笑')};

// let girl1 = new Girl();
// girl1.on('失恋', cry); 
// girl1.on('失恋', eat);
// girl1.on('失恋', shopping);
// girl1.emit('失恋', '小明');  

// let girl2 = new Girl();
// girl2.on('恋爱', shopping);
// girl2.on('恋爱', smile);
// girl2.emit('恋爱', '小华');   