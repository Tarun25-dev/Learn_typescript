type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "kumar",
    age:25
};

user1.name = "Nani";
console.log(user1);
console.log("user1 property values can be reasssign/change beacuse it has no restrict.")

const user2: Readonly<User> = {
    name: "tharun",
    age: 23
};

console.log(user2);
console.log("user2 can't be reassign its value beacuse it has readonly type.")
// we cant change any value when utilty readonly type constains thet object.


// { name: 'Nani', age: 25 }
// user1 property values can be reasssign/change beacuse it has no restrict.
// { name: 'tharun', age: 23 }
// user2 can't be reassign its value beacuse it has readonly type.