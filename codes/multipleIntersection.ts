type A = {name: string;}
type B = {age: number;}
type C = {role: string;}
type D = {salary: number;}

type li = A & B & C & D & {
    company: string;
}

const Details: li = {
    name: "tharun",
    age: 23,
    role: "Admin",
    salary: 100000,
    company: "XYZ"
};

console.log(Details);

// {
//   name: 'tharun',
//   age: 23,
//   role: 'Admin',
//   salary: 100000,
//   company: 'XYZ'
// }
