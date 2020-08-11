<!--
 * @Author       : BigDgreen
 * @Date         : 2020-08-06 17:38:44
 * @LastEditors  : BigDgreen
 * @LastEditTime : 2020-08-06 17:43:08
 * @FilePath     : \leetcode\算法：动态规划\readme.md
-->
# 解决的问题
动态规划常用来解决**求最值**问题。

# 框架
```js
// 初始化 base case
dp[0][0][...] = base
// 进行状态转移
for ( 状态1 in 状态1的所有取值 ){
    for( 状态2 in 状态2的所有取值 ) {
        for ( ... )
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
    }
}
        
```