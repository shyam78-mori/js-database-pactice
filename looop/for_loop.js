for (let index = 0; index < 10; index++) {
  console.log(index);
}

// let sum = 0;
// let n = 3;

// for (let index = 0; index < n; index++) {
//     sum += index + 1;
// }

// console.log(sum);

let num = 5;
let sum = 1;

for (let i = 1; i <= num; i++) {
  sum *= i;
}

console.log(sum);

for (let s = 0; s <= 10; s++) {
  console.log(s);
  if (s == 5) {
    console.log(`5 is a great number`);
  }
}

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("*");
  }
  console.log(" ");
}

let a = 4;
let b = 5;

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= b; j++) {
    if (i == 1 || j == 1 || i == a || j == b) {
      console.log("*");
    } else {
      console.log(" ");
    }
  }
  console.log();
}
let z= 4
for (let i = 1; i <= z; i++) {
  // console.log(i);
  if (i == 1 || i == z) {
    console.log("*");
  }
}

let number = 5
for(let i = 1; i<=10; i++){
  console.log(`${number} * ${i} = ` + number*i);
}