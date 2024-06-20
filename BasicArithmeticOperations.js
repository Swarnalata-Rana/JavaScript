// -line
const addNumbers=function(a,b){
    return a+b
}
console.log(addNumbers(6,4))
// 2-line
const mulNumbers=function(a,b){
    return a*b
}
console.log(mulNumbers(6,4))
// 3-line
const subNumbers=function(a,b){
    return a-b
}
console.log(subNumbers(6,4))
// 4-line
const divNumbers=function(a,b){ 
    return a%b
}
console.log(divNumbers(6,3))
// 5-line
function performArithmetic(num1, num2, operation) {
    return operation(num1+ num2);
}
function passargument(performArithmetic) {
    return performArithmetic;
}
const resultDivideByZero = performArithmetic(10, 5, passargument);
console.log(resultDivideByZero);                                                                                                                                                                                                                                                                                           