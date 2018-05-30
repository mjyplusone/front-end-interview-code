// 题目描述
// 请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

// 输出描述:
// 如果当前字符流没有存在出现一次的字符，返回#字符。

// for...in循环对象属性，顺序：1、数值(按数字排序) 2、字符串(按生成时间) 3、Symbol值(按生成时间)

var map = {};
//Init module if you need
function Init()
{
    // write code here
    map = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if (map[ch]) {
        map[ch]++;
    } else {
        map[ch] = 1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for (var ch in map) {
        if (map[ch] == 1) {
            return ch;
        }
    }
    return '#';
}