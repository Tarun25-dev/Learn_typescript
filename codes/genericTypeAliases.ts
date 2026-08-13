type Box<T> = {
    value: T;
};

const stringBox: Box<string> = {
    value: "tharun"
};

const NumberBox: Box<number> = {
    value: 1011
};

console.log(stringBox.value);
console.log(NumberBox.value);

// tharun
// 1011