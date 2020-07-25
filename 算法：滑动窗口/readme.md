# 滑动窗口
滑动窗口常用来解决子串问题。
## 框架
```js
function slidingWindow(s, t) {
    let need = new Map();
    let window = new Map();

    // 记录需要凑齐的字符
    for(let c of t) {
        let cur = need.get(c) || 0;
        need.set(c, cur+1);
    }

    let left = 0, right = 0;
    let valid = 0;  // 记录窗口中满足need条件的字符个数
    while(right < s.length) {
        let c = s[right];   // 将移入窗口的字符
        right ++;   // 右移窗口
        // TODO: 窗口内数据的更新

        console.log("window", left, right);

        // 当左侧窗口需要收缩
        while(window needs shrink) {
            // d是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            // TODO: 窗口内数据的更新

        }
    }
}
```