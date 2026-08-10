const students = [
    {name:"tharun",marks:100},
    {name:"kumar",marks:99},
    {name:"nani",marks:95},
    {name:"abc",marks:50},
    {name:"bcd",marks:65},
    {name:"def",marks:60}
];

const passedStudents = students.filter(m => {
    return m.marks >=65;
}).map(s => {
    return s.name;
});

console.log(passedStudents);

// [ 'tharun', 'kumar', 'nani', 'bcd' ]
// here filter takes all the students with their marks with the condition of >=60 and it not effects any arrays of objects structure.
// here map selects all the names from that filtered students and display it in a new array.
