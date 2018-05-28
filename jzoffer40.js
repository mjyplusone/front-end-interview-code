// 题目描述
// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++;
        } else {
            obj[array[i]] = 1;
        }
    }
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (obj[array[i]] == 1) {
            result.push(array[i]);
        }
    }
    return result;
}