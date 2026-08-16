const User = {
    name: "Tharun",
    age: 23,

    greet(){
        console.log(this.name);
        console.log(this.age);
    }
};

User.greet();

// Tharun
// 23