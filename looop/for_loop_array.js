let a  = [1,2,3,4,5,6]
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}

// ~FOR EACH LOOP
a.forEach(element => {
    console.log(element*element);
});


// ~ array.from             //! use in html giver the code use in js convert array times
let name = "shyam"
let arr = Array.from(name)
console.log(arr);
