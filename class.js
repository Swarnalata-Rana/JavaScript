// object friend
const friend = {
    name: "Rakesh",
    email: "rakesh.kumar@gmail.com",
    age: 27,
    address: {
        country: "India",
        city: "Jajpur",
        pin_code: "654321"
    }
};
// console.log(friend);
//  object topper
const topper = {
    name: "Lipika",
    email: "lipikavitiriya@gmail.com",
    age: 29,
    address: {
        country: "India",
        city: "Jajpur",
        pin_code: "110011"
    }
};
// console.log(topper);
// Student class
class Student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
    }

    // Method to greet
    // greet() {
    //     console.log(`Hello, my name is ${this.name}.`);
    // }
    

    // Method to get the full address
    getFullAddress() {
        return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    }
}

// new Student class

const mychildhoodfrnd = new Student('Rakesh', 'rakeshkumar@example.com', 27, 'India', 'Jajpur', '654321');
const mybestfrnd = new Student('Lipika', 'lipikavitiriya@example.com', 29, 'India', 'JAjpur', '110011');

// Log these objects to the console
console.log(mychildhoodfrnd);
console.log(mybestfrnd);

// Call the getFullAddress method on one of the Student objects and log the result to the console
console.log(mychildhoodfrnd.getFullAddress());
