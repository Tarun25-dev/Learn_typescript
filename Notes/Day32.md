#### Generics - <T>

- This is a major Typescript concept especially useful in React and real-world Typescript.
- We already know that we can specify types:
```ts
function getValue(value: string):string{
    return value;
};
```
- But what if we want the function to work with different types while keeping the exact type relationship?
- That's where generic comes in.

**Basic generic**
```ts
function getValue<T>(value: T): T{
    return value;
};
```
- Here T is a Type parameter.
- When we call:
```ts
const a = getValue("Tarun");
```
- Typescript understands T = string.
- So a is a string.
```ts
const b = getValue(100);
```
- T = number, So b is a number. 

**Why not just use any?**
```ts
function getValue(value: any): any{
    return value;
};
```
- This also accepts anything but any **loses useful type information.**
- But typescript then stops knowing what that value actually is?
- By using any causes if we know that 
- value is string then we can perform what type of operations are safe to that string type.
- incase the value is any then ts treats as it can be any type so first we need prove that type to ts and then after that we need to perform an operation.
- Here the actual use of generics comes in 

**Generic**
- Generics let you create reusuable code that works with different types while still remembering the actual type.
- Think like: **I don't know the type yet, so i'll let whoever uses the function decide it.

**Why not just use string | number ?**
- Beacuse generics preserve the exact relationship between input and output.
- By using of union we may loses useful type information. for example we give number 100 and then perform to .length so it cann't be use on number so ts stops that using beacuse ts also exactly don't knwo what typ of value  you may given so first we need to prove that it is a string and perform its operations later by doing all these is difficult but instead of this we can use the generic and we are telling to ts that type of that value is not yet decided and you expect that  type while calling this function.

```ts
function getValue<T>(value: T): T{
    return value;
};

const name = getValue("Tarun");
const age = getValue(23);
```
- `any` - I don't care about the type.
- `T` - I don't know the type yet, but i'll remember what type you gave me. (that type is given while the function using)

**Generic with arrays**

```ts 
function getFirst<T>(items: T[]): T {
    return items[0];
};

const number = getFirst([10,20,30,40,50]);
const name = getFirst(["aa,ab","as","As","sd"]);
```
- The same function works for different types while preseving type safety.

**Why we only use T?**
- No, We don't have to use T specifically. T is just a conventional name for generic type parameter.
- We could write:
- <type>(name: type): type{}
- <value>(name: value): value{}
- <X>(name: X): X{}
- We can user any name inside.
- Prefer T beacuse it traditionally stands for Type.

- For multiple parameters in function we can use multiple generic or single also works like
- <T>(a: T, b: T): T{}
- <T,S>(a:T, b: S): [T,S]{}