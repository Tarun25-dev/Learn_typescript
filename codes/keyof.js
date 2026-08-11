"use strict";
function getValue(user, key) {
    return user[key];
}
;
const user1 = {
    name: "tharun",
    age: 23
};
console.log(getValue(user1, "name"));
console.log(getValue(user1, "age"));
