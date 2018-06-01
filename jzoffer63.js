// 题目描述
// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
// 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

// 方法1：排序后直接计算，超时!
// var nums = [];
// function Insert(num)
// {
//     // write code here
//     nums.push(num);
// }
// function GetMedian(){
// 	// write code here
//     nums.sort((num1, num2) => {
//         return num1 - num2;
//     });
//     if (nums.length % 2 != 0) {
//         return nums[Math.floor(nums.length / 2)];
//     } else {
//         return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
//     }
// }


// 方法2：大小根堆
// 大小顶堆，数据流传输时，第偶个数，存入大顶堆中，然后将大顶堆中最大元素取出放入小顶堆中，第奇个数，存入小顶堆，然后将小顶堆中最小元素取出放入大顶堆中。最后小顶堆存放的元素都大于大顶堆存放元素。
// 当数量为偶数时候，访问大顶堆中最大元素和小顶堆中最小元素平均值，当数量为奇数时，访问小顶堆中最小元素。
var maxheap = [], minheap = [], count = 1;
function Insert(num)
{
    // write code here
    if (count % 2 != 0) {
        maxheap.push(num);
        maxheap.sort((num1, num2) => {
            return num2 - num1;
        });
        // 大根堆中最大值放入小根堆
        minheap.push(maxheap.shift());
        minheap.sort((num1, num2) => {
            return num1 - num2;
        });
    } else {
        minheap.push(num);
        minheap.sort((num1, num2) => {
            return num1 - num2;
        });
        // 小根堆中最小值放入大根堆
        maxheap.push(minheap.shift());
        maxheap.sort((num1, num2) => {
            return num2 - num1;
        });
    }
    count++;
}
function GetMedian(){
	// write code here
    if ((count - 1) % 2 != 0) {
        return minheap[0];
    } else {
        return (maxheap[0] + minheap[0]) / 2;
    }
}

Insert(2);
Insert(4);
Insert(1);
Insert(3);
Insert(5);
Insert(6);

console.log(GetMedian());