// 题目描述
// 给定一颗二叉搜索树，请找出其中的第k大的结点。例如， 5 / \ 3 7 /\ /\ 2 4 6 8 中，按结点数值大小顺序第三个结点的值为4。

// 中序遍历，取第k个即可
// 坑：找出第k大的节点，不是节点的值。。。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    // write code here
    if (pRoot == null || k <= 0) return null;

    var result = [];
    inOrder(pRoot);
    return result[k - 1];
    
    function inOrder(pRoot) {
        if (pRoot != null) {
            inOrder(pRoot.left);
            result.push(pRoot);
            inOrder(pRoot.right);
        }
    }
}
