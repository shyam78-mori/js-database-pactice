function createAdder(x){
  return function(y){
    return x * y;
  }

}

const aa = createAdder(5)(4);
console.log(aa);