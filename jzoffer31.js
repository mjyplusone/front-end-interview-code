// 题目描述
// 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
// ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。

// 找数字中的规律
// 比如30143
// 个(>1)：(3014 + 1) * 1               (每10个里有1个个位是1的)
// 十(>1)：(301 + 1) * 10               (每100个里有10个十位是1的)
// 百(=1)：(30 + 0) * 100 + (43 + 1)    (...)
// 千(<1)：(3 + 0) * 1000               (...)
// 万(>1)：(0 + 1) * 10000              (...)

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var num, remain = n, bit = 0;
    var sum = 0;
    while (remain) {
        num = remain % 10;
        remain = Math.floor(remain / 10);
        
        if (num > 1) sum += (remain + 1) * Math.pow(10, bit);
        else if (num == 1) sum += (remain + 0) * Math.pow(10, bit) + (n % Math.pow(10, bit) + 1);
        else sum += (remain + 0) * Math.pow(10, bit);
        
        bit++;
    }
    return sum;
}