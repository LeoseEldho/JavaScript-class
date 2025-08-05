class Animal{
    alive=true;

    eating(){
        document.writeln(`this ${this.name} is eating`);
    }
    sleeping(){
        document.write(`this ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name='rabbit';
    run(){
        document.writeln(`this ${this.name} is running`);
    }
}
class Fish extends Animal{
    name='fish';
    swim(){
        document.writeln(`this ${this.name} swim faster`);
    }
}
class Sparrow extends Animal{
    name='sparrow';
    fly(){
        document.writeln(`this ${this.name} fly faster`)
    }
}
const rabbit=new Rabbit();
let fish=new Fish();
let sparrow=new Sparrow();

document.writeln(rabbit.alive) 
rabbit.eating()      
fish.swim()
sparrow.fly()
sparrow.eating()