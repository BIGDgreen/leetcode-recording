/*
 * @Author       : BigDgreen
 * @Date         : 2020-05-31 21:19:11
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 19:32:37
 * @FilePath     : \leetcode\二叉树相关\101 对称二叉树\递归.js
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
  const check = (left, right) => {
    if (!left && !right) return true // 左右子树都不存在 也是对称的 
    if (left && right) {             // 左右子树都存在，要继续判断
      return left.val === right.val &&   // 左右子树的顶点值要相等
        check(left.left, right.right) && // 左子树的left和右子树的right相等
        check(left.right, right.left)    // 左子树的right和右子树的left相等
    }
    return false;   // 左子树和右子树有一个不存在
  }
  return !root || check(root.left, root.right); // 空树也是对称的
};
// @lc code=end