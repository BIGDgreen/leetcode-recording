/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 后序遍历：左右根
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let stack = [], res = [];
    root && (stack.push(root));
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            stack.push(node);
            stack.push(null);
            node.right && (stack.push(node.right));
            node.left && (stack.push(node.left));
        } else {
            res.push(stack.pop().val);
        }
    }
    return res;
};
// @lc code=end

