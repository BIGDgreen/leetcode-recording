/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return true
    let stack = []
    let map = {
        '{': '}',
        '}': '{',
        '[': ']',
        ']': '[',
        '(': ')',
        ')': '('
    }
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === map[s[i]]) stack.pop()
        else stack.push(s[i])
    }
    return stack.length === 0
};