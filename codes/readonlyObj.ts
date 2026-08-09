type User = {
    name: string;
    readonly id: number;
};

let user1: User={
    name: "kumar",
    id: 3225
};

user1.name = "Tharun";
console.log(user1.name);
// Tharun

// but we cant reassign for id beacuse it is only for read purpose.