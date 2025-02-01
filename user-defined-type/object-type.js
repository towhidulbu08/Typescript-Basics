var users;
users = [];
var user1;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
var user2;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
console.log(users);
