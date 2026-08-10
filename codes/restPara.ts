function add(...numbers: number[]): number{
    let total = 0;
    for (const num of numbers){
        total = total + num;
    };
    return total;
};

console.log(add(10,20,30));
console.log(add(10,20));
console.log(add(39,56,78,34));

// 60
// 30
// 207