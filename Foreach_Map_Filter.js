// 1-line
const numbers = [1, 2, 3, 4, 5];
// 2-line
numbers.forEach(function(number) {
    console.log(number);
});
// 3-line
numbers.forEach(function(number) {
    console.log(number * 2);
});
//4-line
const squaredNumbers = numbers.map(function(number) {
    return number ;
});
console.log(squaredNumbers);
//5-line
const squaredNumbersArrow = numbers.map((number) => number * number);
console.log(squaredNumbersArrow);
//6-line
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers)
//7-line
const a=[2,3,4,5]
const b=a.filter((y)=> y>2)
console.log(b)



