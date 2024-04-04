let inventory = [];
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }    
}
// Add Product
function add_product(id, name, price, quantity) {
    let add = new Product(id, name, price, quantity);
    inventory.push(add);
}
// Remove Product
function remove_product(id) {
    remove= inventory.filter(product => product.id !== id);
}
// Update Product
function update_product(id, name, price, quantity) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory[i].name = name;
            inventory[i].price = price;
            inventory[i].quantity = quantity;
            break;
        }
    }
}
// Display Product
function display_product() {
    for (let i = 0; i < inventory.length; i++) {
        console.log("Product Name:", inventory[i].name);
        console.log("Product Price:", inventory[i].price);
        console.log("Product Quantity:", inventory[i].quantity);
    }
}
add_product(0, 'Laptop', 20000, 2);
add_product(1, 'Update Phone', 2000, 3);
console.log(inventory);
remove_product(0);
console.log(remove);
update_product(0,'Updated Laptop',3000,10);
console.log(inventory);
display_product()



