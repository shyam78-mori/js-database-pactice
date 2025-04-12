for (let i = 0; i <= 10; i++) {
    // if(i == 2){
    //     continue;
    // }
    if(i == 5){
        break;
    }
    console.log(`value ${i}`);
    
    
}

let password = "shyam@password";
if(password.length > 5 && password.includes('@')){
    console.log("your password strong...");
}else{
    console.log("password something wrong!");
}



let age = 18;
let result = age >= 18 ? 'you are eligible' : 'you are not eligible';
console.log(result);
