class User{
    constructor(
       public name: string,
       public age: number
    ){}
}

const user = new User("tharun",23);
console.log(user.name);
console.log(user.age);

// tharun
// 23
