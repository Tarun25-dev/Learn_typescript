class Animal{
    move(): void{
        console.log("Animal is moving");
    }
}

class Dog extends Animal{
    override move(): void{
        console.log("Dog is running");
    }
}

class Fish extends Animal{
    override move(): void {
        console.log("Fish is swimming");
        super.move();
    }
    
}

const dog = new Dog();
const  fish = new Fish();

dog.move();
fish.move();


// Dog is running
// Fish is swimming