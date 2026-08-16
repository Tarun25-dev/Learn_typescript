type Status = "loading" | "success" | "failed";

type statusMsg = Record<Status, string>;

const messages: statusMsg = {
    loading: "Loading...",
    success: "Success!",
    failed: "Something went wrong"
};

console.log(messages.success);
