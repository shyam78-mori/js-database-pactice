
function findIndex(array,target){
    for(let i = 0; i<array.length;i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6,7];
console.log(findIndex(arr,4));