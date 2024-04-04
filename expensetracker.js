let expenseTracker = [];

class Expense {
    constructor(id, shopping, travel, eating) {
        this.id = id;
        this.shopping = shopping;
        this.travel = travel;
        this.eating = eating;
    }    
}

//expenseAdd
function expenseAdd(id, shopping, travel, eating) {
    let add = new Expense(id, shopping, travel, eating);
    expenseTracker.push(add);
}

expenseAdd(0, 2000, 5000, 1000);
console.log("expenseAdd:-", expenseTracker);

//expenseEdit
function expenseEdit(id, shopping, travel, eating){
    for (let i = 0; i < expenseTracker.length; i++) {
        if (expenseTracker[i].id === id) {
            expenseTracker[i].shopping = shopping;
            expenseTracker[i].travel = travel;
            expenseTracker[i].eating = eating;
            break;
        }
    }
}
expenseEdit(0,10000,3000,2000)
console.log("expenseEdit:-",expenseTracker)

// expenseDisplay
function expenseDisplay(){
    for (let i = 0; i < expenseTracker.length; i++) {
        console.log("Expense Sopping:", expenseTracker[i].shopping);
        console.log("Expense Travel:", expenseTracker[i].travel);
        console.log("Expense Eating:", expenseTracker[i].eating);
    }
}
expenseDisplay()
// expenseDelete
function expenseDelete(id){
    expenseTracker = expenseTracker.filter(Expense => Expense.id !== id);

}
expenseDelete(0)
console.log("expenseDelet:-",expenseTracker)




