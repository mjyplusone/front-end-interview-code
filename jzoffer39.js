// 题目描述
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

// 平衡二叉树：空树 或者 左子树和右子树的深度之差不超过1

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot)
{
    // write code here
    if (pRoot == null) return true;
    
    // 注意这里的写法，要return false的情况
    if (Math.abs(treeDepth(pRoot.left) - treeDepth(pRoot.right)) > 1) {
        return false;
    }
    
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function treeDepth(root) {
    if (root == null) return 0;
    var depth = 0;
    dfs(root, 0)
    
    function dfs(node, len) {
        len++;
        if (node.left) dfs(node.left, len);
        if (node.right) dfs(node.right, len);
        if (len > depth) depth = len;
    }
    
    return depth;
}