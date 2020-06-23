/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (BigInt('0B' + a) + BigInt('0B' + b)).toString(2)
};