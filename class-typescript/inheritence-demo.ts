class Person {
  //properties,methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`userName:${this.userName}, age:${this.age} `);
  }
}

const tamim = new Person("Tamim", 27);

console.log(tamim.display());

class Student extends Person {
  studentId: number;

  constructor(age: number, userName: string, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `userName:${this.userName}, age:${this.age} id: ${this.studentId} `
    );
  }
}

let std1 = new Student(39, "sakib", 8154);

console.log(std1.display());
