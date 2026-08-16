#### React-relevant Utility Types

- NonNullable with practical combinations + Partial, Pick, Omit, and Record together.

**Combining Utility types**
- Suppose:
```ts
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
};
```
**Public User**
- We don't want to expose password:
```ts
type PublicUser = Omit<User, "password">;
```

**Pick only what a component needs**
- Suppose react component only needs: name and email:
```ts
type UserCardProps = Pick<User, "name" | "email">;
```
- Now the component's props are limited to exactly those properties.
```ts
function UserCard(props: UserCardProps){
    props.name;
    props.email;
};
```
- This is very useful in React beacuse components usually should't receive an unnecessarily large object.

**Partial for update data**

```ts
type UserUpdate = Parial<Pick<User, "name" | "email" | "age">>;

const update: UserUpdate = {
    email: "123@gmail.com"
};

```
**Record for UI states**
- Suppose a react application has these states:
```ts
type Status = "loading" | "success" | "error";

```
- We can create a mapping:
```ts
type StatusMessage = Record<Status,string>;

const messages: StatusMessage = {
    loading: "Loading..",
    success: "Success!",
    error: "Something went wrong"
};
```