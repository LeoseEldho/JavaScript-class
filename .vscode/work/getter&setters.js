class car{
    constructor(power){
        this._power=power;
        this._gas=25;
    }
    get power(){
        return `${this._power} hp <br>`
    }
    get gas(){
        return `${this._gas}L ${this._gas /50*100}%`;
    }
    set gas(value){
        if(value>50){
            value=50;
        }else if(value<0){
            value=0;
        }else{
            this._gas=value
        }
    }
}
let c1=new car(400);
c1.gas=49

document.writeln(c1.power)
document.writeln(c1.gas)