type customers = {
    name: string;
    phone_number: number;
    address:{
        city: string;
        pincode: number;
    }
};

let custList: customers[]=[
    {
    name:"Tharun",
    phone_number:1123456,
    address:{
        city:"nandyal",
        pincode:518501
        }   
    },
    {
    name:"nani",
    phone_number:1156,
    address:{
        city:"kurnool",
        pincode:518001
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

// Tharun
// kurnool