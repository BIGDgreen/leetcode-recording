/*
 * @Author       : BigDgreen
 * @Date         : 2020-06-17 18:14:41
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-29 11:31:35
 * @FilePath     : \leetcode\链表相关\206 &面试题24 反转链表\迭代.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null
    let cur = head
    while (cur !== null) {
        const nextTmp = cur.next
        // 指针反转
        cur.next = pre
        // 开始下一次
        pre = cur
        cur = nextTmp
    }
    return pre
};
// @lc code=end