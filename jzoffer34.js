// 题目描述
// 在一个字符串(1<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置

// 思考：两种方法
// 1、每个字符，与后面的字符逐个比较，记录出现次数，返回第一个次数为1的，复杂度O(n^2)
// 2、第一次扫描，在map中记录每个字符出现的次数 O(n); 第二次扫描，依次从map中获取存储的次数，返回第一个次数为1的，O(n); 所以总复杂度O(n)

function FirstNotRepeatingChar(str)
{
    // write code here
    if (str == '') return -1;
    
    var map = {};
    for (var i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (map[str[i]] == 1) {
            return i;
        }
    }
}