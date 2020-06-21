# leetcode142 环形链表 II
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

**说明**：不允许修改给定的链表。

**示例 1：**
```
输入：head = [3,2,0,-4], pos = 1
输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
```
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

**示例 2：**
```
输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
```
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

**示例 3：**
```
输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
```
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

# 题解
先设两个快慢指针，fast和slow，fast速度为slow的二倍。这样一来，就可以知道两个指针的首次相遇点。

![](https://s1.ax1x.com/2020/06/21/N8FNFK.jpg)

有上图中的关系可以知道`l=S2`。那么同样速度的指针走完l和S2的时间必然是相同的。所以这两个指针相遇的点就是入环点。

于是将`slow`指针留在这个位置，将`fast`指针放在最开始的`head`处。这时，将`fast`的速度变为与`slow`相同，最后返回他们的相遇点即可。
