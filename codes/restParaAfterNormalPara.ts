function greet(message: string,...names: string[]): void{
    console.log(message);
    console.log(names);
}

greet("Hello!","Tharun","Kumar","nani");

// Hello!
// [ 'Tharun', 'Kumar', 'nani' ]


function g(message: string,...names: string[]): void{
    for (const n of names){
        console.log(message+" "+n);
    };
};

g("Hello!","Tharun","Kumar","nani");

// Hello! Tharun
// Hello! Kumar
// Hello! nani