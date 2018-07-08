function quickSort(list) {
    if (list.length == 0) return [];

    var small = [];
    var large = [];
    var base = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < base) {
            small.push(list[i]);
        } else {
            large.push(list[i]);
        }
    }
    return quickSort(small).concat(base, quickSort(large));
}

var list = [2,1,5,3,4];
console.log(quickSort(list));

