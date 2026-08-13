type data<T, U> = {
    first: T;
    second: U;
};

const Data: data<string, number> = {
    first: "Tharun",
    second: 3225
};

console.log(Data.first);
console.log(Data.second);

// Tharun
// 3225
