// 题目描述
// 统计一个数字在排序数组中出现的次数。

// 先二分法查找数字位置
// js我就直接indexOf找数字了

function GetNumberOfK(data, k)
{
    // write code here
    var count = 0;
    var index = data.indexOf(k);
    // var index = binSearch(data, k);
    if (index > -1) {
        count++;
        for (var i = index - 1; i >= 0; i--) {
            if (data[i] == k) {
                count++;
            } else {
                break;
            }
        }
        for (var i = index + 1; i < data.length; i++) {
            if (data[i] == k) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
}

function binSearch(data, k) {
    var lower = 0;
    var upper = data.length - 1;
    while (lower <= upper) {
        var mid = Math.floor((lower + upper) / 2);
        if (data[mid] < k) {
            lower = mid + 1;
        } else if (data[mid] > k) {
            upper = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}