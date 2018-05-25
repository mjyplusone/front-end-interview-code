// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
// 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

// 思路 正常一圈两行两列的情况这样分组
// —— —— —— |
// |  ——  | |
// |  |  —— |
// | —— —— ——
// 一圈只有一行或一列的情况单独处理
// —— —— —— |
// |  —— —— |
// | —— —— —— 

function printMatrix(matrix)
{
    // write code here
    if (matrix == null || matrix.length == 0) return;
    var row = matrix.length;
    var col = matrix[0].length;
    var result = [];
    
    var startr = 0, endr = row - 1, startc = 0, endc = col - 1;
    
    while (result.length < row * col) {
        // 处理一圈只有一行或一列的情况
        if (startc == endc) {
            for (var i = startr; i <= endr; i++) {
                result.push(matrix[i][startc]);
            }
        } else if (startr == endr) {
            for (var i = startc; i <= endc; i++) {
                result.push(matrix[startr][i]);
            }
        } else {
            // 正常一圈两行两列情况
            for (var i = startc; i < endc; i++) {
                result.push(matrix[startr][i]);
            }
            for (var i = startr; i < endr; i++) {
                result.push(matrix[i][endc]);
            }
            for (var i = endc; i > startc; i--) {
                result.push(matrix[endr][i]);
            }
            for (var i = endr; i > startr; i--) {
                result.push(matrix[i][startc]);
            }
        }
        
        startr += 1;
        endr -= 1;
        startc += 1;
        endc -= 1;
    }
    
    return result;
}

printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
printMatrix([[1, 2, 3, 4]]);
printMatrix([[1]]);