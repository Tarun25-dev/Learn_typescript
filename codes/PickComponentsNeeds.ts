type User1 = {
    name: string;
    age: number;
    email: string;
    password: string;
};

type UserCardProps = Pick<User1, "name" | "email">;

function Card(props: UserCardProps){
    props.name;
    props.email;
};