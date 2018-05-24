// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// 解题思路
//     前序排列顺序为 根-左-右，中序排列为左-根-右。
//     那么如题根为1。
//     则根据中序遍历序列则可以得到左子树{4,7,2,}和右子树{5,3,8,6}。
//     又根据前序遍历则可以得到左子树的根为2，右子树的根为3。
//     重复3,4步。
//     直到左右子树皆为空时即可重建二叉树如图。

function reConstructBinaryTree(pre, vin)
{
    // write code here
    // 这个判断不能少
    if(pre.length == 0 || vin.length == 0){
        return null;
    };
    
    var rootIndex = vin.indexOf(pre[0]);
    var left = vin.slice(0, rootIndex);
    var right = vin.slice(rootIndex + 1);
    
    var root = new TreeNode(pre[0]);
    root.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), left);
    root.right = reConstructBinaryTree(pre.slice(rootIndex + 1), right);
    return root;
}