// Define the Employee class
class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }

    // Method to introduce the employee
    introduce() {
        console.log(`Hello, This is ${this.name} and I am a ${this.position}.`);
    }

    // Method to display the employee's salary
    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}   

// Create a new employee object
const newEmployee = new Employee(
    'Runu',
    'runu@example.com',
    30,
    'Engineering',
    'Software Developer',
    5000
);

// Log the newEmployee object to the console
console.log(newEmployee);

// Create a manager object
const manager = new Employee(
    'Naaz',
    'naaznasrin@example.com',
    40,
    'Marketing',
    'Marketing Manager',
    8000
);

// Log the manager object to the console
console.log(manager);

// Call the introduce method on the newEmployee object
newEmployee.introduce();

// Call the displaySalary method on the manager object
manager.displaySalary();
