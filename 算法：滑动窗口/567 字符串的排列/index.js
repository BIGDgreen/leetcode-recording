/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let left = right = 0;
    let need = new Map();
    let window = new Map();
    let valid = 0;
    for (let c of s1) {
        let curNum = need.get(c) || 0;
        need.set(c, curNum + 1);
        window.set(c, 0);
    }

    while (right < s2.length) {
        let c1 = s2[right];
        right++;
        if (need.has(c1)) {
            window.set(c1, window.get(c1) + 1);
            if (window.get(c1) === need.get(c1)) {
                valid++;
            }
        }
        while (right - left >= s1.length) {
            if (valid === need.size) return true;
            let c2 = s2[left];
            left++;
            if (need.has(c2)) {
                if (window.get(c2) === need.get(c2)) {
                    valid--;
                }
                window.set(c2, window.get(c2) - 1);
            }
        }
    }
    return false;
};
// @lc code=end

console.log(checkInclusion("ab", "eidboaoo"));
