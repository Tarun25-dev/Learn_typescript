#### Abstract Classes in Typescript

**What is an abstract class?**
- An abstract class is a class that is meant to be a base/template for other classes.
- You can't create an object directly from an abstract class.
```ts
abstract class Animal{
    abstract makeSound(): void;
}
```
- Why not to create an object from that abstract class?
- Beacuse, Animal is only decribing what an animal must provide. It isn't to be a specific animal.

**Abstract method**
```ts
abstract class Animal{
    abstract makeSound(): void;
}
```
- There is no method body.
- abstract makeSound(): void; It says Any class that extends Animmal must provide its own makeSound().

```ts
abstract class Animal{
    abstract makeSound(): void;
}

class Dog extends Animmal{
    makeSound(){
        console.log("Dog Barks");
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("Cat Sounds");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();

```
- If child doesn't implement the method then typescript gives an error.
- Abstract methods also have a normal method:
```ts
abstract class Animal{
    abstract makeSound(): void;

    sleep(){
        console.log("Animal is Sleeping");
    }
}
```

**Example**
```ts
abstract  class Payment{
    abstract pay(amount: number):void;
    receipt(){
        console.log("Receipt generator");
    }
}

class UPI extends Payment{
    pay(amount: number){
        console.log(`Paid: ${amount} using UPI`);
    }
}

class CreditCard extends Payment{
    pay(amount: number){
        console.log(`Paid: ${amount} using credit card.`);
    }
}

const upi = new UPI();
const card = new CreditCard();

upi.pay(500);
card.pay(1000);

upi.receipt();
```
- Every payment must have pay().
- But the parent doesn't decide how it works.

**Interface VS abstract**
- Interface describes mainly the shape/contract.
- Abstract descrides the contract and shared information.
