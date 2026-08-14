function fetchUser(){
    return {
        name: "tharun",
        id: 3225,
        active: true
    };
};

type user = ReturnType<typeof fetchUser>;