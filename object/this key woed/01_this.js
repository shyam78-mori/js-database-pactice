let obj = {
    name: 'shyam',
    surName: 'mori',
    age: 19,
    ageAgreement: function(){
        return `my all details of the my name ${this.name}, surname ${this.surName} and my age ${this.age}.`
    }
}

console.log(obj.ageAgreement());
