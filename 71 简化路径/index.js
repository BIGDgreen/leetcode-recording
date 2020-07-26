/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    const pathArr = path.split('/');
    for (let i = 0, len = pathArr.length; i < len; i++) {
        let cur = pathArr[i];
        if (cur === '.' || cur === '') {
            continue;
        } else if (cur === '..') {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }
    return '/' + stack.join('/');
};
// @lc code=end

