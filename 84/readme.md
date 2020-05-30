# leetcode84 柱状图中最大的矩形
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png)

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png)

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

**示例：**
```
输入: [2,1,5,6,2,3]
输出: 10
```

# 题解
一开始用的是暴力枚举+rightActive优化。结果通过了，但执行用时1656ms，显然还有优化的空间。

暴力枚举就是固定高度，找最大宽度。高度就是当前数组元素的值，而宽度就是分别左右遍历大于当前元素的值。这里的rightActive优化是指，如果一个元素的下一个数大于自己，那么当遍历到下一个数时，它左边的数一定是小于自己的，因此左边就不用再遍历了。通过rightActive来记录这个状态。当rightActive为false的时候才遍历左边。
