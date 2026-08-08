// Don't confuse with these:

type user={
    id: string | number;
}
// this creates a type for an object structure.

type u = string | number;

let u1: u = "srec";
let u2: u = 3225;

// creates a type alias for a union itself.
