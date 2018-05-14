// 题目描述
// 封装函数 f，使 f 的 this 指向指定的对象

function bindThis(f, oTarget) {
    return function () {
        return f.apply(oTarget, arguments);
    };
}