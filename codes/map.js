// Map() is used to transform every element and creates a new array unlike forEach()

const numbers = [1,2,3,4,5];
const double = numbers.map(number => {
    return number*2;
});
console.log(double);

// [ 2, 4, 6, 8, 10 ] 
// if we write same like in forEach then it says double is undefined.

const students = [
    {name:"tharun",marks:100},
    {name:"kumar",marks:99},
    {name:"nani",marks:95}
];

const snames = students.map(s => {
    return s.name;
})

console.log(snames);

// [ 'tharun', 'kumar', 'nani' ]