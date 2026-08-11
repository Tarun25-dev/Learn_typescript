interface User{
    name: string;
    age: number;
}

interface Employee extends User{
    Eid: number;
}

const employee: Employee = {
    name: "tharun",
    age: 23,
    Eid: 3225
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.Eid);

// tharun
// 23
// 3225