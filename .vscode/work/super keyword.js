class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age)
        this.runspeed=runspeed;
    }
}
class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed=swimspeed;
    }
}
class Sparrow extends Animal{
    constructor(name,age,flyspeed){
        super(name,age,)
        this.flyspeed=flyspeed;
    }
}

let rabbit=new Rabbit('rabbit','2',40);
let fish=new Fish('fish','1','32');
let sparrow= new Sparrow('sparrow','4',50);

document.writeln(rabbit.runspeed);
document.writeln(fish.name)
document.writeln(sparrow.age)