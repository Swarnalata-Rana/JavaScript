// 1-like
function greet(name) {
    return "Hello....,"  + name + "!";
}
// 2-line
console.log(greet("Alice"));

// 3-line
function greet(name1) {
    return "Hello...., " + name1 + "!!";
}
console.log(greet("Guest"));

// // 4-line
const greetFunction = function(name) {
    return "Hello..., " + name + "!!!";
};
console.log(greetFunction("greetFunction"))

// 5-line
const greetArrow = (name) => {
    return "Hello.., " + name + "!";
};
console.log(greetArrow("greetArrow"))
