type User = {
    name: string;
    age: number;
};

type UserKey = keyof User; // "name" | "age"

type nameType = User[UserKey]; // string | number