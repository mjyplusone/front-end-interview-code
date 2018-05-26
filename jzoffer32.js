// 题目描述
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
// 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

// 思路
// 3 32 > 32 3       则32在3前面
// 3 321 > 321 3     则321在3前面
// 32 321 > 321 3    则321在32前面

function PrintMinNumber(numbers)
{
    // write code here
    numbers.sort((num1, num2) => {
        var s1 = parseInt('' + num1 + num2); 
        var s2 = parseInt('' + num2 + num1);
        
        return s1 - s2;
    });
    
    return numbers.join(''); 
}