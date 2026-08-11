type Person = {
    name: string;
    age: number;
};

// suppose i need to create a type for name that i used for different places of code and that to be related
//  if we change that type in Person type then remaining type automatically changes beacuse of the indexed access type.
// we know that Person["name"] this gives type of name.

function PrintName(name: Person["name"]){
    console.log(name);
};

PrintName("tharun");

// here if we change name: number then there no need to change in any where beacuse we use instead of indexed access type so it updates automatically.
// print(1123) it works