/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let need = new Map();
    let window = new Map()
    let right = 0, left = 0;
    let valid = 0;
    let res = [];
    for (let c of p) {
        let curNum = need.get(c) || 0;
        need.set(c, curNum + 1);
        window.set(c, 0);
    }

    while (right < s.length) {
        let c1 = s[right];
        right++;
        if (need.has(c1)) {
            window.set(c1, window.get(c1) + 1);
            if (window.get(c1) === need.get(c1)) {
                valid++;
            }
        }
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left);
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
    return res;
};
// @lc code=end

