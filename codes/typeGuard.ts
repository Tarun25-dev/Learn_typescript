function print(value: string | number): void{
    if (typeof value === "string"){
        console.log(value.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
};

print("Tharun");
print(25);


// THARUN
// 25.00