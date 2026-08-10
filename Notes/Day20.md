#### Callback Functions

- a callback function is simply a function that you pass as an argument to another function, so the other function call it later.
```ts 
function greet(name){
    console.log("Hello"+ name);
};
```
- it doesn't run yet
- We create another function
```ts
function processUser(callback){
    callback("tharun");
};
```
- here callback is just a parameter.
```ts
processUser(greet);
```
- We are passing the function greet into processUser.
- here first comes processUser(greet);
- then it goes to that function with parameter as greet(function).
- and then js internally equals the callback = greet 
- and then callback is greet then callback("tharun") = greet("tharun")
- it call greet function with one parameter name 
- and then it prints hello tarun.
- A callback is function that we give to another function so that the other function can call it when needed.

**Function as an argument**

```ts
function calculate(a: number, b: number, operation:(x: number, y: number) => number): number {
    return operation(a,b);
}

function add(x: number, y: number): number{
    return x+y;
};
function mul(x: number, y: number): number{
    return x*y;
};

calculate(10,20,add);
```
- here a is a number and b is a number.
- operation must be a function that accepts two numbers and returns a number.
- next return type as number 
- and in return it calls the function stored in operation using a and b.


