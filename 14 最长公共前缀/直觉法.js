/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = '';
    for (const index in strs[0]) {
        let char = strs[0][index];  // 第一个字符串中的当前被遍历到的字符
        for (let i = 1, len = strs.length; i < len; i++) {
            if (strs[i].length < index || strs[i][index] !== char) {    // 当前字符串遍历完了或者与第一个字符串的对应字符不相等
                return res;
            }
        }
        res += char;
    }
    return res;
};
// @lc code=end
