#### NonNullable<T>

- This utility type is used to remove null and undefined from a type.

```ts
type Values = string | null | undefined;

type safeValues = NonNullable<Values>;
```
- safeValues only has string and NonNullable removes null and undefined.

**With multiple types**

```ts
type Value = string | number | null | undefined;

type safeValues = NonNullable<Value>;
```
- safeValues has string | number.

**Why is it useful?**
- Imagine an API response:
```ts
type User = {
    name: string;
    email: string | null;
};
```
- Sometimes the email might be null.
- If you create:
```ts
type Email = NonNUllable<User["email"]>;
```
- We are extracted a version where null isn't allowed, So email must be required as a string.
- Conceptually it behaves like: Exclude<T, null | undefined>

**One important distinction**
- NonNullable doesn't check or convert the runtime value.
- It only changes the typescript type.
- **It tells Typescript that the resulting type does not include null or undefined.**
