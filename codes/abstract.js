"use strict";
class Animal {
}
class Dog extends Animal {
    sound() {
        console.log("Bowww!");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Meeaoww!");
    }
}
const dog = new Dog();
const cat = new Cat();
dog.sound();
cat.sound();
