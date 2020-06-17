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
var detectCycle = function (head) {
    if (head === null || head.next === null) return null;

    // 获取相遇节点
    function getIntersect(head) {
        let fast = head, slow = head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                return slow;
            }
        }
        return null
    }

    const intersect = getIntersect(head);
    if (intersect === null) {
        return null;
    }
    let p1 = head, p2 = intersect;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};