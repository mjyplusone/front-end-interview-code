// 题目描述
// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 递归代替循环 短路操作代替判断语句表示结束条件

function Sum_Solution(n)
{
    // write code here
    var sum = n;
    (n > 1) && (sum += Sum_Solution(n - 1));
    return sum;
}