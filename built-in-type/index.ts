let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;
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

function display(): void {
  console.log("I am Tamim");
}
display();
