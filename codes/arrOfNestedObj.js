"use strict";
let custList = [
    {
        name: "Tharun",
        phone_number: 1123456,
        address: {
            city: "nandyal",
            pincode: 518501
        }
    },
    {
        name: "nani",
        phone_number: 1156,
        address: {
            city: "kurnool",
            pincode: 518001
        }
    }
];
console.log(custList);
// [
//   {
//     name: 'Tharun',
//     phone_number: 1123456,
//     address: { city: 'nandyal', pincode: 518501 }
//   },
//   {
//     name: 'nani',
//     phone_number: 1156,
//     address: { city: 'kurnool', pincode: 518001 }
//   }
// ]
console.log(custList[0].name);
console.log(custList[1].address.city);
