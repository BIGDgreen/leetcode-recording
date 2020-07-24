/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * 先序遍历：根左右
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let stack = [], res = [];
    root && (stack.push(root));
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            node.right && (stack.push(node.right));
            node.left && (stack.push(node.left));
            stack.push(node);
            stack.push(null);
        } else {
            res.push(stack.pop().val);
        }
    }
    return res;
};
// @lc code=end
