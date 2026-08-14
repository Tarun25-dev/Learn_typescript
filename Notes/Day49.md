#### Parameters<T>

- We already know that ReturnType extracts the return type of a function.

**Parameter<T>**
- This extracts the parameter types of a function as a tuple.
- And we know that tuple is used when each position has a specific meaning and type.

```ts
function greet(name: string, age: number){
    return `Hello ${name}, you are ${age} years old.`;
}
```
- We can extract its parameters:
```ts
type GreetParams = Parameters<typeof greet>;
```
- So the result is a tuple like:
- [name: string, age: number]

**Why a tuple?**
- Beacuse the parameters have a specific order and type.
- like first parameter must be string and second parameter must be number like that so tuple is same behaviour.

**You can use the Extracted tuple**
```ts
type GreetParams = Parameters<typeof greet>;

const values: GreetParams = ["tarun", 23];
```
- Here order matters first string and next number.

**ReturnType VS Parameters**
- Parameters<typeof fn> = Extracts functions input(parameters) types.
- ReturnType<typeof fn> = Extracts the functions output(return) type.

**Read-world Example**
- Imagine a function already has complicated parameter types:
```ts
function createUser(name: string, age: number, city: string, email: string, phone: number, user: boolean){
    return 1;
};
```
- So if we need to store those complex parameters then it requires a lot time and repeating code as well like:
```ts
type UserArgs = [string, number, string, string, number, boolean];
```
- So that unnessary to write those all type of parameters and also a problem when that paramete type will change after so then we have to change manually if we dont use Parameters.
- use this:
```ts
type UserArgs = Parameters<typeof createUser>;
```
- simple line of code.