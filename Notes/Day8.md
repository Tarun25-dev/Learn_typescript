#### Arrays and Tuples

**Array in TS**
- We know that the array can have multiple numbers or strings or boolean and its length can change.
```ts
let numbers: number[] = [10,20,30];
```
- But what if we want to describe an array where each position has a specific meaning and type? Thats where tuples comes in.

**Tuple**
- A tuple is a typescript array where you specify the exact number of elements and the type of each element in a specific order.
```ts
let user: [string,number]=["Tharun",25];
```
- pos 0 must be a string user[0] = string 
- pos 1 must be a number user[0] = number
- Main importantly it not expanded its tuple size as normal array does. SO make sure that how many types you write that times only u need to give.
- And also it allows you to work with push() and its value is add at the last of the tuple.
- Main importantly it adds after the defined positions. Ts allows the pushed value if its type is compatible with the tuple element type.
```ts
let role: [string,number]=["read",100];
role.push("write"); //allows
role.push(200); //allows
```

**Arrays VS Tuples**

- **Array:** Every element can be a string or number. There isn't a fixed meaning for each position. 
- Collection of similar/allowed kinds of values.
- **Tuple:** There is a fixed type for each position.
- fixed position collection where each position has a fixed type.

**Why tuple can be useful?**
- Imagine a coordinates
```ts 
let coords: [number, number] = [10,20];
```
- Or a person record
```ts
let person: [string,number] = ["tharun",23]; //strong first name(string) and second must be age (number)
```
**Tuples can contain different types**

```ts
let product: [string, number, boolean] = ["laptop",63000,true];
```
- here first position must be string, product[0] = "laptop"
- second position must be number, product[1] = 63000
- third position must be a boolean, product[2] = true
- and more importantly that positions are fixed by type and only the specific type only allowed.
- Tuple is just an array with different type and the order and position are part of the tuples type.