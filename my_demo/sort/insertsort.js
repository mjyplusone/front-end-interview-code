function insertSort(list) {
    for (var i = 1; i < list.length; i++) {
        var j = i;
        while (j > 0 && list[j] < list[j - 1]) {
            var tmp;
            tmp = list[j];
            list[j] = list[j - 1];
            list[j - 1] = tmp;
            j--;
        }
    }
}

var list = [2,1,5,3,4];
insertSort(list);
console.log(list);
