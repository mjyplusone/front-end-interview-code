// 题目描述
// 请实现两个函数，分别用来序列化和反序列化二叉树

// 序列化指的是将一棵二叉树保存到文件中，反序列化就是从文件中读取二叉树结点值重构原来的二叉树。
// #表示null

var result = [];

function Serialize(pRoot)
{
   
    // write code here
    if (pRoot == null) {
        result.push('#');
        return;
    }
    result.push(pRoot.val);
    Serialize(pRoot.left);
    Serialize(pRoot.right);
}
function Deserialize(s)
{
    // write code here
    if (result == null || result.length < 1) return null;
    
    var data = result.shift();
    var root = null;
    if (data != '#') {
        root = new TreeNode(data);
        root.left = Deserialize(result);
        root.right = Deserialize(result);
    }
    return root;
}