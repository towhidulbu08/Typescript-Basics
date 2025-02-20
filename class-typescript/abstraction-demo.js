"use strict";
// 01.abstraction helps us to hide the implementation of something.
// 02.class declared with abstract keyword.
// 03 object can not be created from abstract class.
// 04.if a class extends abstract class; it must inherit all the abstract methods
//note: a method inside abstract class is a abstract method, an abstract method cant not have a body
class Person {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
//const tamim = new Person("Tamim", 27);
//console.log(tamim.display());
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
std1.show();
