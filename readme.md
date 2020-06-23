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
## 5. 将两数的**相乘操作**转化为**位运算和加法**
简单来说就是将一个数转为二进制形式，用2的幂的和来替代这个数，然后另一个数分别乘以2的幂。

比如，`12 * 13`：
```
13(1101) = 2^3 + 2^2 + 2^0

12 * 13 = 12 * ( 2^3 + 2^2 + 2^0 )
        = (12 << 3) + (12 << 2) + (12 << 0)
```

这也被叫做俄罗斯民间乘法，具体可以看这篇文章：[俄罗斯农民乘法](https://blog.csdn.net/iteye_4501/article/details/81682160)。

# 6. 最短：二叉树最短路径

# 7. 滚动数组优化动态规划的空间复杂度
例题：面试题46

缺点：时间换空间，会覆盖原数组

# 8. 双指针
当我们需要枚举数组中的两个元素时，如果我们发现随着第一个元素的递增，第二个元素是递减的，那么就可以使用双指针的方法，将枚举的时间复杂度从 `O(N^2)` 减少至 `O(N)`。

例题：15 三数之和

## 9. 关于时间限制
O(n^2)能过的数据规模大概在1000左右