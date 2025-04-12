// *class inheritance
// * parent and child ka inheritance hota hai

//~ parent class

class car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngin() {
    console.log("this is start engin method");
  }
}


// ~ child class

class bike extends car{
    constructor(color,model,enginCapacity){
        // *super key word parent me jata hai, parent ka constructor call karega
        super(color,model)
        this.enginCapacity = enginCapacity;
    }
}

let newBike = new bike("black",2023,'125cc');
console.log(newBike);

 
let audi = new car("red",2025);
console.log(audi);
