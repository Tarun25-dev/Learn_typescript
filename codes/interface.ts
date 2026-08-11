interface User{
    name: string;
    age: number;
}

const u1: User = {
    name: "tharun",
    age: 23
};

// we can also use for optional and readonly properties similar to type

interface S{
    readonly Id: number;
    name: string;
    age?: number;
}

const s1: S = {
    Id: 3225,
    name: "tharun",
    age: 23
};

const s2: S ={
    Id: 3226,
    name: "kumar",
};

