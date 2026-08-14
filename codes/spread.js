"use strict";
const P1 = {
    name: "Tharun",
    age: 23
};
const UpdateAge = {
    age: 22
};
const NewP1 = {
    ...P1,
    ...UpdateAge
};
console.log(NewP1);
