"use strict";
const students = [
    { name: "tharun", age: 23 },
    { name: "kumar", age: 24 },
    { name: "nani", age: 25 }
];
const names = students.map(s => {
    return s.name;
});
console.log(names);
