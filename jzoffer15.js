// 题目描述
// 输入一个链表，反转链表后，输出链表的所有元素。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    // 空链表或单个节点链表直接返回自身
    if (pHead == null || pHead.next == null) return pHead;
    
    var current = pHead;
    var prev = null;
    var next = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}