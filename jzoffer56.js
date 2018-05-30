// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    if (pHead == null || pHead.next == null) return pHead;
    
    // 自己加一个头节点,处理一开头就要删除的情况
    var head = {
        val: 'head',
        next: pHead
    }
    var current = pHead, prev = head;
    while (current != null && current.next != null){
        if (current.val == current.next.val) {
            while (current.next && current.val == current.next.val){
                current = current.next;
            }
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head.next;
}