"use strict";
const User1 = {
    name: "Tharun",
    age: 23,
    city: "Nadyal"
};
function updateUser(updates) {
    Object.assign(User1, updates);
}
;
updateUser({ city: "Nandyal" });
console.log(User1);
