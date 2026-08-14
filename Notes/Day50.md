#### Awaited<T>
- This is especially useful when we working with Promises and async/await.
```ts
type Result = Awaited<Promise<string>>;
```
- Result becomes string.

```ts
async function getUser(){
    return {
        name: "tharun",
        age: 23
    };
};
```
- Beacuse its async, the function actually returns a Promise like:
```ts
Promise<{name: string; age: number;}>;
```
- We can extract the final resolve value:
```ts
type User = Awaited<ReturnType<typeof getUser>>;

```
- Now User becomes {name: string; age: number;}

**Why Awaited?**
- Without Awaited:
```ts
type Result = ReturType<typeof getUser>;
```
- You get the Promise type.
- With Awaited:
```ts
type Result = Awaited<ReturnType<typeof getUser>>;
```
- We get the actual value type inside the Promise.

**Awaited isn't only for Promise**
- It recursively unwraps Promise-like types.
- For example:
```ts
type A = Awaited<Promise<string>>;
// string
```
```ts
type B = Awaited<Promise<Promise<number>>>;
// number
```