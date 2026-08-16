type BtnProps = {
    text: string;
    onClick: () => void;
};

function Btn({text, onClick}: BtnProps){
    return (
        // <button onClick={onClick}>{text}</button> 
        // beacuse that is jsx code
        text
    );
};

Btn({text: "Tharun",onClick: () => {console.log("text")}});
