let one  = ['a', 'b', 'c', 'd', ['A', 'B', 'C', 'D']]
let three  = ['x', 'e', 'u', 'a' ,['W', 'E', 'J', 'Y']]
// console.log(one);
let two = [...one, ...three]
let four = one.flat(Infinity) //~ join to all array in one array lines
console.log(four);