/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null
    let node = new Node(), tmp = node, map = new Map()
    let cur = head
    while (cur) {
        tmp.val = cur.val
        tmp.next = cur.next ? new Node() : null
        map.set(cur, tmp)
        cur = cur.next
        tmp = tmp.next
    }
    cur = head
    tmp = node
    while (cur) {
        tmp.random = cur.random ? map.get(cur.random) : null
        tmp = tmp.next
        cur = cur.next
    }
    return node
};