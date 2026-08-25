import MainPage from "./LoginMain";
import LoginForm from "./LoginForm";
import { useState } from "react";

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        {isLoggedIn ? <MainPage /> : <LoginForm onLogin={() => setIsLoggedIn(true)}/>}
        </>
    );
}

export default App;


