// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

// 思路：BFS

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here    
    var result = [];
    
    if (root == null) return result;
    
    var queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        var node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return result;
}