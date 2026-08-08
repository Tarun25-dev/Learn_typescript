type Ptype = {
    name: string;
    pin: number;
    city?: string;
};

let profiles: Ptype[] = [
    {name: "tharun", pin:518501},
    {name: "kumar", pin: 518550}
];

console.log(profiles);

// [ { name: 'tharun', pin: 518501 }, { name: 'kumar', pin: 518550 } ]

profiles[0].city = "nandyal";

console.log(profiles);

// [
//   { name: 'tharun', pin: 518501, city: 'nandyal' },
//   { name: 'kumar', pin: 518550 }
// ]