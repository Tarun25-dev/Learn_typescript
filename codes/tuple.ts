let tup: [string, number] = ["hello",25];
console.log(tup);
console.log(typeof tup);

// [ 'hello', 25 ]
// object

let t: [number, string] = [100,"a"]; // initial values are must be in specific order after that we push with compatible type values
t.push("b");
t.push(200);
t.push(300);
console.log(t);
// [ 100, 'a', 'b', 200, 300 ]