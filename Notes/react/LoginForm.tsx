import { useState } from "react";
import type { SubmitEvent } from "react";

type LoginFormProps={
    onLogin: () => void;
};

export default function LoginForm({onLogin}: LoginFormProps){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false);


    type User = {
        email: string;
        password: string;
    };

    const users: User[] = [
        {email:"tarun@gmail.com",password:"123456"},
        {email:"kumar@gmail.com",password:"123456"},
        {email:"nani@gmail.com",password:"123456"}
    ];

    function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("Form Submitted");
        setError("");
        setMessage("");
        if(!email || !password){
            setError("! Please fill in all fields.");
            return; // if true stops immediately
        }
        if(password.length < 6){
            setError("Password must be atleast 6 charecters.");
            return;
        }

        const user = users.find((u) => u.email === email && u.password === password);
        if(!user){
            setError("Invalid Email or Password");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setMessage("Login successfull");
            onLogin(); // when it calls then we conform that isLogged is true in Main.tsx

            setEmail("");
            setPassword("");
        },2000);

    };

    

    return(
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-6 bg-amber-200 rounded-2xl border p-6 font-mono">
           <label htmlFor="email">Email</label><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex border w-full rounded-lg px-4 py-3 outline-none focus:ring-2 cursor-text"/>
           <label htmlFor="password">Password</label><input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full rounded-lg px-4 py-3 outline-none focus:ring-2 cursor-text font-"/>
            <button type="submit" className="border cursor-pointer w-auto px-4 py-3 font-medium rounded-lg select-none disabled:cursor-progress disabled:opacity-50" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
            {error && (<p className="text-red-500 text-sm">{error}</p>)}
            {message && (<p className="text-sm text-green-500">{message}</p>)}
        </form>
       
    );
}
