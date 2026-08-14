type U ={
    name: string;
    city: string;
};

const U1: U ={
    name: "Tharun",
    city: "HYD"
};

const UpdateCity: Partial<U> = {
    city: "NDL"
};

Object.assign(U1, UpdateCity);

console.log(U1);

// { name: 'Tharun', city: 'NDL' }
