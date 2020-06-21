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
    let dummyHead = new ListNode(0)
    dummyHead.next = head
    let p = q = dummyHead
    for (let i = 0; i <= n; i++) {
        p = p.next
    }
    while (p !== null) {
        p = p.next
        q = q.next
    }
    q.next = q.next.next
    return dummyHead.next
};