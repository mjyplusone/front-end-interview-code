// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 思考：其实是Fibonacci数列
// 当n>2时，第一次跳的时候就有两种不同的选择：一是第一次只跳1级，此时跳法数目等于后面剩下的n-1级台阶的跳法数目，即为f(n-1);
// 另一种选择是第一次跳2级，此时跳法数目等于后面剩下n-2级台阶的跳法数目，即为f(n-2)。

function jumpFloor(number)
{
    // write code here
    if (number < 1) return 0;
    if (number == 1) return 1;
    if (number == 2) return 2;
    var first = 1; 
    var second = 2;
    var result;
    for (i = 3; i <= number; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}
