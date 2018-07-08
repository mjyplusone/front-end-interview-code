// function Promise(fn) {
//     // 存放回调函数的队列
//     var callbacks = [];

//     // then方法注册回调函数(将回调函数加入队列),接受参数为回调函数
//     this.then = function(onResolved) {
//         callbacks.push(onResolved);
//         // 返回Promise实例,作为then方法链式调用的基础
//         return this;
//     }

//     // Promise内部定义resolve方法,调用resolve执行队列中的回调函数
//     function resolve() {
//         setTimeout(function() {
//             callbacks.forEach(function(callback) {
//                 callback();
//             });
//         }, 0);  
//     }

//     // Promise实例化后立即执行
//     // resolve函数传入作为fn的参数
//     // fn中异步操作成功后会调用resolve,执行then中回调函数
//     fn(resolve);
// }



// function Promise(fn) {
//     var callbacks = [];
//     var status = 'Pending';    // 定义状态,初始值Pending
//     var value = null;          // resolve函数的参数,即异步操作的结果

//     this.then = function(onResolved) {
//         // 调用then方法时,如果状态仍处于Pending,把回调函数加入队列
//         if (status == 'Pending') {
//             callbacks.push(onResolved);
//             return this;
//         }
//         // 调用then方法时,如果状态已不是Pending,直接执行回调函数
//         // then中回调接受resolve函数的参数(异步操作的结果)作为参数
//         onResolved(value);
//         return this;
//     }

//     function resolve(newValue) {
//         value = newValue;
//         // 调用resolve,把状态改变为Resolved
//         status = 'Resolved';
//         setTimeout(function() {
//             callbacks.forEach(function(callback) {
//                 callback(value);
//             });
//         }, 0);  
//     }

//     fn(resolve);
// }




// function Promise(fn) {
//     var callbacks = [];
//     var status = 'Pending';
//     var value = null;

//     this.then = function(onResolved) {
//         // then方法返回Promise实例,串行Promise的基础
//         return new Promise(function(resolve) {
//             // handle方法的参数:
//             // then方法传入的回调函数 和 新创建Promise实例内部的resolve
//             handle({
//                 onResolved: onResolved || null,
//                 resolve: resolve
//             });
//         }); 
//     }

//     // Promise内部方法handle
//     function handle(callback) {
//         if (status == 'Pending') {
//             callbacks.push(callback);
//             return;
//         }
//         // 如果then中没有传递任何东西
//         if (!callback.onResolved) {
//             callback.resolve(value);
//             return;
//         }

//         var ret = callback.onResolved(value);
//         callback.resolve(ret);
//     }

//     function resolve(newValue) {
//         // 传入resolve的是Promise实例
//         if (newValue && (typeof newValue == 'object' || typeof newValue == 'function')) {
//             var then = newValue.then;
//             if (typeof then == 'function') {
//                 then.call(newValue, resolve);
//                 return;
//             }
//         }

//         value = newValue;
//         status = 'Resolved';
//         setTimeout(function() {
//             callbacks.forEach(function(callback) {
//                 handle(callback);
//             });
//         }, 0);  
//     }

//     fn(resolve);
// }





function MyPromise(fn) {
    var callbacks = [];
    var status = 'Pending';
    var value = null;

    // 添加then方法的第二个参数,状态变为Reject时的回调函数
    this.then = function(onResolved, onRejected) {
        return new MyPromise(function(resolve, reject) {
            handle({
                onResolved: onResolved || null,
                onRejected: onRejected || null,
                resolve: resolve,
                reject: reject
            });
        }); 
    }

    // Promise内部方法handle
    function handle(callback) {
        if (status == 'Pending') {
            callbacks.push(callback);
            return;
        }

        var cb = status == 'Resolved' ? callback.onResolved : callback.onRejected;
        // then方法中没有传入与当前状态对应的回调函数
        if (!cb) {
            cb = status == 'Resolved' ? callback.resolve : callback.reject;
            cb(value);
            return;
        }

        try {
            var ret = cb(value);
            callback.resolve(ret);
        } catch(e) {
            callback.reject(e);
        }
    }

    function resolve(newValue) {
        // 传入resolve的是Promise实例
        if (newValue && (typeof newValue == 'object' || typeof newValue == 'function')) {
            var then = newValue.then;
            if (typeof then == 'function') {
                then.call(newValue, resolve);
                return;
            }
        }

        status = 'Resolved';
        value = newValue;
        execute();
    }

    function reject(err) {
        status = 'Rejected';
        value = err;
        execute();
    }

    function execute() {
        setTimeout(function() {
            callbacks.forEach(function(callback) {
                handle(callback);
            });
        }, 0);
    }

    fn(resolve, reject);
}


// Promise.all
MyPromise.all = function(promises) {
    // 检测传入参数是否为数组
    if (!Array.isArray(promises)) {
        throw new TypeError('You must pass an array to all.');
    }

    // 返回一个Promise实例
    return new MyPromise(function(resolve, reject) {
        var result = [],     // 存储每个Promise resolve的结果
            count = promises.length;
        
        // 每一个Promise异步操作成功,调用onResolved回调
        function onResolved(index) {
            return function(value) {
                resolveAll(index, value);
            }
        }

        function onRejected(err) {
            reject(err);
        }

        function resolveAll(index, value) {
            // 存储每个Promise的参数
            result[index] = value;
            // count为0表示所有Promise已经运行完成,执行resolve函数
            if (--count == 0) {
                resolve(result);
            }
        }

        for (var i = 0; i < promises.length; i++) {
            // 如果有一个失败,就执行onRejected回调
            // 异步操作成功,将异步操作结果传入onResolved回调
            promises[i].then(onResolved(i), onRejected);
        }
    });
}


// Promise.race
MyPromise.race = function(promises) {
    if (!Array.isArray(promises)) {
        throw new TypeError('You must pass an array to race.');
    }
    return new MyPromise(function(resolve, reject) {
        function onResolved(value) {
            resolve(value);
        }

        function onRejected(err) {
            reject(err);
        }

        for (var i = 0; i < promises.length; i++) {
            promises[i].then(onResolved, onRejected);
        }
    });
}






// test
function fn1(resolve, reject) {
    setTimeout(function() {
        console.log('step1: execute');
        resolve('1');
    }, 500);
}

function fn2(resolve, reject) {
    setTimeout(function() {
        console.log('step2: execute');
        resolve('2');
    }, 1000);
}

function fn3(resolve, reject) {
    setTimeout(function() {
        console.log('step3: execute');
        resolve('3');
    }, 1500);
}

new MyPromise(fn1).then(function(value) {
    console.log(value);
    return new MyPromise(fn2);
}).then(function(value) {
    console.log(value);
    return 3;
}).then(function(value) {
    console.log(value);
});


// MyPromise.all([new MyPromise(fn1), new MyPromise(fn2), new MyPromise(fn3)])
//     .then(function(value) {
//         console.log(value);
//     });


// MyPromise.race([new MyPromise(fn1), new MyPromise(fn2), new MyPromise(fn3)])
//     .then(function(value) {
//         console.log(value);
//     });
