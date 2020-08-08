<!--
 * @Author       : BigDgreen
 * @Date         : 2020-06-27 15:37:49
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-07-30 20:04:08
 * @FilePath     : \leetcode\二叉树相关\遍历\readme.md
--> 
# 二叉树的先/中/后序遍历套路总结
二叉树的先序遍历也是深度优先遍历，层序遍历也是广度优先遍历。

以先序遍历为例：
## 递归
```js
function fn(root) {
    return root ? [root.val, ...fn(root.left), ...fn(root.right)] : [];
}
```
按照`根左右`的顺序调用递归。

中序遍历和后序遍历分别按照`左根右`，`左右根`的顺序。

## 迭代
递归的本质就是压栈，因此直接按照递归的思路来迭代。

我们需要一个标志区分每个递归调用栈，这里使用`null`来表示。

```js
function fn(root) {
    let stack = [], res = [];
    root && (stack.push(root)); // 首先压入根节点
    while (stack.length > 0) {
        const node = stack.pop();   // 保存访问过的节点并弹出
        if (node !== null) {
            // 入栈顺序：右左根，与遍历顺序相反
            node.right && (stack.push(node.right));
            node.left && (stack.push(node.left));
            stack.push(node);   // 当前节点重新入栈
            stack.push(null);   // 在当前节点之前加入一个空节点表示已经访问过了
        } else {    // 空节点表示已经访问过了，现在处理除递归以外的内容
            res.push(stack.pop().val);  // 此时的栈顶是null的前一个节点，也就是stack.push(node)中的node
        }
    }
    return res;
}
```

这种解法的思路参考自：https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/miao-sha-quan-chang-ba-hou-lang-by-sonp/
