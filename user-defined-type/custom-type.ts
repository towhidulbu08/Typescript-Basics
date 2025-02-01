type User = {
  userName: string;

  userId: number;
};

let users: User[];
users = [];

let user1: User;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);

let user2: User;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);

let user3: User;
user3 = { userName: "Jone", userId: 3 };
users.push(user3);

//console.log(users);

type requestType = "GET" | "POST";
let getRequest: requestType;
getRequest = "GET";

function requestHandle(requestType: requestType) {
  console.log(requestType);
}
requestHandle("POST");
