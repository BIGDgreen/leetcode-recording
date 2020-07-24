/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 中序遍历：左根右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let stack = [], res = [];
    root && (stack.push(root));
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            node.right && (stack.push(node.right));
            stack.push(node);
            stack.push(null);
            node.left && (stack.push(node.left));
        } else {
            res.push(stack.pop().val);
        }
    }
    return res;
};
// @lc code=end

