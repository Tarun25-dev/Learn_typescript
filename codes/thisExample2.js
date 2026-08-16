const user = {
    name: "Tharun",

    greet(name){
        console.log(name);
        console.log(this.name);
    }
};

user.greet("Kumar");

// Kumar
// Tharun