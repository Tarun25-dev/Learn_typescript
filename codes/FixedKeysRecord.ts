const Role: Record<"admin" | "user" | "guest", boolean> = {
    admin: true,
    user: false,
    guest:false
};

console.log(Role);

// { admin: true, user: false, guest: false }