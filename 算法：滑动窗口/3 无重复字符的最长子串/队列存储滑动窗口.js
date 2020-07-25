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
    let max = 0;    // 记录最大长度
    let queue = []; // 滑动窗口队列
    for (let i = 0, len = s.length; i < len; i++) {
        let cur = s[i];
        let index = queue.indexOf(cur); // 当前字符出现的位置
        if (index !== -1) {
            // 出现过，把index前面的元素都删除
            queue.splice(0, index + 1);
        }
        queue.push(cur);
        // 更新最大长度
        max = Math.max(max, queue.length);
    }
    return max;
};
// @lc code=end

