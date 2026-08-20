"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new User("tharun", 23);
console.log(user.name);
console.log(user.age);
