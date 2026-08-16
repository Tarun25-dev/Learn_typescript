type onSave = (name: string, age: number) => void;

const Save: onSave = (name, age) => {
    console.log(name, age);
};

Save("Tharun", 23);
Save("Kumar",22);

// Tharun 23
// Kumar 22