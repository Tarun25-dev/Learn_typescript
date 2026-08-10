#### Destructuring with Typescript

- We already knows objects 
```ts
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Tharun",
    age: 23
};
```
- Normally we can access properties like this:
```ts 
console.log(user.name);
console.log(user.age);
```

**Object destructuring**
- Instead of writing:
```ts
console.log(user.name);
console.log(user.age);
```
- You can write like this:
```ts
const {name, age} = user;
```
- Now we have two variables name and age.
- we are simply taking properties out of an object  into sperate variables.
- Typescript understands the type of name and age from object user.

**Destructuring in function parameters**

- instead of like this:
```ts
type user = {
    name: string;
    age: string;
};

function printUser(u: user): void{
    console.log(u.name);
    console.log(u.age);
};
```
- We can write like this:
```ts
function printUser({name, age}: user): void{
    console.log(name);
    console.log(age);
};
```
- The function receives a user object but immediately extracts its properties.

**Renaming while destructuring**

- If you want a different variable name instead of property name.
- Then we use like {name: rename} like this
```ts
type User = {
    name: string;
    age: number;
};
function my({name: myname, age: myage}: User):{
    console.log(myname);
    console.log(myage);
}
```