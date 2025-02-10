var users;
users = [];
var user1;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
var user2;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);
var getRequest;
getRequest = "GET";
function requestHandler(reqType) {
    console.log(reqType);
}
requestHandler("GET");
var a;
a = { id: 3, home: true };
var b;
b = 4;
//a = 2;
console.log(b, a.id);
