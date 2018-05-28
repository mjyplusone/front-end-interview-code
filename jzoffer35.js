// 题目描述
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

// 输入
// 1,2,3,4,5,6,7,0
// 输出
// 7


// 方法1 依次扫描，每个数字和后面所有数字比较，O(n^2)

// 方法2 归并排序思想 O(nlogn) 需要长度为n的辅助数组 空间换时间
// 注意：
// 1、merge的时候的比较顺序，count增加的方式，这样才不会错过任何一对数字
// 2、传回count值的方式，如果用全局count，注意要每次开始把count清0，不然全局count一直在增加


function InversePairs(data)
{
    // write code here
    if (data.length < 2) {
        return 0;
    }
    
    var count = sort(data, 0, data.length - 1);
    
    return count % 1000000007;
}

function sort(data, start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        var leftCount  = sort(data, start, mid);
        var rightCount = sort(data, mid + 1, end);
        
        // merge(data, start, mid, end);       
        var count = 0;
        
        var left = data.slice(start, mid + 1);
        var right = data.slice(mid + 1, end + 1);

        var k = end;
        var i = left.length - 1, j = right.length - 1;

        while (i >= 0 && j >= 0) {
            if (left[i] > right[j]) {
                count += j + 1;
                data[k--] = left[i--];
            } else {
                data[k--] = right[j--];
            }
        }

        while (i >= 0) {
            data[k--] = left[i--];
        }
        while (j >= 0) {
            data[k--] = right[j--];
        }
        
        return leftCount + rightCount + count;
    } else {
        return 0;
    }
}

// function merge(data, start, mid, end) {
//     var left = data.slice(start, mid + 1);
//     var right = data.slice(mid + 1, end + 1);

//     var k = end;
//     var i = left.length - 1, j = right.length - 1;

//     while (i >= 0 && j >= 0) {
//         if (left[i] > right[j]) {
//             count += j + 1;
//             data[k--] = left[i--];
//         } else {
//             data[k--] = right[j--];
//         }
//     }

//     while (i >= 0) {
//         data[k--] = left[i--];
//     }
//     while (j >= 0) {
//         data[k--] = right[j--];
//     }

//     console.log(data);
// }