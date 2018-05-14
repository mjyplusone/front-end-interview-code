// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

// input: 65
// output: 01000001

function convertToBinary(num) {
    var str = num.toString(2);
    return ('00000000' + str).substr(str.length);
}