#### as const

- We already know literal types:
- let status: "success" | "error";
- But sometimes ts widens values when creating objects or arrays.
- as const tells typescript: Treat these values as their exact literal values and make the structure readonly.

**Without as const**
```ts
const status = "success";
```
- ts can infer its type as string.
- But with objects:
```ts
const user = {
    role: "admin"
};
```
- The property can be treated as role: string rather than the exact literal "admin".

**With as const**
```ts
const user = {
    role: "admin"
} as const;
```
- Now ts understands {readonly role: "admin"}
- So role is specifically "admin", not just a string.
- It also makes the structure readonly.

**Very useful with arrays**

```ts
const roles = ["admin", "user", "guest"] as const;
```
- So here instead of const roles: string[] 
- We keeps its exact literal type.

**Combinig with typeof and keyof**
- This is where it becomes more powerful.
```ts
const roles = ["admin", "user", "guest"] as const;

type Role = typeof roles[number];
```
- Here number represnts an indexing value that are in number for array or tuple.
- Role contains "admin" | "user" | "guest"

```ts
const statuses = ["Loading", "success", "failed"] as const;

type Status = typeof statuses[number];

```