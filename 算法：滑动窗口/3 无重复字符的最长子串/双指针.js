/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let right = 0, left = 0;
    let window = new Map();
    let res = 0;
    while (right < s.length) {
        let c1 = s[right];
        let curNum = window.get(c1) || 0;
        window.set(c1, curNum + 1);
        right++;
        while (window.get(c1) > 1) {
            let c2 = s[left];
            left++;
            window.set(c2, window.get(c2) - 1);
        }
        res = Math.max(res, right - left);
    }
    return res;
};
// @lc code=end

