/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (head === null) return null
    let dummyHead = new Node(0, null, head, null)
    flatten_dfs(dummyHead, head)
    dummyHead.next.prev = null
    return dummyHead.next
    function flatten_dfs(prev, cur) {
        if (cur === null) return prev
        cur.prev = prev
        prev.next = cur
        const tempNext = cur.next
        const tail = flatten_dfs(cur, cur.child)
        cur.child = null

        return flatten_dfs(tail, tempNext)
    }
};