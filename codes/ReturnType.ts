function getName(){
    return "Tharun";
};

type name = ReturnType<typeof getName>;

// another example

function getUser(){
    return {
        name: "tharun",
        age: 23
    };
};

type GetUser = ReturnType<typeof getUser>;

// so we can use same structure it returns like this 

const  user1: GetUser = {
    name: "kumar",
    age: 24
};
