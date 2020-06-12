/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    const n = nums.length
    if (!nums || n < 3) return res;
    nums.sort((a, b) => a - b)
    if (nums[0] <= 0 && nums[n - 1] >= 0) { // 排除掉全部数同号的情况
        for (let first = 0; first < n - 2; first++) {
            if (nums[first] > 0) break   // 第一个数必须是非正数
            if (first > 0 && nums[first] === nums[first - 1]) continue; // 去重
            let second = first + 1;
            let last = n - 1;
            while (second < last) {
                if (nums[first] * nums[last] > 0) break  // 三数同号
                let sum = nums[first] + nums[second] + nums[last]
                if (sum === 0) {
                    res.push([nums[first], nums[second], nums[last]])
                    while (second < last && nums[second] === nums[second + 1]) second++; // 去重
                    while (second < last && nums[last] === nums[last - 1]) last--; // 去重
                    second++
                    last--
                }
                else if (sum > 0) {   // 结果大了，last左移，并跳过重复值
                    last--
                }
                else if (sum < 0) {
                    second++
                }
            }
        }
    }
    return res
};