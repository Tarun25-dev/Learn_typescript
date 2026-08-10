"use strict";
function greet(message, ...names) {
    console.log(message);
    console.log(names);
}
greet("Hello!", "Tharun", "Kumar", "nani");
// Hello!
// [ 'Tharun', 'Kumar', 'nani' ]
function g(message, ...names) {
    for (const n of names) {
        console.log(message + " " + n);
    }
    ;
}
;
g("Hello!", "Tharun", "Kumar", "nani");
