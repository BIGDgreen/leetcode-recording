/*
 * @Author       : BigDgreen
 * @Date         : 2020-08-08 17:02:15
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-08-08 21:30:19
 * @FilePath     : \leetcode\算法：动态规划\494 目标和\dp.js
 */
/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * 添加备忘录
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (nums.length === 0) return 0;
    let mem = new Map();
    return dp(nums, 0, S);

    function dp(nums, i, rest) {
        if (i === nums.length) {
            if (rest === 0) {
                return 1;
            }
            return 0;
        }
        let key = i + ',' + rest;
        if (mem.has(key)) {
            return mem.get(key);
        }
        let result = dp(nums, i + 1, rest + nums[i]) + dp(nums, i + 1, rest - nums[i]);
        mem.set(key, result);
        return result;
    }
};
// @lc code=end

