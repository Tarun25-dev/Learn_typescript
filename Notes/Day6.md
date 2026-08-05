**Union literal type**
- Union doesn't mean both like`let key: number | string;`.
- value can contain a number OR a string.
- At any particular moment value has one actual value.

```ts
let value: number | string = "hello";
```
- At this moment you and i can see its a string.
- but ts may need to reason about the declared posibilities when you work with a union.
```ts 
let value:number | string;
value = "hello";
console.log(value.toUpperCase());
```
- Here ts can understand the current assignment in many cases straightforward cases, but in more complex situations it may need you to narrow the type.
- Prove the type before performing an operation that requires a particular type.

**Type narrowing**
- Suppose we have:
```ts
function printvalue(value: number | string){
    if (typeof value === "string"){
        console.log(value.toUpperCase())
    }
}
```
- This process is called Type narrowing.
- for number also,
```ts
function printvalue(value: number|string){
    if (typeof value === "number"){
        console.log(value.toFixed(2));
    }
}
```
- so toFixed() is allowed safely using type narrowing.

**Why does typescript do this?**
- Imagine:
```ts
function process(value: number | string){
    # What is value?
}
```
- it could be 10 or "10"
- If you try to perform an operation that only  exists for one type, typescript needs to make sure it's safe.
- It forces you to deal with uncertainity instead of blindly assuming the type.