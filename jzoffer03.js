// 题目描述
// 输入一个链表，从尾到头打印链表每个节点的值。
// 注意从尾到头
// 坑：牛客网默认head节点也会存储实际内容了,要求把head也输出

function printListFromTailToHead(head)
{
    // write code here
    var result = [];
    var current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result.reverse();
}
