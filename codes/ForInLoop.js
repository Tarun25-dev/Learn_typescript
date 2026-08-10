const numbers = [10,20,30,40,50];
for (let i in numbers){
    console.log(i);
}

// for in is used for index values
// 0
// 1
// 2
// 3
// 4

// we also use for in to print values
for (let num in numbers){
    console.log(numbers[num]);
}

// 10
// 20
// 30
// 40
// 50

// task 

const values = [12,21,32,44,12];

for (let v in values){
    console.log("Index: "+v+" "+"value: "+values[v]);
}

// Index: 0 value: 12
// Index: 1 value: 21
// Index: 2 value: 32
// Index: 3 value: 44
// Index: 4 value: 12

// use const for all for loop inside variable beacuse number is automatically given a new value on each iteration and we dont manually reassign anything.
