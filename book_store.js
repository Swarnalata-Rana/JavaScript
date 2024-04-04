let bookStore = [];

class Books {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }    
}

// Add Books
function add_books(id, name, price, quantity) {
    let add = new Books(id, name, price, quantity);
    bookStore.push(add);
}
add_books(0, 'Harry Potter', 200, 2);
add_books(1, 'Lord of the Rings', 400, 2);
console.log("aadBooks:-",bookStore);

// Update Books
function update_book(id, name, price, quantity) {
    for (let i = 0; i < bookStore.length; i++) {
        if (bookStore[i].id === id) {
            bookStore[i].name = name;
            bookStore[i].price = price;
            bookStore[i].quantity = quantity;
            break;
        }
    }
}
update_book(0, 'Updated Harry Potter', 3000, 10);
console.log("updateBooks:-",bookStore);

// Remove Books
function remove_book(id) {
    bookStore = bookStore.filter(Book => Book.id !== id);
}
remove_book(0);
console.log("removeBooks:-",bookStore);

// Display Book
function display_books() {
    for (let i = 0; i < bookStore.length; i++) {
        console.log("Books Name:", bookStore[i].name);
        console.log("Books Price:", bookStore[i].price);
        console.log("Books Quantity:", bookStore[i].quantity);
    }
}
display_books();
