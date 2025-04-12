// class car {
//   // String color;

//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }

//   startEngine() {
//     console.log(`this is start engin method  of car class`);
//   }
// }

// let honda = new car("red", 2025);
// console.log(honda);
// // console.log(honda.__proto__.isPrototypeOf(honda));
// honda.startEngine();

class user {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  encyName() {
    return `${this.name.toUpperCase()}`;
  }
  encyEmail() {
    return `${this.email}`;
  }
  encyPassword() {
    return `${this.password}abc`;
  }
}

let chai = new user("shyam", "shyam@gmail.com", "123");
// console.log(chai);
console.log(chai.encyName());
console.log(chai.encyEmail());
console.log(chai.encyPassword());

