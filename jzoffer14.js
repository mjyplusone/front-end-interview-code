// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。
// 注意是第k个节点，不是第k个节点的值
// 思路：两个指针，先把两个指针拉开k的距离，然后两个一起移动，当后一个指针到达链表末尾时，前一个指针指向倒数第k个节点
// 注意考虑头尾边界情况

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if (head == null || k <= 0) return null;
    var front = head;
    var tail = head;
    for (var i = 0; i < k - 1; i++) {
        if (tail.next) {
            tail = tail.next
        } else {
            return null;
        }        
    }
    while (tail.next) {
        tail = tail.next;
        front = front.next;
    }
    return front;
}



