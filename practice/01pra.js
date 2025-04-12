// Q1
// let a = "shyam"
// let b = 6
// console.log(a + b);
// console.log(typeof (a+b));

let str = "hello";
let store = "";
for (let i = str.length - 1; i >= 0; i--) {
  store += str[i];
}
console.log(store);

function myString(str) {
  let store = "";
  for (let i = str.length - 1; i >= 0; i--) {
    store += str[i];
  }
  return store;
}

console.log(myString("hello"));

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
  console.log(i);
}
console.log(fact);

let a = 12;
let b = 23;

let c = a;
a = b;
b = c;

console.log("a" + a);
x;
console.log("b" + b);

let obj = {
  shyam: 33,
  harshil: 33,
  varun: 33,
};

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    "the marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]
  );
}

for (let key in obj) {
  console.log("the marks of " + key + " are " + obj[key]);
}

let arr1 = [1, 5, 9, 10, 4, 2];
let arr2 = [5, 8, 2, 88, 84, 5, 8];

function myArray(a1, a2) {
  let a = [...a1, ...a2].sort((a, b) => {
    return a - b;
  });
  // a.sort();
  return a;
}

console.log(myArray(arr1, arr2));

// let str1 = ["a", "g", "s", "g", "a"];
// function myStr(arr) {
//   let store = "";
//   for (let i = 1; i < arr.length; i++) {
//     store += arr[i];
//   }
//   return store;
// }

// console.log(myStr(str1));

let str1 = ["a", "g", "s", "g", "a"];
let str6 = 'a';
let count = "";
function mystr4(arr,string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === string) {
      count++;
    }
  }
  return count;
}

console.log(mystr4(str1,str6));
console.log(`${str6} count this char:- ${count}`);




let str5 = ["a", "g", "s", "g", "a"];

function charCount(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
  }

  return counts;
}

console.log(charCount(str5));
