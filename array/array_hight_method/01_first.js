// ~ array method

// * map method :- higher order function,
//! one function ke under dushra function call hoo
// ! create a new array
// ? length of new array always "equal" to the original array

// let salary = [3000,5000,8000,4000,9000]

// let newSalary = salary.map(salary2 => {
//     let increment = salary2/2;
//     return salary2 + increment;
// })

// console.log(newSalary);

// * filter method
// ! filter method ( use to perform filtration of array)
//~ now you want to filter only "watch and ring" gifts
// ?  length of new array may or may not be equal to original array

// let gifts = ["watch","ring","chocolate","teddy-bear", "watch","ring"]

// let filteredArray = gifts.filter(gift => {
//     if(gift == "watch" || gift == "ring"){
//         return gift
//     }
// })

// console.log(gifts);
// console.log(filteredArray);

//* reduce method

// let num = [5,2,8,9,6]

// let reduceMethod = num.reduce(function(total,currentValue){
//     return total + currentValue;
// },0)

// console.log(reduceMethod);

// *find method

// ? it retune the "first" element we are looking for...

// let students = [{id:1,name:"alex"},{id:2, name:"joan"},{id:1, name:"hii"}]

// let result = students.find(student => {
//     return student.id === 1;
// })

// console.log(result);

// * some and every method

// ~ some method retune "true" if "any" array element pass the test
// ~ every method  retune "true" is "all" element pass the test

// let score = [25,34,67,65,80,92]

// let result = score.some(scores => {
//     return scores > 95;
// })

// console.log(result);

// let result1 = score.every(scores1 => {
//     return scores1 > 10;
// })

// console.log(result1);

// * findMap method

let cart = [
  {
    name: "mobile phone",
    qty: 2,
    price: 500,
  },
  {
    name: "tablet",
    qty: 1,
    price: 1000,
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "mobile phone") {
    return [
      item,
      {
        name: "screen protector",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});

console.log(newCart);



// let number = [1,2,3,4];

// let final = number.map(num => {
//   return num * num;
// })

// console.log(final);


// let fruit = ['apple', 'banana', 'orange']

// let capitalizeString = fruit.map(fruits => {
//   return fruits.charAt(0).toUpperCase() + fruits.slice(0);
// })

// console.log(capitalizeString);


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




// Map, Reduce, Filter


// Higher order function and also create a new array without modify the original array

// Map -> when you want to apply functions to all element inside array 
// Filter -> when you need to exclude some values from the array
// Reduce -> when you want to perform a cumulative operations in array or return a single value


// Q1. Fetch Products with price is less than 200
const products = [
  {id:1,name:'laptop',price:400},
  {id:2,name:'Phone',price:300},
  {id:3,name:'TV',price:600},
  {id:4,name:'Airbuds',price:100},
  {id:5,name:'Home theatre',price:150},
]

const filteredProducts = products.filter((product)=>{
  return product.price <200;
  // if(product.price<200){
  //     return product;
  // }
})

console.log("Filter products with price")
console.log(filteredProducts)


// Q2. Add 10% discount to all products
const updatePrice = products.map((product)=>{
  product.price = product.price + 0.1*product.price;
  return product;
})

console.log("\nAfter add 10% discount to all products")
console.log(updatePrice)

// Q3. Find total price of all products

// acc is total
// curr is product
const totalPrice = products.reduce((total,product)=>{

  console.log("Total:",total, " product: ",product);
  total = total + product.price;
  return total;
},0);

console.log("Total price is: ",totalPrice)

// Q4. Find total area of all rectangles

const rectanges = [
  {width:10,height:20},
  {width:20,height:40},
  {width:60,height:60},
  {width:10,height:10},
]

// acc totalArea
// curr is all rectange
const totalArea = rectanges.reduce((totalArea,rec)=>{
  console.log('Total Area',totalArea, " width: ",rec.width, " height: ",rec.height)
  totalArea = totalArea + rec.width*rec.height;
  return totalArea;
},0)

console.log("Area is: ",totalArea)