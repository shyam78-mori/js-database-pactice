let a = [1, 2, 3, 4, 5];
let b = [10, 40, 50];
// console.log(a);
console.log(a.toString()); //string
// console.log(a.join("_")); //string
// let c = a.concat(b);
// console.log(c);

// pop , push , shift , unshift , delete , concat , short , reverse , splice , slice

let one  = ['a', 'b', 'c', 'd', ['A', 'B', 'C', 'D']]
let three  = ['x', 'e', 'u', 'a' ,['W', 'E', 'J', 'Y']]
// console.log(one);
let two = [...one, ...three]
let four = one.flat(Infinity) //~ join to all array in one array lines
console.log(four);

// console.log(two);

// let ab = [5,8,2,8,2,7,7,1]; //~ short mean first latter checked by array
// // let ab = "hello";

// // ab.sort();
// console.log(ab);
// const Shorted = (a, b) =>{
//     return a - b;
// }
// ab.sort(Shorted);
// console.log(ab);

// ab.reverse();
// console.log(ab);



// let ab = [5, 8, 2, 7];
// Sorting Process Step by Step
// a	b	a - b	
// 5	8	-3	❌ (नहीं)	[5, 8, 2, 7]
// 8	2	6	✅ (हाँ)	[5, 2, 8, 7]
// 8	7	1	✅ (हाँ)	[5, 2, 7, 8]
// 5	2	3	✅ (हाँ)	[2, 5, 7, 8]