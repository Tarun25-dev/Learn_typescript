"use strict";
function User(name, role = "guest") {
    console.log(name + " : " + role);
}
;
User("Tharun");
User("Tharun", "admin");
User("tharun", "guest");
