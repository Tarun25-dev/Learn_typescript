"use strict";
function users({ name, age }) {
    console.log(name);
    console.log(age);
}
;
users({ name: "tharun", age: 23 });
// tharun
// 23
// for rename the property to new variable
function o({ name: mname, age: mage }) {
    console.log(mname);
    console.log(mage);
}
;
o({ name: "kumar", age: 23 });
