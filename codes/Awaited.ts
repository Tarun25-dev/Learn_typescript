type result = Awaited<Promise<string>>;

// string

async function getUser(){
    return {
        name: "tharun",
        age: 23
    };
};

type User = Awaited<ReturnType<typeof getUser>>;

const user: User = {
    name: "kumar",
    age: 23
};

console.log(user);

// { name: 'kumar', age: 23 }