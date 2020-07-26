/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    backtrack([])
    return res;

    function backtrack(path) {
        if (path.length === nums.length) {
            res.push(path.slice());
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) {
                continue;
            }
            path.push(nums[i]);
            backtrack(path);
            path.pop();
        }
    }
};
// @lc code=end

console.log(permute([1, 2, 3]));