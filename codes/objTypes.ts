let user:{
    name: string;
    age: number;
} = {
    name: "Tharun",
    age: 23
};

// but we can write without dtype beacuse tsc infer all the types and assign at the compile time.

let u = {
   name: "Tharun",
   age: 23
};