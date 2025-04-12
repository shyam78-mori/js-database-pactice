// making HTTP request (example)

let request = new XMLHttpRequest();     //-(1)
console.log(request);

// js me show hoo    -(4)

request.addEventListener("readystatechange",() => {
    // console.log(request,request.readyState);
     
    // JSON CODE        //-(5)
    if(request.readyState === 4 && request.status == 200){
        console.log(request,request.responseText);
    }
    
})



//(1) serer per request dale or response leke ana hai

// *set up request

request.open("Get", "https://jsonplaceholder.typicode.com/todos")       //-(2)

// use this link for practice to get JSON data in response
// https://jsonplaceholder.typicode.com/todos

// * send the request and check now insert network (select name - todo)
request.send()      //-(3)

// value    state   description
// 0       UNSENT   clint has been created, open() not called yet...
// 1       OPENED   open() has been called.. 
// 2       HEADERS_RECEIVED     send() has been called, and headers 
// 3       LOADING  downloading;    responseText hold partial data. 
// 4       DONE     the operation is complete. 



// HTTP response status codes       -(6)

// Information Response (100 - 199)
// Successful Response (200 - 299)
// Redirection Messages (300 - 399)
// Clint error Response (400 - 499)
// Server error responses (500 - 599)