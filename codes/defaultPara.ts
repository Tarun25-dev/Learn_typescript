function User(name: string, role: string = "guest"): void{
    console.log(name+" : "+ role);
};
User("Tharun");
User("Tharun","admin");
User("tharun","guest");

// Tharun : guest
// Tharun : admin
// tharun : guest