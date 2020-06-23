/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let operators = ['+', '-', '*', '/'];
    let stack = [];
    tokens.forEach((item, index) => {
        if (operators.includes(item)) {
            const op1 = stack.pop()
            const op2 = stack.pop()
            const tmpRes = eval(op1 + operators + op2)
            stack.push(tmpRes)
        } else {
            stack.push(item);
        }
    })
    return stack[0]
};