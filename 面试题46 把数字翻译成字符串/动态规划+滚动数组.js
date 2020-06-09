/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    const str = num.toString()
    const n = str.length
    let pre = cur = 1
    for (let i = 2; i <= n; i++) {
        const tmp = Number(str[i - 2] + str[i - 1])
        if (tmp >= 10 && tmp <= 25) {
            // dp[i] = dp[i - 1] + dp[i - 2]
            const t = cur
            cur += pre  // 更新当前状态
            pre = t // 更新上一个状态
        } else {
            // dp[i] = dp[i - 1]
            pre = cur
        }
    }
    return cur
};