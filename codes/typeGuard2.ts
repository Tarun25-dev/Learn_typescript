function get(value: string | number): number{
    if(typeof value === "number"){
        return value*2;
    }
    return value.length;
};

console.log(get("Tharun"));
console.log(get(25));

// 6
// 50