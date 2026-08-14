#### Utility Types -- Partial<T>

- We already know that to create an object.
```ts
type User = {
    name: string;
    age: number;
    city: string;
};

const user1: User ={
    name: "Tharun",
    age: 23,
    city: "nandyal"
};
```
- All two properties are required.

**What if we only want to update some property?**
- Now imagine an application where we already have a user:
```ts
const user: User ={
    name: "Tharun",
    age: 23,
    city: "nandyal"
};
```
- Later we only want to update the city:
```ts
{
    city: "Hyderabad"
};
```
- But this is't a complete User, beacuse name and age are missing.
- Thats where Partial<T> helps.

**Partial utility type**
- Partial is a built-in Typescript utility type that makes all properties of an existing type optional.
```ts
const user: Partial<User> = {
    name: "Tharun"
};
```
- So you don't need to give all three properties in User beacuse of the partial.
- So  you can provide one, some, or all properties.
- Partial<User>: Effectively changes it to:
```ts
type User = {
    name?: string;
    age?: number;
    city?: string;
};
```
- **Def:**Partial take an existing type and make all its properties optional.

**Why this useful?**

- This is extreamly common when you're updating existing data.

```ts
function updateuser(id: number, updates: Partial<User>){
    // update only provided fields and we disccuss it later 
    // before we write inside code we need to know about two concepts that is "spread operator(...)" and "Object.assign()"
};

updateuser(101, {age: 24});
```

- Partial<T> --> Take an existing type --> Make all its properties optional.