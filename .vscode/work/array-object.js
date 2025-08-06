class car{
    constructor(model,color,year){
        this.model=model;
        this.color=color;
        this.year=year;
    }
    drive(){
        document.writeln(`You drive the ${this.model}`)
    }
}
let c1=new car('jeep','black',2000);
let c2=new car('lambo','yellow',2010);
let c3=new car('gtr','blue',2006);

let cars=[c1,c2,c3]

// document.writeln(cars[0].model)
// document.writeln(cars[1].model)

function race(cars){
    for(let element of cars){
        element.drive()
    }
}

race(cars)