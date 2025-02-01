let users: object[];
users = [];

let user1: {
  userName: string;

  userId: number;
};
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
let user2: {
  userName: string;

  userId: number;
};
user2 = { userName: "Michael", userId: 2 };
users.push(user2);

for (const key in users) {
  console.log(users[key]["userName"]);
}
console.log(users);
