function myTime(){
    console.log(`hello...`);
    
}

setTimeout(myTime,3000)

// myTime()


setTimeout(function hello(name){
    console.log(`my name is... ${name}`);
    
},4000,'shyam');