/*
 * @Author       : BigDgreen
 * @Date         : 2020-08-08 17:10:14
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-08-08 21:23:36
 * @FilePath     : \leetcode\算法：动态规划\494 目标和\回溯.js
 */
/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * 回溯法 + 备忘录
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    if (nums.length === 0) return 0;
    let result = 0;
    backtrack(nums, 0, S);
    return result;

    function backtrack(nums, i, rest) {
        if (i === nums.length) {
            if (rest === 0) {
                result++;
            }
            return;
        }
        // 选择-号
        backtrack(nums, i + 1, rest + nums[i]);
        // 选择+号
        backtrack(nums, i + 1, rest - nums[i]);
    }
};
// @lc code=end

