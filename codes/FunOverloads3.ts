function getLen(value: string): number;
function getLen(value: number[]): number;

function getLen(value: string|number[]): string|number{
    return value.length;
}

console.log(getLen("tharun"));
console.log(getLen([10,20,304,50,40]));

// 6
// 5
