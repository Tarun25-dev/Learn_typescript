type User = {
    name: string;
    age: number;
};

type AllKeys = keyof User; // "string" | "number"

function getValue(user: User,key: AllKeys){
    return user[key];
};

const user1: User = {
    name: "tharun",
    age: 23
};

console.log(getValue(user1,"name"));
console.log(getValue(user1,"age"));

// tharun
// 23
