type USER = {
    name: string;
    age: number;
};

const P1: USER = {
    name: "Tharun",
    age: 23
};

const UpdateAge: Partial<USER> = {
    age: 22
};

const NewP1 = {
    ...P1,
    ...UpdateAge
};

console.log(NewP1);

// { name: 'Tharun', age: 22 }