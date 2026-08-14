#### Exclude<T, U>

- This is another utility type, and its especially useful with union types.

**Exclude<T, U>**
- Exclude removes from T any union members that are assignable to U.

```ts
type Numbers = 1 | 2 | 3 | 4;

type Result = Exclude<Numbers, 2 | 4>;

```
- Think of it like filtering
- In T has "success" | "error" | "loading"
- Then Exclude<T, "loading">
- After that "success" | "error".
- Think like: **Give me everything except these union members.**

**Omit VS Exclude**
- Omit<T, K> = Removes properties from an object type.
- Exclude<T, U> = Removes members from a union type.