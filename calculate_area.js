let radius = 14;
let price = 20;
let pi = 22 / 7;

function calculateArea(radius) {
    const area = pi * radius * radius;
    return area;
}

function calculateCost(radius, price) {
    let area = calculateArea(radius);
    let cost = area * price;
    return cost;
}

let costElement = document.getElementById('total-cost');
costElement.innerHTML += calculateCost(radius, price);