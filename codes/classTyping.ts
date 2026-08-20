class Pro{
    constructor(
        public name:string
    ){}
}

const p1: Pro = {
    name: "tharun"
};

console.log(p1.name);

// tharun

// we can also use in function

function showName(pro: Pro){
    console.log(pro.name);
};

const pp1 = new Pro("Tharun");

showName(pp1);

// Tharun
