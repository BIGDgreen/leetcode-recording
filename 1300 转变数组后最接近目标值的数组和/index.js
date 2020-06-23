/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    let res = 0
    let sum = 0
    const n = arr.length
    arr = arr.sort((a, b) => a - b)
    const min = Math.min(arr[0], (target / n | 0))
    const max = arr[n - 1]
    for (let value = min; value <= max; value++) {
        for (let i = 0; i < n; i++) {
            const middle = arr[(n | 0)]
            if (value > middle) {

            }
        }
    }
};