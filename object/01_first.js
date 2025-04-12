let obj = {
    name: 'shyam',
    surName: 'mori',
    age:19,
    address:{
        home:'ahmadabad',
        pinCode: 234234,
        city: 'ahmadabad',
        stat: 'gujarat',
    }
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.address.pinCode);
// console.log(obj.name);



// obj method use

let obj1 = {
    ageCalculate: function (birthday = 2005){
        let curentYeaar = 2025;
        let age = curentYeaar - birthday;
        return age;
    }
}

for (const key in obj1) {
    console.log(key);
    
}

console.log(`cureent year your is ${obj1.ageCalculate()}`);



 let detailPerson = {
    name : 'shyam',
    age : 19,
    address:{
        home:'ahmadabad',
        pinCode: 234234,
        city: 'ahmadabad',
        stat: 'gujarat',
    }
 }

 function getDetailPerson({name, age, address}){
    return name + ' ' + age + ' ' + address.home + ' '
 }
 console.log(getDetailPerson(detailPerson));