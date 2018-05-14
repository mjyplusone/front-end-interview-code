// 题目描述
// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

// input: 128 8
// output: 1

function valueAtBit(num, bit) {
    var numstr = num.toString(2);
    return numstr[numstr.length - bit];
}