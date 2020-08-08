/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-30 19:17:15
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 19:30:13
 * @FilePath     : \leetcode\二叉树相关\104 二叉树的最大深度\bfs.js
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
 * 广度优先，层序遍历，计算二叉树的深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    let res = 0;
    let queue = [];
    queue.push(root);
    while (queue && queue.length) {
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.pop();
            node.left && (queue.unshift(node.left));
            node.right && (queue.unshift(node.right));
        }
        // 一层遍历完
        res++;
    }
    return res;
};
// @lc code=end
