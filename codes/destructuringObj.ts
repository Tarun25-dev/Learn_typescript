type User = {
    n: string;
    age: number;
};

const user1: User = {
    n: "tharun",
    age: 23
};

const {n, age} = user1;

console.log("name: "+ n);
console.log("age: "+ age);

// if we dont need that same property name then we can rename also that with new variable

const {n: myname, age: myage} = user1;
console.log(myname);
console.log(myage);

// name: tharun
// age: 23
// tharun
// 23