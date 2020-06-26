/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    if (head === null) return null;
    let p = head;
    while (p !== null) {
        let q = p;
        while (q.next !== null) {
            if (q.next.val === p.val) {
                q.next = q.next.next;
            } else {
                q = q.next;
            }
        }
        p = p.next;
    }
    return head;
};