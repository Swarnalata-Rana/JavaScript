function mapArray(arr, callback) {
    let emptyArray = [];
    for (let i = 0; i < arr.length; i++) {
        let result = callback(arr[i]);
        emptyArray.push(result);
    }
    return emptyArray;
}
function double(arrayNum) {
    return arrayNum * 2;
}
const doubledNumbers = mapArray([1,2,3,4,5], double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
