// 题目描述
// 把只包含因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含因子7。 
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

// 方法1 直接判断每个数是否为丑数
// 超时了。。。
function GetUglyNumber_Solution(index)
{
    // write code here
    var uglyNum = 0;
    var num = 0;
    while (uglyNum < index) {
        num++;
        if (isUgly(num)) {
            uglyNum++;
        }
    }
    return num;
}

function isUgly(number) {
    while (number % 2 == 0) {
        number /= 2;
    }
    while (number % 3 == 0) {
        number /= 3;
    }
    while (number % 5 == 0) {
        number /= 5;
    }
    return number == 1;
}


// 方法2 用数组保存已经找到的丑数，空间换时间
// 每一个丑数都正好3次作为之后某丑数的基础(*2 *3 *5)。每个机会一旦用过，就不能再用
// 首先设置第一个丑数1，递推选择下一个丑数的过程中，每次从三个游标所表示的机会所得到的数中选择最小的数。
// 同时使用掉这个机会，即把对应的游标加1，其他的没被选到的机会留作下轮参选。（尤其注意，像6这样的丑数，就同时用掉了2的乘3机会和3的乘2机会）

function GetUglyNumber_Solution(index)
{
    // write code here
    if (index == 0) return 0;
    
    var ugly = [];
    ugly[0] = 1;
    var i = 1;
    var i2 = 0, i3 = 0, i5 = 0;
    while (i < index) {
        ugly[i] = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
        if (ugly[i] == ugly[i2] * 2) i2++;
        if (ugly[i] == ugly[i3] * 3) i3++;
        if (ugly[i] == ugly[i5] * 5) i5++;
        i++;
    }
    return ugly[i - 1];
}