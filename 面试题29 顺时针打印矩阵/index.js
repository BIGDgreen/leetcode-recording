/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(matrix.length === 0) return [];
    const m = matrix.length;  // m行
    const n = matrix[0].length; // n列
    let l = 0, r = n - 1, u = 0, d = m - 1, res = [];   // 初始化上下左右边界和结果数组
    while(u < d && l < r) {
        for(let i = l; i < r; i++) res.push(matrix[u][i]);   // 上
        for(let i = u; i < d; i++) res.push(matrix[i][r]);   // 右
        for(let i = r; i > l ; i--) res.push(matrix[d][i]);   // 下
        for(let i = d; i > u; i--) res.push(matrix[i][l]);   // 左
        u++;
        r--;
        d--;
        l++;
    }
    if(l === r) {   // 最后剩下一列
        for(let i = u; i <= d; i++) res.push(matrix[i][l]);
    } else if(u === d) {   // 最后剩下一行
        for(let i = l; i <= r; i++) res.push(matrix[u][i]);
    }
    return res;
};