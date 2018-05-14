// 题目描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
// input: 3 0.0001
// output: 0.0003

// 直接相乘会出现的错误
// 3*0.0001
// 0.00030000000000000003

// 原因:浮点数最高精度17位,远不如整数
// 解决:由两个里精度高的决定保留位数
function multiply(a, b) {
    var stra = a.toString();
    var strb = b.toString();
    var len = afterPointLen(stra) + afterPointLen(strb);
    return (a * b).toFixed(len);
}

function afterPointLen(str) {
    if (str.indexOf('.') === -1) {
        return 0;
    } else {
        return str.length - str.indexOf('.') - 1;
    }
}