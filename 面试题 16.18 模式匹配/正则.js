/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
    if (pattern === '') return value === ''
    let regExp = ''
    let a = ''
    let b = ''
    let group = 1
    const patternArr = pattern.split('')
    for (let item of patternArr) {
        if (item === 'a') {
            if (a) {
                regExp += a
            } else {
                regExp += '(\\w*)'
                a = `\\${group++}`
            }
        }
        if (item === 'b') {
            if (b) {
                regExp += b
            } else {
                regExp += '(\\w*)'
                b = `\\${group++}`
            }
        }
    }
    regExp = new RegExp(`^${regExp}$`)
    const match = value.match(regExp)
    return !!match && match[1] !== match[2]
};