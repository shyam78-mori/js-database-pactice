class animal{
    constructor(name){
        this.name = name;
     }
        
     makeASound(){
        console.log("some generic sound");
     }
}

class dog extends animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    makeASound(){
        console.log("woof!, woof!");
    }
}

let myDog = new dog("whatsapp",'sddsd');
console.log(myDog);
