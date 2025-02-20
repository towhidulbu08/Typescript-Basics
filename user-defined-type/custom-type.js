"use strict";
let users;
users = [];
let user1;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
let user2;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);
let getRequest;
getRequest = "GET";
function requestHandler(reqType) {
    console.log(reqType);
}
requestHandler("GET");
let a;
a = { id: 3, home: true };
let b;
b = 4;
//a = 2;
console.log(b, a.id);
