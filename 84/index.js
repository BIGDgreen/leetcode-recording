/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(!(heights instanceof Array) || heights.length === 0) return 0;
    let res = heights[0],
        left = right = 0,
        rightActive = false;    // 如果当前item的上一个item的右边比它大，那么当前item的左边一定比自己小，就不用遍历了
    let hashmap = {};   // 存储当前高度与最大矩形面积的对应关系
    hashmap[heights[0]] = heights[0];
    heights.forEach((item, index) => {
        left = right = index;
        if(!rightActive && index > 0) {
            // 左边比item大的
            for(let i = index - 1; i >=0; i--) {
                if(heights[i] && heights[i] >= item) left--;
                else break;
            }
        }
        for(let j = index + 1; j < heights.length; j++) {
            // 右边比item大的
            if(heights[j] >= item) {
                right ++;
                rightActive = true;
            } else {
                rightActive = false;
                break;
            }
        }
        // console.log(index, item, left, right);
        res = Math.max(res, (right - left + 1) * item);
        // console.log(res);
    })

    return res;
};

let arr = [4,2,0,3,2,5];
console.log(largestRectangleArea(arr));