#### keyof Operator

- This is an important feature of typescript when working with objects and their property names.
- We already know that:
```ts
type User = {
    name: string;
    age: number;
    city: string;
};
```
- Suppose we want Typescript to know: these are the only valid property names of User.
- That's where keyof comes in.
 
**What is keyof?**

- keyof is used to get all the property names of the type.
```ts
type User = {
    name: string;
    age: number;
    city: string;
};

type UserKeys = keyof User;
```
- that UserKeys has all the key values from that object like "name" | "age" | "city".

**Why this useful**
- You can use it to make sure a variable contains only a valid propery name.
```ts
type User = {
    name: string;
    age: number;
};

function getValue(user: User,key: keyof User){
    return user[key];
};

const user1: User = {
    name: "tharun",
    age: 23,
};

getValue(user1,"name");
getValue(user1,"age");
```
- here we are creating the type User and store its type structure with properties.
- define a function called getValue and inside there are two parameters are there.
- user: User this takes the type structure from User and user has to follow its key names and value types. and inside User that only has two properties.
- key: keyof User, key is a parameter that has to follow the keyof 
- what keyof does is that takes all the keys from User and make it like "name" | "age" like this.
- that key must be taken one of its key while giving arguments.
- so only valid keys are allowed to call the function if we write another key name then it is invalid.

**Why do we need this?**
- Beacuse we want the same function to work with different properties.
- if we dont go with keyof then we need to create three seperate functions like this:
```ts
getName(user);
getAge(user);
getCity(user);
```
- Now imagine if we have 20 properties then we need to create 20 functions to access that.
- thats where the getof property comes and can access all properties by defining one function like this.
```ts
function getValue(user: User,key: keyof User){
    return user[key];
};

getValue(user1,"name");
```

- So, keyof is mainly useful when you want one generic/reusuable function that can work with different properties while still preventing invalid property names.

























































































































































































































