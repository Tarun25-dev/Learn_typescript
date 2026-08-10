#### map() with TS

- The main purpose of the map() is to perform an action for each element and returns a new array.
- Basic example in js
```js
const numbers = [10,20,30,40,50];
const doubled = numbers.map(n => {
    return n*2;
});
console.log(doubled);
```
- Callback runs once for each element.

**Why is it different from forEach()?**

```js
const numbers = [10,20,30,40,50];
numbers.forEach(n => {
    console.log(n * 2);
});
```
- It's main purpose is to perform an action for each element.
- But map() purpose is to transform each element and create a new array.

**Typescript knows the types**
- We dont explicity write types like this:
```ts
const numbers: number[] = [10,20,30,40,50];
const doubled: number[] = numbers.map(n => {
    return n*2;
});
```

**map() with objects**
```ts
type User = {
    name: string;
    age: number;
};

const users: User[] = [
    {name:"tharun", age: 23},
    {name: "kumar", age: 24},
    {name: "nani", age: 25}
    ];
```
- suppose we want only names 
```ts
const names = users.map((n) => {
    return n.name;
});
console.log(names);
```