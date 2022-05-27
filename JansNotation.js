function jansNotation(arr) {
    let numArr = [];
    let isEnoughOperands = true;
    for (let el of arr) {
        if (el != '+' && el != '-' && el != '*' && el != '/') {
            numArr.push(el);
        }
        if (el == '+') {
            if (numArr.length > 1) {
                let newOperand = numArr[numArr.length - 2] + numArr[numArr.length - 1];
                numArr.splice(numArr.length - 2, 2, newOperand);
            } else {
                console.log("Error: not enough operands!");
                isEnoughOperands = false;
                break;
            }
        } else if (el == '-') {
            if (numArr.length > 1) {
                let newOperand = numArr[numArr.length - 2] - numArr[numArr.length - 1];
                numArr.splice(numArr.length - 2, 2, newOperand);
            } else {
                console.log("Error: not enough operands!");
                isEnoughOperands = false;
                break;
            }
        } else if (el == '*') {
            if (numArr.length > 1) {
                let newOperand = numArr[numArr.length - 2] * numArr[numArr.length - 1];
                numArr.splice(numArr.length - 2, 2, newOperand);
            } else {
                console.log("Error: not enough operands!");
                isEnoughOperands = false;
                break;
            }
        } else if (el == '/') {
            if (numArr.length > 1) {
                let newOperand = numArr[numArr.length - 2] / numArr[numArr.length - 1];
                numArr.splice(numArr.length - 2, 2, newOperand);
            } else {
                console.log("Error: not enough operands!");
                isEnoughOperands = false;
                break;
            }
        }
    }

    if (numArr.length > 1 && isEnoughOperands) {
        console.log('Error: too many operands!');
    } else if (numArr.length == 1 && isEnoughOperands) {
        console.log(numArr.join());
    }
}
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);