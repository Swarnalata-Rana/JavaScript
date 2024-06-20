// 1-line
let student = {
    name: "Smaru",
    email: "smaranmohanty28@gmail.com",
    age: 28,
    address: {
        country: "India",
        city: "Bhubaneswar",
        pin_code: "123456"
    }
};

// 2-line
console.log(student.address.country);

// 3-line
student.address.pin_code = "1234567";

// 4-line
console.log(student.address);
