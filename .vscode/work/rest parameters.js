let a=1;
let b=2;
let c=3;
let d=4;
let e=5;


function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total
}
document.writeln(sum(a,b,e,))    
 