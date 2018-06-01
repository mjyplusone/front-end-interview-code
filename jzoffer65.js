// 题目描述
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
// 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。


// 题目只给出一维矩阵，所以要自己根据输入的行列数判断行列
function hasPath(matrix, rows, cols, path)
{
    // write code here
    if (path.length < 0) return true;

    var visited = [];
    for (var i = 0; i < rows; i++) {
        var tmp = [];
        for (var j = 0; j < cols; j++) {
            tmp.push(false);
        }
        visited.push(tmp);
    }

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (findPath(matrix, rows, cols, i, j, path, 0, visited)) {
                return true;
            }
        }
    }
    return false;
}

function findPath(matrix, rows, cols, row, col, path, pathIndex, visited) {
    var isPath = false;
    if (row < rows && row >=0 && col < cols && col >=0 &&
        matrix[row * cols + col] == path[pathIndex] && 
        visited[row][col] == false) {

            visited[row][col] = true;
            if (pathIndex == path.length - 1) isPath = true;
            else {
                isPath = findPath(matrix, rows, cols, row - 1, col, path, pathIndex + 1, visited) ||
                         findPath(matrix, rows, cols, row + 1, col, path, pathIndex + 1, visited) ||
                         findPath(matrix, rows, cols, row, col - 1, path, pathIndex + 1, visited) ||
                         findPath(matrix, rows, cols, row, col + 1, path, pathIndex + 1, visited);
                
                if (!isPath) visited[row][col] = false;
            }

    }

    return isPath;
}

console.log(hasPath(['a', 'b', 'c', 'e', 's', 'f', 'c', 's', 'a', 'd', 'e', 'e'], 3, 4, 'bcced'));

