// 题目描述
// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false

// input
// '9876543'
// output
// 987

// 连续3个数字不是3个连续数字。。。不要想复杂了。。。

function captureThreeNumbers(str) {
    var pattern = /\d{3}/;
    var matches = pattern.exec(str);
    if (matches) {
        return matches[0];
    } else {
        return false;
    }
}