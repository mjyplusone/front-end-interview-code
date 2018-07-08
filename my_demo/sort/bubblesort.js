function bubbleSort(list) {
    for (var i = 0; i < list.length; i++) {
        var flag = false;
        for (var j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                var tmp;
                tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
                flag = true;
            }
        }
        if (!flag) break;
    }
}

var list = [2,1,5,3,4];
bubbleSort(list);
console.log(list);