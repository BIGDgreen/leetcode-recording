/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length;
    let res = new Array(len1 + len2).fill(0);
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = num1[i] * num2[j];
            let p1 = i + j;
            let p2 = i + j + 1;
            mul += res[p2];
            res[p2] = mul % 10;
            res[p1] += ~~(mul / 10);
        }
    }
    // 去零
    let j = 0;
    while (j < res.length && res[j] === 0) {
        j++;
    }
    res = res.slice(j);
    return res.length === 0 ? "0" : res.join('');
};
// @lc code=end

console.log(multiply('0', '0')); 