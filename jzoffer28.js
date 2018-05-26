// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    numbers.sort((num1, num2) => {
        return num1 - num2;
    });
    
    var num = numbers[Math.floor(numbers.length / 2)];
    
    // 考虑可能不存在的情况
    var index1 = numbers.indexOf(num);
    var index2 = numbers.lastIndexOf(num);
    
    if ((index2 - index1 + 1) > Math.floor(numbers.length / 2)) {
        return num;
    } else {
        return 0;
    }
}