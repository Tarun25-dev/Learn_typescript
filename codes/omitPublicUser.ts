type User = {
    name: string;
    age: number;
    email: string;
    password: string;
};

type PublicUser = Omit<User,"password">;

