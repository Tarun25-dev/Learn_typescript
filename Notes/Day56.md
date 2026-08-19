#### Access Modifiers in Typescript

- There are four types of access modifiers in classes.
- [1]. public
- [2]. private
- [3]. protected
- [4]. readonly
- These controls who can access or change class properties and methods.

**[1]. public:**
- public means the property or method can be accessed from anywhere.
- class members are public by default.
```ts
class User{
    public name: string;

    constructor(name: string){
        this.name = name;
    };
}

const user = new User("Tharun");

console.log(user.name); // Tharun
```
- So we can access the name property of a class outside.
- public lets you to access:
- class can access.
- child class can access.
- outside class can access.

**[2]. private:**

- private means the property or method can only be accesssed inside the same class.

```ts
class BankAccount{
    private balance: number;

    constructor(balance: number){
        this.balance = balance;
    }
    showBalance(){
        console.log(this.balance);
    }
};


const account = new BankAccount(1000);

account.showBalance();
```
- But can't access account.balance; beacuse balance is private.
- inside BankAccount we can access balance.
- outside BankAccount we can't access balance.
- But first we use that property inside a method so that method can access and it can return that value to outside safely.
- account.showBalance();

**[3]. protected:**
- protector means the member can be accessed inside the class and inside classes that inherit from it, but not from outside.
```ts
class User{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }
};

class Admin extends User{
    showName(){
        return this.name;
    }
};

const admin = new Admin("Tharun");

console.log(admin.showName()); // Tharun
```
- We can use protected member in User class as well as child class.
- But we can't access outside of the class directly admin.name; wrong.

**[4]. readonly:**
- readonly means the property can be assigned during initialization, but we can't changed afterward.

```ts
class User{
    readonly id: number;

    constructor(id: number){
        this.id = id;
    }
}

const user = new User(3225);
console.log(user.id); // 3225
```
- But we can't reassign that value like user.id = 1000; Not valid in readonly.
- This is useful for values such as: userID, orderID, productID, created timeStamp

- **Think of a class as a house:**
- public = front door: everyone can enter.
- private = personal room: only the owner/class.
- protected = family room: class and child classes only.
- readonly = locked value: can see/access it according to visiblity, but can't change it.