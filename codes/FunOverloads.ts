function format(value: string): string;
function format(value: number): number;

function format(value: string|number): string|number{
    return value;
}

console.log(format("number"));
console.log(format(10));

// number
// 10

// It process fast beacuse we reduce the burden that every combination need to check typescript.
