let url = "https://google.com"

// console.log(url.replace('.', '-'));
// console.log(url);

// console.log(url.includes('google'));

console.log(url.split('.'));    // array covert

// let name ="shyam"
// console.log(`My Name is ${name}`);
// console.log(  );


// write a program to convert given value km to mile 
// kg to pound 
// selciyas to frenhit 
// litters to Gallons
// exit


function kilometersToMiles(km) {
    const miles = km * 0.621371;
    return miles;
}

// Example usage:
const kilometers = 10; // Change this value to convert a different distance
const miles = kilometersToMiles(kilometers);
// console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);

