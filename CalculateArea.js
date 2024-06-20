// 1-line
function calculateArea(width, height) {
    return width * height;
}

// 2-line
console.log(calculateArea(5, 10));

// 3-line
function calculateAreaDefault(width, height) {
    return width * height;
}
console.log(calculateAreaDefault(1,1))

// 4-line
const calculateAreaExpression = function(width = 1, height = 1) {
    return width * height;
};
console.log(calculateAreaExpression ())

// 5-line
const calculateAreaArrow = (width = 1, height = 1) => width * height;
console.log(calculateAreaArrow())
