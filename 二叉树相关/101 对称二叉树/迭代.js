/*
 * @Author       : BigDgreen
 * @Date         : 2020-06-01 00:14:52
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 19:33:47
 * @FilePath     : \leetcode\二叉树相关\101 对称二叉树\迭代.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    let queue = [root.left, root.right];
    while (queue.length) {
        let left = queue.unshift();
        let right = queue.unshift();
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;
        queue.push(left.left, right.right, left.right, right.left);
    }
    return true
};
  // @lc code=end