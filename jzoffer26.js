// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

function Convert(pRootOfTree)
{
    // write code here
    if (pRootOfTree == null) return null;
    
    // 已经转换好的列表中的最后一个节点
    var pLastNodeInList = null;
    pLastNodeInList = convertNode(pRootOfTree, pLastNodeInList);
    
    var pHeader = pLastNodeInList;
    while (pHeader.left != null) {
        pHeader = pHeader.left;
    }
    return pHeader;
}

function convertNode(pNode, pLastNodeInList) {
    if (pNode == null) return null;
    
    var current = pNode;
    
    if (current.left != null) {
        pLastNodeInList = convertNode(current.left, pLastNodeInList);
    }
    
    current.left = pLastNodeInList;
    if (pLastNodeInList != null) {
        pLastNodeInList.right = current;
    }
    pLastNodeInList = current;
    
    if (current.right != null) {
        pLastNodeInList = convertNode(current.right, pLastNodeInList);
    }

    return pLastNodeInList;
}