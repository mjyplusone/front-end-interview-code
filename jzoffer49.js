// 题目描述
// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
// 输入描述:
// 输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
// 如果是合法的数值表达则返回该数字，否则返回0

function StrToInt(str)
{
    // write code here
    if (str == null || str.length == 0) return 0;
    
    // 去除头尾空格
    str = str.trim();
    
    var num;
    var flag = 0;  // 是否负标志位
    if (str[0] == '+' || str[0] == '-') {
        num = str.slice(1);
        if (str[0] == '-') flag = 1;
    } else if (str[0] >= '0' && str[0] <= '9') {
        num = str.slice(0);
    } else {
        return 0;
    }
    
    
    var sum = 0;
    num = num.split('').reverse().join('');
    for (var i = 0; i < num.length; i++) {
        if (num[i] >= '0' && num[i] <= '9') {
            sum += num[i] * Math.pow(10, i);
        } else {
            return 0;
        } 
    }
    
    if (flag == 1) return 0 - sum;
    else return sum;
}

console.log(StrToInt('+2147483647'));
console.log(StrToInt('    1a33'));