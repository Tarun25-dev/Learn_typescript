type Person = {
    name: string;
}
type Employee = {
    empId: number;
}

type EmpDetails = Person & Employee;

const employee: EmpDetails = {
    name: "tharun",
    empId: 3225
};

console.log(employee.name);
console.log(employee.empId);

// tharun
// 3225

// if we dont want an extra type for adding two like EmpDetails then we use only two also like this

type P ={
    name: string;
}
type E = P & {
    eId: number;
}

const emp: E = {
    name:"tharun",
    eId:3225
};

console.log(emp.name);
console.log(emp.eId);
