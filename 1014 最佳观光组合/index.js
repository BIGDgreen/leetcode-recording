/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let res = 0, max = A[0] + 0
    const n = A.length
    for (let j = 1; j < n; j++) {
        res = Math.max(res, max + A[j] - j)
        max = Math.max(max, A[j] + j)
    }
    return res
};