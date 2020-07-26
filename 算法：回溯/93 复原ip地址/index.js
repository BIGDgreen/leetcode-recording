/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) {
        return []
    }
    let res = []
    backtrack(0, '', s)
    return res
    /**
     * 判断整数的正确性
     * @param {string} val
     * @return {boolean}
     */
    function isValid(val) {
        return !(val < 0 || val > 255 || (val[0] == 0 && val.length > 1));
    }
    /**
     * 回溯函数
     * @param {number} cnt
     * @param {string} currStr
     * @param {string} restStr
     * @return {void}
     */
    function backtrack(cnt, currStr, restStr) {
        if (cnt >= 4) {
            // 如果刚好四个就存进去
            if (!restStr && cnt === 4) {
                res.push(currStr)
            }
            return
        }
        for (let i = 1; i < 4; i++) {
            const curr = restStr.slice(0, i)
            // 切分的整数格式不对或者切分的时候超过 restStr 的长度
            // 那么就结束递归吧，没有必要再走下去
            if (!isValid(curr) || i > restStr.length) {
                return
            }
            backtrack(cnt + 1, currStr ? `${currStr}.${curr}` : curr, restStr.slice(i))
        }
    }

}
// @lc code=end

