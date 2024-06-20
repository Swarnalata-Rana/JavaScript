// 1-line
class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    // 2-line
    introduce() {
        console.log(`Hello, This is ${this.name} and I am a ${this.position}.`);
    }
    // 3-line
    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}

// 4-line
const newEmployee = new Employee(
    'Chuni', 
    'chinurana@example.com',
    21,
    'Golden Grass',
    'Artist',
    5000
);
console.log(newEmployee);

// 5-line
const manager = new Employee(
    'Geeta',
    'geetarana@example.com',
    24,
    'Marketing',
    'Golden Grass Manager',
    8000
);
console.log(manager);

// 6-line
newEmployee.introduce();

// 7-line
manager.displaySalary();
