#### Function Type Expressions

- We have typed the parameters and return values inside a function.
```ts
function add(a: number, b: number): number{
    return a+b;
};
```
- Now we can describe the entire function itself as a type.

**creating a function type**
```ts
let add: (a: number, b: number) => number;
```
- here add must be a function that accepts two numbers and returns a number.
- Now we can assign a function.
```ts
add = (a,b) => {
    return a+b;
}
```
- typescript already knows a, b and return value be a number.
- Beacuse we discussed the function type.

**reusuable function type with type**
```ts
type MathFunction = {
    (a: number, b: number) => number;
}
```
- this function type we can reuse for many functions
```ts
let add: MathFunction = (a, b) => {
    return a+b;
};

let multiply: MathFunction = (a, b) => {
    return a*b;
};
```
- Both follows the same structure like a should be number and b should be a number and return type must be a number.

**Why this useful?**
- Imagine an application has many functions that should follows the same pattern so instead of repeating writing we can create a function type and reuse it.

