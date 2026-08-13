interface Box<T>{
    value: T;
};

const StringBox: Box<string> = {
    value: "tharun"
};

const NumberBox: Box<number> = {
    value:3225
};

const BooleanBox: Box<boolean> = {
    value: true
};

console.log(StringBox.value);
console.log(NumberBox.value);
console.log(BooleanBox.value);

// tharun
// 3225
// true