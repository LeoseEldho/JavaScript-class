class car{
    constructor(model,color,year){
        this.model=model;
        this.color=color;
        this.year=year;
    }
}
let c1=new car('jeep','black',2000);
let c2=new car('lambo','yellow',2010);
let c3=new car('gtr','blue',2006);

function display(cars){
    document.writeln(cars.model);
    document.writeln(cars.color);
    document.writeln(cars.year)
}

function color(cars,color){
    cars.color=color;
}
function model(cars,model){
    cars.model=model;
}

color(c2, 'green')
color(c1, 'lc')
display(c1)
display(c2)
display(c3)