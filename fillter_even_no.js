// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = 0;
// function countEvenNumbers() {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             even++;
//         }
//     }
//     console.log("Number of even numbers:", even);
// }
// countEvenNumbers();
//Ootput:4

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterEvenNo() {
    let even = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
    }
    console.log(even);
}
filterEvenNo();
 // Output: [2, 4, 6, 8]

