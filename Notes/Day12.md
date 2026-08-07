#### Optional Properties and object shape practice

- We already learn this:
```ts
let user:{name: string; age: number;} = {name: "tharun", age: 23};
```
**Object properties can be optional**
```ts
let user:{name: string; age?: number;} = {name: "tharun"};
let user:{name: string; age?: number;} = {name:"tharun", age: 23}; 
```
- Both are correct and more importantly name must be string and age must be number.
- here, name is required and age is optional.
