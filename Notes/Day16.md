#### Nested Objects

- An object doesn't have to contain only strings, numbers or booleans.
- An object can contain another object as a property.
- Thats called nested object.

```ts
let user = {
    name: "Tharun",
    age: 23,
    address:{
        city: "Nandyal",
        state: "ap"
    }
};
```
- Here user is an object and inside that address itself is an object and containing its properties like city and state.

**Accessing nested properties**

```ts
console.log(user.address.city);
console.log(user.address.state);
```

**Typescript object type**
- We can explicitly describe the structure:
```ts
let User: {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    };
} = {
    name: "Tharun",
    age: 23,
    address: {
        city: "nandyal",
        state: "ap"
    }
};
```
- address has its own object type like: 
```text
address:{
    city: string;
    state: string;
}
```

**Nested objects with type**

```ts
type Person = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
};

let person1: Person = {
    name: "tharun",
    age: 23,
    address:{
        city: "nandyal",
        state: "ap"
    }
};

let person2: Person = {
    name: "kumar",
    age: 25,
    address:{
        city: "kurnool",
        state: "ap"
    }
};
```
- Here Address is being reused as the type of the address property.

**Nested objects with array**

```ts
type P = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
};

let array: P[] = [
   {
    name: "tharun",
    age: 23,
    address:{
        city: "nandyal",
        state: "ap"
    }
   },
   {
    name: "kumar",
    age: 25,
    address:{
        city: "nandyal",
        state: "ap"
    }
   }
];
```