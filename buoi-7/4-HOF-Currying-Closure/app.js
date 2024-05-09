// function findNumberLess10AndOdd() {
//     const result = [];
//     for (let i = 0; i < 10; i++) {
//         if (i % 2 !== 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(findNumberLess10AndOdd()); // --> Output: [1, 3, 5, 7, 9]

// function findNumberLess20AndEven() {
//     const result = [];
//     for (let i = 0; i < 20; i++) {
//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(findNumberLess20AndEven()); // --> Output: [0, 2, 4, 6, 8, 10, 12, 14,16, 18]

// function findNumberLess30AndDivide3surplus2() {
//     const result = [];
//     for (let i = 0; i < 30; i++) {
//         if (i % 3 === 2) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(findNumberLess30AndDivide3surplus2()); // --> Output: [2, 5, 8, 11,14, 17, 20, 23, 26, 29]

function findNumber(num, callBackFn) {
    const result = [];
    for (let i = 0; i < num; i++) {
        if (callBackFn(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(findNumber(10, (item) => item % 2 !== 0)); // -> [1, 3, 5, 7, 9]
console.log(findNumber(20, (item) => item % 2 === 0)); // --> Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(findNumber(30, (item) => item % 3 === 2)); // --> Output: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29]

const findNumber = (num) => (callbackFunc) => {
    const result = [];
    for (let i = 0; i < num; i++) {
        if (callbackFunc(i)) {
            result.push(i);
        }
    }
    return result;
};
findNumber(10)((number) => number % 2 === 1);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);
