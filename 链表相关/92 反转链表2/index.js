/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-29 11:45:18
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-29 14:09:49
 * @FilePath     : \leetcode\链表相关\92 反转链表2\index.js
 */
/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (head == null) {
        return null;
    }
    let pre = null, cur = head;
    while (m > 1) {
        pre = cur;
        cur = cur.next;
        m--;
        n--;
    }
    let con = pre, tail = cur;

    let nextTmp = null
    while (n > 0) {
        nextTmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTmp;
        n--;
    }

    if (con != null) {
        con.next = pre;
    } else {
        head = pre;
    }

    tail.next = cur;
    return head;
};
// @lc code=end

