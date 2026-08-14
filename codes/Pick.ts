type Y = {
    name: string;
    age: number;
    city: string;
    state: string;
    college: string;
    email: string;
    phone: number;
};

type YContact = Pick<Y, "name" | "email" | "phone">;

const Ycontact: YContact = {
    name: "tharun",
    email: "123@gmail.com",
    phone: 12344
};

console.log(Ycontact);

// { name: 'tharun', email: '123@gmail.com', phone: 12344 }
