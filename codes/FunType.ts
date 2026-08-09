type math = (A: number, B: number) => number;


let Add: math = (A,B) => {
    return A+B;
};

let mul: math = (A,B) => {
    return A+B;
};

console.log(Add(10,20));
console.log(mul(2,3));

// 30
// 5