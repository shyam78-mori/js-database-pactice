let a = [1,2,3,4,5];
let refer = a;


refer[3] = 55;
console.log(a);
console.log(refer);


let getValue = [...a];

getValue[5] = 345;

console.log(a);
console.log(getValue);
