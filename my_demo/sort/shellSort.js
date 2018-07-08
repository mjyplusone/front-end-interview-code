function shellSort(list) {
    for (gap = Math.floor(list.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < list.length; i++) {
            var j = i;
            while (j >= gap && list[j] < list[j - gap]) {
                var tmp;
                tmp = list[j];
                list[j] = list[j - gap];
                list[j - gap] = tmp;
                j -= gap;
            }
        }
    }
}

var list = [2,1,5,3,4];
shellSort(list);
console.log(list);
