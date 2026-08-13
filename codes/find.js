// 1. find() - find one element (returns the first element that matches to the condition)

const numbers = [10,20,30,40,50,60,70];

const result1 = numbers.find((f) => {
    return f >= 25;
});

console.log(result1);

// 30

const result2 = numbers.find(n => n > 70);

console.log(result2);

// undefined 
// beacuse there is no element to store on result2 beacuse of the condition.