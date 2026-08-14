#### Extract<T, U>

**What is Extract<T, U>?**
- Extarct does the opposite of Exclude.
- It keeps only the union members from T that are also assignable to U.

```ts
type Status = "success" | "error" | "loading";

type Result = Extract<Status, "success" | "loading">;
```
- It keeps the matching members.

**Exclude VS Extract**
- Exclude<T, U> = Removes matching members.
- Extract<T, U> = Keep matching members.

**Extract VS Pick**
- Pick<T, K> = selects properties from an object type.
- Extract<T, U> = selects matching members from union.

**Example**
```ts
type Role = "admin" | "user" | "guest";

type AllowedRole = Extract<Role, "admin" | "user">;
```