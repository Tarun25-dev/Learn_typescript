type P ={
    name: string;
    age?: number;
    phone?: number;
};

const p: P ={
    name:"Kumar"
};


console.log(p);

// { name: 'Kumar' }

type Q = Required<P>;

const q: Q = {
    name: "Tharun",
    age: 23,
    phone: 123444
};

console.log(q);

// { name: 'Tharun', age: 23, phone: 123444 }
