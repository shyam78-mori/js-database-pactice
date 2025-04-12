"use strict"
let mainPlan = {
    airLine: 'Fly india',
    iatacode: 'FI',
    booking:[],
    book:function(name,FliteNum){
        // console.log(`${name} Booked flite in ${this.airLine} with ${FliteNum} .`);
        this.booking.push({FliteName: `${this.airLine}`, name:`${name}`,fliteCode:`${this.iatacode}`,fliteNumber:`${FliteNum}`})
    }
}

mainPlan.book("xyz",234)
mainPlan.book('abc',485)
console.log(mainPlan);

 
let ChildPlane = {
    airLine: "Childe plan",
    iatacode:'CP',
    booking:[],
}

let book = mainPlan.book;
// book("vrvrw",14);


book.call(ChildPlane,'shyam',3656373);
book.call(ChildPlane,'shyam',3656373);
console.log(ChildPlane);




// let user = function(){
//     console.log(`my name is ${this.name} your name is ${this.outer}`);
    
// }
// let users = {
//     name: 'shyam',
//     outer: 'hello',
// }

// let great = user.bind(users);

// great();



// function setUserName(username){
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUserName.call(this, username);
//     this.email = email;
//     this.password = password;
// }

// let hello = new createUser("shyam", "shyam@gmail.com", 12345);
// console.log(hello);
