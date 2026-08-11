#### Indexed Access Type

- This connects directly to the keyof concept.
- We alreay know that 

```ts 
type User = {
    name: string;
    age: number;
    city: string;
};
```
- And keyof User gives "name" | "age" | "city" and this is called as key literal type.
- But what if we want to ask typescript, **What is the type of this value stored under this key?**
- That's where indexed access types come in.

**User["name"]**
```ts
type NameType = User["name"];
```
- Ts returns "string" or "number" that actually the type of name we given there as string so it gives ans string.

**Using keyof with indexed access type**
```ts
type User = {
    name: string;
    age: number;
};

type UserKey = keyof User;

type UserValue = User[UserKey]; // User only allows either string for "name" or number for "age"
```
- here UserKey is contains the keys from User like this "name" | "age".
- UserValue is telling that what type of value can be store in that type keys
- like User[Userkey] is gives output like string | number.
- if we want only for name key then User["name"] then that gives **string**.

**Important distinction**

- Don't confuse this `user[key]` and `User[UserKey]`.
```ts
const user = {
    name: "tharun",
    age: 23
};

console.log(user[name]);
```
- this is a ts/js code that accesses a value at runtime.
- for User[UserKey] this we can already write example above:
- this is a typescript type-level operation that asks **what type does this property have?**

**Why is this useful?**
- It becomes powerful when creating reusable Typescript code.
- For example:
```ts
type User = {
    name: string;
    age: number;
};

type UserName = User["name"]; //string
```
- If later you change `name: string;` to `name: number;` then UserName automatically becomes number.
- You don't have to manually update it.
- The main practical use is to reuse the exact type of a property somewhere else without writing it again.
- Use you only need one property's type for indexed access type but if you want full structure then use that type directly.