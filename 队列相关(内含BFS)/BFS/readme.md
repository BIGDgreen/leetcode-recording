# BFS：广度优先搜索
用于找出从根节点到目标节点的**最短路径**

> 在特定问题中执行 BFS 之前确定结点和边缘非常重要。通常，结点将是实际结点或是状态，而边缘将是实际边缘或可能的转换。

# BFS框架
```js
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
```
