class Person {
  //properties,methods, constructor
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  show(): void {
    console.log(`userName:${this.userName}, age:${this.age} `);
  }
}

class Student extends Person {
  private studentId: number;

  constructor(age: number, userName: string, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  show(): void {
    console.log(
      `userName:${this.userName}, age:${this.age} id: ${this.studentId} `
    );
  }
}

let std1 = new Student(39, "sakib", 8154);
std1.studentId;

let sakib = new Person("sakib", 30);
sakib.userName = "Rahim";

sakib.show();
