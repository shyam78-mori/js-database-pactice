let peopleDetails = [
  {
    name: "John",
    age: 25,
    occupation: "Software Engineer",
  },
  {
    name: "harshil",
    age: 30,
    occupation: "Doctor", 
  }
];


let userName = peopleDetails.filter(user => {
  if(user.age > 18) return user.name;
})

console.log(userName);
