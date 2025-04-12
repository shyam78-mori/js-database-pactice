// // === Page Styling with JS ===
// document.body.style.fontFamily = "Arial";
// document.body.style.textAlign = "center";
// document.body.style.background = "#f0f0f0";
// document.body.style.padding = "2rem";

// // === Title ===
// const title = document.createElement('h1');
// title.textContent = 'Animal Sound Simulator (Inheritance Example)';
// document.body.appendChild(title);

// // === Output Box ===
// const output = document.createElement('div');
// output.style.margin = '2rem auto';
// output.style.fontSize = '1.5rem';
// output.style.fontWeight = 'bold';
// output.style.color = '#333';
// document.body.appendChild(output);

// // === Base Class: Animal ===
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} makes a sound.`;
//   }
// }

// // === Subclass: Dog ===
// class Dog extends Animal {
//   speak() {
//     return `${this.name} says: Woof! 🐶`;
//   }
// }

// // === Subclass: Cat ===
// class Cat extends Animal {
//   speak() {
//     return `${this.name} says: Meow! 🐱`;
//   }
// }

// // === Create Instances ===
// // const animal = new Animal('hhh');
// const dog = new Dog('Rex');
// const cat = new Cat('Luna');

// // === Buttons to Trigger Actions ===
// function createButton(label, action) {
//   const btn = document.createElement('button');
//   btn.textContent = label;
//   btn.style.margin = '1rem';
//   btn.style.padding = '1rem 2rem';
//   btn.style.fontSize = '1rem';
//   btn.style.border = 'none';
//   btn.style.borderRadius = '8px';
//   btn.style.backgroundColor = '#444';
//   btn.style.color = '#fff';
//   btn.style.cursor = 'pointer';
//   btn.onclick = action;
//   document.body.appendChild(btn);
// }

// createButton("Dogggg Speak", () => {
//   output.textContent = dog.speak();
// });

// createButton("Cat Speak", () => {
//   output.textContent = cat.speak();
// });

// createButton("Generic Animal", () => {
//   const animal = new Animal('Unknown');
//   output.textContent = animal.speak();
// });

document.body.style.textAlign = 'center';

const cheatHeading = document.createElement("h1");
cheatHeading.textContent = "Animal Sound Simulator (Inheritance Example)";
document.body.appendChild(cheatHeading);



class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make a sound!`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} say woof!`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} say meow!`);
  }
}

function createButton(text, action) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.onclick = action;
    document.body.appendChild(btn);
}

createButton("dog speak", () => {
    
})


const animal = new Animal("Unknown");
const dog = new Dog("rex");
const cat = new Cat("locs");

console.log(animal);
console.log(dog);
console.log(cat);
