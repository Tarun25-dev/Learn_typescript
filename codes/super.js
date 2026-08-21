"use strict";
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    move() {
        console.log("Dog is running");
    }
}
class Fish extends Animal {
    move() {
        console.log("Fish is swimming");
        super.move();
    }
}
const dog = new Dog();
const fish = new Fish();
dog.move();
fish.move();
// Dog is running
// Fish is swimming
