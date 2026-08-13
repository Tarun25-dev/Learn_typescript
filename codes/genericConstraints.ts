function getLength<T extends {length: number}>(value :T):number{
    return value.length;
};

console.log(getLength("Tharun"));
console.log(getLength([10,20,30,40,50]));

// 6
// 5