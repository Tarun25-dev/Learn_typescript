type User = {
    name: string;
    age: number;
    email: string;
    phone: number;
};

type UserProfile = Omit<User, "email">;

const userProfile: UserProfile = {
    name: "tharun",
    age: 23,
    phone: 213332
};

// we can also remove multiple properties

type Profile = Omit<User, "email" | "phone">;

const profile: Profile = {
    name: "tharun",
    age: 23
};

console.log(userProfile);
console.log(profile);

// { name: 'tharun', age: 23, phone: 213332 }
// { name: 'tharun', age: 23 }
