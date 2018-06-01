// 题目描述
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

// 和上一题一样，只是不用定期旋转数组

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if (pRoot == null) return [];
    
    var queue = [], result = [];
    var tmp = [], tmpdata = [];
    tmp.push(pRoot);
    tmpdata.push(pRoot.val);
    queue.push(tmp);
    result.push(tmpdata);

    while (queue.length > 0) {
        var nodes = queue.shift();
        var tmp = [], tmpdata = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].left) {
                tmp.push(nodes[i].left);
                tmpdata.push(nodes[i].left.val);
            }
            if (nodes[i].right) {
                tmp.push(nodes[i].right);
                tmpdata.push(nodes[i].right.val);
            }
        }
        if (tmp.length > 0) {
            queue.push(tmp);
            result.push(tmpdata);
        }
    }

    return result;
}