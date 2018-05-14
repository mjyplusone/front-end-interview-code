// 题目描述
// 判断输入是否是正确的邮箱格式
// input
// 邮箱字符串
// output
// true表示格式正确

function isAvailableEmail(sEmail) {
    var pattern = /^[\w\._-]+@(\w+)(\.\w+)+$/;
    return pattern.test(sEmail);
}