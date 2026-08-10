type U = {
    name: string;
    age: number;
};

function users({name, age}: U): void{
    console.log(name);
    console.log(age);
};

users({name:"tharun", age:23});

// tharun
// 23

// for rename the property to new variable

function o({name: mname,age: mage}: U): void{
    console.log(mname);
    console.log(mage);
};

o({name:"kumar", age:23});

// kumar
// 23