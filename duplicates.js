// 题目描述
// 找出数组 arr 中重复出现过的元素
// input: [1, 2, 4, 4, 3, 3, 1, 5, 3]
// output: [1, 3, 4]

function duplicates(arr) {
    var result = [];
    arr.sort();
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1] && result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);  // [1, 3, 4]