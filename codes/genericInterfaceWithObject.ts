type U = {
    name: string;
    age: number
};

interface Responses<T>{
    data: T;
    success: boolean;
};

const responses: Responses<U> = {
    data: {name: "tharun", age: 23},
    success: true
};

console.log(responses);

// { data: { name: 'tharun', age: 23 }, success: true }
console.log(responses.data.name);
// tharun