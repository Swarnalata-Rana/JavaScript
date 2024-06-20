//1-line
const fruits=["apple", "banana", "cherry", "date"]
//2line capitalize
fruits.forEach(fruit => {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});
//3-line arroe revers
const reversedFruits = fruits.map(fruit => {
    return fruit.split('').reverse().join('');
});
console.log(reversedFruits);
//4-line 
const longFruits = fruits.filter(fruit => {
    return fruit.length > 5;
});
console.log(longFruits);

// Task 4: Find fruits containing 'a' and return them in uppercase
const aFruitsUpper = fruits
    .filter(fruit => fruit.includes('a'))
    .map(fruit => fruit.toUpperCase());
console.log(aFruitsUpper);

// Task 5: Add up the number of characters in each fruit name
let totalCharacters = 0;
fruits.forEach(fruit => {
    totalCharacters += fruit.length;
});
console.log(totalCharacters);
