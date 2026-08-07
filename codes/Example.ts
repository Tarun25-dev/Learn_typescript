function showPerson(t: readonly[string,number]){
    console.log(t[0]);
    console.log(t[1]);
}

let t: [string,number] = ["Tharun",23];
showPerson(t);

