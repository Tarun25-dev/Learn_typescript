type Role = "user" | "admin" | "guest";

type SelectedRoles = Extract<Role, "user" | "admin">;
