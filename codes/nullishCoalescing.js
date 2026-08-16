const name = null;
const age = undefined;

const result1 = name ?? "guest";
const result2 = age ?? 18;

console.log(result1);
console.log(result2);

// guest
// 18