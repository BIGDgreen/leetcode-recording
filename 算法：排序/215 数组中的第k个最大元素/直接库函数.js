/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const sortedNums = nums.sort((a, b) => b - a);
    return nums.sort((a, b) => b - a)[k - 1];
};