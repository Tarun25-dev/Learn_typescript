##### any, unknown, void, and never

```ts
let value;
value = "Hello";
value = 10;
value = true;
```

This following code is not like regular one it is a special case beacuse there is no initial value to infer from.
- Typescript should infer number from value = 10, but there's an important distinction for let value;
- There is no initial value, typescript can't look at an initial value so in this situation Typescript can infer `any` under the relevant compiler settings.
- so, `let value: any;` why number instead of any beacuse the user didnt gave any initial value.
- `any` is extreamly flexible and it allows all types.

**What is any?**

any also just like type in typescript but it is not normal, it is a special type inn typescript and It tells to ts like don't perform normal type checking on this value.

Ex:
```ts
let data: any = 10;
data = "Hello";
data = true;
data = [1,2,3];

# All are allowed. That's powerful but dangerous.

```

**Why is any dangerous?**

look at this code:
```ts
let data: any = "Hello";
data.toUpperCase();
```
- It works fine if string imagine in place of Hello any number like 25,
- Typescript doesn't protect you beacuse you've told it Treat data as anything.
- So This error will escape in compile time and it exists at the run time.
- In professional Typescript code we generally try to avoid unnecessary any.

**What is unkown?**

Unknown is a safer type of any, It actually dont't know what this value yet and also it can hold anytype like:

```ts
let data: unknown = "Hello";
data = 10;
data = true;
```
- If you perform something like data.toUppercase() like any but in this case i dont compile and gets error beacuse we already told to typescipt we dont know which type of value it is. Then how typescript know its a string "Hello"
- To get rid of this unknown error we need to check like this:

```ts
if (typeof data === "string"){
    console.log(data.toUpperCase());
}
```
- This is called **type narrowing**.

**`any` VS `unknown`**

|any||unknown|
|---||-------|
|can contain anything|can contain anything|
|Type checking mostly disabled|Type checking remains|
|You can use it directly|You must check/narrow it first|
|less safe|safer|
|Avoid when unnecessary|Preferred when type is genuinely unknown|

**remember this**

- any = Don't check me. so while compile time can't try to infer any type and leave it as same, may this process mostly fail on the runtime when we are trying to different operations on unknown type.
- unknown = you don't know me yet, so check me first.

**What is void?**

- void is a return type that indicates a function doesn't return a value to the caller.
- when we use return, if function that gives something perform an action and return the action solution.
- when we use void, if we don't expect any return value from function.

```python
function greet(): void{
    console.log("Hello");
}
```

**What is `never`?**

- never is more unusual and it represents something that never successfully produces a value.
- Ex: a function that always throws an error:
```ts
function crash(): never{
    throw new Error("Something went wrong");
}
```
- This function doesn't finish normally and return a value.
- another example:
```ts
function forever(): never{
    while(true){

    }
}
```
- It doesn't reach a normal return.