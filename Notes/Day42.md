#### Omit<T, K>

- We already learned:
- Partial<T> = makes properties optional
- Required<T> = makes poperties required
- Pick<T, K> = keeps only the properties you choose.

- Omit<T, K> = Removes the properties you choose.

```ts

type User = {
    name: string;
    age: number;
    id: number;
};

type Profile = Omit<User, "id">;

const UserProfile: Profile = {
    name: "tharun",
    age: 23
};
```
- For multiple properties to remove.
```ts
type Profile = Omit<User, "id" | "age">;

const UserProfile: Profile = {
    name: "Tharun"
};

```

**Why Omit<T, K> is Useful?**
- Suppose when sending user information to the frontend, you may not want to expose the password.
```ts
type User = {
    name: string;
    age: number;
    email: string;
    password: string;
};

type safeUser = Omit<User, "password">;

```
- Now SafeUser contains everything except password.
