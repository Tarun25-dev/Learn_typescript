"use strict";
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 1;
}
console.log(add(10, 20));
// 30
console.log(add("tharun", "kumar"));
