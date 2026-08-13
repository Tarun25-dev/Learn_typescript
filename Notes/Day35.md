#### generic constraints with keyof

**Problem**
```ts
type User = {
    name: string;
    age: number;
};
```
 - We want one function that can get any property from a User.
 - We might try:
 ```ts
function getProperty(user: User,key: string){
    return user[key];
}
 ```
 - but string is too broad and someone could do like getProperty(user,"phone");
 - But phone isn't a property of User.
 - Thats why we use keyof
 ```ts
 function getProperty(user: User, key: keyof User){
    return user[key];
 };
 ```
 - So keyof restricts the key and only allows that valid property keys.

 **Make it generic**
 - Now we can make the function reusable for different object types:
 ```ts
function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
};
```
- This is very important pattern. think about the two generics with constarints
- T is the object type
- K is key type(literal type) and must be a key of T. `<T, K extends keyof T>
- K can be any key but it must be a key that exists inside the T.

**Example**
```ts
type User = {
    name: string;
    age: number;
};

function getProperty<T,K extends keyof T>(obj: T, key: K){
    return obj[key];
}


const user1: User = {
    name: "tharun kumar",
    age: 23
};

const name = getProperty(user,"name");
```