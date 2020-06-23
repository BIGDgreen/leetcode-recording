/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [];
    const n = T.length;
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const preIndex = stack.pop();
            res[preIndex] = i - preIndex;
        }
        stack.push(i)
    }
    return res
};