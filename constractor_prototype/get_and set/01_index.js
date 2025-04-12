class all {
    constructor(color,model){
        this.color = color;
        this.model = model;
    }

    startEngin(){
        console.log("this is start engin method of car class");
    }

    get _startEngin(){
        console.log("this is get property is fun");
    }

    set changeColor(color){
        console.log(this.color = color);
    }
}

let honda1 = new all("yellow", 2025);
console.log(honda1);
// honda1.startEngin(); // acceding as function
honda1._startEngin; //acceding as property
honda1.changeColor = "red"
console.log(honda1);