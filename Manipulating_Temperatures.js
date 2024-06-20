// 1-line
const  temperatures=[-3, 14, 22, 5, -10]
// 2-line
temperatures.forEach(function(temperatures) {
    console.log(temperatures);
});
//2 arrow fuction line
temperatures.forEach((element) => {
    console.log(element);
});
// 3-line normal fuction
temperatures.forEach(function(temperature) {
    const tempInFahrenheit = (temperature * 9/5) + 32;
    console.log(tempInFahrenheit);
});

// 3-line arrow fuction
temperatures.forEach(temperature => {
    const tempInFahrenheit = (temperature * 9/5) + 32;
    console.log(tempInFahrenheit);
});
//4-line map fuction
const temperaturesInFahrenheitArrow = temperatures.map(temperature => (temperature * 9/5) + 32);
console.log(temperaturesInFahrenheitArrow);

//5-line filter
const belowFreezing = temperatures.filter(function(temperature) {
    return temperature < 0;
});
console.log(belowFreezing);

//6-line arrow function
const belowFreezingArrow = temperatures.filter(temperature => temperature < 0);
console.log(belowFreezingArrow);