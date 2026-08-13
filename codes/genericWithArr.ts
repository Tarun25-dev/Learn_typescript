function getFirstValue<T>(arr: T[]): T{
    return arr[0];
};

const numbers = getFirstValue([10,20,30,40,50,60]);
const names = getFirstValue(["a","b","c","d","e"]);

console.log(numbers);
console.log(names);

// 10
// a