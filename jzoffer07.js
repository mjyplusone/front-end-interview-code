// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
// n<=39

function Fibonacci(n)
{
    // write code here
    if (n <= 0) return 0;
    if (n == 1) return 1;
    var first = 0;
    var second = 1;
    var result;
    for (var i = 2; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}