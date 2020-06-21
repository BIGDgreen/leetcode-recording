/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p1 = head, p2 = head
    for (i = 0; i < n; i++) {
        p1 = p1.next
    }
    if (p1 === null) { // 删除第一个节点
        head = head.next
        return head
    }
    p1 = p1.next
    while (p1 !== null) {
        p1 = p1.next
        p2 = p2.next
    }
    if (p1 === null) { // 删除p2+1位置处的节点
        p2.next = p2.next.next
    }
    return head
};