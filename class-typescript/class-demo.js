"use strict";
class Person {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`userName:${this.userName}, age:${this.age}`);
    }
}
const tamim = new Person("Tamim", 27);
console.log(tamim.display());
