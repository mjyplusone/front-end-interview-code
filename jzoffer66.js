// 题目描述
// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

// 方法1：递归
function movingCount(threshold, rows, cols)
{
    // write code here
    if (threshold < 1 || rows < 1 || cols < 1) return 0;
    
    var count = 0;
    var visited = [];
    for (var i = 0; i < rows; i++) {
        var tmp = [];
        for (var j = 0; j < cols; j++) {
            tmp.push(false);
        }
        visited.push(tmp);
    }
    count = movingCountPath(threshold, rows, cols, 0, 0, visited);
    
    return count;
}

function movingCountPath(threshold, rows, cols, row, col, visited) {
    var count = 0;
    if (row >= 0 && row < rows && col >= 0 && col < cols &&
        sum(row, col) <= threshold && visited[row][col] == false) {
        visited[row][col] = true;
        count = 1 + movingCountPath(threshold, rows, cols, row + 1, col, visited)
                  + movingCountPath(threshold, rows, cols, row - 1, col, visited)
                  + movingCountPath(threshold, rows, cols, row, col + 1, visited)
                  + movingCountPath(threshold, rows, cols, row, col - 1, visited);
    }
    return count;
}

function sum(row, col) {
    var num = [];
    num = row.toString().split('').concat(col.toString().split(''));
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    return sum;
}


console.log(movingCount(5, 10, 10));   // 21
console.log(movingCount(4, 4, 4));   // 13
console.log(movingCount(15, 20, 20));   // 359
console.log(movingCount(10, 1, 100));   // 29
