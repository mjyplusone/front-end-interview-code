// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

// 5 + 17 = 101 + 10001
// 加法(不考虑进位) 异或  101 + 10001 = 10100
// 计算是否进位 位与      10
// 循环上述过程直到没有进位，直接输出sum

function Add(num1, num2)
{
    // write code here
    var sum = num1 ^ num2;
    var carry = (num1 & num2) << 1;
    var num1 = sum;
    var num2 = carry;
    while (num2 != 0) {
        sum = num1 ^ num2;
        carry = (num1 & num2) << 1;
        num1 = sum;
        num2 = carry;
    }
    return sum;
}