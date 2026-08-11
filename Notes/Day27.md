#### Interface Extension(extends)

- You already know that an interface can describe an object.
```ts
interface User{
    name: string;
    age: number;
}
```
- Now imagine another object needs all the properties of User plus some additional properties.
- Instead of writing same properties again and again we can extend the inferface.

```ts
interface User{
    name: string;
    age: number;
}
interface Employee extends User{
    employeeId: number;
}

```
- Now Employee has properies from User as well as its own properties as well
```ts
const employee: Employee={
    name: "Tharun",
    age: 23
};
```
- `Employee` **inherits the structure** of `User` and adds something new.

**Multiple interfaces**

- An interface can also extend more than one interface:
```ts
interface Person{
    name: string;
}
interface Contact{
    phone: number;
}
interface User extends Person,Contact{
    age: number;
}

const user: User = {
    name: "string",
    phone: 12345678,
    age: 23
};
```
- so here,
- person has name property
- contact has phone property
- user has name + phone + age properties beacuse of the extends.
