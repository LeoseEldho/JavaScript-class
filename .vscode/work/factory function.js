function addfun(x){
    return function sum(y){
        return x+y;
    }
}

let xvalue=addfun(23);
let zvalue=addfun(50);

document.writeln(xvalue(2))
document.writeln(xvalue(5))
document.writeln(zvalue(10))