class User{
    public name: string;

    constructor(name: string){
        this.name = name;
    }
};

const user = new User("Tharun");

console.log(user.name); 

// Tharun