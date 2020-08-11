/*
 * @Author       : BigDgreen
 * @Date         : 2020-08-06 17:35:53
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-08-08 15:26:16
 * @FilePath     : \leetcode\算法：动态规划\322 零钱兑换\index.js
 */
/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);    // 初始化为最大值
    dp[0] = 0;  // base case
    for (let i = 0, len1 = dp.length; i < len1; i++) {
        for (let j = 0, len2 = coins.length; j < len2; j++) {
            let coin = coins[j];
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount];
};
// @lc code=end

