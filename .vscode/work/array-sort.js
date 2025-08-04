let grades=[100,38,50,60,30];

function descendingsort(x,y){
    return y-x;
}
function ascendingsort(x,y){
    return x-y;
}

// let result=grades.sort(descendingsort);
let result=grades.sort(ascendingsort)

result.forEach(output);

function output(element){
    console.log(element)
}      