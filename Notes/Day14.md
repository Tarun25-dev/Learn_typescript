#### type with union

` let id: number | string; ` This means id can constain either a number or a string. Now we can put that union inside a resusable type alias.

```ts
type User = {
    name: string;
    age: number;
    id: string | number;
};

let user1: User = {
    name: "Tharun",
    age: 23,
    id: "SREC3225"
};

let user2: User = {
    name: "Kumar",
    age: 23,
    id: 3225
};
```

- Don't confuse with:

```ts
type user = {
    id: number | string;
};
``
- Reusable object structure 

```ts
type Id = number | string;
let userId: Id = 101;
let anotherId: Id = "USER101";
```
- reusable type itself.

- The first one creates a type for an object structure.
- The second creates a type alias for a union itself.