var Person = /** @class */ (function () {
    function Person(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("userName:".concat(this.userName, ", age:").concat(this.age));
    };
    return Person;
}());
var tamim = new Person("Tamim", 27);
console.log(tamim.display());
