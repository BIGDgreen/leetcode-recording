/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-30 19:06:27
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 19:16:08
 * @FilePath     : \leetcode\二叉树相关\104.二叉树的最大深度.js
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 深度优先，递归查找
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

