// 题目描述
// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    // write code here
    if (pRoot == null) return true;
    
    return isSame(pRoot.left, pRoot.right);
}

function isSame (pLeft, pRight) {
    if (pLeft == null && pRight == null) return true;
    if (pLeft == null || pRight == null) return false;
    if (pLeft.val != pRight.val) return false;
    return isSame(pLeft.left, pRight.right) && isSame(pLeft.right, pRight.left);
}