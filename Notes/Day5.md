#### let and const

**let**:
- let is used to define a varible and that the value can be reassigned.
- Ex:
```ts
let age = 22;
age = 23;
```

**const**:
- const(constant) is a also used to define a variable and that the value can't be reassigned.
- EX:
```ts
const age = 22;
age = 23;
console.log("this can't work and throws ans error.");
```

**Literal type**

A type that allows a variable to have one specific exact value(or a small set of exact values.) in same type we can apply limitation values only.
- Normal type Ex:
```ts
let day: number = 22;
age = 30;
age =100;
age = -5;
```
- so number is a broad type and it can allows any number but in literal type we can allow only a specific values or specific set of values only in the same type.
- in literal type the tsc can infer the type of that value is **value itself**.
- literal type with number Ex:
```ts
let age: 23 = 23;
```
- ts understands the value must be a number and more specifically it must be exactly 23.
- left 23 is a number literal type.
- right 23 is a value that age variable.

- literal type with string Ex:
```ts
let direction: "left" = "left";
```
- so only left is allowed in the direction variable (variable = left)

- Literal type with multiple values Ex:
```ts
let direction: "left" | "right" | "up" | "down";
direction = "left"; //works
direction = "right";//works
direction = "up";//works
direction = "down"; //works
```
- in this type we can select any value that from the set of values given and no more outside values cant be there.
- This called union of **literal types.**

- **WE can use directly type as well instead of values as type**
- Ex:
```ts
let id: number | string;
id = 23;
id = "tharun kumar";
id = 2026;
```
- so this variable allows number type and string type values both and if we try to assign boolean the it rise an error.