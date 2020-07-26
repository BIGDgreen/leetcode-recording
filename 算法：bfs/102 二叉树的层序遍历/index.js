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
    let queue = [], res = [];
    queue.push(root);
    while (queue && queue.length > 0) {
        let n = queue.length;
        res.push([]);
        for (let i = 0; i < n; i++) {
            const node = queue.pop();
            res[res.length - 1].push(node.val);
            node.left && (queue.unshift(node.left));
            node.right && (queue.unshift(node.right));
        }
    }
    return res;
};
// @lc code=end

