// 题目描述
// 输入两个链表，找出它们的第一个公共结点。

// 方法1 暴力遍历  若第一个链表长度m 第二个长度n  O(mn)


// 方法2 单向链表如果有公共节点，此节点往后，两链表全部重合
// 考虑从尾节点开始比较 最后一个相同的节点即为所求 但单向链表只能从头开始比较
// 所以考虑用两个辅助栈解决 O(m+n)  空间换时间
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var stack1 = [], stack2 = [];
    var p1 = pHead1, p2 = pHead2;
    while (p1) {
        stack1.push(p1);
        p1 = p1.next;
    }
    while (p2) {
        stack2.push(p2);
        p2 = p2.next;
    }
    while (stack1.length > 0 && stack2.length > 0) {
        var node1 = stack1.pop();
        var node2 = stack2.pop();
        if (node1.val != node2.val) {
            return node1.next;
        }
    }
    // 节点全部相等的情况
    return node1;
}


// 方法3 两个链表不一样长时，先遍历一次得到长度，长链表比短链表多几个节点
// 第二次遍历 长链表先走几个节点 然后同时遍历 第一个相同节点即为公共节点
// O(m+n) 且不需要辅助栈
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    var p1 = pHead1, p2 = pHead2;
    var offset = 0;
    var flag = 0;
    while (p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    while (p1) {
        flag = 1;
        offset++;
        p1 = p1.next;
    }
    while (p2) {
        flag = -1;
        offset++;
        p2 = p2.next;
    }
    
    var p1 = pHead1, p2 = pHead2;
    while (offset > 0) {
        offset--;
        if (flag == 1) {
            p1 = p1.next;
        }
        if (flag == -1) {
            p2 = p2.next;
        }
    }
    
    while (p1 && p2) {
        if (p1.val == p2.val) {
            return p1;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
}
