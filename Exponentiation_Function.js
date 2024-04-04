function power_Fun(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
const result = power_Fun(2, 3); 
console.log(result);
