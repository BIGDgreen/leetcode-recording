/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-30 20:29:00
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 20:54:03
 * @FilePath     : \leetcode\二叉树相关\路径总和\112.路径总和\dfs递归.js
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * 先序遍历（深度优先） 递归
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null) return false;
    if (!root.left && !root.right) return root.val === sum;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
// @lc code=end

