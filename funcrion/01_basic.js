function myFunction(x, y ){
    return 1 + ( x + y)/2
}

let a = 10
let b = 30
let c = 57

console.log("onr plus average of a  and b is ", myFunction(a,b));
console.log("onr plus average of b  and c is ", myFunction(c,c));
console.log("onr plus average of c  and a is ", myFunction(c,a));


// arrow function 


const name = ()=>{
    console.log("may name is shyam mori");
    
}

name()
// --------------------------------------

const aa = (d, g) =>{
    return d + g
}
console.log("your sum is " + aa(5, 7));
