/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums || nums.length === 0) return 0;
    nums = [...new Set(nums.sort((a,b) => a - b))];
    if(nums.length === 1) return 1;
    let res = tmp = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            tmp++;
            res = Math.max(tmp, res);
        } else {
            tmp = 1;
        }
    }
    return res;
};

let arr = [0];
console.log(longestConsecutive(arr));