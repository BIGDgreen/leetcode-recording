/*
 * @Author       : BigDgreen
 * @Date         : 2020-06-17 18:14:50
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-29 11:37:00
 * @FilePath     : \leetcode\链表相关\206 &面试题24 反转链表\递归.js
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
// 假设列表的其余部分已经被反转，现在反转它前面的部分
var reverseList = function (head) {
    if (head === null || head.next === null) return head
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};
// @lc code=end
