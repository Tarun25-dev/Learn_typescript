function User(name?: string): string | undefined{
    return name;
};

console.log(User("Tharun"));
console.log(User());

// Tharun
// undefined
// why string | undefined beacuse we already said that name has only two types either string or undefined so return type must ne that only.