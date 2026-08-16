#### keyof + typeof patterns in real react style code

**typeof**
- Get a value's type
```ts
const user = {
    name: "tharun",
    age: 23
};

type User = typeof user;
```
- So User becomes name: string; age: number;

**keyof**
- get the keys
```ts
type UserKey = keyof User;
```
- UserKey has "name" | "age"

**Real example**
```ts
const user = {
    name: "tharun",
    age: 22,
    city: "nandyal"
};

type User = typeof user;
type UserKey = keyof User;

```
- This means we can create a function that only accepts valid keys:
```ts
function getValue(key: UserKey){
    return user[key];
};
```
- so that only allows getValue("name") or getValue("age") or getValue("city")

**Why is this Powerful?**
- The best part is that if you modify the original object, you don't need to manually update those are automatically follows the objects structure.

- Useful mainly in:
- **type-safe props**
- **configuration**
- **objects**
- **event-mappings**
- **reusable React components**
