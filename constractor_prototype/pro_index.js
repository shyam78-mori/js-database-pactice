let heroPower = {
    thor: "hammer",
    spiderMen: "sling",
    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderMen}`);
    }
}

Object.prototype.shyam = function(){
    console.log(`shyam is present is all object`);
}

let arr = ["spider", "thor"]

arr.shyam();
// heroPower.shyam();


// let name = "Shyam mori      ";

// String.prototype.trueLength = function() {
//     console.log(this);
//     console.log(`true length is ${this.trim().length}`);
// }

// name.trueLength();

// "hello".trueLength();
// "hello guis".trueLength();


// ES6 declaration

