#### Method Overriding in Typescript

- Suppose we have:
```ts
class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}

```
- Now we create a child class:
```ts
class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}
```
- Here Dog inherits the speak() from Animal but it provides its own version.
- That's called method overriding.
```ts
const dog = new Dog();
dog.speak();
```
- Result: Dog barks, even though speak() originally existed in Animal, the Dog version is used.

**Why do we need overriding?**
- Imagine:
```ts
class Animal{
    move(){
        console.log("Animal is moving");
    }
}

class Dog extends Animal{
    move(){
        console.log("Dog is running");
    }
}

class Fish extends Animal{
        move(){
            console.log("Fish is swimming");
        }
}

const dog = new Dog();
const fish = new Fish();

dog.move();
fish.move();
```
- The parent provides the general behaviour and children customize it.

**The override keyword**
- Typescript provides an override keyword to explicitly tell typescript:
- "I'm intentionally replacing a method from the parent class".

**why use override?**
- Consider this mistake:

```ts
class Animal{
    speak(){
        console.log("Animal sounds");
    }
}

class Dog extends Animal{
    override speek(){
        console.log("Woof!");
    }
}
```
- Notice speek() instead of speak(), Typescript will complain beacuse speek() does'nt actually override anything.
- Thats useful beacuse it catches spelling mistakes.

**override must match the parent Method**
```ts
class Animal{
    speak(): void{
        console.log("Animal sound");
    }
}

class Dog extends Animal{
    override speak(): void{
        console.log("Woof!");
    }
}
```
- The child needs to respect the method's structure appropriately.
- in animal: speak(): void{} must match the Dog: speak() void{}
- Note: override not required to make method overridng work but override gives you an extra safety check.

**super + Overriding**
- Suppose:
```ts
class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    override speak(){
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak() //Dog barks

super.speak(); //Animal makes a sound
```
- super keyword call the parent's version method.

**Real-World Example:**
- Imagine a payment system:
```ts
class Payment{
    process(){
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment{
    override process(){
        console.log("Processing credit card payment");
    }
}

class UPIPayments extends Payment{
    process(){
        console.log("Processing UPI Payment");
    }
}

const card = new CreditCardPayment();
const upi = new UPIPayments();

card.process();
upi.process();
```
- This is one of the foundation of polymorphism.