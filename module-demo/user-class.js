"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("userName:".concat(this.userName, ", age:").concat(this.age, " "));
    };
    return Person;
}());
exports.Person = Person;
