// let arr =(name) => {
//     console.log(`your name is ${name}`);

// }

// arr('shyam')

// let arr = (name) => {
//   // console.log(`your name is ${name}`);
//   let num = 10;
//   if (num >= 10 && num > 5) {
//     name(undefined,"code already run");
//   } else {
//     name("not run",undefined);
//   }
// };

// arr((error,data)=>{
//     if(error){
//         console.log("error");
//     }else{
//         console.log(data);
        
//     }
// })

// let upercase = function(str){
//     return str.toUpperCase();
// }

// let lowecase = function(str){
//     return str.toLowerCase();
// }

// let transfore = function(str,fun){
//     return fun(str);
// }

// console.log(transfore('hellow', upercase));


// function findIndex(array,target){
//     for(let i = 0; i<array.length;i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [1,2,3,4,5,6,7];
// console.log(findIndex(arr,4));


function arrayMultiply(array,n){
    let result = [];
    for(let i = 0; i<array.length;i++){
        result[i] = array[i]*n;
    }
    return result;
}

const newArray = arrayMultiply([2,4,6,8],2);
console.log(newArray);


// concat a string with rest permitee
function concatString(separator,...strings){
    return strings.join(separator);
}

const concatStr = concatString('_','apple','banana','orange','grapes')
const concatStr1 = concatString(' | ','apple','banana','orange','grapes')
console.log(concatStr);
console.log(concatStr1);





