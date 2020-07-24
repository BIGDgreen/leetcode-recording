/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return [];
    let res = [];
    function helper(node, level) {
        if (level === res.length) {
            res.push([])
        }
        res[level].push(node.val);
        node.left && (helper(node.left, level + 1));
        node.right && (helper(node.right, level + 1));
    }
    helper(root, 0);
    return res;
};
// @lc code=end

