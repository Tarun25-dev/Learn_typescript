type User = {
    name: string;
    age: number;
};

function showUser(user: User): void{
    console.log(user.name);
    console.log(user.age);
};

showUser({
    name:"tharun",
    age: 23
});

// tharun
// 23