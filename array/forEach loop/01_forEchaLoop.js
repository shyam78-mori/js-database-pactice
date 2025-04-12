// Foreach Method

// Higher order function
// when you dont need to manage index manually

const colors = ['red','green','yellow','blue']

colors.forEach(function(color){
    console.log(color)
})


const number = [1,2,3,4,5]

number.forEach((num,index)=>{
    // console.log('Num: ',num,", index: ", index)
    console.log(num*2)
})

// Foreach vs For

// when you need to work with index then use for loop
// when you dont need to manage index manually then use foreach
// foreach - > simpler syntax and cleaner code 

// Foreach vs Map

const values = [2,3,4]
// multiply with 3
const newValues = values.map((val,index)=>{
    return val*3;
})

console.log(newValues)
values.forEach((val)=>console.log(val*3))

// Map -> create a new array without modify original array
// Map -> return that new array
 
// Foreach -> does not return anything
// So if you want to new array then use map otherwise use foreach



// When use foreach
// if you dont want to create another array or if you dont need to manage index manually



let arr = ['mango', 'apple', 'cheery', 'kevin', 'orange']

arr.forEach(myFunction = (element) => {
    console.log(element);
    
})

let arr2 = [{name:'shyam'},{surName:'mori'}]

arr2.forEach(secondFun = element => {
    console.log(element);
    
})





