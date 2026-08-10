const greet = function(name) {
    console.log("Hello "+name);
};
greet("Tharun");

// Hello Tharun

// or using arraow function

const g = (name)=>{
    console.log("Hello "+name);
};
g("Kumar");

// Hello Kumar

// calling a function through a variable

const gr = () => {
    console.log("Hello");
};

gr(); // if a variable conatins a function you can call it using ().
