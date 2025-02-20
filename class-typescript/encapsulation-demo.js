"use strict";
class Person {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    show() {
        console.log(`userName:${this.userName}, age:${this.age} `);
    }
}
class Student extends Person {
    constructor(age, userName, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    show() {
        console.log(`userName:${this.userName}, age:${this.age} id: ${this.studentId} `);
    }
}
let std1 = new Student(39, "sakib", 8154);
std1.studentId;
let sakib = new Person("sakib", 30);
sakib.userName = "Rahim";
sakib.show();
