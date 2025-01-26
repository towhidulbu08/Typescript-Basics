var firstName;
var lastName;
var fullName;
var isActivated;
var useID;
firstName = "Tamim";
lastName = "Islam";
isActivated = true;
useID = 101;
fullName = firstName.concat(lastName);
console.log("Your Id:".concat(useID, ", userName:").concat(fullName, ", lastName:").concat(lastName));
console.log(fullName.split(""));
console.log(fullName.toLowerCase());
console.log(useID);
function display() {
    console.log("I am Tamim");
}
display();
