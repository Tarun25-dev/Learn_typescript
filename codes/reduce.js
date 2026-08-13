// reduce() - reduce an array to one value
// reduce is used when you want to calculate one final result from an array.
// common uses SUM, PRODUCT, AVERAGE, COUNTING, GROUPING, CALCULATING CART TOTALS

// Syntax array.reduce((accumulator, current) => condition, initial_value);
// accumulator = it stores the first value starting and if that is not starting then it stores the previous iteration result.
// current = current value holds in array
// what that starting value of accumulator.

const num = [10,20,30,40,50,60];

const sum = num.reduce((a,c) => a+c, 0);
// a = 0 at starting and 
// 0(a) + 10(c) = 10(a)
// 10(a) + 20(c) = 30(a) this how iteration does

console.log(sum);

// 210