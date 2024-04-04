const shoppingCart = [
    { name: 'phone', price: 10, quantity:1},
    { name: 'lapto', price: 10, quantity: 2 },
    { name: 'tablet', price: 5, quantity: 1 },
  ];
function calculateTotalPrice(cart) {
      let sum=0;
      for (let i=0 ; i< cart.length; i++){
        sum+=cart[i].price 
      }
      return (sum);
}
let totalprice=calculateTotalPrice(shoppingCart);
console.log("sum of total price:" + totalprice)