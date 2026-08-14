#### Required<T>

```ts
type User = {
    name: string;
    age?: number;
};

const user: User = {
    name:"tharun"
};
```
- Here age is optional.

**What does Required<T> do?**
- Required<T> takes a type and makes all its properties required.
```ts
type CompleteUser = Required<User>;
```
- Even though User has optional properties but using this Required type makes all required for CompleteUser.
**Conceptually, Typescript transforms:
```ts
type User = {
    name: string;
    age?:number;
    city?: string;
};

// into

type CompleteUser = {
    name: string;
    age: number;
    city: string;
};
```
**Partial<T> VS Required<T>**
- We can think of them as opposites.
- Partial<T> - Makes all properties optional.
- Required<T> - Makes all properties required.
