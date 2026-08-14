#### Readonly<T>

- Partial<T> = makes properties optional
- Required<T> = makes properties required
- Pick<T, K> = keeps selected properties
- Omit<T, K> = removes selected properties
- Record<K, T> = creates an object type from keys + value type.

**Readonly<T>**
- Readonly makes all properties read-only

```ts
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "tharun",
    age: 22
};
```
- Actually we can reassign any property value like this:
```ts
user.age = 23;
```
- But we dont want that any accidental code mistakes so thats why we need to keep read-only utility type.

```ts
const user: Readonly<User> = {
    name: "tharun",
    age: 23
};

```
- Instead of using readonly method for every property we use this utility type for applying all properties.

**Why is this useful?**
- Imagine configuration that shouldn't accidentally change:
```ts

type Config = {
    apiURL: string;
    version: string;
};

const config: Readonly<Config> = {
    apiURL: "https://api.example.com",
    version: "1.0"
};
```
- If any property change like config.version = "4.1" but this not allows typescript.
