"use strict";
const user = {
    name: "tharun",
    age: 23,
    city: "Ndl"
};
const user1 = {
    name: "kumar",
    age: 23,
    city: "ndl"
};
function show(key) {
    console.log(user[key]);
}
;
show("name");
show("age");
show("city");
