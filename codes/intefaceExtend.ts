interface User{
    name: string;
    age: number;
}

interface Admin extends User{
    role: string;
}

const admin: Admin = {
    name: "tharun",
    age: 23,
    role: "admin"
};

