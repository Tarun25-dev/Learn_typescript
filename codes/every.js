// every() - Do all match?
// checks weather all elements satisfy a condition.
// It return true / false

const num = [10,15,20,25,30,35,40];

const result = num.every(n => n>=10);

console.log(result);

// true

const  result4 = num.every(n => n > 25);

console.log(result4);

// false