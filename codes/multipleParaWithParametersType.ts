function createUser(name: string, age: number, city: string, email: string, phone: number, user: boolean){
    return "Works!";
};

type users = Parameters<typeof createUser>;

const Users: users = ["tharun", 23, "Ndl","qwer@gmail.com",1233455,true];

console.log("name: "+Users["0"]);
console.log("age: "+Users["1"]);
console.log("city: "+Users["2"]);
console.log("email: "+Users["3"]);
console.log("phone: "+Users["4"]);
console.log("user: "+Users["5"]);


// name: tharun
// age: 23
// city: Ndl
// email: qwer@gmail.com
// phone: 1233455
// user: true
