/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length;  // 行
    if (m === 0) return 0;
    const n = grid[0].length;   // 列
    let res = 0;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let tmp = 0;
            if (grid[i][j] === 1) {
                tmp++;
                grid[i][j] = 0;
                queue.push([i, j]);
                const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
                while (queue.length) {
                    const cur = queue.shift();
                    dirs.forEach(dir => {
                        const x = cur[0] + dir[0];
                        const y = cur[1] + dir[1];
                        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] && grid[x][y] === 1) {
                            grid[x][y] = 0;
                            queue.push([x, y]);
                            tmp++;
                        }
                    })
                }
            }
            // console.log(tmp);
            res = Math.max(tmp, res);
        }
    }
    return res;
};
// @lc code=end
