// 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n)
{
    // write code here
    if (n < 0) {
        // 无符号右移得到负数的补码表示
        n = n >>> 0;
    }
    var count = 0;
    var str = n.toString(2);
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '1') {
            count++;
        }
    }
    return count;
}