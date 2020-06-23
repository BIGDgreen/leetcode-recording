function bfs(start, target) {
    let queue = [];  // 队列，保存相邻节点
    let visited = [];    // 保存访问过的元素，避免走回头路，不会走回头路的情况下可以去掉
    let step = 0; // 扩散的步数

    queue.push(start);   // 起点加入队列
    visited.push(start);

    while (queue && queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();  // 队首
            // 判断是否到达终点，这里是函数的出口
            if (cur === target) return step;
            // 将cur的相邻节点加入队列
            for (let neighbor of neighbors) {
                if (!visited.includes(neighbor)) {
                    queue.push(neighbor);
                    visited.push(neighbor);
                }
            }
        }
        step++;
    }
}