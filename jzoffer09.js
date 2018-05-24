// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 思考：f(n) = f(n-1) + f(n-2) + ... + f(1) + 1
// f(1) = 1  f(2) = 2
// 发现规律f(n) = 2 ^ (n-1)

function jumpFloorII(number)
{
    // write code here
    return Math.pow(2, number - 1);
}