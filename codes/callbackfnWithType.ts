type props = {
    name: string;
    onSave: (name: string) => void;
};

function UseForm(Props: props){
    console.log(Props.name);
    Props.onSave(Props.name);
};

UseForm({
    name: "Tharun",
    onSave: (name) => {console.log("Hello! ",name)}
});

// Tharun
// Hello!  Tharun