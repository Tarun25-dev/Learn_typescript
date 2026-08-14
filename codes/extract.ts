type status = "loading" | "success" | "error";

type StatusReq = Extract<status,"success" | "error">;

