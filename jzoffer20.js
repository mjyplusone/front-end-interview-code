// 题目描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。

var result = [];
function push(node)
{
    // write code here
    return result.push(node);
}
function pop()
{
    // write code here
    return result.pop();
}
function top()
{
    // write code here
    if (result.length > 0)
        return result[result.length - 1];
    else 
        return null;
}
function min()
{
    // write code here
    if (result.length == 0) return;
    return Math.min.apply(null, result);
}