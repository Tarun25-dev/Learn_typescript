"use strict";
let p1 = {
    name: "Tharun",
    age: 23,
    batch: {
        branch: "data science",
        roll_number: 3225,
        address: {
            city: "nandyal",
            pincode: 518501
        }
    }
};
let p2 = {
    name: "kumar",
    age: 25,
    batch: {
        branch: "data science",
        roll_number: 3223,
        address: {
            city: "kurnool",
            pincode: 518001
        }
    }
};
console.log(p1.batch.branch);
console.log(p1.batch.roll_number);
console.log(p2.batch.address.city);
console.log(p2.batch.address.pincode);
