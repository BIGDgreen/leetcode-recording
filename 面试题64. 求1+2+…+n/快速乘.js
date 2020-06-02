/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // n(n+1)/2
    let A = n, B = n+1, res = 0;
    (B & 1) && (res += A);  // B的二进制最后一位是1的时候res才会加A
    B >>= 1;    // B除2
    A <<= 1;    // A乘2
    // 重复14次
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    (B & 1) && (res += A);
    B >>= 1;
    A <<= 1;
    return res >> 1;
};