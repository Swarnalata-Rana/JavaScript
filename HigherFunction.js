// Define the higherOrderFunction
function higherOrderFunction(num, callback) {
    callback(num);
}
function callbackFunction(num) {
    console.log(num);
}
higherOrderFunction(5, callbackFunction);

higherOrderFunction(10, function(num) {
    console.log(num);
});

higherOrderFunction(6, function(num) {
    console.log(num * 2);
});

function higherOrderFunctionTwoParams(num1, num2, callback) {
    callback(num1, num2);
}

higherOrderFunctionTwoParams(3, 7, function(num1, num2) {
    console.log(num1 + num2);
});
