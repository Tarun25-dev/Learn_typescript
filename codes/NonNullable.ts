type value = string | null | undefined;

const Value: NonNullable<value> = "Tharun";

console.log(Value);

// we can also  use for type

type safeValue = NonNullable<value>;

const SafeValue: safeValue = "Kumar";

console.log(SafeValue);

// we can also declare particularly which property should not be null as well

type User = {
    name: string;
    email: string | null;
};

type Email = NonNullable<User["email"]>;

const mail: Email = "typescript@gmail.com";

console.log(mail);


// Tharun
// Kumar
// typescript@gmail.com