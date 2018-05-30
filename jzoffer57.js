// 题目描述
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
// 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

// 这道题开始没有理解。。。要分析所有情况，找到一个规律
// 分析二叉树的下一个节点，一共有以下情况：
// 1.二叉树为空，则返回空；
// 2.节点右孩子存在，则设置一个指针从该节点的右孩子出发，一直沿着指向左子结点的指针找到的叶子节点即为下一个节点；
// 3.节点不是根节点。如果该节点是其父节点的左孩子，则返回父节点；否则继续向上遍历其父节点的父节点，重复之前的判断，返回结果。


/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    if (pNode == null) return null;
    // 有右子树，则找到右子树最左节点
    if (pNode.right != null) {
        pNode = pNode.right;
        while (pNode.left) {
            pNode = pNode.left;
        }
        return pNode;
    }
    // 没有右子树，分两种情况
    // 该节点是父节点的左孩子,则返回父节点
    // 否则，继续遍历父节点的父节点
    while (pNode.next) {
        var parent = pNode.next;
        if (parent.left == pNode) {
            return parent;
        }
        pNode = pNode.next;
    }
    return null;
}