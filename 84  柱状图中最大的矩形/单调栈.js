/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let res = 0;
    let stack = [];   // 维护一个单调递增栈
    heights = [0, ...heights, 0];
    heights.forEach((curHeight, index) => {
        while (stack.length > 0 && curHeight < heights[stack[stack.length - 1]]) {
            // 当前bar比栈顶bar矮
            let topIndex = stack.pop();    // 弹出栈顶，保留栈顶索引
            res = Math.max(res, heights[topIndex] * (index - stack[stack.length - 1] - 1));
        }
        // 当前bar比栈顶高或者与栈顶高度相等
        stack.push(index);
    });
    return res;
};

let arr = [2,1,5,6,2,3];
console.log(largestRectangleArea(arr));