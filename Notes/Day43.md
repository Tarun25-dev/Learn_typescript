#### Record<K, T>

- We already know:
- Partial<T> = makes all properties optional.
- Required<T> = makes all properties required.
- Pick<T, K> = keeps selected properties.
- Omit<T, K> = removes selected properties.


**Record<K, T>**
- Create an object type from a set of keys and one value type.

```ts
type Scores = Record<string, number>;

const scores: Scores = {
    Tarun: 90,
    Ravi: 85,
    Arun: 92
};
```
- The object can have string keys and every value must be a number.

***Using specific keys**
- Record becomes more powerful when we give it specific keys.
```ts
type Role = "admin" | "user" | "guest";

type Permission = Record<Role, boolean> = {
    admin: true,
    user: true,
    guest: false
};

```
- Important to give all keys which we taken from Role or else It is not valid.
- Beacuse Record requires every key.
- Record<K, T> = k --> allowed keys and T --> type of every value.

**Why is Record Useful?**

- It is useful when you have a known set of keys and want to guarantee that every key has a particular value type.
- Ex: application configuration, permissions, mappings, translations, etc.
- When you have an object where you know what the keys looks like and what type every value should have.

**Record with Keyof**

```ts
type User = {
    name: string;
    city: string;
    email: string;
};

const user1: Record<keyof User, string> = {
    name: "tharun",
    city: "nandyal",
    email: "123@gmail.com"
};

```