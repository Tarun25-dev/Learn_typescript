const cart = [
  { name: "Coffee", price: 100, quantity: 2 },
  { name: "Cake", price: 200, quantity: 1 },
  { name: "Tea", price: 50, quantity: 3 }
];

const total = cart.reduce((a, c) => a + c.price * c.quantity,0);

console.log(total);

// 550