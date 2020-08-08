/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-30 19:35:18
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 20:28:21
 * @FilePath     : \leetcode\二叉树相关\路径总和\112.路径总和\bfs.js
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
 * 层序遍历（广度优先） 迭代
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null) return false;
    let queue_node = [root];
    let queue_val = [root.val];
    while (queue_node && queue_node.length) {
        let node = queue_node.pop();
        let val = queue_val.pop();
        if (!node.left && !node.right) {
            // 判断叶子节点
            if (val === sum) return true;
        }
        if (node.right) {
            queue_node.unshift(node.right);
            queue_val.unshift(val + node.right.val);
        }
        if (node.left) {
            queue_node.unshift(node.left);
            queue_val.unshift(val + node.left.val);
        }
    }
    return false;
};
// @lc code=end

