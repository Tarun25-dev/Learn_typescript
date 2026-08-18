#### Classes & Constructors

**What is a class?**
- A class is a blueprint used to create objects that contain both data(properties) and behavior(methods).

```ts
class Person{
    name: string;

    sayHello(){
        console.log(`Hello!, ${this.name}`);
    }
}
```
- Using that class we create an object:
```ts
const person = new Person();

person.name = "Tharun";
person.sayHello();

```

**Why do we need constructor?**
- A constructor is a special method that automatically runs when an object is created with `new`.

```ts
class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const person = new Person("Tharun");
console.log(person.name);
```
- We don't need to write like: const person = new Person(); person.name = "Tharun";
- Beacuse the constructor initializes the object for you.

**What happens Internally?**

```text
        class Person
             |(contains)
             |
        constructor(name)
             |
        new Person("Tharun")
             |
        create a new empty object
             | 
        `this` points to the object
             |
        constructor receives "tharun"
             |
        execute this.name = name
             |
        Return the Person


```
- person internally looks 
```js
person = {
    name: "Tharun"
};
```
- `this` refers to the object currently being used/created.

**Example**
- Imagine a banking application:
```ts
class BankAccount{
    balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number){
        this.balance += amount;
    }
}
```
- Create an account:
```ts
const account = new BankAccount(1000);

account.deposit(500);

console.log(account.balance);
```
- BankAccount - classname, balance - property/data, constructor - initialization, deposit() - behavior

**Default constructor**
- If we don't write a constructor, js provides a default constructor automatically.
```ts
class person{
    name: string;
}

const Person = new person();
```
- But if we want to pass an argument for the new object then we initialization from arguments.
- like new person(value) to initialize something using value, you normally define a constructor parameter to receive that value.
```ts
const Person = new person("tharun");
```

**Important distinction**

- `type` - describes the shape of the data.
- `class` - define the data and behavior and can be used with new to create objects.