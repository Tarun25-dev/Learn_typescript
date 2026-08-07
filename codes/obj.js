let person = {
    name: "Tharun",
    age: 23,
    city: "Nandyal"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

person.name = "Kodiganti Tharun Kumar"; //reassign value
person.isDev = true; // adding new property called isDev

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.isDev);

// output:

// Tharun
// 23
// Nandyal
// Kodiganti Tharun Kumar
// 23
// Nandyal
// true