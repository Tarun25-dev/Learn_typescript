type role = "user" | "admin" | "guest";

type FinalRole = Exclude<role, "user" | "guest">;

const finalRole: FinalRole = "admin";


console.log(finalRole);

// admin