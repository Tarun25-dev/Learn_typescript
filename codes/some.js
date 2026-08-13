// some() - Does at least one match
// checks wether atleast one element satisfies a condition.
// It returns True / Flase

const num = [10,20,30,40,50];

const result = num.some(n => n > 35);

console.log(result);

// true

const result2 = num.some(n => n > 60);

console.log(result2);

// false

//  some() = Is there atleast ONE 