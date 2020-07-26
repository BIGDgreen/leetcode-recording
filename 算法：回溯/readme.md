# 回溯算法
解决的典型问题：排列问题。
## 框架
```js
let result = [];
function backtrack(路径, 选择列表) {
    if(满足结束条件) {
        result.push(路径)
    }
    
    for (选择 in 选择列表){
        做选择
        backtrack(路径, 选择列表)
        撤销选择
    }
}
```
