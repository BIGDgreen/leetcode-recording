/**
 * 1371. 每个元音包含偶数次的最长子字符串
 * 给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：
 * 每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。
 * 
 * 状态压缩 + 哈希表 + 前缀和
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    let res = 0;    // 最长满足条件的子字符长度
    const letters = { 'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16 };
    let pattern = 0;    // pattern从0(00000)到31(11111)，每一位对应aeiou，出现奇数次为1，偶数次为0
    let hashmap = {0: -1};      // {pattern: index}
    // 遍历s串
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);   // 当前字符
        if (letters[ch] !== undefined) {
            // 当前字符为元音字母，异或更新pattern
            pattern ^= letters[ch];
            if(hashmap[pattern] === undefined) {
                // 记录状态pattern第一次出现的位置
                hashmap[pattern] = i;
            }
        }
        let dis = i - hashmap[pattern];
        res = Math.max(res, dis);
    }
    return res;
};
console.log(findTheLongestSubstring("eleetminicoworoep"))
// console.log(findTheLongestSubstring("oumzgd"))