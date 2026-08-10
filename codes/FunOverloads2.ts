function add(a: number, b: number): number; // sum
function add(a: string, b: string): string; // concat

function add(a: string|number, b: string|number): string|number{
    if (typeof a === "string" && typeof b === "string"){
        return a+" "+b;
    }
    if (typeof a === "number" && typeof b === "number"){
        return a+b;
    }
    return 1;
}

console.log(add(10,20));
// 30
console.log(add("tharun","kumar"));
// tharun kumar
