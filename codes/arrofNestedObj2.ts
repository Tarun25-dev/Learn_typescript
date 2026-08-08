type Address = {
    city: string;
    pincode: number;
};

type user = {
    name: string;
    address: Address[];
}

let users: user[]=[
    {
        name: "tharun",
        address:[{
            city:"nandyal",
            pincode: 518501
        }]
    },
    {
        name: "kumar",
        address:[{
            city:"kurnool",
            pincode: 518001
        }]
    }

];

console.log(users[0].address[0].city);
console.log(users[1].address[0].pincode);

// nandyal
// 518001