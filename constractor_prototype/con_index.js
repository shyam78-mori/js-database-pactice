// ? new key word one of the contracted hai
// ? this keyWord one of the object hai

// function Car(carName, model, yearOfPerches) {
//   this.carName = carName;
//   this.model = model;
//   this.yearOfPerches = yearOfPerches;

//   this.greeting = function () {
//     console.log(`welcome: ${this.carName}`);
//   };
//   return this;
// }

// let auto = new Car("mercedes", 2025, 12);
// console.log(auto);
// console.log(auto.greeting());

let car = function (color, model) {
  this.color = color;
  this.model = model;
};

car.prototype.startEngin = function(){
  console.log(`this is start engin machine ${this.color}`);
}

let instepsOdCar = new car("yellow", 346);

// console.log(car.prototype);

console.log(instepsOdCar);
instepsOdCar.startEngin();


