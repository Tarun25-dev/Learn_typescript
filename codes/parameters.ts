function greet(name: string, age: number){
    return `Hello! ${name}, Your ${age} year's old.`;
};

type GreetPara = Parameters<typeof greet>;

const greet1: GreetPara = ["Tharun", 23];

console.log(greet1);

// [ 'Tharun', 23 ]
