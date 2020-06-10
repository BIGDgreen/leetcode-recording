/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // x为负数或者x的最后一位为0但是x不为0
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false
    // x为一位数字
    if (x < 10) return true
    // 后一半反转后的数字
    let reversedNum = 0
    while (x > reversedNum) {
        reversedNum = reversedNum * 10 + x % 10
        // 取整
        x = x / 10 | 0
    }
    return x === reversedNum || x === (reversedNum / 10 | 0)
};