// 题目描述
// LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
// 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！
// “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。
// 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 
// 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何。为了方便起见,你可以认为大小王是0。

// 抽象问题 其实就是 [1,3,0,0,5]  0可以作为任何数字时，数组是不是个顺子
// 思路：排序 不连续的地方即缺0，统计缺0的个数  和拥有的0的数量比较
// 坑：注意有重复数字的情况，应该为false

function IsContinuous(numbers)
{
    // write code here
    if (numbers == null || numbers.length <= 0) return false;
    
    numbers.sort((num1, num2) => {
        return num1 - num2;
    });
    
    var count  = 0;
    var i = 0;
    while (numbers[i] == 0) {
        count++;
        i++;
    }
    
    var arr = numbers.slice(i);
    var lack = 0;
    arr.reduce((prev, curr) => {
        // 考虑有重复数字的情况,lack设置一个大于4的数,就一定没有足够的0去补充了
        if (prev == curr) lack += 5;
        else lack += curr - prev - 1;
        return curr;
    });
    
    return lack <= count;
}