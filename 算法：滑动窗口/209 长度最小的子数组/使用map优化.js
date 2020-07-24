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
    let map = new Map();    // 存放遍历过的字符
    let max = 0;
    for (let i = 0, j = 0, len = s.length; i < len; i++) {
        // j 记录滑动窗口的起点
        let cur = s[i];
        if (map.has(cur)) {
            j = Math.max(j, map.get(cur) + 1);
        }
        max = Math.max(max, i - j + 1);
        map.set(cur, i);
    }
    return max;
};
// @lc code=end

console.log(lengthOfLongestSubstring("abba"));