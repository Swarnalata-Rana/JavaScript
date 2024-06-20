// Step 1: Define the people array
const people = [
    { name: 'Runu', age: 24 },
    { name: 'Chinu', age: 21 },
    { name: 'Geeta', age: 24 },
    { name: 'Mita', age: 26 },
    { name: 'Lipi', age: 24 }
];
// Step 2: Define the calculateAverageAge function
function calculateAverageAge(peopleArray) {
    if (peopleArray.length === 0) return 0;
    const totalAge = peopleArray.reduce((sum, person) => sum + person.age,0);
    const averageAge = totalAge / peopleArray.length;
    return averageAge;
}
const averageAge = calculateAverageAge(people);
console.log(averageAge);

