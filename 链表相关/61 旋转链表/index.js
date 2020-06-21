/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) return null
    if (head.next === null) return head
    let old_tail = head
    let n = 1
    while (old_tail.next !== null) {
        old_tail = old_tail.next
        n++
    }
    old_tail.next = head // 尾节点
    let step = n - k % n - 1
    let new_tail = head
    while (step--) {
        new_tail = new_tail.next
    }
    const new_head = new_tail.next
    new_tail.next = null
    return new_head
};
