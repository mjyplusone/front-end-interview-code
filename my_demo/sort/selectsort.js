function selectSort(list) {
    for (var i = 0; i < list.length; i++) {
        var min = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp;
            tmp = list[i];
            list[i] = list[min];
            list[min] = tmp;
        }
    }
}

var list = [2,1,5,3,4];
selectSort(list);
console.log(list);


