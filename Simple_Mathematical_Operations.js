// 1-line
const doubleNumber=function(number){
    return number * 2;
};
console.log(doubleNumber(3))

// 2-line
const squareNumber = function(number) {
    return number ** 2;
};
console.log(squareNumber(5))

// 3-line
const incrementNumber = function(number) {
    return number + 1;
};
console.log(incrementNumber(5))
// 4-line
function performOperation(num, operation) {
    return operation(num);
}
// 5-line
function functionargument(callfunction) {
    return callfunction+ 10;
}
const result1 = performOperation(5, functionargument);
console.log(result1);

// function square_num(n) {
//     return n * n;
// }
// const result2 = performOperation(5, square_num);
// console.log(result2);

// function half(n) {
//     return n / 2;
// }
// const result3 = performOperation(5, half);
// console.log(result3);


