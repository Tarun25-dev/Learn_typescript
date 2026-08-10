function calculate(a,b,operation){
    return operation(a,b); // it indirectly calls add(a,b)
}

function add(a, b){
    return a+b;
}

console.log(calculate(10,20,add)); //here add is a function and it passes as an argument.

// 30

// using arrow function

const cal = (a,b,op) => op(a,b);
const sum = (a,b) => a+b;

console.log(cal(40,60,sum));

// 100