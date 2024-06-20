//forEach
function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
// Example usage:
forEachArray([1, 2, 3], (element, index) => {
    console.log(index,element);
});

//Map
function mapArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
// Example usage:
const mappedArray = mapArray([1, 2, 3], (element) => {
    return element * 2;
});
console.log(mappedArray); // Output: [2, 4, 6]

 //Filter
 function filterArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
// Example usage:
const filteredArray = filterArray([1, 2, 3, 4], (element) => {
    return element % 2 === 0;
});
console.log(filteredArray); // Output: [2, 4]

