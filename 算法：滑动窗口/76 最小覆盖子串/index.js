/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {   // t中可能有重复字符
    let right = 0, left = 0;
    let window = new Map(), need = new Map();
    let valid = 0;  // 记录合格的元素数量
    let start = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    for (let c of t) {
        // 记录需要的字符及字符个数
        let curNum = need.get(c) || 0;
        need.set(c, curNum + 1);
        // 初始化移动窗口中的值
        window.set(c, 0);
    }

    while (right < s.length) {
        let c1 = s[right];
        // 向右移动窗口
        right++;
        if (need.has(c1)) {
            window.set(c1, window.get(c1) + 1);
            if (window.get(c1) === need.get(c1)) {
                valid++;
            }
        }
        while (valid === need.size) {
            if (right - left < minLength) {
                start = left;
                minLength = right - left;
            }
            let c2 = s[left];
            left++;
            if (need.has(c2)) {
                if (window.get(c2) === need.get(c2)) {
                    valid--;
                }
                window.set(c2, window.get(c2) - 1);
            }
        }
    }
    return minLength === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLength);
};
// @lc code=end

