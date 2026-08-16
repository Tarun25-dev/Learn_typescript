const user = {
    name: "tharun",
    age: 23,
    city: "Ndl"
};

// want a type that followed by user
type User = typeof user;

const user1: User = {
    name: "kumar",
    age: 23,
    city: "ndl"
};

// want a keys that User type has
type Keys = keyof User; // "name" | "age" | "city"

function show(key: Keys){
    console.log(user[key]);
};

show("name");
show("age");
show("city");

// tharun
// 23
// Ndl