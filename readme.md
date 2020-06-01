# js刷leetcode算法的技巧总结
## 1. 简化console.log
   将`console.log`函数提出来，这样，在代码提交的时候直接将`console`函数置空即可。 
```js
const log = console.log.bind(console);
// const log = _ => {};
```

## 2. 关于二叉树
   DFS：递归
   BFS：队列
## 3. 利用栈可以达到**空间换时间**的效果
## 4. 设置哨兵可以**避免特殊情况**的讨论