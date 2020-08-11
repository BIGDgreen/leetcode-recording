/*
 * @Author       : BigDgreen
 * @Date         : 2020-07-31 13:15:05
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-31 13:33:04
 * @FilePath     : \leetcode\算法：动态规划\509 斐波那契数\递归.js
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 带备忘录的递归
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N < 1) return 0;
    let mem = new Map();
    return helper(mem, N);

    function helper(mem, n) {
        if (n === 1 || n === 2) return 1;
        if (mem.get(n)) return mem.get(n);
        mem.set(n, helper(mem, n - 1) + helper(mem, n - 2));
        return mem.get(n);
    }
};
// @lc code=end

