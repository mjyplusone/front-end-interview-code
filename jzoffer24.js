// 题目描述
// 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

// 思考：
// 1、DFS
// 2、每次跳出dfs函数时，弹出path中最后一个节点，但是不用改变sum，因为sum基本类型的值传递，传递值的副本，不会相互影响；path引用类型的值传递，传递指向对象的地址，会相互影响
// 3、dfs函数要写在FindPath函数内部，才能使用FindPath函数中定义的result。因为词法作用域由函数声明时所处的位置决定。
// 定义在函数中的函数，dfs其实是个闭包，可以沿着作用域链访问外层函数中的变量result 

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
    var result = [];
    
    if (root == null) return result;
    
    dfs(root, 0, []);
    
    function dfs(node, sum, path) {
        sum += node.val;
        path.push(node.val);
        if (sum == expectNumber && node.left == null && node.right == null) {
            result.push(path.slice(0));
        }
        if (node.left) dfs(node.left, sum, path);
        if (node.right) dfs(node.right, sum, path);
        path.pop();
    }
    
    return result;
}