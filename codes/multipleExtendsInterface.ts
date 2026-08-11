interface Name{
    name: string;
}

interface Contact{
    phone: number;
}

interface Address{
    city: string;
    state: string;
}

interface UserDetails extends Name, Contact, Address{
    age: number;
}

const user: UserDetails = {
    name: "tharun",
    phone: 12212,
    city: "nandyal",
    state: "ap",
    age: 23
};

console.log(user);

// { name: 'tharun', phone: 12212, city: 'nandyal', state: 'ap', age: 23 }