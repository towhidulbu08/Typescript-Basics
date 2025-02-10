type User = { userName: string; userId: number };
let users: User[];
users = [];

let user1: User;
user1 = { userName: "John Doe", userId: 1 };
users.push(user1);
let user2: User;
user2 = { userName: "Michael", userId: 2 };
users.push(user2);

//console.log(users);

type HttpRequestType = "GET" | "POST";
let getRequest: HttpRequestType;
getRequest = "GET";

function requestHandler(reqType: HttpRequestType) {
  console.log(reqType);
}

requestHandler("GET");

type AddNumber = 2 | 4 | { id: number; home: boolean };

let a: AddNumber;
a = { id: 3, home: true };
let b: AddNumber;
b = 4;
//a = 2;
console.log(b, a.id);
