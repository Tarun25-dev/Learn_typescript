"use strict";
function getPropery(obj, key) {
    return obj[key];
}
;
const profile1 = {
    name: "Tharun",
    age: 23
};
const profile2 = {
    name: "Kumar",
    age: 24
};
const profile3 = {
    name: "Nani",
    age: 25
};
console.log(getPropery(profile1, "name"));
console.log(getPropery(profile2, "name"));
console.log(getPropery(profile3, "name"));
