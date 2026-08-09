#### Functions 

In typescript, functions are similar to javascript functions but ts lets you specify the types of parameters and the return value.

```ts
function add(a: number, b: number): number{
    return a+b;
}
console.log(add(20,30));
```
- a parameter must be a number.
- b parameter also must be a number.
- retrun value must be a number
- This function accepts two numbers abd must return a number.

**Ts checks an arguments**
```ts
add(10,20); //these two arguments are correct number and number
add(10,"20");  
```
- that first statement is correct and accepts functions and returns a number as well.
- But in the second statement that not be accept beacuse b argument also be a number but we given string so it throws an error.

**Ts checks the return type**

```ts
function getName(): string{
    return "tharun";
}
```
- correct beacuse its return type is string and also returns string as "tharun" so ts accepts this.
- but we can't give any number or boolean in place of string like 25 or true inplace of "tharun".

**void**
- void is also a return type but doesn't return a useful value.
```ts
function greet(): void{
    console.log("hello");
};
let result = greet();
console.log(result);
```
- here a function with no return statement returns undefined automatically.
- so the result value is undefined means value is not provided.

**Optional function parameters**
- just like in objects for objects properties can be optional same concept here as well, parameters can be optional by using ?
```ts
function greet(name: string, age?: number): void{
    console.log(name," ",age);
}
greet("tharun");
greet("Tharun",23);
```
- if we give age then it should be a number or else we can simply leave that argument.

**Function with an object**

```ts
type User = {
    name: string;
    age: number;
};

function showUser(user: User): void{
    console.log(user.name);
    console.log(user.age);
};

showUser({
    name: "Tharun kumar",
    age: 23
});
```