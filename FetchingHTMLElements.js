// Task 1: Fetch the element with the ID "myDiv" and log its content to the console
const myDiv = document.getElementById('myDiv');
console.log(myDiv.textContent);

// Task 2: Fetch all the elements with the class "myClass" and log their contents to the console
const myClassElements = document.getElementsByClassName('myClass');
for (let element of myClassElements) {
    console.log(element.textContent);
}

// Task 3: Fetch all the <p> elements and log their contents to the console
const pElements = document.getElementsByTagName('p');
for (let element of pElements) {
    console.log(element.textContent);
}

// Task 4: Fetch the <div> element using the ID selector (#anotherDiv) and log its contents to the console
const anotherDiv = document.querySelector('#anotherDiv');
console.log(anotherDiv.textContent);

// Task 4: Fetch the <p> element using the class selector (.anotherClass) and log its contents to the console
const anotherClassParagraph = document.querySelector('.anotherClass');
console.log(anotherClassParagraph.textContent);
