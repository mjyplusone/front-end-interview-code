// 题目描述
// 每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

// 思路：约瑟夫环问题 循环链表

// 这样比较简洁
function LastRemaining_Solution(n, m)
{
    // write code here
    if (n < 1 || m < 1) return -1;
    
    var children = [];
    for (var i = 0; i < n; i++) {
        children.push(i);
    }
    
    var index = 0;
    var start = 0;
    while (children.length > 1) {
        var remove = (start + m - 1) % children.length;
        children.splice(remove, 1);
        start = remove;
    }
    return children[0];
}


// 写的太复杂了，用数组模拟循环链表可以简化很多
function LastRemaining_Solution(n, m)
{
    // write code here
    if (n < 1 || m < 1) return -1;
    
    var loopList = new LoopLinkList();
    loopList.insert(0, 'head');
    for (var i = 0; i < n - 1; i++) {
        loopList.insert(i + 1, i);
    }
    
    var current = loopList.head;
    var index = 0;
    while (n > 1) {
        if (current.element == 'head') current = current.next;

        index++;
        if (index == m) {
            index = 0;
            var removeNode = current;
            current = current.next;
            loopList.remove(removeNode.element);
            n--;
        } else {
            current = current.next;
        }
    }
    if (current.element == 'head') current = current.next;
    return current.element;
}

function Node(element) {
    this.element = element;
    this.next = null;
}

function LoopLinkList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find(item) {
    var current = this.head;
    if (item == 'head') return current;
    while (current.next && current.next.element != 'head' && current.next.element != item) {
        current = current.next;
    }
    if (current.next.element == 'head') {
        return false;
    } else {
        return current.next;
    }
}

function insert(element, item) {
    var newNode = new Node(element);
    var currNode = this.find(item);
    if (currNode) {
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
}

function findPrevious(item) {
    var current = this.head;
    while (current.next && current.next.element != 'head' && current.next.element != item) {
        current = current.next;
    }
    if (current.next.element == 'head') {
        return false;
    } else {
        return current;
    }
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode) {
        prevNode.next = prevNode.next.next;
    }
}

