"use strict";
function get(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    return value.length;
}
;
console.log(get("Tharun"));
console.log(get(25));
