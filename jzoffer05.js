// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 测试用例:
// ["PSH1","PSH2","PSH3","POP","POP","PSH4","POP","PSH5","POP","POP"]

// 对应输出应该为:
// 1,2,3,4,5

var stack1 = [];
var stack2 = [];
function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    tmp = stack1.pop();
    while (tmp) {
        stack2.push(tmp);
        tmp = stack1.pop();
    }
    var result = stack2.pop();
    // 注意，每次pop后要把stack2中剩下的值重新压回stack1，防止有新的push
    tmp = stack2.pop();
    while (tmp) {
        stack1.push(tmp);
        tmp = stack2.pop();
    }
    return result;
}