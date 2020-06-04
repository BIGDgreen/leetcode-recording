// const log = console.log.bind(console);
const log = _ => {};
var productExceptSelf = function(nums) {
    const n = nums.length;
    let res = [];
    let tmp = 1;  // 保存前缀积/后缀积，初始化为1
    // 前缀积
    for(let i = 0; i < n; i++) {    // 正向
        res[i] = tmp;   // tmp此时为前缀积
        tmp *= nums[i];
    }
    // 后缀积
    tmp = 1;
    for(let i = n - 1; i >= 0; i--) {   // 反向
        res[i] *= tmp;  // tmp此时为后缀积
        tmp *= nums[i];
    }
    return res;
};

log(productExceptSelf([1, 2, 3, 4]));
