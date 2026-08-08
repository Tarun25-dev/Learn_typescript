#### Arrays of Objects

We already know that :
- objects = group related properties.
- type = reusable object structure.
- arrays = collection of values.
- Now combine them both then these are called **arrays of objects.**

```ts
let users = [
    {name: "tharun", age: 23},
    {name: "kumar", age: 24}
];

console.log(users[0]); //object 1
console.log(users[1]); //object 2

console.log(users[0].name); //tharun
console.log(users[1].name); //kumar
```
- This is an array of objects.
- Typescript can infer its types automatically for object

**Using type alias**

```ts
type User = {
    name: string;
    age: number;
};

let users: user[] = [
    {name: "tharun", age: 23},
    {name: "kumar", age: 24}
];
```
- user[] is an array where every element must follow the user type.

**Why this matters in real applications**

- This pattern is extreamly common, for example an application may receive:
- users --> many users
- products --> many products
- posts --> many posts
- doctors --> many doctors