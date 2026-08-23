abstract class Animal{
    abstract sound(): void;
}

class Dog extends Animal{
    sound(): void {
        console.log("Bowww!");
    }
}

class Cat extends Animal{
    sound(): void {
        console.log("Meeaoww!");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();

// Bowww!
// Meeaoww!