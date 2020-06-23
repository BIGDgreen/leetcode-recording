/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    const start = '0000'
    if (deadends.includes(target) || deadends.includes(start)) return -1
    let visited = new Set(deadends)
    let queue = []
    visited.add(start)
    queue.push(start)
    let step = 0
    while (queue && queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();
            if (cur === target) return step;
            for (let j = 0; j < 4; j++) {
                const up = nextOne(cur, j, true)
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
                const down = nextOne(cur, j, false)
                if (!visited.has(down)) {
                    queue.push(down)
                    visited.add(down)
                }
            }
        }
        step++
    }
    return -1
};

// s[j]向上拨动一次
function nextOne(s, j, isUp) {
    const tmpArr = s.split('')
    isUp && (tmpArr[j] = tmpArr[j] === '9' ? '0' : `${+tmpArr[j] + 1}`)
    !isUp && (tmpArr[j] = tmpArr[j] === '0' ? '9' : `${+tmpArr[j] - 1}`)
    return tmpArr.join('')
}
