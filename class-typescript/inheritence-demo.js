"use strict";
class Person {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`userName:${this.userName}, age:${this.age} `);
    }
}
const tamim = new Person("Tamim", 27);
console.log(tamim.display());
class Student extends Person {
    constructor(age, userName, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName:${this.userName}, age:${this.age} id: ${this.studentId} `);
    }
}
let std1 = new Student(39, "sakib", 8154);
console.log(std1.display());
