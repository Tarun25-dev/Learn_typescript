"use strict";
function getFirstValue(arr) {
    return arr[0], arr[1];
}
;
const numbers = getFirstValue([10, 20, 30, 40, 50, 60]);
const names = getFirstValue(["a", "b", "c", "d", "e"]);
console.log(numbers);
console.log(names);
// 10
// a
