/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    let res = [];
    let tmp = 1;  // 保存前缀积/后缀积，初始化为1
    // 前缀积
    for(let i = 0; i < n; i++) {    // 正向
        res[i] = tmp;
        tmp *= nums[i];
    }
    // 后缀积
    tmp = 1;
    for(let i = n - 1; i >= 0; i--) {   // 反向
        res[i] *= tmp;
        tmp *= nums[i];
    }
    return res;
};
// @lc code=end

