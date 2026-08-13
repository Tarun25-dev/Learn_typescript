type User = {
    name: string;
    age: number;
};

function getPropery<T, K extends keyof T>(obj: T,key: K){
    return obj[key];
};

const profile1: User = {
    name: "Tharun",
    age: 23
};

const profile2: User = {
    name: "Kumar",
    age: 24
};

const profile3: User = {
    name: "Nani",
    age: 25
};

console.log(getPropery(profile1,"name"));
console.log(getPropery(profile2,"name"));
console.log(getPropery(profile3,"name"));

// Tharun
// Kumar
// Nani