#### Pick<T, K>

- Suppose Imagine you have a large object type, but you only want some specific properties from it.

**Problem**
```ts
type User = {
    name: string;
    age: number;
    city: string;
    email: string;
};
```
- Suppose you only need two: name and email so you could manually create another type like this:
```ts
type UserContact = {
    name: string;
    email: string;
};
```
- But typescript gives us cleaner way.

**Pick<T, K>**
- T here is that existing type from that type we take desired properties only.
- K means the keys
```ts
type UserContact = Pick<User, "name" | "email">;

const userContactDetails: UserContact = {
    name: "tharun",
    email: "123@gmail.comm"
};
```
- here UserContact beacomes like this internally:
```ts
type UserContact = {
    name: string;
    email: string;
};
```
- Here K is similar to keyof but here we want to take what keys are we need and if any invalid key then it won't allow that.

- Pick<T, K> **creates a new type by selecting specific properties from an existing type.**