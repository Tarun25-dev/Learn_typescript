function show(name: string, age?: number): void{
    console.log(name," ",age);
};
show("tharun",23);
show("kumar");

// tharun   23
// kumar   undefined