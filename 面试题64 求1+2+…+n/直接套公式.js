/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // n(n+1) / 2 -> (n^2 + n) / 2
    return Math.pow(n, 2) + n >> 2;
};