const users = [
    {id:1, name: "tharun", age: 23},
    {id:2, name: "kumar", age: 24},
    {id:3, name: "nani", age: 25},
    {id:4, name: "tharun kodiganti", age: 22}
];

const User = users.find(num => num.id === 2);

console.log(User);

// { id: 2, name: 'kumar', age: 24 }