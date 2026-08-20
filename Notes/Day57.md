#### Typescript class Features

[1]. Parameter properties
[2]. Typing classes and their instances.

**The Normal way:**
```ts
class User{
    name: string;
    age: number;
    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }
}
```
- But there is a lot of repetition:
- name: string age: number in data/properties
- name: string age: number in constructor
- But typescript gives us a shorter way.

**Parameter Properties**
- A parameter property lets a constructor parameter automatically becomes a class property.
- You add an access modifier such as public, private, protected, readonly before the constructor parameter.
```ts
class User{
    constructor(
        public name: string,
        public age: number
    ){}
}
```
- This automatically creates name: string; age: number;
- And assigns automatically this.name = name; this.age = age;

**We can use access modifiers**
```ts
class BankAccount{
    constructor(
        private balance: number,
        public owner: string
    ){}
}

const account = new BankAccount(10000,"Tharun");
console.log(account.name);
// we cant access balance.
```
**class typing**
- You can use class as a type.
```ts
class User{
    constructor(
        public name: string
    ){}
}

const user: User = new User("Tharun");
```
- user must be an instance of the User class.
- We can also use it in functions.
```ts
function printUser(user: User){
    console.log(user.name);
}

const user = new User("Tharun");
printUser(user);
```

**Important distinction**
- A class has two sides:
- [1]. User class -> instance side -> objects created with new.
- [2]. created with new -> Static side -> class itself.

**Production relevance**
- Parameter properties are common in typescript code beacuse they make classes much shorter.
```ts
class Product{
    constructor(
        public readonly id: number,
        public name: string,
        private price: number
    ){}
}
```
- You immediately get:
- id is public with can't change.
- name is public and can change.
- price is private
- Without writing seperate property declarations.