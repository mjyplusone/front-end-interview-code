// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

// 方法1 暴力遍历 O(n^2)

// 方法2 前后两个指针
function FindNumbersWithSum(array, sum)
{
    // write code here
    var result = [];
    
    var front = 0, tail = array.length - 1;
    
    while (front < tail) {
        if (array[front] + array[tail] < sum) {
            front++;
        } else if (array[front] + array[tail] > sum) {
            tail--;
        } else {
            var tmp = [];
            tmp.push(array[front]);
            tmp.push(array[tail]);
            result.push(tmp);
            front++;
            tail--;
        }
    }
    if (result.length > 1) {
        var multi = result.map((arr) => {
            return arr[0] * arr[1];
        });
        var min = Math.min.apply(null, multi);
        var index = multi.indexOf(min);
        return result[index];
    } else if (result.length == 1) {
        return result[0];
    } else {
        // 没有找到的情况
        return [];
    }
}