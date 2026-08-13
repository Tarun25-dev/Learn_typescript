#### Generic interface

- We already know that interfaces, generics, generic constraints and multiple generic parameters.

**normal interface**

```ts 
interface Box {
    value: string;
};

const box: Box = {
    value: "Hello"
};
```
- Value must be a string
- But what if we want a box that can hold different types.
- We could create like:
```ts
interface StringBox {
    value: string;
};

interface NumberBox{
    value: string;
};
```
- But that becomes repertitive.

**Generic Interface**

```ts
interface Box<T>{
    value: T;
};
```
- Here T is a type parameter 
- When we use it then it decides that T type what would it be.

```ts
const stringBox: Box<string> = {
    value: "tharun"
};
```
- T = string
- If we need to store a number then
```ts
const NumberBox: Box<number> = {
    value: 3225
};
```
- T = number

**Why this useful?**
- Instead of creating multiple interfaces for multiple types we use generic type.
- Instead of this:
```ts 
interface StringBox{
    value: string;
};

interface NumberBox{
    value: number;
};

interface BooleanBox{
    value: boolean;
};
```
- We can create one reusable structure like this:
```ts
interface Box<T>{
    value: T;
};
```
**Generic Interface with an object**

- We can also use an object as the generic type:
```ts
interface Response<T>{
    data: T;
    success: boolean;
};

type User = {
    name: string;
    age: number;
};

// here we use T as for User type

const response: Response<User> = {
    data: {name: "tharun", age: 23},
    success: true
};
```

- T = User
- response.data is known by typescript as a User.
