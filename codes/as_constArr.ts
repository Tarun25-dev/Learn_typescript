const Roles = ["admin", "user", "guest"] as const;

type user = typeof Roles[number];

const u: user = "admin";
const v: user = "guest";
const w: user = "user";

// user = "admin" | "guest" | "user"