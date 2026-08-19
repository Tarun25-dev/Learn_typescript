"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
class Admin extends Person {
    showName() {
        return this.name;
    }
}
;
const admin = new Admin("Tharun");
console.log(admin.showName());
