function getValue<T>(value: T): T{
    return value;
};

const a = getValue("Tharun");
const b = getValue(3225);

console.log(typeof a+" and "+ typeof b);

// string and number