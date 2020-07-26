/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length   // 行
    if (m === 0) return 0
    const n = grid[0].length    // 列
    let res = 0
    let queue = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++
                grid[i][j] = '0'
                queue.push([i, j])
                const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]  // 上下左右
                while (queue.length) {
                    const cur = queue.shift()   // 队列中第一个数
                    dirs.forEach(item => {  // 遍历上下左右邻居
                        const x = cur[0] + item[0]
                        const y = cur[1] + item[1]
                        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] && grid[x][y] === '1') {
                            grid[x][y] = '0'
                            queue.push([x, y])
                        }
                    })
                }
            }
        }
    }
    return res
};