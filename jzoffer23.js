// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

// 思路：后序遍历，最后一个是根节点，前面应该可以根据比根节点大和比根节点小 分成左子树和右子树两组，如果不行，则返回false
// 递归解决

function VerifySquenceOfBST(sequence)
{
    // write code here
    if (sequence.length == 0) return false;
    if (sequence.length == 1) return true;
    
    var root = sequence[sequence.length - 1];
    var left = [], right = [];
    var index = 0;
    while (sequence[index] < root) {
        left.push(sequence[index]);
        index++;
    }
    for (var i = index; i < sequence.length - 1; i++) {
        if (sequence[i] > root) right.push(sequence[i]);
        else return false;
    }
    
    if (left.length == 0) return VerifySquenceOfBST(right);
    else if (right.length == 0) return VerifySquenceOfBST(left);
    else return VerifySquenceOfBST(left) && VerifySquenceOfBST(right);
}