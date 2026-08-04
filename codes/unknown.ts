let c: unknown = "Hello" // even though we write string it dont decide it at compile time beacuse of that unknown if we need then wee need to prove.

// c.toUpperCase() this causes an error beacuuse of unkown if we need to perform then need to proove and apply any operation to that varibale.

if (typeof c === "string"){
    c.toUpperCase();
}
console.log(c)