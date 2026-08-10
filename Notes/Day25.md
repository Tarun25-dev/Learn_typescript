#### Function overloads

- Sometimes we want one function name to accept different kinds of inputs while still giving typescript precise type checking.

**Problem**
- Suppose we want a function that can accept either a string or a number.
```ts
function format(value: string|number){
    return value;
}
```
- This works but typescript only knows that the result is string or number
- Sometimes we want more precise behavior depending on what we pass.

**Function overloads**
- We can describe the allowed ways to call the function first.
- let you define exactly which combinations are allowed then that only allows ts to further
```ts
function format(value: string): string;
function format(value: number): number;
```
- this is called a overload signatures with both are same function name 
- here we are expressed that our specific way like value is either `string + string` or `number + number`.
- By defining this we reduce typescript load to work on other ways also like `string + number` or `number + string`
- The overload signatures define the allowed combinations.

**implementaion**
```ts
function add(value: string|number): string | number{
    return value;
}
```
- overload lets you restrict the combinations that actually we don't want.

**Another example**

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: string | number, b: string|number): string|number{
    return a+b;
}

add(25,26);
add("25","26");

errors 

add(25,"26"); 
add("25",26);
```
- The last two statements are not allowed combination for oparticular this function.
- thats what we wrote in the overload signature that is if inputs are number then both must number and number and return number
- if we give strings for both beacuse of this line function add(a:string,b:string): string;
- If we want another combination like add(25,"25"); then we need to add another signature like this 

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;

```
- but it may leads to error if we perform operations on numbers with strings.

**Example**
```ts
function getLen(value: string): number;
function getLen(value: number[]): number;

function getLen(value: string | number): string | number{
    return value.length;
}
console.log(getLen("tharun"));
console.log(getLen([1,2,3,4,5,6]));

```
- here we set load signatures foe value if it is string then its return type is number and if it is number array then it returns number.
- simple if we give string then it returns its length
- if we give an array the it returns its length.