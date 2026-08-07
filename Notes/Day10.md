#### Read only arrays and tuples

```ts
let names: string[] = ["tharun","kumar"];
names.push("nani");
names[0] = "kodiganti";
```
- We already know that normal arrays can be changed.
- But sometimes we need to create an array like this array should not be modified after it is created and thats where readonly comes in.

**Readonly array**

```ts
let names: readonly string[] = ["kodiganti","Tharun","Kumar"];
// we cant add any values or modify values.
```
- Typescript prevents modification.
- But you can still read like console.log(names[0]) or console.log(names.length).

**Readonly Tuples**

- Same as array 
```ts
let names: readonly [string,number] = ["Tharun",23];
```
- Modification not allowed beacuse the tuple is readonly.

**Why is this useful?**

- Imagine a function receives some data:
```ts
function showUser(user: readonly [string,number]){
    console.log(user[0]);
    console.log(user[1]);
}
```
- The function can read the users data but ts prevents the function from accidentally modifying it..
- This is useful when you want to protect data from accidental changes.