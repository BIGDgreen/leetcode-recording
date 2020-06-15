/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    strs.sort()
    console.log(strs)
    let res = ''
    const start = strs[0]
    const end = strs[strs.length - 1]
    const minLength = Math.min(start.length, end.length)
    for (let i = 0; i < minLength; i++) {
        if (start[i] === end[i]) res += start[i]
        else break
    }
    return res
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]))