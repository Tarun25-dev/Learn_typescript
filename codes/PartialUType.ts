type User = {
    name: string;
    age: number;
};

const user1: User = {
    name: "tharun",
    age: 22
};

const update: Partial<User> ={
    age: 23
};

// if we want to update that in user1 with update then we need to know another topic called object.assign().
console.log(update);

// { age: 23 }