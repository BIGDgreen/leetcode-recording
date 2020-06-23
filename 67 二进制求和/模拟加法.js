/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const length = Math.max(a.length, b.length);
    // 对齐a、b
    arrA = a.split('')
    arrB = b.split('')
    let res = []
    let carry = 0 // 进位标志
    for (let i = length - 1; i >= 0; i--) {
        while (arrA[i] === undefined) { arrA.unshift(0) }
        while (arrB[i] === undefined) { arrB.unshift(0) }
        const sum = (+arrA[i]) + (+arrB[i]) + carry;
        res.unshift(sum % 2);
        carry = +(sum > 1);
    }
    if (carry === 1) res.unshift(1)
    return res.join('')
};