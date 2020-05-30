/**
 * 1371. 每个元音包含偶数次的最长子字符串
 * 给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：
 * 每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。
 * 
 * note:这里为最简单的暴力枚举法，显然会超时
 *
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    if (!s) return 0;
    // 都出现0次
    if (s.indexOf('a') === -1 && s.indexOf('e') === -1 && s.indexOf('i') === -1 && s.indexOf('o') === -1 && s.indexOf('u') === -1) {
        return s.length;
    }
    for (let i = s.length; i >= 0; i--) {
        let substr = findSubStr(s, i); // 长度为i的子串
        // console.log(substr);
        for (let j = 0; j < substr.length; j++) {
            let item = substr[j];
            const expression = !(letterAppearCount('a', item) & 1) && !(letterAppearCount('e', item) & 1)
                && !(letterAppearCount('i', item) & 1) && !(letterAppearCount('o', item) & 1) &&
                !(letterAppearCount('u', item) & 1);
            if (expression) {
                return item.length;
            }
        }
    }
    return 0;
    /**
     * 统计字母letter在str中的出现次数
     * @param {string} letter 
     * @param {string} str 
     * @return {number}
     */
    function letterAppearCount(letter, str) {
        let tmpObj = {};
        let tmpArr = str.split('');
        tmpArr.forEach(item => {
            tmpObj[item] ? tmpObj[item]++ : tmpObj[item] = 1;
        })
        return tmpObj[letter] ? tmpObj[letter] : 0;
    }

    /**
     * 寻找字符串str中长度为length的子串
     * @param {string} str 
     * @param {number} length 
     * @return {Array}
     */
    function findSubStr(str, length) {
        if (!str || length === 0 || length > str.length) return [];
        let res = [];
        for (i = 0; i < str.length - length + 1; i++) {
            res.push(str.substr(i, length));
        }
        return res;
    }
};
// console.log(findTheLongestSubstring("eleetminicoworoep"))