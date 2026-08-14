#### Partial type with Spread operator and Object.assign()

**Spread syntax**
- It is represent as three dots(...).
- It used to copy the existing properties of one object into another object and returns it in new object.

```ts 
type User = {
    name: string;
    age: number;
};

const user1: User ={
    name: "tharun",
    age: 25
};

const UpdateFullObject: User = {
    name: "Kumar",
    age: 23
};

const UpdatedUser1 = {
    ...user1,
    ...UpdateFullObject
};
```
- It takes all properties of user1 and copy that into UpdatedUser1.
- and then UpdateFullObject are also copy all properties into UpdaredUser1.
- So, whatever that properties exists in both objects are reassigned updated one.
- Like first ...user1 name: "tharun"
- ...UpdateFullObject name: "kumar" like that 
- Here name: "kumar" is overwrites the previous name.

**Using Partial<T>**

```ts
const updateAge: Partial<User> ={
    age: 23
};

const updatedUser: User ={
    ...user,
    ...update
};
```

**Object.assign()**
- Another javascript way to merge objects is:
```ts
Object.assign(user, update);
```
- It copies properties from update into user.
- So no need to create seperate object to store unlike spread operator(...).
```ts
const user = {
    name: "tharun",
    age: 23
};

const UpdateAge = {
    age: 22
};

Object.assign(user, update);
console.log(user);
```

**Main difference**
- spread = **creates a new object.**
- Object.assign() = **modifies the target object**

**Real application Example:**

```ts

type User = {
    name: string;
    city: string;
};

const user1: User = {
    name: "tharun",
    city: "Hyd"
};

```
- For Spread operator
```ts
const UpdateCity: Partial<User> = {
    city: "Ndl"
};

const UpdatedUser1 = {
    ...user1,
    ...UpdateCity
};
```
- For Object.assign() 
```ts
const UpdateName: Partial<User> = {
    name: "Kumar"
};

Object.assign(user1, UpdateName);

console.log(user1);
console.log(UpdatedUser1);

```