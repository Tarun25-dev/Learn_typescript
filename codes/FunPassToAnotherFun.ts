function cl(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a,b);
}

const addSum = (a: number, b: number) => {
    return a+b;
};

console.log(cl(10,20,addSum));