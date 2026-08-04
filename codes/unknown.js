"use strict";
let c = "Hello"; // even though we write string it dont decide it at compile time beacuse of that unknown if we need then wee need to prove.
c = 32;
if (typeof c === "string") {
    c.toUpperCase();
}
console.log(c);
