"use strict";
function UseForm(Props) {
    console.log(Props.name);
    Props.onSave(Props.name);
}
;
UseForm({
    name: "Tharun",
    onSave: (name) => { console.log("Hello! ", name); }
});
