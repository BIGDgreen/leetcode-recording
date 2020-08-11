/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-31 13:34:14
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-31 13:40:51
 * @FilePath     : \leetcode\算法：动态规划\509 斐波那契数\dp.js
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 动态规划 + 状态压缩
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N < 1) return 0;
    if (N === 1 || N === 2) return 1;
    let prev = 1, curr = 1;
    for (let i = 3; i <= N; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
};
// @lc code=end

