#### objects in JS

**Object**
- We already worked with individual variables.
- These are seperate variables but these seperate variable values describe one person.
- An object lets us group related data together.
- **An object in js is a collection of related properties/data.**

```ts
let person = {
    name:"tharun",
    age: 23,
    city:"Nandyal"
    };
```
- The things inside the object are called properties.

**Property**
- property is a set of two values in the object which is divided from column they are called **key-value pairs**
- key examples are name or age or city.
- value examples are tharun or 23 or nandyal.

**How do we can access the data?**

- using the (**.**) dot
- `console.log(person.name);` here person is an obj name and name is a key in that obj and this will give us a value of that key.
- `console.log(person.age);`
- also we can use brackets[]
- `console.log(personn["name"]);` OR `console.log(person[age]);`

**Objects can contain different data types**

```ts 
let user = {
    name: "Tharun",
    age: 23,
    isFresher: true
};
```
- So unlike every array element follows the same type but an object can have types for different properties.

**Objects can be modified**

```ts
let user = {
    name: "Tharun",
    age: 22
};
user.age = 23;
```

**Adding new property in js**
```js
user.city = "Nandyal";
```

**Deleting property**
```ts
delete user.age;
```

#### Object Types

- You have already seen types of individual values:
- let `age: number = 22;` or `let name: string = "tarun;`
- But in real applications don't usually work with isolated values. They work with objects containing multiple pieces of related data.
- For example: 
```ts
let user = {
    name: "Tarun",
    age: 22
};
```
- We can describe the shape of the object with Typescript:
```ts
let user:{name: string; age: number;} = {name: "Tharun", age: 23};
```
- Think of the type as a blueprint.
- And also in objects ts can understands types and assign while compiling.
```ts 
let user = {
    name: "tarun",
    age:23
};
```