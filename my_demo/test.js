// // 牛牛有两个字符串A和B,其中A串是一个01串,B串中除了可能有0和1,还可能有'?',B中的'?'可以确定为0或者1。 寻找一个字符串T是否在字符串S中出现的过程,称为字符串匹配。牛牛现在考虑所有可能的字符串B,有多少种可以在字符串A中完成匹配。

// // 例如:A = "00010001", B = "??"
// // 字符串B可能的字符串是"00","01","10","11",只有"11"没有出现在字符串A中,所以输出3

// // var a = '00010001'
// // var b = '??'

// var str = '';
// for (var i = 0; i < b.length; i++) {
//     if (b[i] === '?') {
//         str += '(0|1)';
//     } else {
//         str += b[i];
//     }
// }

// var reg = new RegExp(str, 'g');


var input = '][';
var stack = [];
for (var i = 0; i < input.length; i++) {
    if (input[i] == '[') {
        stack.push(input[i]);
    } else if (input[i] == ']') {
        if (stack.length != 0 && stack[stack.length - 1] == '[') {
            stack.pop();
        } else {
            stack.push(input[i]);
        }
    }
}
for (var i = 0; i < stack.length; i++) {
    if (stack[i] == ']') {
        input = '[' + input;
    } else if (stack[i] == '[') {
        input = input + ']';
    }
}
console.log(input);

