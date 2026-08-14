type user = {
    name: string;
    age: number;
    city: string;
    state: string;
    phone: number;
    userId: number;
    password: number;
};

type safeUser = Omit<user, "phone" | "password">;

const SafeUser1: safeUser = {
    name: "tharun",
    age: 23,
    city: "nandyal",
    state: "ap",
    userId: 3225
};

console.log(SafeUser1);

// { name: 'tharun', age: 23, city: 'nandyal', state: 'ap', userId: 3225 }