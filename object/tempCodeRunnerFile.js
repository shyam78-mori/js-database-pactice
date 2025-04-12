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