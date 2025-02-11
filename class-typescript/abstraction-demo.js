// 01.abstraction helps us to hide the implementation of something.
// 02.class declared with abstract keyword.
// 03 object can not be created from abstract class.
// 04.if a class extends abstract class; it must inherit all the abstract methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//note: a method inside abstract class is a abstract method, an abstract method cant not have a body
var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return Person;
}());
//const tamim = new Person("Tamim", 27);
//console.log(tamim.display());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(age, userName, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.show = function () {
        console.log("userName:".concat(this.userName, ", age:").concat(this.age, " id: ").concat(this.studentId, " "));
    };
    return Student;
}(Person));
var std1 = new Student(39, "sakib", 8154);
std1.show();
