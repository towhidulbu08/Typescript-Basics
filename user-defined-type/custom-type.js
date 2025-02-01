var users;
users = [];
var user1;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
var user2;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);
var user3;
user3 = { userName: "Jone", userId: 3 };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandle(requestType) {
    console.log(requestType);
}
requestHandle("POST");
