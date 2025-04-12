// ?static method (method which is not present on constructed
// ?"prototype" property but "constructed" itself)

class car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  // * instant method
  startIngEngin() {
    console.log("this is start engin method of car class");
  }
}

//   *static method
// * static method cat per hote hai

car.breakMethod = function () {
  console.log("this is break method of car");
};

let hondaCity = new car("yellow", 2025);
hondaCity.startIngEngin();
car.breakMethod();




//? behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}xyz`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());