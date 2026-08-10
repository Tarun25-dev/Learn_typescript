// Filter() is used to select  elements that satisfy a condition.

const numbers =  [10,20,30,40];
const selectedNum = numbers.filter(n => {
    return  n >= 30;
});

console.log(selectedNum);

// [ 30, 40 ]

const students = [
    {name:"tharun",marks:100},
    {name:"kumar",marks:99},
    {name:"nani",marks:95},
    {name:"abc",marks:80},
    {name:"bcd",marks:85},
    {name:"def",marks:60}
];

const Toppers = students.filter(m => {
    return m.marks >= 90;
});

console.log(Toppers);

// [
//   { name: 'tharun', marks: 100 },
//   { name: 'kumar', marks: 99 },
//   { name: 'nani', marks: 95 }
// ]