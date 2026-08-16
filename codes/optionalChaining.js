const user = {
    name: "Tharun"
};

console.log(user.address?.city); // undefined

// for nested objects 

const User = {
    Profile:{
        Address:{
            city: "Nandyal"
        }
    }
};

console.log(User.Profile?.Address?.city);

// Nandyal