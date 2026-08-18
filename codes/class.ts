class User{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const user = new User("Tharun", 23);

console.log(user)
// User { name: 'Tharun', age: 23 }