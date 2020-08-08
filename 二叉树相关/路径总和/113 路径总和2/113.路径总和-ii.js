/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-30 20:55:33
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 21:54:39
 * @FilePath     : \leetcode\二叉树相关\路径总和\113 路径总和2\113.路径总和-ii.js
 */
/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * DFS 递归
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const sumArray = arr => arr.reduce((a, b) => a + b)
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum, path = [], res = []) {
    if (!root) return res
    if (!root.left && !root.right) {
        path.push(root.val)
        sumArray(path) === sum && res.push(path)
        return res
    }
    root.left && pathSum(root.left, sum, [...path, root.val], res)
    root.right && pathSum(root.right, sum, [...path, root.val], res)
    return res
};
// @lc code=end

