// call back function

let todo = (callBack) => {
  let request = new XMLHttpRequest();
  console.log(request);

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request,request.responseText);
      //   console.log(request.responseText);
      let data = JSON.parse(request.responseText);
      callBack(undefined, data);
      //   callBack(undefined, request.responseText);
    } else if (request.readyState == 4) {
      // console.log("data could not fetch");
      callBack("data could fot found", undefined);
    }
  });

  // set up the request
  request.open("get", "https://jsonplaceholder.typicode.com/todos");
  // request.open("GET","data.json");

  // sending the request
  request.send();
};

todo((error, data) => {
  // console.log("data is fire");
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// any one callBAck function

function greet(name, callBack) {
  console.log(`hello ${name}`);
  callBack();
}

function sayGoodBye() {
  console.log("good bye");
}

greet("shyam", sayGoodBye);


// ............
function arrayProcess(arr, callBAck) {
  for(let i = 0; i < arr.length; i++) {
    callBAck(arr[i]);
    }
}

function logValue(value){
  console.log(value);
}

const numbers = [1, 2, 3, 4, 5];
arrayProcess(numbers,logValue);



// /.............

function createAdder(x){
  return function(y){
    return x * y;
  }

}

const aa = createAdder(5)(4);
console.log(aa);
