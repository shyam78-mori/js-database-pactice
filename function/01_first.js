//  Function

// it is just a like a variable holding some piece of code 

// Declaration

function myFunction(){
    console.log("first function sated");
}
myFunction();
myFunction();
myFunction();



function second(name,surname){
    console.log(`Welcome this my Website ${surname} ${name}`);
}

let nam = second('shyam','mori');


let ageCalculation = function (birthday,currentYear = 2025){
    let age = currentYear - birthday;
    return age
}

let funResult = ageCalculation(2005);
console.log(`my age and year is ${funResult}`);
