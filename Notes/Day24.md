#### rest parameters in functions

**Problem**
- Suppose we want a function that can accept any number of numbers(arguments).
```ts
function add(a: number, b: number, c: number){
    return a+b+c;
}
```
- But this only handles three parameters.
- But what if add(10,20) or add(10,20,30,40) or add(1,2,3,4,5,6)
- We don't want to keep add parameters.

**Rest parameters**
- Typescript lets us collect multiple arguments into an array.

```ts
function add(...numbers: number[]): number{
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
};

add(10,20);
add(10,20,30);
add(12,10,43,23,13);
```
- here all are valid, inside the function numbers is an array and number[] is a type of array.
- rest parameters collect all remaining arguments into an array.

**Typescript role**

- Collect any  number of arguments, but every argument must be a number.
- `...numbers: number[]`

**rest parametes after normal parameters**

- We can also have normal parameters first 

```ts
function greet(message: string, ...names: string[]): void{
    console.log(message);
    console.log(names);
};
greet("Hello","tharun","kumar","nani");
```

- ...names collects all the remaining arguments
- message = "Hello"
- names = ["tharun","kumar","nani"]

**Important rule**

- The rest parameters must be last.
- Beacuse the typescript needs to know where the remaining arguments end.