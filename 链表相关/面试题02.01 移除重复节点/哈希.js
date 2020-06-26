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
    let hashmap = new Set([head.val]);
    let pos = head;
    while (pos.next !== null) {
        const cur = pos.next;
        if (hashmap.has(cur.val)) {
            pos.next = pos.next.next
        } else {
            pos = pos.next;
            hashmap.add(cur.val)
        }
    }
    return head;
};