#### type aliases

**type**: type is a Typescript keyword which gives a name to a type/structure which you can reuse.

**Problem**
- Suppose we have several users:
```ts
let user1:{
    name: string;
    age: number;
}={
    name: "tharun",
    age: 23
};
let user2:{
    name: string;
    age:number;
}={
    name: "kumar",
    age: 24
};
```
- Notice we are writing the same object type again and again and thats inconvenient.

**type gives that structure a name**
- We can create a reusuable type:
```ts
type User = {
    name: string;
    age: number;
};

// now we use that 

let u1: User = {
    name: "Tharun",
    age: 23
};
let u2: User = {
    name: "kumar",
    age:25
};
```
- Every user must follow that User structure like name must be string and age must be number and there is no optional then must fill both values.
- We can use optional property too

```ts
type User = {
    name: string;
    age?: number;
};

// now we use that 

let u1: User = {
    name: "Tharun",
    age: 23
};
let u2: User = {
    name: "kumar",
};
```