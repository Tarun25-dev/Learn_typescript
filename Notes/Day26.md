#### interface alias

- We already know about type alias, It stroes the type structure of an object.
```ts
type User = {
    name: string;
    age: number;
};
```
- An interface can describe the structure of an object in a very similar way:
```ts 
interface User{
    name: string;
    age: string;
};

const user: User = {
    name: "tharun",
    age: 23
};
```
- Typescript checks that user follows the User structure.

**Why do we need interface?**
- Imagine you're creating many objects with the same structure.
- The main purpose of interface is to define the shape of objects/classes, especially when you expect that shape to be extended or implemented.
```ts
interface User{
    name: string;
    age: number
}

interface Admin extends User{
    role: string;
} 

const admin: Admin = {
    name: "Tharun",
    age: 23,
    role: "admin"
};
```
- Admin is also represents the structure with other properties include like from User it takes all properties into Admin through extends.
- But type is more flexible for creating unions, tuples, premitives, etc.

**Why interface prefer over type in object contract or extends**
- Beacuse interfaces are designed especially for defining object structures that can be extended and implemented.
- contract = You must follow thses rules.

**Optional with Interface**
```ts
interface User{
    name: string;
    age?: number;
}

const u1: User  = {
    name: "tharun"
};
const u2: User = {
    name: "kumar",
    age: 23
};
```
**readonly also works**
```ts 
interface User{
    readonly id: number;
    name: string;
}

const user: User = {
    id: 101,
    name: "tharun"
};

user.name = "kumar"; //works
user.id = 100; // invalid beacuse id is only for read
```
- here user name will be reassigned successfully but we cant reassign the value for id beacuse it is only for read purpose.
