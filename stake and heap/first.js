// Stack (Primitive.), heap(non-Primitive)

// Stack(primitive)
// Primitive (number, string, boolean, null, symbol, and undefined)

let myYoutubeName = "shyamMoriYoutube"
let anotherName = myYoutubeName
anotherName = "shyam"
// console.log(myYoutubeName); //! is me ek copy dee jati hai or variable sub ka create hota hai

// console.log(anotherName);  


// Heap(non-primitive)
// Non-primitive (objects and arrays). 

let a  = {
    user : "shyam",
    email : "shyam@gmail.com"
}
console.log(a);
let b = a
console.log(b);


b.email = "raj@gmai.com"
console.log(b);

console.log(a);
console.log(b);









