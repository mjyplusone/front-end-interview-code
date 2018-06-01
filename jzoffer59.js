// 题目描述
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if (pRoot == null) return [];
    var dir = true;
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
            // 反转数组
            if (dir) tmpdata.reverse();
            dir = !dir;
            result.push(tmpdata);
        }
    }

    return result;
}