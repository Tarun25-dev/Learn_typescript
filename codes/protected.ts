class Person{
    protected name: string;

    constructor(name: string){
        this.name = name;
    }
};

class Admin extends Person{
    showName(){
        return this.name;
    }
};

const admin = new Admin("Tharun");

console.log(admin.showName());

// Tharun