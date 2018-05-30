// 题目描述
// 一个链表中包含环，请找出该链表的环的入口结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    var obj = {};
    
    var current = pHead;
    while (current) {
        if (!obj[current.val]) {
            obj[current.val] = 1;
            current = current.next;
        } else {
            return current;
        }
    }
}