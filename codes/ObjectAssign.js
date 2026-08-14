"use strict";
const U1 = {
    name: "Tharun",
    city: "HYD"
};
const UpdateCity = {
    city: "NDL"
};
Object.assign(U1, UpdateCity);
console.log(U1);
