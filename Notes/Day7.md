#### Arrays and how Typescript types can contain anything?

**Javascript arrays can contain anything**

```js
let values = [10,"hello",true];
```
- An array can contain different types.

**Typescript arrays**
- Typescript can understand what kind of values an array is supposed to contain.
```ts
let arr: numbers[] = [10,20,30]
```
- This means arr is an array and every element should be a number.
- so we can add numbers only like arr.push(40); but not allows like arr.push("hello");
- Same idea for strings as well by changing name number[] to string[].
- Another syntax:
```ts
let numbers: Array<number> = [10,20,30];
```
- for now don't worry about which is better just recognize both.

**Type inference works with Arrays too**
- You don't always need to explicitly write the type.
```ts
let numbers = [10,20,30];
```
- typescript will infer the type of numbers at the compile time.

**What if arrays contains different types?**
- we can use a union:
```ts
let values: (number | string)[] = [10,"hello",100,"world"];
```
- This means the array can contain numbers OR string.
- for union we must use parantheses.

**Don't confuse**
- let a: number | string[]; and let b: (number | string)[];

- For **a**:
- a number OR an array of string. So here the a allows arrays of string like a=["hello","world"] like that and it allows a number as well not array like a = 25; like that.

- For **b**:
- b must be an array and each element either number or string.
- This distinction is very important.