// callback functions is a function passed to another function, so that function call another function whenever they need.

function ProcessUser(name, callback){
    console.log("Processing "+name);
    callback()
}
function finished(){
    console.log("Done");
}

ProcessUser("Tharun",finished);

// Processing Tharun
// Done
