"use strict";
let firstName;
let lastName;
let fullName;
let isActivated;
let useID;
firstName = "Tamim";
lastName = "Islam";
isActivated = true;
useID = 101;
fullName = firstName.concat(lastName);
console.log(`Your Id:${useID}, userName:${fullName}, lastName:${lastName}`);
console.log(fullName.split(""));
console.log(fullName.toLowerCase());
console.log(useID);
function display() {
    console.log("I am Tamim");
}
display();
