function mergeSort(list) {
    if (list.length < 2) return list;
    var middle = Math.floor(list.length / 2);
    var leftList = list.slice(0, middle);
    var rightList = list.slice(middle);
    return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length > 0) {
        result.push(left.shift());
    }
    while (right.length > 0) {
        result.push(right.shift());
    }

    return result;
}

var list = [2,1,5,3,4];
console.log(mergeSort(list));


