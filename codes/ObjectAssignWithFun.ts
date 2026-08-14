type R = {
    name: string;
    age: number;
    city: string;
};

const User1: R = {
    name: "Tharun",
    age: 23,
    city: "Nadyal"
};

function updateUser(updates: Partial<R>){
    Object.assign(User1, updates);
};

updateUser({city: "Nandyal"});

console.log(User1);

// { name: 'Tharun', age: 23, city: 'Nandyal' }