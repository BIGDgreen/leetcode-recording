/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString()
    const n = x.length
    for (let i = 0; i < n / 2; i++) {
        if (x[i] !== x[n - i - 1]) return false
    }
    return true
};